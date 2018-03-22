function showTimeSelectPicker(title, thiz) {
    Picker.instance({
        title: title,
        clos: [{
            values: dcShops,
            displayValues: dcShopDisplayVals
        }],
        confirmFn: (selected) => {
            $(thiz).val(selected.selectDisplayValue);
        }
    }).show();
}

function submitOrder() {
    var userName = $($('#orderForm').get(0)['0']).val();
    var userPhone = $($('#orderForm').get(0)['1']).val();
    var orderTime = $($('#orderForm').get(0)['2']).val();
    var order4S = $($('#orderForm').get(0)['3']).val();
    var buyCarYix = $($('#orderForm').get(0)['4']).val();
    if (!userName) {
        alert('姓名不能为空');
        return false;
    }
    if (!userPhone) {
        alert('联系方式不能为空');
        return false;
    }
    if (!/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(userPhone.trim())) {
        alert('请输入正确的联系方式');
        return false;
    }
    if (!orderTime) {
        alert('预约到店时间不能为空');
        return false;
    }
    if (!order4S) {
        alert('预约 4s 店不能为空');
        return false;
    }
    if (!buyCarYix) {
        alert('意向车型不能为空');
        return false;
    }
    $('#orderForm').ajaxSubmit(function (data) {
        if (data && Number(data) === 1) {
            $('#orderForm').clearForm();
            alert('提交成功');
            goToIndexPage()
        }
    });
    return false;
}