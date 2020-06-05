import attributes from "./modules/attributes/controller";
import categories from "./modules/categories/controller";
import customers from "./modules/customers/controller";
import departments from "./modules/departments/controller";
import orders from "./modules/orders/controller";
import products from "./modules/products/controller";
import shoppingCart from "./modules/shoppingCart/controller";
import stripe from "./modules/stripe/controller";
import shipping from "./modules/shipping/controller";
import tax from "./modules/tax/controller";

export default [
  departments,
  categories,
  attributes,
  products,
  customers,
  orders,
  shoppingCart,
  tax,
  shipping,
  stripe
];
