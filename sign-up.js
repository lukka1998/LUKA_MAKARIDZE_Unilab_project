function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  function  myFunction2(){
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  let form=document.querySelector("form");
  let formflex=document.querySelector(".modals-flex")
  let arrspan =document.querySelectorAll(".click");
  let header=document.querySelector(".header1")
  let footer=document.querySelector("footer")
  let elememntbody=document.body;
  for(let i of arrspan){
    i.addEventListener("click",function(){
        form.style.display="none"
        formflex.style.display="block"
        header.style.top="0"
        header.style.zIndex="-3"
        footer.style.position="fixed"
        footer.style.bottom="0"
        footer.style.zIndex="-4"


       
        
      })
  }
  let searchbtn=document.querySelector(".btn-search");
  searchbtn.addEventListener("click",function(){
    let btnfilter=document.querySelector(".btn-Filter")
    let service=document.querySelector(".service-img");
    let carouselr=document.querySelector(".carousel-inner");
    let carusel=document.querySelector(".carousel");
    let ml=document.querySelector(".ml-1");

      if (service.style.display === 'none' || service.style.display === '') {
      service.style.display = 'flex';
      carouselr.style.display="none"
      ml.style.display="none"
      carusel.style.display="none"


      // btnfilter.style.display="block"
    } else {
      service.style.display = 'none';
      carouselr.style.display="flex"
      ml.style.display="block"
      carusel.style.display="block"



      // btnfilter.style.display="none"

    }
    
  })
  let btnfilter=document.querySelector(".btn-Filter")
  btnfilter.addEventListener("click" ,function(){
    let left=document.querySelector(".left")
    let rigth=document.querySelector(".right")
    if (left.style.display == 'none' || left.style.display == '') {
      left.style.display = 'flex';
      rigth.style.display="none"
      left.style.width="100%"
    } else {
      left.style.display = 'none';
      rigth.style.display="flex"

    }
    
  })
 
  