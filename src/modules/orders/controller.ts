import { FormParam, GET, Path, POST, QueryParam } from "typescript-rest";
import { IsLong, Response, Security, Tags } from "typescript-rest-swagger";

import { CustomError } from "../../common/controllers";

interface OrderId {
  orderId: number;
}

interface Order {
  order_id: number;
  product_id: number;
  attributes: string;
  product_name: string;
  quantity: number;
  unit_cost: string;
  subtotal: string;
}

interface ShortOrder {
  order_id: number;
  total_amount: number;
  created_on: string;
  shipped_on: string;
  status: string;
  name: string;
}

@Tags("orders")
@Path("orders")
class OrdersControllers {
  /**
   * @summary Create a Order
   * @param cart_id Cart ID
   * @param shipping_id Shipping ID
   * @param tax_id Tax ID
   */
  @Response<OrderId>(200, "Return the Order ID")
  @Response<CustomError>(400, "Return a error object")
  @Response<CustomError>(401, "Unauthorized")
  @Security("api_key")
  @POST
  create(
    @FormParam("cart_id") cart_id: string,
    @FormParam("shipping_id") @IsLong shipping_id: number,
    @FormParam("tax_id") @IsLong tax_id: number
  ): OrderId {
    return {
      orderId: 1
    };
  }

  /**
   * @summary Get Info about Order
   * @param order_id Order ID
   */
  @Response<Order>(200, "Return a object of Order.")
  @Response<CustomError>(400, "Return a error object")
  @Response<CustomError>(401, "Unauthorized")
  @Security("api_key")
  @Path(":order_id")
  @GET
  detail(@QueryParam("order_id") @IsLong order_id: number): Order {
    return {
      order_id: 1,
      product_id: 1,
      attributes: "LG, Red",
      product_name: "Arc d'Triomphe",
      quantity: 1,
      unit_cost: "14.99",
      subtotal: "14.99"
    };
  }

  /**
   * @summary Get orders by Customer
   */
  @Response<Order[]>(200, "Return a object of Order.")
  @Response<CustomError>(400, "Return a error object")
  @Response<CustomError>(401, "Unauthorized")
  @Security("api_key")
  @Path("inCustomer")
  @GET
  byCustomer(): Order[] {
    return [
      {
        order_id: 1,
        product_id: 1,
        attributes: "LG, Red",
        product_name: "Arc d'Triomphe",
        quantity: 1,
        unit_cost: "14.99",
        subtotal: "14.99"
      }
    ];
  }

  /**
   * @summary Get Info about Order
   * @param order_id Order ID
   */
  @Response<ShortOrder>(200, "Return a object of Order.")
  @Response<CustomError>(400, "Return a error object")
  @Response<CustomError>(401, "Unauthorized")
  @Security("api_key")
  @Path("shortDetail/:order_id")
  @GET
  shortDetail(@QueryParam("order_id") @IsLong order_id: number): ShortOrder {
    return {
      order_id: 1,
      total_amount: 1,
      created_on: "",
      shipped_on: "",
      status: "paid",
      name: "Test"
    };
  }
}

export default OrdersControllers;
