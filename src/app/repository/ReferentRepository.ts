import axios from "axios";
import {Referent, ReferentRequest} from "../model/Models";

export default class ReferentRepository {
    private baseUrl: string = "TODO";
    private token: string;

    constructor(token: string) {
        this.token = token
    }

    public getReferents(): Promise<Referent>
    {
        let endpoint: string = this.baseUrl + "/referents"
        return axios.get(
            endpoint,
            {
                headers: {

                }
            }
        )
    }

    public getReferentRequests(): Promise<ReferentRequest>
    {
      let endpoint: string = this.baseUrl + "/admin/referent/request"
        return axios.get(
          endpoint,
          {
            headers: {
              // Token ?
            }
          }
        )
    }

    public handleReferentRequest(referentRequest: ReferentRequest): void
    {
      let endpoint: string = this.baseUrl + "/admin/referent/request"
      axios.post(
        endpoint,
        {
          headers: {
            // Token ?
          },
          body: {

          }
        }
      )
    }




}
