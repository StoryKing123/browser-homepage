import request from "./request";
type WeathreRes = {
  code: string;
  fxLink: string;
  now: {};
  refer: {};
  updateTime: string;
};
export const queryWeatherRequest = async () =>
  await request.get<null, Promise<WeathreRes>>(
    "https://devapi.qweather.com/v7/weather/now?key=ec3c6f7f986a4e138b94586173af3d1c&location=101280101"
  );

