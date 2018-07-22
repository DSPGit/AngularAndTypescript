var METROCITIES = ["Bang", "Che", "mum", "Del"];
var Product = /** @class */ (function () {
    //by default const params are private to constructor
    function Product(pid, pname, companyName, stock, area) {
        this.area = area;
        this.prodId = pid;
        this.proName = pname;
        this.compName = companyName;
        this.availableStock = stock;
    }
    Product.prototype.printProductInfo = function () {
        return "Product name is " + this.proName + " availableStock is " + this.availableStock + " and company area is " + this.area;
    };
    return Product;
}());
var pro = new Product(1, "my Product", "my Company", 123, "Pune");
console.log(pro.printProductInfo());
var PRODUCTS = [
    {
        prodId: 1,
        proName: "P1"
    },
    {
        prodId: 2,
        proName: "P1"
    },
    {
        prodId: 3,
        proName: "P1"
    }
];
for (var _i = 0, PRODUCTS_1 = PRODUCTS; _i < PRODUCTS_1.length; _i++) {
    var prod_1 = PRODUCTS_1[_i];
    console.log("Product name is " + prod_1.proName + " prodId is " + prod_1.prodId + " ");
}
