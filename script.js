// logic el-scroll 3ashan el-header y8ayar lono
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    // law el-user nezel aktar mn 100px, el-header hyb2a swid
    if (window.scrollY > 100) {
        header.style.background = 'rgba(5, 5, 5, 0.95)';
        header.style.padding = '15px 0';
    } else {
        header.style.background = 'transparent';
        header.style.padding = '30px 0';
    }
});

// Simple animation l-ma el-saf7a t-load (Reveal effect)
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.fade-up');
    
    // bn-apply class "active" 3ashan el-animation tesht8al
    revealElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 200 * index);
    });

    console.log("NRX Systems: Online. Ready for Race."); // PR style message
});

// hover effects logic (optional enhancements)
const carImage = document.querySelector('.car-image-container img');
if(carImage) {
    carImage.addEventListener('mouseover', () => {
        console.log("Aerodynamic data scanning...");
    });
}
