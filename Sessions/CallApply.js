var Person = {
    address = function(city, country) {
        return this.fname + this.lname + city + country;
    }

}
var User = {
    fname:"Abhi",
    lname:"Kadam"
}

Person.address.call(User, "Bangalore", "India");
Person.address.apply(User, ["Bangalore", "India"]);