function getRandonNumber(t,e){return Math.round(Math.random()*(e-t)+t)}function createStars(t,e,o){const n=document.querySelector(".stars-box");for(let r=0;r<e;r++){let e=document.querySelector(".star").cloneNode(!0);e.className="star "+t;const r=getStarCoordinates(o);e.style.top=r.top+"%",e.style.left=r.left+"%",n.appendChild(e)}}function getStarCoordinates(t){for(;;){const e={top:getRandonNumber(5,95),left:getRandonNumber(5,95)};if(console.log(e),console.log(t.startLeft<e.left&&e.left<t.endLeft),!(t.startLeft+5<e.left&&e.left<t.endLeft-5&&t.startTop<e.top&&e.top<t.endTop))return e}}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#moon1").getBoundingClientRect(),e=window.screen.availWidth,o=window.screen.availHeight,n={startLeft:t.left/e*100,endLeft:(t.left+t.width)/e*100,startTop:t.top/o*100,endTop:(t.top+t.height)/o*100};createStars("starSize_sm",200,n),createStars("starSize_md",50,n),createStars("starSize_bg",10,n)});