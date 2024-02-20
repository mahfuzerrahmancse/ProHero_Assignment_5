let selectedSeats = [];
let totalFare = 0;

function keyPressed(seatId){
  if (selectedSeats.length >= 4) {
    alert("You can only buy up to four seats.");
    return;
  }

  const seatElement = document.getElementById(seatId);
  const seatIndex = selectedSeats.indexOf(seatId);

  if (seatIndex === -1) {
    selectedSeats.push(seatId);
    seatElement.classList.add('bg-green-400');
    totalFare += 550; // Update fare for each selected seat
  } else {
    selectedSeats.splice(seatIndex, 1);
    seatElement.classList.remove('bg-green-400');
    totalFare -= 550; // Update fare for each deselected seat
  }

  // Update table and total fare display
  updateTable();
  updateTotalFare();
}

function updateTable() {
  const seatTableBody = document.querySelector('#seatTable tbody');
  seatTableBody.innerHTML = ''; // Clear existing rows

  selectedSeats.forEach(seatId => {
    const newRow = document.createElement('tr');
    const seatCell = document.createElement('td');
    seatCell.textContent = seatId;
    
    const classCell = document.createElement('td');
    classCell.textContent = 'Economy';
    
    const fareCell = document.createElement('td');
    fareCell.textContent = '550';
    fareCell.classList.add('text-center', 'pr-4');
    
    newRow.appendChild(seatCell);
    newRow.appendChild(classCell);
    newRow.appendChild(fareCell);
    
    seatTableBody.appendChild(newRow);
  });
}

function updateTotalFare() {
  document.getElementById('totalFare').textContent = totalFare;
  document.getElementById('grandTotal').textContent = totalFare;
  document.getElementById('seatIncrease').textContent = selectedSeats.length;
  document.getElementById('seatDecrease').textContent = 8- selectedSeats.length;
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


