import React, { FC, useEffect, useRef, useState } from 'react';
import style from './index.module.less';

type SuggestionType = {
    sugList: any[];
    onUpdateSearchInput: Function;
    onHanldeSearch: Function;
};

const Suggestion: FC<SuggestionType> = ({ sugList, onUpdateSearchInput, onHanldeSearch }) => {
    const [sugIndex, setSugIndex] = useState(-1);
    const sugListRef = useRef(sugList);

    const moveIndex = (moverOffset: number) => {
        setSugIndex(sugIndex => {
            const newSugIndex = sugIndex + moverOffset;

            if (newSugIndex < 0) {
                return sugListRef.current.length - 1;
            } else if (newSugIndex >= sugListRef.current.length) {
                return 0;
            } else {
                return newSugIndex;
            }
            // return 1;
        });
    };

    const hanldeUpdateSearchInput = (kw: string) => {
        onUpdateSearchInput(kw);
    };

    const handleSearch = (kw: string) => {
        onHanldeSearch(kw);
    };

    const handleListener = (e: KeyboardEvent) => {
        if (e.code === 'ArrowDown') {
            e.preventDefault();

            moveIndex(1);
        } else if (e.code === 'ArrowUp') {
            e.preventDefault();
            moveIndex(-1);
        }
    };

    useEffect(() => {
        hanldeUpdateSearchInput(sugList[sugIndex]?.q);
    }, [sugIndex]);
    useEffect(() => {
        sugListRef.current = sugList;
    }, [sugList]);
    useEffect(() => {
        window.addEventListener('keyup', handleListener);
        return () => {
            window.removeEventListener('keyup', handleListener);
        };
    }, []);
    return (
        <div className={style['sug__wrap']}>
            {sugList.map((item: any, index) => (
                <div
                    className={`${style['sug__item']} ${
                        index === sugIndex ? style['sug__item--active'] : ''
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
