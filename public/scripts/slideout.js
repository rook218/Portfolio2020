const hamburgerIcon = document.getElementById("hamburger");
const slideoutContent = document.getElementById("slideout-content");

hamburgerIcon.addEventListener("click", function() {
    toggleSlideout();
});

function toggleSlideout() {
    slideoutContent.classList.toggle("slideout-hidden");
    slideoutContent.classList.toggle("slideout-shown");
    moveSlices(hamburgerIcon);
    rotateSlices(hamburgerIcon);
}

function moveSlices(collection) {
    for (var i = 0; i < collection.children.length; i++) {
        let element = collection.children[i];
        let moveNum = i + 1;
        element.classList.toggle('h-move' + moveNum);
    }
}

function rotateSlices(collection) {
    for (var i = 0; i < collection.children.length; i++) {
        let element = collection.children[i].firstElementChild;
        if (i == 1) {
            element.classList.toggle('hamburger-rotate1');
        } else {
            element.classList.toggle('hamburger-rotate2');
        }
    }
}