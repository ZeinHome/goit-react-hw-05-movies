"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{9031:function(t,n,r){r.d(n,{R8:function(){return v},YJ:function(){return h},f9:function(){return f},tx:function(){return w},zv:function(){return y}});var e=r(5861),c=r(7757),a=r.n(c),u=r(4569),o=r.n(u),i="https://api.themoviedb.org/3/",s="2d82379bc64921870065fc272794785d",p="movie";function f(){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(a().mark((function t(){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(i,"trending/").concat(p,"/").concat("day","?api_key=").concat(s));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(i,"movie/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(i,"search/movie?api_key=").concat(s,"&query=").concat(n));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return k.apply(this,arguments)}function k(){return(k=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(s));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.cast);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(s));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},9544:function(t,n,r){r.r(n);var e=r(2982),c=r(885),a=r(7398),u=r(9031),o=r(2791),i=r(184);n.default=function(){var t=(0,o.useState)([]),n=(0,c.Z)(t,2),r=n[0],s=n[1];return(0,o.useEffect)((function(){(0,u.f9)().then((function(t){return s((0,e.Z)(t))}))}),[]),(0,i.jsx)(a.ri,{children:r.map((function(t){var n=t.title,r=t.id;return(0,i.jsx)(a.J4,{children:(0,i.jsx)(a.DU,{to:"movies/".concat(r),children:n})},r)}))})}},7398:function(t,n,r){r.d(n,{DU:function(){return f},J4:function(){return p},ri:function(){return s}});var e,c,a,u=r(168),o=r(6031),i=r(501),s=o.ZP.ul(e||(e=(0,u.Z)([""]))),p=o.ZP.li(c||(c=(0,u.Z)(["\n  :not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]))),f=(0,o.ZP)(i.OL)(a||(a=(0,u.Z)(["\n  color: blue;\n"])))}}]);
//# sourceMappingURL=544.39ca832a.chunk.js.map