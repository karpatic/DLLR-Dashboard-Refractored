!function(t){function n(n){for(var o,d,l=n[0],s=n[1],r=n[2],c=0,v=[];c<l.length;c++)d=l[c],Object.prototype.hasOwnProperty.call(i,d)&&i[d]&&v.push(i[d][0]),i[d]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);for(p&&p(n);v.length;)v.shift()();return a.push.apply(a,r||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],o=!0,l=1;l<e.length;l++){var s=e[l];0!==i[s]&&(o=!1)}o&&(a.splice(n--,1),t=d(d.s=e[0]))}return t}var o={},i={5:0},a=[];function d(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,d),e.l=!0,e.exports}d.e=function(t){var n=[],e=i[t];if(0!==e)if(e)n.push(e[2]);else{var o=new Promise((function(n,o){e=i[t]=[n,o]}));n.push(e[2]=o);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=function(t){return d.p+""+({3:"MD-counties"}[t]||t)+".087476ff88284eb43208.js"}(t);var s=new Error;a=function(n){l.onerror=l.onload=null,clearTimeout(r);var e=i[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,e[1](s)}i[t]=void 0}};var r=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(n)},d.m=t,d.c=o,d.d=function(t,n,e){d.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},d.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,n){if(1&n&&(t=d(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(d.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)d.d(e,o,function(n){return t[n]}.bind(null,o));return e},d.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return d.d(n,"a",n),n},d.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},d.p="",d.oe=function(t){throw console.error(t),t};var l=this.webpackJsonp=this.webpackJsonp||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var r=0;r<l.length;r++)n(l[r]);var p=s;a.push([19,7]),e()}({19:function(t,n,e){"use strict";e.r(n);var o=e(2),i=e.n(o),a=e(3),d=e.n(a),l=(e(20),e(4));d()(i.a.mark((function t(){var n,o,a,d,s,r,p,c,v,u,b,y,h,m,g,C,f,w,A,T,D,S,_,L,N,P,F,W,M,Q,x,E,k,I,H,j,G,O,B;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=window.location.search,window.emplStatusCounties=["Maryland","Worcester County","Wicomico County","Talbot County","St. Mary's County","Queen Anne's County","Kent County","Garrett County","Dorchester County","Allegany County","Caroline County","Calvert County"],console.log("location_search.replace('?county=','').replace('.html','').replace(/([A-Z])/g, ' $1').trim()",n),window.CountyName=n.replace("?county=","").replace(".html","").replace(/([A-Z])/g," $1").trim(),o='\n\t  <option selected="selected">Choose a county...</option>\n\t  <option value="Maryland.html" >Maryland</option>\n\t  <option value="AlleganyCounty.html" >Allegany</option>\n\t  <option value="AnneArundelCounty.html">Anne Arundel</option>\n\t  <option value="BaltimoreCity.html">Baltimore City</option>\n\t  <option value="BaltimoreCounty.html">Baltimore County</option>\n\t  <option value="CalvertCounty.html">Calvert County</option>\n\t  <option value="CarolineCounty.html">Caroline County</option>\n\t  <option value="CarrollCounty.html">Carroll County</option>\n\t  <option value="CecilCounty.html">Cecil County</option>\n\t  <option value="CharlesCounty.html">Charles County</option>\n\t  <option value="DorchesterCounty.html">Dorchester County</option>\n\t  <option value="FrederickCounty.html">Frederick County</option>\n\t  <option value="GarrettCounty.html">Garrett County</option>\n\t  <option value="HarfordCounty.html">Harford County</option>\n\t  <option value="HowardCounty.html">Howard County</option>\n\t  <option value="KentCounty.html">Kent County</option>\n\t  <option value="MontgomeryCounty.html">Montgomery County</option>\n\t  <option value="PrinceGeorgesCounty.html">Prince George\'s County</option>\n\t  <option value="QueenAnnesCounty.html">Queen Anne\'s</option>\n\t  <option value="SomersetCounty.html">Somerset</option>\n\t  <option value="StMarysCounty.html">St Mary\'s County</option>\n\t  <option value="TalbotCounty.html">Talbot County</option>\n\t  <option value="WashingtonCounty.html">Washington County</option>\n\t  <option value="WicomicoCounty.html">Wicomico County</option>\n\t  <option value="WorcesterCounty.html">Worcester County</option>\n    ',a=' \n      <option selected="selected">Or A Local Workforce Development Area (LWDA)...</option>\n\t  <option value="AnneArundelLWDA.html">Anne Arundel LWDA</option>\n\t  <option value="BaltimoreCityLWDA.html">Baltimore City LWDA</option>\n\t  <option value="BaltimoreCountyLWDA.html">Baltimore County LWDA</option>\n\t  <option value="FrederickLWDA.html">Frederick County LWDA</option>\n\t  <option value="LowerShoreLWDA.html">Lower Shore LWDA</option>\n\t  <option value="MidMarylandLWDA.html">Mid Maryland LWDA</option>\n\t  <option value="MontgomeryLWDA.html">Montgomery LWDA</option>\n\t  <option value="PrinceGeorgesLWDA.html">Prince George\'s LWDA</option>\n\t  <option value="SouthernMarylandLWDA.html">Southern Maryland LWDA</option>\n\t  <option value="SusquehannaLWDA.html">Susquehanna LWDA</option>\n\t  <option value="UpperShoreLWDA.html">Upper Shore LWDA</option>\n\t  <option value="WesternMarylandLWDA.html">Western Maryland LWDA</option>\n\t  <option value="Maryland.html" >Maryland</option>\n\t',d=' \n    <div class="dropdown"> <button class="button" disabled data-lbl="pop">Population and Median Household Income</button> </div>\n    <div class="dropdown">\n      <button class="button" style="padding-left: 16%; padding-right: 16%">Demographics and Employment</button>\n      <div class="dropdown-content">\n        <button class="button" disabled data-lbl="empl_edu_gend">Education and Gender</button>\n        <button class="button" disabled data-lbl="empl_race_ethn">Race and Ethnicity</button>\n        <button class="button" disabled data-lbl="empl_vet" style="padding-left: 14%; padding-right: 12%">Veteran Status</button>\n      </div>\n    </div>\n    <div class="dropdown"> <button class="button" disabled data-lbl="disabl_pov">Disability and Poverty</button> </div>\n    <div class="dropdown"> <button class="button" disabled data-lbl="tanf">TANF</button> </div>\n    '.concat(emplStatusCounties.includes(CountyName)?"":'<div class="dropdown"> <button class="button" disabled data-lbl="empl_status">Employment Status</button> </div>','\n    <div class="dropdown"> <button class="button" disabled data-lbl="snap" >SNAP</button> </div>\n\t'),s='\n    <div class="dropdown"> <button class="button" disabled data-lbl="collapse1" id="button1">Number of Workers <br><br> Average Monthly Earnings</button> </div>\n    <div class="dropdown"> <button class="button" disabled data-lbl="collapse2" style="padding-left: 15%; padding-right: 12.5%">New Hires <br><br>Job Net Changes</button> </div>\n    <div class="dropdown"> <button class="button" disabled data-lbl="collapse3" style="padding-left: 17%; padding-right: 17%">Turnover Rate</button> </div>\n    <div class="dropdown"> <button class="button" disabled data-lbl="collapse4" style="padding-left: 15%; padding-right: 1%;">Industry Metrics</button> </div>\n    <div class="dropdown"> <button class="button" disabled data-lbl="collapse15" style="padding-left: 20%; padding-right: 20%">Separations</button> </div>\n  ',r='\n    <div class="dropdown"> <button class="button" disabled data-lbl="pop">Population and Median Household Income</button> </div>\n    <div class="dropdown">\n      <button class="button" disabled style="padding-left: 16%; padding-right: 16%">Demographics and Employment</button>\n      <div class="dropdown-content">\n        <button class="button" disabled data-lbl="empl_edu_gend">Gender</button>\n        <button class="button" disabled data-lbl="empl_race_ethn">Race and Ethnicity</button>\n        <button class="button" disabled data-lbl="empl_vet" style="padding-left: 14%; padding-right: 12%">Veteran Status</button>\n      </div>\n    </div>\n    <div class="dropdown"> <button class="button" disabled data-lbl="disabl_pov">Disability and Poverty</button> </div>\n    <div class="dropdown"> <button class="button" disabled data-lbl="tanf">TANF</button> </div>\n    <div class="dropdown">\n      <button class="button" disabled style="padding-left: 1%; padding-right: 1%" data-lbl="collapse9">Apprenticeship Completers</button>\n    </div>\n    <div class="dropdown"> <button class="button" disabled data-lbl="collapse1" id="button1">Number of Workers <br><br> Average Monthly Earnings</button> </div>\n    <div class="dropdown"> <button class="button" disabled data-lbl="collapse2" style="padding-left: 15%; padding-right: 12.5%">New Hires <br><br>Job Net Changes</button> </div>\n    <div class="dropdown"> <button class="button" disabled data-lbl="collapse3" style="padding-left: 17%; padding-right: 17%">Turnover Rate</button> </div>\n    <div class="dropdown"> <button class="button" disabled data-lbl="collapse4" style="padding-left: 15%; padding-right: 1%;">Industry Metrics</button> </div>\n    <div class="dropdown"> <button class="button" disabled data-lbl="collapse15" style="padding-left: 20%; padding-right: 20%">Separations</button> </div>\n    <div class="dropdown">    \n      <button class="button" disabled data-lbl="collapse16" style="padding-left: 20%; padding-right: 20%">New Apprentice Programs</button>\n    </div>\n    <div class="dropdown">    \n      <button class="button" disabled data-lbl="collapse17" style="padding-left: 20%; padding-right: 20%">New/Active Apprentices</button>\n    </div>\n    <div class="dropdown">\n      <button class="button" disabled data-lbl="collapse20" style="padding-left: 2%; padding-right: 5%">Long Term Unemployed</button>\n    </div>\n    <div class="dropdown"> <button class="button" disabled data-lbl="snap" >SNAP</button> </div>\n    <div class="dropdown">\n\t  <button class="button" disabled style="padding-left: 2%; padding-right: 5%" data-lbl="collapse19">Service Partcipants in SNAP</button>\n    </div>\n  ',p="\n  <style>\n\t.picDiv {\n\t\twidth: 600px;\n\t\theight: 600px;\n\t\toverflow: hidden;\n\t\tmargin-left: 20%;\n\t}\n\t.picDiv img {\n\t\twidth: 325%;\n\t\theight: 325%;\n\t\tmargin: -110% 0 0 -108.5%;\n\t}\n  </style>\n  ",c='\n  <div id="pop" style="display: none;">\n    <div class="ChartTitle">\n      <p>Population and Median Household Income</p>\n    </div>\n    <div class="ChartDiv">\n      <div id="pop_chart" class="show">\n        <script src="../js/stateD3.js"><\/script>\n      </div>\n    </div>\n    <div class="print">\n      <div id="pop_chart_print">\n      </div>\n    </div>\n    <div class="Table">\n      <table id="pop_table">\n      </table>\n    </div>\n    <div class="Footer">\n      <div class="FootRight">\n      </div>\n      <div class="FootLeft">\n        <p>Source: American Community Survey 5-Year Estimates (Date Last Accessed: Today)</p>\n      </div>\n    </div>\n  </div>\n  ',v='\n  <div id="empl_edu_gend" style="display: none">\n    <div class="ChartTitle">\n      <div class="buttons">\n        <p>\n          <button type="button" id="btn5county">Toggle Labels</button>\n          Employment Status: \n          <select id="btn3county">\n            <option>Pick a Time Period</option>\n            <option>2015</option>\n            <option>2016</option>\n            <option>2017</option>\n          </select>\n        </p>\n      </div>\n      <p>Demographics</p>\n    </div>\n    <div class="ChartDiv">\n      <div id="empl_edu_gend_chart" class="show">\n        <p></p>\n      </div>\n      <div class="print">\n        <div id="empl_edu_gend_chart_print">\n        </div>\n      </div>\n    </div>\n    <div class="Table">\n      <table id ="empl_edu_gend_table">\n      </table>\n    </div>\n    <div class="Footer">\n      <p>Note: NIL are individuals who are not in the labor force; this includes retirees and others who are not looking for work </p>\n      <p>Source: American Community Survey 5-Year Estimates (Date Last Accessed: Today)</p>\n    </div>\n  </div>\n  ',u='\n  <div id="empl_race_ethn" style="display: none">\n    <div class="ChartTitle">\n      <div class="buttons">\n        <p>\n          Employment Status: \n          <select id="btn31county">\n            <option>Pick a Time Period</option>\n            <option>2015</option>\n            <option>2016</option>\n            <option>2017</option>\n          </select>\n        </p>\n      </div>\n      <p>Demographics</p>\n    </div>\n    <div class="ChartDiv">\n      <div id="empl_race_ethn_chart" class="show">\n      </div>\n      <div class="print">\n        <div id="empl_race_ethn_chart_print">\n        </div>\n      </div>\n    </div>\n    <div class="Table">\n      <table id="empl_race_ethn_table">\n      </table>\n    </div>\n    <div class="Footer">\n      <p>Source: American Community Survey 5-Year Estimates (Date Last Accessed: Today)</p>\n    </div>\n  </div>\n  ',b='\n  <div id="empl_vet" style="display: none">\n    <div class="ChartTitle">\n      <div class="buttons">\n        <p>\n          Employment Status: \n          <select id="btn32county">\n            <option>Pick a Time Period</option>\n            <option>2015</option>\n            <option>2016</option>\n            <option>2017</option>\n          </select>\n        </p>\n      </div>\n      <p>Demographics</p>\n    </div>\n    <div class="ChartDiv">\n      <div id="empl_vet_chart" class="show">\n      </div>\n      <div class="print">\n        <div id="empl_vet_chart_print">\n        </div>\n      </div>\n    </div>\n    <div class="Table">\n      <table id="empl_vet_table">\n      </table>\n    </div>\n    <div class="Footer">\n      <p>Source: American Community Survey 5-Year Estimates (Date Last Accessed: Today)</p>\n    </div>\n  </div>\n  ',y='\n  <div id="disabl_pov" style="display: none">\n    <div class="ChartTitle">\n      <div class="buttons">\n        <p>\n          Select Time Period: \n          <select id="btn9county">\n            <option>Pick a Time Period</option>\n            <option>2015</option>\n            <option>2016</option>\n            <option>2017</option>\n          </select>\n        </p>\n      </div>\n      <p>Disability and Poverty</p>\n    </div>\n    <div class="ChartDiv">\n      <div id="disabl_pov_chart" class="show">\n      </div>\n      <div class="print">\n        <div id="disabl_pov_chart_print">\n        </div>\n      </div>\n    </div>\n    <div class="Table">\n      <table id ="disabl_pov_table">\n      </table>\n    </div>\n    <div class="Footer">\n      <div class="FootLeft">\n        <p>Source: American Community Survey 5-Year Estimates (Date Last Accessed: Today)</p>\n      </div>\n    </div>\n  </div>\n  ',h='\n  <div id="tanf" style="display: none">\n    <div class="ChartTitle">\n      <div class="buttons">\n        <p>\n          TANF Workers: \n          <select id="btn8county">\n            <option>Pick a Time Period</option>\n            <option>All</option>\n            <option>2015Q3-2016Q2</option>\n            <option>2016Q3-2017Q2</option>\n          </select>\n        </p>\n      </div>\n      <p>Temporary Aid for Needy Families (TANF) Stats</p>\n    </div>\n    <div class="ChartDiv">\n      <div id="tanf_chart" class="show">\n      </div>\n      <div class="print">\n        <div id="tanf_chart_print">\n        </div>\n      </div>\n    </div>\n    <div class="Table">\n      <table id="tanf_table">\n        <tfoot>\n          <tr>\n            <td  colspan="4">Service participants means Individuals who received TANF benefits.</td>\n          </tr>\n        </tfoot>\n      </table>\n    </div>\n    <div class="Footer">\n      <div class="FootLeft">\n        <p>Source: Administrative Data from Temporary Assistance to Needy Families (TANF) and MD Wage Records (Date Last Accessed: 2/28/18)</p>\n      </div>\n    </div>\n  </div>\n  ',m='\n  <div id="empl_status" style="display: none;" >\n    <div class="ChartTitle">\n      <div class="buttons">\n        <p>\n          Select Time Period: \n          <select id="btn10county">\n            <option>2015</option>\n            <option>2016</option>\n            <option>2017</option>\n          </select>\n        </p>\n        <p>\n          Select Indicator: \n          <select id="btn11county">\n            <option>Gender</option>\n            <option>Race</option>\n            <option>Education</option>\n            <option>Poverty</option>\n          </select>\n        </p>\n      </div>\n      <p>Employment Status amongst Maryland Workers</p>\n    </div>\n    <div class="ChartDiv">\n      <div id="empl_status_chart" class="show">\n      </div>\n      <div class="print">\n        <div id="empl_status_chart_print">\n        </div>\n      </div>\n    </div>\n    <div class="Table">\n      <table id="empl_status_table">\n        <tr class="HeadRow"> </tr>\n      </table>\n      <div class="Footer">\n        <div class="FootLeft">\n          <p>The Workforce Services data is available from July 2016 to June 2017</p>\n          <p>Source: ACS and Microdata, accessed 4/15/2019</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  ',g='\n  <div id="snap" style="display: none;" >\n    <div class="ChartTitle">\n      <p>SNAP Recipient Workers</p>\n    </div>\n    <div class="ChartDiv">\n      <div id="snap_chart" class="show">\n      </div>\n      <div class="print">\n        <div id="snap_chart_print">\n        </div>\n      </div>\n    </div>\n    <div class="Table">\n      <table id="snap_table">\n        <tr class="HeadRow">\n\t    <th>SNAP Recipient Workers</th>\n\t    <th></th>\n\t    <th>2016</th>\n\t    <th>2017</th>\n\t    <th>2018</th>\n      </table>\n      <div class="Footer">\n        <div class="FootLeft">\n          <p>SNAP data is available from January 2016 to October 2016. </p>\n          <p>Source: Jacob France Institute, accessed 4/15/2019</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  ',C='\n<div id="collapse1" style="display: none;">\n  <div class="ChartTitle">\n\t<div class="buttons">\n\t  <p>\n\t\tTime: \n\t\t<select id="btn3wda">\n\t\t  <option>2016-Q1</option>\n\t\t  <option>2016-Q2</option>\n\t\t  <option>2016-Q3</option>\n\t\t  <option>2016-Q4</option>\n\t\t  <option>2017-Q1</option>\n\t\t  <option>2017-Q2</option>\n\t\t  <option>2017-Q3</option>\n\t\t  <option selected="selected">2017-Q4</option>\n\t\t</select>\n\t  </p>\n\t  <p>\n\t\tIndicator: \n\t\t<select id="btn31wda">\n\t\t  <option>By Age</option>\n\t\t  <option>By Gender</option>\n\t\t</select>\n\t  </p>\n\t</div>\n\t<p>Number of Workers and Average Monthly Earnings by Age and Gender</p>\n  </div>\n  <div class="ChartDiv">\n\t<div id="Chart3">\n\t  <p></p>\n\t</div>\n\t<div id="Print3" class="print"></div>\n  </div>\n  <div class="Table">\n\t<table id ="table3" style="font-size: 80%">\n\t</table>\n  </div>\n</div>\n',f='<div id="collapse2" style="display: none;">\n  <div class="ChartTitle">\n\t<div class="buttons">\n\t  <p>\n\t\tTime: \n\t\t<select id="btn4wda">\n\t\t  <option>2016-Q1</option>\n\t\t  <option>2016-Q2</option>\n\t\t  <option>2016-Q3</option>\n\t\t  <option>2016-Q4</option>\n\t\t  <option>2017-Q1</option>\n\t\t  <option>2017-Q2</option>\n\t\t  <option>2017-Q3</option>\n\t\t  <option selected="selected">2017-Q4</option>\n\t\t</select>\n\t  </p>\n\t  <p>\n\t\tIndicator: \n\t\t<select id="btn41wda">\n\t\t  <option>By Education</option>\n\t\t  <option>By Gender</option>\n\t\t</select>\n\t  </p>\n\t</div>\n\t<p>New Hires and Job Net Changes by Education and Gender</p>\n  </div>\n  <div class="ChartDiv">\n\t<div id="Chart4">\n\t</div>\n\t<div id="Print4" class="print"></div>\n  </div>\n  <div class="Table">\n\t<table id="table4">\n\t</table>\n  </div>\n  <div class="Footer" >\n\t<p>New Hires and Job Net Change since previous quarter.</p>\n\t<p class="FootLeft" style="text-align: center;">New Hires: Estimated number of workers who started a new job.  More specifically, total hires that, while they worked for an employer in the specified quarter, were not employed by that employer in any of the previous four quarters. </p>\n\t<p class="FootLeft" style="text-align: center;">Job Net Change: Difference between firm job gain and firm job loss.</p>\n  </div>\n</div>\n',w='\n<div id="collapse3" style="display: none;">\n  <div class="ChartTitle">\n\t<div class="buttons">\n\t  <p>\n\t\tTime: \n\t\t<select id="btn5wda">\n\t\t  <option>2016-Q1</option>\n\t\t  <option>2016-Q2</option>\n\t\t  <option>2016-Q3</option>\n\t\t  <option>2016-Q4</option>\n\t\t  <option>2017-Q1</option>\n\t\t  <option>2017-Q2</option>\n\t\t  <option selected="selected">2017-Q3</option>\n\t\t</select>\n\t  </p>\n\t  <p>\n\t\tIndicator: \n\t\t<select id="btn51wda">\n\t\t  <option>By Education</option>\n\t\t  <option>By Gender</option>\n\t\t</select>\n\t  </p>\n\t</div>\n\t<p>Turnover Rate by Gender and Education</p>\n  </div>\n  <div class="ChartDiv">\n\t<div id="ChartFive">\n\t</div>\n\t<div id="PrintFive" class="print"></div>\n\t<div class="Table">\n\t  <table id="table5">\n\t  </table>\n\t</div>\n\t<div class="Footer" >\n\t  <p>Job Turnover Rate in previous quarter.</p>\n\t  <p class="FootLeft" style="text-align: center;">Turnover Rate: The rate at which stable jobs begin and end. It is calculated by summing the number of stable hires in the reference quarter and stable separations in the next quarter, and dividing by the average full-quarter employment.</p>\n\t</div>\n  </div>\n</div>\n',A='\n<div id="collapse4" style="display: none;">\n  <div class="ChartTitle">\n\t<div class="buttons">\n\t  <button type="button" id="btn6wda">Toggle Labels</button>\n\t  <p>\n\t\tTime Period:\n\t\t<select id="btn7wda">\n\t\t  <option>2016-Q1</option>\n\t\t  <option>2016-Q2</option>\n\t\t  <option>2016-Q3</option>\n\t\t  <option>2016-Q4</option>\n\t\t  <option>2017-Q1</option>\n\t\t  <option>2017-Q2</option>\n\t\t  <option>2017-Q3</option>\n\t\t  <option selected="selected">2017-Q4</option>\n\t\t</select>\n\t  </p>\n\t  <p>\n\t\tIndicator:\n\t\t<select id="btn10wda">\n\t\t  '.concat("Maryland"==CountyName?"":"<option>Average Monthly Earnings</option>",'\n\t\t  <option>Job Net Changes</option>\n\t\t  <option>New Hires</option>\n\t\t  <option>Turnover Rate</option>\n\t\t  <option selected="selected">Workers</option>\n\t\t</select>\n\t  </p>\n\t</div>\n\t<p>Data by Industry</p>\n  </div>\n  <div class="ChartDiv">\n\t<div id="Chart6"></div>\n\t<div id="Print6" class="print"></div>\n\t<style>\n\t  #table6 > tbody > tr > td { text-align:right !important }\n\t</style>\n\t<div id="Table">\n\t  <table id="table6" >\n\n\t  </table>\n\t</div>\n\t<div class="Footer" >\n\t  <p class="FootLeft" style="text-align: center;">New Hires: Estimated number of workers who started a new job.  More specifically, total hires that, while they worked for an employer in the specified quarter, were not employed by that employer in any of the previous four quarters. </p>\n\t  <p class="FootLeft" style="text-align: center;">Job Net Change: Difference between firm job gain and firm job loss.</p>\n\t  <p class="FootLeft" style="text-align: center;">Turnover Rate: The rate at which stable jobs begin and end. It is calculated by summing the number of stable hires in the reference quarter and stable separations in the next quarter, and dividing by the average full-quarter employment.</p>\n\t</div>\n  </div>\n</div>\n'),T='\n<div id="collapse15" style="display:none;">\n  <div class="ChartTitle">\n\t<div class="buttons">\n\t  <p>\n\t\tTime Period:\n\t\t<select id="btn18wda">\n\t\t  <option>2016-Q1</option>\n\t\t  <option>2016-Q2</option>\n\t\t  <option>2016-Q3</option>\n\t\t  <option>2016-Q4</option>\n\t\t  <option>2017-Q1</option>\n\t\t  <option>2017-Q2</option>\n\t\t  <option>2017-Q3</option>\n\t\t  <option selected="selected">2017-Q4</option>\n\t\t</select>\n\t  </p>\n\t  <p>\n\t\tIndicator:\n\t\t<select id="btn102wda">\n\t\t  <option selected="selected">Industry</option>\n\t\t  <option>Gender</option>\n\t\t  <option>Education</option>\n\t\t  <option>Age</option>\n\t\t</select>\n\t  </p>\n\t</div>\n\t<p>Separations</p>\n  </div>\n  <div class="ChartDiv">\n\t<div id="Chart17">\n\t</div>\n\t<div id="Print17" class="print"></div>\n  </div>\n  <div class="Table">\n\t<table id="table15">\n\t</table>\n  </div>\n  <div class="Footer">\n\t<p class="FootLeft" style="text-align: center;">Estimated number of workers whose job with a given employer ended in the specified quarter.</p>\n  </div>\n</div>\n',D='\n<div class="Footer" id="collapse5" style="display: none;">\n  <p class="FootLeft" style="text-align: center;">Source: U.S.Census Bureau, Center for Economic Studies, LEHD. </p>\n  <p class="FootLeft" style="text-align: center;">The table shows the latest data available for the indicator as of Today.</p>\n</div>\n',S='\n<div id="collapse9" style="display: none;">\n  <div class="ChartTitle">\n\t  <p>Apprenticeship Completers</p>\n  </div>\n  <div class="ChartDiv">\n    <div id="Chart11"></div>\n    <div id="Print11" class="print"></div>\n  </div>\n  <div class="Table">\n    <table id="table11"></table>\n  </div>\n  <div class="Footer">\n    <div class="FootLeft">\n      <p>Source: United States Department of Labor (Date Last Accessed: Today)</p>\n      <p>Note: FY is the U.S. government’s fiscal year, which ends on September 20 of the indicated year.  For example, FY19 is the fiscal year running from October 1, 2018 to September 30, 2019.</p>\n    </div>\n  </div>\n</div>\n',_='\n<div id="collapse16" style="display:none;">\n  <div class="ChartTitle">\n    <p>New Apprentice Programs</p>\n  </div>\n  <div class="ChartDiv">\n    <div id="Chart18"> </div>\n    <div id="Print18" class="print"></div>\n  </div>\n  <div class="Table">\n    <table id="table55"></table>\n  </div>\n  <div id="scrollTable">\n    <div class="Footer">\n      <p class="FootLeft">Service participants means individuals who received SNAP benefits</p>\n    </div>\n  </div>\n</div>\n',L='\n<div id="collapse17" style="display:none;">\n  <div class="ChartTitle">\n    <p>New/Active Apprentice Programs</p>\n  </div>\n  <div class="ChartDiv">\n    <div id="Chart19"></div>\n    <div id="Print19" class="print"></div>\n  </div>\n  <div class="Table">\n    <table id="table19"></table>\n  </div>\n</div>\n<div class="Footer" id="collapse14" style="display: none;">\n  <p style="text-align:center; margin-left: 5%">Source: U.S.Census Bureau, Center for Economic Studies, LEHD. </p>\n</div>\n',N='\n<div id="collapse20" style="display: none;">\n  <div class="ChartTitle">\n    <p>Long Term Unemployed</p>\n  </div>\n  <div id="Chart20">\n    <p></p>\n  </div>\n  <div id="Print20" class="print"></div>\n  <div class="Table">\n    <table id="table20"></table>\n  </div>\n  <div class="Footer">\n    <div class="FootLeft">\n      <p>Source: Current Population Survey, Latest Data Available as of Summer 2019 is 2015</p>\n    </div>\n  </div>\n</div>\n',P='\n<div id="collapse19" style="display: none">\n  <div class="ChartTitle">\n    <p>Service Participants in SNAP</p>\n  </div>\n  <div class="ChartDiv">\n    <div id="Chart21" class="show"></div>\n    <div class="print">\n      <div id="Print21"></div>\n    </div>\n  </div>\n  <div class="Table">\n    <table id="table155"></table>\n    <div class="Footer">\n      <div class="FootLeft">\n        <p>SNAP (Supplemental Nutrition Assistance Program) is available available from January 2014 to October 2016. </p>\n      </div>\n      <div class="FootLeft">\n        <p>Source: Jacob France Institute, accessed 4/15/2019</p>\n      </div>\n    </div>\n  </div>\n</div>\n',n){t.next=43;break}return console.log("HOMEPAGE"),t.next=33,e.e(3).then(e.t.bind(null,22,3));case 33:F=t.sent,W=F.default,M='\n        <div class="Title">\n\t\t\t<p>Welcome to the Maryland Area Explorer! (Last Updated 5/27/19)</p>\n        </div>\n        <div class="Body">\n\t\t\t<p>The Maryland Area Explorer turns complex labor market information data into easy-to-understand charts and graphs. To get started, select a county from the dropdown menus or from the map below.</p>\n\t\t</div>\n    \n    <div id="tooltip"></div>\x3c!-- div to hold tooltip. --\x3e\n\t\t<div id="mapDrop">\n\t\t\t<select onChange="window.location.href = \'?county=\' + this.value"> '.concat(o," </select>\n\t\t\t<select onChange=\"window.location.href = '?county=' + this.value\"> ").concat(a,' </select>\n\t\t</div> <div id="map"> </div>\t'),document.querySelector("#body").innerHTML=M,window.arrCounties=[],Q=l.geoMercator().scale(4500).translate([6275,3300]),x=l.geoPath().projection(Q),"100%","550",l.select("#map").append("svg").attr("width","100%").attr("height","550").attr("viewBox","0 0 400 1").attr("id","md-svg").append("g").attr("id","counties").selectAll("path").data(W.features).enter().append("path").attr("class","md-county").attr("onClick","window.location.href = '?county=' + (arrCounties[this.attributes.cid.value].properties.GEODESC).replace(/[ ]/g,'').replace(/[']/g,'') + '.html'").attr("d",x).attr("cid",(function(t){return arrCounties.push(t),arrCounties.length-1}));case 43:E="",k="\n\t".concat(C,"\n\t").concat(f,"\n\t").concat(w,"\n\t").concat(A,"\n\t").concat(T,"\n\t").concat(D,"\n"),I="\n\t".concat(c,"\n\t").concat(v,"\n\t").concat(u,"\n\t").concat(b,"\n\t").concat(y,"\n\t").concat(h,"\n\t").concat(m,"\n\t").concat(g,"\n"),H="\n\t".concat(S,"\n\t").concat(_,"\n\t").concat(L,"\n\t").concat(N,"\n\t").concat(P,"\n"),n&&(j="",CountyName.includes("L W D A")?(console.log("LOADING:",CountyName),G=CountyName.replace("L W D A",""),window.CountyName1=G+"WIA -- Maryland Statewide",window.CountyName2=G+"WIA",window.CountyName4=G+" Local Workforce Development Area",window.CountyName5=G+"LWDA",j=s,E=k):"Maryland"==CountyName?(window.CountyName=window.CountyName1=window.CountyName2=window.CountyName4="Maryland",console.log("LOADING Maryland"),j=r,E=I+k+H):(window.CountyName1=CountyName+", MD",window.CountyName2=CountyName+", Maryland",window.CountyName4=CountyName,console.log("LOADING: ",CountyName),j=d,E=I),console.log({CountyName:CountyName,CountyName1:CountyName1,CountyName2:CountyName2,CountyName4:CountyName4}),O='\n  <div class="sidebutton">\n    <select onChange="window.location.href = \'?county=\' + this.value" style="margin: 0px 0px 10px 4px; margin-bottom: 10px; padding-right: 18%;">\n      '.concat(o,'\n    </select>\n    <select onChange="window.location.href = \'?county=\' + this.value" style="margin: 0px 0px 2px 3px; margin-bottom: 10px; padding-right: 0%;">\n      ').concat(a,"\n    </select>\n    ").concat(j,"\n  </div>\n  "),B="\n  ".concat(p,"\n  ").concat(O,'\n  <div id="Wrapper">\n    <div class="content">\n      <div class="Header">\n        <p class="RightText"><a href="../index.html">Start Over</a>    |    <button onclick="printClick()">Print This Snapshot</button>    |      <button onclick="printAll()" > Print Whole Page</button></p>\n        <p>Select Different Snapshot and/or County</p>\n      </div>\n      <div class="County">\n        <p id="title1">').concat(CountyName4,'</p>\n        <p id="Landing">Please select a dashboard from the buttons to the right, or select a different geographic area from the dropdown menus. </p>\n      </div>\n      ').concat(E,"\n    </div>\n  </div>\n  "),document.body.innerHTML+=B,CountyName.includes("L W D A")?Promise.all([e.e(0),e.e(2)]).then(e.bind(null,13)):"Maryland"==CountyName?(Promise.all([e.e(0),e.e(2)]).then(e.bind(null,13)),Promise.all([e.e(0),e.e(1)]).then(e.bind(null,14)),Promise.all([e.e(0),e.e(8)]).then(e.bind(null,23))):Promise.all([e.e(0),e.e(1)]).then(e.bind(null,14))),document.body.innerHTML+="";case 49:case"end":return t.stop()}}),t)})))()},20:function(t,n,e){}});