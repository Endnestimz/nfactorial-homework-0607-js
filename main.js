//
const NAME="Dalida's ZOO";
const ADRESS="Abaya 17/2";
let customer = "Ender";

//
let animals = 58;
let zooIsOpened = false;
zooIsClosed = true;
customer = "Askar";
let aviary = null;
console.log(aviary);

//
let animal = {
    type: "lion",
    age: 7,
  };
  alert (animal.type);
  alert (animal.age);
  animal.eat = "meat";
  delete(animal.eat);
  let key="eat";
  animal[key]="meat";
  alert(animal.eat);

  animal.print = function () {
    console.log(this.type + this.age);
  };
  animal.print();
  
//
let animals = ["bear", "lion", "snake"];
let birds=["flamingo","waterfowl"]
console.log(animals.length); 
animals.push("panda"); 
animals.pop(); 
let lastAnimal = animals.pop(); 
animals.unshift("rabbit"); 
animals.shift(); 
let firstAnimal = animals.shift(); 

let allan = animals.concat(birds); 
for(let i=0;i<allan.length;++i){
    console.log(allan[i]);
}

//
const animals =[
{
type:'lion',
age:'3',
color: 'yellow',
amount : 2,
},
{
type:'bear',
age:'4',
color: 'brown',
amount : 3,
},
{
type:'polar bear',
age:'6',
color: 'white',
amount : 2,
},
];

function sumAmount(){
    let sum=0;
    for(let i=0;i<animals.length;++i){
        sum+=animals[i].amount;
    }
    console.log(sum);
}
sumAmount();

const types=animals.map((animal) =>animal.type);
console.log(types);

const youngAnimals = animals.filter(animal =>{
    return animal.age<6
})
console.log(youngAnimals);

const animals = ["bear", "lion", "snake"];
const copyAnimals= [...animals] 
console.log(animals);
console.log(copyAnimals);

let animals=["bear", "lion", "snake"];
animals.splice(0,0,"polar bear","tiger");
console.log(animals);

const CUSTOMER_AGE=['18','11','3','4','19'];
let childticket=0;
let adultticket=0;
for(let i=0;i<CUSTOMER_AGE.length;++i){
if(CUSTOMER_AGE[]>12){
    adultticket++;
}else{
    childticket++;
}
}
console.log(adultticket);
console.log(childticket);

import newCustomer from './exp.js';
console.log(newCustomer);

import {name ,age} from './exp.js';
console.log(name,age);

import {name as newName ,age as newAge} from './exp.js';
console.log(newName,newAge);

import * as custom  from './exp.js';
console.log(custom.age);

