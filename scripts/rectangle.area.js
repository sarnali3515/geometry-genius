function calculateRectangleArea() {
    const RectangleWidthInput = document.getElementById('rectangle-width');
    const RectangleWidthText = RectangleWidthInput.value;
    const width = parseFloat(RectangleWidthText);

    const RectangleLengthInput = document.getElementById('rectangle-length');
    const RectangleLengthText = RectangleLengthInput.value;
    const length = parseFloat(RectangleLengthText);

    const area = length * width;
    console.log(area);

    // display triangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}