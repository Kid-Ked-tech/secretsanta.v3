const pairings = {
    "Derrick": "Silent Star",
    "Sylvia": "Cinnamon Frost",
    "Dianah": "Northern Glow",
    "Daniel": "Snow Echo",
    "Racheal": "Silver Fir",
    "Ritah": "Star Drift",
    "Rebecca": "Glimmer Birch",
    "Alex": "Crystal Owl",
    "Vally": "Blitzen Flare",
    "Mom": "Midnight Ember",
    "Dad": "Twinkle Fern",
    "Valerie": "Winter Whisper",
    "Malaika": "Frosty Comet",
    "Jathniel": "Sugar Pine",
    "Jemima": "Icy Bell"
};

function revealGiftee() {
    const name = document.getElementById("nameSelect").value;
    const result = document.getElementById("result");
    const chime = document.getElementById("chime");

    if (pairings[name]) {
        result.innerHTML = `🎁 You are Secret Santa to: <strong>${pairings[name]}</strong>`;
        chime.play();
    } else {
        result.innerHTML = "";
    }
}
