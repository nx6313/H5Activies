layui.define(['form', 'element'], function (exports) {
	Picker.init();
	var form = layui.form,
		element = layui.element;

	initAppPage({
		formRender: true,
		elmRender: true,
		pageTransitions: {
			startSlide: 5,
			mode: 24,
			infiniteLoop: false,
			touchIgnoreDomClass: 'touchIgnore',
			onSliderLoad: function (currentIndex) {
				let pageItemCount = $('ul.pageItemWrap').find('li.pageItem').length;
				element.progress('pageProgress', ((currentIndex + 1) / pageItemCount * 100) + '%');
			},
			onSlideAfter: function (newIndex, oldIndex, newElement, oldElement) {
				let pageItemCount = $('ul.pageItemWrap').find('li.pageItem').length;
				let pageProgressVal = (newIndex + 1) / pageItemCount * 100;
				element.progress('pageProgress', pageProgressVal + '%');
			}
		}
	});

	exports('partner', function (clickWhere, thiz) {
		if (clickWhere == 'playMusicToggle') {
			$(thiz).toggleClass('rotate');
			let oAudio = $(thiz).find('audio').get(0);
			if ($(thiz).hasClass('rotate')) {
				oAudio.play();
			} else {
				oAudio.pause();
			}
		}
	});
});

function toNextStep() {
	var curStepIndex = $('div.page6_step_wrap').find('span.cur_selected').index();
	var $stepForm = $('div.page6_form_wrap').find('div.step' + curStepIndex);
	var formInputItems = $stepForm.find('input[type=text]');
	for (var i = 0; i < formInputItems.length; i++) {
		var tip = $(formInputItems[i]).attr('tip');
		var input_type = $(formInputItems[i]).attr('inputype');
		if (!$(formInputItems[i]).val()) {
			alert(tip + '不能为空');
			return false;
		}
		if (input_type && input_type === 'phone') {
			if (!/^1[3|4|5|6|7|8][0-9]\d{8}$/.test($(formInputItems[i]).val().trim())) {
				alert('不是有效的' + tip);
				return false;
			}
		}
	}
	if (curStepIndex == 1) {
		var $formBtn = $('div.page6_form_wrap').find('div.form_btn');
		$formBtn.html('立即提交');
	}
	if (curStepIndex < 2) {
		$('div.page6_step_wrap').find('span').removeClass('cur_selected');
		$('div.page6_step_wrap').find('span:eq(' + (curStepIndex + 1) + ')').addClass('cur_selected');

		$('div.page6_form_wrap').find('div.form_wrap').removeClass('cur_selected');
		$('div.page6_form_wrap').find('div.form_wrap:eq(' + (curStepIndex + 1) + ')').addClass('cur_selected');
	} else {
		// 提交表单
	}
}

function showTimeSelectPicker(title, thiz) {
	Picker.instance({
		title: title,
		// clos: [{
		// 	// values: ['我是女士', '我是男士'],
		// 	// displayValues: ['0', '1']
		// }],
		confirmFn: (selected) => {
			$(thiz[0]).val(selected.selectDisplayValue);
			$(thiz[1]).val(selected.selectValue);
		}
	}).show();
}