function init() {
    const canvas = document.getElementById("e");
    const context = canvas.getContext("2d");
    const plane = new Image();
    plane.src = "plano.jpg";
    plane.onload = function () {
        context.drawImage(plane, 0, 0, 480, 800);
    };

}

function draw(x, y, rot) {
    const canvas = document.getElementById("e");
    const context = canvas.getContext("2d");
    const posX = 225 + (float2int(x) * 15);
    const posY = 780 - (float2int(y) * 10);
    const rotate = 90 - rot;

    const img = new Image();
    img.src = "redarrow.png";
    img.onload = function () {
        context.save();
        context.translate(posX, posY);
        context.translate(7, 10);
        context.rotate(rotate * (Math.PI / 180));
        context.drawImage(img, -7, -10, 15, 20);
        context.restore();
    }
}

function float2int(value) {
    return value | 0;
}
