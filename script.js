// Data el-championship 3ashan ykon real
const teams = [
    { pos: 1, name: "Ferrari", pts: 442 },
    { pos: 2, name: "Red Bull Racing", pts: 420 },
    { pos: 3, name: "McLaren", pts: 410 },
    { pos: 4, name: "Mercedes", pts: 380 }
];

// 1. function n-load beha el-leaderboard
function loadLeaderboard() {
    const tableBody = document.getElementById('leaderboard-body');
    tableBody.innerHTML = teams.map(team => `
        <tr class="${team.name === 'Ferrari' ? 'highlight' : ''}">
            <td>${team.pos}</td>
            <td>${team.name}</td>
            <td>${team.pts}</td>
        </tr>
    `).join('');
}

// 2. Countdown timer l el-sebata el-gaya
function startCountdown() {
    const countdownElement = document.getElementById('race-countdown');
    // hn-set tareekh l-seba2 kman 5 ayam masalan
    let raceDate = new Date().getTime() + (5 * 24 * 60 * 60 * 1000);

    setInterval(() => {
        let now = new Date().getTime();
        let diff = raceDate - now;

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((diff % (1000 * 60)) / 1000);

        countdownElement.innerText = `NEXT RACE: ${days}d ${hours}h ${mins}m ${secs}s`;
    }, 1000);
}

// 3. Animation basita l el-quali progress bar
function animateQuali() {
    const bar = document.querySelector('.progress-fill');
    let width = 0;
    setInterval(() => {
        if (width >= 100) width = 0;
        width += 0.5;
        bar.style.width = width + '%';
        bar.style.background = `rgba(239, 26, 45, ${width/100})`;
    }, 50);
}

// nsha8al kollo lma el-window t-load
window.onload = () => {
    loadLeaderboard();
    startCountdown();
    animateQuali();
    console.log("Scuderia Ferrari Systems: Active"); // l el-engineers
};
