let project1 = document.getElementById("project1");
let project2 = document.getElementById("project2");
let project3 = document.getElementById("project3");
let description1 = document.getElementById("description1");

//function showmore1(){
    
    //project1.style.color = "pink";

   // if description1.style.display == "none"{
   //     description1.style.display = "block";
   // }else {
  //      description1.style.display = "none";
  //  }
    
//}

//project1.addEventListener("click", showmore1 );


function showInfo(){
    description1.style.display = 'block';
  }
  
  project1.addEventListener('click', showInfo)