// import requestJSON from '@/api/http.js';
//
// /**
//  * @description 加载JSON文件
//  * @param { string } url
//  */
// export function getJSON(url) {
//     return requestJSON({
//         url
//     });
// }

/*
// 获取JSON数据
*/
import {getJson} from "@/api/http.js";

export function getH5StaticJson (data) {
    return getJson('/data.json')
}