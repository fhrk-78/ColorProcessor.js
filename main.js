var colorProcessor = function() {};
colorProcessor.colorMerge = function(colorAa, colorBa) {
    var colorA = colorAa;
    var colorB = colorBa;

    if (colorA.charAt(0) == '#') {
        colorA = colorA.slice(1);
    }

    if (colorB.charAt(0) == '#') {
        colorB = colorB.slice(1);
    }

    if (colorA.length == 3) {
        colorA = colorA.charAt(0) + colorA.charAt(0) + colorA.charAt(1) + colorA.charAt(1) + colorA.charAt(2) + colorA.charAt(2);
    }

    if (colorB.length == 3) {
        colorB = colorB.charAt(0) + colorB.charAt(0) + colorB.charAt(1) + colorB.charAt(1) + colorB.charAt(2) + colorB.charAt(2);
    }

    var merged = (colorA.charAt(0) * (16 ** 1) + colorA.charAt(1) * (16 ** 0) + colorB.charAt(0) * (16 ** 1) + colorB.charAt(1) * (16 ** 0)) / 2;
    var mergedColor;

    return mergedColor;
}