var osszesen = document.getElementById('osszesen')

function szamolas() {
    var input_Kvaff = document.getElementById('input_1').value;
    var input_Cikesz = document.getElementById('input_2').value;
    osszesen.innerHTML = 'Összesen: ' + (input_Kvaff * 10 + input_Cikesz * 150) + ' pont';

    if(input_Cikesz < 0){
        alert('Negatív szám nem adható meg!');
    } else if(input_Cikesz >= 2){
        alert('Az aranycikeszt csak egyszer lehet elkapni!')
    } else {
        osszes.innerHTML = 'Összesen: ' + (input_Kvaff * 10 + input_Cikesz * 150) + ' pont';
    }
}