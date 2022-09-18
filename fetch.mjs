import fetch from "node-fetch";
async function getDiscountedPrice(barcode) {
    let URL = `https://jsonmock.hackerrank.com/api/inventory?barcode=${barcode}`;
    let response = await fetch(URL);
    let product = await response.data;
    console.log(product)
    //let getProduct = product[0];
    if (product["data"].length != 1) {
        return Promise.resolve(-1);
    }
    const Price = getProduct["price"];
    const Discount = getProduct["discount"];
    return Promise.resolve(Math.round(Price - ((Discount / 100) * Price)));
}
getDiscountedPrice(74001755)