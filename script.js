$(document).ready(function(){
    $('.img-header-calc').addClass('spin');
})

var Pi = Math.PI;

// 2D SHAPES

function sqrCalc() {
    var sqrSide = parseFloat(document.getElementById('sqr_side1').value);
    document.getElementById('sqr_result').value = sqrSide * sqrSide
}

function recCalc() {
    var recSide = parseFloat(document.getElementById('rec_side1').value);
    var recSide2 = parseFloat(document.getElementById('rec_side2').value);
    document.getElementById('rec_result').value = recSide * recSide2
}

function triCalc() {
    var triBase = parseFloat(document.getElementById('tri_base').value);
    var triHeight = parseFloat(document.getElementById('tri_height').value);
    document.getElementById('tri_result').value = (0.5 * triBase) * triHeight
}

function cirCalc () {
    var cirRadius = parseFloat(document.getElementById('cir_radius').value);
    document.getElementById('cir_result').value = Pi * (cirRadius * cirRadius)
}

function trapCalc () {
    var trapB1 = parseFloat(document.getElementById('trap_b1').value);
    var trapB2 = parseFloat(document.getElementById('trap_b2').value);
    var trapHeight = parseFloat(document.getElementById('trap_height').value);
    document.getElementById('trap_result').value = (0.5 * (trapB1 + trapB2)) * trapHeight
}

// 3D SHAPES

/*
    Cylinder:
    A = 2πrh + 2πr^2
    V = πr^2h
*/

function cylCalc () {
    var cylRadius = parseFloat(document.getElementById('cyl_radius').value);
    var cylHeight = parseFloat(document.getElementById('cyl_height').value);
    document.getElementById('cyl_area').value = (2 * Pi * cylRadius * cylHeight) + (2 * Pi * (cylRadius*cylRadius));
    document.getElementById('cyl_vol').value = Pi * (cylRadius*cylRadius) * cylHeight;
}

/*
    Solid Cone:
    A = πrh + πr^2
    V = π*r^2*(h/3)
*/

function coneCalcArea () {
    var coneRadius = parseFloat(document.getElementById('cone_radius').value);
    var coneSlantHeight = parseFloat(document.getElementById('cone_slant-height').value);
    document.getElementById('cone_area').value = (Pi * (coneRadius * coneSlantHeight)) + (Pi * (coneRadius*coneRadius));
}

function coneCalcVol () {
    var coneRadius = parseFloat(document.getElementById('cone_radius').value);
    var coneHeight = parseFloat(document.getElementById('cone_height').value);
    document.getElementById('cone_vol').value = (Pi * (coneRadius * coneRadius)) * (coneHeight/3);
}

/*
    Quadrilateral-Based Pyramid:
    A = 1/2 * p * l
    V = (s1 * s2 * h)/3
*/

function pyrCalcArea () {
    var pyrS1 = parseFloat(document.getElementById('pyr_s1').value);
    var pyrS2 = parseFloat(document.getElementById('pyr_s2').value);
    var pyrSlantHeight = parseFloat(document.getElementById('pyr_slant-height').value);
    var pyrBaseArea = pyrS1 * pyrS2;
    document.getElementById('pyr_area').value = (0.5 * ((pyrS1*2) + (pyrS2*2)) * pyrSlantHeight) + pyrBaseArea
}

function pyrCalcVol () {
    var pyrS1 = parseFloat(document.getElementById('pyr_s1').value);
    var pyrS2 = parseFloat(document.getElementById('pyr_s2').value);
    var pyrHeight = parseFloat(document.getElementById('pyr_height').value);
    document.getElementById('pyr_vol').value = ((pyrS1 * pyrS2 * pyrHeight))/3
}
