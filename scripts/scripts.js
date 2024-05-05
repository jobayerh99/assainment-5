function ticket() {
    hideElementById('home-section');
    hideElementById('offer-section');
    showElementById('ticket-section');
}

function scrollDown(x, y) {
    window.scrollBy(x, y);
}

function seatClicked(elementId) {
    textValue(elementId);
}