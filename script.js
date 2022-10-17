let music = new Audio();
document.addEventListener('keypress',(e)=>{
    
    //get press key name
    let key_name = e.key;

    //add effect on display keys
    let all_keys = document.querySelector(`button[data-key=${e.key}]`);
    all_keys.classList.add('click');

    //remove display effect
    document.addEventListener('keyup',()=>{
        all_keys.classList.remove('click');
    });

    //play relative sound
    music.src=`./sounds/${key_name}.wav`;
    music.play();
})
