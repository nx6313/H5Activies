var carDetailDataSet = {
    '1-leinuo': {
        title: '雷诺',
        tehuiTxt: '特惠方案：<p>一重悦心礼：活动期间进店试驾即可领取精美茶具一套,  二重暖心礼：活动期间分期可享1年0利息，2年低息政策，三重安心礼：活动期间除享受雷诺SUV家族100%购置税减免之外，还额外获取2000元油卡</p>',
        car: {
            carImg: 'imgs/resources/cars/1-leinuo.png',
            priceImg: 'imgs/resources/prices/1-leinuo.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌一厂：雷诺 4s 店', '雷诺 科雷嘉两驱领先版 白');
            },
            function () {
                window.location.href = 'http://m.dcsc520.com/sale/sale_info.html?skuId=5a90e0f56e516e2d7aef76d6';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/1-leinuo.png',
            shopDes: `山西大昌汽车贸易有限公司成立于2007年7 月6 日，公司位于
            山西省太原市小店区平阳南路88号，于2011年12月11日成
            为雷诺品牌的山西总经销商。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/1-leinuo/1.png',
            carName: '雷诺 科雷傲',
            carDes: '两驱舒适版',
            carPrice: '161800',
            click: function () {
                goToCarOrderPage('大昌一厂：雷诺 4s 店', '雷诺 科雷傲   两驱舒适版');
            }
        }, {
            carImg: 'imgs/resources/hots/1-leinuo/2.png',
            carName: '雷诺 科雷傲',
            carDes: '两驱豪华版',
            carPrice: '185800',
            click: function () {
                goToCarOrderPage('大昌一厂：雷诺 4s 店', '雷诺 科雷傲   两驱豪华版');
            }
        }, {
            carImg: 'imgs/resources/hots/1-leinuo/3.png',
            carName: '雷诺 科雷傲',
            carDes: '两驱领先版',
            carPrice: '172800',
            click: function () {
                goToCarOrderPage('大昌一厂：雷诺 4s 店', '雷诺 科雷傲   两驱领先版');
            }
        }, {
            carImg: 'imgs/resources/hots/1-leinuo/4.png',
            carName: '雷诺 科雷嘉',
            carDes: '两驱豪华版',
            carPrice: '162800',
            click: function () {
                goToCarOrderPage('大昌一厂：雷诺 4s 店', '雷诺 科雷嘉   两驱豪华版');
            }
        }]
    },
    '2-qxfuruisi': {
        title: '全新福克斯',
        tehuiTxt: '特惠方案：<p>现金10000元+5000保险+3800皮座椅+1800元原厂侧挡膜+680元大包围脚垫+290元后仓垫+130元把套+75元掸子+35元香水</p>',
        car: {
            carImg: 'imgs/resources/cars/2-qxfuruisi.png',
            priceImg: 'imgs/resources/prices/2-qxfuruisi.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌二厂：福特 4s 店', '自动超能风尚型');
            },
            function () {
                window.location.href = 'http://m.dcsc520.com/sale/sale_info.html?skuId=5aaa1ff86e516e058871b1ea';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/2-qxfuruisi.png',
            shopDes: `山西大昌汽车销售有限公司成立于2005年5月18日,是长安福特有限公司授权的集 “汽车销售、汽车维修、配件销售、信息咨询”一位体的专营店，是山西最大的福特4S店。
            主要代理销售长安福特福全新福克斯、福睿斯、新蒙迪欧、金牛座、新翼搏、新翼虎、福特锐界及原装进口福特福克斯ST、野马、探险者、撼路者全系列车型。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/2-qxfuruisi/1.png',
            carName: '福特 福克斯',
            carDes: '自动超能风尚型',
            carPrice: '114800',
            click: function () {
                goToCarOrderPage('大昌二厂：福特 4s 店', '福特 福克斯   自动超能风尚型');
            }
        }, {
            carImg: 'imgs/resources/hots/2-qxfuruisi/2.png',
            carName: '福特 福睿斯',
            carDes: '自动时尚型',
            carPrice: '101300',
            click: function () {
                goToCarOrderPage('大昌二厂：福特 4s 店', '福特 福睿斯   自动时尚型');
            }
        }, {
            carImg: 'imgs/resources/hots/2-qxfuruisi/3.png',
            carName: '福特 锐界',
            carDes: '四驱尊锐型',
            carPrice: '306800',
            click: function () {
                goToCarOrderPage('大昌二厂：福特 4s 店', '福特 锐界   四驱尊锐型');
            }
        }, {
            carImg: 'imgs/resources/hots/2-qxfuruisi/4.png',
            carName: '全新福特翼虎',
            carDes: '运动型',
            carPrice: '218800',
            click: function () {
                goToCarOrderPage('大昌二厂：福特 4s 店', '全新福特翼虎   运动型');
            }
        }]
    },
    '3-fengtianrongfang': {
        title: '丰田荣放',
        tehuiTxt: '特惠方案：<p>抢购车红包即可抵扣666-4999元，分期购车两年0利息，置换可享4000元补贴</p>',
        car: {
            carImg: 'imgs/resources/cars/3-fengtianrongfang.png',
            priceImg: 'imgs/resources/prices/3-fengtianrongfang.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌三厂：一汽丰田 4s 店', '白 2016款 2.0L CVT 两驱风尚款');
            },
            function () {
                window.location.href = 'http://m.dcsc520.com/sale/sale_info.html?skuId=5a8139c36e516e4dc4628d11';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/3-fengtianrongfang.png',
            shopDes: `原大昌丰田汽车销售服务有限公司成立于1992年，是一汽丰田
            特约经销店，具有“整车销售、配件供应、维修服务、信息反馈” 
            功能的汽车4S店，是享有最高荣誉的红马家店，是山西唯一一家
            丰田全国十佳经销店。`,
        },
        features: [{
                title: '无忧礼',
                des: '进店即送精美礼品、订车即送价值1500元汽车美容券，购车即送红包最高可抵4999元',
                time: '3.17-3.18'
            },
            {
                title: '购车惠',
                des: '分期购车可享两年0利率，3年低利息政策',
                time: '3.17-3.18'
            },
            {
                title: '置换优',
                des: '二手车置换可享4000元补贴',
                time: '3.17-3.18'
            }
        ],
        hotCars: [{
            carImg: 'imgs/resources/hots/3-fengtianrongfang/1.png',
            carName: '丰田 威驰FS',
            carDes: '2017款 锋驰款',
            carPrice: '77800',
            click: function () {
                goToCarOrderPage('大昌三厂：一汽丰田 4s 店', '丰田 威驰FS   2017款 锋驰款');
            }
        }, {
            carImg: 'imgs/resources/hots/3-fengtianrongfang/2.png',
            carName: '丰田 卡罗拉',
            carDes: '2017款 S-CVT GL-i',
            carPrice: '118800',
            click: function () {
                goToCarOrderPage('大昌三厂：一汽丰田 4s 店', '丰田 卡罗拉   2017款 S-CVT GL-i');
            }
        }, {
            carImg: 'imgs/resources/hots/3-fengtianrongfang/3.png',
            carName: '丰田 卡罗拉',
            carDes: '2017款 S-CVT GL',
            carPrice: '108800',
            click: function () {
                goToCarOrderPage('大昌三厂：一汽丰田 4s 店', '丰田 卡罗拉   2017款 S-CVT GL');
            }
        }, {
            carImg: 'imgs/resources/hots/3-fengtianrongfang/4.png',
            carName: '丰田 威驰',
            carDes: '2017款 创行版',
            carPrice: '77800',
            click: function () {
                goToCarOrderPage('大昌三厂：一汽丰田 4s 店', '丰田 威驰   2017款 创行版');
            }
        }]
    },
    '4-dazhongjieda': {
        title: '大众捷达',
        tehuiTxt: `特惠方案：<p>分期享受3年无利息，购车还有送万元大礼包，置换可享受5000元补贴
        捷达分期3年免利息，置换可享受5000元补贴       
        速腾厂家贴息最高8000元，置换可享受6000元补贴      
        迈腾厂家贴息最高12000元，置换可享受8000元补贴</p>`,
        car: {
            carImg: 'imgs/resources/cars/4-dazhongjieda.png',
            priceImg: 'imgs/resources/prices/4-dazhongjieda.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌四厂：一汽大众 4s 店', '白银黑 1.5 手动舒适型');
            },
            function () {
                window.location.href = 'http://m.dcsc520.com/sale/sale_info.html?skuId=5aaa0c546e516e058871b197';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/4-dazhongjieda.png',
            shopDes: `山西大昌轿车销售服务有限公司，成立于2000年5月18日，注册资金1000万,是山西省首家一汽-大众（4S）授权经销商，并按照一汽-大众品牌标准建立和经营运作的一汽-大众4S店特许汽车经营企业。
            公司业务范围涵盖一汽-大众系列品牌汽车的整车销售、售后维修、配件供应、信息反馈，四位一体的经销商.公司位于太原市太愉路88号（北营火车站对面），交通便利。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/4-dazhongjieda/1.png',
            carName: '大众 GTI',
            carDes: '2.0T',
            carPrice: '222000',
            click: function () {
                goToCarOrderPage('大昌四厂：一汽大众 4s 店', '大众 GTI   2.0T');
            }
        }, {
            carImg: 'imgs/resources/hots/4-dazhongjieda/2.png',
            carName: '大众 宝来',
            carDes: '1.6手动舒适型',
            carPrice: '95000',
            click: function () {
                goToCarOrderPage('大昌四厂：一汽大众 4s 店', '大众 宝来   1.6手动舒适型');
            }
        }, {
            carImg: 'imgs/resources/hots/4-dazhongjieda/3.png',
            carName: '大众 捷达',
            carDes: '1.5 手动舒适型',
            carPrice: '79600',
            click: function () {
                goToCarOrderPage('大昌四厂：一汽大众 4s 店', '大众 捷达   1.5 手动舒适型');
            }
        }, {
            carImg: 'imgs/resources/hots/4-dazhongjieda/4.png',
            carName: '大众 捷达',
            carDes: '1.4手动时尚型',
            carPrice: '61900',
            click: function () {
                goToCarOrderPage('大昌四厂：一汽大众 4s 店', '大众 捷达   1.4手动时尚型');
            }
        }]
    },
    '5-aodiQ3': {
        title: '奥迪Q3',
        tehuiTxt: `特惠方案：<p>奥迪国产车型首付50%起，18期0息；进口车型首付60%起，2年0息；分期购车还有送  奥迪自行车</p>`,
        car: {
            carImg: 'imgs/resources/cars/5-aodiQ3.png',
            priceImg: 'imgs/resources/prices/5-aodiQ3.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌五厂：奥迪 4s 店', '维也纳黄 35TFSI时尚型');
            },
            function () {
                window.location.href = 'http://m.dcsc520.com/sale/sale_info.html?skuId=5aaa0e106e516e058871b1b2';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/5-aodiQ3.png',
            shopDes: `山西大昌汽车服务有限公司，成立于2001年5月18日。我公司是山西省内首家由一汽-大众汽车有限公司授权，并按照奥迪品牌全球统一标准建立和经营运作的奥迪4S特许汽车经营企业。
            公司业务范围涵盖奥迪系列品牌汽车的整车销售、售后维修、消费信贷，旧车置换，代办上户，专业保险，道路救援等一站式服务。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/5-aodiQ3/1.png',
            carName: '奥迪 Q3',
            carDes: '四驱风尚型',
            carPrice: '250000',
            click: function () {
                goToCarOrderPage('大昌五厂：奥迪 4s 店', '奥迪 Q3   四驱风尚型');
            }
        }, {
            carImg: 'imgs/resources/hots/5-aodiQ3/2.png',
            carName: '奥迪 Q3',
            carDes: '时尚型',
            carPrice: '230000',
            click: function () {
                goToCarOrderPage('大昌五厂：奥迪 4s 店', '奥迪 Q3   时尚型');
            }
        }, {
            carImg: 'imgs/resources/hots/5-aodiQ3/3.png',
            carName: '奥迪 Q3',
            carDes: '风尚型',
            carPrice: '260000',
            click: function () {
                goToCarOrderPage('大昌五厂：奥迪 4s 店', '奥迪 Q3   风尚型');
            }
        }, {
            carImg: 'imgs/resources/hots/5-aodiQ3/4.png',
            carName: '奥迪Q5',
            carDes: '动感型',
            carPrice: '389300',
            click: function () {
                goToCarOrderPage('大昌五厂：奥迪 4s 店', '奥迪Q5   动感型');
            }
        }]
    },
    '6-jipu': {
        title: '吉普 自由光',
        tehuiTxt: `特惠方案：<p>分期享受3年抵息, 购车送随车万元大礼包</p>`,
        car: {
            carImg: 'imgs/resources/cars/6-jipu.png',
            priceImg: 'imgs/resources/prices/6-jipu.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌六厂：Jeep 4s 店', '吉普 自由光 白 2.0优越');
            },
            function () {
                window.location.href = 'http://m.dcsc520.com/sale/sale_info.html?skuId=5a7e8bb66e516e4dc46280cf';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/6-jipu.png',
            shopDes: `山西大昌Jeep 克莱斯勒4S店建店25年，诚信经商，服务第一，广汽菲克授权山西区域唯一一家五星级经销商。是具备汽车销售，售后服务，配件供应，信息反馈等“四位一体”的4S销售店。
            是山西第一家真正意义上的“多品牌销售”4S店，未来消费者可在山西大昌同一展厅内购买到菲亚特、Jeep、道奇以及克莱斯勒等品牌的国产和进口车型。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/6-jipu/1.png',
            carName: '吉普 指南者',
            carDes: '1.4T家享',
            carPrice: '168800',
            click: function () {
                goToCarOrderPage('大昌六厂：Jeep 4s 店', '吉普 指南者   1.4T家享');
            }
        }, {
            carImg: 'imgs/resources/hots/6-jipu/2.png',
            carName: '吉普 自由光',
            carDes: '2.4领先',
            carPrice: '202800',
            click: function () {
                goToCarOrderPage('大昌六厂：Jeep 4s 店', '吉普 自由光   2.4领先');
            }
        }]
    },
    '7-dongfengrichan': {
        title: '东风日产 劲客',
        tehuiTxt: `特惠方案：<p>1800元原厂侧挡膜+680元大包围脚垫+290元后仓垫+130元把套+75元掸子+35元香水</p>`,
        car: {
            carImg: 'imgs/resources/cars/7-dongfengrichan.png',
            priceImg: 'imgs/resources/prices/7-dongfengrichan.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌七厂：东风日产 4s 店', '东风日产 劲客 白、橙、红 低配');
            },
            function () {
                window.location.href = '#';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/7-dongfengrichan.png',
            shopDes: `山西大昌东风日产汽车销售服务有限公司成立于2003年5月18日,是东风日产有限公司授权的集 “汽车销售、汽车维修、配件销售、信息咨询”一位体的专营店，是最华北规模最大东风日产4S店。
            主要代理销售东风日产：轩逸、骐达、西玛、天籁、公爵、逍客、奇骏、楼兰、蓝鸟、劲客、途乐、贵士、GTR全系列车型。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/7-dongfengrichan/1.png',
            carName: '日产 蓝鸟',
            carDes: '中配',
            carPrice: '109900',
            click: function () {
                goToCarOrderPage('大昌七厂：东风日产 4s 店', '日产 蓝鸟   中配');
            }
        }, {
            carImg: 'imgs/resources/hots/7-dongfengrichan/2.png',
            carName: '日产 楼兰',
            carDes: '中配',
            carPrice: '240000',
            click: function () {
                goToCarOrderPage('大昌七厂：东风日产 4s 店', '日产 楼兰   中配');
            }
        }, {
            carImg: 'imgs/resources/hots/7-dongfengrichan/3.png',
            carName: '日产 新轩逸',
            carDes: '中配',
            carPrice: '112000',
            click: function () {
                goToCarOrderPage('大昌七厂：东风日产 4s 店', '日产 新轩逸   中配');
            }
        }, {
            carImg: 'imgs/resources/hots/7-dongfengrichan/4.png',
            carName: '日产 轩逸',
            carDes: '中配经典款',
            carPrice: '73000',
            click: function () {
                goToCarOrderPage('大昌七厂：东风日产 4s 店', '日产 轩逸   中配经典款');
            }
        }]
    },
    '8-fute': {
        title: '福特 福睿斯',
        tehuiTxt: `特惠方案：<p>两年免息  置换最高可享6000元补贴</p>`,
        car: {
            carImg: 'imgs/resources/cars/8-fute.png',
            priceImg: 'imgs/resources/prices/8-fute.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌八厂：福特 4s 店', '福特 福睿斯  白、棕  改版1.5自舒');
            },
            function () {
                window.location.href = '#';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/8-fute.png',
            shopDes: `大昌八厂福特店是隶属于山西大昌集团旗下的子公司，2008年7月落成并通过厂家验证，2010年7月成功通过代表福特最专业、最严格的全球QC质量认证。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/8-fute/1.png',
            carName: '福特 福睿斯',
            carDes: '1.5自动舒适型',
            carPrice: '88800',
            click: function () {
                goToCarOrderPage('大昌八厂：福特 4s 店', '福特 福睿斯   1.5自动舒适型');
            }
        }, {
            carImg: 'imgs/resources/hots/8-fute/2.png',
            carName: '福特 福睿斯',
            carDes: '1.6自动高配',
            carPrice: '103300',
            click: function () {
                goToCarOrderPage('大昌八厂：福特 4s 店', '福特 福睿斯   1.6自动高配');
            }
        }, {
            carImg: 'imgs/resources/hots/8-fute/3.png',
            carName: '福特 福睿斯',
            carDes: '1.5手动高配',
            carPrice: '91300',
            click: function () {
                goToCarOrderPage('大昌八厂：福特 4s 店', '福特 福睿斯   1.5手动高配');
            }
        }, {
            carImg: 'imgs/resources/hots/8-fute/4.png',
            carName: '福特 福睿斯',
            carDes: '1.5手动舒适型',
            carPrice: '77800',
            click: function () {
                goToCarOrderPage('大昌八厂：福特 4s 店', '福特 福睿斯   1.5手动舒适型');
            }
        }]
    },
    '9-dazhongbaolai': {
        title: '大众宝来',
        tehuiTxt: `特惠方案：<p>现金支持+置换补贴+分期低首付+联保支持</p>`,
        car: {
            carImg: 'imgs/resources/cars/9-dazhongbaolai.png',
            priceImg: 'imgs/resources/prices/9-dazhongbaolai.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌九厂：一汽大众 4s 店', '大众宝来  水晶银  1.5L自动时尚型');
            },
            function () {
                window.location.href = 'http://m.dcsc520.com/sale/sale_info.html?skuId=5a9a723c6e516e7fa081cdd2';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/9-dazhongbaolai.png',
            shopDes: `山西大昌通源汽车销售有限公司（简称通源公司），成立于2012年5月3日，注册资金1500万元，是大昌集团一家全资子公司。
            公司在太原市汽车销售黄金地段——太原市小店区平阳南路88号建有一汽-大众汽车4S店。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/9-dazhongbaolai/1.png',
            carName: '大众 宝来',
            carDes: '自动时尚型',
            carPrice: '96500',
            click: function () {
                goToCarOrderPage('大昌九厂：一汽大众 4s 店', '大众 宝来   自动时尚型');
            }
        }, {
            carImg: 'imgs/resources/hots/9-dazhongbaolai/2.png',
            carName: '大众 捷达',
            carDes: '手动时尚型',
            carPrice: '67500',
            click: function () {
                goToCarOrderPage('大昌九厂：一汽大众 4s 店', '大众 捷达   手动时尚型');
            }
        }, {
            carImg: 'imgs/resources/hots/9-dazhongbaolai/3.png',
            carName: '大众 迈腾',
            carDes: '2.0T豪华型',
            carPrice: '225000',
            click: function () {
                goToCarOrderPage('大昌九厂：一汽大众 4s 店', '大众 迈腾   2.0T豪华型');
            }
        }, {
            carImg: 'imgs/resources/hots/9-dazhongbaolai/4.png',
            carName: '大众 速腾',
            carDes: '自动领先型',
            carPrice: '131000',
            click: function () {
                goToCarOrderPage('大昌九厂：一汽大众 4s 店', '大众 速腾   自动领先型');
            }
        }]
    },
    '10-fengtianleiling': {
        title: '丰田雷凌',
        tehuiTxt: `特惠方案：<p>选装360全景影像+全景记录仪，LED大灯，真皮座椅原价10800，特惠价4880</p>`,
        car: {
            carImg: 'imgs/resources/cars/10-fengtianleiling.png',
            priceImg: 'imgs/resources/prices/10-fengtianleiling.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌十厂：广汽丰田 4s 店', '丰田雷凌  精英版');
            },
            function () {
                window.location.href = 'http://m.dcsc520.com/sale/sale_info.html?skuId=5a96249f6e516e2d7aef7723';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/10-fengtianleiling.png',
            shopDes: `山西大昌轿车服务有限公司是广汽丰田汽车有限公司授权的集整车销售、车辆维修、备件供应、信息反馈于一体的综合4S店，经销广汽丰田全系列产品，即凯美瑞、凯美瑞双擎、汉兰达、致炫、致享、雷凌、雷凌双擎、C-HR以及丰田高端MPV埃尔法。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/10-fengtianleiling/1.png',
            carName: '丰田 致享',
            carDes: '魅动版',
            carPrice: '74800',
            click: function () {
                goToCarOrderPage('大昌十厂：广汽丰田 4s 店', '丰田 致享   魅动版');
            }
        }, {
            carImg: 'imgs/resources/hots/10-fengtianleiling/2.png',
            carName: '丰田致炫',
            carDes: '魅动版',
            carPrice: '73800',
            click: function () {
                goToCarOrderPage('大昌十厂：广汽丰田 4s 店', '丰田致炫   魅动版');
            }
        }]
    },
    '11-leikesasi': {
        title: '雷克萨斯',
        tehuiTxt: `特惠方案：<p>交100元诚意金送10000元装潢礼包！</p>`,
        car: {
            carImg: 'imgs/resources/cars/11-leikesasi.png',
            priceImg: 'imgs/resources/prices/11-leikesasi.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌十一厂：雷克萨斯 4s 店', '雷克萨斯  IS300  晶亮白色   F SPORT');
            },
            function () {
                window.location.href = 'http://m.dcsc520.com/sale/sale_info.html?skuId=5aaa13726e516e058871b1c6';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/11-leikesasi.png',
            shopDes: `雷克萨斯创立于1983年，是日本丰田集团旗下全球著名豪华汽车品牌。该品牌仅用了十几年的时间，销量在北美地区便超过了奔驰、宝马。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/11-leikesasi/1.png',
            carName: '雷克萨斯 rx300',
            carDes: '典雅升级版',
            carPrice: '535000',
            click: function () {
                goToCarOrderPage('大昌十一厂：雷克萨斯 4s 店', '雷克萨斯 rx300   典雅升级版');
            }
        }, {
            carImg: 'imgs/resources/hots/11-leikesasi/2.png',
            carName: '雷克萨斯 ES200',
            carDes: '精英升级版',
            carPrice: '298000',
            click: function () {
                goToCarOrderPage('大昌十一厂：雷克萨斯 4s 店', '雷克萨斯 ES200   精英升级版');
            }
        }]
    },
    '12-sikeda': {
        title: '斯柯达',
        tehuiTxt: `特惠方案：<p>低首付20%起  3年0利息  下定即得3000精品礼包</p>`,
        car: {
            carImg: 'imgs/resources/cars/12-sikeda.png',
            priceImg: 'imgs/resources/prices/12-sikeda.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌十二厂：斯柯达 4s 店', '斯柯达  18新明锐   1.2T自动舒适型');
            },
            function () {
                window.location.href = '#';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/12-sikeda.png',
            shopDes: `太原市大昌汽车销售服务有限公司于2009年5月18日开业，7月29日正式营业，落户于亚洲首家立体4S店--大昌立体4S店一层。目前经营上海大众斯柯达旗下明锐、昕锐、速派、柯迪亚克、野帝等车系，十余款车型，是集上海大众斯柯达车型的整车销售、备件供应、售后服务、信息反馈为一体的汽车销售模式。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/12-sikeda/1.png',
            carName: '斯柯达 野帝',
            carDes: '自动前行版',
            carPrice: '126800',
            click: function () {
                goToCarOrderPage('大昌十二厂：斯柯达 4s 店', '斯柯达 野帝   自动前行版');
            }
        }, {
            carImg: 'imgs/resources/hots/12-sikeda/2.png',
            carName: '斯柯达 昕动',
            carDes: '手动标准',
            carPrice: '61400',
            click: function () {
                goToCarOrderPage('大昌十二厂：斯柯达 4s 店', '斯柯达 昕动   手动标准');
            }
        }, {
            carImg: 'imgs/resources/hots/12-sikeda/3.png',
            carName: '斯柯达 昕锐',
            carDes: '手动标准',
            carPrice: '58900',
            click: function () {
                goToCarOrderPage('大昌十二厂：斯柯达 4s 店', '斯柯达 昕锐   手动标准');
            }
        }, {
            carImg: 'imgs/resources/hots/12-sikeda/4.png',
            carName: '斯柯达 新明锐',
            carDes: '自动豪华版',
            carPrice: '120900',
            click: function () {
                goToCarOrderPage('大昌十二厂：斯柯达 4s 店', '斯柯达 新明锐   自动豪华版');
            }
        }]
    },
    '13-dongfengyuedaqiya': {
        title: '东风悦达 起亚',
        tehuiTxt: `特惠方案：<p>分期享受2年无息，置换补贴2000     赠送礼包 ：2000元：全车膜，皮质地胶，行车记录仪</p>`,
        car: {
            carImg: 'imgs/resources/cars/13-dongfengyuedaqiya.png',
            priceImg: 'imgs/resources/prices/13-dongfengyuedaqiya.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌十三厂：东风悦达·起亚 4s 店', '东风悦达 起亚   焕驰   白  1.4手标配');
            },
            function () {
                window.location.href = '#';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/13-dongfengyuedaqiya.png',
            shopDes: `山西大昌昇亚汽车销售服务有限公司是山西大昌汽车集团有限公司旗下的第十三家子公司，是东风悦达起亚有限公司授权的4S店，公司成立于2010年5月18日，公司位于太原市平阳南路88号，目前所销售车型有K5、K3、K2、KX3、KX5、KXcross、焕驰、KX7、凯绅。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/13-dongfengyuedaqiya/1.png',
            carName: '起亚 KX CROSS',
            carDes: '1.4自中配',
            carPrice: '79900',
            click: function () {
                goToCarOrderPage('大昌十三厂：东风悦达·起亚 4s 店', '起亚 KX CROSS   1.4自中配');
            }
        }, {
            carImg: 'imgs/resources/hots/13-dongfengyuedaqiya/2.png',
            carName: '起亚 KX3',
            carDes: ' 1.6自中配',
            carPrice: '117000',
            click: function () {
                goToCarOrderPage('大昌十三厂：东风悦达·起亚 4s 店', '起亚 KX3   1.6自中配');
            }
        }, {
            carImg: 'imgs/resources/hots/13-dongfengyuedaqiya/3.png',
            carName: '起亚 福瑞迪',
            carDes: '1.6手标配',
            carPrice: '70800',
            click: function () {
                goToCarOrderPage('大昌十三厂：东风悦达·起亚 4s 店', '起亚 福瑞迪   1.6手标配');
            }
        }, {
            carImg: 'imgs/resources/hots/13-dongfengyuedaqiya/4.png',
            carName: '起亚 智跑',
            carDes: '2.0自标配',
            carPrice: '127800',
            click: function () {
                goToCarOrderPage('大昌十三厂：东风悦达·起亚 4s 店', '起亚 智跑   2.0自标配');
            }
        }]
    },
    '14-fengtianweichi': {
        title: '丰田威驰FS',
        tehuiTxt: `特惠方案：<p>订车即可获得4次定保通，详情咨询 4S店</p>`,
        car: {
            carImg: 'imgs/resources/cars/14-fengtianweichi.png',
            priceImg: 'imgs/resources/prices/14-fengtianweichi.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌十四厂：一汽丰田 4s 店', '丰田威驰FS   白、红  1.3LCVT锋锐版');
            },
            function () {
                window.location.href = 'http://m.dcsc520.com/sale/sale_info.html?skuId=5aaa1ab76e516e058871b1dc';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/14-fengtianweichi.png',
            shopDes: `长治大昌丰田汽车销售服务有限公司始建于2007年7月，经过近几年的不断发展，形成了集整车销售、售后服务、配件供应、信息反馈为一体的4S汽车专营店。公司在发展过程中坚持以“客户满意就是我们的目标” 为服务宗旨，把内强素质、外树形象、提高效率、强化服务作为第一要务。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/14-fengtianweichi/1.png',
            carName: '丰田 威驰FS',
            carDes: '锋锐版',
            carPrice: '74800',
            click: function () {
                goToCarOrderPage('大昌十四厂：一汽丰田 4s 店', '丰田 威驰FS   锋锐版');
            }
        }, {
            carImg: 'imgs/resources/hots/14-fengtianweichi/2.png',
            carName: '丰田 rav4荣放',
            carDes: '风尚版',
            carPrice: '186800',
            click: function () {
                goToCarOrderPage('大昌十四厂：一汽丰田 4s 店', '丰田 rav4荣放   风尚版');
            }
        }]
    },
    '15-fengtiankaluola': {
        title: '丰田卡罗拉',
        tehuiTxt: `特惠方案：<p>分期享受1年无息，购车送价值3000元精品太阳膜（侧、后）+真皮座椅</p>`,
        car: {
            carImg: 'imgs/resources/cars/15-fengtiankaluola.png',
            priceImg: 'imgs/resources/prices/15-fengtiankaluola.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌十五厂：一汽丰田 4s 店', '丰田卡罗拉 白 1.2自动GL');
            },
            function () {
                window.location.href = 'http://m.dcsc520.com/sale/sale_info.html?skuId=5aaa1c4c6e516e058871b1e3';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/15-fengtiankaluola.png',
            shopDes: `忻州大昌丰田汽车销售服务有限公司成立于2011年，是丰田特约4S维修服务中心，具有“整车销售、配件供应、维修服务、信息反馈” 功能的一汽丰田汽车4S店，是享有最高荣誉的红马家店，是山西唯一一家丰田全国十佳经销店，2011年一汽丰田全国AAA快修优秀店、钣喷道场改善优秀店。主要销售系列国产丰田汽车，包括：威驰、花冠、卡罗拉、卡罗拉双擎、普瑞斯、锐志、皇冠、全新RAV4荣放、普拉多、兰德酷路泽、柯斯达等车型。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/15-fengtiankaluola/1.png',
            carName: '丰田 皇冠',
            carDes: '2017运动版',
            carPrice: '262800',
            click: function () {
                goToCarOrderPage('大昌十五厂：一汽丰田 4s 店', '丰田 皇冠   2017运动版');
            }
        }, {
            carImg: 'imgs/resources/hots/15-fengtiankaluola/2.png',
            carName: '丰田 威驰',
            carDes: '自动创行版',
            carPrice: '80800',
            click: function () {
                goToCarOrderPage('大昌十五厂：一汽丰田 4s 店', '丰田 威驰   自动创行版');
            }
        }]
    },
    '18-fute': {
        title: '福特 福睿斯',
        tehuiTxt: `特惠方案：<p>1800元原厂侧挡膜+680元大包围脚垫+290元后仓垫+130元把套+75元掸子+35元香水</p>`,
        car: {
            carImg: 'imgs/resources/cars/18-fute.png',
            priceImg: 'imgs/resources/prices/18-fute.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌十八厂：福特 4s 店', '福特 福睿斯  雅典白  1.5手动舒适型');
            },
            function () {
                window.location.href = '#';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/18-fute.png',
            shopDes: `吕梁大昌汽车销售有限公司成立于2011年5月18日,是长安福特有限公司授权的集 “汽车销售、汽车维修、配件销售、信息咨询”一位体的专营店，代理销售长安福特蒙迪欧、福克斯、嘉年华及原装进口福特翼虎、林肯领航员全系列车型。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/18-fute/1.png',
            carName: '福特 金牛座',
            carDes: '豪华型',
            carPrice: '248800',
            click: function () {
                goToCarOrderPage('大昌十八厂：福特 4s 店', '福特 金牛座   豪华型');
            }
        }, {
            carImg: 'imgs/resources/hots/18-fute/2.png',
            carName: '福特 翼虎',
            carDes: ' 两驱精翼型',
            carPrice: '148800',
            click: function () {
                goToCarOrderPage('大昌十八厂：福特 4s 店', '福特 翼虎   两驱精翼型');
            }
        }, {
            carImg: 'imgs/resources/hots/18-fute/3.png',
            carName: '福特 福克斯',
            carDes: '手动舒适型',
            carPrice: '95800',
            click: function () {
                goToCarOrderPage('大昌十八厂：福特 4s 店', '福特 福克斯   手动舒适型');
            }
        }, {
            carImg: 'imgs/resources/hots/18-fute/4.png',
            carName: '福特 国产锐界',
            carDes: '两驱豪锐型',
            carPrice: '287800',
            click: function () {
                goToCarOrderPage('大昌十八厂：福特 4s 店', '福特 国产锐界   两驱豪锐型');
            }
        }]
    },
    '20-dazhongmaiteng': {
        title: '大众迈腾B8',
        tehuiTxt: `特惠方案：<p>0首付，三年0利息，分期当天可提车，置换补贴最高8000元，赠送3000大礼包</p>`,
        car: {
            carImg: 'imgs/resources/cars/20-dazhongmaiteng.png',
            priceImg: 'imgs/resources/prices/20-dazhongmaiteng.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌二十厂：一汽大众 4s 店', '大众迈腾B8  幻影黑   1.8T尊贵型全带预紧');
            },
            function () {
                window.location.href = 'http://m.dcsc520.com/sale/sale_info.html?skuId=5aaa2d1c6e516e058871b200';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/20-dazhongmaiteng.png',
            shopDes: `山西吕梁大昌众达汽车服务有限公司,成立于2011年5月18日，注册资金800万元，坐落在吕梁市离石区高速西口汽贸园内，是大昌集团一家全资子公司，也是吕梁市唯一一家集汽车销售、维修服务、配件供应、信息管理、置换装潢等多种汽车相关产业经营为于一体的一汽-大众品牌4S店。`,
        },
        features: [{
                title: '超值抵',
                des: '交200抵3880大礼包！',
                time: '3.17-3.18'
            },
            {
                title: '轻松购',
                des: '分期购车首付低至20%',
                time: '3.17-3.18'
            },
            {
                title: '优惠抵',
                des: '置换补贴最高享160000元',
                time: '3.17-3.18'
            }
        ],
        hotCars: [{
            carImg: 'imgs/resources/hots/20-dazhongmaiteng/1.png',
            carName: '大众 速腾GP',
            carDes: '自动舒适型',
            carPrice: '130800',
            click: function () {
                goToCarOrderPage('大昌二十厂：一汽大众 4s 店', '大众 速腾GP   自动舒适型');
            }
        }, {
            carImg: 'imgs/resources/hots/20-dazhongmaiteng/2.png',
            carName: '大众 迈腾B8',
            carDes: ' 尊贵型全带预紧',
            carPrice: '239000',
            click: function () {
                goToCarOrderPage('大昌二十厂：一汽大众 4s 店', '大众 迈腾B8   尊贵型全带预紧');
            }
        }, {
            carImg: 'imgs/resources/hots/20-dazhongmaiteng/3.png',
            carName: '大众CC',
            carDes: '1.8l尊贵型',
            carPrice: '244000',
            click: function () {
                goToCarOrderPage('大昌二十厂：一汽大众 4s 店', '大众CC   1.8l尊贵型');
            }
        }, {
            carImg: 'imgs/resources/hots/20-dazhongmaiteng/4.png',
            carName: '大众高尔夫GP',
            carDes: '自动舒适型',
            carPrice: '132900',
            click: function () {
                goToCarOrderPage('大昌二十厂：一汽大众 4s 店', '大众高尔夫GP   自动舒适型');
            }
        }]
    },
    '21-aodiQ5': {
        title: '奥迪Q5',
        tehuiTxt: `特惠方案：<p>分期价格326000元，首付60% 18期0利率</p>`,
        car: {
            carImg: 'imgs/resources/cars/21-aodiQ5.png',
            priceImg: 'imgs/resources/prices/21-aodiQ5.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌二十一厂：奥迪 4s 店', '奥迪Q5  白  进取型');
            },
            function () {
                window.location.href = '#';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/21-aodiQ5.png',
            shopDes: `山西吕梁大昌众达汽车服务有限公司,成立于2011年5月18日，注册资金800万元，坐落在吕梁市离石区高速西口汽贸园内，是大昌集团一家全资子公司，也是吕梁市唯一一家集汽车销售、维修服务、配件供应、信息管理、置换装潢等多种汽车相关产业经营为于一体的一汽-大众品牌4S店。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/21-aodiQ5/1.png',
            carName: '奥迪 A3',
            carDes: '三厢风尚型',
            carPrice: '213000',
            click: function () {
                goToCarOrderPage('大昌二十一厂：奥迪 4s 店', '奥迪 A3   三厢风尚型');
            }
        }, {
            carImg: 'imgs/resources/hots/21-aodiQ5/2.png',
            carName: '奥迪Q5',
            carDes: ' 进取型',
            carPrice: '330000',
            click: function () {
                goToCarOrderPage('大昌二十一厂：奥迪 4s 店', '奥迪Q5   进取型');
            }
        }]
    },
    '23-aodiA4l': {
        title: '奥迪A4L',
        tehuiTxt: `特惠方案：<p>首付低至20% 18-24期0利息，置换最高万元补贴，送5000元装潢大礼包</p>`,
        car: {
            carImg: 'imgs/resources/cars/23-aodiA4l.png',
            priceImg: 'imgs/resources/prices/23-aodiA4l.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌二十三厂：奥迪 4s 店', '奥迪A4L  白金、黑   2.0T进取18款');
            },
            function () {
                window.location.href = 'http://m.dcsc520.com/sale/sale_info.html?skuId=5aaa2eb76e516e058871b204';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/23-aodiA4l.png',
            shopDes: `山西大昌华源汽车销售服务有限公司成立于二零一四年五月十八日，位于晋中市榆次区迎宾西街延伸段。是晋中地区首家由一汽-大众汽车有限公司授权，奥迪品牌全球统一新标准建成的晋中规模最大，功能最全，标准最高的奥迪城市展厅，是晋中地区奥迪品牌唯一的世界级体验中心。主要经营范畴为：一汽-大众奥迪A3、A4L、A6L、Q3、Q5进口奥迪A1、A5、A7、A8L、Q7、TT、S6、S8、SQ5等车型的整车销售、售后维修、配件供应以及信息反馈。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/23-aodiA4l/1.png',
            carName: '奥迪A4L',
            carDes: '进取18款型',
            carPrice: '266000',
            click: function () {
                goToCarOrderPage('大昌二十三厂：奥迪 4s 店', '奥迪A4L   进取18款');
            }
        }, {
            carImg: 'imgs/resources/hots/23-aodiA4l/2.png',
            carName: '奥迪A6L',
            carDes: ' 时尚型',
            carPrice: '373000',
            click: function () {
                goToCarOrderPage('大昌二十三厂：奥迪 4s 店', '奥迪A6L   时尚型');
            }
        }, {
            carImg: 'imgs/resources/hots/23-aodiA4l/3.png',
            carName: '奥迪Q3',
            carDes: '2017款时尚型',
            carPrice: '225000',
            click: function () {
                goToCarOrderPage('大昌二十三厂：奥迪 4s 店', '奥迪Q3   2017款时尚型');
            }
        }, {
            carImg: 'imgs/resources/hots/23-aodiA4l/4.png',
            carName: '奥迪Q7',
            carDes: '舒适型',
            carPrice: '679000',
            click: function () {
                goToCarOrderPage('大昌二十三厂：奥迪 4s 店', '奥迪Q7   舒适型');
            }
        }]
    },
    '24-aodiA3': {
        title: '奥迪A3三厢',
        tehuiTxt: `特惠方案：<p>尊享4年不限公里整车质保，5年10万公里免费保养;最低首付10%,18期0息，一张身份证贷走;置换补贴最高8000元</p>`,
        car: {
            carImg: 'imgs/resources/cars/24-aodiA3.png',
            priceImg: 'imgs/resources/prices/24-aodiA3.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌二十四厂：奥迪 4s 店', '奥迪A3三厢  白   时尚型');
            },
            function () {
                window.location.href = 'http://m.dcsc520.com/sale/sale_info.html?skuId=5a9670516e516e2d7aef775c';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/24-aodiA3.png',
            shopDes: `开创格局，引领未来！运城大昌奥迪4S店成立于2015年1月6日，是按照奥迪全球统一标准建设而成，是运城地区唯一奥迪品牌授权经销商。运城大昌奥迪隶属于山西大昌汽车集团，是大昌集团下属36家独资子公司之一。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/24-aodiA3/1.png',
            carName: '奥迪 A3三厢',
            carDes: '时尚型',
            carPrice: '197000',
            click: function () {
                goToCarOrderPage('大昌二十四厂：奥迪 4s 店', '奥迪 A3三厢   时尚型');
            }
        }, {
            carImg: 'imgs/resources/hots/24-aodiA3/2.png',
            carName: '奥迪 A3三厢',
            carDes: ' 时尚型',
            carPrice: '195000',
            click: function () {
                goToCarOrderPage('大昌二十四厂：奥迪 4s 店', '奥迪 A3三厢   时尚型');
            }
        }, {
            carImg: 'imgs/resources/hots/24-aodiA3/3.png',
            carName: '奥迪 A5两门',
            carDes: '时尚型',
            carPrice: '398000',
            click: function () {
                goToCarOrderPage('大昌二十四厂：奥迪 4s 店', '奥迪 A5两门   时尚型');
            }
        }, {
            carImg: 'imgs/resources/hots/24-aodiA3/4.png',
            carName: '奥迪 S3',
            carDes: 'Limousin',
            carPrice: '355000',
            click: function () {
                goToCarOrderPage('大昌二十四厂：奥迪 4s 店', '奥迪 S3   Limousin');
            }
        }]
    },
    '25-luhulansheng': {
        title: '路虎揽胜',
        tehuiTxt: `特惠方案：<p>分期享受2年无息，购车送价值10000元精品大礼包</p>`,
        car: {
            carImg: 'imgs/resources/cars/25-luhulansheng.png',
            priceImg: 'imgs/resources/prices/25-luhulansheng.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌二十五厂：捷豹路虎 4s 店', '路虎揽胜  圣托里尼黑    2017款 3.0  V6  SC  Vogue加长版');
            },
            function () {
                window.location.href = 'http://m.dcsc520.com/sale/sale_info.html?skuId=5a9a7d1e6e516e7fa081cdf3';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/25-luhulansheng.png',
            shopDes: `捷豹路虎(英文简称JLR)是一家拥有两个顶级奢华品牌的英国汽车制造商，属于印度塔塔汽车旗下。公司主要业务是开发、生产和销售捷豹和路虎汽车。其中拥有辉煌历史的捷豹是世界上生产豪华运动轿车和跑车的主要制造商，而路虎则是全球生产顶级奢华的全地形4X4汽车制造商。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/25-luhulansheng/1.png',
            carName: '路虎 F-Pace',
            carDes: '两驱都市尊享版',
            carPrice: '480000',
            click: function () {
                goToCarOrderPage('大昌二十五厂：捷豹路虎 4s 店', '路虎 F-Pace   两驱都市尊享版');
            }
        }, {
            carImg: 'imgs/resources/hots/25-luhulansheng/2.png',
            carName: '路虎 XJ',
            carDes: ' 2016款 两驱典雅商务版',
            carPrice: '630000',
            click: function () {
                goToCarOrderPage('大昌二十五厂：捷豹路虎 4s 店', '路虎 XJ   2016款 两驱典雅商务版');
            }
        }, {
            carImg: 'imgs/resources/hots/25-luhulansheng/3.png',
            carName: '路虎 发现五',
            carDes: '2017款 3.0 V6 S',
            carPrice: '718000',
            click: function () {
                goToCarOrderPage('大昌二十五厂：捷豹路虎 4s 店', '路虎 发现五   2017款 3.0 V6 S');
            }
        }, {
            carImg: 'imgs/resources/hots/25-luhulansheng/4.png',
            carName: '路虎 揽胜',
            carDes: '2017款 3.0 V6 SC Vogue',
            carPrice: '1388000',
            click: function () {
                goToCarOrderPage('大昌二十五厂：捷豹路虎 4s 店', '路虎 揽胜   2017款 3.0 V6 SC Vogue');
            }
        }]
    },
    '27-aodiA6l': {
        title: '奥迪A6L',
        tehuiTxt: `特惠方案：<p>金融政策补贴，首付60%，18期0利息。置换补贴政策。精品大礼包。</p>`,
        car: {
            carImg: 'imgs/resources/cars/27-aodiA6l.png',
            priceImg: 'imgs/resources/prices/27-aodiA6l.png'
        },
        btns: [
            function () {
                goToCarOrderPage('大昌二十七厂：奥迪 4s 店', '奥迪A6L   季风灰   1.8T   进取');
            },
            function () {
                window.location.href = 'http://m.dcsc520.com/sale/sale_info.html?skuId=5aaa313c6e516e058871b208';
            }
        ],
        shopInfo: {
            shopImg: 'imgs/resources/4sShops/27-aodiA6l.png',
            shopDes: `山西大昌信源汽车销售服务有限公司4S店于2017年5月18日正式营业，山西大昌信源汽车销售服务有限公司隶（以下简称大昌信源奥迪）属于山西大昌汽车集团、信源奥迪是大昌集团第五家奥迪4S店。`,
        },
        hotCars: [{
            carImg: 'imgs/resources/hots/27-aodiA6l/1.png',
            carName: '奥迪A4L',
            carDes: '时尚型',
            carPrice: '309000',
            click: function () {
                goToCarOrderPage('大昌二十七厂：奥迪 4s 店', '奥迪A4L   时尚型');
            }
        }, {
            carImg: 'imgs/resources/hots/27-aodiA6l/2.png',
            carName: '奥迪A6L',
            carDes: ' 进取型',
            carPrice: '362000',
            click: function () {
                goToCarOrderPage('大昌二十七厂：奥迪 4s 店', '奥迪A6L   进取型');
            }
        }, {
            carImg: 'imgs/resources/hots/27-aodiA6l/3.png',
            carName: '奥迪Q3',
            carDes: '时尚型',
            carPrice: '240000',
            click: function () {
                goToCarOrderPage('大昌二十七厂：奥迪 4s 店', '奥迪Q3   时尚型');
            }
        }, {
            carImg: 'imgs/resources/hots/27-aodiA6l/4.png',
            carName: '奥迪Q5',
            carDes: '进取型',
            carPrice: '333000',
            click: function () {
                goToCarOrderPage('大昌二十七厂：奥迪 4s 店', '奥迪Q5   进取型');
            }
        }]
    }
};