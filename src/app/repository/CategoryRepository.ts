import {Category} from "../model/Models";
import axios from "axios";

export class CategoryRepository {
  private baseUrl: string = "TODO";
  private token: string;

  constructor(token: string) {
    this.token = token
  }

  public addCategory(category: Category): void
  {
    let endpoint: string = `${this.baseUrl}/categories`
    axios.post(
      endpoint,
      {category},
      {
        headers: {
          'Authorization': `Basic ${this.token}`
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
          'Authorization': `Basic ${this.token}`
        }
      }
    )
  }

  public renameCategory(category: Category): void {
    let endpoint: string = `${this.baseUrl}/categories/${category.id}`

    axios.put(
      endpoint,
      {category},
      {
        headers: {
          'Authorization': `Basic ${this.token}`
        }
      }
    )
  }



}
