import axios from "axios";
import {User} from "../model/Models";
import {LocalStorageService} from "../kernel/LocalStorageService";

export default class SecurityRepository {
    private baseUrl: string = "TODO";
    private storageService: LocalStorageService;

    constructor(storage: LocalStorageService) {
        this.storageService = storage;
    }

    public login(email: string, password: string): void {
        let endpoint: string = this.baseUrl + '/login'

        axios.post(endpoint, {
            headers: {
                'content-type': 'application/json'
            },
            body: {
                username: email,
                password: password
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

    public registerUser(user: User): void {

    }
}
