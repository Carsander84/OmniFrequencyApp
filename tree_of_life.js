// Tree of Life Pathway & Gematria Sigil Generator
const hebrewGematria = {
    "א": 1, "ב": 2, "ג": 3, "ד": 4, "ה": 5, "ו": 6, "ז": 7, "ח": 8, "ט": 9,
    "י": 10, "כ": 20, "ל": 30, "מ": 40, "נ": 50, "ס": 60, "ע": 70, "פ": 80, "צ": 90,
    "ק": 100, "ר": 200, "ש": 300, "ת": 400
};

// Map paths to planets & sephiroth in the Tree of Life
const treeOfLifePaths = {
    1: "Kether - Divine Crown (Pluto)",
    2: "Chokmah - Wisdom (Neptune)",
    3: "Binah - Understanding (Saturn)",
    4: "Chesed - Mercy (Jupiter)",
    5: "Geburah - Strength (Mars)",
    6: "Tiphereth - Beauty (Sun)",
    7: "Netzach - Victory (Venus)",
    8: "Hod - Glory (Mercury)",
    9: "Yesod - Foundation (Moon)",
    10: "Malkuth - Kingdom (Earth)"
};

// Convert word to Gematria value
function calculateGematria(word) {
    let total = 0;
    for (let char of word) {
        if (hebrewGematria[char]) {
            total += hebrewGematria[char];
        }
    }
    return total;
}

// Find closest Tree of Life Path based on Gematria sum
function getTreeOfLifePath(word) {
    let gematriaValue = calculateGematria(word);
    let closestPath = Object.keys(treeOfLifePaths).reduce((prev, curr) =>
        Math.abs(curr - gematriaValue) < Math.abs(prev - gematriaValue) ? curr : prev
    );
    return treeOfLifePaths[closestPath] || "Unknown Path";
}

// Example usage
function generateTreeOfLifePath() {
    let inputWord = prompt("Enter a word in Hebrew:");
    let path = getTreeOfLifePath(inputWord);
    alert(`The Tree of Life pathway for '${inputWord}' is: ${path}`);
}

// Add button for generating Tree of Life Pathway
document.addEventListener("DOMContentLoaded", function () {
    let btn = document.createElement("button");
    btn.innerText = "Find Tree of Life Path";
    btn.onclick = generateTreeOfLifePath;
    document.body.appendChild(btn);
});
