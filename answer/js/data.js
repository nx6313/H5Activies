// 1.您家庭年收入有多少？A：1万-3万B：3万-5万 C：5万-8万
// 2.村内有多少辆汽车？A：0-30 B：30-50 C：50-80
// 3.您所在村里有多少人？A：0-100 B：100-200 C：200-300
// 4.你所在的区域是？填写答案
// 5.最近身边有保险到期的么？A：有 B：没有 C：很多
// 抽奖页面文字
// （2名）一等奖：购车代金券1000元，设置概率10%。（3名）二等奖：保险代金券200元，设置概率20%。（4名）三等奖：商城代金券20元，设置概率30%。
// http://s.we7.cc/module-6896.htm
var questionData = [{
    type: 'select',
    question: '您家庭年收入有多少？',
    answers: [{
        key: 'A',
        val: '1万-3万'
    }, {
        key: 'B',
        val: '3万-5万'
    }, {
        key: 'C',
        val: '5万-8万'
    }]
}, {
    type: 'select',
    question: '村内有多少辆汽车？',
    answers: [{
        key: 'A',
        val: '0-30'
    }, {
        key: 'B',
        val: '30-50'
    }, {
        key: 'C',
        val: '50-80'
    }]
}, {
    type: 'select',
    question: '您所在村里有多少人？',
    answers: [{
        key: 'A',
        val: '0-100'
    }, {
        key: 'B',
        val: '100-200'
    }, {
        key: 'C',
        val: '200-300'
    }]
}, {
    type: 'input',
    question: '你所在的区域是？'
}, {
    type: 'select',
    question: '最近身边有保险到期的么？',
    answers: [{
        key: 'A',
        val: '有'
    }, {
        key: 'B',
        val: '没有'
    }, {
        key: 'C',
        val: '很多'
    }]
}];