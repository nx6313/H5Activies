(function () {
    var that = this;

    var _defaults = {
        height: '80vh',
        left: '20px',
        right: '',
        stateBarBg: '#ee3434',
        indexPage: '',
        hasTitleBar: true,
        titleBarBg: '#ee3434',
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

        document.body.classList.add('noselect');
        setPageStyle();
        var phonePageDom = getPhonePageDom();
        document.body.appendChild(phonePageDom);
    }

    var canBack = true;

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
        phonePageDom.style.zIndex = 10;

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
        phoneBgTopTimeBarDom.style.fontSize = '13px';
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
        phonePageContentDom.style.width = 'calc(' + _SETTINGS.height + ' / 2.005 * 0.87)';
        phonePageContentDom.style.height = 'calc(' + _SETTINGS.height + ' * 0.94)';
        phonePageContentDom.style.top = '3%';
        phonePageContentDom.style.left = '6.5%';
        phonePageContentDom.style.background = 'rgba(255, 255, 255, 0)';
        phonePageContentDom.style.borderRadius = 'calc(' + _SETTINGS.height + ' / 26)';
        phonePageContentDom.style.overflow = 'hidden';
        phonePageContentDom.style.zIndex = 99;
        phonePageContentDom.style.cursor = 'url(imgs/finger.ico), -webkit-grabbing';

        if (_SETTINGS.hasTitleBar === true) {
            var phonePageTitleDom = document.createElement('div');
            phonePageTitleDom.style.position = 'absolute';
            phonePageTitleDom.style.top = 'calc(((' + _SETTINGS.height + ' / 2.005) * 0.5) * 0.14)';
            phonePageTitleDom.style.left = '0';
            phonePageTitleDom.style.width = '100%';
            phonePageTitleDom.style.height = '44px';
            phonePageTitleDom.style.background = _SETTINGS.titleBarBg;

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
            titleBarBackDom.style.display = 'none';
            titleBarBackDom.onclick = function () {
                if (canBack) {
                    canBack = false;
                    var phonePageIframesWrapDom = document.getElementById('phone_page_wrap').getElementsByClassName('phonePageIframesWrap')[0];

                    var childPageCurNum = phonePageIframesWrapDom.getElementsByClassName('phonePageIframeItem').length;
                    if (childPageCurNum == 2) {
                        titleBarBackDom.style.display = 'none';
                    }

                    var transformXVal = (Number(_SETTINGS.height.substring(0, _SETTINGS.height.length - 2)) / 2.005 * 0.87 * (childPageCurNum - 2)) + _SETTINGS.height.substr(_SETTINGS.height.length - 2);
                    phonePageIframesWrapDom.style.transform = 'translateX(-' + transformXVal + ')';

                    setTimeout(function () {
                        phonePageIframesWrapDom.style.width = 'calc(' + childPageCurNum + ' * (' + _SETTINGS.height + ' / 2.005 * 0.87))';
                        var lastIframeItemDom = phonePageIframesWrapDom.getElementsByClassName('phonePageIframeItem')[childPageCurNum - 1];
                        if (lastIframeItemDom) {
                            lastIframeItemDom.remove();
                            canBack = true;
                        }
                    }, 600);
                }
            };
            phonePageTitleDom.appendChild(titleBarBackDom);

            phonePageContentDom.appendChild(phonePageTitleDom);
        }

        var phonePageIframesWrapDom = document.createElement('div');
        phonePageIframesWrapDom.classList.add('phonePageIframesWrap');
        phonePageIframesWrapDom.style.position = 'absolute';
        if (_SETTINGS.hasTitleBar === true) {
            phonePageIframesWrapDom.style.top = 'calc(((' + _SETTINGS.height + ' / 2.005) * 0.5) * 0.14 + 44px)';
        } else {
            phonePageIframesWrapDom.style.top = 'calc(((' + _SETTINGS.height + ' / 2.005) * 0.5) * 0.14)';
        }
        phonePageIframesWrapDom.style.width = 'calc(2 * (' + _SETTINGS.height + ' / 2.005 * 0.87))';
        if (_SETTINGS.hasTitleBar === true) {
            phonePageIframesWrapDom.style.height = 'calc((' + _SETTINGS.height + ' * 0.94) - (((' + _SETTINGS.height + ' / 2.005) * 0.5) * 0.14) - 44px)';
        } else {
            phonePageIframesWrapDom.style.height = 'calc((' + _SETTINGS.height + ' * 0.94) - (((' + _SETTINGS.height + ' / 2.005) * 0.5) * 0.14))';
        }
        phonePageIframesWrapDom.style.background = 'rgba(255, 255, 255, 1)';
        phonePageIframesWrapDom.style.overflow = 'hidden';
        phonePageIframesWrapDom.style.transition = 'all 0.5s ease';
        phonePageIframesWrapDom.style.transform = 'translateX(0)';
        phonePageContentDom.appendChild(phonePageIframesWrapDom);

        var phonePageIframeItemWrapDom = document.createElement('div');
        phonePageIframeItemWrapDom.classList.add('phonePageIframeItem');
        phonePageIframeItemWrapDom.style.position = 'absolute';
        phonePageIframeItemWrapDom.style.top = '0';
        phonePageIframeItemWrapDom.style.left = '0';
        phonePageIframeItemWrapDom.style.width = 'calc(' + _SETTINGS.height + ' / 2.005 * 0.87)';
        phonePageIframeItemWrapDom.style.height = '100%';
        phonePageIframeItemWrapDom.style.overflow = 'hidden';
        phonePageIframeItemWrapDom.style.background = 'rgba(255, 255, 255, 1)';
        phonePageIframesWrapDom.appendChild(phonePageIframeItemWrapDom);

        var phonePageContentIframeDom = document.createElement('iframe');
        phonePageContentIframeDom.classList.add('phonePageIframe');
        phonePageContentIframeDom.frameBorder = '0px';
        phonePageContentIframeDom.frameSpacing = '0px';
        phonePageContentIframeDom.style.width = '100%';
        phonePageContentIframeDom.style.height = '100%';
        phonePageContentIframeDom.style.overflow = 'hidden';
        phonePageContentIframeDom.style.borderRadius = '0 0 calc(' + _SETTINGS.height + ' / 26) calc(' + _SETTINGS.height + ' / 26)';
        phonePageContentIframeDom.style.background = 'rgba(255, 255, 255, 1)';
        if (_SETTINGS.indexPage) {
            phonePageContentIframeDom.src = _SETTINGS.indexPage;
        }
        phonePageIframeItemWrapDom.appendChild(phonePageContentIframeDom);

        phonePageDom.appendChild(phonePageContentDom);

        // 弹出面板区域提示文字
        var paneAreaTipDom = document.createElement('span');
        paneAreaTipDom.style.position = 'absolute';
        paneAreaTipDom.style.display = 'inline-block';
        paneAreaTipDom.innerHTML = 'n(*≧▽≦*)n<br><br><br>点击手机模型中的按钮<br><br>显示操作面板';
        paneAreaTipDom.style.fontSize = '13px';
        paneAreaTipDom.style.color = '#F3F8FD';
        paneAreaTipDom.style.textShadow = '0 0 1px rgba(243, 248, 253, .6)';
        paneAreaTipDom.style.textAlign = 'center';
        paneAreaTipDom.style.zIndex = 10;
        document.body.appendChild(paneAreaTipDom);
        paneAreaTipDom.style.top = 'calc((100vh - ' + (paneAreaTipDom.clientHeight) + 'px) / 2)';
        if (_SETTINGS.right) {
            paneAreaTipDom.style.right = 'calc((100vw - (' + _SETTINGS.height + ' / 2.005 + ' + _SETTINGS.right + ' + ' + _SETTINGS.right + ') - ' + (paneAreaTipDom.clientWidth) + 'px) / 2 + (' + _SETTINGS.height + ' / 2.005 + ' + _SETTINGS.right + ' + ' + _SETTINGS.right + '))';
        } else if (_SETTINGS.left) {
            paneAreaTipDom.style.left = 'calc((100vw - (' + _SETTINGS.height + ' / 2.005 + ' + _SETTINGS.left + ' + ' + _SETTINGS.left + ') - ' + (paneAreaTipDom.clientWidth) + 'px) / 2 + (' + _SETTINGS.height + ' / 2.005 + ' + _SETTINGS.left + ' + ' + _SETTINGS.left + '))';
        }

        return phonePageDom;
    }

    function setPageStyle() {
        var pageStyleEl = document.createElement('style');
        pageStyleEl.textContent = `
            body {
                width: 100vw;
                height: 100vh;
                overflow: hidden;
                background: #46618D;
                background-image: url(imgs/bg.png);
                background-repeat: repeat-x;
                background-size: 300px auto;
                background-position: bottom center;
            }
            .phonePageIframeWrap::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: calc(((${_SETTINGS.height} / 2.005) * 0.5) * 0.14);
                background: ${_SETTINGS.stateBarBg};
                //background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
            }
            div.titleBarBack:after {
                content: '';
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

            .noselect {
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            
            @-webkit-keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
            }
              
            @keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
            }
              
            .fadeIn {
                -webkit-animation-name: fadeIn;
                animation-name: fadeIn;
                -webkit-animation-duration: 0.6s;
                animation-duration: 0.6s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }

            @-webkit-keyframes fadeOut {
                from {
                  opacity: 1;
                }
                to {
                  opacity: 0;
                }
            }
              
            @keyframes fadeOut {
                from {
                  opacity: 1;
                }
                to {
                  opacity: 0;
                }
            }
              
            .fadeOut {
                -webkit-animation-name: fadeOut;
                animation-name: fadeOut;
                -webkit-animation-duration: 0.5s;
                animation-duration: 0.5s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }

            @-webkit-keyframes slideInDown {
                from {
                    -webkit-transform: translate3d(0, -100%, 0);
                    transform: translate3d(0, -100%, 0);
                    visibility: visible;
                }
                to {
                    -webkit-transform: translate3d(0, 0, 0);
                    transform: translate3d(0, 0, 0);
                }
            }
            
            @keyframes slideInDown {
                from {
                    -webkit-transform: translate3d(0, -100%, 0);
                    transform: translate3d(0, -100%, 0);
                    visibility: visible;
                }
                to {
                    -webkit-transform: translate3d(0, 0, 0);
                    transform: translate3d(0, 0, 0);
                }
            }
            
            .slideInDown {
                -webkit-animation-name: slideInDown;
                animation-name: slideInDown;
                -webkit-animation-duration: 0.5s;
                animation-duration: 0.5s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
            }

            @-webkit-keyframes slideOutDown {
                from {
                    -webkit-transform: translate3d(0, 0, 0);
                    transform: translate3d(0, 0, 0);
                }
                to {
                    visibility: hidden;
                    -webkit-transform: translate3d(0, 140%, 0);
                    transform: translate3d(0, 140%, 0);
                }
            }
            
            @keyframes slideOutDown {
                from {
                    -webkit-transform: translate3d(0, 0, 0);
                    transform: translate3d(0, 0, 0);
                }
                to {
                    visibility: hidden;
                    -webkit-transform: translate3d(0, 140%, 0);
                    transform: translate3d(0, 140%, 0);
                }
            }
            
            .slideOutDown {
                -webkit-animation-name: slideOutDown;
                animation-name: slideOutDown;
                -webkit-animation-duration: 0.5s;
                animation-duration: 0.5s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
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

    // 跳转到手机模型中另一个页面
    function toPage(title, src) {
        var phonePageIframesWrapDom = document.getElementById('phone_page_wrap').getElementsByClassName('phonePageIframesWrap')[0];
        // 获取当前子页面数量
        var childPageCurNum = phonePageIframesWrapDom.getElementsByClassName('phonePageIframeItem').length;
        phonePageIframesWrapDom.style.width = 'calc(' + (childPageCurNum + 2) + ' * (' + _SETTINGS.height + ' / 2.005 * 0.87))';

        var phonePageIframeItemWrapDom = document.createElement('div');
        phonePageIframeItemWrapDom.classList.add('phonePageIframeItem');
        phonePageIframeItemWrapDom.style.position = 'absolute';
        phonePageIframeItemWrapDom.style.top = '0';
        phonePageIframeItemWrapDom.style.left = 'calc(' + childPageCurNum + ' * (' + _SETTINGS.height + ' / 2.005 * 0.87))';
        phonePageIframeItemWrapDom.style.width = 'calc(' + _SETTINGS.height + ' / 2.005 * 0.87)';
        phonePageIframeItemWrapDom.style.height = '100%';
        phonePageIframeItemWrapDom.style.overflow = 'hidden';
        phonePageIframeItemWrapDom.style.background = 'rgba(255, 255, 255, 1)';
        phonePageIframesWrapDom.appendChild(phonePageIframeItemWrapDom);

        var phonePageContentIframeDom = document.createElement('iframe');
        phonePageContentIframeDom.classList.add('phoneChildPageIframe');
        phonePageContentIframeDom.frameBorder = '0px';
        phonePageContentIframeDom.frameSpacing = '0px';
        phonePageContentIframeDom.style.width = '100%';
        phonePageContentIframeDom.style.height = '100%';
        phonePageContentIframeDom.style.overflow = 'hidden';
        phonePageContentIframeDom.style.borderRadius = '0 0 calc(' + _SETTINGS.height + ' / 26) calc(' + _SETTINGS.height + ' / 26)';
        phonePageContentIframeDom.style.background = 'rgba(255, 255, 255, 1)';
        if (_SETTINGS.indexPage) {
            phonePageContentIframeDom.src = src;
        }
        phonePageIframeItemWrapDom.appendChild(phonePageContentIframeDom);

        var transformXVal = (Number(_SETTINGS.height.substring(0, _SETTINGS.height.length - 2)) / 2.005 * 0.87 * childPageCurNum) + _SETTINGS.height.substr(_SETTINGS.height.length - 2);
        phonePageIframesWrapDom.style.transform = 'translateX(-' + transformXVal + ')';

        var titleBarBack = document.getElementById('phone_page_wrap').getElementsByClassName('titleBarBack')[0];
        titleBarBack.style.display = 'block';
    }

    // 弹出对应面板区域
    function showPane(title, src, parameters) {
        if (!document.getElementById('phoneAboutPane')) {
            var paneShadeDom = document.createElement('div');
            paneShadeDom.id = 'phoneAboutPaneShade';
            paneShadeDom.style.width = '100vw';
            paneShadeDom.style.height = '100vh';
            paneShadeDom.style.position = 'absolute';
            paneShadeDom.style.top = '0px';
            paneShadeDom.style.left = '0px';
            paneShadeDom.style.background = 'rgba(0, 0, 0, 0)';
            paneShadeDom.style.zIndex = 99999;
            paneShadeDom.classList.add('fadeIn');
            document.body.appendChild(paneShadeDom);

            var paneDom = document.createElement('div');
            paneDom.id = 'phoneAboutPane';
            paneDom.style.position = 'absolute';
            paneDom.style.top = 'calc((100vh - ' + _SETTINGS.height + ') / 2)';
            paneDom.style.bottom = 'calc((100vh - ' + _SETTINGS.height + ') / 2)';
            if (_SETTINGS.right) {
                paneDom.style.width = 'calc(100vw - (' + _SETTINGS.height + ' / 2.005 + ' + _SETTINGS.right + ' + ' + _SETTINGS.right + ' + ' + _SETTINGS.right + '))';
                paneDom.style.right = 'calc(' + _SETTINGS.height + ' / 2.005 + ' + _SETTINGS.right + ' + ' + _SETTINGS.right + ')';
            } else if (_SETTINGS.left) {
                paneDom.style.width = 'calc(100vw - (' + _SETTINGS.height + ' / 2.005 + ' + _SETTINGS.left + ' + ' + _SETTINGS.left + ' + ' + _SETTINGS.left + '))';
                paneDom.style.left = 'calc(' + _SETTINGS.height + ' / 2.005 + ' + _SETTINGS.left + ' + ' + _SETTINGS.left + ')';
            }
            paneDom.style.borderRadius = '0px';
            paneDom.style.boxShadow = '0 0 8px rgba(44, 44, 44, .6)';
            paneDom.style.background = 'rgba(255, 255, 255, 1)';
            paneDom.style.zIndex = 999999;
            paneDom.classList.add('slideInDown');
            document.body.appendChild(paneDom);

            var paneIframeDom = document.createElement('iframe');
            paneIframeDom.classList.add('paneIframe');
            paneIframeDom.style.position = 'relative';
            paneIframeDom.frameBorder = '0px';
            paneIframeDom.frameSpacing = '0px';
            paneIframeDom.style.width = '100%';
            paneIframeDom.style.height = '100%';
            if (src) {
                if (parameters) {
                    paneIframeDom.src = src + '?params=' + parameters;
                } else {
                    paneIframeDom.src = src;
                }
            }
            paneDom.appendChild(paneIframeDom);

            var paneTitleDom = document.createElement('div');
            paneTitleDom.style.position = 'absolute';
            paneTitleDom.style.left = '0px';
            paneTitleDom.style.padding = '2px 6px';
            paneTitleDom.style.background = '#ffffff';
            paneTitleDom.style.boxShadow = '0 0 8px rgba(70, 90, 141, .4) inset';
            paneTitleDom.style.fontSize = '14px';
            paneTitleDom.style.color = '#444444';
            if (_SETTINGS.right) {
                paneTitleDom.style.maxWidth = 'calc(100vw - (' + _SETTINGS.height + ' / 2.005 + ' + _SETTINGS.right + ' + ' + _SETTINGS.right + ' + ' + _SETTINGS.right + '))';
            } else if (_SETTINGS.left) {
                paneTitleDom.style.maxWidth = 'calc(100vw - (' + _SETTINGS.height + ' / 2.005 + ' + _SETTINGS.left + ' + ' + _SETTINGS.left + ' + ' + _SETTINGS.left + '))';
            }
            paneTitleDom.innerHTML = title ? title : '未定义操作面板标题';
            paneDom.appendChild(paneTitleDom);
            paneTitleDom.style.top = '-' + (paneTitleDom.clientHeight + 1) + 'px';

            paneShadeDom.onclick = function () {
                paneShadeDom.classList.remove('fadeIn');
                paneShadeDom.classList.add('fadeOut');
                setTimeout(function () {
                    paneShadeDom.remove();
                }, 500);

                paneDom.classList.remove('slideInDown');
                paneDom.classList.add('slideOutDown');
                setTimeout(function () {
                    paneDom.remove();
                }, 500);
            };
        }
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
        toPage: toPage, // 跳转到手机模型中另一个页面
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