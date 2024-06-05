(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>g});var r=n(601),a=n.n(r),o=n(314),i=n.n(o),s=n(417),d=n.n(s),c=new URL(n(431),n.b),l=new URL(n(14),n.b),u=new URL(n(821),n.b),p=i()(a()),f=d()(c),h=d()(l),m=d()(u);p.push([e.id,`@font-face {\n  font-family: merinda;\n  src: url(${f});\n}\n\n@font-face {\n  font-family: hind;\n  src: url(${h});\n}\n\nhtml,\nbody {\n  margin: 0;\n  height: 100%;\n  font-family: hind;\n}\nbody {\n  display: grid;\n  grid-template-rows: 1fr 12fr;\n  gap: 0px;\n  background-image: url(${m});\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-color: #000000;\n}\nnav {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: solid white 1px;\n}\n#content {\n  display: flex;\n  width: auto;\n  justify-content: flex-end;\n}\n\nbutton {\n  background-color: #000000;\n  color: #f8fafc;\n  padding: 10px;\n  border-radius: 6px;\n  border: none;\n  font-family: hind;\n  font-size: 16px;\n}\n\n#content-container {\n  color: #f8fafc;\n  text-align: center;\n  padding: 50px;\n  width: 400px;\n  margin-right: 200px;\n  text-align: justify;\n  justify-content: center;\n}\n\n.desc-text {\n  font-size: 12px;\n  text-align: left;\n}\n\n.menu-container {\n  display: grid;\n  justify-content: end;\n  padding: 20px;\n  padding-right: 250px;\n}\n\n.page {\n  border: dashed white 1px;\n  border-radius: 8px;\n  /* height: auto; */\n}\n\n.menu-content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  color: white;\n  align-self: center;\n  align-content: center;\n  justify-content: end;\n  text-align: center;\n  width: 400px;\n  /* text-overflow: ellipsis; */\n  padding-right: 50px;\n}\n\n.menu-left {\n  border-right: solid white 1px;\n  font-size: larger;\n}\n.menu-left,\n.menu-right {\n  align-self: center;\n}\n.menu-right {\n  font-size: 20px;\n  text-align: left;\n  overflow: scroll;\n  height: 450px;\n  scrollbar-width: none;\n}\n\nli {\n  margin-top: 10px;\n}\n\n.page-footer {\n  display: flex;\n  color: white;\n  justify-content: space-between;\n  align-items: flex-end;\n  padding: 10px;\n}\n`,""]);const g=p},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=o[c]||0,u="".concat(c," ").concat(l);o[c]=l+1;var p=n(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=a(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var d=r(e,a),c=0;c<o.length;c++){var l=n(o[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=d}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},14:(e,t,n)=>{e.exports=n.p+"099004e46ccd804f079b.ttf"},431:(e,t,n)=>{e.exports=n.p+"eb4a7388fe7484fd1f31.ttf"},821:(e,t,n)=>{e.exports=n.p+"a29dfb6ba90311cd04d6.jpg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(72),t=n.n(e),r=n(825),a=n.n(r),o=n(659),i=n.n(o),s=n(56),d=n.n(s),c=n(540),l=n.n(c),u=n(113),p=n.n(u),f=n(208),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),t()(f.A,h),f.A&&f.A.locals&&f.A.locals;const m=(e,t)=>{let n=document.createElement("div");n.setAttribute("class","menu-container");let r=document.createElement("div");r.setAttribute("class",`page page${t}`);let a=document.createElement("div");a.setAttribute("class","menu-content");let o=document.createElement("div");o.setAttribute("class","menu-left");let i=Object.keys(e)[t-1];o.textContent=i,a.appendChild(o);let s=document.createElement("div");s.setAttribute("class","menu-right");let d=document.createElement("ul");for(let t=0;t<e[i].length;t++){let n=document.createElement("li"),r=e[i][t].split(":"),a=document.createElement("div");a.setAttribute("class","desc-text"),n.textContent=r[0],a.textContent=r[1],d.appendChild(n),n.appendChild(a)}return s.appendChild(d),a.appendChild(s),r.appendChild(a),n.appendChild(r),r.appendChild((()=>{let e=document.createElement("div");e.setAttribute("class","page-footer"),document.createElement("div").setAttribute("class","page-left");let t=document.createElement("button");t.setAttribute("class","appetizer"),t.textContent="Appetizer",e.appendChild(t);let n=document.createElement("button");n.setAttribute("class","main"),n.textContent="Main Course",e.appendChild(n);let r=document.createElement("button");return r.setAttribute("class","dessert"),r.textContent="Dessert",e.appendChild(r),e})()),n.appendChild(r),n},g=e=>m(e,1),b={Appetizers:["Caprese Skewers: Cherry tomatoes, fresh mozzarella balls, and basil leaves threaded onto skewers and drizzled with balsamic glaze.","Stuffed Mushrooms: Large mushrooms filled with a mixture of breadcrumbs, garlic, herbs, and cheese, then baked until golden brown.","Feta Phyllo Triangles: Spinach and feta cheese wrapped in flaky phyllo dough and baked until crispy.","Bruschetta: Toasted baguette slices topped with a mixture of diced tomatoes, garlic, basil, olive oil, and balsamic vinegar.","Potato Fries: Baked or fried sweet potato fries served with a dipping sauce like garlic aioli or sriracha mayo."],"Main Course":["Lasagna: Layers of lasagna noodles, marinara sauce, ricotta cheese, and a variety of roasted or sautéed vegetables like zucchini, eggplant, spinach, and bell peppers, baked until bubbly and golden","Quinoa: Bell peppers stuffed with a mixture of cooked quinoa, black beans, corn, diced tomatoes, onions, and spices, topped with cheese and baked until tender.","Parmesan: Slices of breaded and baked eggplant layered with marinara sauce and melted mozzarella cheese, served with spaghetti or a side salad.","Vegetarian Chili: A hearty and flavorful chili made with beans, tomatoes, onions, bell peppers, corn, and spices, served with toppings like shredded cheese, sour cream, avocado, and cilantro.","Risotto: Creamy risotto cooked with mushrooms, onions, garlic, white wine, and vegetable broth, finished with butter and Parmesan cheese for a luxurious and comforting dish."],Dessert:["Fruit Salad: A refreshing and healthy dessert made with a variety of fresh fruits such as strawberries, blueberries, grapes, pineapple, and kiwi, served with a drizzle of honey or a dollop of yogurt.","Chocolate Chip Cookies: Classic cookies made with chocolate chips, butter, sugar, flour, and vanilla extract, baked until golden brown and deliciously chewy.","Banana Bread: Moist and flavorful bread made with ripe bananas, flour, sugar, eggs, butter, and a hint of cinnamon, perfect for breakfast or dessert.","Pavlova: Light and airy meringue dessert topped with whipped cream and fresh fruit such as berries, kiwi, and passionfruit, perfect for a stunning and elegant dessert."]},v=document.querySelector("#content"),y=()=>{v.innerHTML="",v.appendChild((e=>m(e,2))(b))},w=()=>{v.innerHTML="",v.appendChild((e=>m(e,3))(b))},x=()=>{v.innerHTML="",v.appendChild(g(b)),document.addEventListener("click",(e=>{const t=e.target;t.classList.contains("main")?(console.log("Inside main: "),y()):t.classList.contains("appetizer")?(console.log("Inside Appetizer: "),v.innerHTML="",v.appendChild(g(b))):t.classList.contains("dessert")&&(console.log("Inside Dessert: "),w())}))};document.body.appendChild(function(){const e=document.querySelector("#content"),t=document.querySelector(".logo-button"),n=document.querySelector(".home-button"),r=document.querySelector(".menu-button"),a=document.querySelector(".about-button");let o;return t.addEventListener("click",(()=>{e.innerHTML=""})),n.addEventListener("click",(()=>{e.innerHTML="",o=(()=>{let e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","content-container");const n=document.createElement("br"),r=document.createElement("h3");return r.setAttribute("class","header-div"),r.append("🌟 Welcome to SavorBite Bistro! 🌟"),t.appendChild(r),t.appendChild(n),t.append("Step into a world where every bite is a celebration and every moment is savored. At SavorBite, we invite you to indulge in an exquisite culinary experience that tantalizes your taste buds and warms your soul.\n    \n    At SavorBite, we believe that dining is more than just a meal—it's an opportunity to create lasting memories and forge meaningful connections. So sit back, relax, and let us take you on a culinary journey that's as unforgettable as it is delicious.\n    \n    Thank you for choosing SavorBite Bistro.\n    \n    Bon appétit!"),e.appendChild(t),e})()})),r.addEventListener("click",(()=>{e.innerHTML="",o=x()})),a.addEventListener("click",(()=>{e.innerHTML="",o=(()=>{let e=document.querySelector("#content"),t=document.createElement("div");return t.setAttribute("id","content-container"),t.textContent="At SavorBite Bistro, we believe that dining is not just about food—it's about creating unforgettable experiences that nourish the body and soul. Our restaurant is more than just a place to eat; it's a gathering spot where friends and families come together to celebrate life's moments.\n    \n    Our culinary journey began 13 billion years ago, inspired by travelling all over the world. From our carefully curated menu to our warm and inviting ambiance, every aspect of SavorBite Bistro is designed to delight your senses.\n    \n    What sets us apart is our commitment to serve authentic food from all over the galaxy at one place, just like the big bang. We source the freshest locally-sourced ingredients, ensuring that every dish bursts with flavor and authenticity.\n    \n    But it's not just about the food; it's also about the people. Our team of talented chefs, servers, and staff are dedicated to providing you with an exceptional dining experience.\n    \n    Thank you for choosing SavorBite Bistro. We look forward to welcoming you and serving you soon.\n    \n    Bon appétit!\n    \n    Sincerely,\n    \n    SavorBite Bistro",e.appendChild(t),e})()})),e}())})()})();