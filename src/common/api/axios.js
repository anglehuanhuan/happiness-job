import axios from "axios";
import { Toast } from "antd-mobile";
const DEFAULT_TIMEOUT = 300*1000;

const INSTANCE = axios.create({
    baseURL: "/",
    timeout: DEFAULT_TIMEOUT,
    responseType: "json",
    header: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});
INSTANCE.interceptors.request.use(
    request => {
        return request;
    },
    error => {
        console.log(error)
    }
)

INSTANCE.interceptors.response.use(
    response => {
        if(response.status !== 200){
            throw new Error(response.statusText);
        }
        if(response.data){
            if(response.data.code !== 200){
                Toast.fail(response.data.msg);
                throw new Error(response.data.msg);
            }
            return response.data.data;
        }
        return response;
    },
    error => {
        console.log(error);
    }
)
export { INSTANCE as axios };