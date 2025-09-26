import { displayHomePage, displayHomePageOnClick } from "./Pages/home";
import { displayAbout } from "./Pages/about";
let content = document.getElementById("content");
content.appendChild(displayHomePage());





console.log("automatically auto loading page")





////home button 
let homeButton = document.getElementById("home");
homeButton.addEventListener("click",displayHomePageOnClick)


////about button
let aboutButton = document.getElementById("about");
aboutButton.addEventListener("click",displayAbout)




console.log("webpack server is runnning successfully")