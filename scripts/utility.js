function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function textValue(elementId){
    let value = document.getElementById(elementId).innerText;
    const addList = document.getElementById('seat-number');
    addList.innerText = value;
    const classOf = document.getElementById('seat-quality');
    classOf.innerText = 'Economy';
    const price = document.getElementById('seat-price');
    price.innerText = '550';
}

