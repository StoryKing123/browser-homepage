import React, { FC, useEffect, useState } from 'react';
import style from './index.module.less';
import { queryBackgroundImgRequest } from '@/services/img';

const BackgroundImg: FC = () => {
    const [imgUrl, setImgUrl] = useState('');
    const handleInit = async () => {
        if (localStorage.getItem('imgCache')) {
            setImgUrl(localStorage.getItem('imgCache') as string);
            localStorage.removeItem('imgCache');
        } else {
            setImgUrl('https://source.unsplash.com/1920x1080');
        }
        const cacheRes = await queryBackgroundImgRequest();
        if (cacheRes.status === 200) {
            localStorage.setItem('imgCache', cacheRes.request.responseURL);
        }
    };
    useEffect(() => {
        handleInit();
    }, []);
    return (
        <img
            className={style['background-img__bg']}
            style={{ content: `url(${imgUrl})` }}
        ></img>
    );
};

export default BackgroundImg;
