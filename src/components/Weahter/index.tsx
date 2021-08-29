import React from "react";
import { FC } from "react";
import style from "./index.module.less";

type WeatherProps = {
  temp: string;
  text: string;
  className?: string;
};

const Weather: FC<WeatherProps> = ({ temp, text, className }) => {
  return (
    <div className={`${style.weather} ${className}`}>
      <div className={style["weather__temp__wrap"]}>
        <div className={style["weahter__temp"]}>{temp}</div>
        <div className={style["weather__temp-symbol"]}>°C</div>
        <div className={style["weather__text"]}>{text} </div>
      </div>
      <div className={style["weather__city"]}>Guang Zhou</div>

      {/* <div className={style["weather__segmentation"]}>/</div> */}
    </div>
  );
};
export default Weather;
