// select content parts
const aboutMe = document.getElementById("aboutMe");
const projects = document.getElementById("projects");
const education = document.getElementById("education");
const contact = document.getElementById("contact");

window.onscroll = function () {
    if (sessionStorage.getItem("clickButton") == null) {
        console.log("-------- Scroll --------");
        scroll_response();
    }
}

function scroll_response() {
    let top_aboutMe = aboutMe.getBoundingClientRect().top;
    let top_projects = projects.getBoundingClientRect().top;
    let top_education = education.getBoundingClientRect().top;
    let top_contact = contact.getBoundingClientRect().top;

    let height_aboutMe = aboutMe.offsetHeight;
    let height_projects = projects.offsetHeight;
    let height_education = education.offsetHeight;
    let height_contact = contact.offsetHeight;

    // windows size
    let window_height = window.innerHeight;
    let window_width = window.innerWidth;

    // offset from top line
    let top_offset = 77;

    // menu
    // navBAR declared in  index.html
	let selector_aboutMe = navBAR.children[0].children[0];
    let selector_education = navBAR.children[0].children[1];
    let selector_projects = navBAR.children[0].children[2];
    let selector_contact = navBAR.children[0].children[3];

    if (window_width > 767 || true) {

        console.log("window height: " + window_height);
        console.log("window width: " + window_width);

        console.log("Top aboutMe: " + top_aboutMe);
        console.log("height_aboutMe: " + height_aboutMe);
        console.log("Top education: " + top_education);
        console.log("height_education: " + height_education);

        // aboutMe SHOW
        // 1) top of the BLOCK coming from bottom
        // 2) bottom of the BLOCK coming from top (bottom_aboutMe = top_aboutMe + height_aboutMe)
        if (((top_aboutMe < window_height / 2) && (top_aboutMe > top_offset)) ||
            ((top_aboutMe + height_aboutMe < window_height * 2 / 3) && (top_aboutMe + height_aboutMe > window_height * 1 / 3))) {
            manipulation_aboutMe(aboutMe, "show");
        }
        if ((top_aboutMe + height_aboutMe) < top_offset + 1 || top_aboutMe > window_height) {
            manipulation_aboutMe(aboutMe, "hide");
        }

        // education 
        if (((top_education < window_height / 2) && (top_education > top_offset)) ||
            ((top_education + height_education < window_height * 2 / 3) && (top_education + height_education > window_height * 1 / 3))) {
            manipulation_education(education, "show");
        }
        if ((top_education + height_education) < top_offset || top_education > window_height) {
            manipulation_education(education, "hide");
        }

        // projects
        if (((top_projects < window_height * 2/3) && (top_projects > top_offset)) ||
            ((top_projects + height_projects < window_height * 2 / 3) && (top_projects + height_projects > window_height * 1 / 3))) {
            manipulation_projects(projects, "show");
        }
        if ((top_projects + height_projects) < top_offset || top_projects > window_height) {
            manipulation_projects(projects, "hide");
        }

        // contact
        if (((top_contact < window_height * 2 / 3) && (top_contact > 0)) ||
            ((top_contact + height_contact < window_height * 2 / 3) && (top_contact + height_contact > 0))) {
            manipulation_contact(contact, "show");
        }
        if ((top_contact + height_contact) < 0 || top_contact > window_height) {
            manipulation_contact(contact, "hide");
        }

        // mark active link on desktop or mobile version (sidebar navigation) on scroll event
        // mark ABOUT ME
        if ((top_aboutMe < window_height / 2) && (top_aboutMe > top_offset)) {
            if (window_width > 767)
                manu_selector(selector_aboutMe);
            else
                sidebar_marker(selector_aboutMe);
        }
        // mark EDUCATION
        if ((top_education < window_height / 2) && (top_education > top_offset)) {
            if (window_width > 767)
                manu_selector(selector_education);
            else
                sidebar_marker(selector_education);
        }
        // mark PROJECTS
        if ((top_projects < window_height / 2) && (top_projects > top_offset)) {
            if (window_width > 767)
                manu_selector(selector_projects);
            else
                sidebar_marker(selector_projects);
        }
        // mark CONTACT
        if ((top_contact < window_height / 2) && (top_contact > top_offset)) {
            if (window_width > 767)
                manu_selector(selector_contact);
            else
                sidebar_marker(selector_contact);
        }
    }
}

function manipulation_aboutMe(aboutMe, status) {

    console.log("Attribute id: " + aboutMe.getAttribute("id") + " status: " + status);

    if (aboutMe.getAttribute("id") == "aboutMe") {
        if (status == "show") {
            if (aboutMe.children[0].className.indexOf("trans-move-on") == -1) {
                aboutMe.children[0].className += " trans-move-on";
                aboutMe.children[1].className += " trans-move-on";
                aboutMe.children[1].children[0].className += " trans-move-on";
                aboutMe.children[1].children[1].className += " trans-move-on text-shadows";
                aboutMe.children[1].children[2].className += " trans-move-on";
                aboutMe.children[1].children[3].className += " trans-move-on";
            }
        } else if (status == "hide") {
            if (aboutMe.children[0].className.indexOf("trans-move-on") > -1) {
                aboutMe.children[0].className = aboutMe.children[0].className.replace(" trans-move-on", "");
                aboutMe.children[1].className = aboutMe.children[1].className.replace(" trans-move-on", "");
                aboutMe.children[1].children[0].className = aboutMe.children[1].children[0].className.replace(" trans-move-on", "");
                aboutMe.children[1].children[1].className = aboutMe.children[1].children[1].className.replace(" trans-move-on text-shadows", "");
                aboutMe.children[1].children[2].className = aboutMe.children[1].children[2].className.replace(" trans-move-on", "");
                aboutMe.children[1].children[3].className = aboutMe.children[1].children[3].className.replace(" trans-move-on", "");
            }
        }
    }
}

function manipulation_education(education, status) {

    console.log("Attribute id: " + education.getAttribute("id") + " status: " + status);

    if (education.getAttribute("id") == "education") {
        if (status == "show") {
            if (education.children[0].className.indexOf("trans-move-on") == -1) {
                education.children[0].className += " trans-move-on";
                for (i = 1; i < education.children.length; i++) {
                    education.children[i].children[0].className += " trans-move-on";
                    education.children[i].children[1].className += " trans-move-on";
					education.children[i].children[0].children[0].className += " hr-w-on";
                }
            }
        } else if (status == "hide") {
            if (education.children[0].className.indexOf("trans-move-on") > -1) {
                education.children[0].className = education.children[0].className.replace(" trans-move-on", "");
                for (i = 1; i < education.children.length; i++) {
                    education.children[i].children[0].className = education.children[i].children[0].className.replace(" trans-move-on", "");
                    education.children[i].children[1].className = education.children[i].children[1].className.replace(" trans-move-on", "");
					education.children[i].children[0].children[0].className = education.children[i].children[0].children[0].className.replace(" hr-w-on", "");
                }
            }
        }
    }
}

function manipulation_projects(projects, status) {

    console.log("Attribute id: " + projects.getAttribute("id") + " status: " + status);

    if (projects.getAttribute("id") == "projects") {
        if (status == "show") {
            if (projects.children[0].className.indexOf("trans-move-on") == -1) {

                projects.children[0].className += " trans-move-on";

                for (i = 0; i < projects.children[1].children.length; i++) {
                    projects.children[1].children[i].className += " trans-move-on";
                }
            }
        } else if (status == "hide") {
            if (projects.children[0].className.indexOf("trans-move-on") > -1) {

                projects.children[0].className = projects.children[0].className.replace(" trans-move-on", "");

                for (i = 0; i < projects.children[1].children.length; i++) {
                    projects.children[1].children[i].className = projects.children[1].children[i].className.replace(" trans-move-on", "");
                }
            }
        }
    }
}

function manipulation_contact(contact, status) {

    console.log("Attribute id: " + contact.getAttribute("id") + " status: " + status);

    const row = document.querySelectorAll(".info-col1 .row");
    const infoCol2 = document.querySelector(".info-col2");

    if (contact.getAttribute("id") == "contact") {
        if (status == "show") {
            if (contact.children[0].className.indexOf("trans-move-on") == -1) {

                contact.children[0].className += " trans-move-on";
                contact.children[1].children[0].children[0].className += " trans-move-on"; // Title <h3>Contact</h3>

                for (i = 0; i < row.length; i++) {
                    row[i].children[0].className += " trans-move-on";
                    row[i].children[1].className += " trans-move-on";
                }

                infoCol2.children[0].className += " trans-move-on"; // Title <h3>Send message</h3>

                for (i = 0; i < infoCol2.children[1].length; i++) {
                    infoCol2.children[1].children[i].className += " trans-move-on";
                }
            }
        } else if (status == "hide") {
            if (contact.children[0].className.indexOf("trans-move-on") > -1) {

                contact.children[0].className = contact.children[0].className.replace(" trans-move-on", "");
                contact.children[1].children[0].children[0].className = contact.children[1].children[0].children[0].className.replace(" trans-move-on", "");

                for (i = 0; i < row.length; i++) {
                    row[i].children[0].className = row[i].children[0].className.replace(" trans-move-on", "");
                    row[i].children[1].className = row[i].children[1].className.replace(" trans-move-on", "");
                }

                infoCol2.children[0].className = infoCol2.children[0].className.replace(" trans-move-on", "");

                for (i = 0; i < infoCol2.children[1].length; i++) {
                    infoCol2.children[1].children[i].className = infoCol2.children[1].children[i].className.replace(" trans-move-on", "");
                }
            }
        }
    }
}

// desktop marker
function manu_selector(clickedElement) {

    console.log("Menu Selector");

    let desktopLinks = document.querySelectorAll("#navBar div.left-links a");
    let movingElement = document.getElementById("selector");
    let selectedElement;
    let currentElementWidth;
    let currentElementLeftPosition;
    let parentElement;
    let delay_time;

    let elements = {};

    for (i = 0; i < desktopLinks.length; i++) {
        if (desktopLinks[i].textContent == clickedElement.textContent) {
            selectedElement = desktopLinks[i];
            currentElementWidth = desktopLinks[i].offsetWidth;
            currentElementLeftPosition = desktopLinks[i].getBoundingClientRect().left;
            parentElement = desktopLinks[i].parentElement;
            break;
        }
    }

    // starting point
    let startingPoint = parentElement.getBoundingClientRect().left;
    // width of moving element
    let newWidth = currentElementWidth;
    // position of moving element
    let newPosition = currentElementLeftPosition - startingPoint;

    // set attribute "data-select" 
    for (m = 0; m < parentElement.children.length; m++) {
        parentElement.children[m].removeAttribute("data-select");
    }
    selectedElement.setAttribute("data-select", "selected");

    movingElement.style.width = newWidth + "px";
    movingElement.style.transform = "translateX(" + newPosition + "px)";

    elements["selectedElement"] = selectedElement;
    elements["movingElement"] = movingElement;

    return elements;
}

// sidebar marker
function sidebar_marker(selectedElement) {
    let sidebar = document.getElementById("sideBar");
    for (i = 0; i < sidebar.children.length; i++) {
        if (selectedElement.getAttribute("data-name") == sidebar.children[i].getAttribute("data-name")) {
            if (sidebar.children[i].className.indexOf("select-sidebar") == -1) {
                sidebar.children[i].className += " select-sidebar";
            }
        } else {
            sidebar.children[i].className = sidebar.children[i].className.replace(" select-sidebar", "");
        }
    }
}

function animation_element(selectedElement) { // return selected element (content)

    // dataName = ["about-me", "education", "projects", "contact"];
    let content_id = ["aboutMe", "education", "projects", "contact"];

    // selectedElement can be <a> element with value of attribute data-name or only text string
	for (i = 0; i < dataName.length; i++) {

        if (typeof (selectedElement) == "string") {
            if (dataName[i] == selectedElement) {
                return document.getElementById(content_id[i]);
            }
        } else if (dataName[i] == selectedElement.getAttribute("data-name")) {
            return document.getElementById(content_id[i]);
        }
    }
    return false;
}