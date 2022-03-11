import {Category} from "../model/Models";
import axios from "axios";
import {DefaultRepository} from "./DefaultRepository";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CategoryRepository extends DefaultRepository{

  constructor() {
    super()
  }

  public addCategory(name: string): void
  {
    let endpoint: string = `${this.baseUrl}/categories`
    axios.post(
      endpoint,
      {
        "name": name
      },
      {
        headers: {
          'uuid': `${this.token}`
        },
      }
    )
  }

  public listCategory(): Promise<Array<Category>> {
    let endpoint: string = `${this.baseUrl}/categories`

    return axios.get(
      endpoint,
      {
        headers: {
          'uuid': `${this.token}`
        }
      }
    )
  }

  public deleteCategory(category: Category): void {
    let endpoint: string = `${this.baseUrl}/categories/${category.id}`

    axios.delete(
      endpoint,
      {
        headers: {
          'uuid': `${this.token}`
        }
      }
    )
  }



}
