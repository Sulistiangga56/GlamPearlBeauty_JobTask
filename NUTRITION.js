// write code here
function what_to_show() {
    let len = JSON.parse(localStorage.getItem("login-data")) || [];
    if (len.length > 0) {
      window.location.href = "details.html";
    } else {
      window.location.href = "login.html";
    }
  }

  function yes(){
    let x=document.querySelector("#filter").value;
    if(x==="Home"){
      window.location.href = "Index.html";
   }else if(x=="hair care"){
      window.location.href = "HairCare.html";
   }else if(x=="body care"){
      window.location.href = "BodyCare.html";
   }else if(x=="nutrition"){
      window.location.href = "Nutrition.html";
   }else if(x=="serum"){
      window.location.href = "Serum.html";
   }else if(x=="moisturizers"){
      window.location.href = "Moisturizers.html";
   }else if(x=="knowUsBatter"){
      window.location.href ="aboutus.html";
   }else if(x=="profile"){
      window.location.href ="details.html";
   }
  }