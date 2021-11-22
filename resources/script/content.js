const loader = document.getElementById("loadingPage");

// document.onload(function() {

    setTimeout(function() {

        loader.classList.add('fadeOut');
    
        setTimeout(function() {
    
            loader.style.display = "none";
    
        },1000)
        
    
    }, 3000)

// });

