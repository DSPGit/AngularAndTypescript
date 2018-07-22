function Person(socialId){

Object.defineProperty(this, "socialId",{
    get: function() {
        return _socialId;
    },
    set: function(value) {
        _socialId = value;
    }
})

//private members
    var _socialId ,
    _personName="",
    _city="",
    _contactNo = "";
}

var p1 = new Person();
p1.socialId = 1000;
console.log(p1.socialId);