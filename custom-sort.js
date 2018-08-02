var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 35 },
  { id: 4, name: "alex",     age: 30 }
];


students.sort(function (a, b){
  var studentA = a.name;
  var studentB = b.name;
  var studentAage = a.age;
  var studentBage = b.age;

  if (studentA < studentB){
    return -1;
  }

  if (studentA > studentB){
    return 1;
  }

  if (studentA === studentB){
    if (studentAage > studentBage){
      return 1;
    }
    else {
      return -1;
    }
  }
  return 0;
});
console.log(students);