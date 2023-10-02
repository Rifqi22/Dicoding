// Map function

let member = ["john", "Michael", "Robert", "Newt"];
let member_rev = member.map((name) => {
  return `${name}!`;
});
console.log(member_rev);

// Filter Function
let student = [
  { name: "Elisa", score: 70 },
  { name: "Mina", score: 80 },
  { name: "Diana", score: 90 },
  { name: "Robert", score: 50 },
  { name: "Johan", score: 100 },
];
let pass_student = student.filter((student)=> student.score > 70);
console.log(pass_student);

// Reduce Function
let totalScore_student = student.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore_student);

// Some Function
let number = [0, 1, 2, 3, 4, 5];
function odd(number){
    let odd_number = number.some((element) => element % 2 !== 0); // This is some Function
    if(odd_number == true){
        console.log(`Yes there is odd number in ${number} function`);
    }
}
odd(number);

// Find Function
let apps = ['QGIS', 'ArcGIS', 'GlobbalMapper', 'SuperMap', 'SeaDas'];
let QGIS = apps.find((app) => app === 'QGIS');
let SuperMap = apps.find((app) => app === 'SuperMap');
console.log(QGIS, SuperMap); 

// Sort Function
let number_2 = [1, 22, 343, 2, 3, 5, 5, 203, 20, 23, 31, 14];
number_2.sort(); //Mengurutkan berdasarkan urutan angka, bukan berdasarkan jumlah
console.log(number_2);

// Every Function
let score_result = [30, 40, 70, 80, 80, 70, 100];
let min_score = 50;
let score_pass = score_result.every(score => score > min_score);
console.log(score_pass);

// forEach Function
let names = ["John", "Michael", "Norman", "William", "Denis"];
names.forEach((name) =>{
    console.log(`Hello! ${name}`);
});
