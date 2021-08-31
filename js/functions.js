const p_lvl = document.getElementById('level')
const p_rounds = document.getElementById('rounds')
const p_points = document.getElementById('points')
const p_num1 = document.getElementById('zahl1')
const p_num2 = document.getElementById('zahl2')
const p_var = document.getElementById('variable')

var lvl = 1
var rounds = 0
var points = 0

window.onload = function() {
    getData()
    //condition ? value if true : value if false
    StartNewRound()
}

function StartNewRound() {
    reloadData()

    setData() 
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