const food = ["empanadas", "cazuelas", "lentejas","porotos",];
/*Length*/
const foodLength = food.length;
console.log(foodLength);
/*For each*/
var scores =[50,60,70,80,90,100];
scores.forEach(element =>{
    if(element > 65)
        console.log("score over 65",element);
}

);
/*sort*/
const pets = ["jefazo", "edi", "rex", "zafi", "cachupin"];
console.log(pets.sort());
const grade = [88, 94, 72, 99, 53, 77];
/**de mayor a menor */
grade.sort((a,b) => b- a);
console.log(grade);
/**de menor a mayor */
grade.sort((a, b) => a - b);
console.log(grade);

/**Reverse */
const alumnos=["Roberto", "Catherine","Constanza", "Fabiola", "Rolando"];
const reversed =[...alumnos]
console.log("reversed", reversed.reverse()); 
console.log("original", alumnos);
/*find y find index*/
const grade2=[99, 83,87, 91, 77];
const underEight = grade2.find((element) => element < 80);
console.log(underEight);
const overEight = grade2.findIndex((element) => element > 80);
console.log(overEight);

const students = [
    { name: "John",grade: 75},
    { name: "Jane",grade: 93},
    { name: "Samantha",grade: 90},
    { name: "Michael",grade: 94},
];
console.log(students);
var studentsSorted=students.sort((a,b) =>b.grade = a.grade > 90);
console.log(students.Sorted);
console.log(students.reverse);
students.sort((a, b) => b.grade - a.grade);
console.log(students);
const overninety = students.find((students) => students.grade >90);
console.log(overninety);



