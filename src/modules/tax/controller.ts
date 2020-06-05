import { Path, GET, PathParam } from "typescript-rest";
import { Tags, Response, IsLong } from "typescript-rest-swagger";
import { CustomError } from "../../common/controllers";

interface Tax {
  tax_id: number;
  tax_type: string;
  tax_percentage: string;
}

@Tags("tax")
@Path("tax")
class TaxController {
  /**
   * Return a list of tax.
   * @summary Get All Taxes
   */
  @Response<Tax[]>(200, "A Array of Object Tax")
  @Response<CustomError>(400, "Return a error object")
  @GET
  list(): Tax[] {
    return [
      {
        tax_id: 1,
        tax_type: "Sales Tax at 8.5%",
        tax_percentage: "8.50"
      }
    ];
  }

  /**
   * Return a tax by ID.
   * @summary Get Tax by ID
   * @param tax_id ID of Tax
   */
  @Response<Tax>(200, "A object of Tax")
  @Response<CustomError>(400, "Return a error object")
  @Path(":tax_id")
  @GET
  detail(@PathParam("tax_id") @IsLong tax_id: number): Tax {
    return {
      tax_id: 1,
      tax_type: "Sales Tax at 8.5%",
      tax_percentage: "8.50"
    };
  }
}

export default TaxController;
