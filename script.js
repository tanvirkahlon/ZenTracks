console.log("Welcome to ZenTracks");

let songIndex = 0;
let audioElement = new Audio('06 bad idea.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName:"bad idea", filePath: "06 bad idea.mp3", coverPath:"cover1.jpg" },
    {songName:"bad idea", filePath: "06 bad idea.mp3", coverPath:"cover2.jpg" },
    {songName:"bad idea", filePath: "06 bad idea.mp3", coverPath:"cover3.jpg" },
    {songName:"bad idea", filePath: "06 bad idea.mp3", coverPath:"cover4.jpg" },
]

audioElement.play();

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})
//listen to events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

})