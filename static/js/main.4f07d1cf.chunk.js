(this["webpackJsonpthis-day-in-history"]=this["webpackJsonpthis-day-in-history"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(13),r=n.n(s),o=n(7),i=n(23),u=n(8),l=n(5),d="SET_TODAY_DATE",j="SET_TODAYS_EVENTS",b="SET_EVENTS_ON_DATE",O=n(25),h={today:(new Date).toISOString().slice(5,10),todayObj:new Date,lang:"UK",dates:{}},f=Object(i.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(l.a)(Object(l.a)({},e),{},{today:t.payload.date});case j:return Object(l.a)(Object(l.a)({},e),{},{dates:Object(l.a)(Object(l.a)({},e.dates),{},Object(u.a)({},e.today,t.payload.events))});case b:return Object(l.a)(Object(l.a)({},e),{},{dates:Object(l.a)(Object(l.a)({},e.dates),{},Object(u.a)({},t.payload.dateID,t.payload.events))});default:return e}}),h,Object(i.a)(O.a)),v=(n(33),n(16)),p=n(2),x=(n(34),n(35),n(1)),y=function(){var e="UA",t="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/275/flag-ukraine_1f1fa-1f1e6.png";return Object(x.jsx)("button",{className:"LanguageButton",style:{backgroundImage:"url(".concat(t,")")},alt:e})},m=(n(37),function(){return Object(x.jsx)("nav",{className:"NavTabs",children:[{to:"/past-week",title:"Past week"},{to:"/",title:"Today"},{to:"/next-week",title:"Next week"}].map((function(e){return t=e.to,n=e.title,Object(x.jsx)(v.b,{to:t,exact:!0,className:"NavLink",activeStyle:{background:"rgba(91, 91, 91, 0.1)",borderBottom:"3px solid #FF0000"},children:n},"tab-link-to-".concat(t));var t,n}))})}),w=n(6),g=n.n(w),k=n(11),D=n(22),E="https://uk.wikipedia.org/api/rest_v1/feed/onthisday/selected",N=new Date,T=function(){var e=Object(k.a)(g.a.mark((function e(){var t,n,a,c,s,r,o=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:N.getMonth()+1,n=o.length>1&&void 0!==o[1]?o[1]:N.getDate(),e.next=4,fetch("".concat(E,"/").concat(t,"/").concat(n));case 4:return a=e.sent,e.next=7,a.json();case 7:if(c=e.sent,2!==t||28!==n||S(N.getFullYear())){e.next=16;break}return e.next=11,fetch("".concat(E,"/2/29"));case 11:return s=e.sent,e.next=14,s.json();case 14:return r=e.sent,e.abrupt("return",[].concat(Object(D.a)(c.selected),Object(D.a)(r.selected)));case 16:return e.abrupt("return",c.selected);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e){return 0===e%4&&0!==e%100||0===e%400},_=function(e){return{type:j,payload:{events:e}}},C=function(e,t){return{type:b,payload:{dateID:e,events:t}}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1?arguments[1]:void 0;return function(n){(t?[-1,-2,-3,-4,-5,-6,-7]:[1,2,3,4,5,6,7]).forEach(function(){var t=Object(k.a)(g.a.mark((function t(a){var c,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(c=new Date).setDate(e.getDate()+a),t.next=4,T(c.getMonth()+1,c.getDate());case 4:s=t.sent,n(C(c.toISOString().slice(5,10),s));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},I=function(e){return Object.keys(e.dates).reduce((function(t,n){return n>e.today&&(t[n]=e.dates[n]),t}),{})},M=function(e){return Object.keys(e.dates).reduce((function(t,n){return n<e.today&&(t[n]=e.dates[n]),t}),{})},B=function(e){return Object(u.a)({},e.today,e.dates[e.today])},F=n(21),L=(n(41),function(e){var t,n,a,c=e.event,s=c.text,r=c.year,o=null===c||void 0===c||null===(t=c.pages[0])||void 0===t||null===(n=t.thumbnail)||void 0===n?void 0:n.source,i=null===c||void 0===c||null===(a=c.pages[0])||void 0===a?void 0:a.displaytitle;return Object(x.jsxs)("article",{className:"EventCard",children:[Object(x.jsx)("img",{className:"EventCard-picture",src:o,alt:i,title:i}),Object(x.jsxs)("section",{className:"EventCard-description",children:[Object(x.jsx)("h3",{className:"EventCard-year",children:r}),Object(x.jsx)("p",{className:"EventCard-text",children:s})]})]})}),Y=(n(42),function(e){var t=e.label,n=e.events,c=e.i,s=Object(a.useState)(!0),r=Object(F.a)(s,2),o=r[0],i=r[1],u=Object(a.useState)(!0),l=Object(F.a)(u,2),d=l[0],j=l[1];return Object(a.useEffect)((function(){0===c&&i(!1)}),[c]),n&&n.length?Object(x.jsxs)("div",{className:"EventsOfTheDay",children:[Object(x.jsx)("h2",{className:"EventsOfTheDay-Label",children:t}),Object(x.jsx)("button",{className:"EventsOfTheDay-Fold-Btn ".concat(o?"unfolded":"folded"),onClick:function(){return i(!o)},children:o?"show":"fold"}),o?null:Object(x.jsxs)("ul",{className:"EventsOfTheDay-ul",children:[(d?n.slice(0,10):n).map((function(e,t){return Object(x.jsx)(L,{event:e},"event-card-".concat(t))})),n.length>10?d?Object(x.jsx)("button",{className:"EventsOfTheDay-showless-btn",onClick:function(){return j(!1)},children:"Show More"}):Object(x.jsx)("button",{className:"EventsOfTheDay-showless-btn",onClick:function(){return j(!0)},children:"Show Less"}):null]})]}):Object(x.jsx)("p",{children:"Oops, No events for this date yet..."})}),J=(n(43),function(e){var t=e.today,n=e.pastweek,c=e.nextweek,s=Object(o.c)(I),r=Object(o.c)(B),i=Object(o.c)(M),u=Object(o.c)((function(e){return e.today})),l=Object(o.b)();Object(a.useEffect)((function(){t?l(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return function(t){function n(){return(n=Object(k.a)(g.a.mark((function n(){var a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T(e.getMonth()+1,e.getDate());case 2:a=n.sent,t(_(a));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}}(new Date)):n?l(A(new Date,!0)):c&&l(A(new Date,!1))}),[l,t,n,c]);return Object(x.jsxs)("div",{className:"EventsTab",children:[Object(x.jsx)("div",{className:"EventsTab-topGradient",children:" "}),t?Object(x.jsx)(Y,{label:u,events:r[u],i:0}):n?Object(x.jsx)("ul",{className:"Days-list",children:Object.entries(i).sort((function(e,t){return e[0]<t[0]?1:-1})).map((function(e,t){return Object(x.jsx)(Y,{label:e[0],events:e[1],i:t},"events-of-the-day-".concat(e[0]))}))}):c?Object(x.jsx)("ul",{className:"Days-list",children:Object.entries(s).sort((function(e,t){return e[0]>t[0]?1:-1})).map((function(e,t){return Object(x.jsx)(Y,{label:e[0],events:e[1],i:t},"events-of-the-day-".concat(e[0]))}))}):void 0]})});var U=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(y,{}),Object(x.jsx)("h1",{children:"This Day in History"}),Object(x.jsxs)(v.a,{children:[Object(x.jsx)(m,{}),Object(x.jsxs)(p.c,{children:[Object(x.jsx)(p.a,{exact:!0,path:"/past-week",children:Object(x.jsx)(J,{pastweek:!0})}),Object(x.jsx)(p.a,{exact:!0,path:"/",children:Object(x.jsx)(J,{today:!0})}),Object(x.jsx)(p.a,{exact:!0,path:"/next-week",children:Object(x.jsx)(J,{nextweek:!0})})]})]})]})};r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(o.a,{store:f,children:Object(x.jsx)(U,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.4f07d1cf.chunk.js.map