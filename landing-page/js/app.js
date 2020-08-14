/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


const containerlist = document.getElementById("navbar__list");
//here is the container unorderd list of Navigation bar 
const allSections= document.querySelectorAll("section");
// here is all inserted sections in HTML file 
const tittels= document.querySelectorAll("h2");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//here is a function that makes sections dynamicly
 function addingElements (){
    for (let i=1;i<=allSections.length;i++) {
    
        let newSection=document.createElement('li'); //creating list item
        let link=document.createElement('a'); 
        newSection.id=('#section'+i); //setting id for every section
        newSection.setAttribute('class', "navbar__menu"); //setting a css class to make changes on sections easily
        link.setAttribute('href', newSection.id); //here setting href att to redirect on the sellected sectoion "make it navigational"
        link.textContent=(tittels[i-1].textContent);
        newSection.appendChild(link);
        containerlist.appendChild(newSection);
    }  
};
addingElements ();



//here making helper functions
var active = function (ele){
    ele.classList.add('your-active-class');
};
var notActive = function (ele){
    ele.classList.remove('your-active-class');
};

//here is the main function thats makes sections in active state
    const activeState =() => {
        allSections.forEach (element =>{
            notActive(element);
            //here to make sure that section is in viewport
            if (element.getBoundingClientRect().top>0){
                active(element)};

        });
    };

    window.addEventListener('scroll',activeState);
//here the event listener for mouse scroll 
