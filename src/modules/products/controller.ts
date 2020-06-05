import {
  GET,
  Path,
  PathParam,
  QueryParam,
  FormParam,
  POST
} from "typescript-rest";
import {
  IsInt,
  IsLong,
  Response,
  Tags,
  Security
} from "typescript-rest-swagger";

import { CustomError } from "../../common/controllers";

interface Product {
  product_id: number;
  name: string;
  description: string;
  price: string;
  discounted_price: string;
  thumbnail: string;
}

interface ProductList {
  count: number;
  rows: Product[];
}

interface ProductComplete {
  product_id: number;
  name: string;
  description: string;
  price: string;
  discounted_price: string;
  image: string;
  image2: string;
  thumbnail: string;
  display: number;
}

interface ProductDetail {
  product_id: number;
  name: string;
  description: string;
  price: string;
  discounted_price: string;
  image: string;
  image2: string;
}

interface ProductInDepartment {
  product_id: number;
  name: string;
  description: string;
  price: string;
  discounted_price: string;
  thumbnail: string;
  display: string;
}

interface ProductInDepartmentList {
  count: number;
  rows: ProductInDepartment[];
}

interface ProductLocation {
  category_id: number;
  category_name: string;
  department_id: number;
  department_name: string;
}
//--------------------

interface ProductReview {
  name: string;
  review: string;
  rating: number;
  created_on: string;
}

@Tags("products")
@Path("/products")
class ProductsController {
  /**
   * Return a list of products.
   * @summary Get All Products
   * @param page Inform the page. Starting with 1. Default: 1
   * @param limit Limit per page, Default: 20.
   * @param descriptionLength Limit of the description, Default: 200.
   */
  @Response<ProductList>(
    200,
    "Return the total of products and a list of Products in row."
  )
  @Response<CustomError>(400, "Return a error object")
  @GET
  list(
    @QueryParam("page") @IsInt page?: number,
    @QueryParam("limit") @IsInt limit?: number,
    @QueryParam("description_length") @IsInt descriptionLength?: number
  ): ProductList {
    return {
      count: 40,
      rows: [
        {
          product_id: 2,
          name: "Chartres Cathedral",
          description:
            '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!',
          price: "16.95",
          discounted_price: "15.95",
          thumbnail: "chartres-cathedral-thumbnail.gif"
        }
      ]
    };
  }

  /**
   * @summary Search products
   * @param queryString Query to search.
   * @param allWords All words or no. Default: on
   * Available values : on, off
   * @param page Inform the page. Starting with 1. Default: 1
   * @param limit Limit per page, Default: 20.
   * @param descriptionLength Limit of the description, Default: 200.
   */
  @Response<ProductList>(
    200,
    "Return the total of products and a list of products."
  )
  @Response<CustomError>(400, "Return a error object")
  @Path("search")
  @GET
  search(
    @QueryParam("query_string") queryString: string,
    @QueryParam("all_words") allWords?: string,
    @QueryParam("page") @IsInt page?: number,
    @QueryParam("limit") @IsInt limit?: number,
    @QueryParam("description_length") @IsInt descriptionLength?: number
  ): ProductList {
    return {
      count: 40,
      rows: [
        {
          product_id: 2,
          name: "Chartres Cathedral",
          description:
            '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!',
          price: "16.95",
          discounted_price: "15.95",
          thumbnail: "chartres-cathedral-thumbnail.gif"
        }
      ]
    };
  }

  /**
   * @summary Product by ID
   * @param productId ID of Product
   */
  @Response<ProductComplete>(200, "Return a Product Object")
  @Response<CustomError>(400, "Return a error object")
  @Path(":product_id")
  @GET
  byId(@PathParam("product_id") @IsLong productId: number): ProductComplete {
    return {
      product_id: 2,
      name: "Chartres Cathedral",
      description:
        '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!',
      price: "16.95",
      discounted_price: "15.95",
      image: "chartres-cathedral.gif",
      image2: "chartres-cathedral2.gif",
      thumbnail: "chartres-cathedral-thumbnail.gif",
      display: 0
    };
  }

  /**
   * @summary Get a list of Products of Categories
   * @param categoryId ID of Category
   * @param page Inform the page. Starting with 1. Default: 1
   * @param limit Limit per page, Default: 20.
   * @param descriptionLength Limit of the description, Default: 200.
   */
  @Response<ProductList>(200, "Return a list of Product Objects")
  @Response<CustomError>(400, "Return a error object")
  @Path("inCategory/:category_id")
  @GET
  inCategory(
    @PathParam("category_id") @IsLong categoryId: number,
    @QueryParam("page") @IsInt page?: number,
    @QueryParam("limit") @IsInt limit?: number,
    @QueryParam("description_length") @IsInt descriptionLength?: number
  ): ProductList {
    return {
      count: 40,
      rows: [
        {
          product_id: 2,
          name: "Chartres Cathedral",
          description:
            '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!',
          price: "16.95",
          discounted_price: "15.95",
          thumbnail: "chartres-cathedral-thumbnail.gif"
        }
      ]
    };
  }

  /**
   * @summary Get a list of Products on Department
   * @param departmentId ID of Department
   * @param page Inform the page. Starting with 1. Default: 1
   * @param limit Limit per page, Default: 20.
   * @param descriptionLength Limit of the description, Default: 200.
   */
  @Response<ProductInDepartmentList>(
    200,
    "Return the total and a list of products"
  )
  @Response<CustomError>(400, "Return a error object")
  @Path("inDepartment/:department_id")
  @GET
  inDepartment(
    @PathParam("department_id") @IsLong departmentId: number,
    @QueryParam("page") @IsInt page?: number,
    @QueryParam("limit") @IsInt limit?: number,
    @QueryParam("description_length") @IsInt descriptionLength?: number
  ): ProductInDepartmentList {
    return {
      count: 40,
      rows: [
        {
          product_id: 2,
          name: "Chartres Cathedral",
          description:
            '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!',
          price: "16.95",
          discounted_price: "15.95",
          thumbnail: "chartres-cathedral-thumbnail.gif",
          display: "3"
        }
      ]
    };
  }

  /**
   * @summary Get details of a Product
   * @param productId ID of Product
   */
  @Response<ProductDetail>(200, "Return a Product Object")
  @Response<CustomError>(400, "Return a error object")
  @Path(":product_id/details")
  @GET
  detailsById(
    @PathParam("product_id") @IsLong productId: number
  ): ProductDetail {
    return {
      product_id: 2,
      name: "Chartres Cathedral",
      description:
        '"The Fur Merchants". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!',
      price: "16.95",
      discounted_price: "15.95",
      image: "chartres-cathedral.gif",
      image2: "chartres-cathedral2.gif"
    };
  }

  /**
   * @summary Get locations of a Product
   * @param productId ID of Product
   */
  @Response<ProductLocation>(200, "Return locations of products.")
  @Response<CustomError>(400, "Return a error object")
  @Path(":product_id/locations")
  @GET
  locationsById(
    @PathParam("product_id") @IsLong productId: number
  ): ProductLocation {
    return {
      category_id: 1,
      category_name: "French",
      department_id: 1,
      department_name: "Regional"
    };
  }

  /**
   * @summary Get reviews of a Product
   * @param productId ID of Product
   */
  @Response<ProductReview[]>(200, "Return a list of reviews")
  @Response<CustomError>(400, "Return a error object")
  @Path(":product_id/reviews")
  @GET
  reviewsById(
    @PathParam("product_id") @IsLong productId: number
  ): ProductReview[] {
    return [
      {
        name: "Eder Taveira",
        review: "That's a good product. The best for me.",
        rating: 5,
        created_on: "2019-02-17 13:57:29"
      }
    ];
  }

  /**
   * @summary Create review for product
   * @param productId ID of Product
   * @param review Review Text of Product
   * @param rating Rating of Product
   */
  @Response<{}>(200, "No data.")
  @Response<CustomError>(400, "Return a error object")
  @Response<CustomError>(401, "Unauthorized")
  @Security("api_key")
  @Path(":product_id/reviews")
  @POST
  createReview(
    @PathParam("product_id") @IsLong productId: number,
    @FormParam("review") review: string,
    @FormParam("rating") rating: string
  ): {} {
    return {};
  }
}

export default ProductsController;
