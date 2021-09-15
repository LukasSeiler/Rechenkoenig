const p_lvl = document.getElementsByClassName('level')
const p_rounds = document.getElementById('rounds')
const p_points = document.getElementById('points')
const p_num1 = document.getElementById('zahl1')
const p_num2 = document.getElementById('zahl2')
const p_var = document.getElementsByClassName('variable')
const inp_res = document.getElementById('result')

var lvl = 1
var rounds = 0
var points = 0
var zahl1
var zahl2
var variable
var resultat

window.onload = function () {
    getData()
    //condition ? value if true : value if false
    StartNewRound()
}

function StartNewRound() {
    inp_res.style.border = "none"
    inp_res.value = ''
    reloadData()
    setData()
    setPerles()
    zahl1 = Math.round(Math.random() * lvl * 100, 0)
    zahl2 = Math.round(Math.random() * lvl * 100, 0)
    if (zahl1 < zahl2) {
        let temp = zahl1
        zahl1 = zahl2
        zahl2 = temp
    }
    if (lvl < 5) {
        variable = 1
        p_var.innerHTML = "+"
        resultat = zahl1 + zahl2
    } else if (lvl < 10) {
        variable = 2
        p_var.innerHTML = "-"
        resultat = zahl1 - zahl2
    } else if (lvl < 15) {
        variable = 3
        p_var.innerHTML = "*"
        resultat = zahl1 * zahl2
    } else if (lvl < 20) {
        variable = 4
        p_var.innerHTML = "/"
        resultat = Math.round(zahl1 / zahl2, 3)
    }
    p_num1.innerHTML = zahl1
    p_num2.innerHTML = zahl2
    rounds++
}
function checkResult() {
    if (inp_res.value == resultat) {
        inp_res.style.border = "5px solid green"
        points++
        if (lvl * 5 == points) {
            lvl++
        }
    } else {
        inp_res.style.border = "5px solid red"
    }
    console.log("rounds: " + rounds + " lvl: " + lvl + " points: " + points)
    setTimeout(StartNewRound, 5000)
    return false
}

function setPerles() {
    for (let i = 0; i < lvl; i++) {
        var name = 'p' + (i+1)
        document.getElementById(name).style.backgroundColor = "rgb(223, 199, 165)"
    }
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