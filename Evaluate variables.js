function f1() {
    var x = 100
    var y = 20
    var r1 = eval("x+y") + "<br>"
    var r2 = eval("x-y") + "<br>" 
    var result = r1+r2 
    document.getElementById("result").innerHTML = result
}