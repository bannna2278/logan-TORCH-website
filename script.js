const img = document.getElementById("day1");
function loadDay(day) {
    img.src = `https://www.spc.noaa.gov/products/outlook/day${day}otlk.html`;
}
