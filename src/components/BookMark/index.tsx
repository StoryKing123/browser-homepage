import React, { FC, useEffect, useState } from 'react';
import style from './index.module.less';

declare type Bookmark = {
    title: string;
    icon: string;
    href: string;
    sort?: number;
};

const BookMark: FC = () => {
    const [bookmark, setBookmark] = useState<Bookmark[] | []>([]);
    useEffect(() => {
        setBookmark([
            {
                title: '百度',
                icon: 'https://www.ithome.com/favicon.ico',
                href: 'https://www.baidu.com',
            },
            {
                title: 'it之家',
                icon: 'https://www.ithome.com/favicon.ico',
                href: 'https://www.ithome.com',
            },
        ]);
    }, []);
    return (
        <div className={style['bookmark']}>
            {bookmark.map(item => {
                return (
                    <div
                        className={style['bookmark__item']}
                        onClick={() => {
                            window.open(item.href);
                        }}
                    >
                        <div className={style['bookmark__item__icon']}>
                            <img src={item.icon} alt="" />
                        </div>
                        <div>{item.title}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default BookMark;
