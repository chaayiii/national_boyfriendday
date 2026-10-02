const pages=document.querySelectorAll(".page");
const music=document.getElementById("music");

function startWebsite(){
  music.play().catch(()=>{});
  nextPage("letter");
}
function nextPage(id){
  pages.forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}
function secretMessage(){document.getElementById("secret").classList.add("show")}
function closeSecret(){document.getElementById("secret").classList.remove("show")}