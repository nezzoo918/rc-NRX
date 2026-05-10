// bn3mel simulation l-arkam el-sebata 3ashan n7ess enaha live
function updateTelemetry() {
    const speedElement = document.getElementById('speed-val');
    const tempElement = document.getElementById('temp-val');

    // ay arkam random kda 3ashan el-shakl yeb2a "real"
    setInterval(() => {
        // speed bey8ayar bin 280 w 320
        let randomSpeed = Math.floor(Math.random() * (320 - 280 + 1)) + 280;
        speedElement.innerText = randomSpeed;

        // temp bey8ayar 7agat basita
        let randomTemp = (95 + Math.random() * 5).toFixed(1);
        tempElement.innerText = randomTemp;
    }, 1000); // kol sanya el-arkam tt8ayar
}

// nsha8al el-function awel ma el-saf7a t-load
window.onload = () => {
    console.log("System Online... Race mode active."); // msg fe el-console 
    updateTelemetry();
};

// logic scroll basita 3ashan el-nav yeb2a shaklo a7la
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#050a14';
    } else {
        header.style.background = 'transparent';
    }
});