function submitKit() {
    const kitInput = document.getElementById('kitInput').value.toLowerCase();
    const kitMessage = document.getElementById('kitMessage');
    if (kitInput.includes('eau')) {
        kitMessage.textContent = 'Vous avez correctement préparé votre kit !';
        document.getElementById('phase1').style.display = 'none';
        document.getElementById('phase2').style.display = 'block';
    } else {
        kitMessage.textContent = 'N\'oubliez pas l\'eau dans votre kit d\'urgence !';
    }
}

function evacuer(response) {
    const evacMessage = document.getElementById('evacMessage');
    if (response === 'oui') {
        evacMessage.textContent = 'Vous avez évacué en sécurité';
        document.getElementById('phase2').style.display = 'none';
        document.getElementById('phase3').style.display = 'block';
    } else {
        evacMessage.textContent = 'Vous êtes en danger, évacuez immédiatement !';
    }
}

function nettoyer(response) {
    const cleanMessage = document.getElementById('cleanMessage');
    if (response === 'avec un masque') {
        cleanMessage.textContent = 'Bonne réponse, vous êtes en sécurité';
    } else {
        cleanMessage.textContent = 'Mauvaise réponse, portez un masque pour votre sécurité';
    }
}
