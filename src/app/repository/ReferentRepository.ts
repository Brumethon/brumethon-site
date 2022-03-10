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

    }

    public handleReferentRequest(): Promise<>
    {

    }




}
