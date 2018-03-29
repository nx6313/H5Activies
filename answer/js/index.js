var gameAudio = null;
var gameAudioVolume = 0.6;

var hasRotateClass = false;
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
    var startGamePage = document.getElementById('gameStartPage');
    startGamePage.style.transform = 'translateY(-100vh)';

    gameAudio = new Audio('music/start_game.mp3');
    gameAudio.volume = gameAudioVolume;
    gameAudio.play();

    setTimeout(function () {
        showAnswerPage(1);
    }, 610);
}

// 显示规则
function showRoute() {
    gameAudio = new Audio('music/pre.mp3');
    gameAudio.volume = gameAudioVolume;
    gameAudio.play();
}

// 显示奖品
function showJiang() {
    gameAudio = new Audio('music/next.mp3');
    gameAudio.volume = gameAudioVolume;
    gameAudio.play();
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
            questionPageWrapDom.innerHTML = '我是第 ' + pageIndex + ' 页';
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
                nextQuestionDom.innerHTML = '下一题';
                questionPageWrapDom.appendChild(nextQuestionDom);
                nextQuestionDom.onclick = function () {
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
                    showAnswerPage(pageIndex + 1);

                    gameAudio = new Audio('music/other.mp3');
                    gameAudio.volume = gameAudioVolume;
                    gameAudio.play();
                };
            } else {
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
            }
        }

        var goToLeftVal = -(pageIndex - 1) * 100;
        gameTraiWrapDom.style.transform = 'translateX(' + goToLeftVal + 'vw)';
    }
}