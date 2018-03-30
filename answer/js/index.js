var gameAudio = null;
var gameAudioVolume = 0.6;

var hasRotateClass = false;
var xmlhttp = false;
var gameUserData = {};

initPage();

function initPage() {
    var screenHeight = document.body.clientHeight;

    var startGamePage = document.getElementById('gameStartPage');
    startGamePage.style.height = screenHeight + 'px';
}

// 开启或关闭游戏背景音效
function playMusicToggle() {
    var musicDom = document.getElementById('musicPlayWrap');
    for (var c = 0; c < musicDom.classList.length; c++) {
        if (musicDom.classList[c] === 'rotate') {
            hasRotateClass = true;
            break;
        }
    }
    if (hasRotateClass) {
        musicDom.classList.remove('rotate');
        hasRotateClass = false;
    } else {
        musicDom.classList.add('rotate');
        hasRotateClass = true;
    }

    var oAudio = musicDom.getElementsByTagName('audio')[0];
    if (hasRotateClass) {
        oAudio.play();
    } else {
        oAudio.pause();
    }
}

// 开始游戏
function startGame() {
    var userName = document.getElementById('nameInput').value;
    var userPhone = document.getElementById('phoneInput').value;
    if (!userName) {
        alert('请输入您的姓名');
        return false;
    }
    if (!userPhone) {
        alert('请输入您的手机号');
        return false;
    }
    if (!/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(userPhone.trim())) {
        alert('不是有效的手机号');
        return false;
    }
    gameUserData['username'] = userName.trim();
    gameUserData['user_phone'] = userPhone.trim();
    var startGamePage = document.getElementById('gameStartPage');
    startGamePage.style.transform = 'translateY(-100vh)';

    var gameTraiWrapDom = document.getElementById('gameTraiWrap');
    gameTraiWrapDom.style.display = 'block';

    gameAudio = new Audio('music/start_game.mp3');
    gameAudio.volume = gameAudioVolume;
    gameAudio.play();

    setTimeout(function () {
        startGamePage.style.display = 'none';
        showAnswerPage(1);
    }, 610);
}

// 显示规则
function showRoute() {
    gameAudio = new Audio('music/pre.mp3');
    gameAudio.volume = gameAudioVolume;
    gameAudio.play();

    var startGamePage = document.getElementById('gameStartPage');
    var routePaneShadeDom = document.createElement('div');
    routePaneShadeDom.classList.add('routePaneShade');
    routePaneShadeDom.style.position = 'absolute';
    routePaneShadeDom.style.top = '0';
    routePaneShadeDom.style.left = '0';
    routePaneShadeDom.style.width = '100vw';
    routePaneShadeDom.style.height = '100vh';
    routePaneShadeDom.style.background = 'rgba(0, 0, 0, .6)';
    routePaneShadeDom.style.zIndex = '99999';
    startGamePage.appendChild(routePaneShadeDom);

    var routePaneDom = document.createElement('div');
    routePaneDom.classList.add('routePane');
    routePaneDom.style.position = 'absolute';
    routePaneDom.style.top = '21vh';
    routePaneDom.style.left = 'calc((100vw - 80vw) / 2)';
    routePaneDom.style.width = 'calc(80vw - 60px)';
    routePaneDom.style.height = 'calc(60vh - 10vh - 10px)';
    routePaneDom.style.borderRadius = '4px';
    routePaneDom.style.background = '#f29221';
    routePaneDom.style.border = '2px solid #602e1f';
    routePaneDom.style.zIndex = '999999';
    routePaneDom.style.overflowX = 'hidden';
    routePaneDom.style.overflowY = 'auto';
    routePaneDom.style.padding = '10vh 30px 10px';
    routePaneDom.style.fontSize = '18px';
    routePaneDom.style.color = '#ffffff';
    routePaneDom.style.lineHeight = '30px';
    routePaneDom.innerHTML = routeData;
    startGamePage.appendChild(routePaneDom);

    var routePaneTitleDom = document.createElement('div');
    routePaneTitleDom.classList.add('routePaneTitle');
    routePaneTitleDom.innerHTML = '答题活动规则';
    routePaneDom.appendChild(routePaneTitleDom);

    routePaneShadeDom.onclick = function () {
        routePaneShadeDom.remove();
        routePaneDom.remove();
    };
}

// 显示奖品
function showJiang() {
    gameAudio = new Audio('music/next.mp3');
    gameAudio.volume = gameAudioVolume;
    gameAudio.play();

    var startGamePage = document.getElementById('gameStartPage');
    var jiangPaneShadeDom = document.createElement('div');
    jiangPaneShadeDom.classList.add('jiangPaneShade');
    jiangPaneShadeDom.style.position = 'absolute';
    jiangPaneShadeDom.style.top = '0';
    jiangPaneShadeDom.style.left = '0';
    jiangPaneShadeDom.style.width = '100vw';
    jiangPaneShadeDom.style.height = '100vh';
    jiangPaneShadeDom.style.background = 'rgba(0, 0, 0, .6)';
    jiangPaneShadeDom.style.zIndex = '99999';
    startGamePage.appendChild(jiangPaneShadeDom);

    var jiangPaneDom = document.createElement('div');
    jiangPaneDom.classList.add('jiangPane');
    jiangPaneDom.style.position = 'absolute';
    jiangPaneDom.style.top = '11vh';
    jiangPaneDom.style.left = 'calc((100vw - 80vw) / 2)';
    jiangPaneDom.style.width = 'calc(80vw - 60px)';
    jiangPaneDom.style.height = 'calc(74vh - 10vh - 10px)';
    jiangPaneDom.style.borderRadius = '4px';
    jiangPaneDom.style.background = '#f29221';
    jiangPaneDom.style.border = '2px solid #602e1f';
    jiangPaneDom.style.zIndex = '999999';
    jiangPaneDom.style.overflowX = 'hidden';
    jiangPaneDom.style.overflowY = 'auto';
    jiangPaneDom.style.padding = '10vh 30px 10px';
    jiangPaneDom.style.fontSize = '18px';
    jiangPaneDom.style.color = '#ffffff';
    jiangPaneDom.style.lineHeight = '30px';
    jiangPaneDom.innerHTML = jiangData;
    startGamePage.appendChild(jiangPaneDom);

    var jiangPaneTitleDom = document.createElement('div');
    jiangPaneTitleDom.classList.add('jiangPaneTitle');
    jiangPaneTitleDom.innerHTML = '答题活动奖品';
    jiangPaneDom.appendChild(jiangPaneTitleDom);

    jiangPaneShadeDom.onclick = function () {
        jiangPaneShadeDom.remove();
        jiangPaneDom.remove();
    };
}

// 显示对应页数的游戏页面
function showAnswerPage(pageIndex) {
    var gameDataForThisPage = questionData[pageIndex - 1];
    if (gameDataForThisPage) {
        var gameTraiWrapDom = document.getElementById('gameTraiWrap');
        if (!document.getElementById('question_' + pageIndex)) {
            gameTraiWrapDom.style.width = 'calc(' + (pageIndex + 1) + ' * 100vw)';

            var questionPageWrapDom = document.createElement('div');
            questionPageWrapDom.id = 'question_' + pageIndex;
            questionPageWrapDom.classList.add('questionPageWrap');
            questionPageWrapDom.style.position = 'absolute';
            questionPageWrapDom.style.top = '0';
            questionPageWrapDom.style.left = 'calc(' + (pageIndex - 1) + ' * 100vw)';
            questionPageWrapDom.style.width = '100vw';
            questionPageWrapDom.style.height = '100vh';
            gameTraiWrapDom.appendChild(questionPageWrapDom);

            var questionTitleWrapDom = document.createElement('div');
            questionTitleWrapDom.classList.add('questionTitleWrap');
            questionPageWrapDom.appendChild(questionTitleWrapDom);

            var questionTitlIndexDom = document.createElement('span');
            questionTitlIndexDom.classList.add('questionTitlIndex');
            questionTitlIndexDom.innerHTML = '第' + pageIndex + '/' + questionData.length + '问：';
            questionTitleWrapDom.appendChild(questionTitlIndexDom);

            var questionTitleDom = document.createElement('span');
            questionTitleDom.classList.add('questionTitle');
            questionTitleDom.innerHTML = gameDataForThisPage['question'];
            questionTitleWrapDom.appendChild(questionTitleDom);

            if (gameDataForThisPage['type'] == 'select') {
                for (var q = 0; q < gameDataForThisPage['answers'].length; q++) {
                    var answerItemDom = document.createElement('span');
                    answerItemDom.classList.add('answerItem');
                    answerItemDom.innerHTML = gameDataForThisPage['answers'][q]['key'] + '： ' + gameDataForThisPage['answers'][q]['val'];
                    questionPageWrapDom.appendChild(answerItemDom);
                    answerItemDom.onclick = function () {
                        var curSelectedItemDom = document.getElementById('question_' + pageIndex).getElementsByClassName('answerItemSelected')[0];
                        if (curSelectedItemDom) {
                            curSelectedItemDom.classList.remove('answerItemSelected');
                        }
                        this.classList.add('answerItemSelected');
                        gameUserData['c_' + pageIndex] = this.innerHTML;
                        if (pageIndex == questionData.length) {
                            setTimeout(function () {
                                var endGamePage = document.getElementById('gameEndPage');
                                endGamePage.style.display = 'block';
                                endGamePage.style.transform = 'translateY(0vh)';

                                $.ajax({
                                    type: 'post',
                                    url: 'http://l.dachangjr.com/index.php?m=content&c=index&a=addchoujiang',
                                    data: gameUserData,
                                    success: function (msg) {
                                        if (msg == '1') {
                                            alert('提交成功');
                                        } else {
                                            alert('提交失败，请稍后重试');
                                        }
                                    }
                                });
                            }, 200);
                        } else {
                            setTimeout(function () {
                                showAnswerPage(pageIndex + 1);

                                gameAudio = new Audio('music/other.mp3');
                                gameAudio.volume = gameAudioVolume;
                                gameAudio.play();
                            }, 200);
                        }
                    };
                }
            } else if (gameDataForThisPage['type'] == 'input') {
                var answerInputDom = document.createElement('textarea');
                answerInputDom.classList.add('answerInput');
                answerInputDom.placeholder = '填写答案：';
                questionPageWrapDom.appendChild(answerInputDom);
            }

            if (pageIndex == 1) {
                var nextQuestionDom = document.createElement('span');
                nextQuestionDom.classList.add('nextQuestion');
                nextQuestionDom.classList.add('onlyOne');
                nextQuestionDom.innerHTML = '下一题';
                questionPageWrapDom.appendChild(nextQuestionDom);
                nextQuestionDom.onclick = function () {
                    if (gameDataForThisPage['type'] == 'input') {
                        var answerInputDom = document.getElementById('question_' + pageIndex).getElementsByClassName('answerInput')[0];
                        if (!answerInputDom.value) {
                            alert('请填写您的答案');
                            return false;
                        }
                        gameUserData['c_' + pageIndex] = answerInputDom.value;
                    } else {
                        var selectItemDom = document.getElementById('question_' + pageIndex).getElementsByClassName('answerItemSelected')[0];
                        if (!selectItemDom) {
                            alert('请选择您的答案');
                            return false;
                        }
                        gameUserData['c_' + pageIndex] = selectItemDom.innerHTML;
                    }
                    showAnswerPage(pageIndex + 1);

                    gameAudio = new Audio('music/other.mp3');
                    gameAudio.volume = gameAudioVolume;
                    gameAudio.play();
                };
            } else if (pageIndex > 1 && pageIndex < questionData.length) {
                var preQuestionDom = document.createElement('span');
                preQuestionDom.classList.add('preQuestion');
                preQuestionDom.innerHTML = '上一题';
                questionPageWrapDom.appendChild(preQuestionDom);
                preQuestionDom.onclick = function () {
                    showAnswerPage(pageIndex - 1);

                    gameAudio = new Audio('music/other.mp3');
                    gameAudio.volume = gameAudioVolume;
                    gameAudio.play();
                };

                var nextQuestionDom = document.createElement('span');
                nextQuestionDom.classList.add('nextQuestion');
                nextQuestionDom.innerHTML = '下一题';
                questionPageWrapDom.appendChild(nextQuestionDom);
                nextQuestionDom.onclick = function () {
                    if (gameDataForThisPage['type'] == 'input') {
                        var answerInputDom = document.getElementById('question_' + pageIndex).getElementsByClassName('answerInput')[0];
                        if (!answerInputDom.value) {
                            alert('请填写您的答案');
                            return false;
                        }
                        gameUserData['c_' + pageIndex] = answerInputDom.value;
                    } else {
                        var selectItemDom = document.getElementById('question_' + pageIndex).getElementsByClassName('answerItemSelected')[0];
                        if (!selectItemDom) {
                            alert('请选择您的答案');
                            return false;
                        }
                        gameUserData['c_' + pageIndex] = selectItemDom.innerHTML;
                    }
                    showAnswerPage(pageIndex + 1);

                    gameAudio = new Audio('music/other.mp3');
                    gameAudio.volume = gameAudioVolume;
                    gameAudio.play();
                };
            } else {
                var preQuestionDom = document.createElement('span');
                preQuestionDom.classList.add('preQuestion');
                preQuestionDom.classList.add('onlyOne');
                preQuestionDom.innerHTML = '上一题';
                questionPageWrapDom.appendChild(preQuestionDom);
                preQuestionDom.onclick = function () {
                    showAnswerPage(pageIndex - 1);

                    gameAudio = new Audio('music/other.mp3');
                    gameAudio.volume = gameAudioVolume;
                    gameAudio.play();
                };
            }
        }

        var goToLeftVal = -(pageIndex - 1) * 100;
        gameTraiWrapDom.style.transform = 'translateX(' + goToLeftVal + 'vw)';
    }
}

function toChouJ() {
    window.location.href = '';
}