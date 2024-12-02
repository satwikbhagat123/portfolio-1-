let songsContainer = document.querySelector('#songsContainer')
let controls = document.querySelector('#controls');
let controlPanel = document.querySelector('#control')
let play = document.querySelector('#play')
let back = document.querySelector('#back');
let forward = document.querySelector('#forward');
let mainBtn = document.querySelector('#mainBtn');
let menu = document.querySelector('#menu');
let close = document.querySelector('#close');
let nav = document.querySelector('#navigation');
let songTitle = document.querySelector('#songTitle');
let songArtist = document.querySelector('#songArtist');
let songImg = document.querySelector('#songImg')

menu.addEventListener('click',function(){
    nav.style.width = "50%"
})
close.addEventListener('click',function(){
    nav.style.width = '0';
})

let songs =[
    {songName :'Maan Meri Jaan',artist : "King", url : './songs/Maan Meri Jaan_192(PagalWorld.com.cm).mp3',img : 'assets/download.jfif'},
    {songName :'O Maahi',artist : "Arijit Singh", url : './songs/O Mahi O Mahi_192(PagalWorld.com.cm).mp3',img : 'assets/o maahi.jfif'},
    {songName :'Pehle Bhi Main',artist : "Vishal Mishra", url : './songs/Pehle Bhi Main Tumse Mila Hu_192(PagalWorld.com.cm).mp3',img : 'assets/phle bhi main.jfif'},
    {songName :'Tu Hai Kahan',artist : "Uraan", url : './songs/Tu Hai Kahan_192(PagalWorld.com.cm).mp3',img : 'assets/tu hai kahan.jfif'}
];

let audio = new Audio();
let selectedSong = 0;

function addSongs(){
let clutter = '';
    songs.forEach(function(e,index){
        clutter +=`<div id="${index}" class=" w-full flex items-center gap-4 h-18 hover:bg-zinc-900">
        <div class="img pointer-events-none w-16 h-16 rounded-xl bg-zinc-500 overflow-hidden">
            <img src="${e.img}" alt="" class='w-full h-full'>
        </div>
        <div class="pointer-events-none h-16 flex items-center justify-between w-[70%] md:w-[88%]">
            <div>
                <h3 class="text-xl font-bold">${e.songName}</h3>
                <p>${e.artist}</p>
            </div>
            <button class="w-8 h-8 border-2 rounded-full flex items-center justify-center"><i class="ri-play-fill"></i></button>
        </div>
    </div>`
    })

songsContainer.innerHTML = clutter
audio.src = songs[selectedSong].url

}

addSongs()

mainBtn.addEventListener('click',function(){
    audio.src = songs[selectedSong].url
    play.innerHTML = `<i class="ri-pause-mini-line pointer-events-none"></i>`;
    
    flag = 1
    audio.play()
 
})

songsContainer.addEventListener('click',function(dets){
    console.log(dets.target.id);
    selectedSong = dets.target.id; 
    audio.src = songs[selectedSong].url
    play.innerHTML = `<i class="ri-pause-mini-line pointer-events-none"></i>`;
    songTitle.textContent = songs[selectedSong].songName;
    songArtist.textContent = songs[selectedSong].artist;
    songImg.src = songs[selectedSong].img
    flag = 1
    audio.play()
})




let flag = 0 ;
play
.addEventListener('click',function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-mini-line pointer-events-none"></i>`;
        
        audio.play()
        flag = 1;
    }else{
        play.innerHTML = `<i  class=" ri-play-line pointer-events-none"></i>`
        audio.pause();
        flag = 0;
    }
})

back.addEventListener('click',function(){
    if(selectedSong>0){

        selectedSong--;
        console.log(selectedSong);
        addSongs()
        songTitle.textContent = songs[selectedSong].songName;
        songArtist.textContent = songs[selectedSong].artist;
        songImg.src = songs[selectedSong].img
        audio.play()
    }else{
        back.style.opacity = 0.4
    }
   
})

forward.addEventListener('click',function(){
    if(selectedSong < songs.length -1){
        selectedSong++;
        addSongs()
        songTitle.textContent = songs[selectedSong].songName;
        songArtist.textContent = songs[selectedSong].artist;
        songImg.src = songs[selectedSong].img
        audio.play()
    }else{
        forward.style.opacity = 0.4
    }
})
console.log(selectedSong);
playAudio()

