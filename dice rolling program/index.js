//dice rolling program

 function rolldice() {

    const numofdice = document.getElementById("numofdice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");
    const value = [];
    const images = [];


    for (let i = 0; i < numofdice; i++) {
        const value = Math.floor(Math.random() * 6 ) +1;
        value.push(value);
        images.push('<img src="dice_images/${value}.jpg" alt=>' );

        
    }

    diceresult.textContent = 'dice: ${values.join(', ')}';
    diceimages.innerHTML = images.join("");

    
 }