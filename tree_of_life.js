document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("treeOfLifeButton").addEventListener("click", function () {
        let inputWord = document.getElementById("wordInput").value.trim().toLowerCase();
        let path = calculateTreeOfLifePath(inputWord);
        document.getElementById("treeOfLifeResult").innerText = "Your Path: " + path;
    });
});

// Function to map words to the correct Tree of Life paths
function calculateTreeOfLifePath(word) {
    let paths = {
        // Keter (Crown, Divine Will, Unity)
        "crown": "Keter (Divine Crown, Unity)",
        "divine will": "Keter (Divine Will, Supreme Consciousness)",
        "source": "Keter (Origin of Creation, Pure Thought)",
        "oneness": "Keter (Unity, Infinite Light)",
        "supreme mind": "Keter (Supreme Intelligence, Limitless Light)",
        
        // Chokmah (Wisdom, Inspiration, Divine Spark)
        "wisdom": "Chokmah (Wisdom, Intuition, Divine Spark)",
        "insight": "Chokmah (Vision, Higher Knowing)",
        "creation": "Chokmah (Beginning, First Manifestation)",
        "father": "Chokmah (Father Principle, Active Force)",
        "lightning": "Chokmah (Flashing Light, Inspiration)",
        
        // Binah (Understanding, Structure, Formation)
        "understanding": "Binah (Understanding, Deep Contemplation)",
        "comprehension": "Binah (Intellect, Analytical Thought)",
        "mother": "Binah (Divine Mother, Nurturing Structure)",
        "form": "Binah (Structure, Shaping Energy)",
        "darkness": "Binah (Mystery, Hidden Knowledge)",
        
        // Chesed (Mercy, Expansion, Love)
        "mercy": "Chesed (Compassion, Divine Love)",
        "kindness": "Chesed (Generosity, Benevolence)",
        "expansion": "Chesed (Unlimited Growth, Abundance)",
        "grace": "Chesed (Forgiveness, Loving-Kindness)",
        "fatherly love": "Chesed (Paternal Care, Support)",
        
        // Gevurah (Strength, Judgment, Discipline)
        "strength": "Gevurah (Might, Power, Discipline)",
        "justice": "Gevurah (Divine Judgment, Righteousness)",
        "severity": "Gevurah (Correction, Restriction)",
        "warrior": "Gevurah (Courage, Protection)",
        "iron": "Gevurah (Structure, Endurance)",
        
        // Tiferet (Beauty, Balance, Truth)
        "beauty": "Tiferet (Harmony, Balance, Divine Truth)",
        "compassion": "Tiferet (Healing, Kindness in Balance)",
        "heart": "Tiferet (Center of Emotion and Connection)",
        "truth": "Tiferet (Spiritual Alignment, Universal Order)",
        "gold": "Tiferet (Glory, Balance in Creation)",
        
        // Netzach (Victory, Endurance, Passion)
        "victory": "Netzach (Perseverance, Triumph Over Struggle)",
        "eternity": "Netzach (Enduring Will, Timelessness)",
        "passion": "Netzach (Creative Drive, Love for Life)",
        "art": "Netzach (Aesthetic Expression, Music & Creativity)",
        "desire": "Netzach (Ambition, Achieving One’s Destiny)",
        
        // Hod (Glory, Logic, Communication)
        "glory": "Hod (Majesty, Radiance, Splendor)",
        "intellect": "Hod (Mental Clarity, Rational Thought)",
        "humility": "Hod (Knowing One’s Place in the Universe)",
        "communication": "Hod (Language, Writing, Divine Speech)",
        "alchemy": "Hod (Transformation, Occult Knowledge)",
        
        // Yesod (Foundation, Manifestation, Dreams)
        "foundation": "Yesod (Connection to Higher Realms, Dreams)",
        "subconscious": "Yesod (Deep Mind, Inner Truth)",
        "emotion": "Yesod (Feeling, Intuition, Soul Connection)",
        "bridge": "Yesod (Link Between Spirit and Matter)",
        "moon": "Yesod (Reflected Light, Inner Awareness)",
        
        // Malkuth (Kingdom, Earthly Manifestation, Reality)
        "kingdom": "Malkuth (Physical World, Manifested Reality)",
        "earth": "Malkuth (Material Plane, Nature’s Beauty)",
        "manifestation": "Malkuth (Bringing Ideas into Form)",
        "action": "Malkuth (Practicality, Daily Life)",
        "body": "Malkuth (Physical Form, Sensory Experience)"
    };

    return paths[word] || "Path not found. Try another word.";
}
