const root=document.documentElement;
window.addEventListener('pointermove',e=>{root.style.setProperty('--mx',`${e.clientX}px`);root.style.setProperty('--my',`${e.clientY}px`)},{passive:true});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${(i%3)*80}ms`;observer.observe(el)});
document.querySelectorAll('.tilt').forEach(card=>{card.addEventListener('pointermove',e=>{if(matchMedia('(pointer: coarse)').matches)return;const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${-y*3}deg) rotateY(${x*4}deg) translateY(-3px)`});card.addEventListener('pointerleave',()=>card.style.transform='')});
