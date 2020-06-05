import {
  Path,
  GET,
  POST,
  FormParam,
  PathParam,
  QueryParam,
  DELETE,
  PUT
} from "typescript-rest";
import { Response, IsLong, IsInt, Tags } from "typescript-rest-swagger";
import { CustomError } from "../../common/controllers";

interface UniqueId {
  cart_id: string;
}

interface CartWithProduct {
  item_id: number;
  name: string;
  attributes: string;
  product_id: number;
  price: string;
  quantity: number;
  image: string;
  subtotal: string;
}

interface TotalAmount {
  total_amount: number;
}

interface SavedItem {
  item_id: number;
  name: string;
  attributes: string;
  price: string;
}

@Tags("shoppingCart")
@Path("shoppingCart")
class ShoppingCartController {
  /**
   * @summary Generate the unique CART ID
   */
  @Response<UniqueId>(200, "Json Object with unique Cart ID")
  @Response<CustomError>(400, "Return a error object")
  @Path("generateUniqueId")
  @GET
  generateUniqueId(): UniqueId {
    return {
      cart_id: "mu1js99v9n1"
    };
  }

  /**
   * put a product in the cart
   * @summary Add a Product in the cart
   * @param cart_id Cart ID.
   * @param product_id Product ID.
   * @param attributes Attributes of Product.
   */
  @Response<CartWithProduct[]>(200, "Return a array of products in the cart")
  @Response<CustomError>(400, "Return a error object")
  @Path("add")
  @POST
  addProduct(
    @FormParam("cart_id") cart_id: string,
    @FormParam("product_id") @IsLong product_id: number,
    @FormParam("attributes") attributes: string
  ): CartWithProduct[] {
    return [
      {
        item_id: 2,
        name: "Arc d'Triomphe",
        attributes: "LG, red",
        product_id: 2,
        price: "14.99",
        quantity: 1,
        image: "arc-d-triomphe.gif",
        subtotal: "14.99"
      }
    ];
  }

  /**
   * @summary Get List of Products in Shopping Cart
   * @param cart_id Cart ID.
   */
  @Response<CartWithProduct[]>(200, "Return a array of products in the cart")
  @Response<CustomError>(400, "Return a error object")
  @Path(":cart_id")
  @GET
  getProductList(@PathParam("cart_id") cart_id: string): CartWithProduct[] {
    return [
      {
        item_id: 2,
        name: "Arc d'Triomphe",
        attributes: "LG, red",
        product_id: 2,
        price: "14.99",
        quantity: 1,
        image: "arc-d-triomphe.gif",
        subtotal: "14.99"
      }
    ];
  }

  /**
   * @summary Update the cart by item
   * @param item_id Item ID.
   * @param quantity Item Quantity.
   */
  @Response<CartWithProduct[]>(200, "Return a array of products in the cart")
  @Response<CustomError>(400, "Return a error object")
  @Path("update/:item_id")
  @PUT
  updateItem(
    @PathParam("item_id") @IsLong item_id: number,
    @QueryParam("quantity") @IsInt quantity: number
  ): CartWithProduct[] {
    return [
      {
        item_id: 2,
        name: "Arc d'Triomphe",
        attributes: "LG, red",
        product_id: 2,
        price: "14.99",
        quantity: 1,
        image: "arc-d-triomphe.gif",
        subtotal: "14.99"
      }
    ];
  }

  /**
   * @summary Empty cart
   * @param cart_id Cart ID.
   */
  @Response<CartWithProduct[]>(200, "Return a empty Array")
  @Response<CustomError>(400, "Return a error object")
  @Path("empty/:cart_id")
  @DELETE
  emptyCart(@PathParam("cart_id") cart_id: string): CartWithProduct[] {
    return [];
  }

  /**
   * @summary Move a product to cart ????
   * @param item_id Item ID.
   */
  @Response<void>(200, "No data.")
  @Response<CustomError>(400, "Return a error object")
  @Path("moveToCard/:item_id")
  @GET
  moveToCard(@PathParam("item_id") @IsLong item_id: number): void {
    return;
  }

  /**
   * @summary Return a total Amount from Cart
   * @param cart_id Cart ID.
   */
  @Response<TotalAmount>(200, "Return the total amount")
  @Response<CustomError>(400, "Return a error object")
  @Path("totalAmount/:cart_id")
  @GET
  totalAmount(@PathParam("cart_id") cart_id: string): TotalAmount {
    return {
      total_amount: 5
    };
  }

  /**
   * @summary Save a Product for latter ???
   * @param item_id Item ID.
   */
  @Response<void>(200, "No data.")
  @Response<CustomError>(400, "Return a error object")
  @Path("saveForLater/:item_id")
  @GET
  saveForLater(@PathParam("item_id") @IsLong item_id: number): void {
    return;
  }

  /**
   * @summary Get Products saved for latter
   * @param cart_id Cart ID.
   */
  @Response<SavedItem>(200, "Return a object of item salved.")
  @Response<CustomError>(400, "Return a error object")
  @Path("getSaved/:cart_id")
  @GET
  getSaved(@PathParam("cart_id") cart_id: string): SavedItem {
    return {
      item_id: 1,
      name: "Tshit",
      attributes: "LG, red",
      price: "15.90"
    };
  }

  /**
   * @summary Remove a product in the cart
   * @param item_id Item ID.
   */
  @Response<void>(200, "No data.")
  @Response<CustomError>(400, "Return a error object")
  @Path("removeProduct/:item_id")
  @DELETE
  removeProduct(@PathParam("item_id") @IsLong item_id: number): void {
    return;
  }
}

export default ShoppingCartController;
