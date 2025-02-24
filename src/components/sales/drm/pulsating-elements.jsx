import React from "react";
import Image from "next/image";

const PulsatingBlocks = (props) => {
  return (
    <div className="pulsating-elements">
      <Image
        src="/animation.gif"
        alt="Pulsating animation"
        width={500}
        height={500}
        priority
        style={{ mixBlendMode: "multiply" }}
      />
    </div>
  );
};

export default PulsatingBlocks;
