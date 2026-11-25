
document.querySelectorAll('.swipe-cards').forEach(track=>{
 let startX=0,startScroll=0,active=false;
 track.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse'||e.button!==0)return;active=true;startX=e.clientX;startScroll=track.scrollLeft;track.setPointerCapture(e.pointerId);track.classList.add('dragging');});
 track.addEventListener('pointermove',e=>{if(active)track.scrollLeft=startScroll-(e.clientX-startX);});
 const stop=()=>{active=false;track.classList.remove('dragging');};
 track.addEventListener('pointerup',stop);track.addEventListener('pointercancel',stop);track.addEventListener('lostpointercapture',stop);
});
