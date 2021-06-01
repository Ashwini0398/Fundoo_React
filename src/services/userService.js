import axios_service from '../services/axiosService';
import {baseURL} from './environment'

class UserService{

    constructor(){
        this.axios_service = new axios_service();
    }

    login(data){
       let url = baseURL+'user/login';
       return this.axios_service.post(url,data);
    }

    register(data){
       let url = baseURL+'user/userSignUp';
        return this.axios_service.post(url,data);
    }
    
}
export default new UserService();