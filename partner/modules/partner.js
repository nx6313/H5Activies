var pageObj = null;
layui.define(['form', 'element'], function (exports) {
	Picker.init();
	var form = layui.form,
		element = layui.element;

	pageObj = initAppPage({
		formRender: true,
		elmRender: true,
		pageTransitions: {
			startSlide: 0,
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

	// 绑定文件选择预览
	$("#file").change(function (e) {
		if (e && (e.target || e.dataTransfer)) {
			var file = e.target.files[0] || e.dataTransfer.files[0];
			if (file) {
				var fileName = document.getElementById("file").files[0].name;

				var reader = new FileReader();
				reader.onload = function () {
					$("#userHeadImgShow").fadeIn();
					$("#userHeadImgShow").attr("src", this.result);
				}

				reader.readAsDataURL(file);

				var formData = new FormData();
				formData.append('file', file);
				$.ajax({
					url: "http://l.dachangjr.com/index.php?m=content&c=index&a=addimg",
					type: "post",
					data: formData,
					contentType: false,
					processData: false,
					mimeType: "multipart/form-data",
					success: function (data) {
						$('#headimgBackPath').val(data);
					},
					error: function (data) {
						console.log('-- error --');
						console.log(data);
					}
				});
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
		} else if (input_type && input_type === 'idcard') {
			if (!/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/.test($(formInputItems[i]).val().trim())) {
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
		var params = $('#partnerForm').serializeArray();
		var formData = {};
		for (x in params) {
			formData[params[x].name] = params[x].value;
		}
		console.log(formData);
		$.ajax({
			type: 'post',
			url: 'http://l.dachangjr.com/index.php?m=content&c=index&a=addhehuos',
			data: formData,
			success: function (msg) {
				console.log('提交结果：' + msg);
				if (msg == '1') {
					alert('提交成功');
					$('#partnerForm')[0].reset();
					$("#userHeadImgShow").attr("src", '');
					$("#userHeadImgShow").hide();
					$('div.page6_step_wrap').find('span').removeClass('cur_selected');
					$('div.page6_step_wrap').find('span:eq(0)').addClass('cur_selected');
					$('div.page6_form_wrap').find('div.form_wrap').removeClass('cur_selected');
					$('div.page6_form_wrap').find('div.form_wrap:eq(0)').addClass('cur_selected');
					pageObj.pt.goToSlide(0);
				} else {
					alert('提交失败，请稍后重试');
				}
			}
		});
	}
}

function showTimeSelectPicker(title, thiz, type) {
	var values = [];
	var displayValues = [];
	if (type == 'sex') {
		values = ['我是女士', '我是男士'];
		displayValues = ['女', '男'];
	} else if (type == 'education') {
		values = ['研究生', '本科', '大专', '高中', '中专', '初中', '小学'];
		displayValues = [];
	} else if (type == 'profession') {
		values = ['工人', '商人', '白领', '蓝领', '农民', '医生', '教师', '学生'];
		displayValues = [];
	} else if (type == 'goway') {
		values = ['步行', '公交', '汽车'];
		displayValues = [];
	}
	Picker.instance({
		title: title,
		clos: [{
			values: values,
			displayValues: displayValues
		}],
		confirmFn: (selected) => {
			$(thiz[0]).val(selected.selectDisplayValue);
			$(thiz[1]).val(selected.selectValue);
		}
	}).show();
}