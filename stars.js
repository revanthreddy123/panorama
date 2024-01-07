document.addEventListener('DOMContentLoaded', function () {
    const celestialBodies = document.querySelector('.celestial-bodies');

    // Create normal stars in different orbits
    for (let i = 0; i < 200; i++) {
        createCelestialBody('star', randomOrbit());
    }

    // Create bright stars in different orbits
    for (let i = 0; i < 20; i++) {
        createCelestialBody('bright-star', randomOrbit());
    }

    function createCelestialBody(type, orbit) {
        const celestialBody = document.createElement('div');
        celestialBody.className = type;
        celestialBody.style.top = Math.random() * 100 + '%';
        celestialBody.style.left = Math.random() * 100 + '%';
        celestialBody.style.animationDuration = `${Math.random() * 20 + 15}s`; // Adjusted rotation duration

        const orbitElement = document.createElement('div');
        orbitElement.className = 'orbit';
        orbitElement.style.animationDuration = `${Math.random() * 40 + 15}s`; // Adjusted orbit duration

        orbitElement.appendChild(celestialBody);
        celestialBodies.appendChild(orbitElement);
    }

    function randomOrbit() {
        const orbitIndex = Math.floor(Math.random() * 5) + 1; // Randomize orbit from 1 to 5
        return `orbit${orbitIndex}`;
    }
});