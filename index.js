var numberOfPlanets=document.querySelectorAll(".planet").length;
window.onload = function() {
  var video = document.querySelector("video").setAttribute("src","videos/space.mp4");
  video.play();
};

for(i=0;i<numberOfPlanets;i++){

    function playSoundAndPauseAfterDuration(sound, duration) {
        sound.play();
        
        setTimeout(() => {
          sound.pause();
          sound.currentTime = 0; // Reset the sound to the beginning
        }, duration);
      }
    document.querySelectorAll(".planet")[i].addEventListener("click",function(){

        var planetInnerHTML= this.innerHTML;
        switch(planetInnerHTML){
             case "mercury":
             var mercury=new Audio("sounds/mercury.mp3");
             //mercury.play();
             playSoundAndPauseAfterDuration(mercury, 15000)
             document.querySelector("video").setAttribute("src","videos/mercurybg.mp4");
             break;

             case "venus":
             var venus=new Audio("sounds/venus.mp3");
             //venus.play();
             playSoundAndPauseAfterDuration(venus, 15000)
             document.querySelector("video").setAttribute("src","videos/venusbg.mp4");
             break;

             case "earth":
             var earth=new Audio("sounds/earth.mp3");
             //earth.play();
             playSoundAndPauseAfterDuration(earth, 15000)
             document.querySelector("video").setAttribute("src","videos/earthbg.mp4");
             break;

             case "mars":
             var mars=new Audio("sounds/mars.mp3");
             //mars.play();
             playSoundAndPauseAfterDuration(mars, 15000)
             document.querySelector("video").setAttribute("src","videos/marsbg.mp4");
             break;

             case "juipiter":
             var juipiter=new Audio("sounds/juipiter.mp3");
             //juipiter.play();
             playSoundAndPauseAfterDuration(juipiter, 15000)
             document.querySelector("video").setAttribute("src","videos/jupiterbg.mp4");
             break;

             case "saturn":
             var saturn=new Audio("sounds/saturn.mp3");
             //saturn.play();
             playSoundAndPauseAfterDuration(saturn, 15000)
             document.querySelector("video").setAttribute("src","videos/saturnbg.mp4");
             break;

             case "uranus":
             var uranus=new Audio("sounds/uranus.mp3");
             //uranus.play();
             playSoundAndPauseAfterDuration(uranus, 15000)
             document.querySelector("video").setAttribute("src","videos/uranusbg.mp4");
             break;

             case "neptune":
             var neptune=new Audio("sounds/neptune.mp3");
             //neptune.play();
             playSoundAndPauseAfterDuration(neptune, 15000)
             document.querySelector("video").setAttribute("src","videos/neptunebg.mp4");
             break;
     
     
             default:console.log("there is no sound")
        }
    });
        
     
}