"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[722],{9031:function(n,t,e){e.d(t,{R8:function(){return x},YJ:function(){return h},f9:function(){return f},tx:function(){return g},zv:function(){return v}});var r=e(5861),c=e(7757),a=e.n(c),u=e(4569),o=e.n(u),i="https://api.themoviedb.org/3/",s="2d82379bc64921870065fc272794785d",p="movie";function f(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(i,"trending/").concat(p,"/").concat("day","?api_key=").concat(s));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(i,"movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(i,"search/movie?api_key=").concat(s,"&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},7398:function(n,t,e){e.d(t,{DU:function(){return f},J4:function(){return p},ri:function(){return s}});var r,c,a,u=e(168),o=e(6031),i=e(501),s=o.ZP.ul(r||(r=(0,u.Z)([""]))),p=o.ZP.li(c||(c=(0,u.Z)(["\n  :not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]))),f=(0,o.ZP)(i.OL)(a||(a=(0,u.Z)(["\n  color: blue;\n"])))},9722:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,c,a,u=e(2982),o=e(1413),i=e(885),s=e(2791),p=e(8174),f=e(9031),l=e(168),h=e(6031),d=h.ZP.form(r||(r=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  margin-top: 40px;\n  margin-left: 20px;\n"]))),x=h.ZP.input(c||(c=(0,l.Z)(["\n  display: inline-block;\n  width: 300px;\n  font: inherit;\n  font-size: 20px;\n  padding: 4px 10px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),m=h.ZP.button(a||(a=(0,l.Z)(["\n  display: inline-block;\n  height: 35px;\n  border: 0.1px solid black;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  padding: 2px 8px;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n"]))),v=e(7398),y=e(501),g=e(6871),k=e(184);var Z=function(){var n=(0,g.s0)(),t=(0,g.TH)(),e=(0,s.useState)(""),r=(0,i.Z)(e,2),c=r[0],a=r[1],l=(0,s.useState)([]),h=(0,i.Z)(l,2),Z=h[0],b=h[1],w=(0,y.lr)(),_=(0,i.Z)(w,2)[1],j=new URLSearchParams(t.search).get("query");return(0,s.useEffect)((function(){j&&(0,f.R8)(j).then(b).catch(console.log)}),[j]),(0,k.jsxs)("div",{children:[(0,k.jsxs)(d,{type:"button",onClick:function(e){(e.preventDefault(),""!==c.trim())?(n((0,o.Z)((0,o.Z)({},t),{},{search:"query=".concat(c)})),(0,f.R8)(c).then((function(n){return b((0,u.Z)(n))})),_(""!==c?{query:c}:{})):p.Am.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442!")},children:[(0,k.jsx)(x,{type:"text",autocomplete:"off",value:c,onChange:function(n){a(n.currentTarget.value.toLowerCase())}}),(0,k.jsx)(m,{children:"Search"})]}),(0,k.jsx)("ul",{children:0===Z.length?null:Z.map((function(n){return(0,k.jsx)(v.J4,{children:(0,k.jsxs)(v.DU,{to:"".concat(n.id),state:{from:t},children:[n.title," "]})},n.id)}))})]})}}}]);
//# sourceMappingURL=722.8daf6dab.chunk.js.map