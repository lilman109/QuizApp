(this["webpackJsonpquiz-ts-app"]=this["webpackJsonpquiz-ts-app"]||[]).push([[0],{27:function(t,n,e){"use strict";e.r(n);var r,a=e(0),c=e.n(a),s=e(15),i=e.n(s),o=e(3),u=e(4),l=e.n(u),d=e(9),b=e(2),p=e(13);!function(t){t.EASY="easy",t.MEDIUM="medium",t.HARD="hard"}(r||(r={}));var f,x,j,g,h=function(){var t=Object(d.a)(l.a.mark((function t(n,e){var r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(n,"&difficulty=").concat(e,"&type=multiple"),t.next=3,fetch(r);case 3:return t.next=5,t.sent.json();case 5:return a=t.sent,t.abrupt("return",a.results.map((function(t){return Object(p.a)(Object(p.a)({},t),{},{answers:(n=[].concat(Object(o.a)(t.incorrect_answers),[t.correct_answer]),Object(o.a)(n).sort((function(){return Math.random()-.5})))});var n})));case 7:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),m=e(5),O=e(6),w=O.b.div(f||(f=Object(m.a)(["\n\tmax-width: 1100px;\n\tbackground: #ebfeff;\n\tborder-radius: 10px;\n\tborder: 2px solid #0085a3;\n\tpadding: 20px;\n\tbox-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n\ttext-align: center;\n\n\tp {\n\t\tfont-size: 1rem;\n\t}\n"]))),v=O.b.div(x||(x=Object(m.a)(["\n\ttransition: all 0.3s ease;\n\n\t:hover {\n\t\topacity: 0.8;\n\t}\n\n\tbutton {\n\t\tcursor: pointer;\n\t\tuser-select: none;\n\t\tfont-size: 0.8rem;\n\t\twidth: 100%;\n\t\theight: 40px;\n\t\tmargin: 5px 0;\n\t\tbackground: ",";\n\t\tborder: 3px solid #fff;\n\t\tbox-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n\t\tcolor: #fff;\n\t\ttext-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n\t}\n"])),(function(t){var n=t.correct,e=t.userClicked;return n?"linear-gradient(90deg, #56ffa4, #59bc86)":!n&&e?"linear-gradient(90deg, #ff5656, #c16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),k=e(1),y=function(t){var n=t.question,e=t.answers,r=t.callback,a=t.userAnswer,c=t.questionNumber,s=t.totalQuestions;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(w,{children:[Object(k.jsxs)("p",{className:"number",children:["Question: ",c," / ",s]}),Object(k.jsx)("p",{dangerouslySetInnerHTML:{__html:n}}),Object(k.jsx)("div",{children:e.map((function(t){return Object(k.jsx)(v,{correct:(null===a||void 0===a?void 0:a.correctAnswer)===t,userClicked:(null===a||void 0===a?void 0:a.answer)===t,children:Object(k.jsx)("button",{disabled:!!a,value:t,onClick:r,children:Object(k.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})})},t)}))})]})})},S=e.p+"static/media/bg.5d1966a6.jpg",q=Object(O.a)(j||(j=Object(m.a)(["\n  html {\n    height: 100%\n  }\n\n  body {\n    background-image: url(",');\n    background-size: cover;\n    margin: 0;\n    padding: 0 20px;\n    display: flex;\n    justify-content: center;\n  }\n\n  * {\n    box-sizing: border-box;\n    font-family: "Catamaran", sans-serif;\n  }\n'])),S),z=O.b.div(g||(g=Object(m.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\t> p {\n\t\tcolor: #fff;\n\t}\n\n\t.score {\n\t\tcolor: #fff;\n\t\tfont-size: 2rem;\n\t\tmargin: 0;\n\t}\n\n\th1 {\n\t\tfont-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold',\n\t\t\tsans-serif, Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n\n\t\tbackground-image: linear-gradient(180deg, #fff, #87f1ff);\n\t\tbackground-size: 100%;\n\t\tbackground-clip: text;\n\t\t-webkit-background-clip: text;\n\t\t-webkit-text-fill-color: transparent;\n\t\t-moz-background-clip: text;\n\t\t-moz-text_fill-color: transparent;\n\t\tfilter: drop-shadow(2px 2px #0085a3);\n\t\tfont-size: 70px;\n\t\tfont-weight: 400;\n\t\ttext-align: center;\n\t\tmargin: 20px;\n\t}\n\n\t.start,\n\t.next_question {\n\t\tcursor: pointer;\n\t\tbackground: linear-gradient(180deg, #fff, #ffcc91);\n\t\tborder: 2px sold #d38558;\n\t\tbox-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n\t\tborder-radius: 10px;\n\t\theight: 40px;\n\t\tmargin: 20px 0;\n\t\tpadding: 0 40px;\n\t}\n\n\t.start {\n\t\tmax-width: 200px;\n\t}\n"]))),_=function(){var t=Object(a.useState)(!1),n=Object(b.a)(t,2),e=n[0],c=n[1],s=Object(a.useState)([]),i=Object(b.a)(s,2),u=i[0],p=i[1],f=Object(a.useState)(0),x=Object(b.a)(f,2),j=x[0],g=x[1],m=Object(a.useState)([]),O=Object(b.a)(m,2),w=O[0],v=O[1],S=Object(a.useState)(0),_=Object(b.a)(S,2),N=_[0],A=_[1],C=Object(a.useState)(!0),I=Object(b.a)(C,2),M=I[0],Q=I[1];console.log(u);var H=function(){var t=Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(!0),Q(!1),t.next=4,h(10,r.EASY);case 4:n=t.sent,console.log(E),p(n),A(0),v([]),g(0),c(!1);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=function(){var t=j+1;10===t?Q(!0):g((function(t){return t+1}))};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(q,{}),Object(k.jsxs)(z,{children:[Object(k.jsx)("h1",{children:"React Quiz"}),M||10===w.length?Object(k.jsx)("button",{className:"start",onClick:H,children:"Start"}):null,!M&&Object(k.jsxs)("p",{className:"score",children:["Score: ",N]}),e&&Object(k.jsx)("p",{className:"loading_question",children:"Loading Questions..."}),!e&&!M&&Object(k.jsx)(y,{questionNumber:j+1,totalQuestions:10,question:u[j].question,answers:u[j].answers,userAnswer:w?w[j]:void 0,callback:function(t){if(!M){var n=t.currentTarget.value,e=u[j].correct_answer===n;e&&A((function(t){return t+1}));var r={question:u[j].question,answer:n,correct:e,correctAnswer:u[j].correct_answer};v((function(t){return[].concat(Object(o.a)(t),[r])}))}}}),M||e||w.length!==j+1||9===j?null:Object(k.jsx)("button",{className:"next_question",onClick:E,children:"Next Question"})]})]})};i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(_,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.e5fb4fa4.chunk.js.map