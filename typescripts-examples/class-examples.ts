abstract class Person{
    constructor(){
    }

    // //by default if you dont provide access specifier then its public
    // socialId: number;
    // city:String;

    private _sId: number;
    private _city: String;

    get sId():number{
        return this._sId;
    }

    set sId(value){
        this._sId=value;
    }

    get city():String{
        return this._city;
    }

    set city(value){
        this._city=value;
    }

    abstract changeCity(socialId:number, newCity:String):boolean;
}

class Employee extends Person{
    constructor(){
        super();
    }

    changeCity(socialId:number, newCity:String):boolean{
       this.city=newCity;
       return true;
   }
}

let p1 = new Employee();
p1.sId=123;
p1.city="Pune";
console.log(p1);
p1.changeCity(123, "newCity");
console.log(p1);