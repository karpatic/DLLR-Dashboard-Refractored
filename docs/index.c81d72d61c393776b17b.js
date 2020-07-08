!function(t){function n(n){for(var o,d,s=n[0],l=n[1],r=n[2],p=0,u=[];p<s.length;p++)d=s[p],Object.prototype.hasOwnProperty.call(i,d)&&i[d]&&u.push(i[d][0]),i[d]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);for(c&&c(n);u.length;)u.shift()();return a.push.apply(a,r||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],o=!0,s=1;s<e.length;s++){var l=e[s];0!==i[l]&&(o=!1)}o&&(a.splice(n--,1),t=d(d.s=e[0]))}return t}var o={},i={4:0},a=[];function d(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,d),e.l=!0,e.exports}d.e=function(t){var n=[],e=i[t];if(0!==e)if(e)n.push(e[2]);else{var o=new Promise((function(n,o){e=i[t]=[n,o]}));n.push(e[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,d.nc&&s.setAttribute("nonce",d.nc),s.src=function(t){return d.p+""+({0:"vendors~counties_external_code~maryland_external_code~woia_external_code",1:"boundary_marylands_counties",2:"counties_external_code",5:"maryland_external_code",8:"woia_external_code"}[t]||t)+".c81d72d61c393776b17b.js"}(t);var l=new Error;a=function(n){s.onerror=s.onload=null,clearTimeout(r);var e=i[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,e[1](l)}i[t]=void 0}};var r=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(n)},d.m=t,d.c=o,d.d=function(t,n,e){d.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},d.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,n){if(1&n&&(t=d(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(d.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)d.d(e,o,function(n){return t[n]}.bind(null,o));return e},d.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return d.d(n,"a",n),n},d.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},d.p="",d.oe=function(t){throw console.error(t),t};var s=this.webpackJsonp=this.webpackJsonp||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var r=0;r<s.length;r++)n(s[r]);var c=l;a.push([22,7]),e()}({22:function(t,n,e){"use strict";e.r(n);var o=e(2),i=e.n(o),a=e(3),d=e.n(a),s=(e(23),e(6)),l=e(4),r=e(5),c=e(15);e(24);d()(i.a.mark((function t(){var n,o,a,d,p,u,v,y,m,h,b,C,w,f,g,_,A,D,S,M,N,L,T,P,W,x,k,E,F,j,I,Q,q,H,B,G,O,R,J,Y,U,K,z,V,Z,$,X,tt,nt,et,ot;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=window.location.search){t.next=13;break}return console.log("HOMEPAGE"),t.next=5,e.e(1).then(e.t.bind(null,26,3));case 5:o=t.sent,document.querySelector("#body").innerHTML='\n        <div class="Title">\n\t\t\t<p>Welcome to the Maryland Area Explorer! (Last Updated 5/27/19)</p>\n        </div>\n        <div class="Body">\n\t\t\t<p>The Maryland Area Explorer turns complex labor market information data into easy-to-understand charts and graphs. To get started, select a county from the dropdown menus or from the map below.</p>\n\t\t</div>\n        <div id="tooltip"></div>\n\t\t<div id="mapDrop">\n\t\t\t<select onChange="window.location.href = \'?county=\' + this.value"> '.concat(r.countySelects," </select>\n\t\t\t<select onChange=\"window.location.href = '?county=' + this.value\"> ").concat(l.wdaSelects,' </select>\n\t\t</div> <div id="map" > </div>\t'),window.arrCounties=[],a=s.geoMercator().scale(4500).translate([6275,3300]),d=s.geoPath().projection(a),s.select("#map").append("svg").attr("width","100%").attr("height","550").attr("viewBox","0 0 400 1").attr("id","md-svg").append("g").attr("id","counties").selectAll("path").data(o.default.features).enter().append("path").attr("class","md-county").attr("onClick","window.location.href = '?county=' + (arrCounties[this.attributes.cid.value].properties.GEODESC).replace(/[ ]/g,'').replace(/[']/g,'') + '.html'").attr("d",d).attr("cid",(function(t){return arrCounties.push(t),arrCounties.length-1})),t.next=101;break;case 13:if(window.CountyName=n.replace("?county=","").replace(".html","").replace(/([A-Z])/g," $1").trim(),window.emplStatusCounties=["Maryland","Worcester County","Wicomico County","Talbot County","St Marys County","Queen Annes County","Kent County","Garrett County","Dorchester County","Allegany County","Caroline County","Calvert County","Somerset County","Prince Georges County"],"",p="".countyCode,u="".buttonMenu,v="Maryland"==CountyName,y=CountyName.includes("L W D A"),!1,(!1).wdaDropdowns,(!1).wdaCollapse1,(!1).wdaCollapse2,(!1).wdaCollapse3,(!1).wdaCollapse4,(!1).wdaCollapse15,(!1).countyDropdowns,(!1).counties_pop,(!1).counties_empl_edu_gend,(!1).counties_empl_race_ethn,(!1).counties_empl_vet,(!1).counties_disabl_pov,(!1).counties_empl_status,(!1).counties_snap,m='<div class="ChartTitle">\n\t\t  <p id=\'title\' style="display:inline" >innertext</p>\n\t\t  <p></p>\n\t\t  <div id=\'dropdownMenu\' style="display:inline; float:right">\n\t\t\t<p style="display:inline;">Select Time Period:</p>\n\t\t\t\t<select id=\'dropdownMenuY\' style="display:inline; id="year_dd" style="display:inline; float:right">\n\t\t\t\t  <option>Pick a Time Period</option>\n\t\t\t\t  <option>2015</option>\n\t\t\t\t  <option>2016</option>\n\t\t\t\t  <option>2017</option>\n\t\t\t\t  <option>2018</option>\n\t\t\t\t  <option>2019</option>\n\t\t\t\t</select>\n\t\t\t\t<select  id=\'dropdownMenuQ\' style="display:inline; id="quar_dd">\n\t\t\t\t  <option>2016-Q1</option>\n\t\t\t\t  <option>2016-Q2</option>\n\t\t\t\t  <option>2016-Q3</option>\n\t\t\t\t  <option>2016-Q4</option>\n\t\t\t\t  <option>2017-Q1</option>\n\t\t\t\t  <option>2017-Q2</option>\n\t\t\t\t  <option>2017-Q3</option>\n\t\t\t\t  <option>2017-Q4</option>\n\t\t\t\t  <option>2018-Q1</option>\n\t\t\t\t  <option>2018-Q2</option>\n\t\t\t\t  <option>2018-Q3</option>\n\t\t\t\t  <option>2018-Q4</option>\n\t\t\t\t  <option>2019-Q1</option>\n\t\t\t\t  <option>2019-Q2</option>\n\t\t\t\t  <option selected="selected">2019-Q4</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\t\t',!y){t.next=39;break}return h=CountyName.replace("L W D A",""),window.CountyName1=h+"WIA -- Maryland Statewide",window.CountyName2=h+"WIA",window.CountyName4=h+" Local Workforce Development Area",window.CountyName5=h+"LWDA",t.next=28,Promise.resolve().then(e.bind(null,4));case 28:b=t.sent,C=b.wdaDropdowns,w=b.wdaCollapse1,f=b.wdaCollapse2,g=b.wdaCollapse3,_=b.wdaCollapse4,A=b.wdaCollapse15,u=C,p="".concat(m," ").concat(w," ").concat(f," ").concat(g," ").concat(_(CountyName)," ").concat(A),t.next=96;break;case 39:if(!v){t.next=75;break}return window.CountyName=window.CountyName1=window.CountyName2=window.CountyName4="Maryland",t.next=43,Promise.resolve().then(e.bind(null,4));case 43:return D=t.sent,D.wdaDropdowns,S=D.wdaCollapse1,M=D.wdaCollapse2,N=D.wdaCollapse3,L=D.wdaCollapse4,T=D.wdaCollapse15,t.next=52,Promise.resolve().then(e.bind(null,5));case 52:return P=t.sent,P.countyDropdowns,W=P.counties_pop,x=P.counties_empl_edu_gend,k=P.counties_empl_race_ethn,E=P.counties_empl_vet,F=P.counties_disabl_pov,j=P.counties_tanf,I=P.counties_empl_status,Q=P.counties_snap,t.next=64,e.e(9).then(e.bind(null,27));case 64:q=t.sent,H=q.mdDrodowns,B=q.mdApprenticeshipCompleters,G=q.mdNewApprenticeShipPrograms,O=q.mdNewAndACtivePrograms,R=q.mdLongTermUnemployment,J=q.mdServiceParticipantsInSnap,u=H,p="".concat(m," ").concat(S," ").concat(M," ").concat(N," ").concat(L(CountyName)," ").concat(T," ").concat(W," ").concat(x," ").concat(k," ").concat(E," ").concat(F," ").concat(j," ").concat(I," ").concat(Q,"  ").concat(B," ").concat(G," ").concat(O," ").concat(R," ").concat(J,"\n            "),t.next=96;break;case 75:return t.next=77,Promise.resolve().then(e.bind(null,5));case 77:Y=t.sent,U=Y.countyDropdowns,K=Y.counties_pop,z=Y.counties_empl_edu_gend,V=Y.counties_empl_race_ethn,Z=Y.counties_empl_vet,$=Y.counties_disabl_pov,X=Y.counties_tanf,tt=Y.counties_empl_status,nt=Y.counties_snap,p="".concat(m," ").concat(K," ").concat(z," ").concat(V," ").concat(Z," ").concat($," ").concat(X," ").concat(tt," ").concat(nt," \n            "),window.CountyName1=CountyName+", MD",window.CountyName2=CountyName+", Maryland",window.CountyName4=CountyName,console.log("Countyname",CountyName),"St Marys County"==CountyName&&(window.CountyName4="St Mary's County"),"Queen Annes County"==CountyName&&(window.CountyName4="Queen Anne's County"),"Prince Georges County"==CountyName&&(window.CountyName4="Prince George's County"),u=U(CountyName);case 96:console.log({CountyName:CountyName,CountyName1:CountyName1,CountyName2:CountyName2,CountyName4:CountyName4}),et='\n\t  <div class="sidebutton">\n\t    <div data-intro="Toggle Region"  data-position="right">\n\t\t\t<select onChange="window.location.href = \'?county=\' + this.value" style="margin: 0px 0px 10px 4px; margin-bottom: 10px; padding-right: 18%;">\n\t\t\t  '.concat(r.countySelects,'\n\t\t\t</select>\n\t\t\t<select onChange="window.location.href = \'?county=\' + this.value" style="margin: 0px 0px 2px 3px; margin-bottom: 10px; padding-right: 0%;">\n\t\t\t  ').concat(l.wdaSelects,'\n\t\t\t</select>\n\t\t</div>\n\t\t<div <div data-intro="Toggle Indicator"  data-position="right">\n\t\t').concat(u,"\n\t\t</div>\n\t  </div>\n\t  "),ot="\n\t  ".concat(et,'\n\t  <div id="Wrapper">\n\t\t<div class="content">\n\t\t  <div class="Header">\n\t\t\t<p class="RightText"><a href="./index.html" data-intro="Homepage"  data-position="bottom" >Start Over</a>    |    \n\t\t\t<button onclick="printClick()" data-intro="Save"  data-position="bottom">Print This Snapshot</button>    |     \n\t\t\t<button onclick="printAll()"  data-intro="Save"  data-position="bottom"> Print Whole Page</button></p>\n\t\t\t<p>Select Different Snapshot and/or County</p>\n\t\t  </div>\n\t\t  <div class="County">\n\t\t\t<p id="title1">').concat(CountyName4,'</p>\n\t\t\t<p id="Landing">Please select a dashboard from the buttons to the right, or select a different geographic area from the dropdown menus. </p>\n\t\t  </div>\n\t\t  ').concat(p,"\n\t\t</div>\n\t  </div>\n\t  "),document.body.innerHTML+=ot,CountyName.includes("L W D A")?Promise.all([e.e(0),e.e(8)]).then(e.bind(null,16)):"Maryland"==CountyName?(Promise.all([e.e(0),e.e(8)]).then(e.bind(null,16)),Promise.all([e.e(0),e.e(2)]).then(e.bind(null,17)),Promise.all([e.e(0),e.e(5)]).then(e.bind(null,28))):Promise.all([e.e(0),e.e(2)]).then(e.bind(null,17));case 101:localStorage.setItem("Clicked","placeholder"),document.body.innerHTML+="",!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&n&&"false"!=localStorage.getItem("displayChardin")&&(localStorage.setItem("displayChardin","false"),new c.a(document.querySelector("body")).start());case 104:case"end":return t.stop()}}),t)})))()},23:function(t,n,e){},4:function(t,n,e){"use strict";e.r(n),e.d(n,"wdaSelects",(function(){return o})),e.d(n,"wdaDropdowns",(function(){return i})),e.d(n,"wdaCollapse1",(function(){return d})),e.d(n,"wdaCollapse2",(function(){return s})),e.d(n,"wdaCollapse3",(function(){return l})),e.d(n,"wdaCollapse4",(function(){return r})),e.d(n,"wdaCollapse15",(function(){return c}));var o='\n  <option selected="selected">Or A Local Workforce Development Area (LWDA)...</option>\n  <option value="AnneArundelLWDA.html">Anne Arundel LWDA</option>\n  <option value="BaltimoreCityLWDA.html">Baltimore City LWDA</option>\n  <option value="BaltimoreCountyLWDA.html">Baltimore County LWDA</option>\n  <option value="FrederickLWDA.html">Frederick County LWDA</option>\n  <option value="LowerShoreLWDA.html">Lower Shore LWDA</option>\n  <option value="MidMarylandLWDA.html">Mid Maryland LWDA</option>\n  <option value="MontgomeryLWDA.html">Montgomery LWDA</option>\n  <option value="PrinceGeorgesLWDA.html">Prince George\'s LWDA</option>\n  <option value="SouthernMarylandLWDA.html">Southern Maryland LWDA</option>\n  <option value="SusquehannaLWDA.html">Susquehanna LWDA</option>\n  <option value="UpperShoreLWDA.html">Upper Shore LWDA</option>\n  <option value="WesternMarylandLWDA.html">Western Maryland LWDA</option>\n  <option value="Maryland.html" >Maryland</option>\n',i='\n<div>\n  <div class="dropdown"> <button class="button" disabled data-lbl="collapse1" id="button1">Number of Workers <br><br> Average Monthly Earnings</button> </div>\n  <div class="dropdown"> <button class="button" disabled data-lbl="collapse2" style="padding-left: 15%; padding-right: 12.5%">New Hires <br><br>Job Net Changes</button> </div>\n  <div class="dropdown"> <button class="button" disabled data-lbl="collapse3" style="padding-left: 17%; padding-right: 17%">Turnover Rate</button> </div>\n  <div class="dropdown"> <button class="button" disabled data-lbl="collapse4" style="padding-left: 15%; padding-right: 1%;">Industry Metrics</button> </div>\n  <div class="dropdown"> <button class="button" disabled data-lbl="collapse15" style="padding-left: 20%; padding-right: 20%">Separations</button> </div>\n</div>\n',a='\n<div class="Footer">\n  <p>"S" Represents suppressed counts that are less than 3.</p>\n  <p>Data source: Longitudinal Employer-Household Dynamics (LEHD), last accessed on May 01, 2020</p>\n</div>\n',d='\n<div id="collapse1" style="display: none;">\n  <div class="ChartTitle" style="display:inline; float:right; margin-right:90px;">\n    <div class="buttons">\n      <p>\n        Indicator: \n        <select id="wda_dd_1">\n          <option>By Age</option>\n          <option>By Gender</option>\n        </select>\n      </p>\n    </div>\n  </div>\n  <div class="ChartDiv">\n    <div id="Chart3">\n      <p></p>\n    </div>\n    <div id="Print3" class="print"></div>\n  </div>\n  <div class="Table">\n    <table id ="table3" style="font-size: 80%"></table>\n    '.concat(a,"\n  </div>\n\n</div>\n"),s='\n<div id="collapse2" style="display: none;">\n  <div class="ChartTitle" style="display:inline; float:right; margin-right:90px;">\n    <div class="buttons">\n      <p>\n        Indicator: \n        <select id="wda_dd_2">\n          <option>By Education</option>\n          <option>By Gender</option>\n        </select>\n      </p>\n    </div>\n  </div>\n  <div class="ChartDiv">\n    <div id="Chart4">\n    </div>\n    <div id="Print4" class="print"></div>\n  </div>\n  <div class="Table">\n    <table id="table4">\n    </table>\n    <div class="Footer" >\n      <p>New Hires and Job Net Change since previous quarter.</p>\n      <p">New Hires: Estimated number of workers who started a new job.  More specifically, total hires that, while they worked for an employer in the specified quarter, were not employed by that employer in any of the previous four quarters. </p>\n      <p>Job Net Change: Difference between firm job gain and firm job loss.</p>\n    </div>\n    '.concat(a,"\n  </div>\n</div>\n"),l='\n<div id="collapse3" style="display: none;">\n  <div class="ChartTitle" style="display:inline; float:right; margin-right:90px;">\n    <div class="buttons">\n      <p>\n        Indicator: \n        <select id="wda_dd_3">\n          <option>By Education</option>\n          <option>By Gender</option>\n        </select>\n      </p>\n    </div>\n  </div>\n  <div class="ChartDiv">\n    <div id="ChartFive">\n    </div>\n    <div id="PrintFive" class="print"></div>\n    <div class="Table">\n      <table id="table5">\n      </table>\n      <div class="Footer" >\n        <p>Job Turnover Rate in previous quarter.</p>\n        <p>Turnover Rate: The rate at which stable jobs begin and end. It is calculated by summing the number of stable hires in the reference quarter and stable separations in the next quarter, and dividing by the average full-quarter employment.</p>\n      </div>\n      '.concat(a,"\n    </div>\n  </div>\n</div>\n");function r(t){return'\n<div id="collapse4" style="display: none;">\n   <div class="ChartTitle" style="display:inline; float:right; margin-right:90px;">\n      <div class="buttons">\n         <p>\n            Indicator:\n            <select id="wda_dd_4">\n               '.concat("Maryland"==t?"":"<option>Average Monthly Earnings</option>",'\n               <option>Job Net Changes</option>\n               <option>New Hires</option>\n               <option>Turnover Rate</option>\n               <option selected="selected">Workers</option>\n            </select>\n         </p>\n         <button type="button" id="btn6wda">Toggle Labels</button>\n      </div>\n   </div>\n   <div class="ChartDiv">\n      <div id="Chart6"></div>\n      <div id="Print6" class="print"></div>\n      <style>\n         #table6 > tbody > tr > td { text-align:right !important }\n      </style>\n      <div id="Table">\n         <table id="table6" >\n         </table>\n         <div class="Footer" >\n            <p>New Hires: Estimated number of workers who started a new job.  More specifically, total hires that, while they worked for an employer in the specified quarter, were not employed by that employer in any of the previous four quarters. </p>\n            <p>Job Net Change: Difference between firm job gain and firm job loss.</p>\n            <p>Turnover Rate: The rate at which stable jobs begin and end. It is calculated by summing the number of stable hires in the reference quarter and stable separations in the next quarter, and dividing by the average full-quarter employment.</p>\n         </div>\n         ').concat(a,"\n      </div>\n   </div>\n</div>\n")}var c='\n<div id="collapse15" style="display:none;">\n   <div class="ChartTitle" style="display:inline; float:right; margin-right:90px;">\n      <div class="buttons">\n         <p>\n            Indicator:\n            <select id="wda_dd_5">\n               <option selected="selected">Industry</option>\n               <option>Gender</option>\n               <option>Education</option>\n               <option>Age</option>\n            </select>\n         </p>\n      </div>\n   </div>\n   <div class="ChartDiv">\n      <div id="Chart17"> </div>\n      <div id="Print17" class="print"></div>\n   </div>\n   <div class="Table">\n      <table id="table15"> </table>\n      <div class="Footer" >\n        <p>Estimated number of workers whose job with a given employer ended in the specified quarter.</p>\n      </div>\n      '.concat(a,"\n   </div>\n</div>\n")},5:function(t,n,e){"use strict";e.r(n),e.d(n,"countySelects",(function(){return o})),e.d(n,"countyDropdowns",(function(){return i})),e.d(n,"counties_pop",(function(){return a})),e.d(n,"counties_empl_edu_gend",(function(){return d})),e.d(n,"counties_empl_race_ethn",(function(){return s})),e.d(n,"counties_empl_vet",(function(){return l})),e.d(n,"counties_disabl_pov",(function(){return r})),e.d(n,"counties_tanf",(function(){return c})),e.d(n,"counties_empl_status",(function(){return p})),e.d(n,"counties_snap",(function(){return u}));var o='\n  <option selected="selected">Choose a county...</option>\n  <option value="Maryland.html" >Maryland</option>\n  <option value="AlleganyCounty.html" >Allegany</option>\n  <option value="AnneArundelCounty.html">Anne Arundel</option>\n  <option value="BaltimoreCity.html">Baltimore City</option>\n  <option value="BaltimoreCounty.html">Baltimore County</option>\n  <option value="CalvertCounty.html">Calvert County</option>\n  <option value="CarolineCounty.html">Caroline County</option>\n  <option value="CarrollCounty.html">Carroll County</option>\n  <option value="CecilCounty.html">Cecil County</option>\n  <option value="CharlesCounty.html">Charles County</option>\n  <option value="DorchesterCounty.html">Dorchester County</option>\n  <option value="FrederickCounty.html">Frederick County</option>\n  <option value="GarrettCounty.html">Garrett County</option>\n  <option value="HarfordCounty.html">Harford County</option>\n  <option value="HowardCounty.html">Howard County</option>\n  <option value="KentCounty.html">Kent County</option>\n  <option value="MontgomeryCounty.html">Montgomery County</option>\n  <option value="PrinceGeorgesCounty.html">Prince George\'s County</option>\n  <option value="QueenAnnesCounty.html">Queen Anne\'s</option>\n  <option value="SomersetCounty.html">Somerset</option>\n  <option value="StMarysCounty.html">St Mary\'s County</option>\n  <option value="TalbotCounty.html">Talbot County</option>\n  <option value="WashingtonCounty.html">Washington County</option>\n  <option value="WicomicoCounty.html">Wicomico County</option>\n  <option value="WorcesterCounty.html">Worcester County</option>\n';function i(t){return'\n<div class="dropdown"> <button class="button" disabled data-lbl="pop">Population and Median Household Income</button> </div>\n<div class="dropdown">\n  <button class="button" style="padding-left: 16%; padding-right: 16%">Demographics and Employment</button>\n  <div class="dropdown-content">\n\t<button class="button" disabled data-lbl="empl_edu_gend">Education and Gender</button>\n\t<button class="button" disabled data-lbl="empl_race_ethn">Race and Ethnicity</button>\n\t<button class="button" disabled data-lbl="empl_vet" style="padding-left: 14%; padding-right: 12%">Veteran Status</button>\n  </div>\n</div>\n<div class="dropdown"> <button class="button" disabled data-lbl="disabl_pov">Disability and Poverty</button> </div>\n<div class="dropdown"> <button class="button" disabled data-lbl="tanf">TANF</button> </div>\n'.concat(emplStatusCounties.includes(t)?"":'<div class="dropdown"> <button class="button" disabled data-lbl="empl_status">Employment Status</button> </div>','\n<div class="dropdown"> <button class="button" disabled data-lbl="snap" >SNAP</button> </div>\n')}var a='\n  <div id="pop" style="display: none;">\n    <div class="ChartDiv">\n      <div id="pop_chart" class="show">\n        <script src="../js/stateD3.js"><\/script>\n      </div>\n    </div>\n    <div class="print">\n      <div id="pop_chart_print">\n      </div>\n    </div>\n    <div class="Table">\n      <table id="pop_table">\n      </table>\n    <div class="Footer">\n      <div class="FootLeft">\n        <p>Source: American Community Survey 5-Year Estimates (Date Last Accessed: May 01, 2020)</p>\n      </div>\n    </div>\n    </div>\n  </div>\n  ',d='\n  <div id="empl_edu_gend" style="display: none">\n    <div class="ChartDiv">\n      <div id="empl_edu_gend_chart" class="show">\n        <p></p>\n      </div>\n      <div class="print">\n        <div id="empl_edu_gend_chart_print">\n        </div>\n      </div>\n    </div>\n    <div class="Table">\n      <table id ="empl_edu_gend_table">\n      </table>\n    <div class="Footer">\n      <p>Note: NIL are individuals who are not in the labor force; this includes retirees and others who are not looking for work </p>\n      <p>Source: American Community Survey 5-Year Estimates (Date Last Accessed: May 01, 2020)</p>\n      <p>"S" Represents suppressed counts that are less than 3.</p>\n    </div>\n    </div>\n  </div>\n  ',s='\n  <div id="empl_race_ethn" style="display: none">\n    <div class="ChartDiv">\n      <div id="empl_race_ethn_chart" class="show">\n      </div>\n      <div class="print">\n        <div id="empl_race_ethn_chart_print">\n        </div>\n      </div>\n    </div>\n    <div class="Table">\n      <table id="empl_race_ethn_table">\n      </table>\n    <div class="Footer">\n      <p>Source: American Community Survey 5-Year Estimates (Date Last Accessed: May 01, 2020)</p>\n      <p>"S" Represents suppressed counts that are less than 3.</p>\n    </div>\n    </div>\n  </div>\n  ',l='\n  <div id="empl_vet" style="display: none">\n    <div class="ChartDiv">\n      <div id="empl_vet_chart" class="show">\n      </div>\n      <div class="print">\n        <div id="empl_vet_chart_print">\n        </div>\n      </div>\n    </div>\n    <div class="Table">\n      <table id="empl_vet_table">\n      </table>\n      <div class="Footer">\n        <p>Source: American Community Survey 5-Year Estimates (Date Last Accessed: May 01, 2020)</p>\n        <p>"S" Represents suppressed counts that are less than 3.</p>\n      </div>\n    </div>\n  </div>\n  ',r='\n  <div id="disabl_pov" style="display: none">\n    <div class="ChartDiv">\n      <div id="disabl_pov_chart" class="show">\n      </div>\n      <div class="print">\n        <div id="disabl_pov_chart_print">\n        </div>\n      </div>\n    </div>\n    <div class="Table">\n      <table id ="disabl_pov_table">\n      </table>\n      <div class="Footer">\n        <div class="FootLeft">\n          <p>Source: American Community Survey <span id=\'acsyearagg\'>1</span>-Year Estimates (Date Last Accessed: May 01, 2020)</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  ',c='\n  <div id="tanf" style="display: none">\n    <div class="ChartDiv">\n      <div id="tanf_chart" class="show">\n      </div>\n      <div class="print">\n        <div id="tanf_chart_print">\n        </div>\n      </div>\n    </div>\n    <div class="Table">\n      <table id="tanf_table">\n        <tfoot>\n          <tr>\n            <td  colspan="4">Service participants means Individuals who received TANF benefits.</td>\n          </tr>\n        </tfoot>\n      </table>\n      <div class="Footer">\n        <div class="FootLeft">\n          <p>Source: Administrative Data from Temporary Assistance to Needy Families (TANF) and MD Wage Records (Date Last Accessed: May 01, 2020)</p>\n          <p>"S" Represents suppressed counts that are less than 3.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  ',p='\n  <div id="empl_status" style="display: none;" >\n    <div class="ChartTitle">\n      <div style="float: right">\n        <p style="display: inline;"> Select Indicator: </p>\n        <select id="emplStatus_categ_dd">\n          <option>Gender</option>\n          <option>Race</option>\n          <option>Education</option>\n          <option>Poverty</option>\n        </select>\n      </div>\n    </div>\n    <div class="ChartDiv">\n      <div id="empl_status_chart" class="show">\n      </div>\n      <div class="print">\n        <div id="empl_status_chart_print">\n        </div>\n      </div>\n    </div>\n    <div class="Table">\n      <table id="empl_status_table">\n        <tr class="HeadRow"> </tr>\n      </table>\n      <div class="Footer">\n        <div class="FootLeft">\n          <p>The Workforce Services data is available from July 2016 to June 2017</p>\n          <p>Source: ACS and Microdata, accessed 4/15/2019</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  ',u='\n  <div id="snap" style="display: none;" >\n    <div class="ChartDiv">\n      <div id="snap_chart" class="show">\n      </div>\n      <div class="print">\n        <div id="snap_chart_print">\n        </div>\n      </div>\n    </div>\n    <div class="Table">\n      <table id="snap_table">\n      </table>\n      <div class="Footer">\n        <div class="FootLeft">\n          <p>SNAP data is available from January 2016 to October 2016. </p>\n          <p>Source: Jacob France Institute, accessed 4/15/2019</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  '}});