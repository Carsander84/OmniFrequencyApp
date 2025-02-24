// Gematria Values for English Letters
const gematria = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10,
    K: 20, L: 30, M: 40, N: 50, O: 60, P: 70, Q: 80, R: 90, S: 100, T: 200,
    U: 300, V: 400, W: 500, X: 600, Y: 700, Z: 800
};

// Convert a word to Gematria Sum
function wordToGematria(word) {
    let sum = 0;
    word.toUpperCase().split('').forEach(letter => {
        if (gematria[letter]) sum += gematria[letter];
    });
    return sum;
}

// Generate Sigil Coordinates
function generateSigil(word) {
    const sum = wordToGematria(word);
    const points = [];

    // Break the sum into digits and use them as coordinates
    const digits = sum.toString().split('').map(Number);
    let startX = 100, startY = 100; // Center Start Position

    digits.forEach((digit, index) => {
        const x = startX + (digit * 15 * Math.cos(index * Math.PI / 4));
        const y = startY + (digit * 15 * Math.sin(index * Math.PI / 4));
        points.push({ x, y });
    });

    return points;
}

// Draw Sigil on Canvas
function drawSigil(word) {
    const canvas = document.getElementById('sigilCanvas');
