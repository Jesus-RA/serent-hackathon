(this["webpackJsonpmemory-game-ap"]=this["webpackJsonpmemory-game-ap"]||[]).push([[0],[,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(3),s=c.n(r),d=(c(8),c(9),c(0));var l=e=>{let{onStartGame:t}=e;return Object(d.jsxs)("div",{className:"screen",children:[Object(d.jsx)("h1",{children:"Welcome to My Game App!!"}),Object(d.jsx)("p",{children:"This is the splash screen of the game."}),Object(d.jsx)("button",{onClick:t,children:"Start Game"})]})};c(11),c(12);var u=e=>{let{cardNumber:t,cardIndex:c,isClicked:a,onCardClick:r}=e;const[s,l]=Object(n.useState)("card");return Object(n.useEffect)((()=>{a?l("card reveal-card"):s.includes("reveal-card")&&(l("card hide-card"),setTimeout((()=>{l("card")}),200))}),[a]),Object(d.jsx)("div",{className:s,onClick:()=>{r(t,c)},children:Object(d.jsx)("p",{children:t})})};var i=e=>{let{x:t,y:c,onEndGame:a}=e;const[r,s]=Object(n.useState)(new Set),[l,i]=Object(n.useState)(0),[o,j]=Object(n.useState)("gamescreen show-all");setTimeout((()=>{j("gamescreen")}),2e3);const[m]=Object(n.useState)(function(e){const t=[];for(let c=1;c<=e/2;c++)t.push(c,c);return t}(t*c).sort((()=>Math.random()-.5)));const[b,x]=Object(n.useState)({}),[h,O]=Object(n.useState)({cardNumber:null,cardIndex:null}),[p,f]=Object(n.useState)({cardNumber:null,cardIndex:null});function v(e,t){h.cardIndex!==t&&(null!==h.cardIndex&&null!==p.cardIndex||(N(t),null===h.cardNumber?O({cardNumber:e,cardIndex:t}):(f({cardNumber:e,cardIndex:t}),setTimeout((()=>{h.cardNumber===e&&h.cardIndex!==t?(s((t=>t.add(e))),I()):setTimeout((()=>{i(l+1),console.log({firstCard:h}),null!==h.cardIndex&&N(h.cardIndex),N(t),I()}),1e3)}),0))))}function I(){O({cardNumber:null,cardIndex:null}),f({cardNumber:null,cardIndex:null})}function N(e){x((t=>({...t,[e]:!t[e]})))}return Object(n.useEffect)((()=>{setTimeout((()=>{r.size===t*c/2&&(alert("Congratulations! You have won the game!"),I(),x({}),s(new Set),a())}),500)}),[r]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("span",{children:["Tries: ",l]}),Object(d.jsxs)("div",{className:o,style:{gridTemplateColumns:`repeat(${t}, 1fr)`},children:[m.map(((e,t)=>Object(d.jsx)(u,{cardNumber:e,cardIndex:t,isClicked:b[t],onCardClick:v},t))),Object(d.jsx)("button",{onClick:a,children:"End Game"})]})]})};c(13);var o=e=>{let{onRestartGame:t}=e;return Object(d.jsxs)("div",{className:"end-screen",children:[Object(d.jsx)("h1",{children:"Game Over"}),Object(d.jsx)("p",{children:"Thanks for playing!"}),Object(d.jsx)("button",{onClick:t,children:"Play Again"})]})};var j=function(){const[e,t]=Object(n.useState)("splash");return Object(d.jsxs)("div",{className:"App",children:["splash"===e&&Object(d.jsx)(l,{onStartGame:()=>{t("play")}}),"play"===e&&Object(d.jsx)(i,{x:3,y:2,onEndGame:()=>{t("end")}}),"end"===e&&Object(d.jsx)(o,{onRestartGame:()=>{t("splash")}})]})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.0752680a.chunk.js.map