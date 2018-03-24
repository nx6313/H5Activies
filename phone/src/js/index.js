(function () {
    // 禁用浏览器后退
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function () {
        history.pushState(null, null, document.URL);
    });

    var that = this;

    var _defaults = {
        container: '',
        height: '80vh',
        left: '20px',
        right: '',
        indexPage: '',
        indexPageTitle: ''
    };
    var _SETTINGS = {};

    // 初始化手机模型页面容器
    function initPhonePage(options) {
        if (!options) {
            options = {};
        }
        Object.keys(_defaults).forEach(function (key) {
            if (typeof _defaults[key] == 'boolean' && typeof options[key] != 'undefined') {
                _SETTINGS[key] = options[key];
            } else {
                _SETTINGS[key] = options[key] || _defaults[key];
            }
        });

        setPageStyle();
        if (!_SETTINGS.container) {
            var phonePageDom = getPhonePageDom();
            document.body.appendChild(phonePageDom);
        } else {
            if (typeof _SETTINGS.container == 'string') {
                if (_SETTINGS.container.indexOf('#') == 0) {
                    var containerDomForId = document.getElementById(_SETTINGS.container.substr(1));
                    var phonePageDom = getPhonePageDom();
                    containerDomForId.style.position = 'relative';
                    containerDomForId.appendChild(phonePageDom);
                } else if (_SETTINGS.container.indexOf('.') == 0) {
                    var containerDoms = document.getElementsByClassName(_SETTINGS.container.substr(1));
                    for (var d = 0; d < containerDoms.length; d++) {
                        var phonePageDom = getPhonePageDom();
                        phonePageDom.id = 'phone_page_wrap_' + (d + 1);
                        containerDoms[d].style.position = 'relative';
                        containerDoms[d].appendChild(phonePageDom);
                    }
                }
            }
        }
    }

    function getPhonePageDom() {
        var phonePageDom = document.createElement('div');
        phonePageDom.id = 'phone_page_wrap'; // 多手机模板时，该值会被覆盖
        phonePageDom.style.position = 'absolute';
        phonePageDom.style.top = 'calc((100vh - ' + _SETTINGS.height + ') / 2)';
        if (_SETTINGS.right) {
            phonePageDom.style.right = _SETTINGS.right;
        } else if (_SETTINGS.left) {
            phonePageDom.style.left = _SETTINGS.left;
        }
        phonePageDom.style.width = 'calc(' + _SETTINGS.height + ' / 2.005)';
        phonePageDom.style.height = _SETTINGS.height;
        phonePageDom.style.backgroundImage = 'url(imgs/phone.png)';
        phonePageDom.style.backgroundRepeat = 'no-repeat';
        phonePageDom.style.backgroundSize = '100% 100%';
        phonePageDom.style.backgroundPosition = 'center';

        var phoneBgTopTimeBarDom = document.createElement('div');
        phoneBgTopTimeBarDom.style.position = 'absolute';
        phoneBgTopTimeBarDom.style.top = '4.6%';
        phoneBgTopTimeBarDom.style.left = '9.8%';
        phoneBgTopTimeBarDom.style.width = 'calc((87% - (' + _SETTINGS.height + ' / 2.005) * 0.5) / 2 - 10px)';
        phoneBgTopTimeBarDom.style.height = 'calc(((' + _SETTINGS.height + ' / 2.005) * 0.5) * 0.08)';
        phoneBgTopTimeBarDom.innerHTML = formatDate(new Date(), 'hh:mm');
        phoneBgTopTimeBarDom.style.textAlign = 'center';
        phoneBgTopTimeBarDom.style.color = '#F9EDED';
        phoneBgTopTimeBarDom.style.backgroundPosition = 'center';
        phoneBgTopTimeBarDom.style.fontSize = '14px';
        phoneBgTopTimeBarDom.style.textShadow = '0 0 1px #F9EDED';
        phoneBgTopTimeBarDom.style.zIndex = 999;
        phonePageDom.appendChild(phoneBgTopTimeBarDom);
        bindRealTime(phoneBgTopTimeBarDom);

        var phoneBgTopDom = document.createElement('div');
        phoneBgTopDom.style.position = 'absolute';
        phoneBgTopDom.style.top = '3%';
        phoneBgTopDom.style.left = 'calc((100% - ((' + _SETTINGS.height + ' / 2.005) * 0.5)) / 2 + 1px)';
        phoneBgTopDom.style.width = 'calc((' + _SETTINGS.height + ' / 2.005) * 0.5)';
        phoneBgTopDom.style.height = 'calc(((' + _SETTINGS.height + ' / 2.005) * 0.5) * 0.14)';
        phoneBgTopDom.style.backgroundImage = 'url(imgs/phone_bg_top.png)';
        phoneBgTopDom.style.backgroundRepeat = 'no-repeat';
        phoneBgTopDom.style.backgroundSize = '100% 100%';
        phoneBgTopDom.style.backgroundPosition = 'center';
        phoneBgTopDom.style.zIndex = 999;
        phonePageDom.appendChild(phoneBgTopDom);

        var phoneBgTopStateBarDom = document.createElement('div');
        phoneBgTopStateBarDom.style.position = 'absolute';
        phoneBgTopStateBarDom.style.top = '4.6%';
        phoneBgTopStateBarDom.style.right = '9.8%';
        phoneBgTopStateBarDom.style.width = 'calc((87% - (' + _SETTINGS.height + ' / 2.005) * 0.5) / 2 - 10px)';
        phoneBgTopStateBarDom.style.height = 'calc(((' + _SETTINGS.height + ' / 2.005) * 0.5) * 0.08)';
        phoneBgTopStateBarDom.style.backgroundImage = 'url(imgs/phone_state_bar.png)';
        phoneBgTopStateBarDom.style.backgroundRepeat = 'no-repeat';
        phoneBgTopStateBarDom.style.backgroundSize = '100% 100%';
        phoneBgTopStateBarDom.style.backgroundPosition = 'center';
        phoneBgTopStateBarDom.style.zIndex = 999;
        phonePageDom.appendChild(phoneBgTopStateBarDom);

        var phonePageContentDom = document.createElement('div');
        phonePageContentDom.classList.add('phonePageIframeWrap');
        phonePageContentDom.style.position = 'absolute';
        phonePageContentDom.style.width = '87%';
        phonePageContentDom.style.height = '94%';
        phonePageContentDom.style.top = '3%';
        phonePageContentDom.style.left = '6.5%';
        phonePageContentDom.style.background = 'rgba(255, 255, 255, 0)';
        phonePageContentDom.style.borderRadius = 'calc(' + _SETTINGS.height + ' / 26)';
        phonePageContentDom.style.overflow = 'hidden';
        phonePageContentDom.style.zIndex = 99;
        phonePageContentDom.style.cursor = 'url(imgs/pointer.ico), -webkit-grabbing';

        var phonePageTitleDom = document.createElement('div');
        phonePageTitleDom.style.position = 'absolute';
        phonePageTitleDom.style.top = 'calc(((' + _SETTINGS.height + ' / 2.005) * 0.5) * 0.14)';
        phonePageTitleDom.style.left = '0';
        phonePageTitleDom.style.width = '100%';
        phonePageTitleDom.style.height = '44px';
        phonePageTitleDom.style.background = '#ee3434';

        var titleBarNameDom = document.createElement('span');
        titleBarNameDom.style.position = 'absolute';
        titleBarNameDom.style.display = 'inline-block';
        titleBarNameDom.style.top = '0px';
        titleBarNameDom.style.left = '0px';
        titleBarNameDom.style.width = '100%';
        titleBarNameDom.style.height = '44px';
        titleBarNameDom.style.lineHeight = '44px';
        titleBarNameDom.style.fontSize = '18px';
        titleBarNameDom.style.color = '#ffffff';
        titleBarNameDom.style.textAlign = 'center';
        titleBarNameDom.innerHTML = _SETTINGS.indexPageTitle;
        phonePageTitleDom.appendChild(titleBarNameDom);

        var titleBarBackDom = document.createElement('div');
        titleBarBackDom.classList.add('titleBarBack');
        titleBarBackDom.style.position = 'absolute';
        titleBarBackDom.style.top = '2px';
        titleBarBackDom.style.left = '0px';
        titleBarBackDom.style.width = '40px';
        titleBarBackDom.style.height = '40px';
        titleBarBackDom.style.overflow = 'hidden';
        titleBarBackDom.style.backgroundImage = 'url(imgs/back.png)';
        titleBarBackDom.style.backgroundRepeat = 'no-repeat';
        titleBarBackDom.style.backgroundSize = '40% 40%';
        titleBarBackDom.style.backgroundPosition = '40%';
        titleBarBackDom.onclick = function () {
            history.back();
        };
        phonePageTitleDom.appendChild(titleBarBackDom);

        phonePageContentDom.appendChild(phonePageTitleDom);

        var phonePageContentIframeDom = document.createElement('iframe');
        phonePageContentIframeDom.classList.add('phonePageIframe');
        phonePageContentIframeDom.style.position = 'absolute';
        phonePageContentIframeDom.style.top = 'calc(((' + _SETTINGS.height + ' / 2.005) * 0.5) * 0.14 + 44px)';
        phonePageContentIframeDom.style.left = '0';
        phonePageContentIframeDom.frameBorder = '0px';
        phonePageContentIframeDom.frameSpacing = '0px';
        phonePageContentIframeDom.style.width = '100%';
        phonePageContentIframeDom.style.height = 'calc(100% - (((' + _SETTINGS.height + ' / 2.005) * 0.5) * 0.14) - 44px)';
        phonePageContentIframeDom.style.overflow = 'hidden';
        phonePageContentIframeDom.style.background = 'rgba(255, 255, 255, 1)';
        if (_SETTINGS.indexPage) {
            phonePageContentIframeDom.src = _SETTINGS.indexPage;
        }
        phonePageContentDom.appendChild(phonePageContentIframeDom);

        phonePageDom.appendChild(phonePageContentDom);
        return phonePageDom;
    }

    function setPageStyle() {
        var pageStyleEl = document.createElement('style');
        pageStyleEl.textContent = `
            .phonePageIframeWrap::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: calc(((${_SETTINGS.height} / 2.005) * 0.5) * 0.14);
                background: #ee3434;
                //background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
            }
            div.titleBarBack:after {
                content: "";
                display: block;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                pointer-events: none;
                background-image: radial-gradient(circle, rgb(179, 179, 179) 10%, transparent 10.01%);
                background-repeat: no-repeat;
                background-position: 50%;
                transform: scale(10, 10);
                opacity: 0;
                transition: transform .4s, opacity .5s;
            }
            div.titleBarBack:active:after {
                transform: scale(0, 0);
                opacity: .3;
                transition: 0s;
            }
        `;
        document.head.appendChild(pageStyleEl);
    }

    function bindRealTime(bindDom) {
        setInterval(function () {
            var curHtml = bindDom.innerHTML;
            var newTime = formatDate(new Date(), 'hh:mm');
            if (curHtml != newTime) {
                bindDom.innerHTML = newTime;
            }
        }, 1000);
    }

    // 弹出对应面板区域
    function showPane(title, width, height) {
        console.log(title, width, height);
    }

    // 获取手机模型有效区域宽度（不包含标题栏）
    function getPhoneWidth() {
        var phoneWidth = 0;
        var iframeDom = document.getElementsByClassName('phonePageIframe')[0];
        if (iframeDom) {
            phoneWidth = iframeDom.clientWidth;
        }
        return phoneWidth;
    }

    // 获取手机模型有效区域高度（不包含标题栏）
    function getPhoneHeight() {
        var phoneHeight = 0;
        var iframeDom = document.getElementsByClassName('phonePageIframe')[0];
        if (iframeDom) {
            phoneHeight = iframeDom.clientHeight;
        }
        return phoneHeight;
    }

    window.PhonePage = {
        init: initPhonePage, // 初始化手机模型
        showPane: showPane, // 弹出对应面板区域
        getPhoneWidth: getPhoneWidth, // 获取手机模型有效区域宽度（不包含标题栏）
        getPhoneHeight: getPhoneHeight // 获取手机模型有效区域高度（不包含标题栏）
    };
})();

// 格式化日期
function formatDate(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1, // 月份
        "d+": date.getDate(), // 日
        "h+": date.getHours(), // 小时
        "m+": date.getMinutes(), // 分
        "s+": date.getSeconds(), // 秒
        "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
        "S": date.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}