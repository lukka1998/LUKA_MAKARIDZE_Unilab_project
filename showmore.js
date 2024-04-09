function showmore(){
    let left=document.querySelector(".left")
    let height=document.querySelector(".height")
    if (left.style.display == 'none' || left.style.display == '') {
      left.style.display = 'block';
      left.style.position="absolute"
      left.style.gap="20px"
      left.style.width="80%"
      left.style.top="1200px"
      height.style.height="140vh"
      
    } else {
      left.style.display = 'none';
     
    }
  }