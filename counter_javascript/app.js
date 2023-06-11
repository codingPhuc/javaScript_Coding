// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


function Counter_element(btn)
{
    btn.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;
        console.log(styles[1]) ;
        if(styles[1] == "decrease")
        {
            count-=1  ;
        }
        if(styles[1] == "reset")
        {
            count = 0  ;

        }
        if(styles[1] == "increase")
        {
            count+=1  ;

        }
        value.innerHTML   =  count ; 
        if(count < 0)
        {
            value.style.color  = "red";
        }
        if(count > 0)
        {
            value.style.color  = "green";
        }
        if(count ==0)
        {
            value.style.color  = "black";
        }
        
    });
}
btns.forEach(Counter_element);

