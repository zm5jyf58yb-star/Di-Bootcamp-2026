
const planets = [
  { name: "Mercury", color: "rgb(158, 158, 158)", moons: 0 },
  { name: "Venus",   color: "rgb(227, 187, 118)", moons: 0 },
  { name: "Earth",   color: "rgb(43, 130, 201)",  moons: 1 },
  { name: "Mars",    color: "rgb(224, 58, 58)",   moons: 2 },
  { name: "Jupiter", color: "rgb(212, 163, 115)", moons: 4 }, 
  { name: "Saturn",  color: "rgb(244, 226, 187)", moons: 4 },
  { name: "Uranus",  color: "rgb(160, 230, 255)", moons: 3 },
  { name: "Neptune", color: "rgb(39, 70, 135)",  moons: 2 }
];

const solarSystemContainer = document.querySelector('.listPlanets'); 

planets.forEach(planet => {
 
  const planetDiv = document.createElement('div');
  planetDiv.className = "planet"; 
  
  planetDiv.style.backgroundColor = planet.color;
  planetDiv.textContent = planet.name;

  for (let i = 0; i < planet.moons; i++) {
   
    const moonDiv = document.createElement('div');
    moonDiv.className = "moon";
    
    moonDiv.style.top = "-80px";
    moonDiv.style.left = (i * 35) + "px"; 
    
    planetDiv.appendChild(moonDiv);
  }
  
  solarSystemContainer.appendChild(planetDiv);
});
