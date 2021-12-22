function Lesson(className, classUnit, classCapacity) {
    this.className = className;
    this.classUnit = classUnit;
    this.classCapacity = classCapacity;  
}
Lesson.prototype.print = function(){
    let str = "{ ";
    for (var i in this) {
      if (this.hasOwnProperty(i)) {
        str += i + " : " + this[i] + " ,";
      }
    }
    str = str.substring(0, str.length - 1);
    console.log(str + "}");

}

let softEngineeringClass = new Lesson("sonftware", 3, 20);
let networkClass = new Lesson("network", 3, 18);

console.log("---- بخش الف------------");
softEngineeringClass.print()
networkClass.print()

////Second Part
function SoftwareClass(className, classUnit, classCapacity,book){
    Lesson.call(this,className, classUnit, classCapacity)
    this.book = book   
}
SoftwareClass.prototype = Object.create(Lesson.prototype)
function NetworkClass(className, classUnit, classCapacity,project){
    Lesson.call(this,className, classUnit, classCapacity)
    this.project = project
}
NetworkClass.prototype  = Object.create(Lesson.prototype)

softEngineeringClass = new SoftwareClass("sonftware", 4, 20,"silvershots");
networkClass = new NetworkClass("network", 4, 18,true);

console.log("---- بخش ب------------");
softEngineeringClass.print()
networkClass.print()
