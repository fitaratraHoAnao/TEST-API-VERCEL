document.getElementById('menu-btn').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.add('active');
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('active');
});

document.getElementById('get-verse').addEventListener('click', function() {
    fetch('https://api.example.com/bible-verse') // Remplacez par l'URL de votre API
        .then(response => response.json())
        .then(data => {
            document.getElementById('verse-display').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération du verset:', error);
            document.getElementById('verse-display').textContent = 'Impossible de récupérer le verset.';
        });
});
