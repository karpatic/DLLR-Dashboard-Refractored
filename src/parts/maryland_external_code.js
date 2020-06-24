import * as d3 from 'd3';
import * as dimple from 'dimple';
/*
 * Outline
 *  
 * 1 - collapse9 - Chart11-chart15 - Apprenticeship Completers, 
 * 2 - collapse16 - Chart18-aprogChart - Print18 - table55 New Apprentice Programs
 * 3 - collapse17 - Chart19-aNewChart - Print19 - table19 - New/Active Apprentices
 * 4 - collapse20 - Chart20-pchart1 - Print2 - table20 - Long Term Unemployed
 * 5 - collapse19 - Chart21-chart18 - Print21 - table155 - Service Partcipants in SNAP
 */
(async()=>{
    let pcnt = (d)=>{
        return d.slice(d.length - 1) != '%' ? (d3.format(".1%")(d * 1)) : (d3.format(".1%")(Number(d.slice(0, -1) * .01)))
    }
    let pcnt2 = (d)=>{
        return d.slice(d.length - 1) != '%' ? (d3.format(".1%")(d * .01)) : (d3.format(".1%")(Number(d.slice(0, -1) * .01)))
    }
    // Retrieve Data
    console.log('RETRIEVING MARYLAND DATA')
    let url = './data/MarylandData_6-24-20.csv'
    let data = await d3.csv(url)
    document.getElementById('acsyearagg').innerHTML = '1'
    console.log('Maryland', {
        data
    });

    // 
    // Apprenticeship Completers
    // 
    // Filter Data
    window.mAppData = dimple.filterData(dimple.filterData(data, "Indicator_Value", "Program Completers"), "Time", ["FY15", "FY16", "FY17"]);
    console.log('Apprenticeship Completers!', {
        mAppData
    });

    // Create Table
    document.getElementById('table11').innerHTML = `
	<tr class="HeadRow" style="background-color: white;">
	  <th>Apprenticeship Program Completers in Maryland</th>
	  <td></td>
	</tr>
	<tr>
	  <th>2015</th>
	  <td>${mAppData[0]['Amount']}</td>
	</tr>
	<tr>
	  <th>2016</th>
	  <td>${mAppData[1]['Amount']}</td>
	</tr>
	<tr>
	  <th>2017</th>
	  <td>${mAppData[2]['Amount']}</td>
	</tr>
	`

    // Retrieve Elements
    var svg11 = dimple.newSvg("#Chart11", "100%", 400);
    var print11 = dimple.newSvg("#Print11", 750, 400);

    // Configure Chart
    window.chart15 = new dimple.chart(svg11,mAppData);
    chart15.setBounds("11%", "21%", "80%", "65%")
    var mAppx = chart15.addCategoryAxis("x", "Time")
    mAppx.title = " ";
    mAppx.addOrderRule(["FY15", "FY16"]);
    var mAppY = chart15.addMeasureAxis("y", "Amount");
    mAppY.title = "Totals";
    mAppY.tickFormat = ',.0f';

    window.pchart15 = new dimple.chart(print11,mAppData);
    pchart15.setBounds("11%", "21%", "80%", 250)
    var pmAppx = pchart15.addCategoryAxis("x", "Time")
    pmAppx.title = " ";
    pmAppx.addOrderRule(["FY15", "FY16"]);
    var pmAppY = pchart15.addMeasureAxis("y", "Amount");
    pmAppY.title = "Totals";
    pmAppY.tickFormat = ',.0f';

    // Draw
    var pmAppLines = pchart15.addSeries("Indicator Value", dimple.plot.bar);
    var mAppLines = chart15.addSeries("Indicator Value", dimple.plot.bar);
    chart15.draw();
    pchart15.draw();

    // 
    // New Apprentice Programs
    // 
    // Filter Data
    window.aprog1 = dimple.filterData(dimple.filterData(data, "Indicator", "New Maryland Apprenticeship Programs"), "Time", "2016");
    window.aprog2 = dimple.filterData(dimple.filterData(data, "Indicator", "New Maryland Apprenticeship Programs"), "Time", "2017");
    window.aprog3 = dimple.filterData(data, "Indicator", "New Maryland Apprenticeship Programs")
    console.log('New Maryland Apprenticeship Programs!', {
        aprog1,
        aprog2,
        aprog3
    });

    // Create Table
    document.getElementById('table55').innerHTML = `
	<thead>
	  <tr> 
	    <th class="HeadRow" colspan="2">New Apprenticeship Programs</th> 
	  </tr>
	  <tr class="HeadRow" style="background-color: white;">
	    <th style='text-align:center;'>Year</th>
	  <th style='text-align:center;'>New Programs</th>
	  </tr>
	</thead>
	<tbody>
	  <tr>
	    <td>2016</td>
	    <td> ${aprog3[0]['Amount']}</td>
	  </tr>
	  <tr>
	    <td>2017</td>
	    <td> ${aprog3[1]['Amount']}</td>
	  </tr>
	  <tr class="FootRow">
	    <td>2018</td>
	    <td> ${aprog3[2]['Amount']}</td>
	  </tr>
	</tbody>
	`
    // Retrieve Elements
    var svg81 = dimple.newSvg("#Chart18", "100%", 400);
    var print81 = dimple.newSvg("#Print18", 750, 400);

    // Configure Chart
    window.aprogChart = new dimple.chart(svg81,aprog3);
    aprogChart.setBounds("9%", "12%", "80%", "60%")
    var px2 = aprogChart.addCategoryAxis("x", ["Time", "Indicator Value"]);
    px2.title = "Year";
    var py2 = aprogChart.addMeasureAxis("y", "Amount");
    py2.title = "New Programs";
    py2.tickFormat = ',.0f';

    window.paprogChart = new dimple.chart(print81,aprog3);
    paprogChart.setBounds("10%", "12%", "50%", 300)
    var px2 = paprogChart.addCategoryAxis("x", ["Time", "Indicator Value"]);
    px2.title = "Year";
    py2.tickFormat = ',.0f';
    var py2 = paprogChart.addMeasureAxis("y", "Amount");
    py2.title = "New Programs";
    ;// Draw
    var prog8 = aprogChart.addSeries("Indicator Value", dimple.plot.bar);
    prog8.addOrderRule(true);
    aprogChart.draw();

    var pprog8 = paprogChart.addSeries("Indicator Value", dimple.plot.bar);
    pprog8.addOrderRule(true)
    paprogChart.draw();

    // 
    // New/Active Apprentices
    // 
    // Filter Data
    window.aNew1 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Apprentices"), "Time", "2016");
    window.aNew2 = dimple.filterData(dimple.filterData(data, "Indicator", "Maryland Apprentices"), "Time", "2017");
    window.aNew3 = dimple.filterData(data, "Indicator", "Maryland Apprentices")
    console.log('Maryland Apprentices!', {
        aNew1,
        aNew2,
        aNew3
    });

    // Create Table
    document.getElementById('table19').innerHTML = `
	<thead>
	  <tr>
	    <th class="HeadRow" colspan="3" >New and Active Apprentices</th>
	  </tr>
	  <tr class="HeadRow" style="background-color: white;">
	    <th>Year</th>
	    <th>New</th>
	    <th>Active</th>
	  </tr>
	</thead>
	<tbody>
	  <tr>
	    <td>2016</td>
	    <td> ${aNew1[0]['Amount']}</td>
	    <td> ${aNew1[1]['Amount']}</td>
	  </tr>
	  <tr>
	    <td>2017</td>
	    <td> ${aNew2[0]['Amount']}</td>
	    <td> ${aNew2[1]['Amount']}</td>
	  </tr>
	  <tr class="FootRow">
	    <td>2018</td>
	    <td> ${aNew3[0]['Amount']}</td>
	    <td> ${aNew3[1]['Amount']}</td>
	  </tr>
	</tbody>
	`
    // Retrieve Elements
    var svg91 = dimple.newSvg("#Chart19", "100%", 400);
    var print91 = dimple.newSvg("#Print19", 750, 400);

    // Configure Chart
    window.aNewChart = new dimple.chart(svg91,aNew3);
    aNewChart.setBounds("10%", "12%", "80%", "60%")
    var px2 = aNewChart.addCategoryAxis("x", ["Time", "Indicator_Value"]);
    var py2 = aNewChart.addMeasureAxis("y", "Amount");
    py2.tickFormat = ',.0f';

    window.paNewChart = new dimple.chart(print91,aNew3);
    paNewChart.setBounds("9%", "12%", "50%", "50%")
    var px2 = paNewChart.addCategoryAxis("x", ["Time", "Indicator_Value"]);
    var py2 = paNewChart.addMeasureAxis("y", "Amount");
    py2.tickFormat = ',.0f';

    // Draw
    var newApp = aNewChart.addSeries("Indicator_Value", dimple.plot.bar);
    newApp.addOrderRule(["New Apprentices", "Active Apprentices"]);
    aNewChart.draw();

    var pseries8 = paNewChart.addSeries("Indicator Value", dimple.plot.bar);
    pseries8.addOrderRule(true);
    paNewChart.draw();

    // 
    // Long Term Unemployed
    // 
    // Filter Data
    let years = dimple.filterData(data, "Time", ["2013", "2014", "2015"]);
    window.longTermLocation = dimple.filterData(years, "Indicator", "Long Term Unemployed");
    console.log('Long Term Unemployed!', {
        longTermLocation
    });

    // Create Table
    document.getElementById('table20').innerHTML = `
	<tr class="HeadRow" style="background-color: white;">
	  <th> </th>
	  <th>2013</th>
	  <th>2014</th>
	  <th>2015</th>
	</tr>
	<tr class="FootRow">
	  <th>Maryland</th>
	  <td> ${longTermLocation[2]['Amount']}</td>
	  <td> ${longTermLocation[1]['Amount']}</td>
	  <td> ${longTermLocation[0]['Amount']}</td>
	</tr>
	`
    // Retrieve Elements
    var svg1 = dimple.newSvg("#Chart20", "100%", 400);
    var print1 = dimple.newSvg("#Print20", 750, 400);

    // Configure Chart
    window.chart1 = new dimple.chart(svg1,longTermLocation);
    chart1.setBounds("9%", "12%", "85%", "70%")
    var x1 = chart1.addCategoryAxis("x", ["Time", "Location"]);
    var y1 = chart1.addMeasureAxis("y", "Amount");
    y1.tickFormat = ',.0f';
    y1.title = "Totals";
    x1.title = " ";

    window.pchart1 = new dimple.chart(print1,longTermLocation);
    pchart1.setBounds("9%", "12%", "85%", 300)
    var px1 = pchart1.addCategoryAxis("x", ["Time", "Location"]);
    var py1 = pchart1.addMeasureAxis("y", "Amount");
    py1.tickFormat = ',.0f';
    py1.title = "Totals";
    px1.title = " ";

    // Draw
    var lines2 = chart1.addSeries("Location", dimple.plot.line);
    lines2.aggregate = dimple.aggregateMethod.min;
    lines2.lineMarkers = true;
    chart1.addLegend("20%", "1%", "50%", "50%", "right");
    chart1.draw();

    var plines2 = pchart1.addSeries("Location", dimple.plot.line);
    plines2.aggregate = dimple.aggregateMethod.min;
    plines2.lineMarkers = true;
    pchart1.addLegend("20%", "1%", "50%", "50%", "right");
    pchart1.draw();

    // 
    // Service Partcipants in SNAP 
    // 
    // Filter
    window.SnapData2 = dimple.filterData(data, "Indicator", "Service Participants in SNAP")
    console.log('Service Participants in SNAP!', {
        SnapData2
    });
    // Create Table
    document.getElementById('table155').innerHTML = `
	<tr class="HeadRow">
	  <th>Service Participants in SNAP</th>
	  <th></th>
	  <th>2016-Q3</th>
	  <th>2016-Q4</th>
	</tr>  
	<tr class="FootRow">
	  <td></td>
	  <td></td>
	  <td> ${pcnt(SnapData2[0]['Amount'])}</td>
	  <td> ${pcnt(SnapData2[1]['Amount'])}</td>
	</tr>
	`
    // Retrieve Elements
    var svg17 = dimple.newSvg("#Chart21", "100%", 400);
    var print17 = dimple.newSvg("#Print21", 750, 400);

    // Configure Chart
    window.chart18 = new dimple.chart(svg17,SnapData2);
    chart18.setBounds("10%", "12%", "80%", "60%")
    var workX = chart18.addCategoryAxis("x", "Time")
    var workY = chart18.addMeasureAxis("y", "Amount");
    workY.tickFormat = ',.2%';

    window.pchart18 = new dimple.chart(print17,SnapData2);
    pchart18.setBounds("15%", "12%", "60%", "60%")
    var pworkX = pchart18.addCategoryAxis("x", "Time")
    var pworkY = pchart18.addMeasureAxis("y", "Amount");
    pworkY.tickFormat = ',.2%';

    // Draw
    var workLine = chart18.addSeries("Indicator", dimple.plot.bar);
    chart18.draw();
    var pworkLine = pchart18.addSeries("Indicator", dimple.plot.bar);
    pchart18.draw();
}
)()

window.prints = ["pop_chart_print", "empl_edu_gend_chart_print", "empl_race_ethn_chart_print", 
"empl_vet_chart_print", "disabl_pov_chart_print", "tanf_chart_print", "empl_status_chart_print", 
"snap_chart_print", "Landing", "Print3", "Print4", "PrintFive", "Print6", "Print17", "Print11", 
"Print18", "Print19", "Print20", "Print21"]

window.charts = ["pop_chart", "empl_edu_gend_chart", "empl_race_ethn_chart", "empl_vet_chart", 
"disabl_pov_chart", "tanf_chart", "empl_status_chart", "snap_chart", "Landing", "Chart3", "Chart4", 
"ChartFive", "Chart6", "Chart17", "Chart11", "Chart18", "Chart19", "Chart20", "Chart21"]

//
//
//
window.drawAll = function() {
    // Counties
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
    if (!emplStatusCounties.includes(CountyName)) {
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

    // WDA
    window.wChart.draw(0, true);
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

    edX.shapes.selectAll("text").attr("transform", function(d) {
        return d3.select(this).attr("transform") + " translate(0, -10) rotate(-45)";
    });
    genX.shapes.selectAll("text").attr("transform", function(d) {
        return d3.select(this).attr("transform") + " translate(0, -10) rotate(-45)";
    });

    // Maryland
    chart15.draw(0, true);
    aprogChart.draw(0, true);
    aNewChart.draw(0, true);
    chart1.draw(0, true);
    chart18.draw(0, true);

}

window.onresize = function() {
    drawAll();
}

window.hideall = function(idArr) {
    idArr.forEach(el=>{ document.getElementById(el).style.display = "none" } )
}
window.showall = function(idArr) {
    idArr.forEach(el=>document.getElementById(el).style.display = "inline")
}

window.hidePrint = function() {
    hideall(prints)
}
window.hideChart = function() {
    hideall(charts)
}
window.showPrint = function() {
    showall(prints)
}
window.showChart = function() {
    showall(charts)
}

var whichChart = 1;

window.onload = function() {
	document.getElementById("dropdownMenu").style.display = "none";
    document.getElementById("dropdownMenuY").style.display = "none";
    document.getElementById("dropdownMenuQ").style.display = "none";
    document.getElementById("title").style.display = "none";

    document.querySelectorAll('[data-lbl]').forEach(el=>{

        el.removeAttribute("disabled");

        el.addEventListener("click", function() {

            console.log('Clicked0', el.dataset.lbl, el);
            localStorage.setItem('Clicked', el.dataset.lbl);
            
            console.log('Clicked1', el.dataset.lbl, el)
            whichChart = el.dataset.lbl;
            let dropdownMenu = document.getElementById("dropdownMenu")
            let dropdownMenuY = document.getElementById("dropdownMenuY")
            let dropdownMenuQ = document.getElementById("dropdownMenuQ")
            let elem = document.getElementById("title")
            elem.style.display = "inline";
            switch (whichChart) {
            case 'pop':
                elem.innerHTML = 'Population and Median Household Income'
                dropdownMenu.style.display = "none";
                dropdownMenuY.style.display = "none";
                dropdownMenuQ.style.display =  "none";
                break;
            case 'empl_edu_gend':
                elem.innerHTML = 'Demographics - Education and Gender'
                dropdownMenu.style.display = "inline";
                dropdownMenuY.style.display = "inline";
                dropdownMenuQ.style.display =  "none";
                break;
            case 'empl_race_ethn':
                elem.innerHTML = 'Demographics - Race and Ethnicity'
                dropdownMenu.style.display = "inline";
                dropdownMenuY.style.display = "inline";
                dropdownMenuQ.style.display =  "none";
                break;
            case 'empl_vet':
                elem.innerHTML = 'Demographics - Veterans Status'
                dropdownMenu.style.display = "inline";
                dropdownMenuY.style.display = "inline";
                dropdownMenuQ.style.display =  "none";
                break;
            case 'disabl_pov':
                elem.innerHTML = 'Disability and Poverty'
                dropdownMenu.style.display = "inline";
                dropdownMenuY.style.display = "inline";
                dropdownMenuQ.style.display =  "none";
                break;
            case 'tanf':
                elem.innerHTML = 'Temporary Aid for Needy Families (TANF) Stats'
                dropdownMenu.style.display = "inline";
                dropdownMenuY.style.display = "inline";
                dropdownMenuQ.style.display =  "none";
                break;
            case 'empl_status':
                elem.innerHTML = 'Employment Status amongst Maryland Workers'
                dropdownMenu.style.display = "inline";
                dropdownMenuY.style.display = "inline";
                dropdownMenuQ.style.display =  "none";
                break;
            case 'snap':
                elem.innerHTML = 'SNAP Recipient Workers'
                dropdownMenu.style.display = "inline";
                dropdownMenuY.style.display = "none";
                dropdownMenuQ.style.display = "inline";
                break;
            case 'collapse9':
                elem.innerHTML = 'Apprenticeship Completers'
                dropdownMenu.style.display = "none";
                dropdownMenuY.style.display = "none";
                dropdownMenuQ.style.display = "none";
                break;
            case 'collapse1':
                elem.innerHTML = 'Number of Workers and Average Monthly Earnings by Age and Gender'
                dropdownMenu.style.display = "inline";
                dropdownMenuY.style.display = "none";
                dropdownMenuQ.style.display = "inline";
                break;
            case 'collapse2':
                elem.innerHTML = 'New Hires and Job Net Changes by Education and Gender'
                dropdownMenu.style.display = "inline";
                dropdownMenuY.style.display = "none";
                dropdownMenuQ.style.display = "inline";
                break;
            case 'collapse3':
                elem.innerHTML = 'Turnover Rate by Gender and Education'
                dropdownMenu.style.display = "inline";
                dropdownMenuY.style.display = "none";
                dropdownMenuQ.style.display = "inline";
                break;
            case 'collapse4':
                elem.innerHTML = 'Data by Industry'
                dropdownMenu.style.display = "inline";
                dropdownMenuY.style.display = "none";
                dropdownMenuQ.style.display = "inline";
                break;
            case 'collapse15':
                elem.innerHTML = 'Separations'
                dropdownMenu.style.display = "inline";
                dropdownMenuY.style.display = "none";
                dropdownMenuQ.style.display = "inline";
                break;
            case 'collapse16':
                elem.innerHTML = 'New Apprentice Programs'
                dropdownMenu.style.display = "none";
                dropdownMenuY.style.display = "none";
                dropdownMenuQ.style.display = "none";
                break;
            case 'collapse17':
                elem.innerHTML = 'New/Active Apprentice Programs'
                dropdownMenu.style.display = "none";
                dropdownMenuY.style.display = "none";
                dropdownMenuQ.style.display = "none";
                break;
            case 'collapse20':
                elem.innerHTML = 'Long Term Unemployed'
                dropdownMenu.style.display = "none";
                dropdownMenuY.style.display = "none";
                dropdownMenuQ.style.display = "none";

                break;
            case 'collapse19':
                elem.innerHTML = 'Service Participants in SNAP'
                dropdownMenu.style.display = "none";
                dropdownMenuY.style.display = "none";
                dropdownMenuQ.style.display = "none";
                break;
            default:
                elem.innerHTML = 'Empty'
                dropdownMenu.style.display = "none";
                dropdownMenuY.style.display = "none";
                dropdownMenuQ.style.display =  "none";
            }

 
            window.collapsables = ["pop", "empl_edu_gend", "empl_race_ethn", "empl_vet", "disabl_pov", "tanf", 
				"snap", "empl_status", "collapse1", "collapse2", "collapse3", "collapse4", "collapse15", 
				"collapse9", "collapse16", "collapse17", "collapse20", "collapse19"]

            hideall(collapsables)
            document.getElementById(el.dataset.lbl).style.display = "inline";
            drawAll();
            hidePrint(); 
        })

    }
    )
}
