let data = prompt("Enter Your URL Id")

let pattern =/^h+t+t+p+:+[/]+[/]+w+w+w+\.+[a-zA-Z]+\.+[a-zA-Z]{2,}$/

if(pattern.test(data)){
    alert("URL Match")
}

else{
    alert("URL NOT Match")
}