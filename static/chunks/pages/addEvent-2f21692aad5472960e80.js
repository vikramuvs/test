(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[339],{6983:function(e,n,t){"use strict";t.d(n,{t:function(){return a}});var i=t(5503),r=(t(6550),t(3759),t(4642),t(4155)),s={apiKey:r.env.API,authDomain:r.env.AUTHDOMAIN,databaseURL:"https://events-rit-default-rtdb.firebaseio.com",projectId:r.env.PROJECTID,storageBucket:"events-rit.appspot.com",messagingSenderId:r.env.MESSAGINGSENDERID,appId:r.env.APPID,measurementId:r.env.MEASUREMENTUD};i.Z.apps.length?i.Z.app():i.Z.initializeApp(s);i.Z.database();var a=i.Z.storage()},2334:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var i=t(7757),r=t.n(i),s=t(5893);function a(e,n,t,i,r,s,a){try{var l=e[s](a),o=l.value}catch(c){return void t(c)}l.done?n(o):Promise.resolve(o).then(i,r)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var s=e.apply(n,t);function l(e){a(s,i,r,l,o,"next",e)}function o(e){a(s,i,r,l,o,"throw",e)}l(void 0)}))}}var o=t(7294),c=t(6643),u=t.n(c),d=t(6983);var v=function(e){var n=(0,o.useState)(0),t=n[0],i=n[1],a=(0,o.useState)(0),c=a[0],v=a[1],p=(0,o.useState)(""),h=p[0],x=p[1],f=(0,o.useRef)(),j=(0,o.useRef)(),E=(0,o.useRef)(),m=(0,o.useRef)(),N=(0,o.useRef)(),g=(0,o.useRef)(),b=(0,o.useRef)(),C=(0,o.useRef)(),y=(0,o.useRef)();function S(){return(S=l(r().mark((function n(i){var s,a,l,o,u,d,v,p,h;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i.preventDefault(),s=f.current.value,a=j.current.value,l=E.current.value,o=m.current.value,u=N.current.value,d=g.current.value,v=b.current.value,p=C.current.value,h={eventTitle:s,eventStartDate:a,eventEndDate:l,eventImage:o,eventDesc:u,slideshowURL:d||null,videoURL:v||null,hasSlideshow:t,hasVideo:c,eventDept:p,eventYear:a.toString().substring(0,4)},e.onAddEvent(h);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,s.jsxs)("form",{children:[(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("label",{children:"Event Name"}),(0,s.jsx)("input",{type:"text",placeholder:"Enter event title",ref:f})]}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("label",{children:"Event Start Date"}),(0,s.jsx)("input",{type:"date",placeholder:"Enter event start date ",ref:j})]}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("label",{children:"Event End Date"}),(0,s.jsx)("input",{type:"date",placeholder:"Enter event end date",ref:E})]}),(0,s.jsxs)("div",{className:u()["img-upload-container"],children:[(0,s.jsxs)("div",{className:u()["file-input"],children:[(0,s.jsx)("label",{children:"Event Image"}),(0,s.jsx)("input",{type:"file",placeholder:"Upload Image here",ref:y}),(0,s.jsx)("button",{onClick:function(e){e.preventDefault();var n=y.current.files[0],t=d.t.ref().child("images/".concat(n.name)).put(n);t.on("state_changed",(function(e){var n=e.bytesTransferred/e.totalBytes*100;console.log("Upload is "+n+"% done")}),(function(e){}),(function(){t.snapshot.ref.getDownloadURL().then((function(e){x(e)}))}))},children:"Upload"})]}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)("input",{value:h,disabled:!0,ref:m})})]}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("label",{children:"Event Description"}),(0,s.jsx)("input",{type:"text",placeholder:"Enter event description",ref:N})]}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("label",{children:"Has Slideshow?"}),(0,s.jsxs)("select",{onChange:function(e){var n=e.target.value;i(n)},children:[(0,s.jsx)("option",{value:0,children:"No"}),(0,s.jsx)("option",{value:1,children:"Yes"})]})]}),1==t?(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("label",{children:"Slideshow URL"}),(0,s.jsx)("input",{type:"text",placeholder:"Enter event itle",ref:g})]}):null,(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("label",{children:"Has Video?"}),(0,s.jsxs)("select",{onChange:function(e){var n=e.target.value;v(n)},children:[(0,s.jsx)("option",{value:0,children:"No"}),(0,s.jsx)("option",{value:1,children:"Yes"})]})]}),1==c?(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("label",{children:"Vidoe URL"}),(0,s.jsx)("input",{type:"text",placeholder:"Enter event itle",ref:b})]}):null,(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("label",{children:"Conducting Department"}),(0,s.jsxs)("select",{ref:C,children:[(0,s.jsx)("option",{value:"Architecture",children:"Architecture"}),(0,s.jsx)("option",{value:"BioTechnology",children:"BioTechnology"}),(0,s.jsx)("option",{value:"Chemical",children:"Chemical"}),(0,s.jsx)("option",{value:"Civil",children:"Civil"}),(0,s.jsx)("option",{value:"Computer Science",children:"Computer Science"}),(0,s.jsx)("option",{value:"ECE",children:"ECE"}),(0,s.jsx)("option",{value:"EEE",children:"EEE"}),(0,s.jsx)("option",{value:"EIE",children:"EIE"}),(0,s.jsx)("option",{value:"ETE",children:"ETE"}),(0,s.jsx)("option",{value:"ME",children:"ME"}),(0,s.jsx)("option",{value:"ML",children:"ML"}),(0,s.jsx)("option",{value:"IEM",children:"IEM"}),(0,s.jsx)("option",{value:"ISE",children:"ISE"}),(0,s.jsx)("option",{value:"MBA",children:"MBA"}),(0,s.jsx)("option",{value:"MCA",children:"MCA"}),(0,s.jsx)("option",{value:"Maths",children:"Maths"}),(0,s.jsx)("option",{value:"Physics",children:"Physics"}),(0,s.jsx)("option",{value:"Humanities",children:"Humanities"}),(0,s.jsx)("option",{value:"Sports",children:"Sports"}),(0,s.jsx)("option",{value:"DECA",children:"DECA"})]})]}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("button",{onClick:function(e){return S.apply(this,arguments)},children:"Submit"}),(0,s.jsx)("button",{children:"Reset"})]})]})},p=t(5593),h=t.n(p);var x=function(){function e(){return(e=l(r().mark((function e(n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/addNewEvent",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,s.jsx)("div",{className:h().addEventContainer,children:(0,s.jsx)(v,{onAddEvent:function(n){return e.apply(this,arguments)}})})}},6101:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/addEvent",function(){return t(2334)}])},6643:function(e){e.exports={"img-upload-container":"NewEventForm_img-upload-container__1Der_","file-input":"NewEventForm_file-input__3Ugo6"}},5593:function(e){e.exports={addEventContainer:"addEvent_addEventContainer__3RNjA"}}},function(e){e.O(0,[860,724,785,774,888,179],(function(){return n=6101,e(e.s=n);var n}));var n=e.O();_N_E=n}]);