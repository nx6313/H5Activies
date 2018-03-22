// 解析车辆详情页面数据
function anaysCarDetailDat(carKey, hotIndex) {
    var $titleWrap = $('div#carDetail').find('div.title-content-wrap');
    var $contentWrap = $('div#carDetail').find('div.car-item-wrap');
    $titleWrap.html('');
    $contentWrap.html('');

    if (carKey) {
        var carDetailData = carDetailDataSet[carKey];
        console.log(carDetailData);
        // 解析数据
        if (carDetailData) {
            for (var key in carDetailData) {
                if (key == 'title') {
                    for (var wordIndex = 0; wordIndex < carDetailData[key].length; wordIndex++) {
                        if (carDetailData[key][wordIndex].trim()) {
                            var titleWordDom = document.createElement('div');
                            titleWordDom.style.display = 'inline-block';
                            titleWordDom.style.width = '9vw';
                            titleWordDom.style.height = '9vw';
                            titleWordDom.style.lineHeight = '9vw';
                            titleWordDom.style.marginTop = '-2vw';
                            titleWordDom.style.marginLeft = '-1vw';
                            titleWordDom.style.backgroundImage = 'url(imgs/title_word_bg.png)';
                            titleWordDom.style.backgroundRepeat = 'no-repeat';
                            titleWordDom.style.backgroundSize = '100% 100%';
                            titleWordDom.innerText = carDetailData[key][wordIndex];
                            titleWordDom.style.fontSize = '20px';
                            titleWordDom.style.fontWeight = 'bold';
                            titleWordDom.style.color = '#CB0D0D';
                            titleWordDom.style.fontFamily = '微软雅黑';
                            $titleWrap.append(titleWordDom);
                        } else {
                            var titleWordDom = document.createElement('div');
                            titleWordDom.style.display = 'inline-block';
                            titleWordDom.style.width = '4vw';
                            $titleWrap.append(titleWordDom);
                        }
                    }
                } else if (key == 'tehuiTxt') {
                    var itemHtml = `<div class="car-des item_${key}">
                            <img class="card-top-left" src="imgs/card_top_left.png">
                            <img class="card-top-right" src="imgs/card_top_right.png">
                            <img class="card-bottom-left" src="imgs/card_bottom_left.png">
                            <img class="card-bottom-right" src="imgs/card_bottom_right.png">
                            <div class="card-top-middle"></div>
                            <div class="card-bottom-middle"></div>
                            <div class="card-left-middle"></div>
                            <div class="card-right-middle"></div>
                            <div class="content">
                                <div>${carDetailData[key]}</div>
                            </div>
                        </div>`;
                    $contentWrap.append(itemHtml);
                } else if (key == 'car') {
                    var itemHtml = `<div class="carExhibition item_${key}">
                            <img class="carImg" src="${carDetailData[key]['carImg']}">
                            <img class="price" src="${carDetailData[key]['priceImg']}">
                            <img class="hotImg" src="imgs/hot_${hotIndex}.png">
                        </div>`;
                    $contentWrap.append(itemHtml);
                } else if (key == 'btns') {
                    var itemHtml = `<div class="detailBtnWrap item_${key}">
                            <a class="btn_1" href="javascript: void(0);"></a>
                            <a class="btn_2" href="javascript: void(0);"></a>
                        </div>`;
                    $contentWrap.append(itemHtml);
                    var btn1Fn = carDetailData[key][0];
                    if (btn1Fn && typeof btn1Fn === 'function') {
                        $(`div.item_${key}`).on('click', 'a.btn_1', function () {
                            btn1Fn();
                        });
                    }
                    var btn2Fn = carDetailData[key][1];
                    if (btn2Fn && typeof btn2Fn === 'function') {
                        $(`div.item_${key}`).on('click', 'a.btn_2', function () {
                            btn2Fn();
                        });
                    }
                } else if (key == 'shopInfo') {
                    var itemHtml = `<div class="sShopWrap item_${key}">
                            <img src="${carDetailData[key]['shopImg']}">
                            <p>${carDetailData[key]['shopDes']}</p>
                        </div>`;
                    $contentWrap.append(itemHtml);
                } else if (key == 'features') {
                    var itemHtml = `<div class="featuresWrap item_${key}">`;
                    for (var f = 0; f < carDetailData[key].length; f++) {
                        itemHtml += `<div class="featureItem">
                            <span>${carDetailData[key][f].title}</span>
                            <span class="content">${carDetailData[key][f].des}</span>
                            <span>限时:${carDetailData[key][f].time}</span>
                        </div>`;
                    }
                    itemHtml += `</div>`;
                    $contentWrap.append(itemHtml);
                } else if (key == 'hotCars') {
                    if ($.isArray(carDetailData[key]) && carDetailData[key].length > 0) {
                        var itemHtml = `<div class="hotCarWrap item_${key}">`;
                        itemHtml += `<img class="hotTitle" src="imgs/rexiao.png">`;
                        itemHtml += `<div class="hotCarContentWrap">`;
                        for (var h = 0; h < carDetailData[key].length; h++) {
                            itemHtml += `<div class="hotCarItem">
                                <img class="carImg" src="${carDetailData[key][h]['carImg']}">
                                <span class="carName">${carDetailData[key][h]['carName']}</span>
                                <span class="carDes">${carDetailData[key][h]['carDes']}</span>
                                <span class="carPrice">￥${carDetailData[key][h]['carPrice']}</span>
                            </div>`;
                        }
                        itemHtml += `</div>`;
                        itemHtml += `</div>`;
                        $contentWrap.append(itemHtml);
                        // 绑定点击事件
                        for (var h = 0; h < carDetailData[key].length; h++) {
                            $('div.hotCarContentWrap').off('click', 'div.hotCarItem');
                            $('div.hotCarContentWrap').on('click', 'div.hotCarItem', function () {
                                var clickFn = carDetailData[key][$(this).index()]['click'];
                                if (clickFn && typeof clickFn === 'function') {
                                    clickFn();
                                }
                            });
                        }
                    }
                }
            }
            // 懒加载
            observer.observe();
        }
    }
}