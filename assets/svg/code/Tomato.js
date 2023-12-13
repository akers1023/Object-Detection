import * as React from "react";
import Svg, { Path, Circle, G } from "react-native-svg";

function Tomato(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 504 504"
      xmlSpace="preserve"
      width="150px"
      height="150px"
      fill="#000"
      {...props}
    >
      <Path
        d="M235.2 66.4L208 75.2 185.6 33.6 201.6 22.4 210.4 29.6 206.4 5.6 243.2 0 245.6 19.2 252 13.6 252 66.4z"
        fill="#4dc430"
      />
      <Path
        d="M268.8 66.4L296 75.2 318.4 33.6 302.4 22.4 293.6 29.6 297.6 5.6 260.8 0 258.4 19.2 252 13.6 252 66.4z"
        fill="#3aad1a"
      />
      <Circle cx={252} cy={274.4} r={229.6} fill="#ff4800" />
      <Path
        d="M252 44.8c126.4 0 229.6 102.4 229.6 229.6C481.6 400.8 379.2 504 252 504"
        fill="#c92b00"
      />
      <Circle cx={252} cy={274.4} r={182.4} fill="#ff794a" />
      <Path
        d="M252 92c100.8 0 182.4 81.6 182.4 182.4S352.8 456.8 252 456.8"
        fill="#ef683f"
      />
      <Circle cx={252} cy={274.4} r={146.4} fill="#b21010" />
      <Path
        d="M252 128c80.8 0 146.4 65.6 146.4 146.4S332.8 420.8 252 420.8"
        fill="#a00000"
      />
      <Path d="M220 116H284V428H220z" fill="#ef683f" />
      <Path d="M220 116H252V428H220z" fill="#ff794a" />
      <Circle cx={252} cy={274.4} r={56} fill="#ff794a" />
      <Path
        d="M252 218.4c31.2 0 56 25.6 56 56 0 31.2-24.8 56-56 56"
        fill="#ef683f"
      />
      <G>
        <Path
          d="M169.6 205.6l28 15.2-8-32.8c-.8 0-1.6-2.4-2.4-4-4.8-6.4-13.6-6.4-19.2-2.4-6.4 4.8-7.2 13.6-2.4 20 .8 1.6 2.4 3.2 4 4zM149.6 255.2l32.8-.8-23.2-22.4c-1.6-1.6-3.2-2.4-4.8-3.2-7.2-3.2-15.2.8-18.4 8-2.4 7.2.8 15.2 8 18.4 1.6-.8 3.2 0 5.6 0zM158.4 312l24-22.4-32.8-1.6c-1.6 0-4 0-5.6.8-7.2 2.4-11.2 10.4-8 17.6 2.4 7.2 10.4 11.2 17.6 8 1.6 0 3.2-.8 4.8-2.4zM189.6 358.4l8-31.2-28 16c-1.6.8-3.2 2.4-4.8 4-4.8 6.4-3.2 15.2 2.4 19.2 6.4 4.8 15.2 3.2 19.2-2.4 2.4-1.6 3.2-4 3.2-5.6zM334.4 205.6l-28 15.2 8-32.8c.8 0 1.6-2.4 2.4-4 4.8-6.4 13.6-6.4 19.2-2.4 6.4 4.8 7.2 13.6 2.4 20-.8 1.6-2.4 3.2-4 4zM354.4 255.2l-32.8-.8 23.2-22.4c1.6-1.6 3.2-2.4 4.8-3.2 7.2-3.2 15.2.8 18.4 8 2.4 7.2-.8 15.2-8 18.4-1.6-.8-3.2 0-5.6 0zM345.6 312l-24-22.4 32.8-1.6c1.6 0 4 0 5.6.8 7.2 2.4 11.2 10.4 8 17.6-2.4 7.2-10.4 11.2-17.6 8-1.6 0-3.2-.8-4.8-2.4zM314.4 358.4l-8-31.2 28 16c1.6.8 3.2 2.4 4.8 4 4.8 6.4 3.2 15.2-2.4 19.2-6.4 4.8-15.2 3.2-19.2-2.4-2.4-1.6-3.2-4-3.2-5.6z"
          fill="#ffcd50"
        />
      </G>
    </Svg>
  );
}

export default Tomato;
