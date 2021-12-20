
function Lesson(className,classUnit,classCapacity){
    this.className = className
    this.classUnit = classUnit
    this.classCapacity = classCapacity   
    // this.print = ()=>{    
    //      return `{className : ${className}, classUnits : ${classUnit}, classCapacity : ${classCapacity}}`
    // }  
}
function print(){
    let str = "{ "
    for (var i in this) {        
        if (this.hasOwnProperty(i)) {     
            str += i +" : "+ this[i]+ " ,"
        }
    }
    str = str.substring(0,str.length-1)
    console.log(str+"}")
}

const softEngineeringClass = new Lesson("sonftware",3,20)
const networkClass = new Lesson("network",3,18)

console.log("---- بخش الف------------")
// console.log(softEngineeringClass.print())
// console.log(networkClass.print())

print.call(softEngineeringClass)
print.call(networkClass)


console.log("---- بخش ب------------")


Lesson.prototype.book =function(book){
    this.book = book
}
Lesson.prototype.project =function(project){
    this.project = project
}

softEngineeringClass.book = "date"
networkClass.project = true

print.call(softEngineeringClass)
print.call(networkClass)

// console.log(JSON.stringify(softEngineeringClass, null, ''));
// console.log(JSON.stringify(networkClass, null, ''));

