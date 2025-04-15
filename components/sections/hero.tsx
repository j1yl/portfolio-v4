"use client";

import React, { useEffect, useRef, useState } from "react";

const TEXT = "Joe—Lee";

const vertexShader = `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = vec2(position.x * 0.5 + 0.5, -position.y * 0.5 + 0.5);
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  uniform float time;
  uniform vec2 mouse;
  uniform vec2 resolution;
  uniform sampler2D tDiffuse;
  varying vec2 vUv;
  
  // Effect parameters
  #define EFFECT_RADIUS 0.08        // Radius of the effect (0.0 to 1.0)
  #define MAX_PIXEL_SIZE 0.001      // Maximum pixelation size
  #define MIN_PIXEL_SIZE 0.001      // Minimum pixelation size
  #define DISTORTION_STRENGTH 0.03   // Strength of the random offset
  #define COLOR_SHIFT_STRENGTH 0.01  // Strength of the color variation
  #define RIPPLE_STRENGTH 0.0005     // Strength of the ripple effect
  
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }
  
  float circle(vec2 uv, vec2 pos, float rad) {
    float d = length(uv - pos);
    return smoothstep(rad, rad - 0.1, d);
  }
  
  void main() {
    vec2 uv = vUv;
    float c = circle(uv, mouse, EFFECT_RADIUS);
    
    // Create ripple effect
    float ripple = sin(length(uv - mouse) * 20.0 - time * 5.0) * 0.5 + 0.5;
    ripple *= c;
    
    // Create pixelation effect with smoother transition
    float pixelSize = mix(MIN_PIXEL_SIZE, MAX_PIXEL_SIZE, smoothstep(0.0, 1.0, c));
    vec2 pixelatedUv = floor(uv / pixelSize) * pixelSize;
    
    // Add random offset based on time and position
    vec2 offset = vec2(
      random(pixelatedUv + time) * DISTORTION_STRENGTH * c,
      random(pixelatedUv - time) * DISTORTION_STRENGTH * c
    );
    
    // Sample texture with offset and pixelation
    vec4 color = texture2D(tDiffuse, uv + offset);
    vec4 pixelatedColor = texture2D(tDiffuse, pixelatedUv + offset);
    
    // Add some color variation
    vec3 colorShift = vec3(
      random(uv + time) * COLOR_SHIFT_STRENGTH,
      random(uv - time * 0.5) * COLOR_SHIFT_STRENGTH,
      random(uv + time * 0.7) * COLOR_SHIFT_STRENGTH
    ) * c;
    
    // Mix effects
    vec4 finalColor = mix(color, pixelatedColor, c * 0.8); // Reduced mix strength
    finalColor.rgb += colorShift;
    
    // Add subtle ripple distortion
    vec2 rippleOffset = vec2(
      sin(uv.y * 10.0 + time) * RIPPLE_STRENGTH * ripple,
      cos(uv.x * 10.0 + time) * RIPPLE_STRENGTH * ripple
    );
    vec4 rippleColor = texture2D(tDiffuse, uv + rippleOffset);
    
    gl_FragColor = mix(finalColor, rippleColor, ripple * 0.3); // Reduced ripple influence
  }
`;

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textCanvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const timeRef = useRef(0);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [fontSize, setFontSize] = useState(384); // Default font size

  useEffect(() => {
    const font = new FontFace("Geist", "url(/fonts/Geist-Black.woff2)");
    font
      .load()
      .then(() => {
        document.fonts.add(font);
        setFontLoaded(true);
      })
      .catch((err) => {
        console.error("Error loading font:", err);
      });
  }, []);

  // Calculate responsive font size based on container dimensions
  const calculateFontSize = (width: number, height: number) => {
    // Base the font size on the smaller dimension to ensure it fits
    const baseSize = Math.min(width, height);
    // Use a percentage of the container size (adjust as needed)
    return Math.floor(baseSize * 0.4);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const textCanvas = textCanvasRef.current;
    if (!canvas || !textCanvas || !fontLoaded) return;

    const gl = canvas.getContext("webgl", { alpha: false });
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);

      // Update text canvas size
      textCanvas.width = window.innerWidth * dpr;
      textCanvas.height = window.innerHeight * dpr;
      textCanvas.style.width = `${window.innerWidth}px`;
      textCanvas.style.height = `${window.innerHeight}px`;

      // Update font size based on new dimensions
      setFontSize(calculateFontSize(window.innerWidth, window.innerHeight));
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Set clear color to white
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    // Create shaders
    const vertexShaderObj = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vertexShaderObj, vertexShader);
    gl.compileShader(vertexShaderObj);

    const fragmentShaderObj = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fragmentShaderObj, fragmentShader);
    gl.compileShader(fragmentShaderObj);

    // Check for shader compilation errors
    if (!gl.getShaderParameter(vertexShaderObj, gl.COMPILE_STATUS)) {
      console.error(
        "Vertex shader compilation error:",
        gl.getShaderInfoLog(vertexShaderObj)
      );
      return;
    }
    if (!gl.getShaderParameter(fragmentShaderObj, gl.COMPILE_STATUS)) {
      console.error(
        "Fragment shader compilation error:",
        gl.getShaderInfoLog(fragmentShaderObj)
      );
      return;
    }

    // Create program
    const program = gl.createProgram()!;
    gl.attachShader(program, vertexShaderObj);
    gl.attachShader(program, fragmentShaderObj);
    gl.linkProgram(program);

    // Check for program linking errors
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Create buffer
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    // Get attributes and uniforms
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const timeUniform = gl.getUniformLocation(program, "time");
    const mouseUniform = gl.getUniformLocation(program, "mouse");
    const resolutionUniform = gl.getUniformLocation(program, "resolution");
    const textureUniform = gl.getUniformLocation(program, "tDiffuse");

    // Create texture
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    // Set initial uniforms
    gl.uniform2f(resolutionUniform, canvas.width, canvas.height);
    gl.uniform1i(textureUniform, 0);

    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseRef.current = { x, y };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      // Render text to texture
      const ctx = textCanvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, textCanvas.width, textCanvas.height);

        if (fontLoaded) {
          ctx.fillStyle = "black";
          ctx.font = `bold ${fontSize}px Geist`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.letterSpacing = "-0.07em";
          ctx.fillText(TEXT, textCanvas.width / 2, textCanvas.height / 2);
        }

        // Update texture
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          textCanvas
        );
      }

      gl.clear(gl.COLOR_BUFFER_BIT);
      timeRef.current += 0.01;
      gl.uniform1f(timeUniform, timeRef.current);
      gl.uniform2f(mouseUniform, mouseRef.current.x, mouseRef.current.y);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      gl.deleteProgram(program);
    };
  }, [fontLoaded, fontSize]);

  return (
    <div className="w-full h-screen relative bg-white">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <canvas
        ref={textCanvasRef}
        className="absolute inset-0 w-full h-full opacity-0"
      />
      <p className="absolute bottom-1/3 left-1/2 font-medium -translate-x-1/2 text-xs select-none pointer-events-none">
        [ Design + Software + Ventures ]
      </p>
    </div>
  );
}
