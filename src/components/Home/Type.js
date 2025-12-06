import React from "react";
import Typewriter from "typewriter-effect";
import { personalData } from "../../data/personalData";

function Type() {
  return (
    <Typewriter
      options={{
        strings: personalData.roles,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
