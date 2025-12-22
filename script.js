function loadDay(day) {
    const img = document.getElementById("spcOutlook");
    img.src = `https://www.spc.noaa.gov/products/outlook/day${day}otlk.gif`;
}

// Make the function available to HTML buttons
window.loadDay = loadDay;

// Load Day 1 by default
document.addEventListener("DOMContentLoaded", () => {
    loadDay(1);
});
