(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[883],{9883:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var r=n(2791),a="Filter_filter__vxThR",o=n(9434),s=n(6895),u=function(e){return e.contacts.items},c=function(e){return e.filter},i=n(184);function l(){var e=(0,o.I0)(),t=(0,o.v9)(c);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("label",{className:a,htmlFor:"",children:["Find contacts by name"," ",(0,i.jsx)("input",{type:"text",value:t,onChange:function(t){return e((0,s.M)(t.target.value))}})]})})}var f="ContactsPage_title__X03js",h=n(9439),d="ContactForm_button__eSwX9",m="ContactForm_form__dhl+T",p="ContactForm_container__qpJ1N",x="ContactForm_name__ZqciK",v="ContactForm_number__RyoZN",g=n(6429),b=n.n(g),_=n(208),j=function(){var e=(0,r.useState)(""),t=(0,h.Z)(e,2),n=t[0],a=t[1],s=(0,r.useState)(""),c=(0,h.Z)(s,2),l=c[0],f=c[1],g=(0,o.v9)(u),j=(0,o.I0)(),w=function(e){switch(e.target.name){case"name":a(e.target.value);break;case"number":f(e.target.value)}},C=function(){a(""),f("")};return(0,i.jsx)("div",{className:p,children:(0,i.jsxs)("form",{className:m,onSubmit:function(e){if(e.preventDefault(),g.find((function(e){var t=e.name;return n===t})))alert("Contact with this name was alredy added");else{var t={id:b().generate(),name:n,number:l};j((0,_.uK)(t)),C()}},children:[(0,i.jsxs)("label",{className:x,htmlFor:"",children:["Name",(0,i.jsx)("input",{placeholder:"Enter your name",type:"text",name:"name",value:n,onChange:w,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,i.jsxs)("label",{className:v,htmlFor:"",children:["Number",(0,i.jsx)("input",{placeholder:"Enter your number",type:"tel",value:l,onChange:w,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,i.jsx)("button",{className:d,type:"submit",children:"Add Contact"})]})})},w="ContactList_list__csErn",C="ContactItem_btn__1h5dG";function y(e){var t=e.name,n=e.number,r=e.id,a=(0,o.I0)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("li",{children:[(0,i.jsx)("p",{children:t}),(0,i.jsx)("p",{children:n}),(0,i.jsx)("button",{className:C,onClick:function(){return a((0,_.GK)(r))},children:"Delete"})]})})}function N(){var e=(0,o.v9)(u),t=(0,o.v9)((function(e){return e.filter}));return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{className:w,children:e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){var t=e.id,n=e.name,r=e.number;return(0,i.jsx)(y,{name:n,number:r,id:t},t)}))})})}function F(){var e=(0,o.I0)();return(0,r.useEffect)((function(){e((0,_.yF)(u))}),[e]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{className:f,children:"Phonebook"}),(0,i.jsx)(j,{}),(0,i.jsx)("h2",{className:f,children:"Contacts"}),(0,i.jsx)(l,{}),(0,i.jsx)(N,{})]})}},6429:function(e,t,n){"use strict";e.exports=n(5274)},8857:function(e,t,n){"use strict";var r,a,o,s=n(5408),u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){o=!1}function i(e){if(e){if(e!==r){if(e.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,n){return t!==n.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+t.join(", "));r=e,c()}}else r!==u&&(r=u,c())}function l(){return o||(o=function(){r||i(u);for(var e,t=r.split(""),n=[],a=s.nextValue();t.length>0;)a=s.nextValue(),e=Math.floor(a*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return r||u},characters:function(e){return i(e),r},seed:function(e){s.seed(e),a!==e&&(c(),a=e)},lookup:function(e){return l()[e]},shuffled:l}},7098:function(e,t,n){"use strict";var r,a,o=n(2226);n(8857);e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?r++:(r=0,a=n),t+=o(7),t+=o(e),r>0&&(t+=o(r)),t+=o(n)}},2226:function(e,t,n){"use strict";var r=n(8857),a=n(9139),o=n(2483);e.exports=function(e){for(var t,n=0,s="";!t;)s+=o(a,r.get(),1),t=e<Math.pow(16,n+1),n++;return s}},5274:function(e,t,n){"use strict";var r=n(8857),a=n(7098),o=n(6046),s=n(5347)||0;function u(){return a(s)}e.exports=u,e.exports.generate=u,e.exports.seed=function(t){return r.seed(t),e.exports},e.exports.worker=function(t){return s=t,e.exports},e.exports.characters=function(e){return void 0!==e&&r.characters(e),r.shuffled()},e.exports.isValid=o},6046:function(e,t,n){"use strict";var r=n(8857);e.exports=function(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},9139:function(e){"use strict";var t,n="object"===typeof window&&(window.crypto||window.msCrypto);t=n&&n.getRandomValues?function(e){return n.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=t},5408:function(e){"use strict";var t=1;e.exports={nextValue:function(){return(t=(9301*t+49297)%233280)/233280},seed:function(e){t=e}}},5347:function(e){"use strict";e.exports=0},2483:function(e){e.exports=function(e,t,n){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,a=-~(1.6*r*n/t.length),o="";;)for(var s=e(a),u=a;u--;)if((o+=t[s[u]&r]||"").length===+n)return o}}}]);
//# sourceMappingURL=883.74af4ce7.chunk.js.map