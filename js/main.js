let project1 = document.getElementById("project1");
let project2 = document.getElementById("project2");
let project3 = document.getElementById("project3");
let description1 = document.getElementById("description1");
let description2 = document.getElementById("description2");
let description3 = document.getElementById("description3");

function showmore1(){
    if (description1.style.display == "block"){
      description1.style.display = "none";
   }else {
      description1.style.display = "block";
   }  
}

function showmore2(){
  if (description2.style.display == "none"){
    description2.style.display = "block";
 }else {
    description2.style.display = "none";
 }  
}

function showmore3(){
  if (description3.style.display == "none"){
    description3.style.display = "block";
 }else {
    description3.style.display = "none";
 }  
}

project1.addEventListener("click", showmore1);
project2.addEventListener("click", showmore2);
project3.addEventListener("click", showmore3);