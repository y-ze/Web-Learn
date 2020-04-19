function Person() {

}
Person.prototype.name = "Nicholas";
Person.prototype.age = 28;
Person.prototype.job = "Software Engineer"
Person.prototype.sayName = function() {
    console.log(this.name);
}
var person1 = new Person();
person1.sayName();

var person2 = new Person();
person2.name = "李瑞雪";
person2.sayName();
console.log(person2.__proto__);

function SuperType(name) {
    this.name = name;
    this.colors = ["red","blue","yellow"];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
}

function SubType(name,age) {
    SuperType.call(this,name);
    this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
console.log(this.age);
}
var instancel = new SubType("Nicholas",28);
instancel.colors.push("black");
console.log(instancel.colors);
instancel.sayName();
instancel.sayAge();

var instance2 = new SubType("Nicholas2",24);
instance2.colors.push("green");
console.log(instance2.colors);
instance2.sayName();
instance2.sayAge();

var i = new SuperType("13");
console.log(i.name);

console.log(instance2 instanceof SubType)