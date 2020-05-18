import * as d3 from 'd3';
import * as dimple from 'dimple';

/*
 * Outline
 * 
 * 1 - Population
 * 2 - Demographics
 * 3 - Disability and Poverty
 * 4 - Tanf
 * 5 - Snap
*/
(async()=>{    
    let pcnt = (d) => { return d.slice( d.length -1 ) != '%' ? (d3.format(".1%")(d*1) ) : (d3.format(".1%")(Number(d.slice(0, -1)*.01 ) ) ) }
    let pcnt2 = (d) => { return d.slice( d.length -1 ) != '%' ? (d3.format(".1%")(d*.01) ) : (d3.format(".1%")(Number(d.slice(0, -1)*.01 ) ) ) }
    
    // Retrieve Data
    let url =  CountyName2 == 'Maryland' ? './data/MarylandData_5-5-20.csv' : "https://docs.google.com/spreadsheets/d/e/2PACX-1vR917bKT6GZooR-f-Jba82-l0qhzNC6MM7gOVCJK6iNCNTxnlauxNrki3TjphoGv4T8f7U1kUdHwttH/pub?gid=104785359&single=true&output=csv"
    console.log(url)
    let data = await d3.csv(url)
    CountyName2 == 'Maryland' ? '' : data = dimple.filterData(data, "Location", CountyName2)

    //
    // Population and Median Household Income
    //
    console.log('Population and Median Household Income')

    // Filter Data
    let pop = dimple.filterData(data, "Time", ["2015", "2016", "2017"]);
    let mhhi = dimple.filterData(pop, "Indicator", "Median Household Income")
    pop = dimple.filterData(pop, "Indicator", "Total Population")

    // Display Table
    document.getElementById('pop_table').innerHTML = `
    <tr class="HeadRow" style="background-color: white;">
      <th>Baltimore County:</th>
      <th>2012-2016</th>
      <th>2013-2017</th>
      <th>Change</th>
    </tr>
    <tr>
      <th>Population</th>
      <td>${pop[1]['Amount'] }</td>
      <td >${pop[0]['Amount']}</td>
      <td>${pop[0]['Amount'] - pop[1]['Amount']}</td>
    </tr>
    <tr class="FootRow">
      <th>Median Household Income</th>
      <td>$${mhhi[1]['Amount'] }</td>
      <td>$${mhhi[0]['Amount'] }</td>
      <td>${mhhi[0]['Amount'] - mhhi[1]['Amount']}</td>
    </tr>
    `
    
    // Retrieve Elements
    var pop_svg = dimple.newSvg("#pop_chart", "100%", 400);
    var pop_chart_print = dimple.newSvg("#pop_chart_print", 750, 400);

    // Configure Chart
    window.pop_chart = new dimple.chart(pop_svg,pop);
    window.mhhi_chart = new dimple.chart(pop_svg,mhhi);
    window.ppop_chart = new dimple.chart(pop_chart_print,pop);
    window.mhhi_chart_print = new dimple.chart(pop_chart_print,mhhi);
    var orderRule = ["2015", "2016", "2017"]
    let m = ["y", "Amount"]
    var createThese = [{
        "chart": pop_chart,
        "bounds": ["11%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": 'Years',
        "order": orderRule,
        "measureAxis": m,
        "ytitle": "Total Population",
        "tickFormat": ',.0f',
        "series": "Indicator",
        "lineMarkers": true,
    }, {
        "chart": ppop_chart,
        "bounds": ["14%", "12%", "32%", 300],
        "categoryAxis": ["x", "Time"],
        "xtitle": 'Years',
        "order": orderRule,
        "measureAxis": m,
        "ytitle": "Total Population",
        "tickFormat": ',.0f',
        "series": "Indicator",
        "lineMarkers": true
    }, {
        "chart": mhhi_chart,
        "bounds": ["56%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": 'Years',
        "order": orderRule,
        "measureAxis": m,
        "ytitle": "Median Household Income",
        "tickFormat": '$,.0f',
        "series": "Indicator",
        "lineMarkers": true
    },{
        "chart": mhhi_chart_print,
        "bounds": ["62%", "12%", "32%", 300],
        "categoryAxis": ["x", "Time"],
        "xtitle": 'Years',
        "order": orderRule,
        "measureAxis": m,
        "ytitle": "Median Household Income",
        "tickFormat": '$,.0f',
        "series": "Indicator",
        "lineMarkers": true
    }, ]

    
    // https://github.com/PMSI-AlignAlytics/dimple/issues/265
    let createChart = (objarr)=>{
        objarr.map(obj=>{
            // console.log(Object.keys(obj))
            // Configure Chart
            let chart = obj.chart
            chart.setBounds(...obj.bounds)
            // Configure X Axis
            let xaxis = chart.addCategoryAxis(...obj.categoryAxis);
            if (obj.xtitle) {
                xaxis.title = obj.xtitle
            }
            if(obj.order){
              xaxis.addOrderRule([...obj.order]);  
            }
            // configure Y Axis
            let yaxis = chart.addMeasureAxis(...obj.measureAxis)
            yaxis.title = obj.ytitle
            yaxis.tickFormat = d3.format( obj.tickFormat )
            // Draw
            let arr = ["Workers receiving TANF benefits", "Workforce/Service in TANF", "Recipients amongst MD Workers" ]
            var series = ''
            if( arr.includes(obj.ytitle) ){  series = chart.addSeries(obj.series, dimple.plot.line);  }
            else{ series = chart.addSeries(obj.series, dimple.plot.bar); }
            series.lineMarkers = true;
            if (obj.colors) {
                if (Array.isArray( obj.colors[0] ) ) {
                    // console.log(obj.colors, obj.colors[0])
                    obj.colors.map(colors=>chart.assignColor(...colors))
                }
                else if (obj.colors) {
                    chart.assignColor(...obj.colors)
                }
            } 
            if (obj.legend){
                chart.addLegend(...obj.legend)
            }
            chart.draw()
        }
        )
    }
    createChart(createThese)

    //
    // empl edu gend
    //
    console.log('Employment (by Educational Attainment and Gender)')

    // Retrieve Elements
    var empl_edu_gend_svg = dimple.newSvg("#empl_edu_gend_chart", "100%", 400);
    var empl_edu_gend_chart_print = dimple.newSvg("#empl_edu_gend_chart_print", 750, 400);

    // Filter Data 
    window.EduAttainment = dimple.filterData(data, "Indicator_Status", ["Less than Highschool", "Highschool", "Some College", "Bachelor's or Higher"])
    EduAttainment = dimple.filterData(EduAttainment, "Employment_Status", ["Unemployed", "NIL", "Employed"])
    window.EduAttainment1 = dimple.filterData(EduAttainment, "Time", "2017");
    window.EduAttainment2 = dimple.filterData(EduAttainment, "Time", "2015");
    EduAttainment = dimple.filterData(EduAttainment, "Time", "2016");

    window.unempByGender = dimple.filterData(data, "Indicator_Status", ["Male", "Female"])
    unempByGender = dimple.filterData(unempByGender, "Indicator", "Unemployment By Gender")
    window.unempByGender1 = dimple.filterData(unempByGender, "Time", "2016")
    window.unempByGender2 = dimple.filterData(unempByGender, "Time", "2015")
    unempByGender = dimple.filterData(unempByGender, "Time", "2017")

    // Create Tables
    let mdNoTD = CountyName == 'Maryland' ? '' : `
      <td></td>
      <td></td>
    `

    let mdunempByGenderlbl = CountyName == 'Maryland' ? '' : `
      <th>Male</th> 
      <th>Female</th> 
    `
    let mdunempByGender1 = CountyName == 'Maryland' ? '' : `
      <td>${unempByGender1[0]['Amount']}</td> 
      <td>${unempByGender1[1]['Amount']}</td> 
    `
    let mdunempByGender = CountyName == 'Maryland' ? '' : `
      <td>${unempByGender[0]['Amount']}</td> 
      <td>${unempByGender[1]['Amount']}</td> 
    `


    document.getElementById('empl_edu_gend_table').innerHTML = `
    <tr class="HeadRow" style="background-color: white;">
      <th>Baltimore County 2016: </th>
      <th>Less than High School Graduate</th>
      <th>High School Graduate (Includes Equivalency)</th>
      <th>Some College or Associates</th>
      <th>Bachelor's Degree or Higher</th>
      <th></th>
      ${mdunempByGenderlbl}
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2013-2017</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      ${mdNoTD}
    </tr>
    <tr>
      <th>Employed</th>
      <td>${EduAttainment1[0]['Amount']}</td>
      <td>${EduAttainment1[1]['Amount']}</td>
      <td>${EduAttainment1[2]['Amount']}</td>
      <td>${EduAttainment1[3]['Amount']}</td>
      <th rowspan="3" style="border-style: solid;
        border-color: #5281B7;">Unemployment Rate</th>
      ${mdNoTD}
    </tr>
    <tr>
      <th>Unemployed</th>
      <td>${EduAttainment1[4]['Amount']}</td>
      <td>${EduAttainment1[5]['Amount']}</td>
      <td>${EduAttainment1[6]['Amount']}</td>
      <td>${EduAttainment1[7]['Amount']}</td>
      ${mdunempByGender}
    </tr>
    <tr>
      <th>Not In Labor Force (NIL)</th>
      <td>${EduAttainment1[8]['Amount']}</td>
      <td>${EduAttainment1[9]['Amount']}</td>
      <td>${EduAttainment1[10]['Amount']}</td>
      <td>${EduAttainment1[11]['Amount']}</td>
      ${mdNoTD}
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2012-2016: </th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      ${mdNoTD}
    </tr>
    <tr>
      <th>Employed</th>
      <td>${EduAttainment[0]['Amount']}</td>
      <td>${EduAttainment[1]['Amount']}</td>
      <td>${EduAttainment[2]['Amount']}</td>
      <td>${EduAttainment[3]['Amount']}</td>
      <th rowspan="3" style="border-style: solid;
        border-color: #5281B7;">Unemployment Rate</th>
      ${mdNoTD}
    </tr>
    <tr>
      <th>Unemployed</th>
      <td>${EduAttainment[4]['Amount']}</td>
      <td>${EduAttainment[5]['Amount']}</td>
      <td>${EduAttainment[6]['Amount']}</td>
      <td>${EduAttainment[7]['Amount']}</td>
      ${mdunempByGender1}
    </tr>
    <tr>
      <th>Not In Labor Force (NIL)</th>
      <td>${EduAttainment[8]['Amount']}</td>
      <td>${EduAttainment[9]['Amount']}</td>
      <td>${EduAttainment[10]['Amount']}</td>
      <td>${EduAttainment[11]['Amount']}</td>
      <td></td>
      ${mdNoTD}
    </tr>
    `

    // Configure Chart
    window.empl_edu_chart = new dimple.chart(empl_edu_gend_svg,EduAttainment);
    window.empl_edu_gend_chart = new dimple.chart(empl_edu_gend_svg,unempByGender);
    window.pempl_edu_chart = new dimple.chart(empl_edu_gend_chart_print,EduAttainment);
    window.pempl_edu_gend_chart = new dimple.chart(empl_edu_gend_chart_print,unempByGender);
    orderRule = ["Less than Highschool", "Highschool", "Some College", "Bachelor's or Higher"]

    createThese = [{
        "chart": empl_edu_chart,
        "bounds": ["11%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Employment_Status"],
        "xtitle": "Employment Status",
        "order": orderRule,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Totals",
        "tickFormat": ',',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": false

    }, {
        "chart": pempl_edu_chart,
        "bounds": ["14%", "12%", "32%", 250],
        "categoryAxis": ["x", "Employment_Status"],
        "xtitle": 'Employment Status',
        "order": orderRule,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Totals",
        "tickFormat": ',',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": false
    }, {
        "chart": empl_edu_gend_chart,
        "bounds": ["58%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Indicator_Status"],
        "xtitle": 'Gender',
        "order": orderRule,
        "measureAxis": ["y", "Unemployment_Rate"],
        "ytitle": "Unemployment Rate",
        "tickFormat": '.1%',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": [["Male", "#3366ff", "black", 0.7], ["Female", "pink", "black", 0.7]]

    }, {
        "chart": pempl_edu_gend_chart,
        "bounds": ["62%", "12%", "32%", 300],
        "categoryAxis": ["x", "Indicator_Status"],
        "xtitle": 'Gender',
        "order": orderRule,
        "measureAxis": ["y", "Unemployment_Rate"],
        "ytitle": "Unemployment Rate",
        "tickFormat": '.1%',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": [["Male", "#3366ff", "black", 0.7], ["Female", "pink", "black", 0.7]]
    }, ]
    createChart(createThese)

    //
    // empl_race_ethn
    //
    console.log('Employment (by Race and Ethnicity)')

    // Retrieve Elements
    var empl_race_ethn_svg = dimple.newSvg("#empl_race_ethn_chart", "100%", 400);
    var empl_race_ethn_chart_print = dimple.newSvg("#empl_race_ethn_chart_print", 750, 400);

    // Filter Data
    window.raceData = dimple.filterData(data, "Indicator", "Unemployment By Race")
    raceData = dimple.filterData(raceData, "Indicator_Status", ["White", "Black", "Asian", "Hispanic"]);
    window.raceData1 = dimple.filterData(raceData, "Time", "2016")
    window.raceData2 = dimple.filterData(raceData, "Time", "2015")
    raceData = dimple.filterData(raceData, "Time", "2017")

    window.ethData = dimple.filterData(data, "Indicator", "Unemployment By Race")
    ethData = dimple.filterData(ethData, "Indicator_Status", ["White", "Hispanic"]);
    window.ethData1 = dimple.filterData(ethData, "Time", "2016")
    window.ethData2 = dimple.filterData(ethData, "Time", "2015")
    ethData = dimple.filterData(ethData, "Time", "2017")

    // Config Chart
    window.empl_race_ethn_chart = new dimple.chart(empl_race_ethn_svg,raceData);
    window.chart5 = new dimple.chart(empl_race_ethn_svg,ethData);
    window.pchart5 = new dimple.chart(empl_race_ethn_chart_print,ethData);
    window.pempl_race_ethn_chart = new dimple.chart(empl_race_ethn_chart_print,raceData);

    document.getElementById('empl_race_ethn_table').innerHTML = `
        <tr class="HeadRow" style="background-color: white;">
          <th>Baltimore City:</th>
          <th>White</th>
          <th>Black</th>
          <th>Asian</th>
          <th>Hispanic or Latino <br> (Any Race)</th>
        </tr>
        <tr class="HeadRow">
          <th>2013-2017</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr >
          <th>Unemployment Rate</th>
          <td>${pcnt2(raceData1[0]['Amount'])}</td>
          <td>${pcnt2(raceData1[1]['Amount'])}</td>
          <td>${pcnt2(raceData1[2]['Amount'])}</td>
          <td>${pcnt2(raceData1[3]['Amount'])}</td>
        </tr>
        <tr class="HeadRow">
          <th>2012-2016
          </th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr class="FootRow">
          <th>Unemployment Rate</th>
          <td>${pcnt2(raceData[0]['Amount'])}</td>
          <td>${pcnt2(raceData[1]['Amount'])}</td>
          <td>${pcnt2(raceData[2]['Amount'])}</td>
          <td>${pcnt2(raceData[3]['Amount'])}</td>
        </tr>
    `

    createThese = [{
        "chart": empl_race_ethn_chart,
        "bounds": ["11%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Indicator_Status"],
        "xtitle": " ",
        "order": ["White", "Black", "Asian", "Hispanic"],
        "measureAxis": ["y", "Unemployment_Rate"],
        "ytitle": "Unemployment Rate",
        "tickFormat": '.1%',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": [["Black", "#ff8566", "black", 0.7], ["White", "#99ccff", "black", 0.7], ["Asian", "#4dffa6", "black", 0.7], ["Hispanic", "#a366ff", "black", 0.7]]
    }, {
        "chart": chart5,
        "bounds": ["58%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Indicator_Status"],
        "xtitle": " ",
        "order": ["White", "Hispanic"],
        "measureAxis": ["y", "Unemployment_Rate"],
        "ytitle": "Unemployment Rate",
        "tickFormat": '.1%',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": [["White", "#99ccff", "black", .7], ["Hispanic", "#a366ff", "black", 0.7]]
    }, {
        "chart": pchart5,
        "bounds": ["62%", "12%", "32%", 300],
        "categoryAxis": ["x", "Indicator_Status"],
        "xtitle": " ",
        "order": ["White", "Hispanic"],
        "measureAxis": ["y", "Unemployment_Rate"],
        "ytitle": " ",
        "tickFormat": '.1%',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": [["White", "#99ccff", "black", 0.7], ["Hispanic", "#a366ff", "black", 0.7]]
    }, {
        "chart": pempl_race_ethn_chart,
        "bounds": ["14%", "12%", "32%", 250],
        "categoryAxis": ["x", "Indicator_Status"],
        "xtitle": " ",
        "order": ["White", "Black", "Asian", "Hispanic"],
        "measureAxis": ["y", "Unemployment_Rate"],
        "ytitle": " ",
        "tickFormat": '.1%',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": [["Black", "#ff8566", "black", 0.7], ["White", "#99ccff", "black", 0.7], ["Asian", "#4dffa6", "black", 0.7], ["Hispanic", "#a366ff", "black", 0.7]]
    }]
    createChart(createThese)

    //
    // empl_vet
    //
    console.log('Employment (by Veteran Status)')

    // Retrieve Elements
    var empl_vet_svg = dimple.newSvg("#empl_vet_chart", "100%", 400);
    var empl_vet_print_svg = dimple.newSvg("#empl_vet_chart_print", 750, 400);

    // Filter Data
    window.vetData = dimple.filterData(data, "Indicator", "Unemployment By Veteran Status")
    window.vetData1 = dimple.filterData(vetData, "Time", "2016");
    window.vetData2 = dimple.filterData(vetData, "Time", "2015");
    vetData = dimple.filterData(vetData, "Time", "2017");

    // Create Chart
    window.empl_vet_chart = new dimple.chart(empl_vet_svg,vetData);
    window.empl_vet_print_chart = new dimple.chart(empl_vet_print_svg,vetData);

    document.getElementById('empl_vet_table').innerHTML = `
        <tr class="HeadRow" style="background-color: white;">
          <th>Baltimore City:</th>
          <th>Veteran</th>
          <th>Non Veteran</th>
        </tr>
        <tr class="HeadRow">
          <th>2013-2017</th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>Unemployment Rate</th>
          <td>${pcnt2(vetData[0]['Amount'])}</td>
          <td>${pcnt2(vetData[1]['Amount'])}</td>
        </tr>
        <tr class="HeadRow">
          <th>2012-2016</th>
          <th></th>
          <th></th>
        </tr>
        <tr class="FootRow">
          <th>Unemployment Rate</th>
          <td>${pcnt2(vetData1[0]['Amount'])}</td>
          <td>${pcnt2(vetData1[1]['Amount'])}</td>
        </tr>
    `

    // Configure Charts
    createThese = [{
        "chart": empl_vet_chart,
        "bounds": ["9%", "12%", "80%", "65%"],
        "categoryAxis": ["x", "Indicator_Status"],
        "xtitle": " ",
        "order": ["Veteran", "Non Veteran"],
        "measureAxis": ["y", "Unemployment_Rate"],
        "ytitle": "Unemployment Rate",
        "tickFormat": '.1%',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": [["Veteran", "#248f24", "black", 0.7], ["Non Veteran", "#33cccc", "black", 0.7]]
    }, {
        "chart": empl_vet_print_chart,
        "bounds": ["13%", "12%", "80%", "65%"],
        "categoryAxis": ["x", "Indicator_Status"],
        "xtitle": " ",
        "order": ["Veteran", "Non Veteran"],
        "measureAxis": ["y", "Unemployment_Rate"],
        "ytitle": "Unemployment Rate",
        "tickFormat": '.1%',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": [["Veteran", "#248f24", "black", 0.7], ["Non Veteran", "#33cccc", "black", 0.7]]
    }]
    createChart(createThese)
    
    d3.select("#btn3county").on("change", chartChange);
    d3.select("#btn31county").on("change", chartChange);
    d3.select("#btn32county").on("change", chartChange);

    //
    //Chart 6 - QCEW  - Disablity and Povery
    //
    console.log("Emploment by Poverty, Disablity")
    
    // Retrieve Elements
    var disabl_pov_svg = dimple.newSvg("#disabl_pov_chart", "100%", 400);
    var disabl_pov_chart_print = dimple.newSvg("#disabl_pov_chart_print", 750, 400);

    // Filter Data
    let povRate = dimple.filterData(data, "Indicator", "Employment Status By Poverty Status")
    povRate = dimple.filterData(povRate, "Employment_Status", ["Unemployed", "Labor Force", "Employed"])
    let povRate1 = dimple.filterData(povRate, "Time", "2016");
    let povRate2 = dimple.filterData(povRate, "Time", "2015");
    povRate = dimple.filterData(povRate, "Time", "2017");

    let DisAttainment1 = dimple.filterData(data, "Indicator", "Employment Status By Disability Status")
    DisAttainment1 = dimple.filterData(DisAttainment1, "Employment_Status", ["Unemployed", "Labor Force", "Employed"])
    let DisAttainment = dimple.filterData(DisAttainment1, "Time", "2017");
    let DisAttainment2 = dimple.filterData(DisAttainment1, "Time", "2008-2011");
    DisAttainment1 = dimple.filterData(DisAttainment1, "Time", "2016");

    // Config Chart
    window.pempl_status_chart = new dimple.chart(disabl_pov_chart_print,povRate);
    window.empl_status_chart = new dimple.chart(disabl_pov_svg,povRate);

    window.emp_dis_chart_print = new dimple.chart(disabl_pov_chart_print,DisAttainment);
    window.emp_dis_chart = new dimple.chart(disabl_pov_svg,DisAttainment);

    document.getElementById('disabl_pov_table').innerHTML = `
    <tr class="HeadRow" style="background-color: white;">
      <th>Baltimore County: </th>
      <th>Disabled Individuals</th>
      <th>Individuals without Disabilities</th>
      <th></th>
      <th>Income in the past 12 months below poverty level</th>
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2012-2016</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <th>Labor Force</th>
      <td id="t1">${DisAttainment1[4]['Amount']}</td>
      <td id="t2">${DisAttainment1[5]['Amount']}</td>
      <td ></td>
      <td id="t3">${povRate1[1]['Amount']}</td>
    </tr>
    <tr>
      <th>Employed</th>
      <td id="t4">${DisAttainment1[0]['Amount']}</td>
      <td id="t5">${DisAttainment1[1]['Amount']}</td>
      <td></td>
      <td id="t6">${povRate1[3]['Amount']}</td>
    </tr>
    <tr>
      <th>Unemployed</th>
      <td>${DisAttainment1[2]['Amount']}</td>
      <td>${DisAttainment1[3]['Amount']}</td>
      <td ></td>
      <td>${povRate1[5]['Amount']}</td>
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2013-2017</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <th>Labor Force</th>
      <td id="t13">${DisAttainment[4]['Amount']}</td>
      <td id="t14">${DisAttainment[5]['Amount']}</td>
      <td></td>
      <td id="t15">${povRate[1]['Amount']}</td>
    </tr>
    <tr>
      <th>Employed</th>
      <td id="t16">${DisAttainment[0]['Amount']}</td>
      <td id="t17">${DisAttainment[1]['Amount']}</td>
      <td></td>
      <td id="t18">${povRate[3]['Amount']}</td>
    </tr>
    <tr class="FootRow">
      <th>Unemployed</th>
      <td id="t19">${DisAttainment[2]['Amount']}</td>
      <td id="t20">${DisAttainment[3]['Amount']}</td>
      <td></td>
      <td id="t21">${povRate[5]['Amount']}</td>
    </tr>
    `

    createThese = [{
        "chart": emp_dis_chart,
        "bounds": ["8%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Employment_Status"],
        "xtitle": "Employment Status",
        "order": false,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Disability Status",
        "tickFormat": ',.0f',
        "series": "Indicator_Status",
        "lineMarkers": true,
        "lineWeight": 0,
        "colors": false
    }, {
        "chart": emp_dis_chart_print,
        "bounds": ["8%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Employment_Status"],
        "xtitle": "Employment Status",
        "order": false,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Disability Status",
        "tickFormat": ',.0f',
        "series": "Indicator_Status",
        "lineMarkers": true,
        "lineWeight": 0,
        "colors": false
    }, {
        "chart": pempl_status_chart,
        "bounds": ["58%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Employment_Status"],
        "xtitle": "Employment Status",
        "order": false,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Povery Status",
        "tickFormat": ',.0f',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": false
    }, {
        "chart": empl_status_chart,
        "bounds": ["58%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Employment_Status"],
        "xtitle": "Employment Status",
        "order": false,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Povery Status",
        "tickFormat": ',.0f',
        "series": "Indicator_Status",
        "lineMarkers": false,
        "colors": false
    }]
    createChart(createThese)

    //
    // TANF
    //
    console.log("TANF")
    
    // Retrieve Elements
    var tanf_svg = dimple.newSvg("#tanf_chart", "100%", 400);
    var tanf_chart_print = dimple.newSvg("#tanf_chart_print", 750, 400);

    let tanfAttainment = dimple.filterData(data, "Indicator", "Number of TANF Recipient Workers")
    tanfAttainment = dimple.filterData(tanfAttainment, "Employment_Status", "Employed")
    let tanfAttainment2 = dimple.filterData(tanfAttainment, "Time", ["2015Q3", "2015Q4", "2016Q1", "2016Q2", "2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
    let tanfAttainment1 = dimple.filterData(tanfAttainment, "Time", ["2015Q3", "2015Q4", "2016Q1", "2015Q2"]);
    tanfAttainment = dimple.filterData(tanfAttainment, "Time", ["2016Q3", "2016Q4", "2017Q1", "2017Q2"]);

    let tanfRate = dimple.filterData(data, "Indicator", "Percentage of Workforce Training Program/Service Participants in TANF")
    tanfRate = dimple.filterData(tanfRate, "Employment_Status", "Employed")
    let tanfRate2 = dimple.filterData(tanfRate, "Time", ["2015Q3", "2015Q4", "2016Q1", "2016Q2", "2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
    let tanfRate1 = dimple.filterData(tanfRate, "Time", ["2015Q3", "2015Q4", "2016Q1", "2016Q2"]);
    tanfRate = dimple.filterData(tanfRate, "Time", ["2016Q3", "2016Q4", "2017Q1", "2017Q2"]);

    let tanfData = dimple.filterData(data, "Indicator", "Percentage of TANF Recipients among Maryland Workers")
    let tanfData2 = dimple.filterData(tanfData, "Time", ["2016Q2", "2016Q3", "2016Q4", "2017Q1", "2017Q2"]);
    let tanfData1 = dimple.filterData(tanfData, "Time", ["2015Q3", "2015Q4", "2016Q1", "2016Q2"]);
    tanfData = dimple.filterData(tanfData, "Time", ["2016Q3", "2016Q4", "2017Q1", "2017Q2"]);

    document.getElementById('tanf_table').innerHTML = `
        <tr class="HeadRow" style="background-color: white;">
          <th>Baltimore City:</th>
          <th>TANF Recipient Workers (count)</th>
          <th>Service participants in TANF (percent)</th>
          <th>Maryland workers receiving TANF (percent)</th>
        </tr>
        <tr class="HeadRow">
          <th>2015Q3 - 2016Q2</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>2015 Q3</th>
          <td id="Tanf1">${tanfAttainment1[0]['Amount']}</td>
          <td id="Ptanf1">${pcnt(tanfRate1[0]['Amount'])}</td>
          <td>-</td>
        </tr>
        <tr>
          <th>2015 Q4</th>
          <td id="Tanf2">${tanfAttainment1[1]['Amount']}</td>
          <td id="Ptanf2">${pcnt(tanfRate1[1]['Amount'])}</td>
          <td>-</td>
        </tr>
        <tr>
          <th>2016 Q1</th>
          <td id="Tanf3">${tanfAttainment1[2]['Amount']}</td>
          <td id="Ptanf3">${pcnt(tanfRate1[2]['Amount'])}</td>
          <td>-</td>
        </tr>
        <tr>
          <th>2016 Q2</th>
          <td id="Tanf4">${tanfAttainment1[3]['Amount']}</td>
          <td id="Ptanf4">${pcnt(tanfRate2[3]['Amount'])}</td>
          <td>-</td>
        </tr>
        <tr class="HeadRow">
          <th>2016Q3 - 2017Q2</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>2016 Q3</th>
          <td id="Tanf5">${tanfAttainment[0]['Amount']}</td>
          <td id="Ptanf5">${pcnt(tanfRate[0]['Amount'])}</td>
          <td id="t28">${pcnt(tanfData[0]['Amount'])}</td>
        </tr>
        <tr>
          <th>2016 Q4</th>
          <td id="Tanf6">${tanfAttainment[1]['Amount']}</td>
          <td id="Ptanf6">${pcnt(tanfRate[1]['Amount'])}</td>
          <td id="t29">${pcnt(tanfData[1]['Amount'])}</td>
        </tr>
        <tr>
          <th>2017 Q1</th>
          <td id="Tanf7">${tanfAttainment[2]['Amount']}</td>
          <td id="Ptanf7">${pcnt(tanfRate[2]['Amount'])}</td>
          <td id="t30">${pcnt(tanfData[2]['Amount'])}</td>
        </tr>
        <tr class="FootRow">
          <th>2017 Q2</th>
          <td id="Tanf8">${tanfAttainment[3]['Amount']}</td>
          <td id="Ptanf8">${pcnt(tanfRate[3]['Amount'])}</td>
          <td id="t31">${pcnt(tanfData[3]['Amount'])}</td>
        </tr>
    `

    let ordered = ["2015Q3", "2015Q4", "2016Q1", "2016Q2", "2016Q3", "2016Q4", "2017Q1", "2017Q2"]

    window.ptanf_attainment_chart = new dimple.chart(tanf_chart_print, tanfAttainment2);
    window.tanf_attainment_chart = new dimple.chart(tanf_svg, tanfAttainment2);

    window.ptanf_rate_chart = new dimple.chart(tanf_chart_print, tanfRate2);
    window.tanf_rate_chart = new dimple.chart(tanf_svg, tanfRate2);

    window.tanf_data = new dimple.chart(tanf_svg, tanfData2);
    window.ptanf_data = new dimple.chart(tanf_chart_print, tanfData2);

    createThese = [{
        "chart": window.tanf_attainment_chart,
        "bounds": ["9%", "12%", "24%", "65%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": " ",
        "order": ordered,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Workers receiving TANF benefits",
        "tickFormat": ',.0f',
        "series": "Indicator",
        "lineMarkers": true,
        "colors": false
    }, {
        "chart": ptanf_attainment_chart,
        "bounds": ["7%", "12%", "22%", "60%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": " ",
        "order": ordered,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Workers receiving TANF benefits",
        "tickFormat": ",.0f",
        "series": "Indicator",
        "lineMarkers": true,
        "colors": false
    }, {
        "chart": ptanf_rate_chart,
        "bounds": ["41%", "12%", "22%", "60%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": " ",
        "order": ordered,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Workforce/Service in TANF",
        "tickFormat": '.1%',
        "series": "Indicator",
        "lineMarkers": true,
        "colors": false
    }, {
        "chart": tanf_rate_chart,
        "bounds": ["41%", "12%", "24%", "65%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": " ",
        "order": ordered,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Workforce/Service in TANF",
        "tickFormat": '.1%',
        "series": "Indicator",
        "lineMarkers": true,
        "colors": false
    }, {
        "chart": tanf_data,
        "bounds": ["72%", "12%", "24%", "65%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": " ",
        "order": ordered,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Recipients amongst MD Workers",
        "tickFormat": '.1%',
        "series": "Indicator",
        "lineMarkers": true,
        "colors": false
    }, {
        "chart": ptanf_data,
        "bounds": ["74%", "12%", "22%", "60%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": " ",
        "order": ordered,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Recipients amongst MD Workers",
        "tickFormat": '.1%',
        "series": "Indicator",
        "lineMarkers": true,
        "colors": false
    } ]
    createChart(createThese)

    d3.select("#btn9county").on("change", function() {
        var e7 = document.getElementById("btn9county");
        var strUser7 = e7.options[e7.selectedIndex].text;
        if (strUser7 == "2016") {
            emp_dis_chart.data = DisAttainment1;
            empl_status_chart.data = povRate1;
            emp_dis_chart_print.data = DisAttainment1;
            pempl_status_chart.data = povRate1;
        }
        if (strUser7 == "2017") {
            emp_dis_chart.data = DisAttainment;
            empl_status_chart.data = povRate;
            emp_dis_chart_print.data = DisAttainment;
            pempl_status_chart.data = povRate;
        }
        if (strUser7 == "2015") {
            emp_dis_chart.data = DisAttainment2;
            empl_status_chart.data = povRate2;
            emp_dis_chart_print.data = DisAttainment2;
            pempl_status_chart.data = povRate2;
        }
        emp_dis_chart.draw(1000);
        empl_status_chart.draw(1000);
        emp_dis_chart_print.draw(1000);
        pempl_status_chart.draw(1000);
    });

    d3.select("#btn8county").on("change", function() {
        var e7 = document.getElementById("btn8county");
        var strUser7 = e7.options[e7.selectedIndex].text;
        if (strUser7 == "All") {
            console.log({tanfAttainment2, tanfRate2})
            tanf_attainment_chart.data = tanfAttainment2;
            ptanf_attainment_chart.data = tanfAttainment2;
            tanf_rate_chart.data = tanfRate2;
            ptanf_rate_chart.data = tanfRate2;

        }
        if (strUser7 == "2015Q3-2016Q2") {
            console.log({tanfAttainment1, tanfRate1})
            tanf_attainment_chart.data = tanfAttainment1;
            ptanf_attainment_chart.data = tanfAttainment1;
            tanf_rate_chart.data = tanfRate1;
            ptanf_rate_chart.data = tanfRate1;

        }
        if (strUser7 == "2016Q3-2017Q2") {
            console.log({tanfAttainment, tanfRate})
            tanf_attainment_chart.data = tanfAttainment;
            ptanf_attainment_chart.data = tanfAttainment;
            tanf_rate_chart.data = tanfRate;
            ptanf_rate_chart.data = tanfRate;
        }
            drawAll();
            tanf_attainment_chart.draw(1000,false);
            tanf_rate_chart.draw(1000);
            ptanf_attainment_chart.draw(1000);
            ptanf_rate_chart.draw(1000);
    });

    if (!emplStatusCounties.includes(CountyName)) {
        console.log('Employment_Status');
        console.log(CountyName)
        //Create Tables
        let empl_data = CountyName == 'Maryland' ? data : await d3.dsv(",", "./data/emp18/emp_"+CountyName4.replace(/[ ]/g,'')+".csv")
        empl_data.unshift(["Employment Status Amongst Maryland Workers","","",2016,2017,2018])
        console.log('EMP',  empl_data)
        //snap_data = d3.csv(await url )
        /// console.log('Snap url', snap_data)
        var container = d3.select("#empl_status_table")
        console.log(container)
        var rows = container.selectAll('tr').data(empl_data).enter().append('tr')
        var cells = rows.selectAll('td').data( row => { 
          return  Object.keys(row).map( column => { 
            return { column: column, value: row[column] }
          })
        }).enter().append('td').text( d => { return d.value })

        var empl_status_svg = dimple.newSvg("#empl_status_chart", "100%", 500);
        var empl_status_chart_print = dimple.newSvg("#empl_status_chart_print", 750, 400);
        let workerDatag1 = dimple.filterData(data, "Indicator", "Work Experience by Gender")
        let workerDatag2 = dimple.filterData(workerDatag1, "Time", "2016");
        let workerDatag3 = dimple.filterData(workerDatag1, "Time", "2017");
        workerDatag1 = dimple.filterData(workerDatag1, "Time", "2015");
        //education
        let workerDatae1 = dimple.filterData(data, "Indicator", "Work Experience by Education")
        let workerDatae2 = dimple.filterData(workerDatae1, "Time", "2016");
        let workerDatae3 = dimple.filterData(workerDatae1, "Time", "2017");
        workerDatae1 = dimple.filterData(workerDatae1, "Time", "2015");
        //race
        let workerDatar1 = dimple.filterData(data, "Indicator", "Work Experience by Race")
        let workerDatar2 = dimple.filterData(workerDatar1, "Time", "2016");
        let workerDatar3 = dimple.filterData(workerDatar1, "Time", "2017");
        workerDatar1 = dimple.filterData(workerDatar1, "Time", "2015");
        //poverty
        let workerDatap1 = dimple.filterData(data, "Indicator", "Work Experience by Poverty")
        let workerDatap2 = dimple.filterData(workerDatap1, "Time", "2016");
        let workerDatap3 = dimple.filterData(workerDatap1, "Time", "2017");
        workerDatap1 = dimple.filterData(workerDatap1, "Time", "2015");

        window.work_exp_pov_chart = new dimple.chart(empl_status_svg,workerDatag3);
        window.pwork_exp_pov_chart = new dimple.chart(empl_status_chart_print,workerDatag3);


        createThese = [{
            "chart": window.work_exp_pov_chart,
            "bounds": ["11%", "12%", "80%", "60%"],
            "categoryAxis": ["x", "Indicator_Status"],
            "xtitle": " ",
            "order": ["N/A", "No School", "Nursery", "Kindergarten", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12", "GED", "Highschool", "Professional", "Some College", "Associate", "Bachlor's", "Master's", "Doctoral", "1 or More", "0-25", "26-50", "51-75", "76-100", "100-500", "501"],
            "measureAxis": ["y", "Amount"],
            "ytitle": "Number of Workers",
            "tickFormat": ',.0f',
            "series": "Employment_Status",
            "lineMarkers": true,
            "colors": false,
            "legend": ["26%", "5%", "50%", "70%", "right"]
        }, {
            "chart": pwork_exp_pov_chart,
            "bounds": ["15%", "12%", "65%", "50%"],
            "categoryAxis": ["x", "Indicator_Status"],
            "xtitle": " ",
            "order": ["N/A", "No School", "Nursery", "Kindergarten", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12", "GED", "Highschool", "Professional", "Some College", "Associate", "Bachlor's", "Master's", "Doctoral", "1 or More", "0-25", "26-50", "51-75", "76-100", "100-500", "501"],
            "measureAxis": ["y", "Amount"],
            "ytitle": "Number of Workers",
            "tickFormat": ",.0f",
            "series": "Employment_Status",
            "lineMarkers": true,
            "colors": false,
            "legend": ["16%", "90%", "50%", "70%", "right"]
        } ]
        createChart(createThese)

        window.WorkerChart = function() {
            var e7 = document.getElementById("btn10county");
            var strUser7 = e7.options[e7.selectedIndex].text;
            var e8 = document.getElementById("btn11county");
            var strUser8 = e8.options[e8.selectedIndex].text;
            if (strUser7 == "2015") {
                if (strUser8 == "Gender") {
                    work_exp_pov_chart.data = workerDatag1;
                } else if (strUser8 == "Race") {
                    work_exp_pov_chart.data = workerDatar1;
                } else if (strUser8 == "Education") {
                    work_exp_pov_chart.data = workerDatae1;
                } else if (strUser8 == "Poverty") {
                    work_exp_pov_chart.data = workerDatap1;
                }
                console.log('fuck', strUser7, strUser8 )
                pwork_exp_pov_chart.data = work_exp_pov_chart.data;
            }
            if (strUser7 == "2016") {
                if (strUser8 == "Gender") {
                    work_exp_pov_chart.data = workerDatag2;
                } else if (strUser8 == "Race") {
                    work_exp_pov_chart.data = workerDatar2;
                } else if (strUser8 == "Education") {
                    work_exp_pov_chart.data = workerDatae2;
                } else if (strUser8 == "Poverty") {
                    work_exp_pov_chart.data = workerDatap2;
                }
            }
            if (strUser7 == "2017") {
                if (strUser8 == "Gender") {
                    work_exp_pov_chart.data = workerDatag3;
                } else if (strUser8 == "Race") {
                    work_exp_pov_chart.data = workerDatar3;
                } else if (strUser8 == "Education") {
                    work_exp_pov_chart.data = workerDatae3;
                } else if (strUser8 == "Poverty") {
                    work_exp_pov_chart.data = workerDatap3;
                }
            }
            drawAll();
            work_exp_pov_chart.draw(1000);
            pwork_exp_pov_chart.draw(1000);
        }
        d3.select("#btn10county").on("change", WorkerChart );
        d3.select("#btn11county").on("change", WorkerChart );
    }

    // 
    // Snap
    // 
    console.log('SNAP')

    //Create Tables
    url = "./data/snap/snap_"+CountyName4.replace(/[ ]/g,'')+".csv"
    console.log(url)
    let snap_data = await d3.dsv(",", url)
    snap_data.unshift(["SNAP Recipient Workers","",2016,2017,2018])
    //snap_data = d3.csv(await url )
    /// console.log('Snap url', snap_data)
    var container = d3.select("#snap_table")
	var rows = container.selectAll('tr').data(snap_data).enter().append('tr')
	var cells = rows.selectAll('td').data( row => { 
	  return  Object.keys(row).map( column => { 
	    return { column: column, value: row[column] }
	  })
    }).enter().append('td').text( d => { return d.value })

    
    // Retrieve Elements
    var snap_chart_svg = dimple.newSvg("#snap_chart", "100%", 400);
    var tanf_attainment_svg = dimple.newSvg("#snap_chart_print", 750, 400);

    // Filter Data
    let snap_Data1 = dimple.filterData(data, "Indicator", "SNAP Recipient Workers")
    let snap_Datap1 = dimple.filterData(data, "Indicator", "SNAP Recipient Workers by Percentage")
 
    // Config Chart
    window.snap_chart = new dimple.chart(snap_chart_svg,snap_Data1);
    window.snap_chart2 = new dimple.chart(snap_chart_svg,snap_Datap1);
    window.psnap_chart = new dimple.chart(tanf_attainment_svg,snap_Data1);
    window.psnap_chart2 = new dimple.chart(tanf_attainment_svg,snap_Datap1);

    createThese = [{
        "chart": snap_chart,
        "bounds": ["11%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Time"],
        "xtitle": "Year",
        "order": false,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Amount",
        "tickFormat": ',',
        "series": "Indicator",
        "lineMarkers": false,
        "colors": false
    }, {
        "chart": snap_chart2,
        "bounds": ["58%", "12%", "35%", "65%"],
        "categoryAxis": ["x", "Year"],
        "xtitle": "Year",
        "order": false,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Amount",
        "tickFormat": '.2%',
        "series": "Indicator",
        "lineMarkers": false,
        "colors": false
    }, {
        "chart": psnap_chart,
        "bounds": ["14%", "12%", "32%", 250],
        "categoryAxis": ["x", "Year"],
        "xtitle": "Year",
        "order": false,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Amount",
        "tickFormat": ',',
        "series": "Indicator",
        "lineMarkers": false,
        "colors": false
    }, {
        "chart": psnap_chart2,
        "bounds": ["62%", "12%", "32%", 300],
        "categoryAxis": ["x", "Year"],
        "xtitle": "Year",
        "order": false,
        "measureAxis": ["y", "Amount"],
        "ytitle": "Amount",
        "tickFormat": '.2%',
        "series": "Indicator",
        "lineMarkers": false,
        "colors": false
    }, ]
    createChart(createThese)

    var togNum = 1;
    var togNum1 = 1;
    d3.select("#btn5county").on("click", function() {
        if (togNum == 1) {
            edLegend.shapes.style("visibility", "hidden");
            togNum = 0;
        } else if (togNum == 0) {
            edLegend.shapes.style("visibility", "visible");
            togNum = 1;
        }
    });
    d3.select("#btn6county").on("click", function() {
        if (togNum1 == 1) {
            togNum1 = 0;
            qLegend.shapes.style("visibility", "hidden");
        } else if (togNum1 == 0) {
            togNum1 = 1;
            qLegend.shapes.style("visibility", "visible");
        }
    })

}
)()


CountyName2 == 'Maryland' ? '' : window.drawAll = function() {
    pop_chart.draw(0, true);
    mhhi_chart.draw(0, true);
    empl_edu_chart.draw(0, true);
    empl_edu_gend_chart.draw(0, true);
    empl_race_ethn_chart.draw(0, true);
    chart5.draw(0, true);
    window.empl_vet_chart.draw(0, true);
    emp_dis_chart.draw(0, true);
    empl_status_chart.draw(0, true);
    tanf_attainment_chart.draw(0, true);
    tanf_rate_chart.draw(0, true);
    tanf_data.draw(0, true);
    if(!emplStatusCounties.includes(CountyName) ){
      window.work_exp_pov_chart.draw(0, true)  
      pwork_exp_pov_chart.draw(0, true) 
    }
    snap_chart.draw(0, true);
    snap_chart2.draw(0, true);
    ppop_chart.draw(0, true);
    mhhi_chart_print.draw(0, true);
    pempl_edu_chart.draw(0, true);
    pempl_edu_gend_chart.draw(0, true);
    pempl_race_ethn_chart.draw(0, true);
    pchart5.draw(0, true);
    empl_vet_print_chart.draw(0, true);
    emp_dis_chart_print.draw(0, true);
    pempl_status_chart.draw(0, true);
    ptanf_attainment_chart.draw(0, true);
    ptanf_rate_chart.draw(0, true);
    ptanf_data.draw(0, true);
    psnap_chart.draw(0, true);
    psnap_chart2.draw(0, true);
}

// Education and Gender

window.chartChange = function() {
    console.log(this)
    var strUser3 = this.options[this.selectedIndex].text;
    console.log(strUser3)
    if (strUser3 == "2017") {
        empl_edu_chart.data = EduAttainment;
        empl_edu_gend_chart.data = unempByGender;
        empl_race_ethn_chart.data = raceData;
        chart5.data = ethData;
        empl_vet_chart.data = vetData;
        pempl_edu_chart.data = EduAttainment;
        pempl_edu_gend_chart.data = unempByGender;
        pempl_race_ethn_chart.data = raceData;
        pchart5.data = ethData;
        empl_vet_print_chart.data = vetData;
    }
    if (strUser3 == "2016") {
        empl_edu_chart.data = EduAttainment1;
        empl_edu_gend_chart.data = unempByGender1;
        empl_race_ethn_chart.data = raceData1;
        chart5.data = ethData1;
        empl_vet_chart.data = vetData1;
        pempl_edu_chart.data = EduAttainment1;
        pempl_edu_gend_chart.data = unempByGender1;
        pempl_race_ethn_chart.data = raceData1;
        pchart5.data = ethData1;
        empl_vet_print_chart.data = vetData1;
    }
    if (strUser3 == "2015") {
        empl_edu_chart.data = EduAttainment2;
        empl_edu_gend_chart.data = unempByGender2;
        empl_race_ethn_chart.data = raceData2;
        chart5.data = ethData2;
        empl_vet_chart.data = vetData2;
        pempl_edu_chart.data = EduAttainment2;
        pempl_edu_gend_chart.data = unempByGender2;
        pempl_race_ethn_chart.data = raceData2;
        pchart5.data = ethData2;
        empl_vet_print_chart.data = vetData2;
    }
    //edSeries.lineWeight = 0;
    empl_edu_chart.draw(1000);
    empl_edu_gend_chart.draw(1000);
    empl_race_ethn_chart.draw(1000);
    chart5.draw(1000);
    empl_vet_chart.draw(1000);

    pempl_edu_chart.draw(1000);
    pempl_edu_gend_chart.draw(1000);
    pempl_race_ethn_chart.draw(1000);
    pchart5.draw(1000);
    empl_vet_print_chart.draw(1000);

}


var whichChart = 'pop';
let prints = ["pop_chart_print", "empl_edu_gend_chart_print", "empl_race_ethn_chart_print", "empl_vet_chart_print", "disabl_pov_chart_print", "tanf_chart_print", "empl_status_chart_print", "snap_chart_print", "Landing"]
let charts = ["pop_chart", "empl_edu_gend_chart", "empl_race_ethn_chart", "empl_vet_chart", "disabl_pov_chart", "tanf_chart", "empl_status_chart", "snap_chart", "Landing"]

window.collapsables = ["pop", "empl_edu_gend", "empl_race_ethn", "empl_vet", "disabl_pov", "tanf", "snap", "empl_status"]

window.onresize = function() { drawAll(); }

window.hideall = function(idArr) { idArr.forEach(el=> document.getElementById(el).style.display = "none"  ) }
window.showall = function(idArr) { idArr.forEach(el=> document.getElementById(el).style.display = "inline") }

window.hidePrint = function() {  hideall(prints) }
window.hideChart = function() {  hideall(charts) }
window.showPrint = function() {  showall(prints) }
window.showChart = function() {  showall(charts) }

//
// BUTTONS
//

CountyName2 == 'Maryland' ? '' : window.onload = function() {
    document.querySelectorAll('[data-lbl]').forEach( el => {
		el.removeAttribute("disabled");
        el.addEventListener("click", function(){
            console.log('Clicked', el.dataset.lbl, el);
            whichChart = el.dataset.lbl;
            hideall(collapsables)
            document.getElementById(el.dataset.lbl).style.display = "inline";
            drawAll();
            hidePrint();
        })   
         
    })
}

window.printAll = function() {
    let showThese = collapsables
    showAll(showThese);
    showPrint();
    drawAll();
    window.print();
}

window.onafterprint = function() {
    let hideThese = ["pop", "empl_edu_gend", "empl_race_ethn", "empl_vet", "disabl_pov_chart", "tanf", "empl_status", "snap"]
    hideall(hideThese);
    showChart();
    showAll(["Landing"])
}

window.printClick = function() {
    if (whichChart == 'pop') {
        pop();
        hideall(["pop_chart"]);
        showAll(["pop_chart_print"]);
    } else if (whichChart == "educhart") {
        educhart();
        hideall(["empl_edu_gend_chart"]);
        showAll(["empl_edu_gend_chart_print"]);
    } else if (whichChart == 'racechart') {
        racechart();
        hideall(["empl_race_ethn_chart"]);
        showAll(["empl_race_ethn_chart_print"]);
    } else if (whichChart == "vetchart") {
        vetchart();
        hideall(["empl_vet_chart"]);
        showAll(["empl_vet_chart_print"]);
    } else if (whichChart == "disbilities") {
        dischart();
        hideall(["disabl_pov_chart"]);
        showAll(["disabl_pov_chart_print"]);
    } else if (whichChart == "tanf") {
        tanf();
        hideall(["tanf_chart"]);
        showAll(["tanf_chart_print"]);
    } else if (whichChart == "empl_status") {
        empl_status();
        hideall(["empl_status_chart"]);
        showAll(["empl_status_chart_print"]);
    } else if (whichChart == "tanf_attainment") {
        tanf_attainment();
        hideall(["snap_chart_print"]);
        showAll(["snap_chart"]);
    }
    drawAll();
    window.print();
}
