var pageScrollJsParams = getCurrentScript();
if (pageScrollJsParams.bindId) {
    var pageScrollObj = new Optiscroll(document.getElementById(pageScrollJsParams.bindId), {
        minTrackSize: 5,
        maxTrackSize: 80,
        preventParentScroll: true
    });

    addEvent(window, 'mousedown', moveStart);
    addEvent(window, 'mousemove', moveIn);
    addEvent(window, 'mouseup', moveEnd);
    addEvent(window, 'mouseout', moveEnd);

    var flg = false, //标记是否滑动
        startY, //标记起始位置
        startTop,
        move = 0;
    //惯性缓动参数
    var lastMoveTime = 0;
    var lastMoveStart = 0;
    var stopInertiaMove = false;

    function addEvent(el, type, fn) {
        if (el.addEventListener) {
            el.addEventListener(type, fn, false);
        } else if (el.attachEvent) {
            el.attachEvent('on' + type, fn);
        } else {
            el['on' + type] = fn;
        }
    }
    //取消浏览器默认行为
    function stop(e) {
        //Opera/Chrome/FF
        if (e.preventDefault)
            e.preventDefault();
        //IE
        e.returnValue = false;
    }

    function moveStart(e) {
        stop(e);
        flg = true;
        startY = e.clientY;
        startTop = document.getElementById(pageScrollJsParams.bindId).getElementsByClassName('optiscroll-content')[0].scrollTop || 0;
        //惯性缓动
        lastMoveStart = startY;
        lastMoveTime = new Date().getTime();
        stopInertiaMove = true;
    }

    function moveIn(e) {
        if (flg) {
            stop(e);
            move = e.clientY - startY - parseInt(startTop);
            pageScrollObj.scrollTo(false, -move, 0);
            //惯性缓动
            var nowTime = new Date().getTime();
            stopInertiaMove = true;
            if (nowTime - lastMoveTime > 300) {
                lastMoveTime = nowTime;
                lastMoveStart = e.clientY;
            }
        }
    }

    function moveEnd(e) {
        stop(e);
        var curMoveVal = move;
        move = 0;
        //惯性缓动
        if (flg) {
            var nowTime = new Date().getTime();
            var v = (e.clientY - lastMoveStart) / (nowTime - lastMoveTime);
            if (Math.abs(v) > 0.3) {
                var dir = v > 0 ? -1 : 1;
                if (dir > 0) {
                    // 向上惯性滚动
                    pageScrollObj.scrollTo(false, -curMoveVal + 30, 300);
                } else if (dir < 0) {
                    pageScrollObj.scrollTo(false, -curMoveVal - 30, 300);
                }
            }
        }
        flg = false;
    }
}


// 获取js接口传参
function getCurrentScript() {
    var args = {};
    var sc = document.getElementsByTagName("script");
    if (sc[sc.length - 1].src.split('?')[1]) {
        var paramsArr = sc[sc.length - 1].src.split('?')[1].split('&');
        var param, name, value;
        for (var i = 0, len = paramsArr.length; i < len; i++) {
            param = paramsArr[i].split('=');
            name = param[0], value = param[1];
            if (typeof args[name] == "undefined") {
                args[name] = value;
            } else if (typeof args[name] == "string") {
                args[name] = [args[name]];
                args[name].push(value);
            } else {
                args[name].push(value);
            }
        }
    }
    return args;
}