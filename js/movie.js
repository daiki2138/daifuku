const mediasVol_def=function(){
    const videos=document.getElementsByTagName('video');
    const len2=videos.length;
    for(let n=0; n<len2; n++ ) videos[n].volume = 0.5; 
}
window.addEventListener('DOMContentLoaded' , function(){
      mediasVol_def();
}, false); 