import axios from "axios";
import {User} from "../model/Models";

export default class UserRepository {
    private baseUrl: string = "TODO";
    private token: string;

    constructor(token: string) {
      this.token = token
    }
    public getUser(): Promise<User> {
        let endpoint = this.baseUrl + "/user/" + this.token

        return axios.get(endpoint, {
            headers: {}
        });
    }

}
