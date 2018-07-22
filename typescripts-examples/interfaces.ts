interface BlackListedProduct{
    productId: number
    productName:string
    companyName:string
    unitPice:number
    quantity:number
    blacklisted:boolean
    reason?:string
}

class SynechronProduct implements BlackListedProduct{
    productId: number
    productName:string
    companyName:string
    unitPice:number
    quantity:number
    blacklisted:boolean
    shipperId:number
}


let prod:BlackListedProduct = new SynechronProduct();
prod.productId=10
prod.productName="SY1"
prod.companyName="ABC"

function printProdInfo(product: BlackListedProduct):string{
    return `Product id ${product.productId}, product name is ${product.productName}`
}

console.log(printProdInfo(prod));