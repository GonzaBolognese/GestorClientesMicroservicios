import{i as h,c as D}from"./index-BQcpE1it.js";import{createGesture as M}from"./index3-DuracAcM.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const G=(n,m,g,p,X)=>{const c=n.ownerDocument.defaultView;let o=h(n);const w=t=>{const{startX:e}=t;return o?e>=c.innerWidth-50:e<=50},a=t=>o?-t.deltaX:t.deltaX,f=t=>o?-t.velocityX:t.velocityX;return M({el:n,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:t=>(o=h(n),w(t)&&m()),onStart:g,onMove:t=>{const e=a(t)/c.innerWidth;p(e)},onEnd:t=>{const s=a(t),e=c.innerWidth,r=s/e,i=f(t),v=e/2,l=i>=0&&(i>.2||s>v),u=(l?1-r:r)*e;let d=0;if(u>5){const y=u/Math.abs(i);d=Math.min(y,540)}X(l,r<=0?.01:D(0,r,.9999),d)}})};export{G as createSwipeBackGesture};
