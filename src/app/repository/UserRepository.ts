import axios from "axios";
import {User} from "../model/Models";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserRepository {
    private baseUrl: string = "TODO";
    private token: string;

    constructor(token: string) {
      this.token = token;
    }

    public getUser(): Promise<User> {
        let endpoint = this.baseUrl + "/user/" + this.token

        return axios.get(endpoint, {
            headers: {
              'Authorization': `Basic ${this.token}`
            }
        });
    }

    public getUsers(): Promise<Array<User>>
    {
      let endpoint = this.baseUrl + "/users/"

      return axios.get(endpoint, {
        headers: {
          'Authorization': `Basic ${this.token}`
        }
      });
    }

    public banUser(userId: string): void
    {
      let endpoint: string = `${this.baseUrl}/user/${userId}/ban`

      axios.patch(
        endpoint,
        {
          headers: {
            'Authorization': `Basic ${this.token}`
          }
        }
      ).catch((reason) => {
        console.error(reason)
        //Afficher une erreur pour l'utilisateur
      })


    }

    public restore(userId: string): void
    {
      let endpoint: string = `${this.baseUrl}/user/${userId}/restore`

      axios.patch(
        endpoint,
        {
          headers: {
            'Authorization': `Basic ${this.token}`
          }
        }
      ).catch((reason) => {
        console.error(reason)
        //Afficher une erreur pour l'utilisateur
      })
    }

}
