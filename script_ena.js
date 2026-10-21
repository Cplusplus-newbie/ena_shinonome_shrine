let counter = parseInt(localStorage.getItem('cheesecakeCount') || 0);
document.getElementById('counter').textContent=counter;

function sendCheesecake(){
    counter += 1;
    localStorage.setItem('cheesecakeCount',counter);
    document.getElementById("display").textContent="Cheesecake offered: " + counter;
}