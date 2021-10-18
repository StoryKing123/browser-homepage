import request from "./request";
export const querySuggestionRequest = async (keyword:string) => {
  return await request.get<null, Promise<any>>(
    `/baiduapi/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=34301,34333,34370,34145,34377,33848,34092,34111,26350,34319,22159,34390,34360&wd=${keyword}&bs=iterm%20%E6%8A%80%E5%B7%A7&csor=2&pwd=zf%20me123123&_=1628728146540`
  );
};
