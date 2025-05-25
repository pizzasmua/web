
let counter = localStorage.getItem('visitCounter') || 0;
counter++;
localStorage.setItem('visitCounter', counter);
document.getElementById('visit-counter').innerText = `Visitas: ${counter}`;
