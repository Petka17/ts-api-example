import { Path, POST, FormParam } from "typescript-rest";
import {
  Tags,
  IsLong,
  IsInt,
  Response,
  Security
} from "typescript-rest-swagger";
import { CustomError } from "../../common/controllers";

interface Stripe {
  status: string;
}

@Tags("stripe")
@Path("stripe")
class StripeController {
  /**
   * You can send a cart informations and payment token (https://stripe.com/docs/api/tokens).
   * @summary This method receive a front-end payment and create a chage.
   * @param stripeToken The API token, you can use this example to get it: https://stripe.com/docs/stripe-js/elements/quickstart
   * @param order_id The order ID recorded before (Check the Order Documentation)
   * @param description Description to order.
   * @param amount Only numbers like: 999
   * @param currency Check here the options: https://stripe.com/docs/currencies, the default
   * Default value : USD
   */
  @Response<Stripe>(200, "Object from Stripe")
  @Response<CustomError>(400, "Return a error object")
  @Response<CustomError>(401, "Unauthorized")
  @Security("api_key")
  @Path("charge")
  @POST
  charge(
    @FormParam("stripeToken") stripeToken: string,
    @FormParam("order_id") @IsLong order_id: number,
    @FormParam("description") description: string,
    @FormParam("amount") @IsInt amount: number,
    @FormParam("currency") currency?: string
  ): Stripe {
    return { status: "ok" };
  }

  /**
   * You need put this endpoint in the stripe webhooks (https://dashboard.stripe.com/account/webhooks), so get there the end-point secrete key.
   * @summary Endpoint that provide a synchronization
   */
  @Response(200, "This endpoint is used by Stripe.")
  @Path("webhooks")
  @POST
  webhooks(): void {}
}

export default StripeController;
