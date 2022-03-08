
const dataName = ["about-me", "education", "projects", "contact"];

function desktop_active(menuElement) {

    console.log("Desktop Active");
    let animationElement = animation_element(menuElement); // return content block to be animated
    let selectedElement = manu_selector(menuElement); // mark element on menu
    let delay_time = 100;

    selectedElement["movingElement"].ontransitionend = () => {
        setTimeout(function () {
            switch (animationElement.getAttribute("id")) {
                case "aboutMe":
                    manipulation_aboutMe(animationElement, "show");
                    break;
                case "education":
                    manipulation_education(animationElement, "show");
                    break;
                case "projects":
                    manipulation_projects(animationElement, "show");
                    break;
                case "contact":
                    manipulation_contact(animationElement, "show");
                    break;
            }
        }, delay_time);
    }
    hide_all_except_one(menuElement);
}

function mobile_active(menuElement, navbar_status) {

    console.log("Mobile Active");
    let animationElement = animation_element(menuElement); // return content block to be animated
    let delay_time = 100;

    sidebar_marker(menuElement);

    setTimeout(function () {
        switch (animationElement.getAttribute("id")) {
            case "aboutMe":
                manipulation_aboutMe(animationElement, "show");
                break;
            case "education":
                manipulation_education(animationElement, "show");
                break;
            case "projects":
                manipulation_projects(animationElement, "show");
                break;
            case "contact":
                manipulation_contact(animationElement, "show");
                break;
        }
    }, delay_time);

    hide_all_except_one(menuElement);

    if (navbar_status != null) {
        navbar_show(navbar_status);
    }
}

function hide_all_except_one(exceptedElement) {

    // let dataName = ["about-me", "education", "projects", "contact"];
    let animationElement;

    for (n = 0; n < dataName.length; n++) {
        if (dataName[n] == exceptedElement.getAttribute("data-name")) {

            console.log("continue: " + dataName[n]);

            continue;
        } else {

            animationElement = animation_element(dataName[n]);

            console.log("dataName[n] = " + dataName[n]);
            console.log(animationElement.getAttribute("id"));

            switch (animationElement.getAttribute("id")) {
                case "aboutMe":
                    manipulation_aboutMe(animationElement, "hide");
                    break;
                case "education":
                    manipulation_education(animationElement, "hide");
                    break;
                case "projects":
                    manipulation_projects(animationElement, "hide");
                    break;
                case "contact":
                    manipulation_contact(animationElement, "hide");
                    break;
            }
        }
    }
}

function show_search_form() {
    // Mobile version 
    console.log("Serach mobile width: " + window.innerWidth);
    if (window.innerWidth < 768) {
        let searchMobile = document.getElementById("searchMobile");
        if (searchMobile.className.indexOf("vertical-move") > -1) {
            searchMobile.className = searchMobile.className.replace(" vertical-move", "");
        } else {
            if (searchMobile.className.indexOf("vertical-move") == -1) {
                searchMobile.className += " vertical-move";
            }
        }
    } else {
        // Desktop version
        let searchForm = document.getElementById("searchInput");
        let searchButton = document.getElementById("searchButton");
        let closeButton = document.getElementById("closeButton");
        if (searchForm.className.indexOf("search-box-hidden") == -1) {
            searchForm.className = searchForm.className.replace(" search-box", "");
            searchForm.className += " search-box-hidden";

            searchButton.setAttribute("onclick", "show_search_form()");
            searchButton.setAttribute("title", "Open Search Box");
            closeButton.className = closeButton.className.replace(" w3-show", "");
            closeButton.className += " w3-hide";

        } else {
            searchForm.className = searchForm.className.replace(" search-box-hidden", "");
            searchForm.className += " search-box";

            searchButton.setAttribute("onclick", "run_search_form()");
            searchButton.setAttribute("title", "Run Search");
            closeButton.className = closeButton.className.replace(" w3-hide", "");
            closeButton.className += " w3-show";
        }
    }
}

function clean_search_desktop() {
    let searchForm = document.getElementById("searchInput");
    let searchButton = document.getElementById("searchButton");
    let closeButton = document.getElementById("closeButton");

    if (searchForm.className.indexOf("search-box") > -1) {
        searchForm.className = searchForm.className.replace(" search-box", "");
        searchForm.className += " search-box-hidden";
        searchButton.setAttribute("onclick", "show_search_form()");
        searchButton.setAttribute("title", "Open Search Box");
        closeButton.className = closeButton.className.replace(" w3-show", "");
        closeButton.className += " w3-hide";
    }
}

function clean_search_mobile() {
    let searchMobile = document.getElementById("searchMobile");
    if (searchMobile.className.indexOf("vertical-move") > -1) {
        searchMobile.className = searchMobile.className.replace(" vertical-move", "");
    }
}

function hover_project(hoverElement, event) {
    if (hoverElement.children[0].className.indexOf("project-over") == -1) {
        hoverElement.children[0].className += " project-over";
        hoverElement.children[0].children[0].children[0].className += " hr-w-on";
    }
}
function hover_project_leave(hoverElement) {
    if (hoverElement.children[0].className.indexOf("project-over") > -1) {
        hoverElement.children[0].className = hoverElement.children[0].className.replace(" project-over", "");
        hoverElement.children[0].children[0].children[0].className = hoverElement.children[0].children[0].children[0].className.replace(" hr-w-on", "");
    }
}

// add class move-up and link-opacity onload mobile version 
function set_mobile_projects() {

    let hoverElement = document.querySelectorAll(".frame .cover-p");

    for (i = 0; i < hoverElement.length; i++) {
        if (hoverElement[i].children[0].className.indexOf("move-up") == -1) {
            hoverElement[i].children[0].className += " move-up link-opacity";
            // hoverElement[i].children[1].className += " ";
        }
    }
}

// show or hide side-bar navigation alternately on click
function switch_navbar() {
    let sideBar = document.getElementById("sideBar");
    if (sideBar.className.indexOf("extend-sidebar") == -1) {
        console.log("OPEN Navigation bar");
        sideBar.className += " extend-sidebar";
    } else {
        console.log("CLOSE Navigation bar");
        sideBar.className = sideBar.className.replace(" extend-sidebar", "");
    }
}

// show or hide side-bar navigation explicitly
function navbar_show(status) {
    let sideBar = document.getElementById("sideBar");
    if (status) {
        if (sideBar.className.indexOf("extend-sidebar") == -1) {
            console.log("OPEN Navigation bar");
            sideBar.className += " extend-sidebar";
        }
    } else {
        if (sideBar.className.indexOf("extend-sidebar") > -1) {
            console.log("CLOSE Navigation bar");
            sideBar.className = sideBar.className.replace(" extend-sidebar", "");
        }
    }
}

var num = 1;
function change_gray_scale(img) {
    for (i = 0; i < 4; i++) {
        img.className = img.className.replace(" hightlights" + i, "");
    }

    if (num < 3) {
        img.className += " hightlights" + ++num;
    } else {
        img.className += " hightlights0";
        num = 0;
    }
}

function run_search_form() {
    let searchInput = document.getElementById("searchInput");
    alert("Search for: " + searchInput.value);
}

function checkTouchDevice() {
    return 'ontouchstart' in document.documentElement;
}