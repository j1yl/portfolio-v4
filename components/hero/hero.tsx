import React from "react";
import Banner from "./banner";

type Props = {};

export default function Hero({}: Props) {
  return <div className="bg-white h-screen w-full">
    <Banner />
  </div>;
}
