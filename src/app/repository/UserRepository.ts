import axios from "axios";
import {User} from "../model/Models";
import {DefaultRepository} from "./DefaultRepository";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserRepository extends DefaultRepository{

    constructor() {
      super()
    }

    public getUser(): Promise<User> {
        let endpoint = this.baseUrl + "/user/" + this.token

        return axios.get(endpoint, {
            headers: {
              'uuid': `${this.token}`
            }
        });
    }

    public getUsers(): Promise<Array<User>>
    {
      let endpoint = this.baseUrl + "/users/"

      return axios.get(endpoint, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then((response) => {
        return response.data
      })
    }

    public banUser(userId: string): void
    {
      let endpoint: string = `${this.baseUrl}/user/${userId}/ban`

      axios.patch(
        endpoint,
        {
          headers: {
            'uuid': `${this.token}`
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
            'uuid': `${this.token}`
          }
        }
      ).catch((reason) => {
        console.error(reason)
        //Afficher une erreur pour l'utilisateur
      })
    }

}
