
    function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }
  const piano = document.querySelector('.piano');
  

  piano.addEventListener('click', (event) => {
    if(event.target.classList.contains('piano-key')
    ) {
      const note = event.target.dataset.note;
      const src = `assets/audio/${note}.mp3`;
      playAudio(src);
      }   
    }); 






    const COLLECTION = document.querySelectorAll('.piano-key');
    COLLECTION.forEach((elem) => { elem.addEventListener("mousedown", (event) => { event.target.classList.add("piano-key-active"); })
                                  elem.addEventListener("mouseup", (event) => { event.target.classList.remove("piano-key-active"); })
  
  
  }) 
  const  keyboardDown = e => {  
    let key = piano.querySelector(`[data-letter="${e.code.slice(-1)}"`);
    playAudio(`./assets/audio/${key.dataset.note}.mp3`);
     
           }
   
    window.addEventListener('keydown', keyboardDown);

   piano.addEventListener('mouseover', function (e) {
    e.preventDefault()
    if (mouseIsDown) {
        playAudio(`assets/audio/${e.target.dataset.note}.mp3`)
    }
});
const buttonContainer = document.querySelector('.btn-container');
const buttons = document.querySelectorAll('.btn');

buttonContainer.addEventListener('click', (e) => {
  if (e.target.tagName != 'BUTTON' ||  
      e.target.classList.contains('btn-active')) return;

  buttons.forEach( el => el.classList.remove('btn-active'));
  e.target.classList.add('btn-active');

  switchLetters(e);
});
const switchLetters = (e) => {
  if (e.target.classList.contains('btn-letters')) {
      COLLECTION.forEach( key => key.classList.add('piano-key-letter'));
  } else {
      COLLECTION.forEach( key => key.classList.remove('piano-key-letter'));
  }
};


   /* window.addEventListener('keydown', (event) => {
      if(event.code === 'KeyF') {
        const src = `assets/audio/d.mp3`; 
        playAudio(src);
      }
    });
  
    window.addEventListener('keydown', (event) => {
      if(event.code === 'KeyG') {
        const src = `assets/audio/e.mp3`; 
        playAudio(src);
      }
    });
    window.addEventListener('keydown', (event) => {
      if(event.code === 'KeyH') {
        const src = `assets/audio/f.mp3`; 
        playAudio(src);
      }
    });
    window.addEventListener('keydown', (event) => {
      if(event.code === 'KeyJ') {
        const src = `assets/audio/g.mp3`; 
        playAudio(src);
      }
    });
    window.addEventListener('keydown', (event) => {
      if(event.code === 'KeyK') {
        const src = `assets/audio/a.mp3`; 
        playAudio(src);
      }
    });
    window.addEventListener('keydown', (event) => {
      if(event.code === 'KeyL') {
        const src = `assets/audio/b.mp3`; 
        playAudio(src);
      }
    });
    window.addEventListener('keydown', (event) => {
      if(event.code === 'KeyR') {
        const src = `assets/audio/c♯.mp3`; 
        playAudio(src);
      }
    });
    window.addEventListener('keydown', (event) => {
      if(event.code === 'KeyT') {
        const src = `assets/audio/d♯.mp3`; 
        playAudio(src);
      }
    });
    window.addEventListener('keydown', (event) => {
      if(event.code === 'KeyU') {
        const src = `assets/audio/f♯.mp3`; 
        playAudio(src);
      }
    });
    window.addEventListener('keydown', (event) => {
      if(event.code === 'KeyI') {
        const src = `assets/audio/g♯.mp3`; 
        playAudio(src);
      }
    });
    window.addEventListener('keydown', (event) => {
      if(event.code === 'KeyO') {
        const src = `assets/audio/a♯.mp3`; 
        playAudio(src);
      }
    });
  //  const COLLECTION = document.querySelector('.piano-key');
 //const startCorrespondOver = () => { COLLECTION.forEach((elem) => { elem.addEventListener("mouseover", (event) => {event.target.classList.add("piano-key-active");})
                                                             //    elem.addEventListener("mouseout", (event) => {event.target.classList.remove("piano-key-active");})                                  




// })  } */

    