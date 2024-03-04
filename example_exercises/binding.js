var John = {
    name: 'John',
    greet: function(person) {
        alert("Hi " + pesron + ", my name is " + this.name);
    }
};var fx = John.greet;

fx('Paul'); // Hi Paul, my name is undefined 