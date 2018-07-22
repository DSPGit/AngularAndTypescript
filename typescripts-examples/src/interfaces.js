var SynechronProduct = /** @class */ (function () {
    function SynechronProduct() {
    }
    return SynechronProduct;
}());
var prod = new SynechronProduct();
prod.productId = 10;
prod.productName = "SY1";
prod.companyName = "ABC";
function printProdInfo(product) {
    return "Product id " + product.productId + ", product name is " + product.productName;
}
console.log(printProdInfo(prod));
