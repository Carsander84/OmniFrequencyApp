const treeOfLifePaths = { 1: { name: "Keter", meaning: "Divine Crown" }, 2: { name: "Chokmah", meaning: "Wisdom" }, 3: { name: "Binah", meaning: "Understanding" }, 4: { name: "Chesed", meaning: "Mercy" }, 5: { name: "Gevurah", meaning: "Strength" }, 6: { name: "Tiferet", meaning: "Beauty" }, 7: { name: "Netzach", meaning: "Victory" }, 8: { name: "Hod", meaning: "Splendor" }, 9: { name: "Yesod", meaning: "Foundation" }, 10: { name: "Malkuth", meaning: "Kingdom" } };

function getGematria(word) { const gematriaValues = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 20, L: 30, M: 40, N: 50, O: 60, P: 70, Q: 80, R: 90, S: 100, T: 200, U: 300, V: 400, W: 500, X: 600, Y: 700, Z: 800 };

return word.toUpperCase().split('').reduce((sum, letter) => sum + (gematriaValues[letter] || 0), 0);

}

function findTreeOfLifePath(word) { const totalValue = getGematria(word); const path = (totalValue % 10) || 10; // Ensure it maps between 1 and 10 return treeOfLifePaths[path] || { name: "Unknown", meaning: "No path found" }; }

function displayPath() { const wordInput = document.getElementById("wordInput").value; const result = findTreeOfLifePath(wordInput); document.getElementById("result").innerHTML = <strong>${result.name}</strong>: ${result.meaning}; }

