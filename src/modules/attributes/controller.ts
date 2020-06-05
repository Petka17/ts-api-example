import { GET, Path, PathParam, QueryParam } from "typescript-rest";
import { IsLong, Response, Tags } from "typescript-rest-swagger";

import { CustomError } from "../../common/controllers";

interface AttributeResponse {
  attribute_id: number;
  name: string;
}

interface AttributeValueResponse {
  attribute_value_id: number;
  value: string;
}

interface ProductAttributeValue {
  attribute_name: string;
  attribute_value_id: number;
  attribute_value: string;
}

@Tags("attributes")
@Path("/attributes")
class AttributesController {
  /**
   * @summary Get Attribute list
   */
  @Response<AttributeResponse[]>(200, "List of Attribute Objects")
  @Response<CustomError>(400, "Return a error object")
  @GET
  list(): AttributeResponse[] {
    return [
      {
        attribute_id: 1,
        name: "Size"
      }
    ];
  }

  /**
   * @summary Get Attribute
   * @param attributeId ID of Attribute
   */
  @Response<AttributeResponse>(200, "Return a Object of Attribute")
  @Response<CustomError>(400, "Return a error object")
  @Path(":attribute_id")
  @GET
  detail(
    @PathParam("attribute_id") @IsLong attributeId: number
  ): AttributeResponse {
    return {
      attribute_id: 1,
      name: "Size"
    };
  }

  /**
   * @summary Get Values Attribute from Attribute
   * @param attributeId ID of Attribute
   */
  @Response<AttributeValueResponse>(200, "Return a list of Attribute Values")
  @Response<CustomError>(400, "Return a error object")
  @Path("values/:attribute_id")
  @GET
  valueForAttribute(
    @PathParam("attribute_id") @IsLong attributeId: number
  ): AttributeValueResponse {
    return {
      attribute_value_id: 1,
      value: "S"
    };
  }

  /**
   * @summary Get all Attributes with Product ID
   * @param productId ID of Product
   */
  @Response<ProductAttributeValue[]>(
    200,
    "Return a array of Values of Attribute Objects"
  )
  @Response<CustomError>(400, "Return a error object")
  @Path("inProduct/:product_id")
  @GET
  listByDepartment(
    @PathParam("product_id") @IsLong productId: number
  ): ProductAttributeValue[] {
    return [
      {
        attribute_name: "Color",
        attribute_value_id: 6,
        attribute_value: "White"
      }
    ];
  }
}

export default AttributesController;
