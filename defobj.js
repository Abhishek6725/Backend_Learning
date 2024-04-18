//object literal
// let car = {
//     make : "TOYOTA",
//     model : "Camry",
//     year : 2022,
//     isElectric : false,
//     start : function() {
//         console.log("Engine started");
//     }
    
// };
// console.log(car.make);
// console.log(car.year);
// car.start();
//obj const
function book(title, author, year) {
    this.title = title;
    this.year = year;
    this.author = author;
}
let book1 = new book("P AND C", "Visnu",  1999);
let book2 = new book("Cricket Samrat", "Govind", 2004);

console.log(book1.year);
console.log(book2.year);