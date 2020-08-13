import { axios } from "./axios";

class CommonApi {
    // 获取
    getList(param){
        return axios.post("sys/sdjkf", param)
    }
}

 const instance = new CommonApi();
 export { instance as CommonApi };