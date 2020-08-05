/*
#File: Index.js
#Author: Charles Karpati
#Date: August 2020
#Section: Bnia
#Email: karpati1@umbc.edu
#Description: Handles the Load, ScreenResize, Printscreen Buttons, Indicator and Year Toggles
#Purpose: Display logic. 
#input: Nothin
#output: The Application and a Service Worker

*/


import * as d3 from 'd3';



//
// Global Variables
//

var whichChart = 'pop';
window.togNum1 = 0
window.onresize = () => drawAll()

// The ID of HTML Elements that allow the user to navigate between pages
window.c_collapsables = ["pop", "empl_edu_gend", "empl_race_ethn", "empl_vet", "disabl_pov", "tanf", "snap", "empl_status"]
window.w_collapsables = ["collapse1", "collapse2", "collapse3", "collapse4", "collapse15"]
window.collapsables = md ? [...c_collapsables, ...w_collapsables, ...['collapse9','collapse16','collapse17','collapse20','collapse19']] : wd ? w_collapsables : c_collapsables



//
// Visibility Toggle Functions
// The ID of HTML Elements containing the print-optimized and interactive version of our visualization 
//

window.c_prints = ["pop_chart_print", "empl_edu_gend_chart_print", "empl_race_ethn_chart_print",  
                   "empl_vet_chart_print", "disabl_pov_chart_print", "tanf_chart_print", "empl_status_chart_print", "snap_chart_print"]
window.w_prints = ["Landing", "Print3", "Print4", "PrintFive", "Print6", "Print17"]
window.prints = md ? [...c_prints, ...w_prints, ...['Print11', 'Print18', 'Print19', "Print20", "Print21"]] : wd ? w_prints : c_prints


window.c_charts = ["pop_chart", "empl_edu_gend_chart", "empl_race_ethn_chart", "empl_vet_chart", 
                   "disabl_pov_chart", "tanf_chart", "empl_status_chart", "snap_chart", "Landing"]
window.w_charts = ["Chart3", "Chart4", "ChartFive", "Chart6", "Chart17"]
window.charts = md ? [...c_charts, ...w_charts, ...['Chart11', 'Chart18', 'Chart19', "Chart20", "Chart21"]] : wd ? w_charts : c_charts


window.stylem = (idArr, prop, val) => idArr.forEach(el=>{ document.getElementById(el).style[prop] = val})
window.hideall = (idArr)=> stylem(idArr, 'display', 'none')
window.showall = (idArr)=> stylem(idArr, 'display', 'inline')


window.toggleTab = (showThese, chartId) => {
    hideall(collapsables)
    showall(showThese)
    whichChart = chartId;
    drawAll();
    hideall(prints)
}

window.popchart = () => toggleTab(["collapse1","collapse5"], 1) 
window.educhart = () => toggleTab(["collapse2","collapse5"], 2) 
window.racechart = () => toggleTab(["collapse3","collapse5"], 3) 
window.vetchart = () => toggleTab(["collapse4","collapse5"], 4) 
window.sepchart = () => toggleTab(["collapse15", "collapse5"], 5) 
window.appchart = () => toggleTab(["collapse5"], 6) 
window.appchart = () => toggleTab(["collapse5"], 7) 




//
//
//
window.drawAll = () => {
    if ( !wd || md ){ 
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
    }
    if ( wd || md ){ 
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

        // edX.shapes.selectAll("text").attr("transform", (d) => d3.select(this).attr("transform") + " translate(0, -10) rotate(-45)" );
        // genX.shapes.selectAll("text").attr("transform", (d) => d3.select(this).attr("transform") + " translate(0, -10) rotate(-45)" );
    }
    if( md ){
        // Maryland
        chart15.draw(0, true);
        aprogChart.draw(0, true);
        aNewChart.draw(0, true);
        chart1.draw(0, true);
        chart18.draw(0, true);   
    }

}





//
// BUTTONS
//

window.printClick = ()=>{
    if (whichChart == 1) {
        popchart();
        document.getElementById("Chart3").style.display = "none";
        document.getElementById("Print3").style.display = "inline";
        drawAll();

    } else if (whichChart == 2) {
        educhart();
        document.getElementById("Chart4").style.display = "none";
        document.getElementById("Print4").style.display = "inline";
    } else if (whichChart == 3) {
        racechart();
        document.getElementById("ChartFive").style.display = "none";
        document.getElementById("PrintFive").style.display = "inline";
    } else if (whichChart == 4) {
        vetchart();
        document.getElementById("Chart6").style.display = "none";
        document.getElementById("Print6").style.display = "inline";
    } else if (whichChart == 5) {
        sepchart();
        document.getElementById("Chart17").style.display = "none";
        document.getElementById("Print17").style.display = "inline";
    } else if (whichChart == 'pop') {
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

window.printAll = ()=>{
    showAll(collapsables);
    hideall(charts)
    showall(prints)
    drawAll();
    window.print();
}

window.onafterprint = ()=>{
    hideall(collapsables);
    hideall(prints)
    showall(charts)
    showAll(["Landing"])
}





//
//
//

window.onload = function() {
    document.getElementById("dropdownMenu").style.display = "none";
    document.getElementById("dropdownMenuY").style.display = "none";
    document.getElementById("dropdownMenuQ").style.display = "none";
    document.getElementById("title").style.display = "none";

    document.querySelectorAll('[data-lbl]').forEach(el=>{

        el.removeAttribute("disabled");

        el.addEventListener("click", function() {
            whichChart = el.dataset.lbl;

            let dm = "none";
            let dmy = "none"
            let dmq = "none"
            let elem = document.getElementById("title")
            elem.style.display = "inline";

            console.log('Clicked', whichChart, el);
            localStorage.setItem('Clicked', el.dataset.lbl);

            switch (whichChart) {
            case 'pop':
                elem.innerHTML = 'Population and Median Household Income'
                break;
            case 'empl_edu_gend':
                elem.innerHTML = 'Demographics - Education and Gender'
                dm = dmy = "inline";
                break;
            case 'empl_race_ethn':
                elem.innerHTML = 'Demographics - Race and Ethnicity'
                 dm = dmy = "inline";
                break;
            case 'empl_vet':
                elem.innerHTML = 'Demographics - Veterans Status'
                dm = dmy = "inline";
                break;
            case 'disabl_pov':
                elem.innerHTML = 'Disability and Poverty'
                dm = dmy = "inline";
                break;
            case 'tanf':
                elem.innerHTML = 'Temporary Aid for Needy Families (TANF) Stats'
                dm = dmy = "inline";
                break;
            case 'empl_status':
                elem.innerHTML = 'Employment Status amongst Maryland Workers'
                dm = dmy = "inline";
                break;
            case 'snap':
                elem.innerHTML = 'SNAP Recipient Workers'
                break;
            case 'collapse9':
                elem.innerHTML = 'Apprenticeship Completers'
                break;
            case 'collapse1':
                elem.innerHTML = 'Number of Workers and Average Monthly Earnings by Age and Gender'
                dm = dmq = "inline";
                break;
            case 'collapse2':
                elem.innerHTML = 'New Hires and Job Net Changes by Education and Gender'
                dm = dmq = "inline";
                break;
            case 'collapse3':
                elem.innerHTML = 'Turnover Rate by Gender and Education'
                dm = dmq = "inline";
                break;
            case 'collapse4':
                elem.innerHTML = 'Data by Industry'
                dm = dmq = "inline";
                break;
            case 'collapse15':
                elem.innerHTML = 'Separations'
                dm = dmq = "inline";
                break;
            case 'collapse16':
                elem.innerHTML = 'New Apprentice Programs'
                break;
            case 'collapse17':
                elem.innerHTML = 'New/Active Apprentice Programs'
                break;
            case 'collapse20':
                elem.innerHTML = 'Long Term Unemployed'
                break;
            case 'collapse19':
                elem.innerHTML = 'Service Participants in SNAP'
                break;
            default:
                elem.innerHTML = 'Empty'
            }
            document.getElementById("dropdownMenu").style.display = dm;
            document.getElementById("dropdownMenuY").style.display = dmy;
            document.getElementById("dropdownMenuQ").style.display = dmq;
            hideall(collapsables)
            showall([whichChart]) 
            hideall(prints);
            drawAll();
        })

    }
    )
}