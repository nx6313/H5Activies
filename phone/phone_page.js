(function () {
    var that = this;

    var _defaults = {
        container: '',
        height: '80vh',
        left: '20px',
        right: ''
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
        phonePageDom.id = 'phone_page_wrap';
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

        var phonePageContentDom = document.createElement('div');
        phonePageContentDom.classList.add('phonePageIframeWrap');
        phonePageContentDom.style.position = 'absolute';
        phonePageContentDom.style.width = '87%';
        phonePageContentDom.style.height = '94%';
        phonePageContentDom.style.top = '3%';
        phonePageContentDom.style.left = '6.5%';
        phonePageContentDom.style.background = 'rgba(255, 255, 255, 0)';
        phonePageContentDom.style.borderRadius = 'calc(' + _SETTINGS.height + ' / 24)';
        phonePageContentDom.style.overflow = 'hidden';
        phonePageContentDom.style.zIndex = 99;
        phonePageContentDom.style.cursor = "url('imgs/pointer.ico'), -webkit-grabbing";

        var phonePageContentIframeDom = document.createElement('iframe');
        phonePageContentIframeDom.style.position = 'absolute';
        phonePageContentIframeDom.style.top = 'calc(((' + _SETTINGS.height + ' / 2.005) * 0.5) * 0.14)';
        phonePageContentIframeDom.style.left = '0';
        phonePageContentIframeDom.frameBorder = '0px';
        phonePageContentIframeDom.frameSpacing = '0px';
        phonePageContentIframeDom.style.width = '100%';
        phonePageContentIframeDom.style.height = 'calc(100% - (((' + _SETTINGS.height + ' / 2.005) * 0.5) * 0.14))';
        phonePageContentIframeDom.style.background = 'rgba(255, 255, 255, 1)';
        phonePageContentIframeDom.src = 'demo.html';
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
                background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
            }
        `;
        document.head.appendChild(pageStyleEl);
    }

    function showPane(type) {
        console.log(type);
    }

    window.PhonePage = {
        init: initPhonePage,
        showPane: showPane
    };
})();