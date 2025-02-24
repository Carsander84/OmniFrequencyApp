// Omni-Frequency App - JavaScript Functions

document.addEventListener("DOMContentLoaded", function() {
    const planetSelect = document.getElementById("planet-select");
    const ritualOutput = document.getElementById("ritual-output");
    const sigilInput = document.getElementById("sigil-input");
    const sigilOutput = document.getElementById("sigil-output");
    const generateSigilBtn = document.getElementById("generate-sigil-btn");

    // Function to get a ritual based on the selected planet
    function getRitual(planet) {
        const rituals = {
            "Sun": "A ritual for empowerment and success. Light a gold candle and meditate on your highest self.",
            "Moon": "A ritual for intuition and dreams. Use a silver mirror under the moonlight to reflect your inner wisdom.",
            "Mercury": "A ritual for communication and knowledge. Write your intentions in the air using incense smoke.",
            "Venus": "A ritual for love and attraction. Anoint yourself with rose oil and focus on self-love and harmony.",
            "Mars": "A ritual for strength and courage. Draw a sigil with red ink and visualize your victory.",
            "Jupiter": "A ritual for abundance and luck. Burn bay leaves while speaking your affirmations aloud.",
            "Saturn": "A ritual for discipline and transformation. Use black candles and meditate on shedding old habits.",
            "Uranus": "A ritual for innovation and breakthroughs. Meditate under a stormy sky to embrace radical change.",
            "Neptune": "A ritual for deep intuition. Use water gazing with a crystal bowl to enhance spiritual vision.",
            "Pluto": "A ritual for transformation. Write an old habit on paper and burn it to symbolize rebirth."
        };
        return rituals[planet] || "Choose a celestial influence for guidance.";
    }

    // Event listener for planet selection
    planetSelect.addEventListener("change", function() {
        ritualOutput.textContent = getRitual(planetSelect.value);
    });

    // Function to generate a simple sigil from a word
    function generateSigil(word) {
        let sigil = word.toUpperCase().replace(/[^A-Z]/g, '').split('').join('-');
        return `🜄 Sigil for ${word}: ${sigil} 🜄`;
    }

    // Event listener for sigil generation
    generateSigilBtn.addEventListener("click", function() {
        sigilOutput.textContent = generateSigil(sigilInput.value);
    });// Ritual Customization Logic
document.addEventListener("DOMContentLoaded", function () {
    const ritualForm = document.getElementById("ritual-form");
    if (ritualForm) {
        ritualForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const selectedPlanet = document.getElementById("planet").value;
            const selectedElement = document.getElementById("element").value;
            const selectedCrystal = document.getElementById("crystal").value;

            document.getElementById("ritual-output").innerHTML = `
                <h3>Customized Ritual:</h3>
                <p><strong>Planet:</strong> ${selectedPlanet}</p>
                <p><strong>Element:</strong> ${selectedElement}</p>
                <p><strong>Crystal:</strong> ${selectedCrystal}</p>
                <p>Use these correspondences to enhance your ritual focus.</p>
            `;
        });
    }

    // AI Sigil Generation Placeholder
    const generateSigilBtn = document.getElementById("generate-sigil");
    if (generateSigilBtn) {
        generateSigilBtn.addEventListener("click", function () {
            alert("AI Sigil Generation Coming Soon!");
        });
    }

    // Banishing Ritual
    const banishingBtn = document.getElementById("banish-btn");
    if (banishingBtn) {
        banishingBtn.addEventListener("click", function () {
            alert("Performing banishing ritual... Feel the energy cleanse your space.");
        });
    }
});
});
