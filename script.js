let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

//"We are interested in retrieving only the students' names; all the names should be in caps.
//['JOHN', 'BABA', 'YAGA', 'WICK']"
let arr = [];
for(let i=0;i<studentRecords.length;i++)
{
   arr[i] = studentRecords[i].name; 
}
  
console.log(arr.join(",").toUpperCase().split(","));


//Q2 "Suppose we have the same dataset as above but this time we want to get 
// the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks: 98 },{name: 'Wick', id: 115, marks: 75 }]"

//[{name: 'John', id: 123, marks: 98 },{name: 'Wick', id: 115, marks: 75 }]

let arr2 = []

for(let i=0; i<studentRecords.length;i++)
{
//    console.log(studentRecords[i].marks);
   if(studentRecords[i].marks>50)
   {
     arr2.push(studentRecords[i]);
   }    
   
}
console.log(arr2);






// Q-3Retrieve the details of students who scored more than 50 marks and have IDs greater than 120.

let arr3 = []

for(let i=0; i<studentRecords.length;i++)
{
//    console.log(studentRecords[i].marks);
   if(studentRecords[i].marks>50 && studentRecords[i].id > 120)
   {
     arr3.push(studentRecords[i]);
   }    
   
}
console.log(arr3);





//Q-4 Consider the same scenario we have discussed above, but this time we would like to 
//know the sum total of the marks of the students.

let total = 0;

for(let i=0; i<studentRecords.length;i++)
{
//    console.log(studentRecords[i].marks);
   if(studentRecords[i].marks>50)
   {
       total = total + studentRecords[i].marks
   }    
   
}
console.log(total);


//Q-5 This time we want to get only the names 
//of the students who scored more than 50 marks from the same dataset used above.

// let arr = []

for(let i=0; i<studentRecords.length;i++)
{
//    console.log(studentRecords[i].marks);
   if(studentRecords[i].marks>50)
   {
    console.log((studentRecords[i].name));
   }    
   
}
// console.log(arr3);



//Q-6 This time we are required to print the sum of marks of the students with id > 120.

let totalMark = 0;

for(let i=0; i<studentRecords.length;i++)
{
//    console.log(studentRecords[i].marks);
   if(studentRecords[i].id > 120)
   {
       totalMark = studentRecords[i].marks + totalMark;
   }    
   
}
console.log(totalMark);


//Q-7  This time we are required to print the total marks of the students with marks greater 
//than 50 after a grace of 15 marks has been added to those students who scored less than 50.



let totalMark2 = 0;
let a = [];
let totalMarks3 = 0;

for(let i=0; i<studentRecords.length;i++)
{
//    console.log(studentRecords[i].marks);
   if(studentRecords[i].marks > 50 )
   {
       totalMark2 = studentRecords[i].marks + totalMark2;
   }   
   else if(studentRecords[i].marks < 50)
   {
       a[i] = studentRecords[i].marks + 15;
       totalMarks3 = studentRecords[i].marks + 15 + totalMarks3;

   } 

   
}
console.log(totalMark2);
console.log(totalMarks3);


//Q-8 Create 6 objects , each object will have name, class, roll no as properties.
// Store these objects in an array of objects. 

let newArr = [];
let obj1 = {
        name:'avinash',
        class: 11,
        roll:112
}
let obj2 = {
    
    name:'rushi',
    class: 11,
    roll:112
}

let obj3 = {
    name:'nikhil',
    class:12,
    roll:113
}
let obj4 = {
    name:'nikhil',
    class:12,
    roll:113
}
let obj5 = {
    name:'nikhil',
    class:12,
    roll:113
}
let obj6 = {
    name:'nikhil',
    class:12,
    roll:113
}


    newArr.push(obj1);
    newArr.push(obj2);
    newArr.push(obj3);
    newArr.push(obj4);
    newArr.push(obj5);
    newArr.push(obj6);
    



console.log(newArr);






