//object is real world entity that will have properties or attribute
// Objects are mutable: They are addressed by reference, not by value.
let a= {
    name:"vinod",
    display:()=>{ 
        console.log("method  tied with object and call with ."); 
    }
};
function display(){
    console.log("function is indepedently call with their name")
}

let shallow=a; //shallow copy it will change original object also because they
//are sharing the reference of object

shallow.name="vm2124"
console.log(shallow,a);


let deepcopy=JSON.parse(JSON.stringify(a)); //json is temprory but it can't copy all 
//methods and nested object like date so use lodash
deepcopy.name='vinod mali';

console.log(deepcopy, a);

//looping through object properties
const fruits = {Bananas:300, Oranges:200, Apples:500};


for (let [fruit, value] of Object.entries(fruits)) {
  console.log( fruit + ": " + value )
}
//object contstructor func
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");
// You can NOT add a new property to an object constructor:
console.log(mySelf)

// const tickEvent=new Event('tick',()=>console.log('ticked...'));

const s1=new String("vinod");
const s2=new String("vinod")
console.log(s1.toString()===s2.toString())

const letters = new Set(["a","b","c"]);
letters.delete('a');
console.log(letters)
