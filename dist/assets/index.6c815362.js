var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n;import{a as c,R as l,r as s,b as i,B as o,S as m,c as d}from"./vendor.037520fd.js";var p={container:"_container_erxnf_1",container__bg:"_container__bg_erxnf_8","weather-wrap":"_weather-wrap_erxnf_16","setting-wrap":"_setting-wrap_erxnf_21"};const h=c.create();h.interceptors.response.use((e=>200===e.status&&e.data));var _={weather:"_weather_cnh7k_1","weather__temp-symbol":"_weather__temp-symbol_cnh7k_9",weather__text:"_weather__text_cnh7k_16"};const u=({temp:e,text:t,className:a})=>l.createElement("div",{className:`${_.weather} ${a}`},l.createElement("div",{className:_.weahter__temp},e),l.createElement("div",{className:_["weather__temp-symbol"]},"°C"),l.createElement("div",{className:_.weather__text},t," "));var w={"search__input-row":"_search__input-row_s4u1k_1",search__input:"_search__input_s4u1k_1",search__button:"_search__button_s4u1k_20"};var g="_sug__wrap_ootu9_1",E="_sug__item_ootu9_6",F="_sug__item--active_ootu9_14";const f=({sugList:e,onUpdateSearchInput:t,onHanldeSearch:a})=>{const[n,r]=s.exports.useState(-1),c=s.exports.useRef(n),i=t=>{t<0&&(c.current=e.length-1),t>=e.length&&(c.current=0),r(c.current)},o=e=>{"ArrowDown"===e.code&&i(c.current+=1),"ArrowUp"===e.code&&i(c.current-=1)};return s.exports.useEffect((()=>{var a,r;r=null==(a=e[n])?void 0:a.q,t(r),c.current=n}),[n]),s.exports.useEffect((()=>(window.addEventListener("keyup",o),()=>{window.removeEventListener("keyup",o)})),[]),l.createElement("div",{className:g},e.map(((e,t)=>l.createElement("div",{className:`${E} ${t===n?F:""}`,onClick:()=>{return t=e.q,void a(t);var t}},e.q))))},v=({className:e})=>{const t=s.exports.useRef(null),[a,n]=s.exports.useState([]),r=e=>{const t=localStorage.getItem("searchEngine");window.location.href=`${(()=>{let e="";return"google"===t&&(e="https://www.google.com/search?q="),"baidu"===t&&(e="https://www.baidu.com/s?wd="),e})()}${e}`},c=e=>{var a;if(13!==e.keyCode)return;const n=null==(a=t.current)?void 0:a.value;r(n||"")};return s.exports.useEffect((()=>{var e,a;return null==(e=t.current)||e.addEventListener("keydown",c),null==(a=t.current)||a.focus(),()=>{var e;null==(e=t.current)||e.removeEventListener("keydown",c)}}),[]),l.createElement("div",{className:w.search},l.createElement("div",{className:`${w["search__input-row"]} ${e}`},l.createElement("input",{ref:t,type:"text",id:"search-input",autoFocus:!0,className:w.search__input,onChange:async e=>{var a;const r=null==(a=t.current)?void 0:a.value,c=await(async e=>await h.get(`https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=34301,34333,34370,34145,34377,33848,34092,34111,26350,34319,22159,34390,34360&wd=${e}&bs=iterm%20%E6%8A%80%E5%B7%A7&csor=2&pwd=zf%20me123123&_=1628728146540`))(r);n(c.g?c.g:[])},placeholder:"搜索网页"}),l.createElement("button",{className:w.search__button,onClick:e=>{var a;const n=null==(a=t.current)?void 0:a.value;window.location.href=`https://www.google.com/search?q=${n}`}},l.createElement("svg",{className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2214",width:"64",height:"64"},l.createElement("path",{d:"M886.6 841.4L750.5 705.2c50.9-61 81.5-139.6 81.5-225.2 0-194.4-157.6-352-352-352S128 285.6 128 480s157.6 352 352 352c85.7 0 164.2-30.6 225.2-81.5l136.1 136.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.6-12.5 12.6-32.7 0.1-45.2zM683.7 683.7c-26.5 26.4-57.3 47.2-91.6 61.7-35.5 15-73.2 22.6-112.1 22.6-38.9 0-76.6-7.6-112.1-22.6-34.3-14.5-65.1-35.3-91.6-61.7-26.5-26.5-47.2-57.3-61.7-91.6-15-35.5-22.6-73.2-22.6-112.1 0-38.9 7.6-76.6 22.6-112.1 14.5-34.3 35.3-65.1 61.7-91.6 26.5-26.5 57.3-47.2 91.6-61.7 35.5-15 73.2-22.6 112.1-22.6 38.9 0 76.6 7.6 112.1 22.6 34.3 14.5 65.1 35.3 91.6 61.7 26.5 26.5 47.2 57.3 61.7 91.6 15 35.5 22.6 73.2 22.6 112.1 0 38.9-7.6 76.6-22.6 112.1-14.5 34.3-35.3 65.1-61.7 91.6z",fill:"#1875F0","p-id":"2215"})))),l.createElement(f,{onUpdateSearchInput:e=>{e&&(t.current.value=e)},sugList:a,onHanldeSearch:e=>{r(e)}}))},x=({height:e,width:t,onClick:a})=>l.createElement("svg",{className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:e,onClick:()=>{a&&a()},"p-id":"1256"},l.createElement("path",{d:"M512 362.730667A149.269333 149.269333 0 1 0 661.269333 512 149.44 149.44 0 0 0 512 362.730667z m0 255.893333A106.624 106.624 0 1 1 618.624 512 106.752 106.752 0 0 1 512 618.624z",fill:"#ffffff","p-id":"1257"}),l.createElement("path",{d:"M858.090667 554.602667a53.866667 53.866667 0 0 1 0-85.205334 96.448 96.448 0 0 0-71.232-172.010666 53.824 53.824 0 0 1-60.245334-60.245334 96.448 96.448 0 0 0-172.010666-71.253333 55.509333 55.509333 0 0 1-85.205334 0 96.448 96.448 0 0 0-172.010666 71.253333 53.824 53.824 0 0 1-60.245334 60.245334 96.448 96.448 0 0 0-71.253333 172.010666 53.866667 53.866667 0 0 1 0 85.205334 96.448 96.448 0 0 0 71.253333 172.010666 53.824 53.824 0 0 1 60.245334 60.245334 94.336 94.336 0 0 0 58.773333 101.397333A99.605333 99.605333 0 0 0 394.24 896a94.357333 94.357333 0 0 0 75.157333-37.909333 55.509333 55.509333 0 0 1 85.205334 0 96.448 96.448 0 0 0 172.010666-71.253334 53.824 53.824 0 0 1 60.245334-60.224 96.448 96.448 0 0 0 71.253333-172.010666z m-9.258667 96.917333a52.309333 52.309333 0 0 1-56.554667 32.768 96.512 96.512 0 0 0-107.968 107.989333A53.824 53.824 0 0 1 588.352 832a99.413333 99.413333 0 0 0-152.682667 0 53.824 53.824 0 0 1-95.957333-39.744 96.533333 96.533333 0 0 0-95.509333-108.778667 100.885333 100.885333 0 0 0-12.48 0.789334A53.824 53.824 0 0 1 192 588.330667a96.490667 96.490667 0 0 0 0-152.682667 53.824 53.824 0 0 1 39.744-95.957333 96.512 96.512 0 0 0 107.968-107.946667 53.824 53.824 0 0 1 95.978667-39.765333 99.413333 99.413333 0 0 0 152.682666 0 53.824 53.824 0 0 1 95.957334 39.744 96.512 96.512 0 0 0 107.946666 107.968 53.824 53.824 0 0 1 39.765334 95.957333 96.490667 96.490667 0 0 0 0 152.682667 52.053333 52.053333 0 0 1 16.810666 63.189333z",fill:"#ffffff","p-id":"1258"}));var N={setting:"_setting_j0f5a_1",setting__panel:"_setting__panel_j0f5a_7","search-engine":"_search-engine_j0f5a_12","search-engine__item":"_search-engine__item_j0f5a_16","search-engine__name":"_search-engine__name_j0f5a_21"};const b=({isGray:e,width:t,height:a,onClick:n})=>l.createElement("div",null,l.createElement("svg",{className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2890",width:t,height:a,onClick:()=>{n&&n()}},e&&l.createElement(s.exports.Fragment,null,l.createElement("path",{d:"M0 512C0 229.226667 229.226667 0 512 0s512 229.226667 512 512-229.226667 512-512 512S0 794.773333 0 512z",fill:"#FFFFFF","p-id":"2891","data-spm-anchor-id":"a313x.7781069.0.i5",className:""}),l.createElement("path",{d:"M512 375.914667c41.664 0 69.76 18.005333 85.781333 33.045333l62.613334-61.141333C621.952 312.064 571.904 290.133333 512 290.133333c-86.784 0-161.706667 49.792-198.208 122.282667l71.744 55.701333c18.005333-53.482667 67.797333-92.202667 126.464-92.202666z",fill:"#8a8a8a","p-id":"2892","data-spm-anchor-id":"a313x.7781069.0.i3",className:"selected"}),l.createElement("path",{d:"M724.992 516.928c0-18.24-1.472-31.552-4.693333-45.354667H512v82.325334h122.282667c-2.474667 20.48-15.786667 51.285333-45.376 72l70.016 54.229333c41.92-38.698667 66.069333-95.658667 66.069333-163.2z",fill:"#8a8a8a","p-id":"2893","data-spm-anchor-id":"a313x.7781069.0.i6",className:"selected"}),l.createElement("path",{d:"M385.792 555.882667A136.384 136.384 0 0 1 378.389333 512c0-15.274667 2.709333-30.08 7.146667-43.882667l-71.744-55.701333A221.909333 221.909333 0 0 0 290.133333 512c0 35.754667 8.618667 69.525333 23.658667 99.584l72-55.701333z",fill:"#8a8a8a","p-id":"2894","data-spm-anchor-id":"a313x.7781069.0.i4",className:"selected"}),l.createElement("path",{d:"M512 733.866667c59.904 0 110.186667-19.712 146.922667-53.738667l-70.016-54.229333c-18.730667 13.056-43.882667 22.186667-76.906667 22.186666-58.666667 0-108.458667-38.72-126.208-92.202666l-71.744 55.701333C350.528 684.074667 425.216 733.866667 512 733.866667z",fill:"#8a8a8a","p-id":"2895","data-spm-anchor-id":"a313x.7781069.0.i7",className:"selected"})),!e&&l.createElement(s.exports.Fragment,null,l.createElement("path",{d:"M0 512C0 229.226667 229.226667 0 512 0s512 229.226667 512 512-229.226667 512-512 512S0 794.773333 0 512z",fill:"#FFFFFF","p-id":"3644"}),l.createElement("path",{d:"M512 375.914667c41.664 0 69.76 18.005333 85.781333 33.045333l62.613334-61.141333C621.952 312.064 571.904 290.133333 512 290.133333c-86.784 0-161.706667 49.792-198.208 122.282667l71.744 55.701333c18.005333-53.482667 67.797333-92.202667 126.464-92.202666z",fill:"#EA4335","p-id":"3645"}),l.createElement("path",{d:"M724.992 516.928c0-18.24-1.472-31.552-4.693333-45.354667H512v82.325334h122.282667c-2.474667 20.48-15.786667 51.285333-45.376 72l70.016 54.229333c41.92-38.698667 66.069333-95.658667 66.069333-163.2z",fill:"#4285F4","p-id":"3646"}),l.createElement("path",{d:"M385.792 555.882667A136.384 136.384 0 0 1 378.389333 512c0-15.274667 2.709333-30.08 7.146667-43.882667l-71.744-55.701333A221.909333 221.909333 0 0 0 290.133333 512c0 35.754667 8.618667 69.525333 23.658667 99.584l72-55.701333z",fill:"#FBBC05","p-id":"3647"}),l.createElement("path",{d:"M512 733.866667c59.904 0 110.186667-19.712 146.922667-53.738667l-70.016-54.229333c-18.730667 13.056-43.882667 22.186667-76.906667 22.186666-58.666667 0-108.458667-38.72-126.208-92.202666l-71.744 55.701333C350.528 684.074667 425.216 733.866667 512 733.866667z",fill:"#34A853","p-id":"3648"})))),y=({isGray:e,width:t,height:a,onClick:n})=>l.createElement("div",null,l.createElement("svg",{className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2470",width:t,height:a,onClick:()=>{n&&n()}},e&&l.createElement(s.exports.Fragment,null,l.createElement("path",{d:"M544.059897 959.266898h-64.949141c-228.633593 0-415.697442-187.063849-415.697442-415.697442v-64.949141c0-228.633593 187.063849-415.697442 415.697442-415.697442h64.949141c228.633593 0 415.697442 187.063849 415.697442 415.697442v64.949141C959.756315 772.203049 772.692466 959.266898 544.059897 959.266898z",fill:"#8a8a8a","p-id":"1197","data-spm-anchor-id":"a313x.7781069.0.i1",className:"selected"}),l.createElement("path",{d:"M440.242021 484.329499c-18.555874 26.287232-49.924648 72.898587-101.39434 108.243109-34.903227 24.078711-33.136001 83.059625-18.555874 112.881309 14.580127 29.821684 62.957685 52.133169 113.764923 41.529813 50.587102-10.824516 74.444654-21.648007 137.402339-3.092134 62.957685 18.334715 113.544787 5.301678 134.309181-38.437679 20.765418-43.739357-3.093158-93.662982-42.192267-119.0666-39.100133-25.403619-65.166205-69.142976-89.90737-106.696018C549.368743 442.136209 484.202537 422.917881 440.242021 484.329499z",fill:"#FFFFFF","p-id":"1198"}),l.createElement("path",{d:"M280.529221 437.496984a75.328267 59.202073 90 1 0 118.404146 0 75.328267 59.202073 90 1 0-118.404146 0Z",fill:"#FFFFFF","p-id":"1199"}),l.createElement("path",{d:"M394.515302 320.638904a75.328267 59.202073 90 1 0 118.404147 0 75.328267 59.202073 90 1 0-118.404147 0Z",fill:"#FFFFFF","p-id":"1200"}),l.createElement("path",{d:"M541.195066 332.125874a75.328267 59.202073 90 1 0 118.404147 0 75.328267 59.202073 90 1 0-118.404147 0Z",fill:"#FFFFFF","p-id":"1201"}),l.createElement("path",{d:"M625.603148 477.259571a75.328267 59.202073 90 1 0 118.404147 0 75.328267 59.202073 90 1 0-118.404147 0Z",fill:"#FFFFFF","p-id":"1202"})),!e&&l.createElement(s.exports.Fragment,null,l.createElement("path",{d:"M544.059897 959.266898h-64.949141c-228.633593 0-415.697442-187.063849-415.697442-415.697442v-64.949141c0-228.633593 187.063849-415.697442 415.697442-415.697442h64.949141c228.633593 0 415.697442 187.063849 415.697442 415.697442v64.949141C959.756315 772.203049 772.692466 959.266898 544.059897 959.266898z",fill:"#1D2FE3","p-id":"1197"}),l.createElement("path",{d:"M440.242021 484.329499c-18.555874 26.287232-49.924648 72.898587-101.39434 108.243109-34.903227 24.078711-33.136001 83.059625-18.555874 112.881309 14.580127 29.821684 62.957685 52.133169 113.764923 41.529813 50.587102-10.824516 74.444654-21.648007 137.402339-3.092134 62.957685 18.334715 113.544787 5.301678 134.309181-38.437679 20.765418-43.739357-3.093158-93.662982-42.192267-119.0666-39.100133-25.403619-65.166205-69.142976-89.90737-106.696018C549.368743 442.136209 484.202537 422.917881 440.242021 484.329499z",fill:"#FFFFFF","p-id":"1198"}),l.createElement("path",{d:"M280.529221 437.496984a75.328267 59.202073 90 1 0 118.404146 0 75.328267 59.202073 90 1 0-118.404146 0Z",fill:"#FFFFFF","p-id":"1199"}),l.createElement("path",{d:"M394.515302 320.638904a75.328267 59.202073 90 1 0 118.404147 0 75.328267 59.202073 90 1 0-118.404147 0Z",fill:"#FFFFFF","p-id":"1200"}),l.createElement("path",{d:"M541.195066 332.125874a75.328267 59.202073 90 1 0 118.404147 0 75.328267 59.202073 90 1 0-118.404147 0Z",fill:"#FFFFFF","p-id":"1201"}),l.createElement("path",{d:"M625.603148 477.259571a75.328267 59.202073 90 1 0 118.404147 0 75.328267 59.202073 90 1 0-118.404147 0Z",fill:"#FFFFFF","p-id":"1202"})))),M=()=>{const[e,t]=s.exports.useState(!1),[a,n]=s.exports.useState(),r=e=>{n(e),localStorage.setItem("searchEngine",e)};return s.exports.useEffect((()=>{(()=>{const e=localStorage.getItem("searchEngine");"undefined"!==e&&e?n(localStorage.getItem("searchEngine")):localStorage.setItem("searchEngine","baidu")})()}),[]),l.createElement("div",{className:N.setting},l.createElement("div",{onClick:a=>{t(!e)},className:N.setting__icon},l.createElement(x,{height:32,width:32})),e&&l.createElement("div",{className:N.setting__panel},l.createElement("div",{className:N["search-engine"]},"搜索引擎"),l.createElement("div",{className:N["search-engine__item"],onClick:()=>r("baidu")},l.createElement(y,{height:32,width:32,isGray:"baidu"!==a}),l.createElement("span",{className:N["search-engine__name"]}," 百度")),l.createElement("div",{className:N["search-engine__item"],onClick:()=>r("google")}," ",l.createElement(b,{height:32,width:32,isGray:"google"!==a})," ",l.createElement("span",{className:N["search-engine__name"]},"Google"))))};var C={routes:[{path:"/",component:()=>{const[e,t]=s.exports.useState({}),a=async()=>{const e=await(async()=>await h.get("https://devapi.qweather.com/v7/weather/now?key=ec3c6f7f986a4e138b94586173af3d1c&location=101280101"))();t(e.now)};return s.exports.useEffect((()=>{a()}),[]),l.createElement("div",{className:p.container},l.createElement("img",{className:p.container__bg}),l.createElement("div",{className:p["weather-wrap"]},l.createElement(u,{temp:e.temp,text:e.text}," ")),l.createElement(v,{className:p["search-wrap"]}),l.createElement("div",{className:p["setting-wrap"]},l.createElement(M,null)))}}]};i.render(l.createElement(l.StrictMode,null,l.createElement(o,null,l.createElement(m,null,C.routes.map((e=>l.createElement(d,((e,c)=>{for(var l in c||(c={}))a.call(c,l)&&r(e,l,c[l]);if(t)for(var l of t(c))n.call(c,l)&&r(e,l,c[l]);return e})({key:e.path},e))))))),document.getElementById("root"));
