// Data el-team elly mnasba el-PR
const standingsData = [
    { rank: 1, team: "ITALY ROSSO", wins: 5, pts: 312 },
    { rank: 2, team: "Red Bull Racing", wins: 3, pts: 298 },
    { rank: 3, team: "Ferrari", wins: 2, pts: 275 },
    { rank: 4, team: "McLaren", wins: 1, pts: 240 }
];

// 1. amla el-table
function initStandings() {
    const tbody = document.getElementById('leaderboard');
    tbody.innerHTML = standingsData.map(item => `
        <tr class="${item.team === 'ITALY ROSSO' ? 'highlight' : ''}">
            <td>${item.rank}</td>
            <td>${item.team}</td>
            <td>${item.wins}</td>
            <td>${item.pts}</td>
        </tr>
    `).join('');
}

// 2. Countdown timer l-awel sebata gaya
function initTimer() {
    const timerElement = document.getElementById('timer');
    // sebata kman يومين
    let targetDate = new Date().getTime() + (2 * 24 * 60 * 60 * 1000);

    setInterval(() => {
        let now = new Date().getTime();
        let diff = targetDate - now;

        let h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((diff % (1000 * 60)) / 1000);

        timerElement.innerText = `${h}H ${m}M ${s}S UNTIL LIGHTS OUT`;
    }, 1000);
}

// ay animation tany law 3ayez t-check el-console
window.onload = () => {
    initStandings();
    initTimer();
    console.log("ITALY ROSSO PR SYSTEM INITIALIZED...");
};