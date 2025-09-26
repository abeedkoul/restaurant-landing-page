import firstPhoto from "../images/firstPhoto.jpg"
import "../PageCSS/homepage.css"

let content = document.getElementById("content");
// let navbar = document.getElementById("navbar");
////homepage
let homePage = document.createElement("div");
homePage.id = "homepage"


////bannerphoto
let bannerPhoto = document.createElement("img");
bannerPhoto.src = firstPhoto;
bannerPhoto.id = "bannerPhoto"
////bannerphoto div
let bannerPhotoDiv = document.createElement("div");
bannerPhotoDiv.id = "bannerdiv"
bannerPhotoDiv.appendChild(bannerPhoto)


////titile area div
let titleAreaDiv = document.createElement("div");
titleAreaDiv.id = "textdiv"
titleAreaDiv.classList.add("textdiv")

////title area text
let heading = document.createElement("p");
heading.id = "heading"
heading.textContent = "Welcome to The Mirage"

let subheading = document.createElement("p");
subheading.textContent = "Setting New Standards of Excellence";


////hotel descripton div
let descriptionTextArea = document.createElement("div");
descriptionTextArea.classList.add("textdiv", "description")
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

titleAreaDiv.appendChild(heading);
titleAreaDiv.appendChild(subheading);

descriptionTextArea.appendChild(descriptionMessage1);
descriptionTextArea.appendChild(descriptionMessage2);
descriptionTextArea.appendChild(descriptionMessage3);







homePage.appendChild(titleAreaDiv);
homePage.appendChild(bannerPhotoDiv);
homePage.appendChild(descriptionTextArea);






function displayHomePage() {
    console.log("lolololo initial check");
    content.innerHTML = ""
    return homePage
}

function displayHomePageOnClick() {
    return content.appendChild(displayHomePage());
}

export { displayHomePage, displayHomePageOnClick };