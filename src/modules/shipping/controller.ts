import { Path, GET, PathParam } from "typescript-rest";
import { Tags, Response, IsLong } from "typescript-rest-swagger";
import { CustomError } from "../../common/controllers";

interface Region {
  shipping_region_id: number;
  shipping_region: string;
}

interface ShippingRegion {
  shipping_id: number;
  shipping_type: string;
  shipping_cost: string;
  shipping_region_id: number;
}

@Tags("shipping")
@Path("shipping")
class ShippingController {
  /**
   * @summary Return shippings regions
   */
  @Response<Region[]>(200, "Return a list of Shippings Regions")
  @Response<CustomError>(400, "Return a error object")
  @Path("regions")
  @GET
  regions(): Region[] {
    return [
      {
        shipping_region_id: 1,
        shipping_region: "Please Select"
      }
    ];
  }

  /**
   * @summary Return shippings regions
   * @param shipping_region_id Shipping Region Id
   */
  @Response<ShippingRegion>(200, "Return a Shipping Region Object")
  @Response<CustomError>(400, "Return a error object")
  @Path("regions/:shipping_region_id")
  @GET
  shippingRegions(
    @PathParam("shipping_region_id") @IsLong shipping_region_id: number
  ): ShippingRegion {
    return {
      shipping_id: 1,
      shipping_type: "Next Day Delivery ($20)",
      shipping_cost: "20.00",
      shipping_region_id: 2
    };
  }
}

export default ShippingController;
