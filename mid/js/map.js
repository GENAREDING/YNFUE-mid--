var map;
var startAddressInput;
var endAddressInput;
var showMapButton;

function initMap() {
    map = new BMap.Map("map");
    map.enableScrollWheelZoom();
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);

    startAddressInput = document.getElementById("startAddressInput");
    endAddressInput = document.getElementById("endAddressInput");
    showMapButton = document.getElementById("showMapButton");

    showMapButton.addEventListener("click", showWalkingRoute);
}

function showWalkingRoute() {
    var startAddress = startAddressInput.value;
    var endAddress = endAddressInput.value;

    if (startAddress && endAddress) {
        var walking = new BMap.WalkingRoute(map, { renderOptions: { map: map, autoViewport: true } });
        walking.search(startAddress, endAddress);
    } else {
        alert("请输入起点和终点地址");
    }
}

(function () {
    var script = document.createElement("script");
    script.src = "https://api.map.baidu.com/api?v=3.0&ak=VoOY8vta6o3MGBG5nLkBVq97jRNksROb&callback=initMap";
    document.body.appendChild(script);
})();
