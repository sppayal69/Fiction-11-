const bplPlayers = [
  {name: "Tamim Iqbal", team: "Barishal", role: "Batter", credit: 9},
  {name: "Shakib Al Hasan", team: "Barishal", role: "All-rounder", credit: 10},
  {name: "Litton Das", team: "Cumilla", role: "WK-Batter", credit: 9},
  {name: "Mustafizur Rahman", team: "Cumilla", role: "Bowler", credit: 8.5},
  {name: "Taskin Ahmed", team: "Dhaka", role: "Bowler", credit: 9},
  {name: "Mahmudullah", team: "Dhaka", role: "All-rounder", credit: 8},
  {name: "Soumya Sarkar", team: "Rangpur", role: "Batter", credit: 7.5}
];

let myBPLTeam = [];
let totalCredit = 100;

function showBPLPlayers() {
  let html = `<h2>🏆 BPL 2026 Build Team - 100 Credits</h2>`;
  html += `<p>Credits Left: <span id="credit">${totalCredit}</span></p>`;

  bplPlayers.forEach((p, i) => {
    html += `<div class="game-card">
      <h3>${p.name}</h3>
      <p>Team: ${p.team} | Role: ${p.role}</p>
      <p>Credit: ${p.credit}</p>
      <button onclick="addBPLPlayer(${i})">Add to Team</button>
    </div>`;
  });
  document.getElementById("games").innerHTML = html;
}

function addBPLPlayer(i) {
  let player = bplPlayers[i];
  if(myBPLTeam.length < 7 && totalCredit >= player.credit) {
    myBPLTeam.push(player);
    totalCredit = totalCredit - player.credit;
    document.getElementById("credit").innerText = totalCredit.toFixed(1);
    alert(player.name + " added! Total: " + myBPLTeam.length + " players");
  } else if(myBPLTeam.length >= 7) {
    alert("You already picked 7 players!");
  } else {
    alert("Not enough credits!");
  }
}

showBPLPlayers();
