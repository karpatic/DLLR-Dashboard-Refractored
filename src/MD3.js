
var togNum = 1;
var togNum1 = 1;
    d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vSYGyb5ZuboimWwbEHuGueIRIC3MF-JnriyRzfPMfCJxJkDfJ_ikrO_8WG-OAXRYa2cam-F-rp1De6F/pub?gid=1487184230&single=true&output=csv", function (data) {
        
        //chart 0
        
        var svg0 = dimple.newSvg("#Chart0", "100%", 400);
        var svg1 = dimple.newSvg("#Chart2", "100%", 400);
        var svg3 = dimple.newSvg("#Chart3", "100%", 400);
        var svg4 = dimple.newSvg("#Chart4", "100%", 400);
        var svg5 = dimple.newSvg("#ChartFive", "100%", 400);
        var svg8 = dimple.newSvg("#Chart8", "100%", 400);
        var svg9 = dimple.newSvg("#Chart9", "100%", 400);    
        var svg7 = dimple.newSvg("#Chart7", "100%", 400);
        //var svg10 = dimple.newSvg("#Chart10", "100%", 400);
        var svg11 = dimple.newSvg("#Chart11", "100%", 400);   
        var svg12 = dimple.newSvg("#Chart12", "100%", 400);
        var svg13 = dimple.newSvg("#Chart13", "100%", 400);
        var svg14 = dimple.newSvg("#Chart14", "100%", 400); 
        var svg15 = dimple.newSvg("#Chart15", "100%", 450);
        var svg71 = dimple.newSvg("#Chart17", "100%", 400);
        var svg81 = dimple.newSvg("#Chart18", "100%", 400);
        var svg91 = dimple.newSvg("#Chart19", "100%", 400);
        
        var print0 = dimple.newSvg("#Print0", 750, 400);
        var print1 = dimple.newSvg("#Print2", 750, 400);
        var print3 = dimple.newSvg("#Print3", 750, 400);
        var print4 = dimple.newSvg("#Print4", 750, 400);
        var print5 = dimple.newSvg("#PrintFive", 750, 400);
        var print8 = dimple.newSvg("#Print8", 750, 400);
        var print9 = dimple.newSvg("#Print9", 750, 400);    
        var print7 = dimple.newSvg("#Print7", 750, 400);
        //var print10 = dimple.newSvg("#Print10", 750, 400);
        var print11 = dimple.newSvg("#Print11", 750, 400);   
        var print12 = dimple.newSvg("#Print12", 750, 400);
        var print13 = dimple.newSvg("#Print13", 750, 400);
        var print14 = dimple.newSvg("#Print14", 750, 400); 
        var print15 = dimple.newSvg("#Print15", 750, 450);
        var print71 = dimple.newSvg("#Print17", 750, 400);
        var print81 = dimple.newSvg("#Print18", 750, 400);
        var print91 = dimple.newSvg("#Print19", 750, 400);

        


                
        
        
    });


var whichChart = 1;

function hidePrint(){
    document.getElementById("Print0").style.display="none";
    document.getElementById("Print2").style.display="none";
    document.getElementById("Print3").style.display="none";
    document.getElementById("Print4").style.display="none";
    document.getElementById("PrintFive").style.display="none";
    document.getElementById("Print8").style.display="none";
    document.getElementById("Print9").style.display="none";
    document.getElementById("Print7").style.display="none";
    //document.getElementById("Print10").style.display="none";
    document.getElementById("Print11").style.display="none";
    document.getElementById("Print12").style.display="none";
    document.getElementById("Print13").style.display="none";
    document.getElementById("Print14").style.display="none";
    document.getElementById("Print15").style.display="none";
    document.getElementById("Print17").style.display="none";
    document.getElementById("Print18").style.display="none";
    document.getElementById("Print19").style.display="none";
    document.getElementById("Print20").style.display="none";
    document.getElementById("Print21").style.display="none";
    document.getElementById("Landing").style.display="none";
    
    drawAll();
}

function hideChart(){
    document.getElementById("Chart0").style.display="none";
    document.getElementById("Chart2").style.display="none";
    document.getElementById("Chart3").style.display="none";
    document.getElementById("Chart4").style.display="none";
    document.getElementById("ChartFive").style.display="none";
    document.getElementById("Chart8").style.display="none";
    document.getElementById("Chart9").style.display="none";
    document.getElementById("Chart7").style.display="none";
    //document.getElementById("Chart10").style.display="none";
    document.getElementById("Chart11").style.display="none";
    document.getElementById("Chart12").style.display="none";
    document.getElementById("Chart13").style.display="none";
    document.getElementById("Chart14").style.display="none";
    document.getElementById("Chart15").style.display="none";
    document.getElementById("Chart17").style.display="none";
    document.getElementById("Chart18").style.display="none";
    document.getElementById("Chart19").style.display="none";
    document.getElementById("Chart20").style.display="none";
    document.getElementById("Chart21").style.display="none";
    document.getElementById("Landing").style.display="none";
    drawAll();
}

function showChart(){
    document.getElementById("Chart0").style.display="inline";
    document.getElementById("Chart2").style.display="inline";
    document.getElementById("Chart3").style.display="inline";
    document.getElementById("Chart4").style.display="inline";
    document.getElementById("ChartFive").style.display="inline";
    document.getElementById("Chart8").style.display="inline";
    document.getElementById("Chart9").style.display="inline";
    document.getElementById("Chart7").style.display="inline";
    //document.getElementById("Chart10").style.display="inline";
    document.getElementById("Chart11").style.display="inline";
    document.getElementById("Chart12").style.display="inline";
    document.getElementById("Chart13").style.display="inline";
    document.getElementById("Chart14").style.display="inline";
    document.getElementById("Chart15").style.display="inline";
    document.getElementById("Chart17").style.display="inline";
    document.getElementById("Chart18").style.display="inline";
    document.getElementById("Chart19").style.display="inline";
    document.getElementById("Chart20").style.display="inline";
    document.getElementById("Chart21").style.display="inline";
    document.getElementById("Landing").style.display="none";
    drawAll();
}

function showPrint(){
    document.getElementById("Print0").style.display="inline";
    document.getElementById("Print2").style.display="inline";
    document.getElementById("Print3").style.display="inline";
    document.getElementById("Print4").style.display="inline";
    document.getElementById("PrintFive").style.display="inline";
    document.getElementById("Print8").style.display="inline";
    document.getElementById("Print9").style.display="inline";
    document.getElementById("Print7").style.display="inline";
    //document.getElementById("Print10").style.display="inline";
    document.getElementById("Print11").style.display="inline";
    document.getElementById("Print12").style.display="inline";
    document.getElementById("Print13").style.display="inline";
    document.getElementById("Print14").style.display="inline";
    document.getElementById("Print15").style.display="inline";
    document.getElementById("Print17").style.display="inline";
    document.getElementById("Print18").style.display="inline";
    document.getElementById("Print19").style.display="inline";
    document.getElementById("Print20").style.display="inline";
    document.getElementById("Print21").style.display="inline";
    document.getElementById("Landing").style.display="none";
    
    drawAll();
}


function collapse1() {
        document.getElementById("collapse1").style.display="inline";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        //document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse18").style.display="none";
        document.getElementById("collapse19").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 1;
    
        
        drawAll();
        hidePrint();
        
    }
function collapse2() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="inline";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        //document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("collapse18").style.display="none";
        document.getElementById("collapse19").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 2;
        drawAll();
        hidePrint();
        
    }
function collapse3() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="inline";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        //document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("collapse18").style.display="none";
        document.getElementById("collapse19").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 3;
        drawAll();
        hidePrint();
        
    }
function collapse4() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="inline";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        //document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("collapse18").style.display="none";
        document.getElementById("collapse19").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 4;
        drawAll();
        hidePrint();
    }
function collapse5() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="inline";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        //document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("collapse18").style.display="none";
        document.getElementById("collapse19").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 5;
        drawAll();
        hidePrint();
    }
function collapse6() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="inline";
        document.getElementById("collapse7").style.display="none";
        //document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("collapse18").style.display="none";
        document.getElementById("collapse19").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 6;
        drawAll();
        hidePrint();
    }
function collapse7() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="inline";
        //document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("collapse18").style.display="none";
        document.getElementById("collapse19").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 7;
        drawAll();
        hidePrint();
    }
function collapse8() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        //document.getElementById("collapse8").style.display="inline";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("collapse18").style.display="none";
        document.getElementById("collapse19").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 8;
        drawAll();
        hidePrint();
    }
function collapse9() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        //document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="inline";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("collapse18").style.display="none";
        document.getElementById("collapse19").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 9;
        drawAll();
        hidePrint();
    }
function collapse10() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        //document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="inline";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="inline";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("collapse18").style.display="none";
        document.getElementById("collapse19").style.display="none";
    
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 10;
        
        drawAll();
        hidePrint();
    }
function collapse11() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        //document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="inline";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="inline";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("collapse18").style.display="none";
        document.getElementById("collapse19").style.display="none";
    
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 11;
        
        drawAll();
        hidePrint();
    }
function collapse12() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        //document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="inline";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="inline";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("collapse18").style.display="none";
        document.getElementById("collapse19").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 12;
        
        drawAll();
        hidePrint();
    }
function collapse13() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        //document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="inline";
        document.getElementById("collapse14").style.display="inline";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("collapse18").style.display="none";
        document.getElementById("collapse19").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 13;
        
        drawAll();
        hidePrint();
    }
function collapse14() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        //document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="inline";
        document.getElementById("collapse15").style.display="inline";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("collapse18").style.display="none";
        document.getElementById("collapse19").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 14;
        
        drawAll();
        hidePrint();
    }
function collapse15() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        //document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="inline";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="inline";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("collapse18").style.display="none";
        document.getElementById("collapse19").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 15;
        
        drawAll();
        hidePrint();
    }

function collapse16() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        //document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="inline";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="inline";
        document.getElementById("collapse18").style.display="none";
        document.getElementById("collapse19").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 16;
        
        drawAll();
        hidePrint();
    }

function collapse17() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        //document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("collapse18").style.display="inline";
        document.getElementById("collapse19").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 17;
        
        drawAll();
        hidePrint();
    }

function collapse18() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        //document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("collapse18").style.display="none";
        document.getElementById("collapse19").style.display="inline";
        document.getElementById("pTitle").innerHTML = "Maryland";
        whichChart = 18;
        
        drawAll();
        hidePrint();
    }

function showAll() {
        document.getElementById("collapse1").style.display="inline";
        document.getElementById("collapse2").style.display="inline";
        document.getElementById("collapse3").style.display="inline";
        document.getElementById("collapse4").style.display="inline";
        document.getElementById("collapse5").style.display="inline";
        document.getElementById("collapse6").style.display="inline";
        document.getElementById("collapse7").style.display="inline";
        //document.getElementById("collapse8").style.display="inline";
        document.getElementById("collapse9").style.display="inline";
        document.getElementById("collapse10").style.display="inline";
        document.getElementById("collapse11").style.display="inline";
        document.getElementById("collapse12").style.display="inline";
        document.getElementById("collapse13").style.display="inline";
        document.getElementById("collapse14").style.display="inline";
        document.getElementById("collapse15").style.display="inline";
        document.getElementById("collapse16").style.display="inline";
        document.getElementById("collapse17").style.display="inline";
        document.getElementById("collapse18").style.display="inline";
        document.getElementById("collapse19").style.display="inline";
        
        
        document.getElementById("pTitle").innerHTML = "Maryland";
        
        hideChart();
        showPrint();
        drawAll();
        
    }

function hideAll() {
        document.getElementById("collapse1").style.display="none";
        document.getElementById("collapse2").style.display="none";
        document.getElementById("collapse3").style.display="none";
        document.getElementById("collapse4").style.display="none";
        document.getElementById("collapse5").style.display="none";
        document.getElementById("collapse6").style.display="none";
        document.getElementById("collapse7").style.display="none";
        //document.getElementById("collapse8").style.display="none";
        document.getElementById("collapse9").style.display="none";
        document.getElementById("collapse10").style.display="none";
        document.getElementById("collapse11").style.display="none";
        document.getElementById("collapse12").style.display="none";
        document.getElementById("collapse13").style.display="none";
        document.getElementById("collapse14").style.display="none";
        document.getElementById("collapse15").style.display="none";
        document.getElementById("collapse16").style.display="none";
        document.getElementById("collapse17").style.display="none";
        document.getElementById("collapse18").style.display="none";
        document.getElementById("collapse19").style.display="none";
        document.getElementById("pTitle").innerHTML = "Maryland";
        
        
        drawAll();
        
    }

window.printClick = function(){
    if(whichChart == 1){
        collapse1();
        document.getElementById("Chart0").style.display="none";
        document.getElementById("Print0").style.display="inline";
        drawAll();
        
    }else if(whichChart == 2){
        collapse2();
        document.getElementById("Chart2").style.display="none";
        document.getElementById("Print2").style.display="inline";
        drawAll();
        
    }else if(whichChart == 3){
        collapse3();
        document.getElementById("Chart3").style.display="none";
        document.getElementById("Print3").style.display="inline";
        drawAll();
        
    }else if(whichChart == 4){
        collapse4();
        document.getElementById("Chart4").style.display="none";
        document.getElementById("Print4").style.display="inline";
        drawAll();
        
    }else if(whichChart == 5){
        collapse5();
        document.getElementById("ChartFive").style.display="none";
        document.getElementById("PrintFive").style.display="inline";
        drawAll();
        
    }else if(whichChart == 6){
        collapse6();
        document.getElementById("Chart8").style.display="none";
        document.getElementById("Print8").style.display="inline";
        drawAll();
        
    }else if(whichChart == 7){
        collapse7();
        document.getElementById("Chart9").style.display="none";
        document.getElementById("Print9").style.display="inline";
        drawAll();
        
    }else if(whichChart == 8){
        collapse8();
        //document.getElementById("Chart10").style.display="none";
        //document.getElementById("Print10").style.display="inline";
        drawAll();
        
    }else if(whichChart == 9){
        collapse9();
        document.getElementById("Chart11").style.display="none";
        document.getElementById("Print11").style.display="inline";
        drawAll();
        
    }else if(whichChart == 10){
        collapse10();
        document.getElementById("Chart12").style.display="none";
        document.getElementById("Print12").style.display="inline";
        drawAll();
        
    }else if(whichChart == 11){
        collapse11();
        document.getElementById("Chart13").style.display="none";
        document.getElementById("Print13").style.display="inline";
        drawAll();
        
    }else if(whichChart == 12){
        collapse12();
        document.getElementById("Chart14").style.display="none";
        document.getElementById("Print14").style.display="inline";
        drawAll();
        
    }else if(whichChart == 13){
        collapse13();
        document.getElementById("Chart15").style.display="none";
        document.getElementById("Print15").style.display="inline";
        drawAll();
        
    }else if(whichChart == 14){
        collapse14();
        document.getElementById("Chart17").style.display="none";
        document.getElementById("Print17").style.display="inline";
        drawAll();
        
    }else if(whichChart == 15){
        collapse15();
        document.getElementById("Chart18").style.display="none";
        document.getElementById("Print18").style.display="inline";
        drawAll();
        
    }else if(whichChart == 16){
        collapse16();
        document.getElementById("Chart19").style.display="none";
        document.getElementById("Print19").style.display="inline";
        drawAll();
        
    }else if(whichChart == 17){
        collapse17();
        document.getElementById("Chart20").style.display="none";
        document.getElementById("Print20").style.display="inline";
        drawAll();
        
    }else if(whichChart == 18){
        collapse18();
        document.getElementById("Chart21").style.display="none";
        document.getElementById("Print21").style.display="inline";
        drawAll();
        
    }
window.print();
}

window.printAll = function() {
    
    showAll();
    drawAll();
    window.print();
};

window.onafterprint = function() {
   hideAll();
   showChart();
   document.getElementById("Landing").style.display="inline";
   
};

window.onload = function() {
    $(document).ready(
    function(){
        $("button[class=button]").each( //add more selector here if you want
            function(){
                if($(this).attr("disabled"))
                    $(this).attr("disabled", false); //enable button again
            }
        );
    }
);
    
}
