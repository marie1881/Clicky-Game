(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"./assets/images/lisa.png","clicked":false},{"id":2,"image":"./assets/images/bart.png","clicked":false},{"id":3,"image":"./assets/images/homer.jpg","clicked":false},{"id":4,"image":"./assets/images/marge.png","clicked":false},{"id":5,"image":"./assets/images/moe.png","clicked":false},{"id":6,"image":"./assets/images/skinner.png","clicked":false},{"id":7,"image":"./assets/images/flanders.png","clicked":false},{"id":8,"image":"./assets/images/ralph.png","clicked":false},{"id":9,"image":"./assets/images/milhouse.png","clicked":false},{"id":10,"image":"./assets/images/burns.png","clicked":false},{"id":11,"image":"./assets/images/wiggum.png","clicked":false},{"id":12,"image":"./assets/images/apu.png","clicked":false}]')},,,function(e,t,s){e.exports=s(19)},,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),i=s(2),n=s.n(i),r=(s(14),s(3)),l=s(4),o=s(7),m=s(5),g=s(8),d=(s(15),function(e){return c.a.createElement("div",{onClick:function(){return e.setClicked(e.id)},className:"card col-md-3"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),u=(s(16),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),f=(s(17),function(e){return c.a.createElement("h1",{className:"title"},e.children)}),k=s(6),h=(s(18),0),p=0,S="Click on a simpsons charcter to gain points! Click on the same one twice and you lose!",E=function(e){function t(){var e,s;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(s=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={matches:k,correctGuesses:h,bestScore:p,clickMessage:S},s.setClicked=function(e){var t=s.state.matches,a=t.filter((function(t){return t.id===e}));if(a[0].clicked){console.log("Correct Guesses: "+h),console.log("Best Score: "+p),h=0,S="Bummer! You already clicked on this one.";for(var c=0;c<t.length;c++)t[c].clicked=!1;s.setState({clickMessage:S}),s.setState({correctGuesses:h}),s.setState({matches:t})}else if(h<11)a[0].clicked=!0,h++,S="Great! You haven't click on that one yet! Keep going!",h>p&&(p=h,s.setState({bestScore:p})),t.sort((function(e,t){return.5-Math.random()})),s.setState({matches:t}),s.setState({correctGuesses:h}),s.setState({clickMessage:S});else{a[0].clicked=!0,h=0,S="WOW!!! You got ALL of them!!! Now, let's see if you can do it again!",p=12,s.setState({bestScore:p});for(var i=0;i<t.length;i++)t[i].clicked=!1;t.sort((function(e,t){return.5-Math.random()})),s.setState({matches:t}),s.setState({correctGuesses:h}),s.setState({clickMessage:S})}},s}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(u,null,c.a.createElement(f,null,"The Simpsons Clicky Game"),c.a.createElement("h3",{className:"scoreSummary"},this.state.clickMessage),c.a.createElement("h3",{className:"scoreSummary card-header"},"Correct Guesses: ",this.state.correctGuesses,c.a.createElement("br",null),"Best Score: ",this.state.bestScore),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},this.state.matches.map((function(t){return c.a.createElement(d,{setClicked:e.setClicked,id:t.id,key:t.id,image:t.image})})))))}}]),t}(a.Component);n.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.15e37eeb.chunk.js.map