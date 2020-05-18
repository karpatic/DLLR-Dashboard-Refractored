/*
#File: Index.js
#Author: Charles Karpati
#Date: March 2020
#Section: Bnia
#Email: karpati1@umbc.edu
#Description: Loads the app and inserts it into the div 'start-app'
#Purpose: We have to kickstart the app somehow!
// The script also starts up a service worker and push notifications (I think they may not be working a the moment) 
#input: Nothin
#output: The Application and a Service Worker

*/

import './index.css';
import * as d3 from 'd3'

// import(/*  webpackChunkName: "imported"*/ './imported');
                        
(async () => {  
let location_search = window.location.search //default: ""
window.emplStatusCounties = ["Maryland", "Worcester County", "Wicomico County", "Talbot County", "St. Mary's County", "Queen Anne's County", "Kent County", "Garrett County", "Dorchester County", "Allegany County", "Caroline County", "Calvert County"]
console.log("location_search.replace("?county=","").replace(".html","").replace(/([A-Z])/g, ' $1').trim()", location_search)
window.CountyName = location_search.replace("?county=","").replace(".html","").replace(/([A-Z])/g, ' $1').trim()

    let countySelects = `
	  <option selected="selected">Choose a county...</option>
	  <option value="Maryland.html" >Maryland</option>
	  <option value="AlleganyCounty.html" >Allegany</option>
	  <option value="AnneArundelCounty.html">Anne Arundel</option>
	  <option value="BaltimoreCity.html">Baltimore City</option>
	  <option value="BaltimoreCounty.html">Baltimore County</option>
	  <option value="CalvertCounty.html">Calvert County</option>
	  <option value="CarolineCounty.html">Caroline County</option>
	  <option value="CarrollCounty.html">Carroll County</option>
	  <option value="CecilCounty.html">Cecil County</option>
	  <option value="CharlesCounty.html">Charles County</option>
	  <option value="DorchesterCounty.html">Dorchester County</option>
	  <option value="FrederickCounty.html">Frederick County</option>
	  <option value="GarrettCounty.html">Garrett County</option>
	  <option value="HarfordCounty.html">Harford County</option>
	  <option value="HowardCounty.html">Howard County</option>
	  <option value="KentCounty.html">Kent County</option>
	  <option value="MontgomeryCounty.html">Montgomery County</option>
	  <option value="PrinceGeorgesCounty.html">Prince George's County</option>
	  <option value="QueenAnnesCounty.html">Queen Anne's</option>
	  <option value="SomersetCounty.html">Somerset</option>
	  <option value="StMarysCounty.html">St Mary's County</option>
	  <option value="TalbotCounty.html">Talbot County</option>
	  <option value="WashingtonCounty.html">Washington County</option>
	  <option value="WicomicoCounty.html">Wicomico County</option>
	  <option value="WorcesterCounty.html">Worcester County</option>
    `
    let wdaSelects = ` 
      <option selected="selected">Or A Local Workforce Development Area (LWDA)...</option>
	  <option value="AnneArundelLWDA.html">Anne Arundel LWDA</option>
	  <option value="BaltimoreCityLWDA.html">Baltimore City LWDA</option>
	  <option value="BaltimoreCountyLWDA.html">Baltimore County LWDA</option>
	  <option value="FrederickLWDA.html">Frederick County LWDA</option>
	  <option value="LowerShoreLWDA.html">Lower Shore LWDA</option>
	  <option value="MidMarylandLWDA.html">Mid Maryland LWDA</option>
	  <option value="MontgomeryLWDA.html">Montgomery LWDA</option>
	  <option value="PrinceGeorgesLWDA.html">Prince George's LWDA</option>
	  <option value="SouthernMarylandLWDA.html">Southern Maryland LWDA</option>
	  <option value="SusquehannaLWDA.html">Susquehanna LWDA</option>
	  <option value="UpperShoreLWDA.html">Upper Shore LWDA</option>
	  <option value="WesternMarylandLWDA.html">Western Maryland LWDA</option>
	  <option value="Maryland.html" >Maryland</option>
	`

    let countyDropdowns = ` 
    <div class="dropdown"> <button class="button" disabled data-lbl="pop">Population and Median Household Income</button> </div>
    <div class="dropdown">
      <button class="button" style="padding-left: 16%; padding-right: 16%">Demographics and Employment</button>
      <div class="dropdown-content">
        <button class="button" disabled data-lbl="empl_edu_gend">Education and Gender</button>
        <button class="button" disabled data-lbl="empl_race_ethn">Race and Ethnicity</button>
        <button class="button" disabled data-lbl="empl_vet" style="padding-left: 14%; padding-right: 12%">Veteran Status</button>
      </div>
    </div>
    <div class="dropdown"> <button class="button" disabled data-lbl="disabl_pov">Disability and Poverty</button> </div>
    <div class="dropdown"> <button class="button" disabled data-lbl="tanf">TANF</button> </div>
    ${ (!emplStatusCounties.includes(CountyName) ) ? `<div class="dropdown"> <button class="button" disabled data-lbl="empl_status">Employment Status</button> </div>` : '' }
    <div class="dropdown"> <button class="button" disabled data-lbl="snap" >SNAP</button> </div>
	`
  let wdaDropdowns = `
    <div class="dropdown"> <button class="button" disabled data-lbl="collapse1" id="button1">Number of Workers <br><br> Average Monthly Earnings</button> </div>
    <div class="dropdown"> <button class="button" disabled data-lbl="collapse2" style="padding-left: 15%; padding-right: 12.5%">New Hires <br><br>Job Net Changes</button> </div>
    <div class="dropdown"> <button class="button" disabled data-lbl="collapse3" style="padding-left: 17%; padding-right: 17%">Turnover Rate</button> </div>
    <div class="dropdown"> <button class="button" disabled data-lbl="collapse4" style="padding-left: 15%; padding-right: 1%;">Industry Metrics</button> </div>
    <div class="dropdown"> <button class="button" disabled data-lbl="collapse15" style="padding-left: 20%; padding-right: 20%">Separations</button> </div>
  `

  let mdDrodowns = `
    <div class="dropdown"> <button class="button" disabled data-lbl="pop">Population and Median Household Income</button> </div>
    <div class="dropdown">
      <button class="button" disabled style="padding-left: 16%; padding-right: 16%">Demographics and Employment</button>
      <div class="dropdown-content">
        <button class="button" disabled data-lbl="empl_edu_gend">Gender</button>
        <button class="button" disabled data-lbl="empl_race_ethn">Race and Ethnicity</button>
        <button class="button" disabled data-lbl="empl_vet" style="padding-left: 14%; padding-right: 12%">Veteran Status</button>
      </div>
    </div>
    <div class="dropdown"> <button class="button" disabled data-lbl="disabl_pov">Disability and Poverty</button> </div>
    <div class="dropdown"> <button class="button" disabled data-lbl="tanf">TANF</button> </div>
    <div class="dropdown">
      <button class="button" disabled style="padding-left: 1%; padding-right: 1%" data-lbl="collapse9">Apprenticeship Completers</button>
    </div>
    <div class="dropdown"> <button class="button" disabled data-lbl="collapse1" id="button1">Number of Workers <br><br> Average Monthly Earnings</button> </div>
    <div class="dropdown"> <button class="button" disabled data-lbl="collapse2" style="padding-left: 15%; padding-right: 12.5%">New Hires <br><br>Job Net Changes</button> </div>
    <div class="dropdown"> <button class="button" disabled data-lbl="collapse3" style="padding-left: 17%; padding-right: 17%">Turnover Rate</button> </div>
    <div class="dropdown"> <button class="button" disabled data-lbl="collapse4" style="padding-left: 15%; padding-right: 1%;">Industry Metrics</button> </div>
    <div class="dropdown"> <button class="button" disabled data-lbl="collapse15" style="padding-left: 20%; padding-right: 20%">Separations</button> </div>
    <div class="dropdown">    
      <button class="button" disabled data-lbl="collapse16" style="padding-left: 20%; padding-right: 20%">New Apprentice Programs</button>
    </div>
    <div class="dropdown">    
      <button class="button" disabled data-lbl="collapse17" style="padding-left: 20%; padding-right: 20%">New/Active Apprentices</button>
    </div>
    <div class="dropdown">
      <button class="button" disabled data-lbl="collapse20" style="padding-left: 2%; padding-right: 5%">Long Term Unemployed</button>
    </div>
    <div class="dropdown"> <button class="button" disabled data-lbl="snap" >SNAP</button> </div>
    <div class="dropdown">
	  <button class="button" disabled style="padding-left: 2%; padding-right: 5%" data-lbl="collapse19">Service Partcipants in SNAP</button>
    </div>
  `

  let style = `
  <style>
	.picDiv {
		width: 600px;
		height: 600px;
		overflow: hidden;
		margin-left: 20%;
	}
	.picDiv img {
		width: 325%;
		height: 325%;
		margin: -110% 0 0 -108.5%;
	}
  </style>
  `

  let counties_pop = `
  <div id="pop" style="display: none;">
    <div class="ChartTitle">
      <p>Population and Median Household Income</p>
    </div>
    <div class="ChartDiv">
      <div id="pop_chart" class="show">
        <script src="../js/stateD3.js"></script>
      </div>
    </div>
    <div class="print">
      <div id="pop_chart_print">
      </div>
    </div>
    <div class="Table">
      <table id="pop_table">
      </table>
    </div>
    <div class="Footer">
      <div class="FootRight">
      </div>
      <div class="FootLeft">
        <p>Source: American Community Survey 5-Year Estimates (Date Last Accessed: Today)</p>
      </div>
    </div>
  </div>
  `
  let counties_empl_edu_gend = `
  <div id="empl_edu_gend" style="display: none">
    <div class="ChartTitle">
      <div class="buttons">
        <p>
          <button type="button" id="btn5county">Toggle Labels</button>
          Employment Status: 
          <select id="btn3county">
            <option>Pick a Time Period</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
          </select>
        </p>
      </div>
      <p>Demographics</p>
    </div>
    <div class="ChartDiv">
      <div id="empl_edu_gend_chart" class="show">
        <p></p>
      </div>
      <div class="print">
        <div id="empl_edu_gend_chart_print">
        </div>
      </div>
    </div>
    <div class="Table">
      <table id ="empl_edu_gend_table">
      </table>
    </div>
    <div class="Footer">
      <p>Note: NIL are individuals who are not in the labor force; this includes retirees and others who are not looking for work </p>
      <p>Source: American Community Survey 5-Year Estimates (Date Last Accessed: Today)</p>
    </div>
  </div>
  `
  let counties_empl_race_ethn = `
  <div id="empl_race_ethn" style="display: none">
    <div class="ChartTitle">
      <div class="buttons">
        <p>
          Employment Status: 
          <select id="btn31county">
            <option>Pick a Time Period</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
          </select>
        </p>
      </div>
      <p>Demographics</p>
    </div>
    <div class="ChartDiv">
      <div id="empl_race_ethn_chart" class="show">
      </div>
      <div class="print">
        <div id="empl_race_ethn_chart_print">
        </div>
      </div>
    </div>
    <div class="Table">
      <table id="empl_race_ethn_table">
      </table>
    </div>
    <div class="Footer">
      <p>Source: American Community Survey 5-Year Estimates (Date Last Accessed: Today)</p>
    </div>
  </div>
  `
  let counties_empl_vet = `
  <div id="empl_vet" style="display: none">
    <div class="ChartTitle">
      <div class="buttons">
        <p>
          Employment Status: 
          <select id="btn32county">
            <option>Pick a Time Period</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
          </select>
        </p>
      </div>
      <p>Demographics</p>
    </div>
    <div class="ChartDiv">
      <div id="empl_vet_chart" class="show">
      </div>
      <div class="print">
        <div id="empl_vet_chart_print">
        </div>
      </div>
    </div>
    <div class="Table">
      <table id="empl_vet_table">
      </table>
    </div>
    <div class="Footer">
      <p>Source: American Community Survey 5-Year Estimates (Date Last Accessed: Today)</p>
    </div>
  </div>
  `
  let counties_disabl_pov = `
  <div id="disabl_pov" style="display: none">
    <div class="ChartTitle">
      <div class="buttons">
        <p>
          Select Time Period: 
          <select id="btn9county">
            <option>Pick a Time Period</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
          </select>
        </p>
      </div>
      <p>Disability and Poverty</p>
    </div>
    <div class="ChartDiv">
      <div id="disabl_pov_chart" class="show">
      </div>
      <div class="print">
        <div id="disabl_pov_chart_print">
        </div>
      </div>
    </div>
    <div class="Table">
      <table id ="disabl_pov_table">
      </table>
    </div>
    <div class="Footer">
      <div class="FootLeft">
        <p>Source: American Community Survey 5-Year Estimates (Date Last Accessed: Today)</p>
      </div>
    </div>
  </div>
  `
  let counties_tanf = `
  <div id="tanf" style="display: none">
    <div class="ChartTitle">
      <div class="buttons">
        <p>
          TANF Workers: 
          <select id="btn8county">
            <option>Pick a Time Period</option>
            <option>All</option>
            <option>2015Q3-2016Q2</option>
            <option>2016Q3-2017Q2</option>
          </select>
        </p>
      </div>
      <p>Temporary Aid for Needy Families (TANF) Stats</p>
    </div>
    <div class="ChartDiv">
      <div id="tanf_chart" class="show">
      </div>
      <div class="print">
        <div id="tanf_chart_print">
        </div>
      </div>
    </div>
    <div class="Table">
      <table id="tanf_table">
        <tfoot>
          <tr>
            <td  colspan="4">Service participants means Individuals who received TANF benefits.</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="Footer">
      <div class="FootLeft">
        <p>Source: Administrative Data from Temporary Assistance to Needy Families (TANF) and MD Wage Records (Date Last Accessed: 2/28/18)</p>
      </div>
    </div>
  </div>
  `
  let counties_empl_status = `
  <div id="empl_status" style="display: none;" >
    <div class="ChartTitle">
      <div class="buttons">
        <p>
          Select Time Period: 
          <select id="btn10county">
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
          </select>
        </p>
        <p>
          Select Indicator: 
          <select id="btn11county">
            <option>Gender</option>
            <option>Race</option>
            <option>Education</option>
            <option>Poverty</option>
          </select>
        </p>
      </div>
      <p>Employment Status amongst Maryland Workers</p>
    </div>
    <div class="ChartDiv">
      <div id="empl_status_chart" class="show">
      </div>
      <div class="print">
        <div id="empl_status_chart_print">
        </div>
      </div>
    </div>
    <div class="Table">
      <table id="empl_status_table">
        <tr class="HeadRow"> </tr>
      </table>
      <div class="Footer">
        <div class="FootLeft">
          <p>The Workforce Services data is available from July 2016 to June 2017</p>
          <p>Source: ACS and Microdata, accessed 4/15/2019</p>
        </div>
      </div>
    </div>
  </div>
  `
  let counties_snap = `
  <div id="snap" style="display: none;" >
    <div class="ChartTitle">
      <p>SNAP Recipient Workers</p>
    </div>
    <div class="ChartDiv">
      <div id="snap_chart" class="show">
      </div>
      <div class="print">
        <div id="snap_chart_print">
        </div>
      </div>
    </div>
    <div class="Table">
      <table id="snap_table">
        <tr class="HeadRow">
	    <th>SNAP Recipient Workers</th>
	    <th></th>
	    <th>2016</th>
	    <th>2017</th>
	    <th>2018</th>
      </table>
      <div class="Footer">
        <div class="FootLeft">
          <p>SNAP data is available from January 2016 to October 2016. </p>
          <p>Source: Jacob France Institute, accessed 4/15/2019</p>
        </div>
      </div>
    </div>
  </div>
  `



















let wdaCollapse1 = `
<div id="collapse1" style="display: none;">
  <div class="ChartTitle">
	<div class="buttons">
	  <p>
		Time: 
		<select id="btn3wda">
		  <option>2016-Q1</option>
		  <option>2016-Q2</option>
		  <option>2016-Q3</option>
		  <option>2016-Q4</option>
		  <option>2017-Q1</option>
		  <option>2017-Q2</option>
		  <option>2017-Q3</option>
		  <option selected="selected">2017-Q4</option>
		</select>
	  </p>
	  <p>
		Indicator: 
		<select id="btn31wda">
		  <option>By Age</option>
		  <option>By Gender</option>
		</select>
	  </p>
	</div>
	<p>Number of Workers and Average Monthly Earnings by Age and Gender</p>
  </div>
  <div class="ChartDiv">
	<div id="Chart3">
	  <p></p>
	</div>
	<div id="Print3" class="print"></div>
  </div>
  <div class="Table">
	<table id ="table3" style="font-size: 80%">
	</table>
  </div>
</div>
`

let wdaCollapse2 = 
`<div id="collapse2" style="display: none;">
  <div class="ChartTitle">
	<div class="buttons">
	  <p>
		Time: 
		<select id="btn4wda">
		  <option>2016-Q1</option>
		  <option>2016-Q2</option>
		  <option>2016-Q3</option>
		  <option>2016-Q4</option>
		  <option>2017-Q1</option>
		  <option>2017-Q2</option>
		  <option>2017-Q3</option>
		  <option selected="selected">2017-Q4</option>
		</select>
	  </p>
	  <p>
		Indicator: 
		<select id="btn41wda">
		  <option>By Education</option>
		  <option>By Gender</option>
		</select>
	  </p>
	</div>
	<p>New Hires and Job Net Changes by Education and Gender</p>
  </div>
  <div class="ChartDiv">
	<div id="Chart4">
	</div>
	<div id="Print4" class="print"></div>
  </div>
  <div class="Table">
	<table id="table4">
	</table>
  </div>
  <div class="Footer" >
	<p>New Hires and Job Net Change since previous quarter.</p>
	<p class="FootLeft" style="text-align: center;">New Hires: Estimated number of workers who started a new job.  More specifically, total hires that, while they worked for an employer in the specified quarter, were not employed by that employer in any of the previous four quarters. </p>
	<p class="FootLeft" style="text-align: center;">Job Net Change: Difference between firm job gain and firm job loss.</p>
  </div>
</div>
`


let wdaCollapse3 = `
<div id="collapse3" style="display: none;">
  <div class="ChartTitle">
	<div class="buttons">
	  <p>
		Time: 
		<select id="btn5wda">
		  <option>2016-Q1</option>
		  <option>2016-Q2</option>
		  <option>2016-Q3</option>
		  <option>2016-Q4</option>
		  <option>2017-Q1</option>
		  <option>2017-Q2</option>
		  <option selected="selected">2017-Q3</option>
		</select>
	  </p>
	  <p>
		Indicator: 
		<select id="btn51wda">
		  <option>By Education</option>
		  <option>By Gender</option>
		</select>
	  </p>
	</div>
	<p>Turnover Rate by Gender and Education</p>
  </div>
  <div class="ChartDiv">
	<div id="ChartFive">
	</div>
	<div id="PrintFive" class="print"></div>
	<div class="Table">
	  <table id="table5">
	  </table>
	</div>
	<div class="Footer" >
	  <p>Job Turnover Rate in previous quarter.</p>
	  <p class="FootLeft" style="text-align: center;">Turnover Rate: The rate at which stable jobs begin and end. It is calculated by summing the number of stable hires in the reference quarter and stable separations in the next quarter, and dividing by the average full-quarter employment.</p>
	</div>
  </div>
</div>
`

let wdaCollapse4 = 
`
<div id="collapse4" style="display: none;">
  <div class="ChartTitle">
	<div class="buttons">
	  <button type="button" id="btn6wda">Toggle Labels</button>
	  <p>
		Time Period:
		<select id="btn7wda">
		  <option>2016-Q1</option>
		  <option>2016-Q2</option>
		  <option>2016-Q3</option>
		  <option>2016-Q4</option>
		  <option>2017-Q1</option>
		  <option>2017-Q2</option>
		  <option>2017-Q3</option>
		  <option selected="selected">2017-Q4</option>
		</select>
	  </p>
	  <p>
		Indicator:
		<select id="btn10wda">
		  ${ CountyName == 'Maryland' ? '' : '<option>Average Monthly Earnings</option>' }
		  <option>Job Net Changes</option>
		  <option>New Hires</option>
		  <option>Turnover Rate</option>
		  <option selected="selected">Workers</option>
		</select>
	  </p>
	</div>
	<p>Data by Industry</p>
  </div>
  <div class="ChartDiv">
	<div id="Chart6"></div>
	<div id="Print6" class="print"></div>
	<style>
	  #table6 > tbody > tr > td { text-align:right !important }
	</style>
	<div id="Table">
	  <table id="table6" >

	  </table>
	</div>
	<div class="Footer" >
	  <p class="FootLeft" style="text-align: center;">New Hires: Estimated number of workers who started a new job.  More specifically, total hires that, while they worked for an employer in the specified quarter, were not employed by that employer in any of the previous four quarters. </p>
	  <p class="FootLeft" style="text-align: center;">Job Net Change: Difference between firm job gain and firm job loss.</p>
	  <p class="FootLeft" style="text-align: center;">Turnover Rate: The rate at which stable jobs begin and end. It is calculated by summing the number of stable hires in the reference quarter and stable separations in the next quarter, and dividing by the average full-quarter employment.</p>
	</div>
  </div>
</div>
`

let wdaCollapse15 = `
<div id="collapse15" style="display:none;">
  <div class="ChartTitle">
	<div class="buttons">
	  <p>
		Time Period:
		<select id="btn18wda">
		  <option>2016-Q1</option>
		  <option>2016-Q2</option>
		  <option>2016-Q3</option>
		  <option>2016-Q4</option>
		  <option>2017-Q1</option>
		  <option>2017-Q2</option>
		  <option>2017-Q3</option>
		  <option selected="selected">2017-Q4</option>
		</select>
	  </p>
	  <p>
		Indicator:
		<select id="btn102wda">
		  <option selected="selected">Industry</option>
		  <option>Gender</option>
		  <option>Education</option>
		  <option>Age</option>
		</select>
	  </p>
	</div>
	<p>Separations</p>
  </div>
  <div class="ChartDiv">
	<div id="Chart17">
	</div>
	<div id="Print17" class="print"></div>
  </div>
  <div class="Table">
	<table id="table15">
	</table>
  </div>
  <div class="Footer">
	<p class="FootLeft" style="text-align: center;">Estimated number of workers whose job with a given employer ended in the specified quarter.</p>
  </div>
</div>
`

let wdaFooter = `
<div class="Footer" id="collapse5" style="display: none;">
  <p class="FootLeft" style="text-align: center;">Source: U.S.Census Bureau, Center for Economic Studies, LEHD. </p>
  <p class="FootLeft" style="text-align: center;">The table shows the latest data available for the indicator as of Today.</p>
</div>
`


let mdApprenticeshipCompleters = `
<div id="collapse9" style="display: none;">
  <div class="ChartTitle">
	  <p>Apprenticeship Completers</p>
  </div>
  <div class="ChartDiv">
    <div id="Chart11"></div>
    <div id="Print11" class="print"></div>
  </div>
  <div class="Table">
    <table id="table11"></table>
  </div>
  <div class="Footer">
    <div class="FootLeft">
      <p>Source: United States Department of Labor (Date Last Accessed: Today)</p>
      <p>Note: FY is the U.S. government’s fiscal year, which ends on September 20 of the indicated year.  For example, FY19 is the fiscal year running from October 1, 2018 to September 30, 2019.</p>
    </div>
  </div>
</div>
`

let mdNewApprenticeShipPrograms = `
<div id="collapse16" style="display:none;">
  <div class="ChartTitle">
    <p>New Apprentice Programs</p>
  </div>
  <div class="ChartDiv">
    <div id="Chart18"> </div>
    <div id="Print18" class="print"></div>
  </div>
  <div class="Table">
    <table id="table55"></table>
  </div>
  <div id="scrollTable">
    <div class="Footer">
      <p class="FootLeft">Service participants means individuals who received SNAP benefits</p>
    </div>
  </div>
</div>
`

let mdNewAndACtivePrograms = `
<div id="collapse17" style="display:none;">
  <div class="ChartTitle">
    <p>New/Active Apprentice Programs</p>
  </div>
  <div class="ChartDiv">
    <div id="Chart19"></div>
    <div id="Print19" class="print"></div>
  </div>
  <div class="Table">
    <table id="table19"></table>
  </div>
</div>
<div class="Footer" id="collapse14" style="display: none;">
  <p style="text-align:center; margin-left: 5%">Source: U.S.Census Bureau, Center for Economic Studies, LEHD. </p>
</div>
`

let mdLongTermUnemployment = `
<div id="collapse20" style="display: none;">
  <div class="ChartTitle">
    <p>Long Term Unemployed</p>
  </div>
  <div id="Chart20">
    <p></p>
  </div>
  <div id="Print20" class="print"></div>
  <div class="Table">
    <table id="table20"></table>
  </div>
  <div class="Footer">
    <div class="FootLeft">
      <p>Source: Current Population Survey, Latest Data Available as of Summer 2019 is 2015</p>
    </div>
  </div>
</div>
`

let mdServiceParticipantsInSnap = `
<div id="collapse19" style="display: none">
  <div class="ChartTitle">
    <p>Service Participants in SNAP</p>
  </div>
  <div class="ChartDiv">
    <div id="Chart21" class="show"></div>
    <div class="print">
      <div id="Print21"></div>
    </div>
  </div>
  <div class="Table">
    <table id="table155"></table>
    <div class="Footer">
      <div class="FootLeft">
        <p>SNAP (Supplemental Nutrition Assistance Program) is available available from January 2014 to October 2016. </p>
      </div>
      <div class="FootLeft">
        <p>Source: Jacob France Institute, accessed 4/15/2019</p>
      </div>
    </div>
  </div>
</div>
`


if(!location_search){
	console.log('HOMEPAGE')
	let myCounties = await import(/* webpackChunkName: "MD-counties" */ './MD-counties.json')
    let counties = myCounties.default;
    let insertThis = `
        <div class="Title">
			<p>Welcome to the Maryland Area Explorer! (Last Updated 5/27/19)</p>
        </div>
        <div class="Body">
			<p>The Maryland Area Explorer turns complex labor market information data into easy-to-understand charts and graphs. To get started, select a county from the dropdown menus or from the map below.</p>
		</div>
    
    <div id="tooltip"></div><!-- div to hold tooltip. -->
		<div id="mapDrop">
			<select onChange="window.location.href = '?county=' + this.value"> ${ countySelects } </select>
			<select onChange="window.location.href = '?county=' + this.value"> ${ wdaSelects } </select>
		</div> <div id="map"> </div>	`
  let body = document.querySelector("#body").innerHTML = insertThis
  window.arrCounties = [];
  var projection = d3.geoMercator().scale(4500).translate([6275, 3300]);
  var path = d3.geoPath().projection(projection);
  var width = "100%";
  var height = "550";
  var svg = d3.select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", "0 0 400 1")
    .attr("id", "md-svg")
    .append("g")
    .attr("id", "counties")
    .selectAll("path") // Returns an empty selection
    .data(counties.features) // Binds data to a selection
    .enter().append("path")
    .attr("class", "md-county")
    .attr("onClick", "window.location.href = '?county=' + (arrCounties[this.attributes.cid.value].properties.GEODESC).replace(/[ ]/g,'').replace(/[']/g,'') + '.html'")
    .attr("d", path)
    .attr("cid", (d) => { arrCounties.push(d); return arrCounties.length - 1; })
}

let countyCode = ``
let lwdaContent = `
	${wdaCollapse1}
	${wdaCollapse2}
	${wdaCollapse3}
	${wdaCollapse4}
	${wdaCollapse15}
	${wdaFooter}
`

let countyContent = `
	${counties_pop}
	${counties_empl_edu_gend}
	${counties_empl_race_ethn}
	${counties_empl_vet}
	${counties_disabl_pov}
	${counties_tanf}
	${counties_empl_status}
	${counties_snap}
`
let mdContent = `
	${mdApprenticeshipCompleters}
	${mdNewApprenticeShipPrograms}
	${mdNewAndACtivePrograms}
	${mdLongTermUnemployment}
	${mdServiceParticipantsInSnap}
`
if(location_search){
  let buttonMenu = '' 
  if ( CountyName.includes('L W D A') ){
  	console.log("LOADING:", CountyName)
  	let tmp = CountyName.replace("L W D A","")
    window.CountyName1 = tmp+"WIA -- Maryland Statewide"
    window.CountyName2 = tmp+"WIA"
  	window.CountyName4 =  tmp+" Local Workforce Development Area"
  	window.CountyName5 = tmp+ "LWDA"
  	buttonMenu = wdaDropdowns
  	countyCode = lwdaContent
  }
  else if( CountyName == 'Maryland' ){
  	window.CountyName = window.CountyName1 = window.CountyName2 = window.CountyName4 = 'Maryland'
  	console.log("LOADING Maryland")
  	buttonMenu = mdDrodowns
  	countyCode = countyContent + lwdaContent + mdContent
  }
  else{
    window.CountyName1 = CountyName+", MD";
    window.CountyName2 = CountyName+", Maryland";
    window.CountyName4 =  CountyName;
  	console.log("LOADING: ", CountyName)
  	buttonMenu = countyDropdowns
    countyCode = countyContent
  }
  console.log({CountyName, CountyName1, CountyName2, CountyName4})

  let sidebutton = `
  <div class="sidebutton">
    <select onChange="window.location.href = '?county=' + this.value" style="margin: 0px 0px 10px 4px; margin-bottom: 10px; padding-right: 18%;">
      ${ countySelects }
    </select>
    <select onChange="window.location.href = '?county=' + this.value" style="margin: 0px 0px 2px 3px; margin-bottom: 10px; padding-right: 0%;">
      ${wdaSelects}
    </select>
    ${buttonMenu}
  </div>
  `

  let wrapper = `
  ${style}
  ${sidebutton}
  <div id="Wrapper">
    <div class="content">
      <div class="Header">
        <p class="RightText"><a href="../index.html">Start Over</a>    |    <button onclick="printClick()">Print This Snapshot</button>    |      <button onclick="printAll()" > Print Whole Page</button></p>
        <p>Select Different Snapshot and/or County</p>
      </div>
      <div class="County">
        <p id="title1">${CountyName4}</p>
        <p id="Landing">Please select a dashboard from the buttons to the right, or select a different geographic area from the dropdown menus. </p>
      </div>
      ${countyCode}
    </div>
  </div>
  `
  document.body.innerHTML += wrapper

  if ( CountyName.includes('L W D A') ){
  	import ('./woia_external_code.js') }
  else if( CountyName == 'Maryland' ){
  	import ('./woia_external_code.js')
  	import ('./counties_external_code.js')
  	import ('./maryland_external_code.js')
  }
  else{ import ('./counties_external_code.js') }

}

document.body.innerHTML += ''

} )()
