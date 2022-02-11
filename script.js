document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', ()=> {
    let song = document.querySelector('#input').value;

    console.log ("Música", song);

    if(song !== ''){
       let songArray = song.split('');
       playComposition(songArray);
    }
});
function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElemennt = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement){
        audioElement.currentTime =0;
        audioElement.play();
    }

    if (keyElemennt){
        keyElemennt.classList.add('active'); 

        setTimeout(() => {
           keyElemennt.classList.remove('active') 
        }, 300);
    }
}

function playComposition(songArray){
    let wait = 0;
    for (let songItem of songArray){
        setTimeout(() => {
            playSound (`key${songItem}`);   
        }, wait);

        wait += 250 ;
       
    }
}