(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,a,t){e.exports=t(60)},47:function(e,a,t){},54:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(33),l=t.n(c),o=t(8),i=t(19),s=t(7),m=t(40),u=t(41),d=t(18);t(47);function p(){return r.a.createElement("section",{className:"home",style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{style:{padding:10,marginTop:100}},r.a.createElement("h1",null,"Skippy's Toy")))}var h=t(9),f=t(15),E=t(16),b=t(17),g=t.n(b);function v(){var e=Object(E.a)(["\n  query MeQuery {\n    me {\n      id\n      email \n      name\n      admin\n    }\n  }\n"]);return v=function(){return e},e}var y=g()(v());function _(){var e=Object(E.a)(["\n  mutation Logout {\n    logout\n  }\n"]);return _=function(){return e},e}var w=g()(_()),k=Object(d.f)((function(e){var a=Object(f.a)(w,{update:function(a){a.writeQuery({query:y,data:{me:null}}),e.history.push("/")}}),t=Object(h.a)(a,1)[0];return r.a.createElement("div",{onClick:function(){return t()}},"Logout")})),x=(t(54),Object(d.f)((function(e){var a=Object(f.b)(y),t=a.data,c=a.loading,l=Object(n.useState)(!1),i=Object(h.a)(l,2),s=i[0],m=i[1];return c?r.a.createElement("p",null,"Loading...."):r.a.createElement("nav",{className:"/"!==e.location.pathname?"navigation":"homepage_nav"},r.a.createElement(o.b,{exact:!0,to:"/"},r.a.createElement("h4",{id:"logo"},"Skippy's Toy")),t&&t.me?r.a.createElement("ul",{id:s?"nav-active":""},r.a.createElement("li",{style:s?{animation:"navLinkFade 0.5s ease forwards .2s"}:{},onClick:function(){return m(!1)}},r.a.createElement(o.b,{exact:!0,to:"/about"},"About")),r.a.createElement("li",{style:s?{animation:"navLinkFade 0.5s ease forwards .2s"}:{},onClick:function(){return m(!1)}},r.a.createElement(o.b,{exact:!0,to:"/events"},"Events")),r.a.createElement("li",{style:s?{animation:"navLinkFade 0.5s ease forwards .4s"}:{},onClick:function(){return m(!1)}},r.a.createElement(o.b,{exact:!0,to:"/music"},"Music")),r.a.createElement("li",{style:s?{animation:"navLinkFade 0.5s ease forwards .6s"}:{},onClick:function(){return m(!1)}},r.a.createElement(o.b,{exact:!0,to:"/contact"},"Contact")),r.a.createElement("li",{style:s?{animation:"navLinkFade 0.5s ease forwards .8s"}:{},onClick:function(){return m(!1)}},r.a.createElement(o.b,{exact:!0,to:"/navlinkstylesbruh"},r.a.createElement(k,null)))):r.a.createElement("ul",{id:s?"nav-active":""},r.a.createElement("li",{style:s?{animation:"navLinkFade 0.5s ease forwards .2s"}:{},onClick:function(){return m(!1)}},r.a.createElement(o.b,{exact:!0,to:"/about"},"About")),r.a.createElement("li",{style:s?{animation:"navLinkFade 0.5s ease forwards .2s"}:{},onClick:function(){return m(!1)}},r.a.createElement(o.b,{exact:!0,to:"/events"},"Events")),r.a.createElement("li",{style:s?{animation:"navLinkFade 0.5s ease forwards .4s"}:{},onClick:function(){return m(!1)}},r.a.createElement(o.b,{exact:!0,to:"/music"},"Music")),r.a.createElement("li",{style:s?{animation:"navLinkFade 0.5s ease forwards .6s"}:{},onClick:function(){return m(!1)}},r.a.createElement(o.b,{exact:!0,to:"/contact"},"Contact")),r.a.createElement("li",{style:s?{animation:"navLinkFade 0.5s ease forwards .8s"}:{},onClick:function(){return m(!1)}},r.a.createElement(o.b,{exact:!0,to:"/login"},r.a.createElement("i",{className:"fas fa-key"})))),r.a.createElement("div",{className:"burger",onClick:function(){return m((function(e){return!e}))}},r.a.createElement("div",{id:"line1"}),r.a.createElement("div",{id:"line2"}),r.a.createElement("div",{id:"line3"})))}))),N=t(21),S=t.n(N);function j(){var e=Object(E.a)(["\n  mutation RegisterMutation($email: String!, $password: String!, $password2: String!, $name: String!) {\n    register(email: $email, password: $password, password2 :$password2, name: $name)  \n  }\n"]);return j=function(){return e},e}var C=g()(j());function O(e){var a=Object(n.useState)(""),t=Object(h.a)(a,2),c=t[0],l=t[1],o=Object(n.useState)(""),i=Object(h.a)(o,2),s=i[0],m=i[1],u=Object(n.useState)(""),d=Object(h.a)(u,2),p=d[0],E=d[1],b=Object(n.useState)(""),g=Object(h.a)(b,2),v=g[0],y=g[1],_=Object(f.a)(C,{variables:{email:c,name:v,password:s,password2:p}}),w=Object(h.a)(_,2),k=w[0],x=w[1].error;return r.a.createElement("div",{className:"register"},r.a.createElement("form",{onSubmit:function(a){return S.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,S.a.awrap(k());case 3:e.history.push("/login");case 4:case"end":return t.stop()}}))}},r.a.createElement("h2",null,"Sign Up"),r.a.createElement("input",{required:!0,name:"email",type:"email",value:c,onChange:function(e){return l(e.target.value)},placeholder:"Enter your email"}),r.a.createElement("input",{required:!0,type:"text",value:v,onChange:function(e){return y(e.target.value)},placeholder:"Enter your name"}),r.a.createElement("input",{required:!0,type:"password",value:s,onChange:function(e){return m(e.target.value)},placeholder:"Enter your password"}),r.a.createElement("input",{required:!0,type:"password",value:p,onChange:function(e){return E(e.target.value)},placeholder:"Enter your password again"}),x&&r.a.createElement("p",null,x.message),r.a.createElement("button",{type:"submit",className:"submit_btn",style:{margin:0}},"Sign Up")))}function A(){var e=Object(E.a)(["\n  mutation LoginMutation($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      id\n      email\n      name\n      admin\n    }\n  }\n"]);return A=function(){return e},e}var M=g()(A());function P(e){var a=Object(n.useState)(""),t=Object(h.a)(a,2),c=t[0],l=t[1],o=Object(n.useState)(""),i=Object(h.a)(o,2),s=i[0],m=i[1],u=Object(f.a)(M,{variables:{email:c,password:s},update:function(e,a){var t=a.data;t&&t.login&&(e.reset(),e.writeQuery({query:y,data:{me:t.login}}))}}),d=Object(h.a)(u,2),p=d[0],E=d[1].error;return r.a.createElement("div",{className:"login"},r.a.createElement("form",{onSubmit:function(a){return S.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,S.a.awrap(p());case 3:e.history.push("/");case 4:case"end":return t.stop()}}))}},r.a.createElement("h2",null,"Sign In"),r.a.createElement("input",{required:!0,name:"email",type:"email",value:c,onChange:function(e){return l(e.target.value)},placeholder:"Enter your email"}),r.a.createElement("input",{required:!0,type:"password",value:s,onChange:function(e){return m(e.target.value)},placeholder:"Enter your password"}),E&&r.a.createElement("p",null,E.message),r.a.createElement("button",{type:"submit",className:"submit_btn",style:{margin:0}},"Sign In")))}t(56);function T(){return r.a.createElement("section",{className:"about-section"},r.a.createElement("h1",null,"About"),r.a.createElement("div",{className:"about"},r.a.createElement("img",{src:"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/31902022_2077107932567398_1140494708225605632_n.jpg?_nc_cat=111&_nc_ohc=a5AL8kT4cbQAX_WzPxP&_nc_ht=scontent-lga3-1.xx&oh=197562e504409a95407d496871c3929a&oe=5ED2D96B",alt:"hi",className:"about-pic"}),r.a.createElement("p",null,"We're a 5 piece band, female and male vocalists. Covering a variety of tunes from the 60's and up. Top 20 semi-finalist for WMGK 102.9 house band competition 2018"),r.a.createElement("h2",null,"What We Play"),r.a.createElement("p",null,"We play everything from Pretenders, Janice, Jefferson Airplane and Fleetwood Mac to The Beatles, Crosby Stills and Nash, The Stones, Bob Seger and Badfinger to name a few.  We even have some Sonny & Cher and some Monkees! You name the decade and genre, and we most likely have it."),r.a.createElement("h2",null,"The Band"),r.a.createElement("div",{className:"avatar_bio_container"},r.a.createElement("img",{className:"avatar",src:"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/28575984_10214481840133797_6430062679029051248_n.jpg?_nc_cat=105&_nc_ohc=MT31BNUvBSYAX-mDq1h&_nc_ht=scontent-lga3-1.xx&oh=e353c132fe8f74e4ede75a90e0992f04&oe=5E91B731",alt:""}),r.a.createElement("p",null,r.a.createElement("span",{className:"bio-title"},"Jimmy Mannix - guitar & vocals"),r.a.createElement("br",null),r.a.createElement("br",null),"Jimmy Mannix is a founding member of Big Bang, a local band that survived over 20 years. He was also in Cheap Sunglasses, Outloud, and various other bands. Jimmy's incredible guitar playing and stunning vocals make him one of the best and most respected performers around the area.")),r.a.createElement("div",{className:"avatar_bio_container"},r.a.createElement("img",{className:"avatar",src:"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/p720x720/71045410_10215523077963682_1865111040304349184_o.jpg?_nc_cat=108&_nc_ohc=z-P2EdIrQR0AX81hHz-&_nc_ht=scontent-lga3-1.xx&_nc_tp=1002&oh=cae03ba68e1b2f6f0db36c6fd78ae2ff&oe=5E997681",alt:"Kathy Mattson"}),r.a.createElement("p",null,r.a.createElement("span",{className:"bio-title"},"Kathy Mattson - vocals & keyboard"),r.a.createElement("br",null),r.a.createElement("br",null),"Kathy Mattson has been involved in various bands throughout her life, and is currently in a duo with Jimmy that performs all over South Jersey and Philly.  She was classically trained in high school on piano and studied opera as well.")),r.a.createElement("div",{className:"avatar_bio_container"},r.a.createElement("img",{className:"avatar",src:"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/75210261_489371274981725_1951903279860416512_n.jpg?_nc_cat=103&_nc_ohc=1CiDBtYoR_gAX-bpIVk&_nc_ht=scontent-lga3-1.xx&oh=240cddb110954a8c42f64aab4a8ed4c1&oe=5EA027D3",alt:""}),r.a.createElement("p",null,r.a.createElement("span",{className:"bio-title"},"Jay MacLean - drums, vocals"),r.a.createElement("br",null),r.a.createElement("br",null),"Jay MacLean started playing professionally at a young age when his brother picked him out of a garage band to play in the acclaimed MacLean Affair. From there he put together the highly talented progressive rock band Prodigy. Then he played for several years in the very successful band Energized. He was a founding member of The Blitz and enjoyed several years with them. After that came a 20-year run playing R&B with the Soul Survivors of \u201cExpressway to Your Heart\u201d fame. Now he\u2019s back where he belongs with his first love playing rock n roll with the powerhouse Skippy\u2019s Toy.")),r.a.createElement("div",{className:"avatar_bio_container"},r.a.createElement("img",{className:"avatar",src:"https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/s960x960/25299953_1511958398922571_7181912016116212525_o.jpg?_nc_cat=108&_nc_ohc=p0OQAGbvITYAX_Doma8&_nc_ht=scontent-lga3-1.xx&_nc_tp=1002&oh=fd409facacb5512c484ecf325d012ea9&oe=5E97E660",alt:""}),r.a.createElement("p",null,r.a.createElement("span",{className:"bio-title"},"Zuff - vocals, guitar, harmonica Rj Bozzuffi"),r.a.createElement("br",null),r.a.createElement("br",null),'(Zuff) has been with  SKIPPY\'S TOY since 2016 and has been the drummer for various South  Jersey rock bands including $MONEY$, BIG EYES, CAGNEY, and CRY WOLF.   The "Drum Doctor" was one of the first ROCK drum teachers in the  tri-state area, and taught for 20 years.  Zuff has extensive recording  experience including national commercials.  He has been playing guitar  as long as drums and plays with the Rod & Zuff Duo.  His solo music  and originals can be heard on his YouTube page.')),r.a.createElement("div",{className:"avatar_bio_container"},r.a.createElement("img",{className:"avatar",src:"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-0/p206x206/45271554_2321919184493884_8272436307238584320_n.jpg?_nc_cat=106&_nc_ohc=fecjFGt0e_kAX_EkoBx&_nc_ht=scontent-lga3-1.xx&_nc_tp=1002&oh=6efc96a5efdc16cd990f6a18d5f0eba7&oe=5E9D0484",alt:""}),r.a.createElement("p",null,r.a.createElement("span",{className:"bio-title"},"Kevin \u201cAce\u201d Porter - bass, sound, vocals"),r.a.createElement("br",null),r.a.createElement("br",null),'Kevin "Ace" Porter founded Skippy\'s Toy.  Ace started off in a band called Sinner where he played bass for 5 years.  After Sinner, Ace got involved in sound engineering, and spent decades providing sound for popular touring bands. Ace has a great ear, and is well known for his talent in the music industry. Ace was also involved in the fine art of Italian Rum Cake, cannolis and other fine pastries!')),r.a.createElement("h2",null,"Pure Petty"),r.a.createElement("p",null,"Pure Petty is a tribute band dedicated to the late great Tom Petty. Pure Petty includes all members of Skippy\u2019s Toy with an additional two all star musicians."),r.a.createElement("iframe",{id:"pure-petty-intro",src:"https://www.youtube.com/embed/C3TXaQish40",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",title:"pure-petty-intro",allowFullScreen:!0}),r.a.createElement("h2",null,"Additional Members"),r.a.createElement("div",{className:"avatar_bio_container"},r.a.createElement("img",{className:"avatar",src:"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-0/p640x640/64854322_973691506296182_2941609747977076736_o.jpg?_nc_cat=104&_nc_ohc=aTN5Y0xzbk0AX_gtAP5&_nc_ht=scontent-lga3-1.xx&_nc_tp=6&oh=e9f83f914da3055ddfb4a0b665a50a95&oe=5E8EA0DD",alt:"avatar"}),r.a.createElement("p",null,r.a.createElement("span",{className:"bio-title"},'Pete "Eggman" Smith: lead guitar'),r.a.createElement("br",null),r.a.createElement("br",null),'Pete "Eggman" Smith started his musical career as a founding member of PEGASUS. He also played locally with PROWLER. Pete then went on tour with CHUBBY CHECKER and with ROBERT HAZARD & THE HEROS. He is currently working on an original project called SUCCESSFUL FAILURES.')),r.a.createElement("div",{className:"avatar_bio_container"},r.a.createElement("img",{className:"avatar",src:"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-0/p640x640/66511546_973690889629577_3122487884716703744_o.jpg?_nc_cat=106&_nc_ohc=kjLWJ23HSswAX8HE_RW&_nc_ht=scontent-lga3-1.xx&_nc_tp=6&oh=4d428aa323f58d9b660219fd712d3eae&oe=5E966E9C",alt:"avatar"}),r.a.createElement("p",null,r.a.createElement("span",{className:"bio-title"},'Mike "Doc" Meltzer: Keyboard, vocals'),r.a.createElement("br",null),r.a.createElement("br",null),"Mike \u201cDoc\u201d Meltzer a real life doctor who practices family medicine as a \u201cside gig.\u201d Doc has been playing keyboards and singing for over 40 years. Mike is an original member of Midlife Crisis and also played with the band Doghouse. Doc does not shy away from a good joke and is known to share his twisted humor on stage. This pint sized powerhouse brings joy and energy to every gig."))))}t(57);function L(){return r.a.createElement("section",null,r.a.createElement("h1",null,"Events"),r.a.createElement("div",{id:"calendar"},r.a.createElement("iframe",{src:"https://calendar.google.com/calendar/embed?src=4ebiujrje6r279n0jnci3nj1gs%40group.calendar.google.com&ctz=America%2FNew_York",id:"calendar_iframe",frameBorder:"0",scrolling:"yes",title:"google calendar"})))}function B(){return r.a.createElement("section",null,r.a.createElement("h1",null,"Music"))}t(58);function F(){return r.a.createElement("section",{id:"contact_section"},r.a.createElement("h1",null,"Contact Us"),r.a.createElement("div",{className:"info_container"},r.a.createElement("div",{className:"contact_info"},r.a.createElement("label",{htmlFor:"phone_number"},"Phone number:"),r.a.createElement("i",{className:"fas fa-phone",id:"phone"}),r.a.createElement("p",{className:"contact_info_p",id:"phone_number"},"(856) 562 - 2046")),r.a.createElement("div",{className:"contact_info"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("i",{className:"fas fa-envelope-open-text",id:"email"}),r.a.createElement("p",{className:"contact_info_p"},"skippystoy@outlook.com"))),r.a.createElement("div",{className:"form_container"},r.a.createElement("form",{className:"form",action:"https://getsimpleform.com/messages?form_api_token=6a1921982fce1cfeb01a73367e2d497c",method:"POST"},r.a.createElement("input",{type:"text",name:"name",className:"form_control",placeholder:"Name",required:!0}),r.a.createElement("input",{type:"email",name:"email",className:"form_control",placeholder:"Email",required:!0}),r.a.createElement("textarea",{name:"message",className:"form_control",id:"",cols:"50",rows:"1",placeholder:"Message"}),r.a.createElement("button",{type:"submit",className:"submit_btn",onClick:function(e){window.confirm("Send Email?")?alert("We'll be in touch!"):e.preventDefault()}},"Say Hi!"))),r.a.createElement("div",{className:"info_container"},r.a.createElement("div",{className:"contact_info_div"},r.a.createElement("label",{htmlFor:"youtube"}),"YouTube",r.a.createElement("a",{href:"https://www.youtube.com/user/MrKporter136/videos",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-youtube icons",id:"youtube"}))),r.a.createElement("div",{className:"contact_info_div"},r.a.createElement("label",{htmlFor:"facebook"}),"facebook",r.a.createElement("a",{href:"https://www.facebook.com/SkippysRock/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-facebook-f icons",id:"facebook"})))))}var D=function(){return r.a.createElement("main",null,r.a.createElement("div",{className:"navbar"},r.a.createElement(x,null)),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:p}),r.a.createElement(d.a,{path:"/login",component:P}),r.a.createElement(d.a,{path:"/register",component:O}),r.a.createElement(d.a,{path:"/about",component:T}),r.a.createElement(d.a,{path:"/events",component:L}),r.a.createElement(d.a,{path:"/music",component:B}),r.a.createElement(d.a,{path:"/contact",component:F})))},R=(t(59),new m.a),H=new i.a({cache:R,link:new u.a({uri:"graphql",credentials:"include"})});l.a.render(r.a.createElement(s.a,{client:H},r.a.createElement(o.a,null,r.a.createElement(D,null))),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.20181f71.chunk.js.map