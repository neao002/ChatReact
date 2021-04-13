(this.webpackJsonpchatreact=this.webpackJsonpchatreact||[]).push([[0],{46:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(16),r=a.n(n),i=(a(46),a(12)),l=a(8),o=a(9),u=a(97),j=a(98),m=a(1),d=function(e){var t=Object(s.useState)(""),a=Object(o.a)(t,2),c=a[0],n=a[1],r=e.chatId,i=e.creds,d=function(e){e.preventDefault();var t=c.trim();t.length>0&&Object(l.o)(i,r,{text:t}),n("")};return Object(m.jsxs)("form",{className:"message-form",onSubmit:d,children:[Object(m.jsx)("input",{className:"message-input",placeholder:"Send a message...",value:c,onChange:function(t){n(t.target.value),Object(l.l)(e,r)},onSubmit:d}),Object(m.jsx)("label",{htmlFor:"upload-button",children:Object(m.jsx)("span",{className:"image-button",children:Object(m.jsx)(u.a,{className:"picture-icon"})})}),Object(m.jsx)("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onChange:function(e){Object(l.o)(i,r,{files:e.target.files,text:""})}.bind(undefined)}),Object(m.jsx)("button",{type:"submit",className:"send-button",children:Object(m.jsx)(j.a,{className:"send-icon"})})]})},h=function(e){var t=e.message;return t.attachments&&t.attachments.length>0?Object(m.jsx)("img",{src:t.attachments[0].file,alt:"message-attachment",className:"message-image",style:{float:"right"}}):Object(m.jsx)("div",{className:"message",style:{float:"right",marginRight:"18px",color:"white",backgroundColor:"#3B2A50"},children:t.text})},b=function(e){var t=e.lastMessage,a=e.message,s=!t||t.sender.username!==a.sender.username;return Object(m.jsxs)("div",{className:"message-row",children:[s&&Object(m.jsx)("div",{className:"message-avatar",style:{backgroundImage:a.sender&&"url(".concat(a.sender.avatar,")")}}),a.attachments&&a.attachments.length>0?Object(m.jsx)("img",{src:a.attachments[0].file,alt:"message-attachment",className:"message-image",style:{marginLeft:s?"4px":"48px"}}):Object(m.jsx)("div",{className:"message",style:{float:"left",backgroundColor:"#CABCDC",marginLeft:s?"4px":"48px"},children:a.text})]})},g=function(e){var t=e.chats,a=e.activeChat,s=e.userName,c=e.messages,n=t&&t[a],r=function(e,t){return n.people.map((function(a,s){return a.last_read===e.id&&Object(m.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:a.person.avatar&&"url(".concat(a.person.avatar,")")}},"read_".concat(s))}))};return n?Object(m.jsxs)("div",{className:"chat-feed",children:[Object(m.jsxs)("div",{className:"chat-title-container",children:[Object(m.jsx)("div",{className:"chat-title",children:null===n||void 0===n?void 0:n.title}),Object(m.jsx)("div",{className:"chat-subtitle",children:n.people.map((function(e){return" ".concat(e.person.username)}))})]}),function(){var e=Object.keys(c);return e.map((function(t,a){var n=c[t],i=0===a?null:e[a-1],l=s===n.sender.username;return Object(m.jsxs)("div",{style:{width:"100%"},children:[Object(m.jsx)("div",{className:"message-block",children:l?Object(m.jsx)(h,{message:n}):Object(m.jsx)(b,{message:n,lastMessage:c[i]})}),Object(m.jsx)("div",{className:"read-receipts",style:{marginRight:l?"18px":"0px",marginLeft:l?"0px":"68px"},children:r(n,l)})]},"msg_".concat(a))}))}(),Object(m.jsx)("div",{style:{height:"100px"}}),Object(m.jsx)("div",{className:"message-form-container",children:Object(m.jsx)(d,Object(i.a)(Object(i.a)({},e),{},{chatId:a}))})]}):Object(m.jsx)("div",{})},p=a(23),x=a.n(p),O=a(40),f=a(4),v=a.n(f),N=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(o.a)(n,2),i=r[0],l=r[1],u=Object(s.useState)(""),j=Object(o.a)(u,2),d=j[0],h=j[1],b=function(){var e=Object(O.a)(x.a.mark((function e(t){var s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={"Project-ID":"d0e35330-ac73-42f7-9d22-598cf64983f3","User-Name":a,"User-Secret":i},e.prev=2,e.next=5,v.a.get("https://api.chatengine.io/chats",{headers:s});case 5:localStorage.setItem("username",a),localStorage.setItem("password",i),window.location.reload(),h(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),h("Oops, incorrect credentials.");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"wrapper",children:Object(m.jsxs)("div",{className:"form",children:[Object(m.jsx)("h1",{className:"title",children:"Chat Application"}),Object(m.jsxs)("form",{onSubmit:b,children:[Object(m.jsx)("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},className:"input",placeholder:"Username",required:!0}),Object(m.jsx)("input",{type:"password",value:i,onChange:function(e){return l(e.target.value)},className:"input",placeholder:"Password",required:!0}),Object(m.jsx)("div",{align:"center",children:Object(m.jsx)("button",{type:"submit",className:"button",children:Object(m.jsx)("span",{children:"Start chatting"})})})]}),Object(m.jsx)("h1",{children:d})]})})},y=(a(94),function(){return localStorage.getItem("username")?Object(m.jsx)(l.d,{height:"100vh",projectID:"d0e35330-ac73-42f7-9d22-598cf64983f3",userName:localStorage.getItem("username"),userSecret:localStorage.getItem("password"),renderChatFeed:function(e){return Object(m.jsx)(g,Object(i.a)({},e))},onNewMessage:function(){return new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3").play()}}):Object(m.jsx)(N,{})}),S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,99)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),S()}},[[95,1,2]]]);
//# sourceMappingURL=main.9e3bc83b.chunk.js.map