function keyPressed(param){
    // console.log('key paici');
    // const seatId=  document.getElementById(param);
    // setSeatById('seatPosition',seatId);

    const seatId=  document.getElementById(param);
    const seat = seatId.innerText;
    console.log('seat no:',seat);
    

    const setId = document.getElementsByClassName('seatPosition');
    setId.innerText =seat;
    console.log('new seat no:',setId.innerText);

}


function busTicket(){
    // console.log('ticket form connected');
    hideScreenById('landingScreen');
    
    showScreenById('ticketFormScreen'); 
}

function buyingSuccess(){
    // console.log('ticket form connected');
    hideScreenById('ticketFormScreen');
    
    showScreenById('successModalScreen');
}

function backToHome(){
    // console.log('ticket form connected');
    hideScreenById('successModalScreen');
    
    showScreenById('landingScreen');
}


