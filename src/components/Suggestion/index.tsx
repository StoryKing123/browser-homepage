import React, { FC, useEffect, useRef, useState } from "react";
import style from "./index.module.less";

type SuggestionType = {
  sugList: any[];
  onUpdateSearchInput: Function;
  onHanldeSearch: Function;
};

const Suggestion: FC<SuggestionType> = ({
  sugList,
  onUpdateSearchInput,
  onHanldeSearch,
}) => {
  const [sugIndex, setSugIndex] = useState(-1);
  const sugIndexRef = useRef(sugIndex);

  const moveIndex = (index: number) => {
    index < 0 && (sugIndexRef.current = sugList.length - 1);
    index >= sugList.length && (sugIndexRef.current = 0);
    setSugIndex(sugIndexRef.current);
  };

  const hanldeUpdateSearchInput = (kw: string) => {
    onUpdateSearchInput(kw);
  };

  const handleSearch = (kw: string) => {
    onHanldeSearch(kw);
  };

  const handleListener = (e: KeyboardEvent) => {
    e.code === "ArrowDown" && moveIndex(sugIndexRef.current +=  1);
    e.code === "ArrowUp" && moveIndex(sugIndexRef.current -= 1);
  };

  useEffect(() => {
    hanldeUpdateSearchInput(sugList[sugIndex]?.q);
    sugIndexRef.current = sugIndex;
  }, [sugIndex]);
  useEffect(() => {
    window.addEventListener("keyup", handleListener);
    return () => {
      window.removeEventListener("keyup", handleListener);
    };
  }, []);
  // useEffect(() => {
  //   window.addEventListener("keyup", handleListener);
  //   return () => {
  //     window.removeEventListener("keyup", handleListener);
  //   };
  // }, [sugIndex]);
  return (
    <div className={style["sug__wrap"]}>
      {sugList.map((item: any, index) => (
        <div
          className={`${style["sug__item"]} ${
            index === sugIndex ? style["sug__item--active"] : ""
          }`}
          onClick={() => handleSearch(item.q)}
        >
          {item.q}
        </div>
      ))}
    </div>
  );
};

export default Suggestion;
