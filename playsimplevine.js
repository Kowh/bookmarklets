var conf = JSON.parse(document.getElementById("configuration").text);
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var el = document.createElement("div");
        el.innerHTML = xmlhttp.responseText;
        var streamUrl = el.querySelector(
            'meta[property="twitter:player:stream"]').getAttribute(
            'content');
        var streamType = el.querySelector(
            'meta[property="twitter:player:stream:content_type"]'
        ).getAttribute(
            'content');
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        var vid = document.createElement('video');
        vid.setAttribute('type', streamType);
        vid.setAttribute('src', streamUrl);
        document.body.appendChild(vid);
        vid.play();
    }
}
xmlhttp.open("GET", conf.post.shareUrl, true);
xmlhttp.send();
