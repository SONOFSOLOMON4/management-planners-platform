   let dropdownBtn= document.getElementById("dropdown-btn");
        let dropdownContent= document.getElementById("btn-content");
        let dropdown= document.getElementById("login-option");
        let dropdownOption= document.getElementById("option");
        let menu= document.getElementById("drop-btn");
        let content= document.getElementById("screen-fit");

        isOPen= false;

        dropdownBtn.addEventListener("click", ()=>{
          if(isOPen){
           dropdownContent.style.display="none";
            isOPen= false;
          } else{
            dropdownContent.style.display="block";
            dropdownOption.style.display="none"
            isOPen= true;

          }
        })

        dropdown.addEventListener("click", ()=>{
          if(isOPen){
           dropdownOption.style.display="none";
            isOPen= false;
          } else{
            dropdownOption.style.display="block";
            dropdownContent.style.display="none"
            isOPen= true;

          }
        })

        menu.addEventListener("click", ()=>{
          if(isOPen){
           content.style.display="none";
            isOPen= false;
          } else{
            content.style.display="block";
            isOPen= true;

          }
        })

        

        
      