var friends = ["Rahul", "Rohit", "Raj", "Ravi", "Rajesh"]
document.getElementById("text").innerHTML = "Orginal Array: " +friends

function fun1(){
    friends.sort()
    document.getElementById("r").innerHTML = "Sorted Array: " +friends
}

function fun2(){
    friends.reverse()
    document.getElementById("r").innerHTML = "Reversed Array: " +friends
}