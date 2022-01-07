document.onclick = function(e) {
    if(e.target.id != 'burger'){
        document.getElementById("myNav").style.width = "0%";
    }else{
        document.getElementById("myNav").style.width = "70%";
    }
}