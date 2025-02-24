function findPlanetCorrespondence() {
    let word = prompt("Enter a keyword (e.g., love, strength, wealth):");
    if (!word) return;

    const correspondences = {
        "love": "Venus - Beauty, attraction, relationships",
        "strength": "Mars - Courage, willpower, battle",
        "wisdom": "Jupiter - Knowledge, philosophy, expansion",
        "intuition": "Moon - Emotion, psychic ability, dreams",
        "communication": "Mercury - Speech, intellect, messages",
        "wealth": "Saturn - Discipline, karma, money mastery",
        "transformation": "Pluto - Rebirth, deep power, mystery",
        "expansion": "Neptune - Vision, enlightenment, creativity",
        "energy": "Sun - Life force, vitality, leadership",
        "stability": "Earth - Grounding, physical reality, balance"
    };

    let planet = correspondences[word.toLowerCase()] || "Unknown";
    alert(`The planetary correspondence for '${word}' is: ${planet}`);
      }
