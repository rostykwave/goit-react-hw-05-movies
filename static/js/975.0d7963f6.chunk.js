"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[975],{3488:function(e,n,t){t.d(n,{D:function(){return a}});t(3158);var r=t(6373),i=t(9198),c=t(184),o=function(){return(0,c.jsx)(i.x,{display:"flex",justifyContent:"center",children:(0,c.jsx)(r.W0,{hcolor:function(e){return e.theme.colors.loader},height:80,width:80,ariaLabel:"loading"})})},a=function(e){var n=e.status,t=e.error;return(0,c.jsxs)(c.Fragment,{children:["pending"===n&&(0,c.jsx)(o,{}),"rejected"===n&&(0,c.jsx)(i.x,{color:"red",textAlign:"center",children:t.message})]})}},6004:function(e,n,t){t.d(n,{q:function(){return r}});var r={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},3726:function(e,n,t){t.d(n,{j:function(){return o}});var r=t(885),i=t(6004),c=t(2791),o=function(){var e=(0,c.useState)(i.q.IDLE),n=(0,r.Z)(e,2),t=n[0],o=n[1],a=(0,c.useState)({message:""}),s=(0,r.Z)(a,2);return{status:t,setStatus:o,error:s[0],setError:s[1]}}},5251:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r,i,c=t(5861),o=t(885),a=t(7757),s=t.n(a),u=t(2791),l=t(6871),d=t(1615),h=t(3488),x=t(6004),f=t(3726),p=t(3504),v=t(168),g=t(6031),j=g.ZP.div(r||(r=(0,v.Z)(["\n  min-width: 200px;\n  max-width: 300px;\n  margin-top: 20px;\n"]))),m=t(9198),b=(0,g.ZP)(p.rU)(i||(i=(0,v.Z)(["\n  color: #1b1b03;\n  text-decoration: none;\n"]))),_=t(184),w=function(e){var n,t,r=e.movie,i=e.location,c=null!==(n=null===(t=i.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies";return(0,_.jsxs)("main",{children:[(0,_.jsx)(b,{to:c,children:"\u2190 Go back"}),(0,_.jsxs)(m.x,{display:"flex",children:[(0,_.jsx)(j,{children:(0,_.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r.poster_path),alt:r.original_title})}),(0,_.jsxs)(m.x,{ml:"30px",children:[(0,_.jsxs)("h2",{children:[r.original_title,(0,_.jsxs)("span",{children:[" (",r.release_date.slice(0,4),")"]})]}),(0,_.jsxs)("p",{children:["User Score: ",r.vote_average]}),(0,_.jsx)("h3",{children:"Overview"}),(0,_.jsx)("p",{children:r.overview}),(0,_.jsx)("h3",{children:"Genres"}),(0,_.jsx)("p",{children:r.genres.length?r.genres.map((function(e){return e.name})).join(" "):"genres are not described"})]})]}),(0,_.jsxs)(m.x,{borderTop:"1px solid",borderBottom:"1px solid",children:[(0,_.jsx)("h3",{children:"Additional information"}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsx)(p.rU,{to:"cast",state:{from:i},children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(p.rU,{to:"reviews",state:{from:i},children:"Reviews"})})]})]}),(0,_.jsx)(m.x,{minHeight:"40vh",children:(0,_.jsx)(u.Suspense,{fallback:(0,_.jsx)("div",{children:"Loading subpage..."}),children:(0,_.jsx)(l.j3,{})})})]})},E=function(){var e=(0,l.UO)().movieId,n=(0,u.useState)(null),t=(0,o.Z)(n,2),r=t[0],i=t[1],a=(0,f.j)(),p=a.status,v=a.setStatus,g=a.error,j=a.setError;(0,u.useEffect)((function(){function n(){return n=(0,c.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(x.q.PENDING),e.next=4,d.TP(n);case 4:t=e.sent,i(t),v(x.q.RESOLVED),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),j(e.t0),v(x.q.REJECTED);case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),n.apply(this,arguments)}!function(e){n.apply(this,arguments)}(e)}),[e,j,v]);var m=(0,l.TH)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(h.D,{status:p,error:g}),r&&(0,_.jsx)(w,{movie:r,location:m})]})}},1615:function(e,n,t){t.d(n,{zv:function(){return x},TP:function(){return h},tx:function(){return f},Hg:function(){return l},z1:function(){return d}});var r=t(5861),i=t(7757),c=t.n(i),o="https://api.themoviedb.org/3",a="c24a579521956747b362db1dbfab545a";function s(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(c().mark((function e(){var n,t,r,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:"",t=i.length>1&&void 0!==i[1]?i[1]:{},e.next=4,fetch(n,t);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not Found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(){return s("".concat(o,"/trending/movie/day?api_key=").concat(a))}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cat",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return s("".concat(o,"/search/movie?api_key=").concat(a,"&language=en-US&region=US&include_adult=false&query=").concat(e,"&page=").concat(n))}function h(e){return s("".concat(o,"/movie/").concat(e,"?api_key=").concat(a,"&language=en-US"))}function x(e){return s("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(a,"&language=en-US"))}function f(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return s("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=").concat(n))}}}]);
//# sourceMappingURL=975.0d7963f6.chunk.js.map