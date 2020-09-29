import { axios } from "./axios";

class CommonApi {
    // 获取
    getList(param){
        return axios.get("/api/pub/v1/home/collect", {
            params: param,
        })
    }

    getIntroduce(param){
        return axios.get("/api/pub/v1/home/introduce", {
            params: param,
        })
    }

    getQrcode(param){
        return axios.get("/api/pub/v1/home/qrcode", {
            params: param,
            headers: {accept: "image/jpeg"}
        })
    }
    /** 我的推广 */
    getUserInfo(param){
        return axios.get("/api/pub/v1/user/info", {
            params: param,
        })
    }

    getTeamInfo(param){
        return axios.get("/api/pub/v1/user/team", param)
    }

    getTeamPost(param){
        return axios.get("/api/pub/v1/user/teamPost", {
            params: param,
        })
    }
    /** 所有的岗位*/
    getAllPositionList(param){
        // 获取职位列表
        return axios.post("/api/pub/v1/post/list", param)
    }
    
    getAPositionDetail(param){
        // 获取职位详情
        return axios.post("/api/pub/v1/post/detail", param)
    }
    
    submitApply(param){
        // 提交岗位申请
        return axios.post("/api/pub/v1/post/submit", param)
    }
}

 const instance = new CommonApi();
 export { instance as CommonApi };