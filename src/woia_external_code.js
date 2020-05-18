import * as d3 from 'd3';
import * as dimple from 'dimple';


/*
 * Outline
 * 
*/

(async()=>{
  let pcnt = (d) => { return d.slice( d.length -1 ) != '%' ? (d3.format(".1%")(d*1) ) : (d3.format(".1%")(Number(d.slice(0, -1)*.01 ) ) ) }
  let pcnt2 = (d) => { return d.slice( d.length -1 ) != '%' ? (d3.format(".1%")(d*.01) ) : (d3.format(".1%")(Number(d.slice(0, -1)*.01 ) ) ) }
  let cma = (d) => { return d3.format(',.0f')(d*1) }
  let dlr = (d) => { return d3.format('$,.0f')(d*1) }

  let url =  CountyName2 == 'Maryland' ? './data/MarylandData_5-5-20.csv' : "./data/wda/"+CountyName.replace(/[ ]/g,'')+".csv"

  let data = await d3.dsv(",", url)
  console.log(data)

  // data = dimple.filterData(data, "Location", CountyName2)

  //chart 3 
  var svg3 = dimple.newSvg("#Chart3", "100%", 400);
  var svg4 = dimple.newSvg("#Chart4", "100%", 400);
  var svg5 = dimple.newSvg("#ChartFive", "100%", 400);
  var svg6 = dimple.newSvg("#Chart6", "100%", 450);

  var print3 = dimple.newSvg("#Print3", 750, 400);
  var print4 = dimple.newSvg("#Print4", 750, 400);
  var print5 = dimple.newSvg("#PrintFive", 750, 400);
  var print6 = dimple.newSvg("#Print6", 750, 450);

  var svg71 = dimple.newSvg("#Chart17", "100%", 400);
  var print71 = dimple.newSvg("#Print17", 750, 400);

  window.workData = dimple.filterData(dimple.filterData(data, "Time", ["2016-Q1", "2016-Q2", "2016-Q3", "2016-Q4", "2017-Q1", "2017-Q2", "2017-Q3", "2017-Q4", "2018-Q1"]), "Indicator", ["Maryland Workers by Age", "Maryland Workers by Gender", "Maryland Workers by Industry"])
  window.workData1 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q1"), "Indicator", "Maryland Workers by Age");
  window.workData2 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q2"), "Indicator", "Maryland Workers by Age");
  window.workData3 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q3"), "Indicator", "Maryland Workers by Age");
  window.workData4 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q4"), "Indicator", "Maryland Workers by Age");
  window.workData5 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q1"), "Indicator", "Maryland Workers by Age");
  window.workData6 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q2"), "Indicator", "Maryland Workers by Age");
  window.workData7 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q3"), "Indicator", "Maryland Workers by Age");
  window.workData8 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q4"), "Indicator", "Maryland Workers by Age");
  window.workData9 = dimple.filterData(dimple.filterData(workData, "Time", "2018-Q1"), "Indicator", "Maryland Workers by Age");

  window.workData11 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q1"), "Indicator", "Maryland Workers by Gender");
  window.workData21 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q2"), "Indicator", "Maryland Workers by Gender");
  window.workData31 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q3"), "Indicator", "Maryland Workers by Gender");
  window.workData41 = dimple.filterData(dimple.filterData(workData, "Time", "2016-Q4"), "Indicator", "Maryland Workers by Gender");
  window.workData51 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q1"), "Indicator", "Maryland Workers by Gender");
  window.workData61 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q2"), "Indicator", "Maryland Workers by Gender");
  window.workData71 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q3"), "Indicator", "Maryland Workers by Gender");
  window.workData81 = dimple.filterData(dimple.filterData(workData, "Time", "2017-Q4"), "Indicator", "Maryland Workers by Gender");
  window.workData82 = dimple.filterData(dimple.filterData(workData, "Time", "2018-Q1"), "Indicator", "Maryland Workers by Gender");



  window.wChart = new dimple.chart(svg3, workData8);
  wChart.setBounds("11%", "12%", "35%", "65%")
  window.edX = wChart.addCategoryAxis("x", "Indicator_Value");
  var eduY = wChart.addMeasureAxis("y", "Amount");
  var edSeries = wChart.addSeries("Indicator_Value", dimple.plot.bar);
  eduY.title = "Number of Workers";
  edX.title = " ";

  edX.addOrderRule(["14-18", "19-21", "22-24", "25-34", "35-44", "45-54", "55-64", "65-99", "Female", "Male"]);

  wChart.assignColor("14-18", "#4dc3ff", "black", 0.7);
  wChart.assignColor("19-21", "#ff5c33", "black", 0.7);
  wChart.assignColor("22-24", "#66ff66", "black", 0.7);
  wChart.assignColor("25-34", "#ffdb4d", "black", 0.7);
  wChart.assignColor("35-44", "#ffb84d", "black", 0.7);
  wChart.assignColor("45-54", "#00cccc", "black", 0.7);
  wChart.assignColor("55-64", "#6666ff", "black", 0.7);
  wChart.assignColor("65-99", "#ffcc99", "black", 0.7);
  wChart.assignColor("Male", "#3366ff", "black", 0.7);
  wChart.assignColor("Female", "pink", "black", 0.7);


  //edSeries.lineWeight = 0;
  wChart.draw();

  eduY.tickFormat = ',.0f';

  window.pwChart = new dimple.chart(print3, workData8);
  pwChart.setBounds("13%", "12%", "35%", 250)
  var pedX = pwChart.addCategoryAxis("x", "Indicator_Value");
  var peduY = pwChart.addMeasureAxis("y", "Amount");
  var pedSeries = pwChart.addSeries("Indicator_Value", dimple.plot.bar);
  peduY.title = "Number of Workers";
  pedX.title = " ";

  pedX.addOrderRule(["14-18", "19-21", "22-24", "25-34", "35-44", "45-54", "55-64", "65-99", "Female", "Male"]);

  pwChart.assignColor("14-18", "#4dc3ff", "black", 0.7);
  pwChart.assignColor("19-21", "#ff5c33", "black", 0.7);
  pwChart.assignColor("22-24", "#66ff66", "black", 0.7);
  pwChart.assignColor("25-34", "#ffdb4d", "black", 0.7);
  pwChart.assignColor("35-44", "#ffb84d", "black", 0.7);
  pwChart.assignColor("45-54", "#00cccc", "black", 0.7);
  pwChart.assignColor("55-64", "#6666ff", "black", 0.7);
  pwChart.assignColor("65-99", "#ffcc99", "black", 0.7);
  pwChart.assignColor("Male", "#3366ff", "black", 0.7);
  pwChart.assignColor("Female", "pink", "black", 0.7);

  pwChart.draw();

  peduY.tickFormat = ',.0f';

  window.averageData =   dimple.filterData( data, "Time", ["2016-Q1", "2016-Q2", "2016-Q3", "2016-Q4", "2017-Q1", "2017-Q2", "2017-Q3", "2017-Q4", "2018-Q1"])
  window.averageData1 =  dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q1"), "Indicator", "Maryland Average Monthly Earnings by Age");
  window.averageData2 =  dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q2"), "Indicator", "Maryland Average Monthly Earnings by Age");
  window.averageData3 =  dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q3"), "Indicator", "Maryland Average Monthly Earnings by Age");
  window.averageData4 =  dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q4"), "Indicator", "Maryland Average Monthly Earnings by Age");
  window.averageData5 =  dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q1"), "Indicator", "Maryland Average Monthly Earnings by Age");
  window.averageData6 =  dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q2"), "Indicator", "Maryland Average Monthly Earnings by Age");
  window.averageData7 =  dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q3"), "Indicator", "Maryland Average Monthly Earnings by Age");
  window.averageData8 =  dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q4"), "Indicator", "Maryland Average Monthly Earnings by Age");
  window.averageData9 =  dimple.filterData(dimple.filterData(averageData, "Time", "2018-Q1"), "Indicator", "Maryland Average Monthly Earnings by Age");
  window.averageData11 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q1"), "Indicator", "Maryland Average Monthly Earnings by Gender");
  window.averageData21 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q2"), "Indicator", "Maryland Average Monthly Earnings by Gender");
  window.averageData31 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q3"), "Indicator", "Maryland Average Monthly Earnings by Gender");
  window.averageData41 = dimple.filterData(dimple.filterData(averageData, "Time", "2016-Q4"), "Indicator", "Maryland Average Monthly Earnings by Gender");
  window.averageData51 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q1"), "Indicator", "Maryland Average Monthly Earnings by Gender");
  window.averageData61 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q2"), "Indicator", "Maryland Average Monthly Earnings by Gender");
  window.averageData71 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q3"), "Indicator", "Maryland Average Monthly Earnings by Gender");
  window.averageData81 = dimple.filterData(dimple.filterData(averageData, "Time", "2017-Q4"), "Indicator", "Maryland Average Monthly Earnings by Gender");
  window.averageData82 = dimple.filterData(dimple.filterData(averageData, "Time", "2018-Q1"), "Indicator", "Maryland Average Monthly Earnings by Gender");
  console.log('Num Workers, Average Earnings', {workData8, workData81, averageData8, averageData81})
  document.getElementById('table3').innerHTML = `
               <tr class="HeadRow" style="background-color: white;">
                  <th>${CountyName.replace("L W D A", "LWDA")}</th>
                  <th>Age 14-18</th>
                  <th>Age 19-21</th>
                  <th>Age 22-24</th>
                  <th>Age 25-34</th>
                  <th>Age 35-44</th>
                  <th>Age 45-54</th>
                  <th>Age 55-64</th>
                  <th>Age 65-99</th>
                  <th rowspan="7" style="border-style: solid;
                     border-color: #5281B7;">Gender Data</th>
                  <th>Female</th>
                  <th>Male</th>
               </tr>
               <tr class="HeadRow">
                  <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th>
               </tr>
               <tr>
                  <th>Number of Workers</th>
                  <td>${cma(workData8[7]['Amount'])}</td>
                  <td>${cma(workData8[6]['Amount'])}</td>
                  <td>${cma(workData8[5]['Amount'])}</td>
                  <td>${cma(workData8[0]['Amount'])}</td>
                  <td>${cma(workData8[1]['Amount'])}</td>
                  <td>${cma(workData8[2]['Amount'])}</td>
                  <td>${cma(workData8[3]['Amount'])}</td>
                  <td>${cma(workData8[4]['Amount'])}</td>
                  <td>${cma(workData81[1]['Amount'])}</td>
                  <td>${cma(workData81[0]['Amount'])}</td>
               </tr>
               <tr class="HeadRow">
                  <th>2017Q4</th>
                  <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th>
               </tr>
               <tr class="FootRow">
                  <th>Average Monthly Earnings</th>
                  <td>${cma(averageData8[0]['Amount'])}</td>
                  <td>${cma(averageData8[1]['Amount'])}</td>
                  <td>${cma(averageData8[2]['Amount'])}</td>
                  <td>${cma(averageData8[3]['Amount'])}</td>
                  <td>${cma(averageData8[4]['Amount'])}</td>
                  <td>${cma(averageData8[5]['Amount'])}</td>
                  <td>${cma(averageData8[6]['Amount'])}</td>
                  <td>${cma(averageData8[7]['Amount'])}</td>
                  <td>${cma(averageData81[0]['Amount'])}</td>
                  <td>${cma(averageData81[1]['Amount'])}</td>
               </tr>
  `
  window.avgChart = new dimple.chart(svg3, averageData8);
  avgChart.setBounds("56%", "12%", "35%", "65%")
  window.genX = avgChart.addCategoryAxis("x", "Indicator_Value");
  var genY = avgChart.addMeasureAxis("y", "Amount");

  avgChart.addSeries("Indicator_Value", dimple.plot.bar);

  avgChart.assignColor("14-18", "#4dc3ff", "black", 0.7);
  avgChart.assignColor("19-21", "#ff5c33", "black", 0.7);
  avgChart.assignColor("22-24", "#66ff66", "black", 0.7);
  avgChart.assignColor("25-34", "#ffdb4d", "black", 0.7);
  avgChart.assignColor("35-44", "#ffb84d", "black", 0.7);
  avgChart.assignColor("45-54", "#00cccc", "black", 0.7);
  avgChart.assignColor("55-64", "#6666ff", "black", 0.7);
  avgChart.assignColor("65-99", "#ffcc99", "black", 0.7);
  avgChart.assignColor("Male", "#3366ff", "black", 0.7);
  avgChart.assignColor("Female", "pink", "black", 0.7);

  avgChart.draw();
  genX.addOrderRule(["14-18", "19-21", "22-24", "25-34", "35-44", "45-54", "55-64", "65-99", "Female", "Male"]);

  genX.title = " ";
  genY.tickFormat = '$,.0f';
  genY.title = "Average Monthly Earnings";

  window.pavgChart = new dimple.chart(print3, averageData8);
  pavgChart.setBounds("61%", "12%", "35%", 250)
  var pgenX = pavgChart.addCategoryAxis("x", "Indicator_Value");
  var pgenY = pavgChart.addMeasureAxis("y", "Amount");
  pavgChart.addSeries("Indicator_Value", dimple.plot.bar);

  pavgChart.assignColor("14-18", "#4dc3ff", "black", 0.7);
  pavgChart.assignColor("19-21", "#ff5c33", "black", 0.7);
  pavgChart.assignColor("22-24", "#66ff66", "black", 0.7);
  pavgChart.assignColor("25-34", "#ffdb4d", "black", 0.7);
  pavgChart.assignColor("35-44", "#ffb84d", "black", 0.7);
  pavgChart.assignColor("45-54", "#00cccc", "black", 0.7);
  pavgChart.assignColor("55-64", "#6666ff", "black", 0.7);
  pavgChart.assignColor("65-99", "#ffcc99", "black", 0.7);
  pavgChart.assignColor("Male", "#3366ff", "black", 0.7);
  pavgChart.assignColor("Female", "pink", "black", 0.7);
  pavgChart.draw();

  pgenX.title = " ";
  pgenY.tickFormat = '$,.0f';
  pgenY.title = "Average Monthly Earnings";
  pgenX.addOrderRule(["14-18", "19-21", "22-24", "25-34", "35-44", "45-54", "55-64", "65-99", "Female", "Male"]);

  //chart 3 end

  //chart 4


  window.jobData = dimple.filterData(dimple.filterData(data, "Time", ["2016-Q1", "2016-Q2", "2016-Q3", "2016-Q4", "2017-Q1", "2017-Q2", "2017-Q3", "2017-Q4", "2018-Q1"]), "Indicator", ["Maryland Job Net Change by Education", "Maryland Job Net Change by Gender", "Maryland Job Net Change by Industry"])
  window.jobData1 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q1"), "Indicator", "Maryland Job Net Change by Education");
  window.jobData2 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q2"), "Indicator", "Maryland Job Net Change by Education");
  window.jobData3 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q3"), "Indicator", "Maryland Job Net Change by Education");
  window.jobData4 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q4"), "Indicator", "Maryland Job Net Change by Education");
  window.jobData5 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q1"), "Indicator", "Maryland Job Net Change by Education");
  window.jobData6 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q2"), "Indicator", "Maryland Job Net Change by Education");
  window.jobData7 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q3"), "Indicator", "Maryland Job Net Change by Education");
  window.jobData8 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q4"), "Indicator", "Maryland Job Net Change by Education");
  window.jobData9 = dimple.filterData(dimple.filterData(jobData, "Time", "2018-Q1"), "Indicator", "Maryland Job Net Change by Education");
  window.jobData11 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q1"), "Indicator", "Maryland Job Net Change by Gender");
  window.jobData21 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q2"), "Indicator", "Maryland Job Net Change by Gender");
  window.jobData31 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q3"), "Indicator", "Maryland Job Net Change by Gender");
  window.jobData41 = dimple.filterData(dimple.filterData(jobData, "Time", "2016-Q4"), "Indicator", "Maryland Job Net Change by Gender");
  window.jobData51 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q1"), "Indicator", "Maryland Job Net Change by Gender");
  window.jobData61 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q2"), "Indicator", "Maryland Job Net Change by Gender");
  window.jobData71 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q3"), "Indicator", "Maryland Job Net Change by Gender");
  window.jobData81 = dimple.filterData(dimple.filterData(jobData, "Time", "2017-Q4"), "Indicator", "Maryland Job Net Change by Gender");
  window.jobData82 = dimple.filterData(dimple.filterData(jobData, "Time", "2018-Q1"), "Indicator", "Maryland Job Net Change by Gender");

  window.jc = new dimple.chart(svg4, jobData8);
  jc.setBounds("56%", "8%", "35%", "45%")

  var raceX = jc.addCategoryAxis("x", "Indicator_Value");
  var raceY = jc.addMeasureAxis("y", "Amount");
  var rSeries = jc.addSeries("Indicator_Value", dimple.plot.bar);
  raceX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);

  jc.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
  jc.assignColor("High school", "#ff5c33", "black", 0.7);
  jc.assignColor("Some college", "#66ff66", "black", 0.7);
  jc.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
  jc.assignColor("N/A", "#919191", "black", 0.7);

  jc.assignColor("Male", "#3366ff", "black", 0.7);
  jc.assignColor("Female", "pink", "black", 0.7);

  jc.draw();
  raceY.title = "Job Net Change";
  raceX.title = " ";

  raceY.tickFormat = ',.0f';

  window.pjc = new dimple.chart(print4, jobData8);
  pjc.setBounds("59%", "8%", "35%", 175)

  var praceX = pjc.addCategoryAxis("x", "Indicator_Value");
  var praceY = pjc.addMeasureAxis("y", "Amount");
  var prSeries = pjc.addSeries("Indicator_Value", dimple.plot.bar);

  pjc.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
  pjc.assignColor("High school", "#ff5c33", "black", 0.7);
  pjc.assignColor("Some college", "#66ff66", "black", 0.7);
  pjc.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
  pjc.assignColor("N/A", "#919191", "black", 0.7);

  pjc.assignColor("Male", "#3366ff", "black", 0.7);
  pjc.assignColor("Female", "pink", "black", 0.7);
  pjc.draw();

  praceY.title = "Job Net Change";
  praceX.title = " ";

  praceY.tickFormat = ',.0f';
  praceX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);

  window.newHireData = dimple.filterData(dimple.filterData(data, "Time", ["2016-Q1", "2016-Q2", "2016-Q3", "2016-Q4", "2017-Q1", "2017-Q2", "2017-Q3", "2017-Q4", "2018-Q1", "2016Q4", "2017Q1", "2017Q2"]), "Indicator", ["Maryland New Hires by Education", "Maryland New Hires by Gender", "Maryland Workers by Industry"])
  window.newHireData1 = dimple.filterData(dimple.filterData(newHireData, "Time", "2016-Q1"), "Indicator", "Maryland New Hires by Education");
  window.newHireData2 = dimple.filterData(dimple.filterData(newHireData, "Time", "2016-Q2"), "Indicator", "Maryland New Hires by Education");
  window.newHireData3 = dimple.filterData(dimple.filterData(newHireData, "Time", "2016-Q3"), "Indicator", "Maryland New Hires by Education");
  window.newHireData4 = dimple.filterData(dimple.filterData(newHireData, "Time", "2016-Q4"), "Indicator", "Maryland New Hires by Education");
  window.newHireData5 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017-Q1"), "Indicator", "Maryland New Hires by Education");
  window.newHireData6 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017-Q2"), "Indicator", "Maryland New Hires by Education");
  window.newHireData7 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017-Q3"), "Indicator", "Maryland New Hires by Education");
  window.newHireData8 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017-Q4"), "Indicator", "Maryland New Hires by Education");
  window.newHireData9 = dimple.filterData(dimple.filterData(newHireData, "Time", "2018-Q1"), "Indicator", "Maryland New Hires by Education");

  window.newHireData11 = dimple.filterData(dimple.filterData(newHireData, "Time", "2016-Q1"), "Indicator", "Maryland New Hires by Gender");
  window.newHireData21 = dimple.filterData(dimple.filterData(newHireData, "Time", "2016-Q2"), "Indicator", "Maryland New Hires by Gender");
  window.newHireData31 = dimple.filterData(dimple.filterData(newHireData, "Time", "2016-Q3"), "Indicator", "Maryland New Hires by Gender");
  window.newHireData41 = dimple.filterData(dimple.filterData(newHireData, "Time", "2016-Q4"), "Indicator", "Maryland New Hires by Gender");
  window.newHireData51 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017-Q1"), "Indicator", "Maryland New Hires by Gender");
  window.newHireData61 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017-Q2"), "Indicator", "Maryland New Hires by Gender");
  window.newHireData71 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017-Q3"), "Indicator", "Maryland New Hires by Gender");
  window.newHireData81 = dimple.filterData(dimple.filterData(newHireData, "Time", "2017-Q4"), "Indicator", "Maryland New Hires by Gender");
  window.newHireData82 = dimple.filterData(dimple.filterData(newHireData, "Time", "2018-Q1"), "Indicator", "Maryland New Hires by Gender");
  console.log('New Hires, Job Net Changes', {jobData8, jobData81, newHireData8, newHireData81})

  document.getElementById('table4').innerHTML = `
            <table id="table4">
               <tr class="HeadRow" style="background-color: white;">
                  <th style="border-right-style: solid;">${CountyName.replace("L W D A", "LWDA")}</th>
                  <th>Less than high school</th>
                  <th>High school or equivalent, no college</th>
                  <th>Some college or Associate degree</th>
                  <th>Bachelor's degree or advanced degree</th>
                  <th>Educational attainment not reported (workers aged 24 or younger)</th>
                  <th rowspan="7" style="border-style: solid;
                     border-color: #5281B7;">Gender Data</th>
                  <th>Female</th>
                  <th>Male</th>
               </tr>
               <tr class="HeadRow">
                  <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th>
               </tr>
               <tr>
                  <th>New Hires</th>
                  <td>${cma(newHireData8[0]['Amount'])}</td>
                  <td>${cma(newHireData8[1]['Amount'])}</td>
                  <td>${cma(newHireData8[2]['Amount'])}</td>
                  <td>${cma(newHireData8[3]['Amount'])}</td>
                  <td>${cma(newHireData8[4]['Amount'])}</td>
                  <td>${cma(newHireData81[1]['Amount'])}</td>
                  <td>${cma(newHireData81[0]['Amount'])}</td>
               </tr>
               <tr class="HeadRow">
                  <th>2017Q4</th>
                  <th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th>
               </tr>
               <tr class="FootRow">
                  <th >Job Net Change</th>
                  <td>${cma(jobData8[2]['Amount'])}</td>
                  <td>${cma(jobData8[1]['Amount'])}</td>
                  <td>${cma(jobData8[3]['Amount'])}</td>
                  <td>${cma(jobData8[4]['Amount'])}</td>
                  <td>${cma(jobData8[0]['Amount'])}</td>
                  <td>${cma(jobData81[1]['Amount'])}</td>
                  <td>${cma(jobData81[0]['Amount'])}</td>
               </tr>
  `
  window.newHireChart = new dimple.chart(svg4, newHireData8);
  newHireChart.setBounds("11%", "8%", "35%", "45%")
  var ethX = newHireChart.addCategoryAxis("x", "Indicator_Value");
  var ethY = newHireChart.addMeasureAxis("y", "Amount");

  newHireChart.addSeries("Indicator_Value", dimple.plot.bar);

  ethY.tickFormat = ',.0f';
  ethY.title = "New Hires";
  ethX.title = " ";

  newHireChart.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
  newHireChart.assignColor("High school", "#ff5c33", "black", 0.7);
  newHireChart.assignColor("Some college", "#66ff66", "black", 0.7);
  newHireChart.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
  newHireChart.assignColor("N/A", "#919191", "black", 0.7);

  newHireChart.assignColor("Male", "#3366ff", "black", 0.7);
  newHireChart.assignColor("Female", "pink", "black", 0.7);
  newHireChart.draw();
  ethX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);

  window.pnewHireChart = new dimple.chart(print4, newHireData8);
  pnewHireChart.setBounds("11%", "8%", "35%", 175)
  var pethX = pnewHireChart.addCategoryAxis("x", "Indicator_Value");
  var pethY = pnewHireChart.addMeasureAxis("y", "Amount");
  pnewHireChart.addSeries("Indicator_Value", dimple.plot.bar);
  pethY.tickFormat = ',.0f';
  pethY.title = "New Hires";
  pethX.title = " ";

  pnewHireChart.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
  pnewHireChart.assignColor("High school", "#ff5c33", "black", 0.7);
  pnewHireChart.assignColor("Some college", "#66ff66", "black", 0.7);
  pnewHireChart.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
  pnewHireChart.assignColor("N/A", "#919191", "black", 0.7);

  pnewHireChart.assignColor("Male", "#3366ff", "black", 0.7);
  pnewHireChart.assignColor("Female", "pink", "black", 0.7);
  pnewHireChart.draw();

  pethX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);

  //chart 4 end

  //chart 5


  window.turnOverData = dimple.filterData(dimple.filterData(data, "Time", ["2016-Q1", "2016-Q2", "2016-Q3", "2016-Q4", "2017-Q1", "2017-Q2", "2017-Q3", "2017-Q4", "2018-Q1", "2016Q4"]), "Indicator", ["Maryland Turnover Rate by Education", "Maryland Turnover Rate by Gender", "Maryland Workers by Industry"])
  window.turnOverData1 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q1"), "Indicator", "Maryland Turnover Rate by Education");
  window.turnOverData2 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q2"), "Indicator", "Maryland Turnover Rate by Education");
  window.turnOverData3 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q3"), "Indicator", "Maryland Turnover Rate by Education");
  window.turnOverData4 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q4"), "Indicator", "Maryland Turnover Rate by Education");
  window.turnOverData5 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q1"), "Indicator", "Maryland Turnover Rate by Education");
  window.turnOverData6 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q2"), "Indicator", "Maryland Turnover Rate by Education");
  window.turnOverData7 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q3"), "Indicator", "Maryland Turnover Rate by Education");
  window.turnOverData8 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q4"), "Indicator", "Maryland Turnover Rate by Education");
  window.turnOverData9 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2018-Q1"), "Indicator", "Maryland Turnover Rate by Education");
  window.turnOverData10 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016Q4"), "Indicator", "Maryland Turnover Rate by Education");
  window.turnOverData11 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q1"), "Indicator", "Maryland Turnover Rate by Gender");
  window.turnOverData21 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q2"), "Indicator", "Maryland Turnover Rate by Gender");
  window.turnOverData31 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q3"), "Indicator", "Maryland Turnover Rate by Gender");
  window.turnOverData41 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016-Q4"), "Indicator", "Maryland Turnover Rate by Gender");
  window.turnOverData51 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q1"), "Indicator", "Maryland Turnover Rate by Gender");
  window.turnOverData61 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q2"), "Indicator", "Maryland Turnover Rate by Gender");
  window.turnOverData71 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q3"), "Indicator", "Maryland Turnover Rate by Gender");
  window.turnOverData81 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2017-Q4"), "Indicator", "Maryland Turnover Rate by Gender");
  window.turnOverData82 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2018-Q1"), "Indicator", "Maryland Turnover Rate by Gender");
  window.turnOverData83 = dimple.filterData(dimple.filterData(turnOverData, "Time", "2016Q4"), "Indicator", "Maryland Turnover Rate by Gender");
  console.log('Turnover Rate',{turnOverData7,turnOverData71})
  document.getElementById('table5').innerHTML = `
                  <tr class="HeadRow" style="background-color: white;">
                     <th style="border-right-style: solid;">${CountyName.replace("L W D A", "LWDA")}</th>
                     <th>Less than high school</th>
                     <th>High school or equivalent, no college</th>
                     <th>Some college or Associate degree</th>
                     <th>Bachelor's degree or advanced degree</th>
                     <th>Educational attainment not reported (workers aged 24 or younger)</th>
                     <th rowspan="7" style="border-style: solid;
                        border-color: #5281B7;">Gender Data</th>
                     <th>Female</th>
                     <th>Male</th>
                  </tr>
                  <tr class="HeadRow">
                     <th colspan="6">2017Q3</th>
                     <th></th>
                     <th></th>
                  </tr>
                  <tr class="FootRow">
                     <th>Turnover Rate</th>
                     <td>${pcnt(turnOverData7[0]['Amount'])}</td>
                     <td>${pcnt(turnOverData7[1]['Amount'])}</td>
                     <td>${pcnt(turnOverData7[2]['Amount'])}</td>
                     <td>${pcnt(turnOverData7[3]['Amount'])}</td>
                     <td>${pcnt(turnOverData7[4]['Amount'])}</td>
                     <td>${pcnt(turnOverData71[1]['Amount'])}</td>
                     <td>${pcnt(turnOverData71[0]['Amount'])}</td>
                  </tr>
                  <tr class="FootRow"></tr>
  `
  window.turnChart = new dimple.chart(svg5, turnOverData7);
  turnChart.setBounds("12%", "12%", "80%", "45%")
  var vetX = turnChart.addCategoryAxis("x", "Indicator_Value")

  var vetY = turnChart.addMeasureAxis("y", "Amount");

  turnChart.addSeries("Indicator_Value", dimple.plot.bar);

  vetY.tickFormat =  '.1%';
  vetY.title = " ";

  turnChart.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
  turnChart.assignColor("High school", "#ff5c33", "black", 0.7);
  turnChart.assignColor("Some college", "#66ff66", "black", 0.7);
  turnChart.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
  turnChart.assignColor("N/A", "#919191", "black", 0.7);

  turnChart.assignColor("Male", "#3366ff", "black", 0.7);
  turnChart.assignColor("Female", "pink", "black", 0.7);

  turnChart.draw();

  vetX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);
  vetX.title = "Turnover Rate";

  window.pturnChart = new dimple.chart(print5, turnOverData7);
  pturnChart.setBounds("12%", "12%", "75%", 175)
  var pvetX = pturnChart.addCategoryAxis("x", "Indicator_Value")
  var pvetY = pturnChart.addMeasureAxis("y", "Amount");
  pturnChart.addSeries("Indicator_Value", dimple.plot.bar);
  pvetY.tickFormat =  '.1%';
  pvetY.title = "Turnover Rate";

  pturnChart.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
  pturnChart.assignColor("High school", "#ff5c33", "black", 0.7);
  pturnChart.assignColor("Some college", "#66ff66", "black", 0.7);
  pturnChart.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
  pturnChart.assignColor("N/A", "#919191", "black", 0.7);

  pturnChart.assignColor("Male", "#3366ff", "black", 0.7);
  pturnChart.assignColor("Female", "pink", "black", 0.7);

  pturnChart.draw();

  pvetX.addOrderRule(["Less than High school", "High school", "Some college", "Bachelor's or Higher", "N/A", "Female", "Male"]);
  pvetX.title = " ";

  //chart 5 end

  //Chart 6 - QCEW
  window.wdata1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q1");
  window.wdata2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q2");
  window.wdata3 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q3");
  window.wdata4 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q4");
  window.wdata5 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q1");
  window.wdata6 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q2");
  window.wdata7 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q3");
  window.wdata8 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q4");
  window.wdata9 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Workers by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2018-Q1");
  console.log( dimple.filterData(data, "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]  ) )
  window.avgdata1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Earnings by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q1");
  window.avgdata2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Earnings by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q2");
  window.avgdata3 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Earnings by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q3");
  window.avgdata4 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Earnings by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q4");
  window.avgdata5 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Earnings by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q1");
  window.avgdata6 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Earnings by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q2");
  window.avgdata7 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Earnings by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q3");
  window.avgdata8 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Earnings by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q4");
  window.avgdata9 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Average Earnings by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2018-Q1");
  window.netdata1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q1");
  window.netdata2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q2");
  window.netdata3 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q3");
  window.netdata4 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q4");
  window.netdata5 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q1");
  window.netdata6 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q2");
  window.netdata7 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q3");
  window.netdata8 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q4");
  window.netdata9 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Job Net Change by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2018-Q1");
  window.turndata1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q1");
  window.turndata2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q2");
  window.turndata3 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q3");
  window.turndata4 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q4");
  window.turndata5 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q1");
  window.turndata6 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q2");
  window.turndata7 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q3");
  window.turndata8 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q4");
  window.turndata9 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Turnover Rate by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2018-Q1");
  window.hiredata1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q1");
  window.hiredata2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q2");
  window.hiredata3 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q3");
  window.hiredata4 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q4");
  window.hiredata5 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q1");
  window.hiredata6 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q2");
  window.hiredata7 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q3");
  window.hiredata8 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q4");
  window.hiredata9 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland New Hires by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2018-Q1");

  window.displayIndustryMetricsTable = (wdatax, hiredatax, avgdatax, netdatax, turndatax) => {
    console.log("LWDA By Industry", {wdatax, hiredatax, avgdatax, netdatax, turndatax})

let tableOrder = ['Agriculture, Forestry, Fishing and Hunting',
'Mining, Quarrying, and Oil and Gas Extraction',
'Utilities',
'Construction',
'Manufacturing',
'Wholesale Trade',
'Retail Trade',
'Transportation and Warehousing',
'Information',
'Finance and Insurance',
'Real Estate and Rental and Leasing',
'Professional, Scientific, and Technical Services',
'Management of Companies and Enterprises',
'Administrative and Support and Waste Management and Remediation Services',
'Educational Services',
'Health Care and Social Assistance',
'Arts, Entertainment, and Recreation',
'Accommodation and Food Services',
'Other Services (except Public Administration)',
'Public Administration'
]
let filterForData = (objArr, indx) => {
  return objArr.filter( obj => { return obj['Indicator_Value'] == tableOrder[indx]} )[0]
}

    document.getElementById('table6').innerHTML = `
      <thead>
         <tr>
            <th class="HeadRow" rowspan="7">LWDA Data by Industry</th>
         </tr>
         <tr class="HeadRow" style="background-color: white;">
            <th>Workers</th>
            <th>New Hires</th>
            <th>Average Monthly Earnings</th>
            <th>Job Net Change</th>
            <th>Turnover Rate</th>
         </tr>
      </thead>
      <tbody>
         <tr class="HeadRow">
            <th>Year and Quarter</th>
            <th></th>
            <th ></th>
            <th></th>
            <th>${wdatax[0]['Time']}</th>
            <th></th>
         </tr>
         <tr>
            <th>${filterForData(wdatax,0)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,0)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,0)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax,0)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,0)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,0)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax,1)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,1)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,1)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax,1)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,1)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,1)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax,2)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,2)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,2)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax,2)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,2)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,2)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax,3)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,3)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,3)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax,3)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,3)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,3)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax,4)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,4)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,4)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax,4)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,4)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,4)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax,5)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,5)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,5)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax,5)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,5)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,5)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax,6)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,6)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,6)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax,6)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,6)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,6)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax,7)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,7)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,7)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax,7)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,7)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,7)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax,8)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,8)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,8)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax,8)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,8)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,8)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax,9)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,9)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,9)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax,9)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,9)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,9)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax,10)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,10)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,10)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax,10)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,10)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,10)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax,11)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,11)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,11)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax,11)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,11)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,11)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax,12)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,12)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,12)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax,12)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,12)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,12)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax,13)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,13)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,13)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax,13)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,13)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,13)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax,14)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,14)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,14)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax,14)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,14)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,14)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax,15)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,15)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,15)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax,15)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,15)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,15)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax,16)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,16)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,16)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax,16)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,16)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,16)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax,17)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,17)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,17)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 :filterForData( avgdatax,17)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,17)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,17)['Amount'])}</td>
         </tr>
         <tr>
            <th>${filterForData(wdatax,18)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,18)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,18)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax,18)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,18)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,18)['Amount'])}</td>
         </tr>
         <tr class="FootRow">
            <th>${filterForData(wdatax,19)["Indicator_Value"]}</th>
            <td>${cma(filterForData(wdatax,19)['Amount'])}</td>
            <td>${cma(filterForData(hiredatax,19)['Amount'])}</td>
            <td>${dlr(!avgdatax[0] ? 0 : filterForData(avgdatax,19)['Amount'])}</td>
            <td>${cma(filterForData(netdatax,19)['Amount'])}</td>
            <td>${pcnt(filterForData(turndatax,19)['Amount'])}</td>
         </tr>
      </tbody>
    `
  }
  window.displayIndustryMetricsTable(wdata8, hiredata8, avgdata8, netdata8, turndata8)

  window.chart8 = new dimple.chart(svg6, wdata8);
  chart8.setBounds("9%", "12%", "55%", "55%")
  var x2 = chart8.addCategoryAxis("x", ["Time", "Indicator_Value"]);
  var y2 = chart8.addMeasureAxis("y", "Amount");
  y2.tickFormat = ',.0f';
  var series8 = chart8.addSeries("Indicator_Value", dimple.plot.bar);
  var qLegend = chart8.addLegend("65%", "5%", "40%", "95%");
  qLegend.fontSize = "1px";
  series8.addOrderRule(true);
  chart8.assignColor("Accommodation and Food Services", "red", "black", 0.8);
  chart8.assignColor("Administrative and Support and Waste Management and Remediation Services", "Green", "black", 0.8);
  chart8.assignColor("Agriculture, Forestry, Fishing and Hunting", "Yellow", "black", 0.8);
  chart8.assignColor("Arts, Entertainment, and Recreation", "blue", "black", 0.8);
  chart8.assignColor("Construction", "Orange", "black", 0.8);
  chart8.assignColor("Educational Services", "Purple", "black", 0.8);
  chart8.assignColor("Finance and Insurance", "Cyan", "black", 0.8);
  chart8.assignColor("Health Care and Social Assistance", "Magenta", "black", 0.8);

  //needs new colors
  chart8.assignColor("Information", "Lime", "black", 0.8);
  chart8.assignColor("Management of Companies and Enterprises", "Pink", "black", 0.8);


  chart8.assignColor("Manufacturing", "Teal", "black", 0.8);
  chart8.assignColor("Mining, Quarrying, and Oil and Gas Extraction", "Lavender", "black", 0.8);
  chart8.assignColor("Other Services (except Public Administration)", "Brown", "black", 0.8);
  chart8.assignColor("Professional, Scientific, and Technical Services", "Beige", "black", 0.8);
  chart8.assignColor("Public Administration", "Maroon", "black", 0.8);
  chart8.assignColor("Real Estate and Rental and Leasing", "#aaffc3", "black", 0.8);
  chart8.assignColor("Retail Trade", "Olive", "black", 0.8);
  chart8.assignColor("Transportation and Warehousing", "Coral", "black", 0.8);
  chart8.assignColor("Utilities", "Navy", "black", 0.8);
  chart8.assignColor("Wholesale Trade", "Grey", "black", 0.8);

  chart8.draw();
  var e71 = document.getElementById("btn10wda");
  var strUser71 = e71.options[e71.selectedIndex].text;
  y2.title = strUser71;
  x2.title = " ";

  window.pchart8 = new dimple.chart(print6, wdata8);
  pchart8.setBounds("14%", "12%", "45%", 250)
  var px2 = pchart8.addCategoryAxis("x", ["Time", "Indicator_Value"]);
  var py2 = pchart8.addMeasureAxis("y", "Amount");
  py2.tickFormat = ',.1f';
  var pseries8 = pchart8.addSeries("Indicator_Value", dimple.plot.bar);
  var pqLegend = pchart8.addLegend("65%", "5%", "40%", "95%");
  pqLegend.fontSize = "1px";
  pseries8.addOrderRule(true);

  pchart8.assignColor("Accommodation and Food Services", "red", "black", 0.8);
  pchart8.assignColor("Administrative and Support and Waste Management and Remediation Services", "Green", "black", 0.8);
  pchart8.assignColor("Agriculture, Forestry, Fishing and Hunting", "Yellow", "black", 0.8);
  pchart8.assignColor("Arts, Entertainment, and Recreation", "blue", "black", 0.8);
  pchart8.assignColor("Construction", "Orange", "black", 0.8);
  pchart8.assignColor("Educational Services", "Purple", "black", 0.8);
  pchart8.assignColor("Finance and Insurance", "Cyan", "black", 0.8);
  pchart8.assignColor("Health Care and Social Assistance", "Magenta", "black", 0.8);

  //needs new colors
  pchart8.assignColor("Information", "Lime", "black", 0.8);
  pchart8.assignColor("Management of Companies and Enterprises", "Pink", "black", 0.8);

  pchart8.assignColor("Manufacturing", "Teal", "black", 0.8);
  pchart8.assignColor("Mining, Quarrying, and Oil and Gas Extraction", "Lavender", "black", 0.8);
  pchart8.assignColor("Other Services (except Public Administration)", "Brown", "black", 0.8);
  pchart8.assignColor("Professional, Scientific, and Technical Services", "Beige", "black", 0.8);
  pchart8.assignColor("Public Administration", "Maroon", "black", 0.8);
  pchart8.assignColor("Real Estate and Rental and Leasing", "#aaffc3", "black", 0.8);
  pchart8.assignColor("Retail Trade", "Olive", "black", 0.8);
  pchart8.assignColor("Transportation and Warehousing", "Coral", "black", 0.8);
  pchart8.assignColor("Utilities", "Navy", "black", 0.8);
  pchart8.assignColor("Wholesale Trade", "Grey", "black", 0.8);
  pchart8.draw();
  var pe71 = document.getElementById("btn10wda");
  var pstrUser71 = pe71.options[pe71.selectedIndex].text;
  py2.title = pstrUser71;
  px2.title = " ";

  //seperation

  //chart 8 button

  //seperation
  window.isepdata1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q1")
  window.window.isepdata2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q2")
  window.isepdata3 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q3")
  window.isepdata4 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2016-Q4")
  window.isepdata5 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q1")
  window.isepdata6 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q2")
  window.isepdata7 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q3")
  window.isepdata8 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Industry"), "Indicator_Value", ["Accommodation and Food Services", "Administrative and Support and Waste Management and Remediation Services", "Agriculture, Forestry, Fishing and Hunting", "Arts, Entertainment, and Recreation", "Construction", "Educational Services", "Finance and Insurance", "Health Care and Social Assistance", "Information", "Management of Companies and Enterprises", "Manufacturing", "Mining, Quarrying, and Oil and Gas Extraction", "Other Services (except Public Administration)", "Professional, Scientific, and Technical Services", "Public Administration", "Real Estate and Rental and Leasing", "Retail Trade", "Transportation and Warehousing", "Utilities", "Wholesale Trade"]), "Time", "2017-Q4")
  window.asepdata1 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Age"), "Time", "2016-Q1")
  window.asepdata2 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Age"), "Time", "2016-Q2")
  window.asepdata3 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Age"), "Time", "2016-Q3")
  window.asepdata4 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Age"), "Time", "2016-Q4")
  window.asepdata5 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Age"), "Time", "2017-Q1")
  window.asepdata6 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Age"), "Time", "2017-Q2")
  window.asepdata7 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Age"), "Time", "2017-Q3")
  window.asepdata8 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Age"), "Time", "2017-Q4")
  window.gsepdata1 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Gender"), "Time", "2016-Q1")
  window.gsepdata2 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Gender"), "Time", "2016-Q2")
  window.gsepdata3 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Gender"), "Time", "2016-Q3")
  window.gsepdata4 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Gender"), "Time", "2016-Q4")
  window.gsepdata5 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Gender"), "Time", "2017-Q1")
  window.gsepdata6 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Gender"), "Time", "2017-Q2")
  window.gsepdata7 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Gender"), "Time", "2017-Q3")
  window.gsepdata8 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Gender"), "Time", "2017-Q4")
  window.esepdata1 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Education"), "Time", "2016-Q1")
  window.esepdata2 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Education"), "Time", "2016-Q2")
  window.esepdata3 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Education"), "Time", "2016-Q3")
  window.esepdata4 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Education"), "Time", "2016-Q4")
  window.esepdata5 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Education"), "Time", "2017-Q1")
  window.esepdata6 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Education"), "Time", "2017-Q2")
  window.esepdata7 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Education"), "Time", "2017-Q3")
  window.esepdata8 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Separations by Education"), "Time", "2017-Q4")
  console.log('Separations', {isepdata8, asepdata8, gsepdata8, esepdata8})

  window.chart61 = new dimple.chart(svg71, isepdata8);
  chart61.setBounds("9%", "12%", "55%", "55%")
  var px2 = chart61.addCategoryAxis("x", ["Time", "Indicator_Value"]);
  var sepy2 = chart61.addMeasureAxis("y", "Amount");
  sepy2.tickFormat = ',.0f';
  var pseries8 = chart61.addSeries("Indicator_Value", dimple.plot.bar);
  var pqLegend = chart61.addLegend("65%", "5%", "40%", "95%");
  pqLegend.fontSizechart61 = "1px";
  pseries8.addOrderRule(true);

  chart61.assignColor("Accommodation and Food Services", "red", "black", 0.8);
  chart61.assignColor("Administrative and Support and Waste Management and Remediation Services", "Green", "black", 0.8);
  chart61.assignColor("Agriculture, Forestry, Fishing and Hunting", "Yellow", "black", 0.8);
  chart61.assignColor("Arts, Entertainment, and Recreation", "blue", "black", 0.8);
  chart61.assignColor("Construction", "Orange", "black", 0.8);
  chart61.assignColor("Educational Services", "Purple", "black", 0.8);
  chart61.assignColor("Finance and Insurance", "Cyan", "black", 0.8);
  chart61.assignColor("Health Care and Social Assistance", "Magenta", "black", 0.8);

  //needs new colors
  chart61.assignColor("Information", "Lime", "black", 0.8);
  chart61.assignColor("Management of Companies and Enterprises", "Pink", "black", 0.8);

  chart61.assignColor("Manufacturing", "Teal", "black", 0.8);
  chart61.assignColor("Mining, Quarrying, and Oil and Gas Extraction", "Lavender", "black", 0.8);
  chart61.assignColor("Other Services (except Public Administration)", "Brown", "black", 0.8);
  chart61.assignColor("Professional, Scientific, and Technical Services", "Beige", "black", 0.8);
  chart61.assignColor("Public Administration", "Maroon", "black", 0.8);
  chart61.assignColor("Real Estate and Rental and Leasing", "#aaffc3", "black", 0.8);
  chart61.assignColor("Retail Trade", "Olive", "black", 0.8);
  chart61.assignColor("Transportation and Warehousing", "Coral", "black", 0.8);
  chart61.assignColor("Utilities", "Navy", "black", 0.8);
  chart61.assignColor("Wholesale Trade", "Grey", "black", 0.8);
  chart61.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
  chart61.assignColor("High school", "#ff5c33", "black", 0.7);
  chart61.assignColor("Some college", "#66ff66", "black", 0.7);
  chart61.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
  chart61.assignColor("N/A", "#919191", "black", 0.7);
  chart61.assignColor("14-18", "#4dc3ff", "black", 0.7);
  chart61.assignColor("19-21", "#ff5c33", "black", 0.7);
  chart61.assignColor("22-24", "#66ff66", "black", 0.7);
  chart61.assignColor("25-34", "#ffdb4d", "black", 0.7);
  chart61.assignColor("35-44", "#ffb84d", "black", 0.7);
  chart61.assignColor("45-54", "#00cccc", "black", 0.7);
  chart61.assignColor("55-64", "#6666ff", "black", 0.7);
  chart61.assignColor("65-99", "#ffcc99", "black", 0.7);

  chart61.assignColor("Male", "#3366ff", "black", 0.7);
  chart61.assignColor("Female", "pink", "black", 0.7);

  var pe712 = document.getElementById("btn102wda");
  var pstrUser712 = pe712.options[pe712.selectedIndex].text;
  sepy2.title = pstrUser712;
  px2.title = " ";

  chart61.draw();

  window.pchart61 = new dimple.chart(print71, isepdata8);
  pchart61.setBounds("9%", "12%", "50%", 300)
  var px2 = pchart61.addCategoryAxis("x", ["Time", "Indicator_Value"]);
  var psepy2 = pchart61.addMeasureAxis("y", "Amount");
  psepy2.tickFormat = ',.0f';
  var pseries8 = pchart61.addSeries("Indicator_Value", dimple.plot.bar);
  var pqLegend = pchart61.addLegend("65%", "5%", "40%", "95%");
  pqLegend.fontSize = "1px";
  pseries8.addOrderRule(true);

  pchart61.assignColor("Accommodation and Food Services", "red", "black", 0.8);
  pchart61.assignColor("Administrative and Support and Waste Management and Remediation Services", "Green", "black", 0.8);
  pchart61.assignColor("Agriculture, Forestry, Fishing and Hunting", "Yellow", "black", 0.8);
  pchart61.assignColor("Arts, Entertainment, and Recreation", "blue", "black", 0.8);
  pchart61.assignColor("Construction", "Orange", "black", 0.8);
  pchart61.assignColor("Educational Services", "Purple", "black", 0.8);
  pchart61.assignColor("Finance and Insurance", "Cyan", "black", 0.8);
  pchart61.assignColor("Health Care and Social Assistance", "Magenta", "black", 0.8);

  //needs new colors
  pchart61.assignColor("Information", "Lime", "black", 0.8);
  pchart61.assignColor("Management of Companies and Enterprises", "Pink", "black", 0.8);

  pchart61.assignColor("Manufacturing", "Teal", "black", 0.8);
  pchart61.assignColor("Mining, Quarrying, and Oil and Gas Extraction", "Lavender", "black", 0.8);
  pchart61.assignColor("Other Services (except Public Administration)", "Brown", "black", 0.8);
  pchart61.assignColor("Professional, Scientific, and Technical Services", "Beige", "black", 0.8);
  pchart61.assignColor("Public Administration", "Maroon", "black", 0.8);
  pchart61.assignColor("Real Estate and Rental and Leasing", "#aaffc3", "black", 0.8);
  pchart61.assignColor("Retail Trade", "Olive", "black", 0.8);
  pchart61.assignColor("Transportation and Warehousing", "Coral", "black", 0.8);
  pchart61.assignColor("Utilities", "Navy", "black", 0.8);
  pchart61.assignColor("Wholesale Trade", "Grey", "black", 0.8);
  pchart61.assignColor("Less than High school", "#4dc3ff", "black", 0.7);
  pchart61.assignColor("High school", "#ff5c33", "black", 0.7);
  pchart61.assignColor("Some college", "#66ff66", "black", 0.7);
  pchart61.assignColor("Bachelor's or Higher", "#ffdb4d", "black", 0.7);
  pchart61.assignColor("N/A", "#919191", "black", 0.7);
  pchart61.assignColor("14-18", "#4dc3ff", "black", 0.7);
  pchart61.assignColor("19-21", "#ff5c33", "black", 0.7);
  pchart61.assignColor("22-24", "#66ff66", "black", 0.7);
  pchart61.assignColor("25-34", "#ffdb4d", "black", 0.7);
  pchart61.assignColor("35-44", "#ffb84d", "black", 0.7);
  pchart61.assignColor("45-54", "#00cccc", "black", 0.7);
  pchart61.assignColor("55-64", "#6666ff", "black", 0.7);
  pchart61.assignColor("65-99", "#ffcc99", "black", 0.7);

  pchart61.assignColor("Male", "#3366ff", "black", 0.7);
  pchart61.assignColor("Female", "pink", "black", 0.7);

  var pe712 = document.getElementById("btn102wda");
  var pstrUser712 = pe712.options[pe712.selectedIndex].text;
  psepy2.title = pstrUser712;
  px2.title = " ";

  pchart61.draw();


  //chart 8 button

  //new apprenticeship programs

  window.aprog1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "New Maryland Apprenticeship Programs"), "Location", CountyName2), "Time", "2016");
  window.aprog2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "New Maryland Apprenticeship Programs"), "Location", CountyName2), "Time", "2017");
  window.aprog3 = dimple.filterData(dimple.filterData(data, "Indicator", "New Maryland Apprenticeship Programs"), "Location", CountyName2);
  window.aNew1 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Apprentices"), "Location", CountyName2), "Time", "2016");
  window.aNew2 = dimple.filterData(dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Apprentices"), "Location", CountyName2), "Time", "2017");
  window.aNew3 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Apprentices"), "Location", CountyName2)
  console.log({isepdata8, asepdata8, gsepdata8, esepdata8})
  console.log(isepdata8)
  let notMdisepdata8 = CountyName == 'Maryland' ? '' : `
               <thead>
                  <tr>
                     <th class="HeadRow">Separations by Industry</th>
                     <th class="HeadRow">2017Q4</th>
                  </tr>
                  <tr class="HeadRow" style="background-color: white;">
                     <th>Industry</th>
                     <th style='text-align:center;'>Separations</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>${isepdata8[13]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[13]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>${isepdata8[18]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[18]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>${isepdata8[19]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[19]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>${isepdata8[5]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[1]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>${isepdata8[11]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[11]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>${isepdata8[10]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[10]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>${isepdata8[2]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[2]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>${isepdata8[0]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[0]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>${isepdata8[12]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[12]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>${isepdata8[14]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[14]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>${isepdata8[15]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[15]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>${isepdata8[7]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[7]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>${isepdata8[17]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[17]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>${isepdata8[3]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[3]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>${isepdata8[6]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[6]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>${isepdata8[4]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[4]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>${isepdata8[8]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[8]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>${isepdata8[1]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[1]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>${isepdata8[9]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[9]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>${isepdata8[16]["Indicator_Value"]}</td>
                     <td>${cma(isepdata8[16]["Amount"])}</td>
                  </tr>
               </tbody>
  `
  document.getElementById('table15').innerHTML = `
               ${notMdisepdata8}
               <thead>
                  <tr>
                     <th class="HeadRow" colspan="2">Separations by Gender</th>
                  </tr>
                  <tr class="HeadRow" style="background-color: white;">
                     <th>Gender</th>
                     <th style='text-align:center;'>Separations</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Male</td>
                     <td>${cma(gsepdata8[0]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>Female</td>
                     <td>${cma(gsepdata8[1]["Amount"])}</td>
                  </tr>
               </tbody>
               <thead>
                  <tr>
                     <th class="HeadRow" colspan="2">Separations by Education</th>
                  </tr>
                  <tr class="HeadRow" style="background-color: white;">
                     <th>Education Level</th>
                     <th style='text-align:center;'>Separations</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Less than High school</td>
                     <td>${cma(esepdata8[0]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>High school</td>
                     <td>${cma(esepdata8[1]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>Some College</td>
                     <td>${cma(esepdata8[2]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>Bachelor's or Higher</td>
                     <td>${cma(esepdata8[3]["Amount"])}</td>
                  </tr>
                  <tr class="FootRow">
                     <td>NR</td>
                     <td>${cma(esepdata8[4]["Amount"])}</td>
                  </tr>
               </tbody>
               <thead>
                  <tr>
                     <th class="HeadRow" colspan="2">Separations by Age</th>
                  </tr>
                  <tr class="HeadRow" style="background-color: white;">
                     <th>Age Range</th>
                     <th style='text-align:center;'>Separations</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Age 14-18</td>
                     <td>${cma(asepdata8[0]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>Age 19-21</td>
                     <td>${cma(asepdata8[1]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>Age 22-24</td>
                     <td>${cma(asepdata8[2]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>Age 25-34</td>
                     <td>${cma(asepdata8[3]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>Age 35-44</td>
                     <td>${cma(asepdata8[4]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>Age 45-54</td>
                     <td>${cma(asepdata8[5]["Amount"])}</td>
                  </tr>
                  <tr>
                     <td>Age 55-64</td>
                     <td>${cma(asepdata8[6]["Amount"])}</td>
                  </tr>
                  <tr class="FootRow">
                     <td>Age 64-99</td>
                     <td>${cma(asepdata8[7]["Amount"])}</td>
                  </tr>
               </tbody>
  `
  d3.select("#btn7wda").on("change", function () {
    console.log('Clicked, btn7wda');
    y2.tickFormat = ',.0f';

    var e7 = document.getElementById("btn7wda");
    var e10 = document.getElementById("btn10wda");
    var strUser7 = e7.options[e7.selectedIndex].text;
    var strUser10 = e10.options[e10.selectedIndex].text;
    y2.title = strUser10;
    if (strUser7 == "2016-Q1") {
      console.log('2016-Q1');
      window.displayIndustryMetricsTable(wdata1, hiredata1, avgdata1, netdata1, turndata1)
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata1;
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata1; }
      if (strUser10 == "New Hires") { chart8.data = hiredata1; }
      if (strUser10 == "Turnover Rate") {
        y2.tickFormat =  '.1%';
        chart8.data = turndata1;
      }
      if (strUser10 == "Workers") { chart8.data = wdata1; }
    }

    if (strUser7 == "2016-Q2") {
      console.log('2016-Q2');
      window.displayIndustryMetricsTable(wdata2, hiredata2, avgdata2, netdata2, turndata2)
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata2;
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata2; }
      if (strUser10 == "New Hires") { chart8.data = hiredata2; }
      if (strUser10 == "Turnover Rate") {
        y2.tickFormat =  '.1%';
        chart8.data = turndata2;
      }
      if (strUser10 == "Workers") { chart8.data = wdata2; }

    }

    if (strUser7 == "2016-Q3") {
      console.log('2016-Q3');
      window.displayIndustryMetricsTable(wdata3, hiredata3, avgdata3, netdata3, turndata3)
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata3;
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata3; }
      if (strUser10 == "New Hires") { chart8.data = hiredata3; }
      if (strUser10 == "Turnover Rate") {
        y2.tickFormat =  '.1%';
        chart8.data = turndata3;
      }
      if (strUser10 == "Workers") { chart8.data = wdata3;}
    }

    if (strUser7 == "2016-Q4") {
      window.displayIndustryMetricsTable(wdata4, hiredata4, avgdata4, netdata4, turndata4)
      console.log('2016-Q4');
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata4;
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata4; }
      if (strUser10 == "New Hires") { chart8.data = hiredata4; }
      if (strUser10 == "Turnover Rate") {
        y2.tickFormat =  '.1%';
        chart8.data = turndata4;
      }
      if (strUser10 == "Workers") { chart8.data = wdata4; }
    }

    if (strUser7 == "2017-Q1") {
      window.displayIndustryMetricsTable(wdata5, hiredata5, avgdata5, netdata5, turndata5)
      console.log('2017-Q1');
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata5;
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata5; }
      if (strUser10 == "New Hires") { chart8.data = hiredata5; }
      if (strUser10 == "Turnover Rate") {
        y2.tickFormat =  '.1%';
        chart8.data = turndata5;
      }
      if (strUser10 == "Workers") { chart8.data = wdata5; }

    }

    if (strUser7 == "2017-Q2") {
      console.log('2017-Q2');
      window.displayIndustryMetricsTable(wdata6, hiredata6, avgdata6, netdata6, turndata6)
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata6;
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata6; }
      if (strUser10 == "New Hires") { chart8.data = hiredata6; }
      if (strUser10 == "Turnover Rate") {
        y2.tickFormat =  '.1%';
        chart8.data = turndata6;
      }
      if (strUser10 == "Workers") { chart8.data = wdata6; }

    }

    if (strUser7 == "2017-Q3") {
      window.displayIndustryMetricsTable(wdata7, hiredata7, avgdata7, netdata7, turndata7)
      console.log('2017-Q3');
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata7;
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata7; }
      if (strUser10 == "New Hires") { chart8.data = hiredata7; }
      if (strUser10 == "Turnover Rate") {
        y2.tickFormat =  '.1%';
        chart8.data = turndata7;
      }
      if (strUser10 == "Workers") { chart8.data = wdata7; }
    }

    if (strUser7 == "2017-Q4") {
      console.log('2017-Q4');
      window.displayIndustryMetricsTable(wdata8, hiredata8, avgdata8, netdata8, turndata8)
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata8;
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata8; }
      if (strUser10 == "New Hires") { chart8.data = hiredata8; }
      if (strUser10 == "Turnover Rate") {
        y2.tickFormat =  '.1%';
        chart8.data = turndata7;
      }
      if (strUser10 == "Workers") { chart8.data = wdata8; }

    }

    if (strUser7 == "2018-Q1") {
      console.log('2017-Q1');
      window.displayIndustryMetricsTable(wdata9, hiredata9, avgdata9, netdata9, turndata9)
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata9;
      }
      if (strUser10 == "Job Net Changes") {chart8.data = netdata9; }
      if (strUser10 == "New Hires") { chart8.data = hiredata9; }
      if (strUser10 == "Turnover Rate") { chart8.data = turndata9; }
      if (strUser10 == "Workers") { chart8.data = wdata9; }

    }

    if (strUser7 == "2016Q4") {
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata10;
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata10; }
      if (strUser10 == "New Hires") { chart8.data = hiredata10; }
      if (strUser10 == "Turnover Rate") { chart8.data = turndata10; }
      if (strUser10 == "Workers") { chart8.data = wdata10; }


    }

    if (strUser7 == "2017Q1") {
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata10;
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata10; }
      if (strUser10 == "New Hires") { chart8.data = hiredata01; }
      if (strUser10 == "Turnover Rate") { chart8.data = turndata10; }
      if (strUser10 == "Workers") { chart8.data = wdata01; }

    }

    if (strUser7 == "2017Q2") {
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata10; 
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata10; }
      if (strUser10 == "New Hires") { chart8.data = hiredata02; }
      if (strUser10 == "Turnover Rate") { chart8.data = turndata10; }
      if (strUser10 == "Workers") { chart8.data = wdata02; }
    }
    chart8.draw(1000);

  });

  d3.select("#btn10wda").on("change", function () {
    y2.tickFormat = ',.0f';

    var e7 = document.getElementById("btn7wda");
    var e10 = document.getElementById("btn10wda");
    var strUser7 = e7.options[e7.selectedIndex].text;
    var strUser10 = e10.options[e10.selectedIndex].text;
    y2.title = strUser10;
    console.log('btn10wda ----- strUser7', strUser7, '---- strUser10', strUser10)
    if (strUser7 == "2016-Q1") {
      window.displayIndustryMetricsTable(wdata1, hiredata1, avgdata1, netdata1, turndata1)
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata1;
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata1; }
      if (strUser10 == "New Hires") { chart8.data = hiredata1; }
      if (strUser10 == "Turnover Rate") {
        y2.tickFormat =  '.1%';
        chart8.data = turndata1;
      }
      if (strUser10 == "Workers") { chart8.data = wdata1; }

    }

    if (strUser7 == "2016-Q2") {
      window.displayIndustryMetricsTable(wdata2, hiredata2, avgdata2, netdata2, turndata2)
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata2;
      }
      if (strUser10 == "Job Net Changes") {
        chart8.data = netdata2;
      }
      if (strUser10 == "New Hires") {
        chart8.data = hiredata2;
      }
      if (strUser10 == "Turnover Rate") {
        y2.tickFormat =  '.1%';
        chart8.data = turndata2; 
      }
      if (strUser10 == "Workers") { chart8.data = wdata2; }

    }

    if (strUser7 == "2016-Q3") {
      window.displayIndustryMetricsTable(wdata3, hiredata3, avgdata3, netdata3, turndata3)
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata3;
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata3; }
      if (strUser10 == "New Hires") { chart8.data = hiredata3; }
      if (strUser10 == "Turnover Rate") {
        y2.tickFormat =  '.1%';
        chart8.data = turndata3;
      }
      if (strUser10 == "Workers") { chart8.data = wdata3; }

    }

    if (strUser7 == "2016-Q4") {
      window.displayIndustryMetricsTable(wdata4, hiredata4, avgdata4, netdata4, turndat4)
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata4;
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata4; }
      if (strUser10 == "New Hires") { chart8.data = hiredata4; }
      if (strUser10 == "Turnover Rate") {
        y2.tickFormat =  '.1%';
        chart8.data = turndata4;
      }
      if (strUser10 == "Workers") { chart8.data = wdata4; }

    }

    if (strUser7 == "2017-Q1") {
      window.displayIndustryMetricsTable(wdata5, hiredata5, avgdata5, netdata5, turndata5)
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata5;
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata5; }
      if (strUser10 == "New Hires") { chart8.data = hiredata5; }
      if (strUser10 == "Turnover Rate") {
        y2.tickFormat =  '.1%';
        chart8.data = turndata5;
      }
      if (strUser10 == "Workers") { chart8.data = wdata5; }

    }

    if (strUser7 == "2017-Q2") {
      window.displayIndustryMetricsTable(wdata6, hiredata6, avgdata6, netdata6, turndata6)
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata6; 
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata6;}
      if (strUser10 == "New Hires") { chart8.data = hiredata6; }
      if (strUser10 == "Turnover Rate") {
        y2.tickFormat =  '.1%';
        chart8.data = turndata6;
      }
      if (strUser10 == "Workers") { chart8.data = wdata6; }

    }

    if (strUser7 == "2017-Q3") {
      window.displayIndustryMetricsTable(wdata7, hiredata7, avgdata7, netdata7, turndata7)
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata7;
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata7; }
      if (strUser10 == "New Hires") { chart8.data = hiredata7; }
      if (strUser10 == "Turnover Rate") {
        y2.tickFormat =  '.1%';
        chart8.data = turndata7;
      }
      if (strUser10 == "Workers") { chart8.data = wdata7; }
    }

    if (strUser7 == "2017-Q4") {
      window.displayIndustryMetricsTable(wdata8, hiredata8, avgdata8, netdata8, turndata8)
      if (strUser10 == "Average Monthly Earnings" && avgdata8.length != 0) {
        console.log('Average Monthly Earnings', avgdata8); 
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata8;
      }
      if (strUser10 == "Job Net Changes") { 
        console.log('Job Net Changes', netdata8); 
        chart8.data = netdata8; 
      }
      if (strUser10 == "New Hires") { 
        console.log('New Hires', hiredata8); 
        chart8.data = hiredata8; 
      }
      if (strUser10 == "Turnover Rate") {
        console.log('Turnover Rate', turndata8); 
        y2.tickFormat =  '.1%';
        chart8.data = turndata8;
      }
      if (strUser10 == "Workers") { 
        console.log('Workers', wdata8); 
        chart8.data = wdata8;
      }
    }

    if (strUser7 == "2018-Q1") {
      window.displayIndustryMetricsTable(wdata9, hiredata9, avgdata9, netdata9, turndata9)
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata9;
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata9; }
      if (strUser10 == "New Hires") { chart8.data = hiredata9; }
      if (strUser10 == "Turnover Rate") { chart8.data = turndata9; }
      if (strUser10 == "Workers") { chart8.data = wdata9; }

    }

    if (strUser7 == "2016Q4") {
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata10;
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata10; }
      if (strUser10 == "New Hires") { chart8.data = hiredata10; }
      if (strUser10 == "Turnover Rate") { chart8.data = turndata10; }
      if (strUser10 == "Workers") { chart8.data = wdata10; }
    }

    if (strUser7 == "2017Q1") {

      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata10;
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata10; }
      if (strUser10 == "New Hires") { chart8.data = hiredata01; }
      if (strUser10 == "Turnover Rate") { chart8.data = turndata10; }
      if (strUser10 == "Workers") { chart8.data = wdata01; }

    }

    if (strUser7 == "2017Q2") {
      if (strUser10 == "Average Monthly Earnings") {
        y2.tickFormat = '$,.0f';
        chart8.data = avgdata10;
      }
      if (strUser10 == "Job Net Changes") { chart8.data = netdata10; }
      if (strUser10 == "New Hires") { chart8.data = hiredata02; }
      if (strUser10 == "Turnover Rate") { chart8.data = turndata10; }
      if (strUser10 == "Workers") { chart8.data = wdata02; }
    }
    drawAll();
    chart8.draw(1000);
    hidePrint();
    // window.hideall(['Print6'])
  });

  //Chart 6 - end

  //chart 9 OTM
  window.dataSwapi2 = function () {
    sepy2.tickFormat = ',.0f';


    var e7 = document.getElementById("btn18wda");
    var e10 = document.getElementById("btn102wda");
    var strUser7 = e7.options[e7.selectedIndex].text;
    var strUser10 = e10.options[e10.selectedIndex].text;
    sepy2.title = strUser10;
    if (strUser7 == "2016-Q1") {
      if (strUser10 == "Industry") { chart61.data = isepdata1; }
      if (strUser10 == "Gender") { chart61.data = gsepdata1; }
      if (strUser10 == "Education") { chart61.data = esepdata1; }
      if (strUser10 == "Age") { chart61.data = asepdata1; }
    }

    if (strUser7 == "2016-Q2") {
      if (strUser10 == "Industry") { chart61.data = isepdata2; }
      if (strUser10 == "Gender") { chart61.data = gsepdata2; }
      if (strUser10 == "Education") { chart61.data = esepdata2; }
      if (strUser10 == "Age") { chart61.data = asepdata2; }
    }

    if (strUser7 == "2016-Q3") {
      if (strUser10 == "Industry") { chart61.data = isepdata3; }
      if (strUser10 == "Gender") { chart61.data = gsepdata3; }
      if (strUser10 == "Education") { chart61.data = esepdata3; }
      if (strUser10 == "Age") { chart61.data = asepdata3; }
    }

    if (strUser7 == "2016-Q4") {
      if (strUser10 == "Industry") { chart61.data = isepdata4; }
      if (strUser10 == "Gender") { chart61.data = gsepdata4; }
      if (strUser10 == "Education") { chart61.data = esepdata4; }
      if (strUser10 == "Age") { chart61.data = asepdata4; }
    }

    if (strUser7 == "2017-Q1") {
      if (strUser10 == "Industry") { chart61.data = isepdata5; }
      if (strUser10 == "Gender") { chart61.data = gsepdata5; }
      if (strUser10 == "Education") { chart61.data = esepdata5; }
      if (strUser10 == "Age") { chart61.data = asepdata5; }
    }

    if (strUser7 == "2017-Q2") {
      if (strUser10 == "Industry") { chart61.data = isepdata6; }
      if (strUser10 == "Gender") { chart61.data = gsepdata6; }
      if (strUser10 == "Education") { chart61.data = esepdata6; }
      if (strUser10 == "Age") { chart61.data = asepdata6; }
    }

    if (strUser7 == "2017-Q3") {
      if (strUser10 == "Industry") { chart61.data = isepdata7; }
      if (strUser10 == "Gender") { chart61.data = gsepdata7; }
      if (strUser10 == "Education") { chart61.data = esepdata7; }
      if (strUser10 == "Age") { chart61.data = asepdata7; }
    }

    if (strUser7 == "2017-Q4") {
      if (strUser10 == "Industry") { chart61.data = isepdata8; }
      if (strUser10 == "Gender") { chart61.data = gsepdata8; }
      if (strUser10 == "Education") { chart61.data = esepdata8; }
      if (strUser10 == "Age") { chart61.data = asepdata8; }
    }

    psepy2.tickFormat = sepy2.tickFormat;
    pchart61.data = chart61.data;
    pchart61.draw(1000);
    chart61.draw(1000);
  };
  d3.select("#btn9wda").on("change", function () {
    console.log('CLICKED btn9wda')
    var e7 = document.getElementById("btn9");
    var strUser7 = e7.options[e7.selectedIndex].text;
  });
  d3.select("#btn18wda").on("change", dataSwapi2 );
  d3.select("#btn102wda").on("change", dataSwapi2 );
  d3.select("#btn8wda").on("change", function () {
    var e7 = document.getElementById("btn8");
    var strUser7 = e7.options[e7.selectedIndex].text;
  });

  window.onresize = function () { drawAll(); };

  window.dataSwap1 = function () {
    var e3 = document.getElementById("btn3wda");
    var strUser3 = e3.options[e3.selectedIndex].text;
    var e31 = document.getElementById("btn31wda");
    var strUser31 = e31.options[e31.selectedIndex].text;
    if (strUser3 == "2016-Q1") {
      if (strUser31 == "By Education") {
        wChart.data = workData1;
        avgChart.data = averageData1;
        jc.data = jobData1;
        newHireChart.data = newHireData1;
        turnChart.data = turnOverData1;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData1;
        avgChart.data = averageData1;
        jc.data = jobData1;
        newHireChart.data = newHireData1;
        turnChart.data = turnOverData1;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData11;
        avgChart.data = averageData11;
        jc.data = jobData11;
        newHireChart.data = newHireData11;
        turnChart.data = turnOverData11;
      }
    }
    if (strUser3 == "2016-Q2") {
      if (strUser31 == "By Education") {
        wChart.data = workData2;
        avgChart.data = averageData2;
        jc.data = jobData2;
        newHireChart.data = newHireData2;
        turnChart.data = turnOverData2;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData2;
        avgChart.data = averageData2;
        jc.data = jobData2;
        newHireChart.data = newHireData2;
        turnChart.data = turnOverData2;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData21;
        avgChart.data = averageData21;
        jc.data = jobData21;
        newHireChart.data = newHireData21;
        turnChart.data = turnOverData21;
      }
    }
    if (strUser3 == "2016-Q3") {
      if (strUser31 == "By Education") {
        wChart.data = workData3;
        avgChart.data = averageData3;
        jc.data = jobData3;
        newHireChart.data = newHireData3;
        turnChart.data = turnOverData3;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData3;
        avgChart.data = averageData3;
        jc.data = jobData3;
        newHireChart.data = newHireData3;
        turnChart.data = turnOverData3;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData31;
        avgChart.data = averageData31;
        jc.data = jobData31;
        newHireChart.data = newHireData31;
        turnChart.data = turnOverData31;
      }
    }
    if (strUser3 == "2016-Q4") {
      if (strUser31 == "By Education") {
        wChart.data = workData4;
        avgChart.data = averageData4;
        jc.data = jobData4;
        newHireChart.data = newHireData4;
        turnChart.data = turnOverData4;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData4;
        avgChart.data = averageData4;
        jc.data = jobData4;
        newHireChart.data = newHireData4;
        turnChart.data = turnOverData4;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData41;
        avgChart.data = averageData41;
        jc.data = jobData41;
        newHireChart.data = newHireData41;
        turnChart.data = turnOverData41;
      }
    }
    if (strUser3 == "2017-Q1") {
      if (strUser31 == "By Education") {
        wChart.data = workData5;
        avgChart.data = averageData5;
        jc.data = jobData5;
        newHireChart.data = newHireData5;
        turnChart.data = turnOverData5;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData5;
        avgChart.data = averageData5;
        jc.data = jobData5;
        newHireChart.data = newHireData5;
        turnChart.data = turnOverData5;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData51;
        avgChart.data = averageData51;
        jc.data = jobData51;
        newHireChart.data = newHireData51;
        turnChart.data = turnOverData51;
      }
    }
    if (strUser3 == "2017-Q2") {
      if (strUser31 == "By Education") {
        wChart.data = workData6;
        avgChart.data = averageData6;
        jc.data = jobData6;
        newHireChart.data = newHireData6;
        turnChart.data = turnOverData6;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData6;
        avgChart.data = averageData6;
        jc.data = jobData6;
        newHireChart.data = newHireData6;
        turnChart.data = turnOverData6;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData61;
        avgChart.data = averageData61;
        jc.data = jobData61;
        newHireChart.data = newHireData61;
        turnChart.data = turnOverData61;
      }
    }
    if (strUser3 == "2017-Q3") {
      if (strUser31 == "By Education") {
        wChart.data = workData7;
        avgChart.data = averageData7;
        jc.data = jobData7;
        newHireChart.data = newHireData7;
        turnChart.data = turnOverData7;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData7;
        avgChart.data = averageData7;
        jc.data = jobData7;
        newHireChart.data = newHireData7;
        turnChart.data = turnOverData7;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData71;
        avgChart.data = averageData71;
        jc.data = jobData71;
        newHireChart.data = newHireData71;
        turnChart.data = turnOverData71;
      }
    }

    if (strUser3 == "2017-Q4") {
      if (strUser31 == "By Education") {
        wChart.data = workData8;
        avgChart.data = averageData8;
        jc.data = jobData8;
        newHireChart.data = newHireData8;
        turnChart.data = turnOverData7;

      }
      if (strUser31 == "By Age") {
        wChart.data = workData8;
        avgChart.data = averageData8;
        jc.data = jobData8;
        newHireChart.data = newHireData8;
        turnChart.data = turnOverData7;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData81;
        avgChart.data = averageData81;
        jc.data = jobData81;
        newHireChart.data = newHireData81;
        turnChart.data = turnOverData71;
      }
    }

    if (strUser3 == "2018-Q1") {
      if (strUser31 == "By Education") {
        wChart.data = workData9;
        avgChart.data = averageData9;
        jc.data = jobData9;
        newHireChart.data = newHireData9;
        turnChart.data = turnOverData9;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData9;
        avgChart.data = averageData9;
        jc.data = jobData9;
        newHireChart.data = newHireData9;
        turnChart.data = turnOverData9;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData82;
        avgChart.data = averageData82;
        jc.data = jobData82;
        newHireChart.data = newHireData82;
        turnChart.data = turnOverData82;
      }


    }

    if (strUser3 == "2016Q4") {
      if (strUser31 == "By Education") {
        wChart.data = workData10;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData10;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData10;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData10;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData83;
        avgChart.data = averageData83;
        jc.data = jobData83;
        newHireChart.data = newHireData83;
        turnChart.data = turnOverData83;
      }


    }

    if (strUser3 == "2017Q1") {
      if (strUser31 == "By Education") {
        wChart.data = workData01;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData01;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData01;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData01;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData84;
        avgChart.data = averageData83;
        jc.data = jobData83;
        newHireChart.data = newHireData84;
        turnChart.data = turnOverData83;
      }


    }

    if (strUser3 == "2017Q2") {
      if (strUser31 == "By Education") {
        wChart.data = workData02;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData02;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData02;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData02;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData85;
        avgChart.data = averageData83;
        jc.data = jobData83;
        newHireChart.data = newHireData85;
        turnChart.data = turnOverData83;
      }
    }

    pwChart.data = wChart.data;
    pavgChart.data = avgChart.data;
    pjc.data = jc.data;
    pnewHireChart.data = newHireChart.data;
    pturnChart.data = turnChart.data;
    drawAll();
    hidePrint();
  };

  window.dataSwap12 = function () {
    var e3 = document.getElementById("btn4wda");
    var strUser3 = e3.options[e3.selectedIndex].text;
    var e31 = document.getElementById("btn41wda");
    var strUser31 = e31.options[e31.selectedIndex].text;
    if (strUser3 == "2016-Q1") {
      if (strUser31 == "By Education") {
        wChart.data = workData1;
        avgChart.data = averageData1;
        jc.data = jobData1;
        newHireChart.data = newHireData1;
        turnChart.data = turnOverData1;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData1;
        avgChart.data = averageData1;
        jc.data = jobData1;
        newHireChart.data = newHireData1;
        turnChart.data = turnOverData1;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData11;
        avgChart.data = averageData11;
        jc.data = jobData11;
        newHireChart.data = newHireData11;
        turnChart.data = turnOverData11;
      }
    }
    if (strUser3 == "2016-Q2") {
      if (strUser31 == "By Education") {
        wChart.data = workData2;
        avgChart.data = averageData2;
        jc.data = jobData2;
        newHireChart.data = newHireData2;
        turnChart.data = turnOverData2;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData2;
        avgChart.data = averageData2;
        jc.data = jobData2;
        newHireChart.data = newHireData2;
        turnChart.data = turnOverData2;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData21;
        avgChart.data = averageData21;
        jc.data = jobData21;
        newHireChart.data = newHireData21;
        turnChart.data = turnOverData21;
      }
    }
    if (strUser3 == "2016-Q3") {
      if (strUser31 == "By Education") {
        wChart.data = workData3;
        avgChart.data = averageData3;
        jc.data = jobData3;
        newHireChart.data = newHireData3;
        turnChart.data = turnOverData3;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData3;
        avgChart.data = averageData3;
        jc.data = jobData3;
        newHireChart.data = newHireData3;
        turnChart.data = turnOverData3;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData31;
        avgChart.data = averageData31;
        jc.data = jobData31;
        newHireChart.data = newHireData31;
        turnChart.data = turnOverData31;
      }
    }
    if (strUser3 == "2016-Q4") {
      if (strUser31 == "By Education") {
        wChart.data = workData4;
        avgChart.data = averageData4;
        jc.data = jobData4;
        newHireChart.data = newHireData4;
        turnChart.data = turnOverData4;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData4;
        avgChart.data = averageData4;
        jc.data = jobData4;
        newHireChart.data = newHireData4;
        turnChart.data = turnOverData4;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData41;
        avgChart.data = averageData41;
        jc.data = jobData41;
        newHireChart.data = newHireData41;
        turnChart.data = turnOverData41;
      }
    }
    if (strUser3 == "2017-Q1") {
      if (strUser31 == "By Education") {
        wChart.data = workData5;
        avgChart.data = averageData5;
        jc.data = jobData5;
        newHireChart.data = newHireData5;
        turnChart.data = turnOverData5;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData5;
        avgChart.data = averageData5;
        jc.data = jobData5;
        newHireChart.data = newHireData5;
        turnChart.data = turnOverData5;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData51;
        avgChart.data = averageData51;
        jc.data = jobData51;
        newHireChart.data = newHireData51;
        turnChart.data = turnOverData51;
      }
    }
    if (strUser3 == "2017-Q2") {
      if (strUser31 == "By Education") {
        wChart.data = workData6;
        avgChart.data = averageData6;
        jc.data = jobData6;
        newHireChart.data = newHireData6;
        turnChart.data = turnOverData6;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData6;
        avgChart.data = averageData6;
        jc.data = jobData6;
        newHireChart.data = newHireData6;
        turnChart.data = turnOverData6;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData61;
        avgChart.data = averageData61;
        jc.data = jobData61;
        newHireChart.data = newHireData61;
        turnChart.data = turnOverData61;
      }
    }
    if (strUser3 == "2017-Q3") {
      if (strUser31 == "By Education") {
        wChart.data = workData7;
        avgChart.data = averageData7;
        jc.data = jobData7;
        newHireChart.data = newHireData7;
        turnChart.data = turnOverData7;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData7;
        avgChart.data = averageData7;
        jc.data = jobData7;
        newHireChart.data = newHireData7;
        turnChart.data = turnOverData7;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData71;
        avgChart.data = averageData71;
        jc.data = jobData71;
        newHireChart.data = newHireData71;
        turnChart.data = turnOverData71;
      }
    }
    if (strUser3 == "2017-Q4") {
      if (strUser31 == "By Education") {
        wChart.data = workData8;
        avgChart.data = averageData8;
        jc.data = jobData8;
        newHireChart.data = newHireData8;
        turnChart.data = turnOverData7;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData8;
        avgChart.data = averageData8;
        jc.data = jobData8;
        newHireChart.data = newHireData8;
        turnChart.data = turnOverData7;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData81;
        avgChart.data = averageData81;
        jc.data = jobData81;
        newHireChart.data = newHireData81;
        turnChart.data = turnOverData71;
      }
    }

    if (strUser3 == "2018-Q1") {
      if (strUser31 == "By Education") {
        wChart.data = workData9;
        avgChart.data = averageData9;
        jc.data = jobData9;
        newHireChart.data = newHireData9;
        turnChart.data = turnOverData9;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData9;
        avgChart.data = averageData9;
        jc.data = jobData9;
        newHireChart.data = newHireData9;
        turnChart.data = turnOverData9;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData82;
        avgChart.data = averageData82;
        jc.data = jobData82;
        newHireChart.data = newHireData82;
        turnChart.data = turnOverData82;
      }
    }

    if (strUser3 == "2016Q4") {
      if (strUser31 == "By Education") {
        wChart.data = workData10;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData10;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData10;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData10;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData83;
        avgChart.data = averageData83;
        jc.data = jobData83;
        newHireChart.data = newHireData83;
        turnChart.data = turnOverData83;
      }
    }

    if (strUser3 == "2017Q1") {
      if (strUser31 == "By Education") {
        wChart.data = workData01;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData01;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData01;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData01;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData84;
        avgChart.data = averageData83;
        jc.data = jobData83;
        newHireChart.data = newHireData84;
        turnChart.data = turnOverData83;
      }
    }

    if (strUser3 == "2017Q2") {
      if (strUser31 == "By Education") {
        wChart.data = workData02;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData02;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData02;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData02;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData85;
        avgChart.data = averageData83;
        jc.data = jobData83;
        newHireChart.data = newHireData85;
        turnChart.data = turnOverData83;
      }


    }

    pwChart.data = wChart.data;
    pavgChart.data = avgChart.data;
    pjc.data = jc.data;
    pnewHireChart.data = newHireChart.data;
    pturnChart.data = turnChart.data;
    drawAll();
    hidePrint();
  };

  window.dataSwap13 = function () {
    var e3 = document.getElementById("btn5wda");
    var strUser3 = e3.options[e3.selectedIndex].text;
    var e31 = document.getElementById("btn51wda");
    var strUser31 = e31.options[e31.selectedIndex].text;
    if (strUser3 == "2016-Q1") {
      if (strUser31 == "By Education") {
        wChart.data = workData1;
        avgChart.data = averageData1;
        jc.data = jobData1;
        newHireChart.data = newHireData1;
        turnChart.data = turnOverData1;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData1;
        avgChart.data = averageData1;
        jc.data = jobData1;
        newHireChart.data = newHireData1;
        turnChart.data = turnOverData1;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData11;
        avgChart.data = averageData11;
        jc.data = jobData11;
        newHireChart.data = newHireData11;
        turnChart.data = turnOverData11;
      }
    }
    if (strUser3 == "2016-Q2") {
      if (strUser31 == "By Education") {
        wChart.data = workData2;
        avgChart.data = averageData2;
        jc.data = jobData2;
        newHireChart.data = newHireData2;
        turnChart.data = turnOverData2;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData2;
        avgChart.data = averageData2;
        jc.data = jobData2;
        newHireChart.data = newHireData2;
        turnChart.data = turnOverData2;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData21;
        avgChart.data = averageData21;
        jc.data = jobData21;
        newHireChart.data = newHireData21;
        turnChart.data = turnOverData21;
      }
    }
    if (strUser3 == "2016-Q3") {
      if (strUser31 == "By Education") {
        wChart.data = workData3;
        avgChart.data = averageData3;
        jc.data = jobData3;
        newHireChart.data = newHireData3;
        turnChart.data = turnOverData3;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData3;
        avgChart.data = averageData3;
        jc.data = jobData3;
        newHireChart.data = newHireData3;
        turnChart.data = turnOverData3;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData31;
        avgChart.data = averageData31;
        jc.data = jobData31;
        newHireChart.data = newHireData31;
        turnChart.data = turnOverData31;
      }
    }
    if (strUser3 == "2016-Q4") {
      if (strUser31 == "By Education") {
        wChart.data = workData4;
        avgChart.data = averageData4;
        jc.data = jobData4;
        newHireChart.data = newHireData4;
        turnChart.data = turnOverData4;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData4;
        avgChart.data = averageData4;
        jc.data = jobData4;
        newHireChart.data = newHireData4;
        turnChart.data = turnOverData4;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData41;
        avgChart.data = averageData41;
        jc.data = jobData41;
        newHireChart.data = newHireData41;
        turnChart.data = turnOverData41;
      }
    }
    if (strUser3 == "2017-Q1") {
      if (strUser31 == "By Education") {
        wChart.data = workData5;
        avgChart.data = averageData5;
        jc.data = jobData5;
        newHireChart.data = newHireData5;
        turnChart.data = turnOverData5;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData5;
        avgChart.data = averageData5;
        jc.data = jobData5;
        newHireChart.data = newHireData5;
        turnChart.data = turnOverData5;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData51;
        avgChart.data = averageData51;
        jc.data = jobData51;
        newHireChart.data = newHireData51;
        turnChart.data = turnOverData51;
      }
    }
    if (strUser3 == "2017-Q2") {
      if (strUser31 == "By Education") {
        wChart.data = workData6;
        avgChart.data = averageData6;
        jc.data = jobData6;
        newHireChart.data = newHireData6;
        turnChart.data = turnOverData6;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData6;
        avgChart.data = averageData6;
        jc.data = jobData6;
        newHireChart.data = newHireData6;
        turnChart.data = turnOverData6;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData61;
        avgChart.data = averageData61;
        jc.data = jobData61;
        newHireChart.data = newHireData61;
        turnChart.data = turnOverData61;
      }
    }
    if (strUser3 == "2017-Q3") {
      if (strUser31 == "By Education") {
        wChart.data = workData7;
        avgChart.data = averageData7;
        jc.data = jobData7;
        newHireChart.data = newHireData7;
        turnChart.data = turnOverData7;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData7;
        avgChart.data = averageData7;
        jc.data = jobData7;
        newHireChart.data = newHireData7;
        turnChart.data = turnOverData7;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData71;
        avgChart.data = averageData71;
        jc.data = jobData71;
        newHireChart.data = newHireData71;
        turnChart.data = turnOverData71;
      }
    }

    if (strUser3 == "2017-Q4") {
      if (strUser31 == "By Education") {
        wChart.data = workData8;
        avgChart.data = averageData8;
        jc.data = jobData8;
        newHireChart.data = newHireData8;
        turnChart.data = turnOverData7;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData8;
        avgChart.data = averageData8;
        jc.data = jobData8;
        newHireChart.data = newHireData8;
        turnChart.data = turnOverData7;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData81;
        avgChart.data = averageData81;
        jc.data = jobData81;
        newHireChart.data = newHireData81;
        turnChart.data = turnOverData71;
      }
    }

    if (strUser3 == "2018-Q1") {
      if (strUser31 == "By Education") {
        wChart.data = workData9;
        avgChart.data = averageData9;
        jc.data = jobData9;
        newHireChart.data = newHireData9;
        turnChart.data = turnOverData9;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData9;
        avgChart.data = averageData9;
        jc.data = jobData9;
        newHireChart.data = newHireData9;
        turnChart.data = turnOverData9;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData82;
        avgChart.data = averageData82;
        jc.data = jobData82;
        newHireChart.data = newHireData82;
        turnChart.data = turnOverData82;
      }
    }

    if (strUser3 == "2016Q4") {
      if (strUser31 == "By Education") {
        wChart.data = workData10;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData10;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData10;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData10;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData83;
        avgChart.data = averageData83;
        jc.data = jobData83;
        newHireChart.data = newHireData83;
        turnChart.data = turnOverData83;
      }
    }

    if (strUser3 == "2017Q1") {
      if (strUser31 == "By Education") {
        wChart.data = workData01;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData01;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData01;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData01;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData84;
        avgChart.data = averageData83;
        jc.data = jobData83;
        newHireChart.data = newHireData84;
        turnChart.data = turnOverData83;
      }
    }

    if (strUser3 == "2017Q2") {
      if (strUser31 == "By Education") {
        wChart.data = workData02;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData02;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData02;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData02;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData85;
        avgChart.data = averageData83;
        jc.data = jobData83;
        newHireChart.data = newHireData85;
        turnChart.data = turnOverData83;
      }
    }

    pwChart.data = wChart.data;
    pavgChart.data = avgChart.data;
    pjc.data = jc.data;
    pnewHireChart.data = newHireChart.data;
    pturnChart.data = turnChart.data;
    drawAll();
    hidePrint();
  };


  window.dataSwap2 = function () {
    var e3 = document.getElementById("btn3wda");
    var strUser3 = e3.options[e3.selectedIndex].text;
    var e31 = document.getElementById("btn31wda");
    var strUser31 = e31.options[e31.selectedIndex].text;
    console.log('dataSwap2 Indicator Number of Workers and Average Monthly Earnings by Age and Gender')
    if (strUser3 == "2016-Q1") {
      console.log('dataSwap2 strUser3', strUser3)
      if (strUser31 == "By Education") {
        wChart.data = workData1;
        avgChart.data = averageData1;
        jc.data = jobData1;
        newHireChart.data = newHireData1;
        turnChart.data = turnOverData1;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData1;
        avgChart.data = averageData1;
        jc.data = jobData1;
        newHireChart.data = newHireData1;
        turnChart.data = turnOverData1;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData11;
        avgChart.data = averageData11;
        jc.data = jobData11;
        newHireChart.data = newHireData11;
        turnChart.data = turnOverData11;
      }
    }
    if (strUser3 == "2016-Q2") {
      console.log('dataSwap2 strUser3', strUser3)
      if (strUser31 == "By Education") {
        wChart.data = workData2;
        avgChart.data = averageData2;
        jc.data = jobData2;
        newHireChart.data = newHireData2;
        turnChart.data = turnOverData2;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData2;
        avgChart.data = averageData2;
        jc.data = jobData2;
        newHireChart.data = newHireData2;
        turnChart.data = turnOverData2;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData21;
        avgChart.data = averageData21;
        jc.data = jobData21;
        newHireChart.data = newHireData21;
        turnChart.data = turnOverData21;
      }
    }
    if (strUser3 == "2016-Q3") {
      console.log('dataSwap2 strUser3', strUser3)
      if (strUser31 == "By Education") {
        wChart.data = workData3;
        avgChart.data = averageData3;
        jc.data = jobData3;
        newHireChart.data = newHireData3;
        turnChart.data = turnOverData3;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData3;
        avgChart.data = averageData3;
        jc.data = jobData3;
        newHireChart.data = newHireData3;
        turnChart.data = turnOverData3;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData31;
        avgChart.data = averageData31;
        jc.data = jobData31;
        newHireChart.data = newHireData31;
        turnChart.data = turnOverData31;
      }
    }
    if (strUser3 == "2016-Q4") {
      console.log('dataSwap2 strUser3', strUser3)
      if (strUser31 == "By Education") {
        wChart.data = workData4;
        avgChart.data = averageData4;
        jc.data = jobData4;
        newHireChart.data = newHireData4;
        turnChart.data = turnOverData4;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData4;
        avgChart.data = averageData4;
        jc.data = jobData4;
        newHireChart.data = newHireData4;
        turnChart.data = turnOverData4;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData41;
        avgChart.data = averageData41;
        jc.data = jobData41;
        newHireChart.data = newHireData41;
        turnChart.data = turnOverData41;
      }
    }
    if (strUser3 == "2017-Q1") {
      console.log('dataSwap2 strUser3', strUser3)
      if (strUser31 == "By Education") {
        wChart.data = workData5;
        avgChart.data = averageData5;
        jc.data = jobData5;
        newHireChart.data = newHireData5;
        turnChart.data = turnOverData5;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData5;
        avgChart.data = averageData5;
        jc.data = jobData5;
        newHireChart.data = newHireData5;
        turnChart.data = turnOverData5;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData51;
        avgChart.data = averageData51;
        jc.data = jobData51;
        newHireChart.data = newHireData51;
        turnChart.data = turnOverData51;
      }
    }
    if (strUser3 == "2017-Q2") {
      console.log('dataSwap2 strUser3', strUser3)
      if (strUser31 == "By Education") {
        wChart.data = workData6;
        avgChart.data = averageData6;
        jc.data = jobData6;
        newHireChart.data = newHireData6;
        turnChart.data = turnOverData6;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData6;
        avgChart.data = averageData6;
        jc.data = jobData6;
        newHireChart.data = newHireData6;
        turnChart.data = turnOverData6;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData61;
        avgChart.data = averageData61;
        jc.data = jobData61;
        newHireChart.data = newHireData61;
        turnChart.data = turnOverData61;
      }
    }
    if (strUser3 == "2017-Q3") {
      console.log('dataSwap2 strUser3', strUser3)
      if (strUser31 == "By Education") {
        wChart.data = workData7;
        avgChart.data = averageData7;
        jc.data = jobData7;
        newHireChart.data = newHireData7;
        turnChart.data = turnOverData7;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData7;
        avgChart.data = averageData7;
        jc.data = jobData7;
        newHireChart.data = newHireData7;
        turnChart.data = turnOverData7;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData71;
        avgChart.data = averageData71;
        jc.data = jobData71;
        newHireChart.data = newHireData71;
        turnChart.data = turnOverData71;
      }
    }
    if (strUser3 == "2017-Q4") {
      console.log('dataSwap2 strUser3', strUser3)
      if (strUser31 == "By Education") {
        console.log('By Education');
        wChart.data = workData8;
        avgChart.data = averageData8;
        jc.data = jobData8;
        newHireChart.data = newHireData8;
        turnChart.data = turnOverData7;
      }
      if (strUser31 == "By Age") {
        console.log('By Age');
        wChart.data = workData8;
        avgChart.data = averageData8;
        jc.data = jobData8;
        newHireChart.data = newHireData8;
        turnChart.data = turnOverData7;
      }
      if (strUser31 == "By Gender") {
        console.log('By Gender', {turnOverData71, newHireData81, jobData81, averageData81, workData81 })
        wChart.data = workData81;
        avgChart.data = averageData81;
        jc.data = jobData81;
        newHireChart.data = newHireData81;
        turnChart.data = turnOverData71;
      }
    }
    if (strUser3 == "2018-Q1") {
      console.log('dataSwap2 strUser3', strUser3)
      if (strUser31 == "By Education") {
        wChart.data = workData9;
        avgChart.data = averageData9;
        jc.data = jobData9;
        newHireChart.data = newHireData9;
        turnChart.data = turnOverData9;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData9;
        avgChart.data = averageData9;
        jc.data = jobData9;
        newHireChart.data = newHireData9;
        turnChart.data = turnOverData9;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData82;
        avgChart.data = averageData82;
        jc.data = jobData82;
        newHireChart.data = newHireData82;
        turnChart.data = turnOverData82;
      }
    }
    if (strUser3 == "2016Q4") {
      console.log('dataSwap2 strUser3', strUser3)
      if (strUser31 == "By Education") {
        wChart.data = workData10;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData10;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData10;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData10;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData83;
        avgChart.data = averageData83;
        jc.data = jobData83;
        newHireChart.data = newHireData83;
        turnChart.data = turnOverData83;
      }
    }
    if (strUser3 == "2017Q1") {
      console.log('dataSwap2 strUser3', strUser3)
      if (strUser31 == "By Education") {
        wChart.data = workData01;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData01;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData01;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData01;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData84;
        avgChart.data = averageData83;
        jc.data = jobData83;
        newHireChart.data = newHireData84;
        turnChart.data = turnOverData83;
      }
    }
    if (strUser3 == "2017Q2") {
      console.log('dataSwap2 strUser3', strUser3)
      if (strUser31 == "By Education") {
        wChart.data = workData02;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData02;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Age") {
        wChart.data = workData02;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData02;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData85;
        avgChart.data = averageData83;
        jc.data = jobData83;
        newHireChart.data = newHireData85;
        turnChart.data = turnOverData83;
      }
    }

    pwChart.data = wChart.data;
    pavgChart.data = avgChart.data;
    pjc.data = jc.data;
    pnewHireChart.data = newHireChart.data;
    pturnChart.data = turnChart.data;

    drawAll();
    turnChart.draw(1000,false);
    pturnChart.draw(1000,false);
    pwChart.draw(1000,false);
    pavgChart.draw(1000,false);
    pjc.draw(1000);
    pnewHireChart.draw(1000);
    
    wChart.draw(1000,false);
    avgChart.draw(1000,false);
    jc.draw(1000,false);
    newHireChart.draw(1000,false);
  };

  window.dataSwap22 = function () {

    var e3 = document.getElementById("btn4wda");
    var strUser3 = e3.options[e3.selectedIndex].text;
    var e31 = document.getElementById("btn41wda");
    var strUser31 = e31.options[e31.selectedIndex].text;

    if (strUser3 == "2016-Q1") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData1;
        avgChart.data = averageData1;
        jc.data = jobData1;
        newHireChart.data = newHireData1;
        turnChart.data = turnOverData1;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData11;
        avgChart.data = averageData11;
        jc.data = jobData11;
        newHireChart.data = newHireData11;
        turnChart.data = turnOverData11;
      }
    }
    if (strUser3 == "2016-Q2") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData2;
        avgChart.data = averageData2;
        jc.data = jobData2;
        newHireChart.data = newHireData2;
        turnChart.data = turnOverData2;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData21;
        avgChart.data = averageData21;
        jc.data = jobData21;
        newHireChart.data = newHireData21;
        turnChart.data = turnOverData21;
      }
    }
    if (strUser3 == "2016-Q3") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData3;
        avgChart.data = averageData3;
        jc.data = jobData3;
        newHireChart.data = newHireData3;
        turnChart.data = turnOverData3;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData31;
        avgChart.data = averageData31;
        jc.data = jobData31;
        newHireChart.data = newHireData31;
        turnChart.data = turnOverData31;
      }
    }
    if (strUser3 == "2016-Q4") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData4;
        avgChart.data = averageData4;
        jc.data = jobData4;
        newHireChart.data = newHireData4;
        turnChart.data = turnOverData4;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData41;
        avgChart.data = averageData41;
        jc.data = jobData41;
        newHireChart.data = newHireData41;
        turnChart.data = turnOverData41;
      }
    }
    if (strUser3 == "2017-Q1") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData5;
        avgChart.data = averageData5;
        jc.data = jobData5;
        newHireChart.data = newHireData5;
        turnChart.data = turnOverData5;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData51;
        avgChart.data = averageData51;
        jc.data = jobData51;
        newHireChart.data = newHireData51;
        turnChart.data = turnOverData51;
      }
    }
    if (strUser3 == "2017-Q2") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData6;
        avgChart.data = averageData6;
        jc.data = jobData6;
        newHireChart.data = newHireData6;
        turnChart.data = turnOverData6;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData61;
        avgChart.data = averageData61;
        jc.data = jobData61;
        newHireChart.data = newHireData61;
        turnChart.data = turnOverData61;
      }
    }
    if (strUser3 == "2017-Q3") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData7;
        avgChart.data = averageData7;
        jc.data = jobData7;
        newHireChart.data = newHireData7;
        turnChart.data = turnOverData7;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData71;
        avgChart.data = averageData71;
        jc.data = jobData71;
        newHireChart.data = newHireData71;
        turnChart.data = turnOverData71;
      }

    }

    if (strUser3 == "2017-Q4") {
      console.log('dataSwap2 strUser3', strUser3)
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData8;
        avgChart.data = averageData8;
        jc.data = jobData8;
        newHireChart.data = newHireData8;
        turnChart.data = turnOverData7;
      }
      if (strUser31 == "By Gender") {
        console.log('By Gender')
        wChart.data = workData81;
        avgChart.data = averageData81;
        jc.data = jobData81;
        newHireChart.data = newHireData81;
        turnChart.data = turnOverData71;
      }

    }

    if (strUser3 == "2018-Q1") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData9;
        avgChart.data = averageData9;
        jc.data = jobData9;
        newHireChart.data = newHireData9;
        turnChart.data = turnOverData9;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData82;
        avgChart.data = averageData82;
        jc.data = jobData82;
        newHireChart.data = newHireData82;
        turnChart.data = turnOverData82;
      }
    }

    if (strUser3 == "2016Q4") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData10;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData10;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData83;
        avgChart.data = averageData83;
        jc.data = jobData83;
        newHireChart.data = newHireData83;
        turnChart.data = turnOverData83;
      }
    }

    if (strUser3 == "2017Q1") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData01;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData01;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData84;
        avgChart.data = averageData83;
        jc.data = jobData83;
        newHireChart.data = newHireData84;
        turnChart.data = turnOverData83;
      }
    }

    if (strUser3 == "2017Q2") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData02;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData02;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData85;
        avgChart.data = averageData83;
        jc.data = jobData83;
        newHireChart.data = newHireData85;
        turnChart.data = turnOverData83;
      }
    }
    pwChart.data = wChart.data;
    pavgChart.data = avgChart.data;
    pjc.data = jc.data;
    pnewHireChart.data = newHireChart.data;
    pturnChart.data = turnChart.data;
    drawAll();
    turnChart.draw(1000,false);
    pturnChart.draw(1000,false);
    pwChart.draw(1000,false);
    pavgChart.draw(1000,false);
    pjc.draw(1000);
    pnewHireChart.draw(1000);
    
    wChart.draw(1000,false);
    avgChart.draw(1000,false);
    jc.draw(1000,false);
    newHireChart.draw(1000,false);
  };

  window.dataSwap23 = function () {

    var e3 = document.getElementById("btn5wda");
    var strUser3 = e3.options[e3.selectedIndex].text;
    var e31 = document.getElementById("btn51wda");
    var strUser31 = e31.options[e31.selectedIndex].text;

    if (strUser3 == "2016-Q1") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData1;
        avgChart.data = averageData1;
        jc.data = jobData1;
        newHireChart.data = newHireData1;
        turnChart.data = turnOverData1;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData11;
        avgChart.data = averageData11;
        jc.data = jobData11;
        newHireChart.data = newHireData11;
        turnChart.data = turnOverData11;
      }
    }
    if (strUser3 == "2016-Q2") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData2;
        avgChart.data = averageData2;
        jc.data = jobData2;
        newHireChart.data = newHireData2;
        turnChart.data = turnOverData2;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData21;
        avgChart.data = averageData21;
        jc.data = jobData21;
        newHireChart.data = newHireData21;
        turnChart.data = turnOverData21;
      }
    }
    if (strUser3 == "2016-Q3") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData3;
        avgChart.data = averageData3;
        jc.data = jobData3;
        newHireChart.data = newHireData3;
        turnChart.data = turnOverData3;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData31;
        avgChart.data = averageData31;
        jc.data = jobData31;
        newHireChart.data = newHireData31;
        turnChart.data = turnOverData31;
      }
    }
    if (strUser3 == "2016-Q4") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData4;
        avgChart.data = averageData4;
        jc.data = jobData4;
        newHireChart.data = newHireData4;
        turnChart.data = turnOverData4;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData41;
        avgChart.data = averageData41;
        jc.data = jobData41;
        newHireChart.data = newHireData41;
        turnChart.data = turnOverData41;
      }
    }
    if (strUser3 == "2017-Q1") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData5;
        avgChart.data = averageData5;
        jc.data = jobData5;
        newHireChart.data = newHireData5;
        turnChart.data = turnOverData5;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData51;
        avgChart.data = averageData51;
        jc.data = jobData51;
        newHireChart.data = newHireData51;
        turnChart.data = turnOverData51;
      }
    }
    if (strUser3 == "2017-Q2") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData6;
        avgChart.data = averageData6;
        jc.data = jobData6;
        newHireChart.data = newHireData6;
        turnChart.data = turnOverData6;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData61;
        avgChart.data = averageData61;
        jc.data = jobData61;
        newHireChart.data = newHireData61;
        turnChart.data = turnOverData61;
      }
    }
    if (strUser3 == "2017-Q3") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData7;
        avgChart.data = averageData7;
        jc.data = jobData7;
        newHireChart.data = newHireData7;
        turnChart.data = turnOverData7;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData71;
        avgChart.data = averageData71;
        jc.data = jobData71;
        newHireChart.data = newHireData71;
        turnChart.data = turnOverData71;
      }
    }
    if (strUser3 == "2017-Q4") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData8;
        avgChart.data = averageData8;
        jc.data = jobData8;
        newHireChart.data = newHireData8;
        turnChart.data = turnOverData7;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData81;
        avgChart.data = averageData81;
        jc.data = jobData81;
        newHireChart.data = newHireData81;
        turnChart.data = turnOverData71;
      }
    }
    if (strUser3 == "2018-Q1") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData9;
        avgChart.data = averageData9;
        jc.data = jobData9;
        newHireChart.data = newHireData9;
        turnChart.data = turnOverData9;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData82;
        avgChart.data = averageData82;
        jc.data = jobData82;
        newHireChart.data = newHireData82;
        turnChart.data = turnOverData82;
      }
    }

    if (strUser3 == "2016Q4") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData10;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData10;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData83;
        avgChart.data = averageData83;
        jc.data = jobData83;
        newHireChart.data = newHireData83;
        turnChart.data = turnOverData83;
      }


    }

    if (strUser3 == "2017Q1") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData01;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData01;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData84;
        avgChart.data = averageData83;
        jc.data = jobData83;
        newHireChart.data = newHireData84;
        turnChart.data = turnOverData83;
      }
    }

    if (strUser3 == "2017Q2") {
      if (strUser31 == "By Education" || strUser31 == "By Age") {
        wChart.data = workData02;
        avgChart.data = averageData10;
        jc.data = jobData10;
        newHireChart.data = newHireData02;
        turnChart.data = turnOverData10;
      }
      if (strUser31 == "By Gender") {
        wChart.data = workData85;
        avgChart.data = averageData83;
        jc.data = jobData83;
        newHireChart.data = newHireData85;
        turnChart.data = turnOverData83;
      }

    }
    pwChart.data = wChart.data;
    pavgChart.data = avgChart.data;
    pjc.data = jc.data;
    pnewHireChart.data = newHireChart.data;
    pturnChart.data = turnChart.data;
    drawAll();
    turnChart.draw(1000,false);
    pturnChart.draw(1000,false);
    pwChart.draw(1000,false);
    pavgChart.draw(1000,false);
    pjc.draw(1000);
    pnewHireChart.draw(1000);
    
    wChart.draw(1000,false);
    avgChart.draw(1000,false);
    jc.draw(1000,false);
    newHireChart.draw(1000,false);
  };


CountyName2 == 'Maryland' ? '' : window.drawAll = function () {
    wChart.draw(0, true);
    avgChart.draw(0, true);
    jc.draw(0, true);
    newHireChart.draw(0, true);
    turnChart.draw(0, true);

    chart8.draw(0, true);
    chart61.draw(0, true);

    pwChart.draw(0, true);
    pavgChart.draw(0, true);
    pjc.draw(0, true);
    pnewHireChart.draw(0, true);
    pturnChart.draw(0, true);

    pchart8.draw(0, true);
    pchart61.draw(0, true);

    edX.shapes.selectAll("text").attr("transform", function (d) { return d3.select(this).attr("transform") + " translate(0, -10) rotate(-45)"; });
    genX.shapes.selectAll("text").attr("transform", function (d) { return d3.select(this).attr("transform") + " translate(0, -10) rotate(-45)"; });
  };

  d3.select("#btn3wda").on("change", dataSwap1 );
  d3.select("#btn4wda").on("change", dataSwap12 );
  d3.select("#btn5wda").on("change", dataSwap13 );
  d3.select("#btn31wda").on("change", dataSwap2 );
  d3.select("#btn41wda").on("change", dataSwap22 );
  d3.select("#btn51wda").on("change", dataSwap23);
  d3.select("#btn6wda").on("click", function () {
    if (togNum1 == 1) {
      togNum1 = 0;
      qLegend.shapes.style("visibility", "hidden");
      pqLegend.shapes.style("visibility", "hidden");
    } else if (togNum1 == 0) {
      togNum1 = 1;
      qLegend.shapes.style("visibility", "visible");
      pqLegend.shapes.style("visibility", "visible");
    }
  });


}
)()

var togNum = 1;
var togNum1 = 1;
var whichChart = 1;

function hidePrint() {
  document.getElementById("Print3").style.display = "none";
  document.getElementById("Print4").style.display = "none";
  document.getElementById("PrintFive").style.display = "none";
  document.getElementById("Print6").style.display = "none";
  document.getElementById("Print17").style.display = "none";
}

function hideChart() {
  document.getElementById("Chart3").style.display = "none";
  document.getElementById("Chart4").style.display = "none";
  document.getElementById("ChartFive").style.display = "none";
  document.getElementById("Chart6").style.display = "none";
  document.getElementById("Chart17").style.display = "none";

}

function showChart() {
  document.getElementById("Chart3").style.display = "inline";
  document.getElementById("Chart4").style.display = "inline";
  document.getElementById("ChartFive").style.display = "inline";
  document.getElementById("Chart6").style.display = "inline";
  document.getElementById("Chart17").style.display = "inline";
}

function showPrint() {
  document.getElementById("Print3").style.display = "inline";
  document.getElementById("Print4").style.display = "inline";
  document.getElementById("PrintFive").style.display = "inline";
  document.getElementById("Print6").style.display = "inline";
  document.getElementById("Print17").style.display = "inline";
}


function popchart() {
  document.getElementById("collapse1").style.display = "inline";
  document.getElementById("collapse2").style.display = "none";
  document.getElementById("collapse3").style.display = "none";
  document.getElementById("collapse4").style.display = "none";
  document.getElementById("collapse5").style.display = "inline";
  document.getElementById("collapse15").style.display = "none";
  whichChart = 1;
  drawAll();
  hidePrint();

}

function educhart() {
  document.getElementById("collapse1").style.display = "none";
  document.getElementById("collapse2").style.display = "inline";
  document.getElementById("collapse3").style.display = "none";
  document.getElementById("collapse4").style.display = "none";
  document.getElementById("collapse5").style.display = "inline";
  document.getElementById("collapse15").style.display = "none";
  whichChart = 2;
  drawAll();
  hidePrint();
}

function racechart() {
  document.getElementById("collapse1").style.display = "none";
  document.getElementById("collapse2").style.display = "none";
  document.getElementById("collapse3").style.display = "inline";
  document.getElementById("collapse4").style.display = "none";
  document.getElementById("collapse5").style.display = "inline";
  document.getElementById("collapse15").style.display = "none"; 
  whichChart = 3;
  drawAll();
  hidePrint();
}

function vetchart() {
  document.getElementById("collapse1").style.display = "none";
  document.getElementById("collapse2").style.display = "none";
  document.getElementById("collapse3").style.display = "none";
  document.getElementById("collapse4").style.display = "inline";
  document.getElementById("collapse5").style.display = "inline";
  document.getElementById("collapse15").style.display = "none"; 
  whichChart = 4;
  drawAll();
  hidePrint();
}

function sepchart() {
  document.getElementById("collapse1").style.display = "none";
  document.getElementById("collapse2").style.display = "none";
  document.getElementById("collapse3").style.display = "none";
  document.getElementById("collapse4").style.display = "none";
  document.getElementById("collapse5").style.display = "inline";
  document.getElementById("collapse15").style.display = "inline"; 
  whichChart = 5;
  drawAll();
  hidePrint();
}

function appchart() {
  document.getElementById("collapse1").style.display = "none";
  document.getElementById("collapse2").style.display = "none";
  document.getElementById("collapse3").style.display = "none";
  document.getElementById("collapse4").style.display = "none";
  document.getElementById("collapse5").style.display = "inline";
  document.getElementById("collapse15").style.display = "none"; 
  whichChart = 6;
  drawAll();
  hidePrint();
}

function progchart() {
  document.getElementById("collapse1").style.display = "none";
  document.getElementById("collapse2").style.display = "none";
  document.getElementById("collapse3").style.display = "none";
  document.getElementById("collapse4").style.display = "none";
  document.getElementById("collapse5").style.display = "inline";
  document.getElementById("collapse15").style.display = "none";
  whichChart = 7;
  drawAll();
  hidePrint();
}

window.collapsables = []
window.hideall = () => {
  document.getElementById("collapse1").style.display = "none";
  document.getElementById("collapse2").style.display = "none";
  document.getElementById("collapse3").style.display = "none";
  document.getElementById("collapse4").style.display = "none";
  document.getElementById("collapse5").style.display = "none";
  document.getElementById("collapse15").style.display = "none"; 
  drawAll();
}

window.printClick = function () {
  if (whichChart == 1) {
    popchart();
    document.getElementById("Chart3").style.display = "none";
    document.getElementById("Print3").style.display = "inline";
    drawAll();

  } else if (whichChart == 2) {
    educhart();
    document.getElementById("Chart4").style.display = "none";
    document.getElementById("Print4").style.display = "inline";
    drawAll();
  } else if (whichChart == 3) {
    racechart();
    document.getElementById("ChartFive").style.display = "none";
    document.getElementById("PrintFive").style.display = "inline";
    drawAll();
  } else if (whichChart == 4) {
    vetchart();
    document.getElementById("Chart6").style.display = "none";
    document.getElementById("Print6").style.display = "inline";
    drawAll();
  } else if (whichChart == 5) {
    sepchart();
    document.getElementById("Chart17").style.display = "none";
    document.getElementById("Print17").style.display = "inline";
    drawAll();
  }
  window.print();
}

window.printAll = function () {
  document.getElementById("collapse1").style.display = "inline";
  document.getElementById("collapse2").style.display = "inline";
  document.getElementById("collapse3").style.display = "inline";
  document.getElementById("collapse4").style.display = "inline";
  document.getElementById("collapse5").style.display = "inline";
  document.getElementById("collapse15").style.display = "inline";
  hideChart();
  showPrint();
  drawAll();
  window.print();
};

window.onafterprint = function () {
  hideall();
  showChart();
};

CountyName2 == 'Maryland' ? '' : window.onload = function() {
    CountyName2 == 'Maryland' ? '' : document.querySelectorAll('[data-lbl]').forEach( el => {
		el.removeAttribute("disabled");
        el.addEventListener("click", function(){
            console.log('Clicked', el.dataset.lbl, el);
            whichChart = el.dataset.lbl;
            window.hideall(collapsables)
            document.getElementById(el.dataset.lbl).style.display = "inline";
            drawAll();
            hidePrint();
        })   
         
    })
}
