"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(t,n,e){e.r(n);var r=e(2982),c=e(885),a=e(2791),u=e(6871),i=e(9031),o=e(184);n.default=function(){var t=(0,a.useState)(null),n=(0,c.Z)(t,2),e=n[0],s=n[1],p=(0,u.UO)().id;return(0,a.useEffect)((function(){(0,i.tx)(p).then((function(t){return s((0,r.Z)(t))}))}),[p]),(0,o.jsx)(o.Fragment,{children:e?"We dont have any Reviews ":(0,o.jsx)("ul",{children:e.map((function(t){return(0,o.jsxs)("li",{children:[(0,o.jsxs)("h2",{children:["AUTHOR: ",t.author]}),(0,o.jsx)("p",{children:t.content})]},t.id)}))})})}},9031:function(t,n,e){e.d(n,{R8:function(){return v},YJ:function(){return l},f9:function(){return f},tx:function(){return k},zv:function(){return m}});var r=e(5861),c=e(7757),a=e.n(c),u=e(4569),i=e.n(u),o="https://api.themoviedb.org/3/",s="2d82379bc64921870065fc272794785d",p="movie";function f(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(o,"trending/").concat(p,"/").concat("day","?api_key=").concat(s));case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(o,"movie/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(o,"search/movie?api_key=").concat(s,"&query=").concat(n));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(s));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(s));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=186.a0f3ceae.chunk.js.map