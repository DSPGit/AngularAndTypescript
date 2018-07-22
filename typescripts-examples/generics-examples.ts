interface SynePerson{
    contactName:string
    city:string
    address:string
}


interface CrudOperations<T>{
    getAll():Array<T>;
    getSingle(id:number):T
    addNew(T:T):void;
    update(T:T):void;
    delete(T:T):void;
}

class GenericRepo<T extends SynePerson> implements CrudOperations<T>{
    private _localStorage:Array<T> = new Array<T>();
    getAll():Array<T> {
        return this._localStorage;
    }
    getSingle(id:number):T{
        return this._localStorage[0];
    }
    addNew(T:T):void{
        this._localStorage.push(T);
    }
    update(T:T):void{
        //update logic
    }
    delete(T:T):void{
        //delete logic
    }
}

class Customer implements SynePerson {
    constructor(
    public customerId: number,
    public contactName: string,
    public address: string,
    public city: string){}
}

class SyneEmployee implements SynePerson{
    constructor(
    public employeeId: number,
    public contactName: string,
    public address: string,
    public city: string){}
}

let cust1:Customer = new Customer(1, "C1", "PUN", "My address1");
let cust2:Customer = new Customer(2, "C2", "MUM", "My address2");

let employee1:SyneEmployee = new SyneEmployee(1,"E1", "PUN", "My address1");
let employee2:SyneEmployee = new SyneEmployee(2,"E2", "MUM","My address2");

let custRepo:GenericRepo<Customer> = new GenericRepo();
let empRepo:GenericRepo<SyneEmployee> = new GenericRepo();

custRepo.addNew(cust1);
custRepo.addNew(cust2);

empRepo.addNew(employee1);
empRepo.addNew(employee2);

console.log("All Customers--->");
for(const cust of custRepo.getAll()){
    console.log(cust.contactName);
    console.log(cust.address);
}
console.log("All Employees--->");
for(const emp of empRepo.getAll()){
    console.log(emp.contactName)
    console.log(emp.address);
}