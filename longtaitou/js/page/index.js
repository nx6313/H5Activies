var observer = null; // 图片懒加载配置
$(function () {
    observer = lozad('.lozad', {
        rootMargin: '10px 0px',
        threshold: 0.1,
        load: function (el) {

        }
    });

    var $contentWrap = $('div#carIndex').find('div.car-item-wrap');

    // 解析数据配置
    dataSet.forEach(function (val, index) {
        var itemHtml = '';
        var hotIndex = Math.floor(Math.random() * (5 - 1 + 1) + 1);
        if (val.type == 'cicle-right') {
            itemHtml = `<div id="page_item_${index}" class="car-circle-right page_item item_${index}" style="_ITEM_STYLE_">
                <img class="word" src="${val.wordImg}">
                <img class="niao" src="imgs/niao.png">
                <img class="yun" src="imgs/diyun.png">
                <div class="cicle">
                    <div class="back"></div>
                    <img class="car lozad" style="_CAR_STYLE_" data-src="${val.carImg}" data-index="${index}" src="${val.carImg}">
                </div>
            </div>`;
            if (val.carStyle) {
                itemHtml = itemHtml.replace(/_CAR_STYLE_/g, `${val.carStyle}`);
            } else {
                itemHtml = itemHtml.replace(/_CAR_STYLE_/g, '');
            }
            if (val.style) {
                itemHtml = itemHtml.replace(/_ITEM_STYLE_/g, `${val.style}`);
            } else {
                itemHtml = itemHtml.replace(/_ITEM_STYLE_/g, '');
            }
        } else if (val.type == 'cicle-left') {
            itemHtml = `<div id="page_item_${index}" class="car-circle-left page_item item_${index}" style="_ITEM_STYLE_">
                <img class="word" src="${val.wordImg}">
                <img class="tian" src="imgs/yun.png">
                <img class="yun" src="imgs/diyun.png">
                <div class="cicle">
                    <div class="back"></div>
                    <img class="car lozad" style="_CAR_STYLE_" data-src="${val.carImg}" data-index="${index}" src="${val.carImg}">
                </div>
            </div>`;
            if (val.carStyle) {
                itemHtml = itemHtml.replace(/_CAR_STYLE_/g, `${val.carStyle}`);
            } else {
                itemHtml = itemHtml.replace(/_CAR_STYLE_/g, '');
            }
            if (val.style) {
                itemHtml = itemHtml.replace(/_ITEM_STYLE_/g, `${val.style}`);
            } else {
                itemHtml = itemHtml.replace(/_ITEM_STYLE_/g, '');
            }
        } else if (val.type == 'square-right') {
            itemHtml = `<div id="page_item_${index}" class="car-square-right page_item item_${index}">
                <div class="square">
                    <div class="back"></div>
                    <img class="more" src="imgs/denglong.png">
                    <img class="hotImg" src="imgs/hot_${hotIndex}.png">
                    <div class="carLogo">
                        <img style="_LOGO_STYLE_" src="${val.carLogo}">
                    </div>
                    <div class="carHandle"></div>
                    <img class="car lozad" style="_TOP_LEFT_" data-src="${val.carImg}" data-index="${index}" src="${val.carImg}">
                    <img class="txt" src="${val.wordImg}">
                </div>
            </div>`;
            if (val.logoStyle) {
                itemHtml = itemHtml.replace(/_LOGO_STYLE_/g, `${val.logoStyle}`);
            } else {
                itemHtml = itemHtml.replace(/_LOGO_STYLE_/g, '');
            }
            if (val.carOffset && $.isArray(val.carOffset) && val.carOffset[0] && val.carOffset[1]) {
                itemHtml = itemHtml.replace(/_TOP_LEFT_/g, `top: ${val.carOffset[0]}; left: ${val.carOffset[1]}`);
            } else {
                itemHtml = itemHtml.replace(/_TOP_LEFT_/g, '');
            }
        } else if (val.type == 'square-left') {
            itemHtml = `<div id="page_item_${index}" class="car-square-left page_item item_${index}">
                <div class="square">
                    <div class="back"></div>
                    <img class="more" src="imgs/denglong.png">
                    <img class="hotImg" src="imgs/hot_${hotIndex}.png">
                    <div class="carLogo">
                        <img style="_LOGO_STYLE_" src="${val.carLogo}">
                    </div>
                    <div class="carHandle"></div>
                    <img class="car lozad" style="_TOP_LEFT_" data-src="${val.carImg}" data-index="${index}" src="${val.carImg}">
                    <img class="txt" src="${val.wordImg}">
                </div>
            </div>`;
            if (val.logoStyle) {
                itemHtml = itemHtml.replace(/_LOGO_STYLE_/g, `${val.logoStyle}`);
            } else {
                itemHtml = itemHtml.replace(/_LOGO_STYLE_/g, '');
            }
            if (val.carOffset && $.isArray(val.carOffset)) {
                itemHtml = itemHtml.replace(/_TOP_LEFT_/g, `top: ${val.carOffset[0]}; left: ${val.carOffset[1]}`);
            } else {
                itemHtml = itemHtml.replace(/_TOP_LEFT_/g, '');
            }
        } else if (val.type == 'des-card') {
            itemHtml = `<div id="page_item_${index}" class="car-des page_item item_${index}" style="_ADD_STYLE_">
                <img class="card-top-left" src="imgs/card_top_left.png">
                <img class="card-top-right" src="imgs/card_top_right.png">
                <img class="card-bottom-left" src="imgs/card_bottom_left.png">
                <img class="card-bottom-right" src="imgs/card_bottom_right.png">
                <div class="card-top-middle"></div>
                <div class="card-bottom-middle"></div>
                <div class="card-left-middle"></div>
                <div class="card-right-middle"></div>
                <div class="content">
                    <div>${val.content}</div>
                </div>
            </div>`;
            if (val.style) {
                itemHtml = itemHtml.replace(/_ADD_STYLE_/g, `${val.style}`);
            } else {
                itemHtml = itemHtml.replace(/_ADD_STYLE_/g, '');
            }
        }
        if (itemHtml != '') {
            $contentWrap.append(itemHtml);
            if (val.click && typeof val.click === 'function') {
                if (val.type == 'cicle-right') {
                    $('div.item_' + index).on('click', function () {
                        var clickItemId = '';
                        if ($.inArray('page_item', this.classList) >= 0) {
                            clickItemId = this.id;
                        }
                        val.click(clickItemId, hotIndex);
                    });
                } else if (val.type == 'cicle-left') {
                    $('div.item_' + index).on('click', function () {
                        var clickItemId = '';
                        if ($.inArray('page_item', this.classList) >= 0) {
                            clickItemId = this.id;
                        }
                        val.click(clickItemId, hotIndex);
                    });
                }
            }
            if (val.clickMore && typeof val.clickMore === 'function') {
                if (val.type == 'square-right') {
                    $('div.item_' + index).on('click', 'div.carLogo', function () {
                        var clickItemId = '';
                        if ($.inArray('page_item', this.classList) >= 0) {
                            clickItemId = this.id;
                        } else {
                            clickItemId = $(this).parents('div.page_item').get(0).id;
                        }
                        val.clickMore(clickItemId, hotIndex);
                    });
                } else if (val.type == 'square-left') {
                    $('div.item_' + index).on('click', 'div.carLogo', function () {
                        var clickItemId = '';
                        if ($.inArray('page_item', this.classList) >= 0) {
                            clickItemId = this.id;
                        } else {
                            clickItemId = $(this).parents('div.page_item').get(0).id;
                        }
                        val.clickMore(clickItemId, hotIndex);
                    });
                }
            }
            if (val.clickCar && typeof val.clickCar === 'function') {
                if (val.type == 'square-right') {
                    $('div.item_' + index).on('click', 'div.carHandle', function () {
                        var clickItemId = '';
                        if ($.inArray('page_item', this.classList) >= 0) {
                            clickItemId = this.id;
                        } else {
                            clickItemId = $(this).parents('div.page_item').get(0).id;
                        }
                        val.clickCar(clickItemId, hotIndex);
                    });
                } else if (val.type == 'square-left') {
                    $('div.item_' + index).on('click', 'div.carHandle', function () {
                        var clickItemId = '';
                        if ($.inArray('page_item', this.classList) >= 0) {
                            clickItemId = this.id;
                        } else {
                            clickItemId = $(this).parents('div.page_item').get(0).id;
                        }
                        val.clickCar(clickItemId, hotIndex);
                    });
                }
            }
            if (val.clickSubscribe && typeof val.clickSubscribe === 'function') {
                if (val.type == 'square-right') {
                    $('div.item_' + index).on('click', 'img.txt', function () {
                        var clickItemId = '';
                        if ($.inArray('page_item', this.classList) >= 0) {
                            clickItemId = this.id;
                        } else {
                            clickItemId = $(this).parents('div.page_item').get(0).id;
                        }
                        val.clickSubscribe(clickItemId, hotIndex);
                    });
                } else if (val.type == 'square-left') {
                    $('div.item_' + index).on('click', 'img.txt', function () {
                        var clickItemId = '';
                        if ($.inArray('page_item', this.classList) >= 0) {
                            clickItemId = this.id;
                        } else {
                            clickItemId = $(this).parents('div.page_item').get(0).id;
                        }
                        val.clickSubscribe(clickItemId, hotIndex);
                    });
                }
            }
        }
    });
    // 懒加载
    observer.observe();
});

// 初始化页面滑道容器
function initIframePage() {
    var backBtnDom = document.createElement('div');
    backBtnDom.id = 'pageBackBtn';
    backBtnDom.style.position = 'fixed';
    backBtnDom.style.top = '10px';
    backBtnDom.style.left = '10px';
    backBtnDom.style.width = '10vw';
    backBtnDom.style.height = '10vw';
    backBtnDom.style.opacity = '0.8';
    backBtnDom.style.display = 'none';
    backBtnDom.style.backgroundImage = 'url(imgs/back_to_home.png)';
    backBtnDom.style.backgroundRepeat = 'no-repeat';
    backBtnDom.style.backgroundSize = '100% 100%';
    backBtnDom.style.zIndex = '99999999';
    backBtnDom.onclick = function () {
        goToIndexPage();
    };
    document.body.appendChild(backBtnDom);
    // 车辆详情页面容器
    var carDetailDom = document.createElement('div');
    carDetailDom.id = 'carDetail';
    carDetailDom.style.position = 'absolute';
    carDetailDom.style.top = '0';
    carDetailDom.style.left = '100vw';
    carDetailDom.style.width = '100vw';
    carDetailDom.style.height = '100vh';
    carDetailDom.style.overflow = 'hidden';
    carDetailDom.style.display = 'none';
    $('#pageRailWrap').append(carDetailDom);
    var initCarDetailPageHtml = `<div class="header">
                <img class="header-bg" src="imgs/header_bg.png">
                <img class="header-person" src="imgs/header_person_long.png">
            </div>
            <div class="main-content">
                <img class="fu" src="imgs/fu.png">
                <div class="content-wrap">
                    <div class="page-title">
                        <img class="title-left" src="imgs/title_left.png">
                        <img class="title-right" src="imgs/title_right.png">
                        <div class="title-content-wrap"></div>
                    </div>
                    <div class="car-item-wrap"></div>
                </div>
            </div>
            <img class="footer" src="imgs/footer.png">`;
    $(carDetailDom).append(initCarDetailPageHtml);
    // 订单预定页面容器
    var carOrderDom = document.createElement('div');
    carOrderDom.id = 'carOrder';
    carOrderDom.style.position = 'absolute';
    carOrderDom.style.top = '0';
    carOrderDom.style.left = '200vw';
    carOrderDom.style.width = '100vw';
    carOrderDom.style.height = '100vh';
    carOrderDom.style.overflow = 'hidden';
    carOrderDom.style.display = 'none';
    $('#pageRailWrap').append(carOrderDom);
    var initCarOrderPageHtml = `<div class="header">
            <img class="header-bg" src="imgs/header_bg.png">
            <img class="header-person" src="imgs/header_person_long.png">
        </div>
        <div class="main-content">
            <img class="fu" src="imgs/fu.png">
            <div class="content-wrap">
                <div class="car-item-wrap">
                    <div class="form-wrap">
                        <form id="orderForm" action="http://l.dachangjr.com/index.php?m=content&c=index&a=addyuyue" method="post">
                            <input type="text" placeholder="填写您的姓名" name="ment_name" id="">
                            <input type="text" placeholder="填写您的联系方式" name="ment_phone" id="">
                            <input type="text" readonly="readonly" placeholder="选择您预约到店的时间" name="ment_time" id="orderTime">
                            <input type="text" readonly="readonly" placeholder="选择您预约的 4s 店" name="ment_s" id="" onclick="showTimeSelectPicker('选择您预约的 4s 店', this);">
                            <textarea placeholder="填写您的意向车型" name="ment_x" id=""></textarea>
                            <input class="submit" type="button" value="提交信息" onclick="submitOrder()">
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <img class="footer" src="imgs/footer.png">`;
    $(carOrderDom).append(initCarOrderPageHtml);
    $('#orderTime').date({
        theme: "datetime",
        beginyear: 2018,
        endyear: 2018
    });
}

// 显示弹出页
var curentClickPageId = '';

function goToCarDetailPage(itemId, carKey, hotIndex) {
    curentClickPageId = itemId.indexOf('page_item') >= 0 ? itemId : '';
    var pageRailWrap = document.getElementById('pageRailWrap');
    setTimeout(function () {
        $('#pageRailWrap').find('div#carIndex').css({
            height: '100vh'
        });
    }, 600);
    $('#pageBackBtn').fadeIn();
    $('#pageRailWrap').find('div#carDetail').css({
        height: 'auto'
    });
    pageRailWrap.style.transform = 'translateX(-100vw)';
    // 开始解析车辆详情页内容
    showLoading();
    anaysCarDetailDat(carKey, hotIndex);
    setTimeout(function () {
        hideLoading();
        $('#pageRailWrap').find('div#carDetail').fadeIn();
    }, 800);
}

function goToCarOrderPage(shopName, bugCarYix) {
    $('#orderForm').clearForm();
    var pageRailWrap = document.getElementById('pageRailWrap');
    setTimeout(function () {
        $('#pageRailWrap').find('div#carIndex').css({
            height: '100vh'
        });
        $('#pageRailWrap').find('div#carDetail').css({
            height: '100vh',
            display: 'none'
        });
    }, 600);
    if ($('#pageBackBtn').is(':hidden')) {
        $('#pageBackBtn').fadeIn();
    }
    $('#pageRailWrap').find('div#carOrder').css({
        height: 'auto'
    });
    pageRailWrap.style.transform = 'translateX(-200vw)';
    // 开始解析预约车辆页内容
    showLoading();
    $('#orderForm').find('input[name=ment_s]').val(shopName);
    $('#orderForm').find('textarea[name=ment_x]').val(bugCarYix);
    setTimeout(function () {
        hideLoading();
        $('#pageRailWrap').find('div#carOrder').fadeIn();
    }, 400);
}

function goToIndexPage() {
    var pageRailWrap = document.getElementById('pageRailWrap');
    $('#pageRailWrap').find('div#carIndex').css({
        height: 'auto'
    });
    setTimeout(function () {
        $('#pageRailWrap').find('div#carDetail').css({
            height: '100vh',
            display: 'none'
        });
        $('#pageRailWrap').find('div#carOrder').css({
            height: '100vh',
            display: 'none'
        });
        if (curentClickPageId) {
            this.location.href = '#' + curentClickPageId;
            curentClickPageId = '';
        }
    }, 420);
    $('#pageBackBtn').fadeOut();
    pageRailWrap.style.transform = 'translateX(0vw)';
}

function showLoading() {
    $('#pageLoading').fadeIn();
}

function hideLoading() {
    $('#pageLoading').fadeOut();
}