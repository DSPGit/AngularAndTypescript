const METROCITIES: string[] = ["Bang", "Che", "mum", "Del"];

class Product{
    //by default const params are private to constructor
    constructor(pid:number, pname:string, companyName:string,stock:number, private area?: string){
        this.prodId=pid
        this.proName=pname
        this.compName=companyName
        this.availableStock=stock
    }
    prodId:number
    proName:string
    compName?:string
    availableStock?:number

    printProductInfo?():string{
        return `Product name is ${this.proName} availableStock is ${this.availableStock} and company area is ${this.area}`
    }

}

let pro = new Product(1,"my Product","my Company",123,"Pune");
console.log(pro.printProductInfo());

const PRODUCTS: Product[]=[
    {
        prodId:1,
        proName:"P1"
    },
    {
        prodId:2,
        proName:"P1"
    },
    {
        prodId:3,
        proName:"P1"
    }
];

for(const prod of PRODUCTS){
    console.log(`Product name is ${prod.proName} prodId is ${prod.prodId} `);
}