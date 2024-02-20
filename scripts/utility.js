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

function setBackgroundColorById(elementId){
    
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-400');
}

