window.addEventListener('load', function () {

    // YouTubeにボタンを埋め込む処理
    save = document.createElement('button');
    save.innerHTML = 'save';

    load = document.createElement('button');
    load.innerHTML = 'load';

    div = document.querySelector('.ytp-right-controls');
    div.appendChild(save);
    div.appendChild(load);


    //video要素の取得
    video = document.querySelector('video');

    let time = 0;//

    let markers = [];

    function addMarker(time) {
        markers.push(time);
    }

    const jumpToMarker = (index) => {
        video.currentTime = markers[index];
    }


    save.onclick = function () {
        addMarker(video.currentTime);
        video.pause();

        /*
        マーカーの一覧を画面に表示する処理(作成中)
        let $list = $('<ul id="list"> hogehoge </ul>')

        markers.forEach(function (marker) {
            $list.append($('<li/>').text(`${marker}`))
        })

        let document = video.ownerDocument;
        let wrapper = document.createElement("div");
        wrapper.classList.add("hoge-controler");

        video.append($list);
        */
    }

    let index = 0;
    load.onclick = function () {
        jumpToMarker(index);
        video.play();
        index = (index + 1) % markers.length;
    }
});