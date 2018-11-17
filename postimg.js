let http = new XMLHttpRequest();
let url = "http://localhost:9000/image";
let img = undefined;

http.onreadystatechange = function () {
    if (http.readyState === 4 && http.status === 200) {
        let response = http.response.split(",");
        let coordinates = response[0].split(" ");
        const x = coordinates[0];
        const y = coordinates[2];
        const angle = response[1];
        draw(x, y, angle);
    }
};

function postImgB64(element) {
    http.open("POST", url, true);
    http.withCredentials = true;
    http.setRequestHeader("Content-Type", "application/json");
    http.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:9000/image");
    http.setRequestHeader("Access-Control-Allow-Methods", "POST");
    init();
    const file = element.files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
        img = reader.result.split(',')[1];
        const data = JSON.stringify({"uri": img});
        http.send(data);
    };
    reader.readAsDataURL(file);
}
