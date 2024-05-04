function ticket() {
    hideElementById('home-section');
    hideElementById('offer-section');
    showElementById('ticket-section');
}

function scrollDown(x, y) {
    window.scrollBy(x, y);
}

function seatClicked() {
    document.getElementById("A1").onclick = null;
    let el = document.getElementById('A1');
    const value = (el.ariaLabel);
    console.log(value);
    setColor();
    removeColor();
}
