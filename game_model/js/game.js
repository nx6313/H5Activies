;
(function (t, w, d, m) {
    'use strict';

    w.GamePluginOptions = {
        'orientation-vertical': 'vertical',
        'orientation-horizontal': 'horizontal'
    };

    w.onresize = function () {
        var gameCvs = d.getElementById('gameCvs');
        if (gameCvs) {
            if (gameCvs.classList.contains('orientation_' + GamePluginOptions['orientation-vertical'])) {
                gameCvs.style.backgroundSize = 'auto 100%';
                if (w.outerWidth > w.outerHeight) {
                    gameCvs.width = w.outerHeight * 2;
                    gameCvs.height = w.outerWidth * 2;
                    gameCvs.style.width = w.outerHeight + 'px';
                    gameCvs.style.height = w.outerWidth + 'px';
                    gameCvs.style.top = `calc((${w.outerHeight}px - ${w.outerWidth}px) / 2)`;
                    gameCvs.style.left = `calc((${w.outerWidth}px - ${w.outerHeight}px) / 2)`;
                    gameCvs.style.transform = 'rotate(90deg)';
                } else {
                    gameCvs.style.top = `0`;
                    gameCvs.style.left = `0`;
                    gameCvs.style.transform = 'rotate(0deg)';
                }
            } else if (gameCvs.classList.contains('orientation_' + GamePluginOptions['orientation-horizontal'])) {
                gameCvs.style.backgroundSize = '100% auto';
                if (w.outerWidth < w.outerHeight) {
                    gameCvs.width = w.outerHeight * 2;
                    gameCvs.height = w.outerWidth * 2;
                    gameCvs.style.width = w.outerHeight + 'px';
                    gameCvs.style.height = w.outerWidth + 'px';
                    gameCvs.style.top = `calc((${w.outerHeight}px - ${w.outerWidth}px) / 2)`;
                    gameCvs.style.left = `calc((${w.outerWidth}px - ${w.outerHeight}px) / 2)`;
                    gameCvs.style.transform = 'rotate(90deg)';
                } else {
                    gameCvs.style.top = `0`;
                    gameCvs.style.left = `0`;
                    gameCvs.style.transform = 'rotate(0deg)';
                }
            }
        }
    };

    var GamePlugin = function (options) {
        var gamePlugin = this;
        gamePlugin.orientation = options.orientation ? options.orientation : GamePluginOptions['orientation-horizontal']; // 游戏布局走向，横屏或纵屏
        gamePlugin.bgColor = options.bgColor ? options.bgColor : null; // 页面背景图不足区域填充颜色
        gamePlugin.bgImg = options.bgImg ? options.bgImg : null; // 页面背景图片
        gamePlugin.fillColor = options.fillColor ? options.fillColor : 'transparent'; // canvas填充色
        // 执行游戏区域canvas的初始化
        gamePlugin.gameCvs = (function initGameMap() {
            d.body.style.margin = '0';
            d.body.style.padding = '0';
            d.body.style.fontSize = '0';
            d.body.style.overflow = 'hidden';

            var gameCanvasElem = d.createElement('canvas');
            gameCanvasElem.id = 'gameCvs';
            gameCanvasElem.classList.add('orientation_' + gamePlugin.orientation);
            gameCanvasElem.width = w.outerWidth * 2;
            gameCanvasElem.height = w.outerHeight * 2;
            gameCanvasElem.style.width = w.outerWidth + 'px';
            gameCanvasElem.style.height = w.outerHeight + 'px';
            gameCanvasElem.style.position = 'absolute';
            gameCanvasElem.style.top = '0';
            gameCanvasElem.style.left = '0';
            gameCanvasElem.style.backgroundColor = (gamePlugin.bgColor ? `${gamePlugin.bgColor}` : 'transparent');
            gameCanvasElem.style.backgroundImage = (gamePlugin.bgImg ? `url(${gamePlugin.bgImg})` : 'transparent');
            gameCanvasElem.style.backgroundRepeat = 'no-repeat';
            gameCanvasElem.style.backgroundPosition = 'center';
            if (gamePlugin.orientation == GamePluginOptions['orientation-vertical']) {
                gameCanvasElem.style.backgroundSize = 'auto 100%';
                if (w.outerWidth > w.outerHeight) {
                    gameCanvasElem.width = w.outerHeight * 2;
                    gameCanvasElem.height = w.outerWidth * 2;
                    gameCanvasElem.style.width = w.outerHeight + 'px';
                    gameCanvasElem.style.height = w.outerWidth + 'px';
                    gameCanvasElem.style.top = `calc((${w.outerHeight}px - ${w.outerWidth}px) / 2)`;
                    gameCanvasElem.style.left = `calc((${w.outerWidth}px - ${w.outerHeight}px) / 2)`;
                    gameCanvasElem.style.transform = 'rotate(90deg)';
                }
            } else if (gamePlugin.orientation == GamePluginOptions['orientation-horizontal']) {
                gameCanvasElem.style.backgroundSize = '100% auto';
                if (w.outerWidth < w.outerHeight) {
                    gameCanvasElem.width = w.outerHeight * 2;
                    gameCanvasElem.height = w.outerWidth * 2;
                    gameCanvasElem.style.width = w.outerHeight + 'px';
                    gameCanvasElem.style.height = w.outerWidth + 'px';
                    gameCanvasElem.style.top = `calc((${w.outerHeight}px - ${w.outerWidth}px) / 2)`;
                    gameCanvasElem.style.left = `calc((${w.outerWidth}px - ${w.outerHeight}px) / 2)`;
                    gameCanvasElem.style.transform = 'rotate(90deg)';
                }
            }
            d.body.appendChild(gameCanvasElem);
            return gameCanvasElem;
        })();
        gamePlugin.gameCvsCtx = gamePlugin.gameCvs.getContext('2d');

        // 初始化组件
        t.gameMap = new gamePlugin.map(this);
        t.gamePlayer = new gamePlugin.player(this);
    };

    GamePlugin.prototype = {
        // 地图组件类
        map: function (gamePlugin) {
            this.clear = function () {
                if (w.outerWidth > w.outerHeight) {
                    gamePlugin.gameCvsCtx.clearRect(0, 0, w.outerWidth * 2, w.outerHeight * 2);
                } else if (w.outerWidth < w.outerHeight) {
                    gamePlugin.gameCvsCtx.clearRect(0, 0, w.outerHeight * 2, w.outerWidth * 2);
                }
            };
            this.render = function () {
                this.clear();
                gamePlugin.gameCvsCtx.save();
                gamePlugin.gameCvsCtx.fillStyle = gamePlugin.fillColor;
                if (w.outerWidth > w.outerHeight) {
                    gamePlugin.gameCvsCtx.fillRect(0, 0, w.outerWidth * 2, w.outerHeight * 2);
                } else if (w.outerWidth < w.outerHeight) {
                    gamePlugin.gameCvsCtx.fillRect(0, 0, w.outerHeight * 2, w.outerWidth * 2);
                }
                gamePlugin.gameCvsCtx.restore();
            };
        },
        // 用户角色类
        player: function (gamePlugin) {
            this.x = 0; // 角色的 x 坐标
            this.y = 0; // 角色的 y 坐标
            this.update = function (x, y) {
                this.x = x;
                this.y = y;
            };
            this.render = function () {
                gamePlugin.gameCvsCtx.save();
                gamePlugin.gameCvsCtx.fillStyle = '#1CADAE';
                gamePlugin.gameCvsCtx.fillRect(this.x, this.y, 40, 40);
                gamePlugin.gameCvsCtx.restore();
            };
        },
        ///////////////////////////////////// 启动游戏发条
        startGame: function () {
            (function animate() {
                gameMap.render();
                gamePlayer.render();
                raf(animate);
            })();
            return this;
        },
        ///////////////////////////////////// 显示角色控制器
        showController: function () {
            var playerControllerWrapElem = d.createElement('div');
            playerControllerWrapElem.style.position = 'absolute';
            playerControllerWrapElem.style.width = '18vw';
            playerControllerWrapElem.style.height = '18vw';
            playerControllerWrapElem.style.left = '22px';
            playerControllerWrapElem.style.bottom = '20px';
            playerControllerWrapElem.style.border = '1px dashed rgba(28, 173, 174, .6)';
            playerControllerWrapElem.style.borderRadius = '18vw';
            d.body.appendChild(playerControllerWrapElem);
            var playerControllerPointElem = d.createElement('div');
            playerControllerPointElem.style.position = 'relative';
            playerControllerPointElem.style.width = '7vw';
            playerControllerPointElem.style.height = '7vw';
            playerControllerPointElem.style.background = 'rgba(28, 173, 174, .3)';
            playerControllerPointElem.style.borderRadius = '7vw';
            playerControllerPointElem.style.boxShadow = '0 0 30px rgba(185, 242, 243, .3) inset';
            playerControllerPointElem.style.top = 'calc((18vw - 7vw) / 2)';
            playerControllerPointElem.style.left = 'calc((18vw - 7vw) / 2)';
            playerControllerWrapElem.appendChild(playerControllerPointElem);
            var oSX = playerControllerWrapElem.clientHeight / 2,
                oSY = playerControllerWrapElem.clientWidth / 2;
            var oW, oH;
            playerControllerPointElem.addEventListener('touchstart', function (e) {
                playerControllerPointElem.style.transition = 'none';
                var touches = e.touches[0];
                oW = touches.clientX - playerControllerPointElem.offsetLeft - playerControllerPointElem.clientWidth;
                oH = touches.clientY - playerControllerPointElem.offsetTop - playerControllerPointElem.clientHeight;
                playerControllerPointElem.addEventListener("touchmove", function () {
                    e.preventDefault();
                }, false);
            }, false);
            playerControllerPointElem.addEventListener('touchmove', function (e) {
                var touches = e.touches[0];
                var oTop = (touches.clientY - oH) * 0.4;
                var oLeft = (touches.clientX - oW) * 0.4;
                var currentX = playerControllerPointElem.offsetLeft + playerControllerPointElem.clientWidth / 2;
                var currentY = playerControllerPointElem.offsetTop + playerControllerPointElem.clientHeight / 2;
                var pointDistance = m.sqrt((currentX - oSX) * (currentX - oSX) + (currentY - oSY) * (currentY - oSY));
                if (pointDistance <= playerControllerWrapElem.clientWidth / 2) {
                    playerControllerPointElem.style.top = oTop + 'px';
                    playerControllerPointElem.style.left = oLeft + 'px';
                } else {
                    playerControllerPointElem.style.top = oTop + 'px';
                    playerControllerPointElem.style.left = oLeft + 'px';
                }
                if (gamePlayer) {
                    // gamePlayer.update();
                }
            }, false);
            playerControllerPointElem.addEventListener('touchend', function (e) {
                playerControllerPointElem.style.transition = 'all 0.18s ease';
                playerControllerPointElem.style.top = 'calc((18vw - 7vw) / 2)';
                playerControllerPointElem.style.left = 'calc((18vw - 7vw) / 2)';
                d.removeEventListener("touchmove", function () {
                    e.preventDefault();
                }, false);
            });
            return this;
        }
    };

    const raf = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, m.floor(1000 / 60)); //每帧1000/60ms
        };

    if (typeof module !== 'undefined' && module.exports) module.exports = GamePlugin;
    if (typeof define === 'function') define(function () {
        return GamePlugin;
    });
    t.GamePlugin = GamePlugin;

})(this, window, document, Math);