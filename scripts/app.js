let menu=document.querySelector(".uu")
let icon=document.querySelector(".w-6")
let s=1;

icon.addEventListener("click", function(){
    if(s%2==1){
        menu.style.left = "0";
        s++;
    }else if(s%2==0){
        menu.style.left = "-256px";
        s++;

    }


    

})



