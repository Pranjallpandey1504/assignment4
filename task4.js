// Function to calculate Cube
function calculateCube() {
  const side = parseFloat(document.getElementById("cube-input").value) || 0;
  document.getElementById("cube-sa").textContent = (6 * side ** 2).toFixed(2);
  document.getElementById("cube-vol").textContent = (side ** 3).toFixed(2);
}

// Function to calculate Sphere
function calculateSphere() {
  const radius = parseFloat(document.getElementById("sphere-input").value) || 0;
  document.getElementById("sphere-sa").textContent = (4 * Math.PI * radius ** 2).toFixed(2);
  document.getElementById("sphere-vol").textContent = ((4 / 3) * Math.PI * radius ** 3).toFixed(2);
}

// Function to calculate Cylinder
function calculateCylinder() {
  const radius = parseFloat(document.getElementById("cylinder-radius").value) || 0;
  const height = parseFloat(document.getElementById("cylinder-height").value) || 0;
  document.getElementById("cylinder-sa").textContent = (2 * Math.PI * radius * (radius + height)).toFixed(2);
  document.getElementById("cylinder-vol").textContent = (Math.PI * radius ** 2 * height).toFixed(2);
}

// Function to calculate Cone
function calculateCone() {
  const radius = parseFloat(document.getElementById("cone-radius").value) || 0;
  const height = parseFloat(document.getElementById("cone-height").value) || 0;
  const slantHeight = Math.sqrt(radius ** 2 + height ** 2);
  document.getElementById("cone-sa").textContent = (Math.PI * radius * (radius + slantHeight)).toFixed(2);
  document.getElementById("cone-vol").textContent = ((1 / 3) * Math.PI * radius ** 2 * height).toFixed(2);
}

// Function to calculate Pyramid
function calculatePyramid() {
  const base = parseFloat(document.getElementById("pyramid-base").value) || 0;
  const height = parseFloat(document.getElementById("pyramid-height").value) || 0;
  const surfaceArea = base * base + 2 * base * Math.sqrt((base / 2) ** 2 + height ** 2);
  const volume = (1 / 3) * base ** 2 * height;
  document.getElementById("pyramid-sa").textContent = surfaceArea.toFixed(2);
  document.getElementById("pyramid-vol").textContent = volume.toFixed(2);
}

// Function to calculate Hemisphere
function calculateHemisphere() {
  const radius = parseFloat(document.getElementById("hemisphere-radius").value) || 0;
  document.getElementById("hemisphere-sa").textContent = (3 * Math.PI * radius ** 2).toFixed(2);
  document.getElementById("hemisphere-vol").textContent = ((2 / 3) * Math.PI * radius ** 3).toFixed(2);
}

// Function to calculate Torus
function calculateTorus() {
  const radius = parseFloat(document.getElementById("torus-radius").value) || 0;
  const tubeRadius = parseFloat(document.getElementById("torus-tube-radius").value) || 0;
  document.getElementById("torus-sa").textContent = (4 * Math.PI ** 2 * radius * tubeRadius).toFixed(2);
  document.getElementById("torus-vol").textContent = (2 * Math.PI ** 2 * radius * tubeRadius ** 2).toFixed(2);
}

// Function to calculate Ellipsoid
function calculateEllipsoid() {
  const r1 = parseFloat(document.getElementById("ellipsoid-radius1").value) || 0;
  const r2 = parseFloat(document.getElementById("ellipsoid-radius2").value) || 0;
  const r3 = parseFloat(document.getElementById("ellipsoid-radius3").value) || 0;
  document.getElementById("ellipsoid-sa").textContent = (4 * Math.PI * Math.pow((r1 * r2 * r3), 1 / 3)).toFixed(2);
  document.getElementById("ellipsoid-vol").textContent = ((4 / 3) * Math.PI * r1 * r2 * r3).toFixed(2);
}

// Function to calculate Octahedron
function calculateOctahedron() {
  const edge = parseFloat(document.getElementById("octahedron-edge").value) || 0;
  document.getElementById("octahedron-sa").textContent = (2 * Math.sqrt(3) * edge ** 2).toFixed(2);
  document.getElementById("octahedron-vol").textContent = ((Math.sqrt(2) / 3) * edge ** 3).toFixed(2);
}

// Event listeners for inputs
document.getElementById("cube-input").addEventListener("input", calculateCube);
document.getElementById("sphere-input").addEventListener("input", calculateSphere);
document.getElementById("cylinder-radius").addEventListener("input", calculateCylinder);
document.getElementById("cylinder-height").addEventListener("input", calculateCylinder);
document.getElementById("cone-radius").addEventListener("input", calculateCone);
document.getElementById("cone-height").addEventListener("input", calculateCone);
document.getElementById("pyramid-base").addEventListener("input", calculatePyramid);
document.getElementById("pyramid-height").addEventListener("input", calculatePyramid);
document.getElementById("hemisphere-radius").addEventListener("input", calculateHemisphere);
document.getElementById("torus-radius").addEventListener("input", calculateTorus);
document.getElementById("torus-tube-radius").addEventListener("input", calculateTorus);
document.getElementById("ellipsoid-radius1").addEventListener("input", calculateEllipsoid);
document.getElementById("ellipsoid-radius2").addEventListener("input", calculateEllipsoid);
document.getElementById("ellipsoid-radius3").addEventListener("input", calculateEllipsoid);
document.getElementById("octahedron-edge").addEventListener("input", calculateOctahedron);
