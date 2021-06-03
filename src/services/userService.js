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

    addNotes(data){
        let url = baseURL+'notes/addNotes';
         return this.axios_service.post(url,data);
     }

     getAllNotes(){
        let url = baseURL+'notes/getNotesList';
        return this.axios_service.Get(url)
    }
    
}
export default new UserService();