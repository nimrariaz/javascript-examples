function Car(vendor) {
    this.vendor = vendor;
    this.wheels = 4;
    this.methodAsProp = function(){
        console.log('methodAsProp');
    };

}

Car.prototype.asProperty = 'property in prototype';

Car.prototype.drive = function(speed) {
    console.log( speed + 'Km per hour');
};

Car.prototype.headLights = function() {
    console.log('toggle');
};



var o1 = new Car('ODI');
var o2 = new Car('Mercedes');
var o3 = new Car('Toyota');


console.log('o1: ', o1);
console.log('o2: ', o2);
console.log('o3: ', o3);

o1.drive(100);
o1.headLights();
console.log(o1.wheels);
console.log(o2.wheels);
console.log(o3.wheels);

