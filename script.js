document.addEventListener("DOMContentLoaded", function () {
    // Planetary Correspondences
    const planets = {
        Sun: { color: "Gold", element: "Fire", crystal: "Citrine" },
        Moon: { color: "Silver", element: "Water", crystal: "Moonstone" },
        Mercury: { color: "Purple", element: "Air", crystal: "Agate" },
        Venus: { color: "Green", element: "Earth", crystal: "Rose Quartz" },
        Mars: { color: "Red", element: "Fire", crystal: "Ruby" },
        Jupiter: { color: "Blue", element: "Air", crystal: "Sapphire" },
        Saturn: { color: "Black", element: "Earth", crystal: "Onyx" },
    };

    // Display Ritual Steps
    function showRitual(planet) {
        let ritualSteps = `
            <h2>${planet} Ritual</h2>
            <p><strong>Color:</strong> ${planets[planet].color}</p>
            <p><strong>Element:</strong> ${planets[planet].element}</p>
            <p><strong>Crystal:</strong> ${planets[planet].crystal}</p>
            <p>1. Light a candle of ${planets[planet].color}.</p>
            <p>2. Meditate on the ${planets[planet].element} element.</p>
            <p>3. Hold ${planets[planet].crystal} and set your intention.</p>
            <p>4. Draw your sigil while focusing on the planetary energy.</p>
        `;
        document.getElementById("ritual-display").innerHTML = ritualSteps;
    }

    // Sigil Generator (Basic Example)
    document.getElementById("generate-sigil").addEventListener("click", function () {
        let input = document.getElementById("sigil-input").value.toUpperCase();
        let sigilCanvas = document.getElementById("sigil-canvas");
        let ctx = sigilCanvas.getContext("2d");

        // Clear previous sigil
        ctx.clearRect(0, 0, sigilCanvas.width, sigilCanvas.height);

        // Draw random sigil based on input
        ctx.beginPath();
        ctx.moveTo(50, 50);
        for (let i = 0; i < input.length; i++) {
            let x = Math.random() * 200;
            let y = Math.random() * 200;
            ctx.lineTo(x, y);
        }
        ctx.strokeStyle = "#FFD700"; // Gold color for mystic effect
        ctx.lineWidth = 2;
        ctx.stroke();
    });

    // Event Listener for Planet Selection
    document.getElementById("planet-select").addEventListener("change", function () {
        let selectedPlanet = this.value;
        if (selectedPlanet !== "") {
            showRitual(selectedPlanet);
        }
    });
});
