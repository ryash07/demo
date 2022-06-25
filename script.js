console.log("welcome to spotify");
let audioElement = new Audio("songs/1.mp3");
let songIndex = 0;
var masterplay = document.getElementById('masterplay');
var gif = document.getElementById("gif");
var songBanner = document.querySelectorAll("img")[9];

masterplay.addEventListener("click", function(){

    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity= 1;
        songBanner.style.opacity=1;

    }else{
        audioElement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity= 0;
        songBanner.style.opacity=0;
    }
});

var myProgressBar= document.getElementById("myProgressBar");

audioElement.addEventListener("timeupdate", function(){
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", function(){
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
});



let songs = [
    {songName: "What Makes You Beautiful - One Direction" , filePath: "songs/1.mp3", coverPath: "images/cover1.jpg"},
    {songName: "Night Changes - One Direction" , filePath: "songs/2.mp3", coverPath: "images/cover2.jpg"},
    {songName: "Perfect - One Direction" , filePath: "songs/3.mp3", coverPath: "images/cover3.jpg"},
    {songName: "History - One Direction" , filePath: "songs/4.mp3", coverPath: "images/cover4.jpg"},
    {songName: "Live While We're Young - One Direction" , filePath: "songs/5.mp3", coverPath: "images/cover5.jpg"},
    {songName: "Steal My Girl - One Direction" , filePath: "songs/6.mp3", coverPath: "images/cover6.jpg"},
    {songName: "Story Of My Life - One Direction" , filePath: "songs/7.mp3", coverPath: "images/cover7.jpg"},
    {songName: "You & I - One Direction" , filePath: "songs/8.mp3", coverPath: "images/cover8.jpg"},

]

var songItems = Array.from(document.getElementsByClassName("songItem"));

songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}



masterplay.onmouseover = function(){
    masterplay.classList.add("masterplayClass");
    
}
masterplay.onmouseout = function(){
    masterplay.classList.remove("masterplayClass");
}

