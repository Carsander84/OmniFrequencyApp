// Hebrew & English Gematria Mapping
const gematriaMap = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
    'J': 10, 'K': 20, 'L': 30, 'M': 40, 'N': 50, 'O': 60, 'P': 70, 'Q': 80,
    'R': 90, 'S': 100, 'T': 200, 'U': 300, 'V': 400, 'W': 500, 'X': 600, 'Y': 700, 'Z': 800
};

function generateSigil() {
    let input = prompt("Enter a word or phrase for the sigil:");
    if (!input) return;

    input = input.toUpperCase().replace(/[^A-Z]/g, ''); // Remove non-letters

    // Convert letters to numbers using Gematria
    let values = input.split("").map(letter => gematriaMap[letter] || 0);

    let canvas = document.getElementById("sigilCanvas");
    let ctx = canvas.getContext("2d");

    if (!ctx) {
        alert("Canvas not found! Please check your HTML.");
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous sigil
    ctx.strokeStyle = "#ffffff"; // Sigil color
    ctx.lineWidth = 3;
    ctx.beginPath();

    let baseX = canvas.width / 2, baseY = canvas.height / 2;
    let angleStep = (Math.PI * 2) / values.length;

    for (let i = 0; i < values.length; i++) {
        let angle = i * angleStep;
        let radius = 50 + (values[i] % 50); // Spread points based on Gematria value
        let x = baseX + Math.cos(angle) * radius;
        let y = baseY + Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }

    ctx.closePath();
    ctx.stroke();
}
