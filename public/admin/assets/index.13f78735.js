var te=Object.defineProperty,ue=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var x=(t,l,o)=>l in t?te(t,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[l]=o,w=(t,l)=>{for(var o in l||(l={}))se.call(l,o)&&x(t,o,l[o]);if(S)for(var o of S(l))oe.call(l,o)&&x(t,o,l[o]);return t},A=(t,l)=>ue(t,ne(l));var C=(t,l,o)=>new Promise((v,d)=>{var y=c=>{try{m(o.next(c))}catch(n){d(n)}},B=c=>{try{m(o.throw(c))}catch(n){d(n)}},m=c=>c.done?v(c.value):Promise.resolve(c.value).then(y,B);m((o=o.apply(t,l)).next())});import{D as R,T as ae,B as le}from"./TableAction.af8435a0.js";import{u as re,B as ie}from"./useForm.438cfb87.js";import{aW as N,v as f,k as ce,d as de,r as g,u as me,ba as pe,s as D,e as _e,x as fe,w as a,h as s,i as F,j as b,N as he,b4 as ge,y as Fe,z as ve,l as ye,A as Be,C as ke,D as we,E as be,n as Ee}from"./index.b11d5e47.js";import"./sortable.esm.12ce8df1.js";import"./useDesignSetting.1c60aa77.js";import"./index.esm.fed694df.js";import"./DownOutlined.50fc196b.js";function Ce(t){return N.request({url:"/master/users",method:"get",params:t})}function O(t){return N.request({url:"/master/user",method:"put",params:t})}function T(t){return N.request({url:"/master/user",method:"delete",params:t})}const De=[{type:"selection",key:"selection"},{title:"id",key:"id",width:100,sorter:!0},{title:"\u7528\u6237\u540D",key:"username",width:200,sorter:!0},{title:"avatar",key:"avatar",width:160,render(t){return f(ce,{size:48,src:t.avatar})}},{title:"stars",key:"stars",width:160,render(t){return JSON.stringify(t.stars,null,4)}},{title:"OAuth",key:"oauth",width:160,render(t){return JSON.stringify(t.oauth,null,4)}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"create_time",width:160,sorter:!0},{title:"\u4FEE\u6539\u65F6\u95F4",key:"update_time",width:160,sorter:!0}],Ne=b(" \u5220\u9664 "),Ue=b("\u5237\u65B0\u6570\u636E"),Se=b("\u53D6\u6D88"),xe=b("\u786E\u5B9A"),Ae={name:"UserList"},Le=de(A(w({},Ae),{setup(t){const l={stars:{required:!0,trigger:["blur","change"],message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684stars"},oauth:{required:!0,trigger:["blur","change"],message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684oauth"}},o=[{field:"username",labelMessage:"\u8BF7\u8F93\u5165\u9700\u8981\u641C\u7D22\u7684\u7528\u6237\u540D",component:"NInput",label:"\u7528\u6237\u540D",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",onInput:e=>{p.username=e,console.log(e)}}},{field:"id",label:"id"}],v=g(null),d=me(),y=pe(),B=g(),m=g(!1),c=g(!1),n=D({id:0,username:"",stars:JSON.stringify("[]",null,4),oauth:JSON.stringify("[]",null,4)}),p=D({pageSize:10,username:"",column:"",order:""}),h=g([]),J=D({width:220,title:"\u64CD\u4F5C",key:"action",fixed:"right",render(e){return f(ae,{style:"button",actions:[{label:"\u7F16\u8F91",onClick:K.bind(null,e)},{label:"\u5220\u9664",icon:R,onClick:W.bind(null,e)}]})}}),[q,{}]=re({gridProps:{cols:1},collapsedRows:1,labelWidth:120,schemas:o,showAdvancedButton:!1});function P(){if(h.value.length==0){y.warning({title:"\u8B66\u544A",content:"\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u9879"});return}let e=[];for(const u of h.value)e.push(u.username);y.warning({title:"\u8B66\u544A",content:()=>f("div",["\u60A8\u786E\u5B9A\u8981\u5220\u9664\u4EE5\u4E0B\u5171 ",f(he,{type:"info"},h.value.length)," \u4E2A\u7528\u6237\u5417\uFF1F",f("br"),f(ge,{},e.join("\u3001"))]),negativeText:"\u53D6\u6D88",positiveText:"\u786E\u5B9A",onPositiveClick(){let u=[];for(const r of h.value)u.push(T({id:r.id}).then(()=>{d.success("\u5220\u9664\u6210\u529F")}));Promise.all(u).finally(_)}})}const I=e=>C(this,null,function*(){return yield Ce(w(w({},p),e))});function z({column:e,value:u,record:r}){e.key==="id"&&(r.editValueRefs.name4.value=`${u}`),console.log(e,u,r)}function L({record:e,key:u,value:r}){O({id:e.id,[u]:r}).then(()=>{d.success("\u66F4\u65B0\u6210\u529F"),_()})}function M(e,u){h.value=u.filter(r=>r)}function _(){B.value.reload()}function V(e){e.preventDefault(),c.value=!0,v.value.validate(u=>C(this,null,function*(){try{if(u){d.error("\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F");return}yield O({id:n.id,username:n.username,stars:JSON.parse(n.stars),oauth:JSON.parse(n.oauth)}),d.success("\u66F4\u65B0\u6210\u529F"),m.value=!1,_()}catch(r){d.error(r.message);return}finally{c.value=!1}}))}function K(e){m.value=!0,[n.id,n.username,n.stars,n.oauth]=[e.id,e.username,JSON.stringify(e.stars,null,4),JSON.stringify(e.oauth,null,4)]}function W(e){T({id:e.id}).then(()=>{d.success("\u5220\u9664\u6210\u529F"),_()})}function $(e){console.log(e),_()}function G(e){p.username="",console.log(e)}function H(e){console.log(e),e.order?[p.column,p.order]=[e.columnKey,e.order.slice(0,e.order.lastIndexOf("end"))]:[p.column,p.order]=["",""],_()}return(e,u)=>{const r=Fe,Q=ve,k=ye,E=Be,X=ke,Y=we,Z=be,j=Ee;return _e(),fe(j,{bordered:!1,class:"proCard"},{default:a(()=>[s(F(ie),{onRegister:F(q),onSubmit:$,onReset:G},{statusSlot:a(({model:i,field:U})=>[s(r,{value:i[U],"onUpdate:value":ee=>i[U]=ee},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister"]),s(F(le),{columns:F(De),request:I,"row-key":i=>i.id,ref_key:"actionRef",ref:B,actionColumn:J,"onUpdate:checkedRowKeys":M,"scroll-x":1200,onEditEnd:L,onEditChange:z,"onUpdate:sorter":H},{tableTitle:a(()=>[s(k,{type:"primary",onClick:P},{icon:a(()=>[s(Q,null,{default:a(()=>[s(F(R))]),_:1})]),default:a(()=>[Ne]),_:1})]),toolbar:a(()=>[s(k,{type:"primary",onClick:_},{default:a(()=>[Ue]),_:1})]),_:1},8,["columns","row-key","actionColumn"]),s(Z,{show:m.value,"onUpdate:show":u[4]||(u[4]=i=>m.value=i),"show-icon":!1,preset:"dialog",title:"\u7F16\u8F91"},{action:a(()=>[s(Y,null,{default:a(()=>[s(k,{onClick:u[3]||(u[3]=()=>m.value=!1)},{default:a(()=>[Se]),_:1}),s(k,{type:"info",loading:c.value,onClick:V},{default:a(()=>[xe]),_:1},8,["loading"])]),_:1})]),default:a(()=>[s(X,{model:n,rules:l,ref_key:"formRef",ref:v,"label-placement":"left","label-width":80,class:"py-4"},{default:a(()=>[s(E,{label:"\u7528\u6237\u540D",path:"username"},{default:a(()=>[s(r,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",value:n.username,"onUpdate:value":u[0]||(u[0]=i=>n.username=i)},null,8,["value"])]),_:1}),s(E,{label:"stars",path:"stars"},{default:a(()=>[s(r,{placeholder:"\u8BF7\u8F93\u5165stars",value:n.stars,"onUpdate:value":u[1]||(u[1]=i=>n.stars=i),type:"textarea",rows:"10"},null,8,["value"])]),_:1}),s(E,{label:"oauth",path:"oauth"},{default:a(()=>[s(r,{placeholder:"\u8BF7\u8F93\u5165oauth",value:n.oauth,"onUpdate:value":u[2]||(u[2]=i=>n.oauth=i),type:"textarea",rows:"10"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["show"])]),_:1})}}}));export{Le as default};