import aboutPhoto from "../images/about.jpg";
import "../PageCSS/about.css"
let content = document.getElementById("content");

////about page div
let aboutpage = document.createElement("div");

///about page photo banner
let aboutBannerPhoto = document.createElement("img");
aboutBannerPhoto.src = aboutPhoto;
aboutBannerPhoto.id="bannerPhoto"
////about page photo banner div
let aboutBannerPhotoDiv = document.createElement("div");
aboutBannerPhotoDiv.id = "bannerdiv";
////adding banner to banner div 
aboutBannerPhotoDiv.appendChild(aboutBannerPhoto);





////titile area div
let titleAreaDiv = document.createElement("div");
titleAreaDiv.id = "textdiv"
titleAreaDiv.classList.add("textdiv")

////title area text
let heading = document.createElement("p");
heading.id = "heading"
heading.textContent = "Welcome to The Mirage"
////subheading text
let subheading = document.createElement("p");
subheading.textContent = "Setting New Standards of Excellence";
titleAreaDiv.appendChild(heading);
titleAreaDiv.appendChild(subheading);


////hotel descripton div
let descriptionTextArea = document.createElement("div");
descriptionTextArea.classList.add("textdiv", "description","about")
////hotel description div
let descriptionMessage1 = document.createElement("p");
descriptionMessage1.id = "descriptionText1"
descriptionMessage1.textContent = "Step into a world where elegance meets innovation at Luxury Inn, a distinguished and upcoming hotel chain crafted for the modern traveler who seeks more than just a stay. Designed with sophistication at its core, Luxury Inn redefines comfort with refined spaces, personalized service, and world-class amenities."

let descriptionMessage2 = document.createElement("p");
descriptionMessage2.id = "descriptionText2"
descriptionMessage2.textContent = "Each room and suite at Luxury Inn is an oasis of indulgence — featuring plush bedding, curated interiors, high - speed connectivity, and smart entertainment systems.Begin your day with a lavish gourmet breakfast, unwind with 24 - hour in -room dining curated by celebrated chefs, and end your evenings with handcrafted cocktails at our signature rooftop lounge overlooking breathtaking cityscapes"

let descriptionMessage3 = document.createElement("p");
descriptionMessage3.id = "descriptionText3"
descriptionMessage3.textContent = "Luxury Inn is more than a hotel — it is an experience.Enjoy rooftop infinity pools, rejuvenating spa sanctuaries, and wellness centers offering holistic therapies.Business guests can access fully equipped executive lounges and state - of - the - art conference halls, while families delight in dedicated leisure spaces and tailored concierge services."

descriptionTextArea.appendChild(descriptionMessage1);
descriptionTextArea.appendChild(descriptionMessage2);
descriptionTextArea.appendChild(descriptionMessage3);





aboutpage.appendChild(titleAreaDiv);
aboutpage.appendChild(aboutBannerPhotoDiv);
aboutpage.appendChild(descriptionTextArea);

function displayAbout(){
    console.log("export working intial");

    content.innerHTML="";

    content.appendChild(aboutpage);











    console.log("export working final");







}

export {displayAbout};