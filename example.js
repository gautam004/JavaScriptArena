let students = [{
    name: "Gautam",
    classs: "1st",
    rollno: 1
  },
  {
    name: "Ankit",
    classs: "1st",
    rollno: 2
  },
  {
    name: "Aditya",
    classs: "1st",
    rollno: 3
  },
  {
    name: "Aviral",
    classs: "1st",
    rollno: 4
  },
  {
    name: "Ajay",
    classs: "1st",
    rollno: 5
  }
  ];

  console.log(students);
  students[0]="deleted";
  let students1 = students.filter(myfunction);
  function myfunction(val, index){
      if(students[index] !== "deleted")
       return students[index];
      }
  console.log(students1);

  