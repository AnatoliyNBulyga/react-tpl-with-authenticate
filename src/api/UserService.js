import axios from "axios";

export default class UserService {
    static async getUsers(){
        return axios.get('./data.json');
    }
}