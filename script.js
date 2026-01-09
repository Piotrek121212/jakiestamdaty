document.addEventListener('DOMContentLoaded', () => {
    console.log('Skrypt załadowany pomyślnie! 🚀');
    
    // Przykładowa interakcja
    const header = document.querySelector('header');
    if(header) {
        header.addEventListener('click', () => {
            alert('Witaj na stronie!');
        });
    }
});
