
// Adding an event listener to the #add-button id
const addBtnElem = document.querySelector("#add-button");

addBtnElem.addEventListener("click", function() {
    const btn = document.createElement("button");
    btn.innerText = "Added Button!";
    btn.style.backgroundColor = "blue";
    
    const containerElem = document.getElementById("container");
    containerElem.appendChild(btn);
});


// Exercise #1 In Class
const btnElem = document.querySelector("#btn");

btnElem.addEventListener("click", () => {
    const wrapperElem = document.querySelector("#wrapper");

    // Create an element
    const messageElem = document.createElement("div");
    wrapperElem.appendChild(messageElem);
    messageElem.innerHTML = "Added a message";
});

const linkElem = document.querySelector("#link");

linkElem.addEventListener("mouseover", () => {
    linkElem.style.color = "green";
});

linkElem.addEventListener("mouseout", () => {
    linkElem.style.color = "initial";
});


window.addEventListener("resize", () => {

    const currInnerHeight = window.innerHeight;
    const currInnerWidth = window.innerWidth;
    const paragraphElem = document.querySelector("#content");

    if (currInnerHeight < 768 || currInnerWidth < 768) {

        // font-size => fontSize
        // margin-left => marginLeft
        paragraphElem.style.fontSize = "8px";
    }

    console.log(currInnerHeight);
    if (currInnerHeight > 768 || currInnerWidth > 768) {
        paragraphElem.style.fontSize = "30px";
    }
})