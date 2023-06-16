
const btnSlide  = document.querySelector(".switch-btn") ;
const videoPlayer = document.querySelector(".video-container")
btnSlide.addEventListener(
    
    "click",function()
    {
        console.log(btnSlide);
        if(!btnSlide.classList.contains("slide"))
        {
            btnSlide.classList.add("slide");
            videoPlayer.pause();
        }
        else 
        {
            btnSlide.classList.remove("slide");
            videoPlayer.play();
        }
    }
)

//video preloader 



const preloader = document.querySelector(".preloader") ; 
window.addEventListener("load", function() {
    preloader.classList.add("hide-preloader");
})
