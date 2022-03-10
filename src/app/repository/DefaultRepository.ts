import {environment} from "../../environments/environment";

export abstract class DefaultRepository{

  protected token: string;

  protected constructor() {
    this.token = environment.token
  }

}
