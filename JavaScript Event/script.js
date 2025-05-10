function sub() {
    document.getElementById("text").innerHTML = "Subscribe to my channel";
    document.getElementById("btn").innerHTML = "Subscribed Done";
    document.getElementById("btn").style.backgroundColor = "red";
    document.getElementById("btn").style.color = "white";
}


function heart() {
    document.getElementById("btn2").innerHTML = "❤️";
    document.getElementById("btn2").style.color = "red";
    document.getElementById("btn2").style.fontSize = "50px";
    document.getElementById("btn2").style.transition = "0.5s";
    document.getElementById("btn2").style.transform = "scale(1.5)";
    document.getElementById("btn2").style.transform = "rotate(360deg)";
    document.getElementById("btn2").style.transition = "0.5s";
    document.getElementById("btn2").style.transform = "scale(1.5) rotate(360deg)";
    document.getElementById("btn2").style.backgroundColor = "rgb(177, 203, 207)";
}

function key() {
    document.getElementById("text").innerHTML = "Key Pressed ❤️";
}


document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("text").innerHTML = "Subscribe to my channel as4 vlogs";
    document.getElementById("btn").innerHTML = "Subscribed Done 🤍";
    document.getElementById("btn").style.backgroundColor = "black";
    document.getElementById("btn").style.color = "white";
});


// *...................function load evcent
// function load() {
//     alert("Loading...");
//     document.getElementById("text").innerHTML = " website is loading...Working on it";
// }