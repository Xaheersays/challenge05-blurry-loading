document.addEventListener("DOMContentLoaded",function(){
    // needed elements
    let num = document.getElementById("num") ;
    let ele = document.getElementById("div1");
    let  percent = document.getElementById("percent");
    // counts
    let blr_cnt =25;
    let opacity_cnt =102;



   function Increment(){

    let value = parseInt(num.innerText);

    if (value < 100){
        value +=1;
        num.innerText = value;
        ans =  ele.style.filter;
        blr_cnt = blr_cnt -(1/4);
        opacity_cnt = opacity_cnt - 1;
        num.style.opacity = opacity_cnt * (1/100);
        percent.style.opacity = opacity_cnt * (1/100);;
        ele.style.filter=`blur(${blr_cnt}px)`;
        setTimeout(Increment,11)
    } 
   }

   Increment();

});