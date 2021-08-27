import React, { FC, useState, MouseEvent, useEffect } from "react";
import SettingIcon from "@/assets/svg/Setting";
import style from "./index.module.less";
import GoogleIcon from "@/assets/svg/Google";
import BaiduIcon from "@/assets/svg/Baidu";

type EngineType = "baidu" | "google";

const Setting: FC = () => {
  const [isShowSetting, setIsShowSetting] = useState(false);
  const handleSettingClick = (e: MouseEvent<HTMLElement>) => {
    setIsShowSetting(!isShowSetting);
  };
  const [searchEngine, setSearchEngine] = useState<EngineType>();

  const handleInit = () => {
    const engineStorage = localStorage.getItem("searchEngine");
    if (engineStorage !== "undefined" && engineStorage) {
      setSearchEngine(localStorage.getItem("searchEngine") as EngineType);
    } else {
      localStorage.setItem("searchEngine", "baidu");
    }
  };

  const handleUpdateSearchEngine = (engine: EngineType) => {
    setSearchEngine(engine);
    localStorage.setItem("searchEngine", engine);
  };

  useEffect(() => {
    handleInit();
  }, []);
  return (
    <div className={style.setting}>
      <div onClick={handleSettingClick} className={style["setting__icon"]}>
        <SettingIcon height={32} width={32}></SettingIcon>
      </div>
      {isShowSetting && (
        <div className={style["setting__panel"]}>
          <div className={style["search-engine"]}>搜索引擎</div>
          <div
            className={style["search-engine__item"]}
            onClick={() => handleUpdateSearchEngine("baidu")}
          >
            <BaiduIcon
              height={32}
              width={32}
              isGray={searchEngine === "baidu" ? false : true}
            ></BaiduIcon>

            <span className={style["search-engine__name"]}> 百度</span>
          </div>
          <div
            className={style["search-engine__item"]}
            onClick={() => handleUpdateSearchEngine("google")}
          >
            {" "}
            <GoogleIcon
              height={32}
              width={32}
              isGray={searchEngine === "google" ? false : true}
            ></GoogleIcon>{" "}
            <span className={style["search-engine__name"]}>Google</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Setting;
