function flip(flipDiv) {
    let inner = flipDiv.firstElementChild;
    if (inner.style.transform !== "rotateY(180deg)") {
        inner.style.transform = "rotateY(180deg)";
    } else {
        inner.style.transform = "rotateY(0deg)";
    }
}