export const getProductInfo = (product) => {
  console.log("You want the product info for ", product.name);
  return {
    type: "PRODUCT_INFO",
    payload: product
  }
};
