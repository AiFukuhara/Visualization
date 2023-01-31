export function baiduMap() {
    return new Promise(function (resolve, reject) {
        window.baiduMap = function () {
            resolve();
        };
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = `https://api.map.baidu.com/api?v=2.0&ak=替换为自己的&callback=baiduMap`;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}