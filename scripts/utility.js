function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// function setColor(){
//     const color = document.getElementById('A1');
//     color.addEventListener('click', function() {
//         if(color.checked){
//             color.classList.add('bg-[#1DD100]');
//         }else{
//             color.classList.remove('bg-[#1DD100]');
//         }
//     })
// }