function clickDermoSticker(id, url, event) {

    var chat = document.querySelector('.im-page--chat-input');
    var input = document.querySelector('.im-chat-input--text');
    var send = document.querySelector('.im-chat-input--send');
    var attaches = document.querySelector('.im-chat-input--attaches .page_pics_preview');

    input.focus();
    input.click();
    triggerEvent(input, 'keydown');
    input.innerHTML = 'https://vk.com/photo' + id;
    triggerEvent(input, 'keyup');

    chat.style.display = 'none';

    function a() {
        var editable_thumbs = attaches.querySelector('.editable_thumbs');
        if (!editable_thumbs ||
            editable_thumbs.childElementCount <= 0) {
            return setTimeout(a, 10);
        }
        setTimeout(b, 100);
    }

    function b() {
        send.click();
        chat.style.display = 'block';
    }

    a();
}

function triggerEvent(el, type) {
    if ('createEvent' in document) {
        var e = document.createEvent('HTMLEvents');
        e.initEvent(type, false, true);
        el.dispatchEvent(e);
    } else {
        var e = document.createEventObject();
        e.eventType = type;
        el.fireEvent('on' + e.eventType, e);
    }
}