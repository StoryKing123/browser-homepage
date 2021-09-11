import React, { FC, useEffect, useState } from 'react';
import style from './index.module.less';
import { queryWeatherRequest } from '../../services/weather';
import Weahter from '../../components/Weahter';
import Search from '@/components/Search';
import Setting from '@/components/Setting';
import BackgroundImg from '@/components/BackgroundImg';

const Index: FC = () => {
    const [weather, setWeather] = useState<any>({});
    const initWeatherInfo = async () => {
        const res = await queryWeatherRequest();
        setWeather(res.now);
    };

    useEffect(() => {
        initWeatherInfo();
    }, []);

    return (
        <div className={style.container}>
            <BackgroundImg />
            {/* <img className={style['container__bg']}></img> */}
            <div className={style['weather-wrap']}>
                <Weahter temp={weather.temp} text={weather.text}>
                    {' '}
                </Weahter>
            </div>

            <Search className={style['search-wrap']}></Search>

            <div className={style['setting-wrap']}>
                <Setting></Setting>
            </div>
        </div>
    );
    //   return <div></div>;
};

export default Index;
