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
  const sugListRef = useRef(sugList);

  const moveIndex = (index: number) => {
    // console.log(`length:${sugList.length}`);

    console.log(`before:${index}`);
    if (index < 0) {
      console.log("set last");

      index = sugListRef.current.length - 1;
      // sugIndexRef.current = sugList.length - 1;
    } else if (index >= sugListRef.current.length) {
      console.log("change 0");
      index = 0;
      // sugIndexRef.current = 0;
    } else {
      // sugIndexRef.current = index;
    }
    console.log(`index:${index}`);

    sugIndexRef.current = index;
    setSugIndex(index);
  };

  const hanldeUpdateSearchInput = (kw: string) => {
    onUpdateSearchInput(kw);
  };

  const handleSearch = (kw: string) => {
    onHanldeSearch(kw);
  };

  const handleListener = (e: KeyboardEvent) => {
    console.log(sugIndexRef);
    if (e.code === "ArrowDown") {
      e.preventDefault();

      moveIndex(sugIndexRef.current + 1);
    } else if (e.code === "ArrowUp") {
      e.preventDefault();
      moveIndex(sugIndexRef.current - 1);
    }
  };

  useEffect(() => {
    hanldeUpdateSearchInput(sugList[sugIndex]?.q);
    // sugIndexRef.current = sugIndex;
  }, [sugIndex]);
  useEffect(() => {
    sugListRef.current = sugList;
  }, [sugList]);
  useEffect(() => {
    window.addEventListener("keyup", handleListener);
    return () => {
      window.removeEventListener("keyup", handleListener);
    };
  }, []);
  return (
    <div className={style["sug__wrap"]}>
      {sugList.map((item: any, index) => (
        <div
          className={`${style["sug__item"]} ${
            index === sugIndex ? style["sug__item--active"] : ""
          }`}
          key={item.q}
          onClick={() => handleSearch(item.q)}
        >
          {item.q}
        </div>
      ))}
    </div>
  );
};

export default Suggestion;
