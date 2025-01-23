function openTab(TabName) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(TabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click(); 



  
    // ORDRE ALPHABETIQUE

    const containerDisco = document.querySelector(".CONTAINER-Disco");
    const key = (a) => a.querySelector(".title").textContent.trim();
    Array.from(containerDisco.children)
      .sort((a, b) => key(a).localeCompare(key(b)))
      .forEach(child => containerDisco.appendChild(child));
    
      
    
      const containerBG3 = document.querySelector(".CONTAINER-BG3");
    Array.from(containerBG3.children)
      .sort((a, b) => key(a).localeCompare(key(b)))
      .forEach(child => containerBG3.appendChild(child));






// SEARCH FUNCTION DISCO

let cardsDisco = document.querySelectorAll('.box-Disco')
    
function liveSearchDisco() {
    let search_query = document.getElementById("searchbox-Disco").value;
    
    //Use innerText if all contents are visible
    //Use textContent for including hidden elements
    for (var i = 0; i < cardsDisco.length; i++) {
        if(cardsDisco[i].textContent.toLowerCase()
                .includes(search_query.toLowerCase())) {
            cardsDisco[i].classList.remove("is-hidden");
        } else {
            cardsDisco[i].classList.add("is-hidden");
        }
    }
}

//A little delay
let typingTimer;               
let typeInterval = 500;  
let searchInputDisco = document.getElementById('searchbox-Disco');

searchInputDisco.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearchDisco, typeInterval);
});


// SEARCH FUNCTION BG3

let cardsBG3 = document.querySelectorAll('.box-BG3')
    
function liveSearchBG3() {
    let search_query = document.getElementById("searchbox-BG3").value;
    
    //Use innerText if all contents are visible
    //Use textContent for including hidden elements
    for (var i = 0; i < cardsBG3.length; i++) {
        if(cardsBG3[i].textContent.toLowerCase()
                .includes(search_query.toLowerCase())) {
            cardsBG3[i].classList.remove("is-hidden");
        } else {
            cardsBG3[i].classList.add("is-hidden");
        }
    }
}

//A little delay
let searchInputBG3 = document.getElementById('searchbox-BG3');

searchInputBG3.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearchBG3, typeInterval);
});

document.querySelectorAll('.box-Code')
    
function liveSearchCode() {
    let search_query = document.getElementById("searchbox-Code").value;
    
    //Use innerText if all contents are visible
    //Use textContent for including hidden elements
    for (var i = 0; i < cardsCode.length; i++) {
        if(cardsCode[i].textContent.toLowerCase()
                .includes(search_query.toLowerCase())) {
            cardsCode[i].classList.remove("is-hidden");
        } else {
            cardsCode[i].classList.add("is-hidden");
        }
    }
}

//A little delay
let searchInputCode = document.getElementById('searchbox-Code');

searchInputCode.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearchCode, typeInterval);
});