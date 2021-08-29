import React, {
  FC,
  MouseEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  ChangeEvent,
  useState,
} from "react";
import style from "./index.module.less";
import Suggestion from "@/components/Suggestion";
import {} from "@/services/request";
import { querySuggestionRequest } from "@/services/search";

type SearchProp = {
  className: string;
};
const Search: FC<SearchProp> = ({ className }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [sugList, setSugList] = useState([]);

  const handleSearchClick = (e: MouseEvent<HTMLButtonElement>) => {
    const value = inputRef.current?.value;
    window.location.href = `https://www.google.com/search?q=${value}`;
  };
  const handleSearch = (kw: string) => {
    handleSearchJump(kw);
  };
  const handleSearchJump = (value: string) => {
    const searchEngine = localStorage.getItem("searchEngine");

    const getSearchEngineUrl = () => {
      let result: string = "";
      searchEngine === "google" &&
        (result = `https://www.google.com/search?q=`);
      searchEngine === "baidu" && (result = `https://www.baidu.com/s?wd=`);
      return result;
    };
    window.location.href = `${getSearchEngineUrl()}${value}`;
  };

  const handleEnter = (e: any) => {
    if (e.keyCode !== 13) {
      return;
    }
    const value = inputRef.current?.value;
    handleSearchJump(value || "");
  };

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = inputRef.current?.value;
    const res = await querySuggestionRequest(value as string);
    setSugList(res.g ? res.g : []);
  };
  const handleUpdateSearchInput = (kw: string) => {
    kw && (inputRef.current!.value = kw);
  };

  useEffect(() => {
    inputRef.current?.addEventListener("keydown", handleEnter);
    inputRef.current?.focus();
    return () => {
      inputRef.current?.removeEventListener("keydown", handleEnter);
    };
  }, []);

  return (
    <div className={style.search}>
      <div className={`${style["search__input-row"]} ${className}`}>
        <input
          ref={inputRef}
          type="text"
          id="search-input"
          autoFocus
          className={style["search__input"]}
          onChange={handleInputChange}
          placeholder="搜索网页"
        />
        <button className={style["search__button"]} onClick={handleSearchClick}>
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2214"
            width="64"
            height="64"
          >
            <path
              d="M886.6 841.4L750.5 705.2c50.9-61 81.5-139.6 81.5-225.2 0-194.4-157.6-352-352-352S128 285.6 128 480s157.6 352 352 352c85.7 0 164.2-30.6 225.2-81.5l136.1 136.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.6-12.5 12.6-32.7 0.1-45.2zM683.7 683.7c-26.5 26.4-57.3 47.2-91.6 61.7-35.5 15-73.2 22.6-112.1 22.6-38.9 0-76.6-7.6-112.1-22.6-34.3-14.5-65.1-35.3-91.6-61.7-26.5-26.5-47.2-57.3-61.7-91.6-15-35.5-22.6-73.2-22.6-112.1 0-38.9 7.6-76.6 22.6-112.1 14.5-34.3 35.3-65.1 61.7-91.6 26.5-26.5 57.3-47.2 91.6-61.7 35.5-15 73.2-22.6 112.1-22.6 38.9 0 76.6 7.6 112.1 22.6 34.3 14.5 65.1 35.3 91.6 61.7 26.5 26.5 47.2 57.3 61.7 91.6 15 35.5 22.6 73.2 22.6 112.1 0 38.9-7.6 76.6-22.6 112.1-14.5 34.3-35.3 65.1-61.7 91.6z"
              fill="#1875F0"
              p-id="2215"
            ></path>
          </svg>
        </button>
      </div>
      <Suggestion
        onUpdateSearchInput={handleUpdateSearchInput}
        sugList={sugList}
        onHanldeSearch={handleSearch}
      ></Suggestion>
    </div>
  );
};

export default Search;
