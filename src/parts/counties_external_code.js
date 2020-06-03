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
    let pcnt = (d) => {
      if(d==undefined | d=='--'){ return '--'} 
      return d.slice( d.length -1 ) != '%' ? (d3.format(".1%")(d*1) ) : (d3.format(".1%")(Number(d.slice(0, -1)*.01 ) ) ) 
    }
    let pcnt2 = (d) => { 
      if(d==undefined | d=='--'){ return '--'}
      return d.slice( d.length -1 ) != '%' ? (d3.format(".1%")(d*.01) ) : (d3.format(".1%")(Number(d.slice(0, -1)*.01 ) ) ) 
    }
    
    // Retrieve Data
    let url =  CountyName2 == 'Maryland' ? './data/MarylandData_5-5-20.csv' : "./data/CountyData.csv"
    console.log(url)
    let data = await d3.csv(url)
    CountyName2 == 'Maryland' ? '' : data = dimple.filterData(data, "Location", CountyName2)

    //
    // Population and Median Household Income
    //

    // Filter Data
    let pop = dimple.filterData(data, "Time", ["2015", "2016", "2017", "2018", "2019"]);
    let mhhi = dimple.filterData(pop, "Indicator", "Median Household Income")
    pop = dimple.filterData(pop, "Indicator", "Total Population")
    console.log('Population and Median Household Income', pop, mhhi);

  //window.displayIndustryMetricsTable = (wdatax, hiredatax, avgdatax, netdatax, turndatax) => {
    console.log('Population and Median Household Income', pop, mhhi);
    let find = (objArr, indx) => {
      let returnThis =  objArr.filter( obj => { return obj['Time'] == ['2015','2016','2017','2018'][indx]} )[0]
      returnThis = returnThis == undefined ? '--' : returnThis['Amount']
      console.log('RETURNING THIS', returnThis)
      return returnThis
    }

    // Display Table
    document.getElementById('pop_table').innerHTML = `
    <tr class="HeadRow" style="background-color: white;">
      <th>${CountyName}:</th>
      <th>2015</th>
      <th>2016</th>
      <th>2017</th>
      <th>2018</th>
    </tr>
    <tr>
      <th>Population</th>
      <td>${find(pop,0)}</td>
      <td>${find(pop,1)}</td>
      <td>${find(pop,2)}</td>
      <td>${find(pop,3)}</td>
    </tr>
    <tr class="FootRow">
      <th>Median Household Income</th>
      <td>$${find(mhhi,0)}</td>
      <td>$${find(mhhi,1)}</td>
      <td>$${find(mhhi,2)}</td>
      <td>$${find(mhhi,3)}</td>
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
    let EduAttainment = dimple.filterData(data, "Indicator_Status", ["Less than Highschool", "Highschool", "Some College", "Bachelor's or Higher"])
    EduAttainment = dimple.filterData(EduAttainment, "Employment_Status", ["Unemployed", "NIL", "Employed"])
    window.EduAttainment18 = dimple.filterData(EduAttainment, "Time", "2018");
    window.EduAttainment17 = dimple.filterData(EduAttainment, "Time", "2017");
    window.EduAttainment16 = dimple.filterData(EduAttainment, "Time", "2016");
    window.EduAttainment15 = dimple.filterData(EduAttainment, "Time", "2015");

    let unempByGender = dimple.filterData(data, "Indicator_Status", ["Male", "Female"])
    unempByGender = dimple.filterData(unempByGender, "Indicator", "Unemployment By Gender")
    window.unempByGender18 = dimple.filterData(unempByGender, "Time", "2018")
    window.unempByGender17 = dimple.filterData(unempByGender, "Time", "2017")
    window.unempByGender16 = dimple.filterData(unempByGender, "Time", "2016")
    window.unempByGender15 = dimple.filterData(unempByGender, "Time", "2015")

    // Create Tables
    let mdNoTD = CountyName == 'Maryland' ? '' : `
      <td></td>
      <td></td>
    `

    let mdunempByGenderlbl = CountyName == 'Maryland' ? '' : `
      <th>Male</th> 
      <th>Female</th> 
    `
    let mdunempByGender18 = CountyName == 'Maryland' ? '' : `
      <td>${unempByGender18[0]['Amount']}</td> 
      <td>${unempByGender18[1]['Amount']}</td> 
    `
    let mdunempByGender17 = CountyName == 'Maryland' ? '' : `
      <td>${unempByGender17[0]['Amount']}</td> 
      <td>${unempByGender17[1]['Amount']}</td> 
    `
    let mdunempByGender16 = CountyName == 'Maryland' ? '' : `
      <td>${unempByGender16[0]['Amount']}</td> 
      <td>${unempByGender16[1]['Amount']}</td> 
    `
    let mdunempByGender15 = CountyName == 'Maryland' ? '' : `
      <td>${unempByGender15[0]['Amount']}</td> 
      <td>${unempByGender15[1]['Amount']}</td> 
    `


    document.getElementById('empl_edu_gend_table').innerHTML = `
    <tr class="HeadRow" style="background-color: white;">
      <th>${CountyName}: </th>
      <th>Less than High School Graduate</th>
      <th>High School Graduate (Includes Equivalency)</th>
      <th>Some College or Associates</th>
      <th>Bachelor's Degree or Higher</th>
      ${ CountyName == 'Maryland' ? '' : '<th></th>'}
      ${mdunempByGenderlbl}
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2018</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      ${ CountyName == 'Maryland' ? '' : '<th></th>'}
      ${mdNoTD}
    </tr>
    <tr>
      <th>Employed</th>
      <td>${EduAttainment18[0]['Amount']}</td>
      <td>${EduAttainment18[1]['Amount']}</td>
      <td>${EduAttainment18[2]['Amount']}</td>
      <td>${EduAttainment18[3]['Amount']}</td>
      ${ CountyName == 'Maryland' ? '' : `<th rowspan="3" style="border-style: solid; border-color: #5281B7;">Unemployment Rate</th>`}
      ${mdNoTD}
    </tr>
    <tr>
      <th>Unemployed</th>
      <td>${EduAttainment18[4]['Amount']}</td>
      <td>${EduAttainment18[5]['Amount']}</td>
      <td>${EduAttainment18[6]['Amount']}</td>
      <td>${EduAttainment18[7]['Amount']}</td>
      ${mdunempByGender18}
    </tr>
    <tr>
      <th>Not In Labor Force (NIL)</th>
      <td>${EduAttainment18[8]['Amount']}</td>
      <td>${EduAttainment18[9]['Amount']}</td>
      <td>${EduAttainment18[10]['Amount']}</td>
      <td>${EduAttainment18[11]['Amount']}</td>
      ${mdNoTD}
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2017</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      ${ CountyName == 'Maryland' ? '' : '<th></th>'}
      ${mdNoTD}
    </tr>
    <tr>
      <th>Employed</th>
      <td>${EduAttainment17[0]['Amount']}</td>
      <td>${EduAttainment17[1]['Amount']}</td>
      <td>${EduAttainment17[2]['Amount']}</td>
      <td>${EduAttainment17[3]['Amount']}</td>
      ${ CountyName == 'Maryland' ? '' : `<th rowspan="3" style="border-style: solid; border-color: #5281B7;">Unemployment Rate</th>`}
      ${mdNoTD}
    </tr>
    <tr>
      <th>Unemployed</th>
      <td>${EduAttainment17[4]['Amount']}</td>
      <td>${EduAttainment17[5]['Amount']}</td>
      <td>${EduAttainment17[6]['Amount']}</td>
      <td>${EduAttainment17[7]['Amount']}</td>
      ${mdunempByGender17}
    </tr>
    <tr>
      <th>Not In Labor Force (NIL)</th>
      <td>${EduAttainment17[8]['Amount']}</td>
      <td>${EduAttainment17[9]['Amount']}</td>
      <td>${EduAttainment17[10]['Amount']}</td>
      <td>${EduAttainment17[11]['Amount']}</td>
      ${mdNoTD}
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2016: </th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      ${ CountyName == 'Maryland' ? '' : '<th></th>'}
      ${mdNoTD}
    </tr>
    <tr>
      <th>Employed</th>
      <td>${EduAttainment16[0]['Amount']}</td>
      <td>${EduAttainment16[1]['Amount']}</td>
      <td>${EduAttainment16[2]['Amount']}</td>
      <td>${EduAttainment16[3]['Amount']}</td>
      ${ CountyName == 'Maryland' ? '' : `<th rowspan="3" style="border-style: solid; border-color: #5281B7;">Unemployment Rate</th>`}
      ${mdNoTD}
    </tr>
    <tr>
      <th>Unemployed</th>
      <td>${EduAttainment16[4]['Amount']}</td>
      <td>${EduAttainment16[5]['Amount']}</td>
      <td>${EduAttainment16[6]['Amount']}</td>
      <td>${EduAttainment16[7]['Amount']}</td>
      ${mdunempByGender16}
    </tr>
    <tr>
      <th>Not In Labor Force (NIL)</th>
      <td>${EduAttainment16[8]['Amount']}</td>
      <td>${EduAttainment16[9]['Amount']}</td>
      <td>${EduAttainment16[10]['Amount']}</td>
      <td>${EduAttainment16[11]['Amount']}</td>
      ${ CountyName == 'Maryland' ? '' : '<th></th>'}
      ${mdNoTD}
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2015: </th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      ${ CountyName == 'Maryland' ? '' : '<th></th>'}
      ${mdNoTD}
    </tr>
    <tr>
      <th>Employed</th>
      <td>${EduAttainment15[0]['Amount']}</td>
      <td>${EduAttainment15[1]['Amount']}</td>
      <td>${EduAttainment15[2]['Amount']}</td>
      <td>${EduAttainment15[3]['Amount']}</td>
      ${ CountyName == 'Maryland' ? '' : `<th rowspan="3" style="border-style: solid; border-color: #5281B7;">Unemployment Rate</th>`}
      ${mdNoTD}
    </tr>
    <tr>
      <th>Unemployed</th>
      <td>${EduAttainment15[4]['Amount']}</td>
      <td>${EduAttainment15[5]['Amount']}</td>
      <td>${EduAttainment15[6]['Amount']}</td>
      <td>${EduAttainment15[7]['Amount']}</td>
      ${mdunempByGender15}
    </tr>
    <tr>
      <th>Not In Labor Force (NIL)</th>
      <td>${EduAttainment15[8]['Amount']}</td>
      <td>${EduAttainment15[9]['Amount']}</td>
      <td>${EduAttainment15[10]['Amount']}</td>
      <td>${EduAttainment15[11]['Amount']}</td>
      ${ CountyName == 'Maryland' ? '' : '<th></th>'}
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
    window.raceData15 = dimple.filterData(raceData, "Time", "2015")
    window.raceData16 = dimple.filterData(raceData, "Time", "2016")
    window.raceData17 = dimple.filterData(raceData, "Time", "2017")
    window.raceData18 = dimple.filterData(raceData, "Time", "2018")

    window.ethData = dimple.filterData(data, "Indicator", "Unemployment By Race")
    ethData = dimple.filterData(ethData, "Indicator_Status", ["White", "Hispanic"]);
    window.ethData15 = dimple.filterData(ethData, "Time", "2015")
    window.ethData16 = dimple.filterData(ethData, "Time", "2016")
    window.ethData17 = dimple.filterData(ethData, "Time", "2017")
    window.ethData18 = dimple.filterData(ethData, "Time", "2018")

    // Config Chart
    window.empl_race_ethn_chart = new dimple.chart(empl_race_ethn_svg,raceData);
    window.chart5 = new dimple.chart(empl_race_ethn_svg,ethData);
    window.pchart5 = new dimple.chart(empl_race_ethn_chart_print,ethData);
    window.pempl_race_ethn_chart = new dimple.chart(empl_race_ethn_chart_print,raceData);

    document.getElementById('empl_race_ethn_table').innerHTML = `
        <tr class="HeadRow" style="background-color: white;">
          <th>${CountyName}:</th>
          <th>White</th>
          <th>Black</th>
          <th>Asian</th>
          <th>Hispanic or Latino <br> (Any Race)</th>
        </tr>
        <tr class="HeadRow">
          <th>2018</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr >
          <th>Unemployment Rate</th>
          <td>${pcnt2(raceData18[0]['Amount'])}</td>
          <td>${pcnt2(raceData18[1]['Amount'])}</td>
          <td>${pcnt2(raceData18[2]['Amount'])}</td>
          <td>${pcnt2(raceData18[3]['Amount'])}</td>
        </tr>
        <tr class="HeadRow">
          <th>2017</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr >
          <th>Unemployment Rate</th>
          <td>${pcnt2(raceData17[0]['Amount'])}</td>
          <td>${pcnt2(raceData17[1]['Amount'])}</td>
          <td>${pcnt2(raceData17[2]['Amount'])}</td>
          <td>${pcnt2(raceData17[3]['Amount'])}</td>
        </tr>
        <tr class="HeadRow">
          <th>2016
          </th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr class="FootRow">
          <th>Unemployment Rate</th>
          <td>${pcnt2(raceData16[0]['Amount'])}</td>
          <td>${pcnt2(raceData16[1]['Amount'])}</td>
          <td>${pcnt2(raceData16[2]['Amount'])}</td>
          <td>${pcnt2(raceData16[3]['Amount'])}</td>
        </tr>
        <tr class="HeadRow">
          <th>2015
          </th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr class="FootRow">
          <th>Unemployment Rate</th>
          <td>${pcnt2(raceData15[0]['Amount'])}</td>
          <td>${pcnt2(raceData15[1]['Amount'])}</td>
          <td>${pcnt2(raceData15[2]['Amount'])}</td>
          <td>${pcnt2(raceData15[3]['Amount'])}</td>
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
    let vetData = dimple.filterData(data, "Indicator", "Unemployment By Veteran Status")
    window.vetData15 = dimple.filterData(vetData, "Time", "2015");
    window.vetData16 = dimple.filterData(vetData, "Time", "2016");
    window.vetData17 = dimple.filterData(vetData, "Time", "2017")
    window.vetData18 = dimple.filterData(vetData, "Time", "2018");

    // Create Chart
    window.empl_vet_chart = new dimple.chart(empl_vet_svg,vetData);
    window.empl_vet_print_chart = new dimple.chart(empl_vet_print_svg,vetData);

    document.getElementById('empl_vet_table').innerHTML = `
        <tr class="HeadRow" style="background-color: white;">
          <th>${CountyName}:</th>
          <th>Veteran</th>
          <th>Non Veteran</th>
        </tr>
        <tr class="HeadRow">
          <th>2018</th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>Unemployment Rate</th>
          <td>${pcnt2(vetData18[0]['Amount'])}</td>
          <td>${pcnt2(vetData18[1]['Amount'])}</td>
        </tr>
        <tr class="HeadRow">
          <th>2017</th>
          <th></th>
          <th></th>
        </tr>
        <tr class="FootRow">
          <th>Unemployment Rate</th>
          <td>${pcnt2(vetData17[0]['Amount'])}</td>
          <td>${pcnt2(vetData17[1]['Amount'])}</td>
        </tr>
        <tr class="HeadRow">
          <th>2016</th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>Unemployment Rate</th>
          <td>${pcnt2(vetData16[0]['Amount'])}</td>
          <td>${pcnt2(vetData16[1]['Amount'])}</td>
        </tr>
        <tr class="HeadRow">
          <th>2015</th>
          <th></th>
          <th></th>
        </tr>
        <tr class="FootRow">
          <th>Unemployment Rate</th>
          <td>${pcnt2(vetData15[0]['Amount'])}</td>
          <td>${pcnt2(vetData15[1]['Amount'])}</td>
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
    
    d3.select("#year_dd").on("change", chartChange);
    d3.select("#emplStatus_categ_dd").on("change", chartChange);
    
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
    window.povRate18 = dimple.filterData(povRate, "Time", "2018");
    window.povRate17 = dimple.filterData(povRate, "Time", "2017");
    window.povRate16 = dimple.filterData(povRate, "Time", "2016");
    window.povRate15 = dimple.filterData(povRate, "Time", "2015");

    let disAttainment1 = dimple.filterData(data, "Indicator", "Employment Status By Disability Status")
    disAttainment1 = dimple.filterData(disAttainment1, "Employment_Status", ["Unemployed", "Labor Force", "Employed"])
    window.disAttainment18 = dimple.filterData(disAttainment1, "Time", "2018");
    window.disAttainment17 = dimple.filterData(disAttainment1, "Time", "2017");
    window.disAttainment16 = dimple.filterData(disAttainment1, "Time", "2016");
    window.disAttainment15 = dimple.filterData(disAttainment1, "Time", "2008-2011");

    // Config Chart
    window.pempl_status_chart = new dimple.chart(disabl_pov_chart_print,povRate);
    window.empl_status_chart = new dimple.chart(disabl_pov_svg,povRate);

    window.emp_dis_chart_print = new dimple.chart(disabl_pov_chart_print,disAttainment18);
    window.emp_dis_chart = new dimple.chart(disabl_pov_svg,disAttainment18);

    console.log({disAttainment18})

    document.getElementById('disabl_pov_table').innerHTML = `
    <tr class="HeadRow" style="background-color: white;">
      <th>${CountyName}: </th>
      <th>Disabled Individuals</th>
      <th>Individuals without Disabilities</th>
      <th></th>
      <th>Income in the past 12 months below poverty level</th>
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2018</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <th>Labor Force</th>
      <td>${!disAttainment18[4]?'--':disAttainment18[4]['Amount']}</td>
      <td>${!disAttainment18[5]?'--':disAttainment18[5]['Amount']}</td>
      <td></td>
      <td>${povRate18[1]['Amount']}</td>
    </tr>
    <tr>
      <th>Employed</th>
      <td>${!disAttainment18[0]?'--':disAttainment18[0]['Amount']}</td>
      <td>${!disAttainment18[1]?'--':disAttainment18[1]['Amount']}</td>
      <td></td>
      <td>${povRate18[3]['Amount']}</td>
    </tr>
    <tr>
      <th>Unemployed</th>
      <td>${disAttainment18[2]['Amount']}</td>
      <td>${disAttainment18[3]['Amount']}</td>
      <td ></td>
      <td>${povRate18[5]['Amount']}</td>
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2017</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <th>Labor Force</th>
      <td>${disAttainment17[4]['Amount']}</td>
      <td>${disAttainment17[5]['Amount']}</td>
      <td></td>
      <td>${povRate17[1]['Amount']}</td>
    </tr>
    <tr>
      <th>Employed</th>
      <td>${disAttainment17[0]['Amount']}</td>
      <td>${disAttainment17[1]['Amount']}</td>
      <td></td>
      <td>${povRate17[3]['Amount']}</td>
    </tr>
    <tr class="FootRow">
      <th>Unemployed</th>
      <td>${disAttainment17[2]['Amount']}</td>
      <td>${disAttainment17[3]['Amount']}</td>
      <td></td>
      <td>${povRate17[5]['Amount']}</td>
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2016</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <th>Labor Force</th>
      <td>${disAttainment16[4]['Amount']}</td>
      <td>${disAttainment16[5]['Amount']}</td>
      <td></td>
      <td>${povRate16[1]['Amount']}</td>
    </tr>
    <tr>
      <th>Employed</th>
      <td>${disAttainment16[0]['Amount']}</td>
      <td>${disAttainment16[1]['Amount']}</td>
      <td></td>
      <td>${povRate16[3]['Amount']}</td>
    </tr>
    <tr>
      <th>Unemployed</th>
      <td>${disAttainment16[2]['Amount']}</td>
      <td>${disAttainment16[3]['Amount']}</td>
      <td ></td>
      <td>${povRate16[5]['Amount']}</td>
    </tr>
    <tr class="HeadRow" style="background-color: white;">
      <th>2015</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <th>Labor Force</th>
      <td>${!disAttainment15[4]?'--':disAttainment15[4]['Amount']}</td>
      <td>${!disAttainment15[5]?'--':disAttainment15[5]['Amount']}</td>
      <td></td>
      <td>${!povRate15[1]?'--':povRate15[1]['Amount']}</td>
    </tr>
    <tr>
      <th>Employed</th>
      <td>${!disAttainment15[0]?'--':disAttainment15[0]['Amount']}</td>
      <td>${!disAttainment15[1]?'--':disAttainment15[1]['Amount']}</td>
      <td></td>
      <td>${!povRate15[3]?'--':povRate15[3]['Amount']}</td>
    </tr>
    <tr>
      <th>Unemployed</th>
      <td>${!disAttainment15[2]?'--':disAttainment15[2]['Amount']}</td>
      <td>${!disAttainment15[3]?'--':disAttainment15[3]['Amount']}</td>
      <td ></td>
      <td>${!povRate15[5]?'--':povRate15[5]['Amount']}</td>
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

    let tanfAttainment = dimple.filterData(data, "Indicator", "TANF Workers")
    window.tanfAttainment15 = dimple.filterData(tanfAttainment, "Time", ["2015Q1", "2015Q2", "2015Q3", "2015Q4"]);
    window.tanfAttainment16 = dimple.filterData(tanfAttainment, "Time", ["2016Q1", "2016Q2", "2016Q3", "2016Q4"]);
    window.tanfAttainment17 = dimple.filterData(tanfAttainment, "Time", ["2017Q1", "2017Q2", "2017Q3", "2017Q4"]);
    window.tanfAttainment18 = dimple.filterData(tanfAttainment, "Time", ["2018Q1", "2018Q2", "2018Q3", "2018Q4"]);
    window.tanfAttainment19 = dimple.filterData(tanfAttainment, "Time", ["2019Q1", "2019Q2"]);

    let tanfPerc = dimple.filterData(data, "Indicator", "Percent of Workers in TANF (%)")
    window.tanfPerc15 = dimple.filterData(tanfPerc, "Time", ["2015Q1", "2015Q2", "2015Q3", "2015Q4"]);
    window.tanfPerc16 = dimple.filterData(tanfPerc, "Time", ["2016Q1", "2016Q2", "2016Q3", "2016Q4"]);
    window.tanfPerc17 = dimple.filterData(tanfPerc, "Time", ["2017Q1", "2017Q2", "2017Q3", "2017Q4"]);
    window.tanfPerc18 = dimple.filterData(tanfPerc, "Time", ["2018Q1", "2018Q2", "2018Q3", "2018Q4"]);
    window.tanfPerc19 = dimple.filterData(tanfPerc, "Time", ["2019Q1", "2019Q2"]);

    let tanfRate = dimple.filterData(data, "Indicator", "Percent of Workforce Service participants in TANF (%)")
    window.tanfRate15 = dimple.filterData(tanfRate, "Time", ["2015Q1", "2015Q2", "2015Q3", "2015Q4"]);
    window.tanfRate16 = dimple.filterData(tanfRate, "Time", ["2016Q1", "2016Q2", "2016Q3", "2016Q4"]);
    window.tanfRate17 = dimple.filterData(tanfRate, "Time", ["2017Q1", "2017Q2", "2017Q3", "2017Q4"]);
    window.tanfRate18 = dimple.filterData(tanfRate, "Time", ["2018Q1", "2018Q2", "2018Q3", "2018Q4"]);
    window.tanfRate19 = dimple.filterData(tanfRate, "Time", ["2019Q1", "2019Q2"]);

    let tanfData = dimple.filterData(data, "Indicator", "TANF Participants in Workforce Service ")
    window.tanfData15 = dimple.filterData(tanfData, "Time", ["2015Q1", "2015Q2", "2015Q3", "2015Q4"]);
    window.tanfData16 = dimple.filterData(tanfData, "Time", ["2016Q1", "2016Q2", "2016Q3", "2016Q4"]);
    window.tanfData17 = dimple.filterData(tanfData, "Time", ["2017Q1", "2017Q2", "2017Q3", "2017Q4"]);
    window.tanfData18 = dimple.filterData(tanfData, "Time", ["2018Q1", "2018Q2", "2018Q3", "2018Q4"]);
    window.tanfData19 = dimple.filterData(tanfData, "Time", ["2019Q1", "2019Q2"]);

    window.display_tanf_table = ( year, tanfAttainment, tanfPerc, tanfRate, tanfData) => {
        console.log({'TANF':'Data', year, tanfAttainment, tanfPerc, tanfRate, tanfData});
        let find = (objArr, indx) => {
          // Search
          let returnThis =  objArr.filter( obj => { 
            // console.log( obj['Time'].search( ['Q1','Q2','Q3','Q4'][indx] ) )
            return obj['Time'].search( ['Q1','Q2','Q3','Q4'][indx] ) > -1 ? true : false
          } )
          // console.log({returnThis})
          returnThis = returnThis[0]
          returnThis = returnThis == undefined ? '--' : returnThis['Amount']
          return returnThis
        }
        document.getElementById('tanf_table').innerHTML = `
            <tr class="HeadRow" style="background-color: white;">
              <th>${CountyName}:</th>
              <th>TANF Recipient Workers (count)</th>
              <th>Percent of Workers in TANF</th>
              <th>Service participants in TANF (percent)</th>
              <th>Maryland workers receiving TANF (percent)</th>
            </tr>
            <tr>
              <th>${year}Q1</th>
              <td>${find(tanfAttainment,0)}</td>
              <td>${pcnt(find(tanfPerc,0))}</td>
              <td>${pcnt2(find(tanfRate,0))}</td>
              <td>${pcnt2(find(tanfData,0) )}</td>
            </tr>
            <tr>
              <th>${year}Q2</th>
              <td>${find(tanfAttainment,1)}</td>
              <td>${pcnt(find(tanfPerc,1))}</td>
              <td>${pcnt2(find(tanfRate,1))}</td>
              <td>${pcnt2(find(tanfData,1))}</td>
            </tr>
            <tr>
              <th>${year}Q3</th>
              <td>${find(tanfAttainment,2)}</td>
              <td>${pcnt(find(tanfPerc,2))}</td>
              <td>${pcnt2(find(tanfRate,2))}</td>
              <td>${pcnt2(find(tanfData,2))}</td>
            </tr>
            <tr>
              <th>${year}Q4</th>
              <td>${find(tanfAttainment,3)}</td>
              <td>${pcnt(find(tanfPerc,3))}</td>
              <td>${pcnt2(find(tanfRate,3))}</td>
              <td>${pcnt2(find(tanfData,3))}</td>
            </tr>
        `
    }
    display_tanf_table('2018', tanfAttainment18, tanfPerc18, tanfRate18, tanfData18)

    let ordered = ["2018Q1", "2018Q2", "2018Q3", "2018Q4"]

    window.ptanf_attainment_chart = new dimple.chart(tanf_chart_print, tanfAttainment18);
    window.tanf_attainment_chart = new dimple.chart(tanf_svg, tanfAttainment18);

    window.ptanf_rate_chart = new dimple.chart(tanf_chart_print, tanfRate18);
    window.tanf_rate_chart = new dimple.chart(tanf_svg, tanfRate18);

    window.tanf_data = new dimple.chart(tanf_svg, tanfData18);
    window.ptanf_data = new dimple.chart(tanf_chart_print, tanfData18);

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
        window.workerDatag1 = dimple.filterData(data, "Indicator", "Work Experience by Gender")
        window.workerDatag2 = dimple.filterData(workerDatag1, "Time", "2016");
        window.workerDatag3 = dimple.filterData(workerDatag1, "Time", "2017");
        window.workerDatag4 = dimple.filterData(workerDatag1, "Time", "2018");
        workerDatag1 = dimple.filterData(workerDatag1, "Time", "2015");
        //education
        window.workerDatae1 = dimple.filterData(data, "Indicator", "Work Experience by Education")
        window.workerDatae2 = dimple.filterData(workerDatae1, "Time", "2016");
        window.workerDatae3 = dimple.filterData(workerDatae1, "Time", "2017");
        window.workerDatae4 = dimple.filterData(workerDatae1, "Time", "2018");
        workerDatae1 = dimple.filterData(workerDatae1, "Time", "2015");
        //race
        window.workerDatar1 = dimple.filterData(data, "Indicator", "Work Experience by Race")
        window.workerDatar2 = dimple.filterData(workerDatar1, "Time", "2016");
        window.workerDatar3 = dimple.filterData(workerDatar1, "Time", "2017");
        window.workerDatar3 = dimple.filterData(workerDatar1, "Time", "2018");
        workerDatar1 = dimple.filterData(workerDatar1, "Time", "2015");
        //poverty
        window.workerDatap1 = dimple.filterData(data, "Indicator", "Work Experience by Poverty")
        window.workerDatap2 = dimple.filterData(workerDatap1, "Time", "2016");
        window.workerDatap3 = dimple.filterData(workerDatap1, "Time", "2017");
        window.workerDatap4 = dimple.filterData(workerDatap1, "Time", "2018");
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
    }

    // 
    // Snap
    // 

    //Create Tables
    url = "./data/snap/snap_"+CountyName4.replace(/[ ]/g,'')+".csv"
    console.log(url)
    let snap_data = await d3.dsv(",", url)
    snap_data.unshift(["SNAP Recipient Workers","",2016,2017,2018])
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
    if (strUser3 == "2019") {
        console.log({tanfAttainment19, tanfRate19})
        tanf_attainment_chart.data = tanfAttainment19;
        ptanf_attainment_chart.data = tanfAttainment19;
        tanf_rate_chart.data = tanfRate19;
        ptanf_rate_chart.data = tanfRate19;
        display_tanf_table('2019', tanfAttainment19, tanfPerc19, tanfRate19, tanfData19)
    }
    if (strUser3 == "2018") {
        empl_edu_chart.data = EduAttainment18;
        empl_edu_gend_chart.data = unempByGender18;
        empl_race_ethn_chart.data = raceData18;
        chart5.data = ethData18;
        empl_vet_chart.data = vetData18;
        pempl_edu_chart.data = EduAttainment18;
        pempl_edu_gend_chart.data = unempByGender18;
        pempl_race_ethn_chart.data = raceData18;
        pchart5.data = ethData18;
        empl_vet_print_chart.data = vetData18;
        pempl_status_chart.data = povRate18
        empl_status_chart.data = povRate18
        emp_dis_chart_print.data = disAttainment18
        emp_dis_chart.data = disAttainment18

        tanf_attainment_chart.data = tanfAttainment18;
        ptanf_attainment_chart.data = tanfAttainment18;
        tanf_rate_chart.data = tanfRate18;
        ptanf_rate_chart.data = tanfRate18;
        display_tanf_table('2018', tanfAttainment18, tanfPerc18, tanfRate18, tanfData18)
    }
    if (strUser3 == "2017") {
        empl_edu_chart.data = EduAttainment17;
        empl_edu_gend_chart.data = unempByGender17;
        empl_race_ethn_chart.data = raceData17;
        chart5.data = ethData17;
        empl_vet_chart.data = vetData17;
        pempl_edu_chart.data = EduAttainment17;
        pempl_edu_gend_chart.data = unempByGender17;
        pempl_race_ethn_chart.data = raceData17;
        pchart5.data = ethData17;
        empl_vet_print_chart.data = vetData17;
        pempl_status_chart.data = povRate17
        empl_status_chart.data = povRate17
        emp_dis_chart_print.data = disAttainment17
        emp_dis_chart.data = disAttainment17

        tanf_attainment_chart.data = tanfAttainment17;
        ptanf_attainment_chart.data = tanfAttainment17;
        tanf_rate_chart.data = tanfRate17;
        ptanf_rate_chart.data = tanfRate17;
        display_tanf_table('2017', tanfAttainment17, tanfPerc17, tanfRate17, tanfData17)
    }
    if (strUser3 == "2016") {
        empl_edu_chart.data = EduAttainment16;
        empl_edu_gend_chart.data = unempByGender16;
        empl_race_ethn_chart.data = raceData16;
        chart5.data = ethData16;
        empl_vet_chart.data = vetData16;
        pempl_edu_chart.data = EduAttainment16;
        pempl_edu_gend_chart.data = unempByGender16;
        pempl_race_ethn_chart.data = raceData16;
        pchart5.data = ethData16;
        empl_vet_print_chart.data = vetData16;
        pempl_status_chart.data = povRate16
        empl_status_chart.data = povRate16
        emp_dis_chart_print.data = disAttainment16
        emp_dis_chart.data = disAttainment16

        tanf_attainment_chart.data = tanfAttainment16;
        ptanf_attainment_chart.data = tanfAttainment16;
        tanf_rate_chart.data = tanfRate16;
        ptanf_rate_chart.data = tanfRate16;
        display_tanf_table('2016', tanfAttainment16, tanfPerc16, tanfRate16, tanfData16)

    }
    if (strUser3 == "2015") {
        empl_edu_chart.data = EduAttainment15;
        empl_edu_gend_chart.data = unempByGender15;
        empl_race_ethn_chart.data = raceData15;
        chart5.data = ethData15;
        empl_vet_chart.data = vetData15;
        pempl_edu_chart.data = EduAttainment15;
        pempl_edu_gend_chart.data = unempByGender15;
        pempl_race_ethn_chart.data = raceData15;
        pchart5.data = ethData15;
        empl_vet_print_chart.data = vetData15;
        pempl_status_chart.data = povRate15
        empl_status_chart.data = povRate15
        emp_dis_chart_print.data = disAttainment15
        emp_dis_chart.data = disAttainment15

        tanf_attainment_chart.data = tanfAttainment15;
        ptanf_attainment_chart.data = tanfAttainment15;
        tanf_rate_chart.data = tanfRate15;
        ptanf_rate_chart.data = tanfRate15;
        display_tanf_table('2015', tanfAttainment15, tanfPerc15, tanfRate15, tanfData15)

    }

    var e8 = document.getElementById("emplStatus_categ_dd");
    var strUser8 = e8.options[e8.selectedIndex].text;
    if (strUser3 == "2015") {
        if (strUser8 == "Gender") {
            work_exp_pov_chart.data = workerDatag1;
        } else if (strUser8 == "Race") {
            work_exp_pov_chart.data = workerDatar1;
        } else if (strUser8 == "Education") {
            work_exp_pov_chart.data = workerDatae1;
        } else if (strUser8 == "Poverty") {
            work_exp_pov_chart.data = workerDatap1;
        }
        pwork_exp_pov_chart.data = work_exp_pov_chart.data;
    }
    if (strUser3 == "2016") {
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
    if (strUser3 == "2017") {
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
    if (strUser3 == "2018") {
        if (strUser8 == "Gender") {
            work_exp_pov_chart.data = workerDatag4;
        } else if (strUser8 == "Race") {
            work_exp_pov_chart.data = workerDatar4;
        } else if (strUser8 == "Education") {
            work_exp_pov_chart.data = workerDatae4;
        } else if (strUser8 == "Poverty") {
            work_exp_pov_chart.data = workerDatap4;
        }
    }
    drawAll();
    
    work_exp_pov_chart.draw(1000);
    pwork_exp_pov_chart.draw(1000);

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


    pempl_status_chart.draw(1000);
    empl_status_chart.draw(1000);
    emp_dis_chart_print.draw(1000);
    emp_dis_chart.draw(1000);

    tanf_attainment_chart.draw(1000,false);
    tanf_rate_chart.draw(1000);
    ptanf_attainment_chart.draw(1000);
    ptanf_rate_chart.draw(1000);

    drawAll();
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

CountyName2 == 'Maryland' ? '' : window.onload = function() {
    document.getElementById("dropdownMenu").style.display  = "none";
    document.getElementById("title").style.display  = "none";
    document.querySelectorAll('[data-lbl]').forEach( el => {
		el.removeAttribute("disabled");
        el.addEventListener("click", function(){
            console.log('Clicked', el.dataset.lbl, el);
            whichChart = el.dataset.lbl;
            let dropdownMenu = document.getElementById("dropdownMenu")
            let elem = document.getElementById("title")
            elem.style.display  = "inline";
            switch(whichChart) {
              case 'pop':
                elem.innerHTML = 'Population and Median Household Income'
                dropdownMenu.style.display  = "none";
                break;
              case 'empl_edu_gend':
                elem.innerHTML = 'Demographics - Education and Gender'
                dropdownMenu.style.display  = "inline";
                break;
              case 'empl_race_ethn':
                elem.innerHTML = 'Demographics - Race and Ethnicity'
                dropdownMenu.style.display  = "inline";
                break;
              case 'empl_vet':
                elem.innerHTML = 'Demographics - Veterans Status'
                dropdownMenu.style.display  = "inline";
                break;
              case 'disabl_pov':
                elem.innerHTML = 'Disability and Poverty'
                dropdownMenu.style.display  = "inline";
                break;
              case 'tanf':
                elem.innerHTML = 'Temporary Aid for Needy Families (TANF) Stats'
                dropdownMenu.style.display  = "inline";
                break;
              case 'empl_status':
                elem.innerHTML = 'Employment Status amongst Maryland Workers'
                dropdownMenu.style.display  = "inline";
                break;
              case 'snap':
                elem.innerHTML = 'SNAP Recipient Workers'
                dropdownMenu.style.display  = "none";
                break;
              default:
                elem.innerHTML = 'Empty'
                dropdownMenu.style.display  = "none";
            } 
            hideall(collapsables)
            document.getElementById(el.dataset.lbl).style.display = "inline";
            drawAll();
            hidePrint();
        })   
         
    })
}