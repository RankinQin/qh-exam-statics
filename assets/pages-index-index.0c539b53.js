import{g as s,n as e,a,s as t,b as o,o as i,c as l,w as d,d as n,e as r,f as c,r as u,F as p,h as f,i as _,j as m,k as g,t as h,l as v}from"./index.d7537bc6.js";import{g as k,c as w,o as y,v as P,h as I}from"./api.66e70d95.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";var x=q({data:()=>({href:"",paperList:[],showPopup:!1}),onLoad(){this.init()},methods:{async init(){let s;s=await k(2),console.log(s),this.paperList=s},isIos(){},async doPay(){this.isIos();let s=await w(),e=await y(s.payOrderId,"tt_pay");uni.requestPayment({provider:"toutiao",orderInfo:{order_id:e.invokeResponse.order_id,order_token:e.invokeResponse.order_token},_debug:1,service:5,getOrderStatus:()=>new Promise(((s,e)=>{console.log("in")})),success(s){console.log("回调成功",s)},fail(s){console.error(s)}})},async goTestPaper(o){let i=o.id;if(this.isIos()&&o.amount>0)return void(this.showPopup=!0);if(s("token")){if(await P())return void e({url:"/pages/exam/question/question?id="+i})}let l=a();console.log(l),I({deviceId:l.deviceId}).then((s=>{t("token",s),e({url:"/pages/exam/question/question?id="+i})}))},goExam(){e({url:"/pages/exam/question/question?id=1"})},getProvider(){o({service:"payment",success(s){console.log(s)},fail(s){console.log(s)}})}}},[["render",function(s,e,a,t,o,k){const w=_,y=m,P=v,I=g;return i(),l(y,{class:"container"},{default:d((()=>[n(y,{class:"desc"},{default:d((()=>[r("性格测试提供的性格类型描述仅供测试者确定自己的性格类型之用，"),n(w,{style:{"font-weight":"900"}},{default:d((()=>[r("性格类型没有好坏，只有不同")])),_:1}),r("。每一种性格特征都有其价值和优点，也有缺点和需要注意的地方。清楚地"),n(w,{style:{"font-weight":"900"}},{default:d((()=>[r("了解自己的性格优劣势，有利于更好地发挥自己的特长，而尽可能的在为人处事中避免自己性格中的劣势")])),_:1}),r("，更好地和他人相处，更好地作重要的决策。 ")])),_:1}),n(y,{class:"em-ctn"},{default:d((()=>[(i(!0),c(p,null,u(o.paperList,(s=>(i(),l(y,{class:"tp-ctn",onClick:e=>k.goTestPaper(s),key:s.id},{default:d((()=>[n(y,{class:"title"},{default:d((()=>[r(h(s.name),1),n(w,{class:"time"},{default:d((()=>[r("(预计需要"+h(s.limitedTime/60)+"分钟)",1)])),_:2},1024)])),_:2},1024),n(y,{class:"sub"},{default:d((()=>[n(y,{class:"cnt"},{default:d((()=>[r(h(s.description),1)])),_:2},1024),n(y,{class:"icon-ctn"},{default:d((()=>[n(P,{class:"icon",src:"/assets/an.55ade091.png",mode:"aspectFit"})])),_:1})])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1}),o.showPopup?(i(),l(y,{key:0,class:"mask"},{default:d((()=>[n(y,{class:"popup"},{default:d((()=>[n(y,{class:"title"},{default:d((()=>[r("抱歉！")])),_:1}),n(y,{class:"bd"},{default:d((()=>[r("由于相关规范，iOS功能暂不可用")])),_:1}),n(y,{class:"bt"},{default:d((()=>[n(I,{onClick:e[0]||(e[0]=s=>o.showPopup=!1)},{default:d((()=>[r("确定")])),_:1})])),_:1})])),_:1})])),_:1})):f("",!0)])),_:1})}],["__scopeId","data-v-0d97f9dd"]]);export{x as default};
