console.log("Welcome to Spotify");

//Initialize the variables
let songIndex =0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs=[
    {songName: "Salam-e-Ishq" , filePath:"1.mp3" , coverPath : "covers/1.jpg"},
    {songName: "Salam-e-Ishq" , filePath:"2.mp3" , coverPath : "covers/2.jpg"},
    {songName: "Salam-e-Ishq" , filePath:"3.mp3" , coverPath : "covers/3.jpg"},
    {songName: "Salam-e-Ishq" , filePath:"4.mp3" , coverPath : "covers/4.jpg"},
    {songName: "Salam-e-Ishq" , filePath:"5.mp3" , coverPath : "covers/5.jpg"},
    
]

audioElement.play();

//Handle play/pause click


//Listen to Events
myProgressBar.addEventListener('timeupdate' ,()=> {
    console.log('timeupdate')
    // update seekbar
})
