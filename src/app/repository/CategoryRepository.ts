import {Category} from "../model/Models";
import axios from "axios";
import {DefaultRepository} from "./DefaultRepository";

export class CategoryRepository extends DefaultRepository{
  private baseUrl: string = "TODO";


  constructor() {
    super()
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

  public deleteCategory(category: Category): void {
    let endpoint: string = `${this.baseUrl}/categories/${category.id}`

    axios.delete(
      endpoint,
      {
        headers: {
          'Authorization': `Basic ${this.token}`
        }
      }
    )
  }



}
