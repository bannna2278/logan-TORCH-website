function loadDay(day) {
    const img = document.getElementById("spcOutlook");
    img.src = `https://www.spc.noaa.gov/products/outlook/day${day}otlk.gif`;
}

window.loadDay = loadDay;

document.addEventListener("DOMContentLoaded", () => {
    loadDay(1);
});
