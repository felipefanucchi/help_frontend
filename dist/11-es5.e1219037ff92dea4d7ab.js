function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{TDBs:function(e,t,n){"use strict";n.r(t);var i,o,a=n("aceb"),r=n("vTDv"),s=n("tyNb"),c=n("VHTt"),l=n("6rF9"),u="/dashboard/admin",d=[{title:"Posi\xe7\xf5es",group:!0},{title:"Profissionais",icon:"briefcase-outline",children:[{title:"Adicionar novo",link:"".concat(u,"/adicionar/profissional")},{title:"Ver todos",link:"".concat(u,"/lista/profissional'")}]},{title:"Administradores",icon:"person-outline",link:"".concat(u,"/lista/admnistrador'")},{title:"Equipe Help",icon:"plus-square-outline",link:"".concat(u,"/lista/equipe-help'")},{title:"Contratantes",icon:"people-outline",link:"".concat(u,"/lista/contratante'")}],f=[],p=n("o0su"),h=n("fXoL"),m=n("mgFL"),b=((i=function(){function e(t){_classCallCheck(this,e),this.authenticationService=t}return _createClass(e,[{key:"ngOnInit",value:function(){if(this.currentUser=this.authenticationService.currentUserValue,this.currentUser)switch(this.currentUser.role){case"admin":this.menu=d;break;case"profesional":this.menu=f;break;default:this.menu=[]}}}]),e}()).\u0275fac=function(e){return new(e||i)(h["\u0275\u0275directiveInject"](p.a))},i.\u0275cmp=h["\u0275\u0275defineComponent"]({type:i,selectors:[["ngx-pages"]],decls:3,vars:1,consts:[[3,"items"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"ngx-one-column-layout"),h["\u0275\u0275element"](1,"nb-menu",0),h["\u0275\u0275element"](2,"router-outlet"),h["\u0275\u0275elementEnd"]()),2&e&&(h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("items",t.menu))},directives:[m.a,a.tb,s.h],styles:[".nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}.nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*, .nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*, .nb-theme-dark   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),i),k=n("w+5F"),y=[{path:"",component:b,children:[{path:"admin",loadChildren:function(){return n.e(10).then(n.bind(null,"zQKD")).then((function(e){return e.AdminModule}))},canActivate:[l.a],data:{roles:[c.e.Admin]}},{path:"",redirectTo:"",pathMatch:"full"},{path:"**",component:k.a}]}],C=((o=function e(){_classCallCheck(this,e)}).\u0275mod=h["\u0275\u0275defineNgModule"]({type:o}),o.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(e){return new(e||o)},imports:[[s.g.forChild(y)],s.g]}),o);n.d(t,"DashboardModule",(function(){return g}));var w,g=((w=function e(){_classCallCheck(this,e)}).\u0275mod=h["\u0275\u0275defineNgModule"]({type:w}),w.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(e){return new(e||w)},imports:[[C,r.a,a.ub]]}),w)}}]);