import axios from "axios";
import {User} from "../model/Models";
import {LocalStorageService} from "../kernel/LocalStorageService";

export default class SecurityRepository {
    private baseUrl: string = "TODO";
    private storageService: LocalStorageService;

    constructor(storage: LocalStorageService) {
        this.storageService = storage;
    }

    public login(user: User): void {
        let loginUrl: string = this.baseUrl + '/login'

        axios.post(loginUrl, {
            headers: {
                'content-type': 'application/json'
            },
            body: {
                username: user.username,
                password: user.password
            }
        }).then((response) => {
            let token = response.data;
            this.storageService.setToken(token);
            // /user + token
            // TODO : stocker dans le localStorage
        }).catch((reason => {
            console.error(reason);
        }))
    }
}
