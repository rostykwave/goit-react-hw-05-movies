"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[927],{488:function(e,n,t){t.d(n,{DV:function(){return d},qb:function(){return u},j_:function(){return l}});var r=t(885),i=(t(158),t(373)),c=t(198),a=t(184),o=function(){return(0,a.jsx)(c.x,{display:"flex",justifyContent:"center",children:(0,a.jsx)(i.W0,{hcolor:function(e){return e.theme.colors.loader},height:80,width:80,ariaLabel:"loading"})})},s=t(791),u={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"},l=function(){var e=(0,s.useState)(u.IDLE),n=(0,r.Z)(e,2),t=n[0],i=n[1],c=(0,s.useState)({message:""}),a=(0,r.Z)(c,2);return{status:t,setStatus:i,error:a[0],setError:a[1]}},d=function(e){var n=e.status,t=e.error;return(0,a.jsxs)(a.Fragment,{children:["pending"===n&&(0,a.jsx)(o,{}),"rejected"===n&&(0,a.jsx)(c.x,{color:"red",textAlign:"center",children:t.message})]})}},905:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r,i,c=t(861),a=t(885),o=t(757),s=t.n(o),u=t(791),l=t(871),d=t(960),h=t(501),x=t(168),p=t(31),f=p.ZP.div(r||(r=(0,x.Z)(["\n  min-width: 200px;\n  max-width: 300px;\n  margin-top: 20px;\n"]))),v=t(198),g=(0,p.ZP)(h.rU)(i||(i=(0,x.Z)(["\n  color: #1b1b03;\n  text-decoration: none;\n"]))),j=t(488),m=t(184),b=function(){var e,n,t=(0,l.UO)().movieId,r=(0,u.useState)(null),i=(0,a.Z)(r,2),o=i[0],x=i[1],p=(0,j.j_)(),b=p.status,_=p.setStatus,w=p.error,E=p.setError;(0,u.useEffect)((function(){function e(){return e=(0,c.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(j.qb.PENDING),e.next=4,d.TP(n);case 4:t=e.sent,x(t),_(j.qb.RESOLVED),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),E(e.t0),_(j.qb.REJECTED);case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),e.apply(this,arguments)}!function(n){e.apply(this,arguments)}(t)}),[t,E,_]);var k=(0,l.TH)(),y=null!==(e=null===(n=k.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(j.DV,{status:b,error:w}),o&&(0,m.jsxs)("main",{children:[(0,m.jsx)(g,{to:y,children:"\u2190 Go back"}),(0,m.jsxs)(v.x,{display:"flex",children:[(0,m.jsx)(f,{children:(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(o.poster_path),alt:o.original_title})}),(0,m.jsxs)(v.x,{ml:"30px",children:[(0,m.jsxs)("h2",{children:[o.original_title,(0,m.jsxs)("span",{children:[" (",o.release_date.slice(0,4),")"]})]}),(0,m.jsxs)("p",{children:["User Score: ",o.vote_average]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:o.overview}),(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("p",{children:o.genres.length?o.genres.map((function(e){return e.name})).join(" "):"genres are not described"})]})]}),(0,m.jsxs)(v.x,{borderTop:"1px solid",borderBottom:"1px solid",children:[(0,m.jsx)("h3",{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(h.rU,{to:"cast",state:{from:k},children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(h.rU,{to:"reviews",state:{from:k},children:"Reviews"})})]})]}),(0,m.jsx)(v.x,{minHeight:"40vh",children:(0,m.jsx)(u.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading subpage..."}),children:(0,m.jsx)(l.j3,{})})})]})]})}},960:function(e,n,t){t.d(n,{Hg:function(){return l},TP:function(){return h},tx:function(){return p},z1:function(){return d},zv:function(){return x}});var r=t(861),i=t(757),c=t.n(i),a="https://api.themoviedb.org/3",o="c24a579521956747b362db1dbfab545a";function s(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(c().mark((function e(){var n,t,r,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:"",t=i.length>1&&void 0!==i[1]?i[1]:{},e.next=4,fetch(n,t);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not Found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(){return s("".concat(a,"/trending/movie/day?api_key=").concat(o))}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cat",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return s("".concat(a,"/search/movie?api_key=").concat(o,"&language=en-US&region=US&include_adult=false&query=").concat(e,"&page=").concat(n))}function h(e){return s("".concat(a,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"))}function x(e){return s("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"))}function p(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return s("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=").concat(n))}}}]);
//# sourceMappingURL=927.aa7453b2.chunk.js.map