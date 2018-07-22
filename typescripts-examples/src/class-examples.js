var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "sId", {
        get: function () {
            return this._sId;
        },
        set: function (value) {
            this._sId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "city", {
        get: function () {
            return this._city;
        },
        set: function (value) {
            this._city = value;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super.call(this) || this;
    }
    Employee.prototype.changeCity = function (socialId, newCity) {
        this.city = newCity;
        return true;
    };
    return Employee;
}(Person));
var p1 = new Employee();
p1.sId = 123;
p1.city = "Pune";
console.log(p1);
p1.changeCity(123, "newCity");
console.log(p1);
