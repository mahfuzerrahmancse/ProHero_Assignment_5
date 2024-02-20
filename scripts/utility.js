function hideScreenById(Param){
    console.log('home screen hide hoilo');
    const getElement = document.getElementById(Param);
    getElement.classList.add('hidden');
    
}

function showScreenById(showParam){
    console.log('ticket form & successModal show hoilo');
    const getElement = document.getElementById(showParam);
    getElement.classList.remove('hidden');
    
}

// function setSeatById(setPosition,putSeatId){
//     const element = document.getElementById(setPosition);
//     element.innerText = putSeatId;
    
// }

