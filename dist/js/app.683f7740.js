(function(){"use strict";var t={1778:function(t,e,r){var n=r(9242),i=r(3396);const a={class:"navbar navbar-expand-lg navbar-dark bg-success"},o={class:"container-fluid"},s=(0,i._)("a",{class:"navbar-brand",href:"/"},"Products",-1),c=(0,i._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,i._)("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarSupportedContent"},d={class:"navbar-nav me-auto mb-2 mb-lg-0"},u={class:"nav-item"},p={class:"nav-item"},m={class:"container-fluid mt-3"};function f(t,e){const r=(0,i.up)("router-link"),n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("nav",a,[(0,i._)("div",o,[s,c,(0,i._)("div",l,[(0,i._)("ul",d,[(0,i._)("li",u,[(0,i.Wm)(r,{to:"/",class:"nav-link active","aria-current":"page",href:"#"},{default:(0,i.w5)((()=>[(0,i.Uk)("Mostrar")])),_:1})]),(0,i._)("li",p,[(0,i.Wm)(r,{to:"/create",class:"nav-link",href:"#"},{default:(0,i.w5)((()=>[(0,i.Uk)("Crear")])),_:1})])])])])]),(0,i._)("div",m,[(0,i.Wm)(n)])],64)}var b=r(89);const h={},v=(0,b.Z)(h,[["render",f]]);var g=v,_=r(2483),w=r(7139);const y={class:"row"},x={class:"col-lg-8 offset-lg-2"},k={class:"table-responsive"},P={class:"table table-bordered table-hover"},C=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",null,"#"),(0,i._)("th",null,"NOMBRE"),(0,i._)("th",null,"DESCRIPCIÓN"),(0,i._)("th",null,"PRECIO"),(0,i._)("th",null,"ACCIONES")])],-1),O={class:"table-group-divider",id:"contenido"},S=(0,i._)("i",{class:"fa-solid fa-edit"},null,-1),E=["onClick"],D=(0,i._)("i",{class:"fa-solid fa-trash"},null,-1),T=[D];function U(t,e,r,n,a,o){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",y,[(0,i._)("div",x,[(0,i._)("div",k,[(0,i._)("table",P,[C,(0,i._)("tbody",O,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.products,((t,e)=>((0,i.wg)(),(0,i.iD)("tr",{key:t.id},[(0,i._)("td",null,(0,w.zw)(e+1),1),(0,i._)("td",null,(0,w.zw)(t.name),1),(0,i._)("td",null,(0,w.zw)(t.description),1),(0,i._)("td",null,"$"+(0,w.zw)(new Intl.NumberFormat("es-mx").format(t.price)),1),(0,i._)("td",null,[(0,i.Wm)(s,{to:{path:"edit/"+t.id},class:"btn btn-warning"},{default:(0,i.w5)((()=>[S])),_:2},1032,["to"]),(0,i.Uk)("   "),(0,i._)("button",{class:"btn btn-danger",onClick:e=>o.eliminar(t.id,t.name)},T,8,E)])])))),128))])])])])])}var j=r(4161),B=r(2492),q=r.n(B);function I(t,e,r=""){""!==r&&document.getElementById(r).focus(),q().fire({title:t,icon:e,customClass:{confirmButton:"btn btn-primary",popup:"animated zoomIn"},buttonsStyling:!1})}function Z(t,e){var r="http://localhost/api/products/"+t;const n=q().mixin({customClass:{confirmButton:"btn btn-success me-3",cancelButton:"btn btn-danger"},buttonsStyling:!1});n.fire({title:"Seguro de eliminar el producto "+e,text:"Se perderá la información del producto",icon:"question",showCancelButton:!0,confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminar',cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'}).then((e=>{e.isConfirmed?z("DELETE",{id:t},r,"Producto eliminado"):I("Operación cancelada","info")}))}function z(t,e,r,n){(0,j.Z)({method:t,url:r,data:e}).then((function(t){var e=t.data[0]["status"];if("success"===e)I(n,e),window.setTimeout((function(){window.location.href="/"}),1e3);else{var r="",i=t.data[1]["errors"];Object.keys(i).forEach((t=>r+=i[t][0]+".")),I(r,"error")}})).catch((function(t){I("Error en la solicitud","error")}))}var M={data(){return{products:null}},mounted(){this.getProducts()},methods:{getProducts(){j.Z.get("http://localhost/api/products").then((t=>this.products=t.data))},eliminar(t,e){Z(t,e)}}};const N=(0,b.Z)(M,[["render",U]]);var V=N;const W={class:"row mt-3"},R={class:"col-md-6 offset-md-3"},F={class:"card"},G=(0,i._)("div",{class:"card-header bg-dark text-white text-center"},"Crear Producto",-1),H={class:"card-body"},Y={class:"input-group mb-3"},A=(0,i._)("span",{class:"input-group-text"},[(0,i._)("i",{class:"fa-solid fa-gift"})],-1),K={class:"input-group mb-3"},L=(0,i._)("span",{class:"input-group-text"},[(0,i._)("i",{class:"fa-solid fa-comment"})],-1),$={class:"input-group mb-3"},J=(0,i._)("span",{class:"input-group-text"},[(0,i._)("i",{class:"fa-solid fa-dollar-sign"})],-1),Q=(0,i._)("div",{class:"d-grid col-6 mx-auto"},[(0,i._)("button",{class:"btn btn-success"},[(0,i._)("i",{class:"fa-solid fa-floppy-disk"}),(0,i.Uk)(" Guardar")])],-1);function X(t,e,r,a,o,s){return(0,i.wg)(),(0,i.iD)("div",W,[(0,i._)("div",R,[(0,i._)("div",F,[G,(0,i._)("div",H,[(0,i._)("form",{onSubmit:e[3]||(e[3]=(...t)=>s.guardar&&s.guardar(...t))},[(0,i._)("div",Y,[A,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>o.name=t),id:"nombre",class:"form-control",maxlength:"50",placeholder:"Nombre",required:""},null,512),[[n.nr,o.name]])]),(0,i._)("div",K,[L,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>o.description=t),id:"descripcion",class:"form-control",maxlength:"150",placeholder:"Descripción",required:""},null,512),[[n.nr,o.description]])]),(0,i._)("div",$,[J,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>o.price=t),id:"precio",class:"form-control",placeholder:"Precio",step:"0.01",required:""},null,512),[[n.nr,o.price]])]),Q],32)])])])])}var tt={data(){return{name:"",description:"",price:"",url:"http://localhost/api/products"}},methods:{guardar(){if(event.preventDefault(),""===this.name.trim())I("Escribe el nombre","warning","nombre");else if(""===this.description.trim())I("Escribe el descripción","warning","descripcion");else if(""===this.price.trim())I("Escribe el precio","warning","precio");else{var t={name:this.name.trim(),description:this.description.trim(),price:this.price};z("POST",t,this.url,"Producto guardado")}}}};const et=(0,b.Z)(tt,[["render",X]]);var rt=et;const nt={class:"row mt-3"},it={class:"col-md-6 offset-md-3"},at={class:"card"},ot=(0,i._)("div",{class:"card-header bg-dark text-white text-center"},"Crear Producto",-1),st={class:"card-body"},ct={class:"input-group mb-3"},lt=(0,i._)("span",{class:"input-group-text"},[(0,i._)("i",{class:"fa-solid fa-gift"})],-1),dt={class:"input-group mb-3"},ut=(0,i._)("span",{class:"input-group-text"},[(0,i._)("i",{class:"fa-solid fa-comment"})],-1),pt={class:"input-group mb-3"},mt=(0,i._)("span",{class:"input-group-text"},[(0,i._)("i",{class:"fa-solid fa-dollar-sign"})],-1),ft=(0,i._)("div",{class:"d-grid col-6 mx-auto"},[(0,i._)("button",{class:"btn btn-success"},[(0,i._)("i",{class:"fa-solid fa-floppy-disk"}),(0,i.Uk)(" Guardar")])],-1);function bt(t,e,r,a,o,s){return(0,i.wg)(),(0,i.iD)("div",nt,[(0,i._)("div",it,[(0,i._)("div",at,[ot,(0,i._)("div",st,[(0,i._)("form",{onSubmit:e[3]||(e[3]=(...t)=>s.guardar&&s.guardar(...t))},[(0,i._)("div",ct,[lt,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>o.name=t),id:"nombre",class:"form-control",maxlength:"50",placeholder:"Nombre",required:""},null,512),[[n.nr,o.name]])]),(0,i._)("div",dt,[ut,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>o.description=t),id:"descripcion",class:"form-control",maxlength:"150",placeholder:"Descripción",required:""},null,512),[[n.nr,o.description]])]),(0,i._)("div",pt,[mt,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>o.price=t),id:"precio",class:"form-control",placeholder:"Precio",step:"0.01",required:""},null,512),[[n.nr,o.price]])]),ft],32)])])])])}var ht={data(){return{id:0,name:"",description:"",price:"",url:"http://localhost/api/products"}},mounted(){const t=(0,_.yj)();this.id=t.params.id,this.url=this.url+"/"+this.id,this.getProduct()},methods:{getProduct(){j.Z.get(this.url).then((t=>(this.name=t.data["name"],this.description=t.data["description"],this.price=t.data["price"])))},guardar(){if(event.preventDefault(),""===this.name.trim())I("Escribe el nombre","warning","nombre");else if(""===this.description.trim())I("Escribe el descripción","warning","descripción");else if(""===this.price.trim())I("Escribe el precio","warning","precio");else{var t={name:this.name.trim(),description:this.description.trim(),price:this.price};z("PUT",t,this.url,"Producto actualizado")}}}};const vt=(0,b.Z)(ht,[["render",bt]]);var gt=vt;const _t=[{path:"/",name:"home",component:V},{path:"/create",name:"create",component:rt},{path:"/edit/:id",name:"edit",component:gt}],wt=(0,_.p7)({history:(0,_.PO)("/"),routes:_t});var yt=wt,xt=r(65),kt=(0,xt.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});r(5654);(0,n.ri)(g).use(kt).use(yt).mount("#app")}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(e,n,i,a){if(!n){var o=1/0;for(d=0;d<t.length;d++){n=t[d][0],i=t[d][1],a=t[d][2];for(var s=!0,c=0;c<n.length;c++)(!1&a||o>=a)&&Object.keys(r.O).every((function(t){return r.O[t](n[c])}))?n.splice(c--,1):(s=!1,a<o&&(o=a));if(s){t.splice(d--,1);var l=i();void 0!==l&&(e=l)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[n,i,a]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,a,o=n[0],s=n[1],c=n[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(c)var d=c(r)}for(e&&e(n);l<o.length;l++)a=o[l],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(d)},n=self["webpackChunkproducts_vue"]=self["webpackChunkproducts_vue"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(1778)}));n=r.O(n)})();
//# sourceMappingURL=app.683f7740.js.map