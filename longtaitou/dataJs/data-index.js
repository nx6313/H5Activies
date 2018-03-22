// 数据配置
// type：cicle-right、cicle-left、square-right、square-left、des-card
var dataSet = [{
        type: 'cicle-right',
        wordImg: 'imgs/resources/words/xs-changan.png',
        carImg: 'imgs/resources/xs-changan.png',
        carStyle: 'width: 90%; top: 2vw; left: 4vw;',
        click: function (itemId, hotIndex) {
            // goToCarDetailPage(itemId, 'xs-changan', hotIndex);
            goToCarOrderPage('限时促销', '长安 限时促销车型');
        }
    },
    {
        type: 'cicle-left',
        wordImg: 'imgs/resources/words/xs-sikeda.png',
        carImg: 'imgs/resources/xs-sikeda.png',
        carStyle: 'width: 80%; top: 8vw; left: 6vw;',
        style: 'margin-bottom: 30px;',
        click: function (itemId, hotIndex) {
            // goToCarDetailPage(itemId, 'xs-sikeda', hotIndex);
            goToCarOrderPage('限时促销', '斯柯达 限时促销车型');
        }
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/1-leinuo.png',
        carLogo: 'imgs/resources/carLogos/leinuo.png',
        carImg: 'imgs/resources/cars/1-leinuo.png',
        carOffset: ['', ''],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '1-leinuo', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌一厂：雷诺 4s 店', '雷诺 科雷嘉两驱领先版 白');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>一重悦心礼：活动期间进店试驾即可领取精美茶具一套,  二重暖心礼：活动期间分期可享1年0利息，2年低息政策，三重安心礼：活动期间除享受雷诺SUV家族100%购置税减免之外，还额外获取2000元油卡</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/2-qxfuruisi.png',
        carLogo: 'imgs/resources/carLogos/fute.png',
        carImg: 'imgs/resources/cars/2-qxfuruisi.png',
        logoStyle: 'height: 10vw; margin-top: -1vw;',
        carOffset: ['7vw', '1vw'],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '2-qxfuruisi', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌二厂：福特 4s 店', '自动超能风尚型');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>现金10000元+5000保险+3800皮座椅+1800元原厂侧挡膜+680元大包围脚垫+290元后仓垫+130元把套+75元掸子+35元香水</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/3-fengtianrongfang.png',
        carLogo: 'imgs/resources/carLogos/guangqifengtian.png',
        carImg: 'imgs/resources/cars/3-fengtianrongfang.png',
        carOffset: ['8vw', '3vw'],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '3-fengtianrongfang', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌三厂：一汽丰田 4s 店', '白 2016款 2.0L CVT 两驱风尚款');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>抢购车红包即可抵扣666-4999元，分期购车两年0利息，置换可享4000元补贴</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/4-dazhongjieda.png',
        carLogo: 'imgs/resources/carLogos/dazhong.png',
        carImg: 'imgs/resources/cars/4-dazhongjieda.png',
        carOffset: ['', ''],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '4-dazhongjieda', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌四厂：一汽大众 4s 店', '白银黑 1.5 手动舒适型');
        }
    },
    {
        type: 'des-card',
        content: `特惠方案：<p>分期享受3年无利息，购车还有送万元大礼包，置换可享受5000元补贴
        捷达分期3年免利息，置换可享受5000元补贴       
        速腾厂家贴息最高8000元，置换可享受6000元补贴      
        迈腾厂家贴息最高12000元，置换可享受8000元补贴</p>`,
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/5-aodiQ3.png',
        carLogo: 'imgs/resources/carLogos/aodi.png',
        carImg: 'imgs/resources/cars/5-aodiQ3.png',
        logoStyle: 'height: 8vw; margin-top: -1vw;',
        carOffset: ['8vw', '4vw'],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '5-aodiQ3', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌五厂：奥迪 4s 店', '维也纳黄 35TFSI时尚型');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>奥迪国产车型首付50%起，18期0息；进口车型首付60%起，2年0息；分期购车还有送  奥迪自行车</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/6-jipu.png',
        carLogo: 'imgs/resources/carLogos/jipu.png',
        carImg: 'imgs/resources/cars/6-jipu.png',
        logoStyle: 'height: 6vw; margin-top: 1vw;',
        carOffset: ['5vw', '2vw'],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '6-jipu', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌六厂：Jeep 4s 店', '吉普 自由光 白 2.0优越');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>分期享受3年抵息, 购车送随车万元大礼包</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/7-dongfengrichan.png',
        carLogo: 'imgs/resources/carLogos/dongfeng.png',
        carImg: 'imgs/resources/cars/7-dongfengrichan.png',
        carOffset: ['9vw', '2vw'],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '7-dongfengrichan', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌七厂：东风日产 4s 店', '东风日产 劲客 白、橙、红 低配');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>1800元原厂侧挡膜+680元大包围脚垫+290元后仓垫+130元把套+75元掸子+35元香水</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/8-fute.png',
        carLogo: 'imgs/resources/carLogos/fute.png',
        carImg: 'imgs/resources/cars/8-fute.png',
        logoStyle: 'height: 10vw; margin-top: -1vw;',
        carOffset: ['8vw', '3vw'],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '8-fute', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌八厂：福特 4s 店', '福特 福睿斯  白、棕  改版1.5自舒');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>两年免息  置换最高可享6000元补贴</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/9-dazhongbaolai.png',
        carLogo: 'imgs/resources/carLogos/dazhong.png',
        carImg: 'imgs/resources/cars/9-dazhongbaolai.png',
        carOffset: ['9vw', '3vw'],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '9-dazhongbaolai', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌九厂：一汽大众 4s 店', '大众宝来  水晶银  1.5L自动时尚型');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>现金支持+置换补贴+分期低首付+联保支持</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/10-fengtianleiling.png',
        carLogo: 'imgs/resources/carLogos/guangqifengtian.png',
        carImg: 'imgs/resources/cars/10-fengtianleiling.png',
        carOffset: ['9vw', '3vw'],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '10-fengtianleiling', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌十厂：广汽丰田 4s 店', '丰田雷凌  精英版');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>选装360全景影像+全景记录仪，LED大灯，真皮座椅原价10800，特惠价4880</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/11-leikesasi.png',
        carLogo: 'imgs/resources/carLogos/leikesasi.png',
        carImg: 'imgs/resources/cars/11-leikesasi.png',
        carOffset: ['9vw', '2vw'],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '11-leikesasi', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌十一厂：雷克萨斯 4s 店', '雷克萨斯  IS300  晶亮白色   F SPORT');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>交100元诚意金送10000元装潢礼包！</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/12-sikeda.png',
        carLogo: 'imgs/resources/carLogos/sikeda.png',
        carImg: 'imgs/resources/cars/12-sikeda.png',
        carOffset: ['3vw', '4vw'],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '12-sikeda', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌十二厂：斯柯达 4s 店', '斯柯达  18新明锐   1.2T自动舒适型');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>低首付20%起  3年0利息  下定即得3000精品礼包</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/13-dongfengyuedaqiya.png',
        carLogo: 'imgs/resources/carLogos/huanchi.png',
        carImg: 'imgs/resources/cars/13-dongfengyuedaqiya.png',
        carOffset: ['8vw', '4vw'],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '13-dongfengyuedaqiya', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌十三厂：东风悦达·起亚 4s 店', '东风悦达 起亚   焕驰   白  1.4手标配');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>分期享受2年无息，置换补贴2000     赠送礼包 ：2000元：全车膜，皮质地胶，行车记录仪</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/14-fengtianweichi.png',
        carLogo: 'imgs/resources/carLogos/guangqifengtian.png',
        carImg: 'imgs/resources/cars/14-fengtianweichi.png',
        carOffset: ['8vw', '4vw'],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '14-fengtianweichi', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌十四厂：一汽丰田 4s 店', '丰田威驰FS   白、红  1.3LCVT锋锐版');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>订车即可获得4次定保通，详情咨询 4S店</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/15-fengtiankaluola.png',
        carLogo: 'imgs/resources/carLogos/guangqifengtian.png',
        carImg: 'imgs/resources/cars/15-fengtiankaluola.png',
        carOffset: ['8vw', '4vw'],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '15-fengtiankaluola', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌十五厂：一汽丰田 4s 店', '丰田卡罗拉 白 1.2自动GL');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>分期享受1年无息，购车送价值3000元精品太阳膜（侧、后）+真皮座椅</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/18-fute.png',
        carLogo: 'imgs/resources/carLogos/fute.png',
        carImg: 'imgs/resources/cars/18-fute.png',
        logoStyle: 'height: 10vw; margin-top: -1vw;',
        carOffset: ['8vw', '4vw'],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '18-fute', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌十八厂：福特 4s 店', '福特 福睿斯  雅典白  1.5手动舒适型');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>1800元原厂侧挡膜+680元大包围脚垫+290元后仓垫+130元把套+75元掸子+35元香水</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/20-dazhongmaiteng.png',
        carLogo: 'imgs/resources/carLogos/dazhong.png',
        carImg: 'imgs/resources/cars/20-dazhongmaiteng.png',
        carOffset: ['8vw', '4vw'],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '20-dazhongmaiteng', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌二十厂：一汽大众 4s 店', '大众迈腾B8  幻影黑   1.8T尊贵型全带预紧');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>0首付，三年0利息，分期当天可提车，置换补贴最高8000元，赠送3000大礼包</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/21-aodiQ5.png',
        carLogo: 'imgs/resources/carLogos/aodi.png',
        carImg: 'imgs/resources/cars/21-aodiQ5.png',
        logoStyle: 'height: 8vw; margin-top: -1vw;',
        carOffset: ['8vw', '4vw'],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '21-aodiQ5', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌二十一厂：奥迪 4s 店', '奥迪Q5  白  进取型');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>分期价格326000元，首付60% 18期0利率</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/23-aodiA4l.png',
        carLogo: 'imgs/resources/carLogos/aodi.png',
        carImg: 'imgs/resources/cars/23-aodiA4l.png',
        logoStyle: 'height: 8vw; margin-top: -1vw;',
        carOffset: ['', ''],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '23-aodiA4l', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌二十三厂：奥迪 4s 店', '奥迪A4L  白金、黑   2.0T进取18款');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>首付低至20% 18-24期0利息，置换最高万元补贴，送5000元装潢大礼包</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/24-aodiA3.png',
        carLogo: 'imgs/resources/carLogos/aodi.png',
        carImg: 'imgs/resources/cars/24-aodiA3.png',
        logoStyle: 'height: 8vw; margin-top: -1vw;',
        carOffset: ['6vw', '3vw'],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '24-aodiA3', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌二十四厂：奥迪 4s 店', '奥迪A3三厢  白   时尚型');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>尊享4年不限公里整车质保，5年10万公里免费保养;最低首付10%,18期0息，一张身份证贷走;置换补贴最高8000元</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/25-luhulansheng.png',
        carLogo: 'imgs/resources/carLogos/luhu.png',
        carImg: 'imgs/resources/cars/25-luhulansheng.png',
        logoStyle: 'height: 6vw; margin-top: 0.6vw; margin-left: 0.4vw;',
        carOffset: ['8vw', '3vw'],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '25-luhulansheng', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌二十五厂：捷豹路虎 4s 店', '路虎揽胜  圣托里尼黑    2017款 3.0  V6  SC  Vogue加长版');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>分期享受2年无息，购车送价值10000元精品大礼包</p>',
        style: 'margin-bottom: 30px;'
    },
    {
        type: 'square-right',
        wordImg: 'imgs/resources/words/27-aodiA6l.png',
        carLogo: 'imgs/resources/carLogos/aodi.png',
        carImg: 'imgs/resources/cars/27-aodiA6l.png',
        logoStyle: 'height: 8vw; margin-top: -1vw;',
        carOffset: ['10vw', '3vw'],
        clickMore: function () {},
        clickCar: function (itemId, hotIndex) {
            goToCarDetailPage(itemId, '27-aodiA6l', hotIndex);
        },
        clickSubscribe: function () {
            goToCarOrderPage('大昌二十七厂：奥迪 4s 店', '奥迪A6L   季风灰   1.8T   进取');
        }
    },
    {
        type: 'des-card',
        content: '特惠方案：<p>金融政策补贴，首付60%，18期0利息。置换补贴政策。精品大礼包。</p>'
    }
];