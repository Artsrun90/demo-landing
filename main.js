function openNav() {
    document.getElementById("mySidenav").style.right = "0px";
  }
  
function closeNav() {
  document.getElementById("mySidenav").style.right = "-350px";
}

function showOurText(e) {
    console.log(e.id);
    let id = e.id;
    let weAre =  document.getElementById("who-we-are");
    let ourVis = document.getElementById("our-vision");
    let ourHis = document.getElementById("our-history");
    let teamText1 = document.getElementById("team-text-1");
    let teamText2 = document.getElementById("team-text-2");
    let teamText3 = document.getElementById("team-text-3");
    if (id == weAre.id) {
        weAre.classList.add("btn-active");                
        ourVis.classList.remove("btn-active");           
        ourHis.classList.remove("btn-active");
        teamText2.style.display = "none";     
        teamText3.style.display = "none";           
        setTimeout(() => {
            teamText1.style.display = "block";
        }, 100);   
    } else if (id == ourVis.id) {
        weAre.classList.remove("btn-active");                
        ourVis.classList.add("btn-active");           
        ourHis.classList.remove("btn-active");
        teamText1.style.display = "none";     
        teamText3.style.display = "none";           
        setTimeout(() => {
            teamText2.style.display = "block";
        }, 100);     
        
    } else {
        weAre.classList.remove("btn-active");                
        ourVis.classList.remove("btn-active");           
        ourHis.classList.add("btn-active");
        teamText1.style.display = "none";     
        teamText2.style.display = "none";           
        setTimeout(() => {
            teamText3.style.display = "block";
        }, 100);
    }
}

document.addEventListener('click', function(event) {
  if (!event.target.matches('.scroll-into')) return;
  event.preventDefault();
  const element = document.getElementById(event.target.dataset.target);
  if (element.id == "nav" || element.id == "page-up") {
    window.scrollTo({top: 0, behavior: 'smooth' });
    return false;
  }
  console.log(element.id);
  let y;
  if (element.id == "contacts") {
      y = element.getBoundingClientRect().top + window.pageYOffset - 150;    
  } else {
      y = element.getBoundingClientRect().top + window.pageYOffset - 50;   
  }
  window.scrollTo({top: y, behavior: 'smooth' });
})

window.onscroll = function (e) {
  let top = document.documentElement.scrollTop || document.body.scrollTop;
  if (top == 0) {
    document.getElementById('page-up').style.display = "none";
  } else if (top > 30){
    document.getElementById('page-up').style.display = "flex";
  }
}
