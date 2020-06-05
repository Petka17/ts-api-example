import { GET, PUT, Path, PathParam, FormParam, POST } from "typescript-rest";
import {
  IsInt,
  IsLong,
  Response,
  Tags,
  Security
} from "typescript-rest-swagger";

import { CustomError } from "../../common/controllers";

interface Customer {
  customer_id: number;
  name: string;
  email: string;
  address_1: string;
  address_2: string;
  city: string;
  region: string;
  postal_code: string;
  country: string;
  shipping_region_id: number;
  day_phone: string;
  eve_phone: string;
  mob_phone: string;
  credit_card: string;
}

interface RegisterCustomer {
  customer: { schema: Customer };
  accessToken: string;
  expires_in: string;
}

@Tags("customer")
@Path("/customer")
class CustomersController {
  /**
   * @summary Update a customer
   * @param name Customer name.
   * @param email Customer email.
   * @param password Customer password.
   * @param day_phone Customer day phone.
   * @param eve_phone Customer eve phone.
   * @param mob_phone Customer mob phone.
   */
  @Response<Customer>(200, "A Customer Object")
  @Response<CustomError>(400, "Return a error object")
  @Response<CustomError>(401, "Unauthorized")
  @Security("api_key")
  @PUT
  update(
    @FormParam("name") name: string,
    @FormParam("email") email: string,
    @FormParam("password") password?: string,
    @FormParam("day_phone") day_phone?: string,
    @FormParam("eve_phone") eve_phone?: string,
    @FormParam("mob_phone") mob_phone?: string
  ): Customer {
    return {
      customer_id: 1,
      name: "Lannucci",
      email: "lannucci@hotmail.com",
      address_1: "QI 19",
      address_2: "",
      city: "",
      region: "",
      postal_code: "",
      country: "",
      shipping_region_id: 1,
      day_phone: "+351323213511235",
      eve_phone: "+452436143246123",
      mob_phone: "+351323213511235",
      credit_card: "XXXXXXXX5100"
    };
  }

  /**
   * @summary Get a customer by ID. The customer is getting by Token.
   */
  @Response<Customer>(200, "Return a Object of Customer with auth credencials")
  @Response<CustomError>(400, "Return a error object")
  @Response<CustomError>(401, "Unauthorized")
  @Security("api_key")
  @GET
  status(): Customer {
    return {
      customer_id: 1,
      name: "Lannucci",
      email: "lannucci@hotmail.com",
      address_1: "QI 19",
      address_2: "",
      city: "",
      region: "",
      postal_code: "",
      country: "",
      shipping_region_id: 1,
      day_phone: "+351323213511235",
      eve_phone: "+452436143246123",
      mob_phone: "+351323213511235",
      credit_card: "XXXXXXXX5100"
    };
  }

  /**
   * Record a customer.
   * @summary Register a Customer
   * @param name Name of User.
   * @param email Email of User.
   * @param password Password of User.
   */
  @Response<RegisterCustomer>(
    200,
    "Return a Object of Customer with auth credencials"
  )
  @Response<CustomError>(400, "Return a error object")
  @POST
  register(
    @FormParam("name") name: string,
    @FormParam("email") email: string,
    @FormParam("password") password: string
  ): RegisterCustomer {
    return {
      customer: {
        schema: {
          customer_id: 1,
          name: "Lannucci",
          email: "lannucci@hotmail.com",
          address_1: "QI 19",
          address_2: "",
          city: "",
          region: "",
          postal_code: "",
          country: "",
          shipping_region_id: 1,
          day_phone: "+351323213511235",
          eve_phone: "+452436143246123",
          mob_phone: "+351323213511235",
          credit_card: "XXXXXXXX5100"
        }
      },
      accessToken:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE1NTA0MjQ0OTgsImV4cCI6MTU1MDUxMDg5OH0.aEFrNUPRWuRWx0IOEL-_A4J4Ti39iXEHAScm6GI61RR",
      expires_in: "24h"
    };
  }

  /**
   * Customer Login.
   * @summary Sign in in the Shopping.
   * @param email Email of User.
   * @param password Password of User.
   */
  @Response<RegisterCustomer>(
    200,
    "Return a Object of Customer with auth credencials"
  )
  @Response<CustomError>(400, "Return a error object")
  @Path("login")
  @POST
  signin(
    @FormParam("email") email: string,
    @FormParam("password") password: string
  ): RegisterCustomer {
    return {
      customer: {
        schema: {
          customer_id: 1,
          name: "Lannucci",
          email: "lannucci@hotmail.com",
          address_1: "QI 19",
          address_2: "",
          city: "",
          region: "",
          postal_code: "",
          country: "",
          shipping_region_id: 1,
          day_phone: "+351323213511235",
          eve_phone: "+452436143246123",
          mob_phone: "+351323213511235",
          credit_card: "XXXXXXXX5100"
        }
      },
      accessToken:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE1NTA0MjQ0OTgsImV4cCI6MTU1MDUxMDg5OH0.aEFrNUPRWuRWx0IOEL-_A4J4Ti39iXEHAScm6GI61RR",
      expires_in: "24h"
    };
  }

  /**
   * Customer Login with Facebook.
   * @summary Sign in with a facebook login token.
   * @param access_token Token generated from your facebook login.
   */
  @Response<RegisterCustomer>(
    200,
    "Return a Object of Customer with auth credentials"
  )
  @Response<CustomError>(400, "Return a error object")
  @Path("facebook")
  @POST
  facebookSignin(
    @FormParam("access_token") access_token: string
  ): RegisterCustomer {
    return {
      customer: {
        schema: {
          customer_id: 1,
          name: "Lannucci",
          email: "lannucci@hotmail.com",
          address_1: "QI 19",
          address_2: "",
          city: "",
          region: "",
          postal_code: "",
          country: "",
          shipping_region_id: 1,
          day_phone: "+351323213511235",
          eve_phone: "+452436143246123",
          mob_phone: "+351323213511235",
          credit_card: "XXXXXXXX5100"
        }
      },
      accessToken:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE1NTA0MjQ0OTgsImV4cCI6MTU1MDUxMDg5OH0.aEFrNUPRWuRWx0IOEL-_A4J4Ti39iXEHAScm6GI61RR",
      expires_in: "24h"
    };
  }

  /**
   * @summary Update the address from customer
   * @param address_1 Address 1
   * @param address_2 Address 2
   * @param city City
   * @param region Region
   * @param postal_code Postal Code
   * @param country Country
   * @param shipping_region_id Shipping Region ID
   */
  @Response<Customer>(200, "A Customer Object")
  @Response<CustomError>(400, "Return a error object")
  @Response<CustomError>(401, "Unauthorized")
  @Security("api_key")
  @Path("address")
  @PUT
  updateAddress(
    @FormParam("address_1") address_1: string,
    @FormParam("city") city: string,
    @FormParam("region") region: string,
    @FormParam("postal_code") postal_code: string,
    @FormParam("country") country: string,
    @FormParam("shipping_region_id") shipping_region_id: string,
    @FormParam("address_2") address_2?: string
  ): Customer {
    return {
      customer_id: 1,
      name: "Lannucci",
      email: "lannucci@hotmail.com",
      address_1: "QI 19",
      address_2: "",
      city: "",
      region: "",
      postal_code: "",
      country: "",
      shipping_region_id: 1,
      day_phone: "+351323213511235",
      eve_phone: "+452436143246123",
      mob_phone: "+351323213511235",
      credit_card: "XXXXXXXX5100"
    };
  }

  /**
   * @summary Update the credit card from customer
   * @param credit_card Credit Card.
   */
  @Response<Customer>(200, "A Customer Object")
  @Response<CustomError>(400, "Return a error object")
  @Response<CustomError>(401, "Unauthorized")
  @Security("api_key")
  @Path("creditCard")
  @PUT
  updateCard(@FormParam("credit_card") credit_card: string): Customer {
    return {
      customer_id: 1,
      name: "Lannucci",
      email: "lannucci@hotmail.com",
      address_1: "QI 19",
      address_2: "",
      city: "",
      region: "",
      postal_code: "",
      country: "",
      shipping_region_id: 1,
      day_phone: "+351323213511235",
      eve_phone: "+452436143246123",
      mob_phone: "+351323213511235",
      credit_card: "XXXXXXXX5100"
    };
  }
}

export default CustomersController;
