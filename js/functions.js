const p_lvl = document.getElementById('level')
const p_rounds = document.getElementById('rounds')
const p_points = document.getElementById('points')
const p_num1 = document.getElementById('zahl1')
const p_num2 = document.getElementById('zahl2')
const p_var = document.getElementById('variable')

var lvl = 1
var rounds = 0
var points = 0
var zahl1
var zahl2
var variable

window.onload = function () {
    getData()
    //condition ? value if true : value if false
    StartNewRound()
}

function StartNewRound() {
    reloadData()
    setData()
    zahl1 = Math.round(Math.random() * lvl, 0)
    zahl2 = Math.round(Math.random() * lvl, 0)
    if (zahl1 < zahl2) {
        let temp = zahl1
        zahl1 = zahl2
        zahl2 = temp
    }
    switch (lvl) {
        case lvl < 5:
            variable = 1
            break;
        case lvl < 10:
            variable = 2
            break;
        case lvl < 15:
            variable = 3
            break;
        case lvl < 20:
            variable = 4
            break;
        default:
            break;
    }
    p_num1.innerHTML = zahl1
    p_num2.innerHTML = zahl2
    rounds++
}

function checkResult(result) {
    console.log("test")
    console.log(result.value)
    return false
}

function reloadData() {
    p_lvl.innerHTML = lvl
    p_points.innerHTML = points
    p_rounds.innerHTML = rounds
}

function getData() {
    lvl = localStorage.getItem('lvl') || 1
    points = localStorage.getItem('points') || 0
    rounds = localStorage.getItem('rounds') || 0
}

function setData() {
    localStorage.setItem('lvl', lvl)
    localStorage.setItem('points', points)
    localStorage.setItem('rounds', rounds)
}