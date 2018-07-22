var GenericRepo = /** @class */ (function () {
    function GenericRepo() {
        this._localStorage = new Array();
    }
    GenericRepo.prototype.getAll = function () {
        return this._localStorage;
    };
    GenericRepo.prototype.getSingle = function (id) {
        return this._localStorage[0];
    };
    GenericRepo.prototype.addNew = function (T) {
        this._localStorage.push(T);
    };
    GenericRepo.prototype.update = function (T) {
        //update logic
    };
    GenericRepo.prototype.delete = function (T) {
        //delete logic
    };
    return GenericRepo;
}());
var Customer = /** @class */ (function () {
    function Customer(customerId, contactName, address, city) {
        this.customerId = customerId;
        this.contactName = contactName;
        this.address = address;
        this.city = city;
    }
    return Customer;
}());
var SyneEmployee = /** @class */ (function () {
    function SyneEmployee(employeeId, contactName, address, city) {
        this.employeeId = employeeId;
        this.contactName = contactName;
        this.address = address;
        this.city = city;
    }
    return SyneEmployee;
}());
var cust1 = new Customer(1, "C1", "PUN", "My address1");
var cust2 = new Customer(2, "C2", "MUM", "My address2");
var employee1 = new SyneEmployee(1, "E1", "PUN", "My address1");
var employee2 = new SyneEmployee(2, "E2", "MUM", "My address2");
var custRepo = new GenericRepo();
var empRepo = new GenericRepo();
custRepo.addNew(cust1);
custRepo.addNew(cust2);
empRepo.addNew(employee1);
empRepo.addNew(employee2);
console.log("All Customers--->");
for (var _i = 0, _a = custRepo.getAll(); _i < _a.length; _i++) {
    var cust = _a[_i];
    console.log(cust.contactName);
    console.log(cust.address);
}
console.log("All Employees--->");
for (var _b = 0, _c = empRepo.getAll(); _b < _c.length; _b++) {
    var emp = _c[_b];
    console.log(emp.contactName);
    console.log(emp.address);
}
