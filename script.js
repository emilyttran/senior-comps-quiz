

var audioButtons = document.getElementsByTagName('audio');

 function stopAllAudio() {
    for(var i = 0; i < audioButtons.length; i++){
      audioButtons[i].pause();
    
    }
    
  }

function PlaySound(id) {
        stopAllAudio();
        var audio = document.getElementById(id);
        if(id == "mozart_17" || id == "sonata_311" || id == "watson_sample7000" || id == "watson_sonata_2500"){
            audio.volume = 0.035;
        } 
         audio.play();

  }

// To make sure only one sound plays at a time
document.body.onkeyup = function(e){
    if(e.keyCode == 83){
        console.log("Pressed");
        for(var j = 0; j < audioButtons.length; j++){
      audioButtons[j].pause();
    
    }
    }
}

// For the example box
var fixmeTop = $('.examples').offset().top;

$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop - 40 && currentScroll <= 8320) {
        $('.examples').css({
            position: 'fixed',
        });
    } else {
        $('.examples').css({
            position: 'static'
        });
    }
});