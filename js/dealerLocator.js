(function() {

    var locationData;

    $.ajax({
        url: "data.json",
        type: "GET",
        dataType: 'json',
        async: true,
        success: function(result) {
            locationData = result;
            fillSelect(locationData, 'province');
        }
    });

    $("#formLeft").click(function(e) {
        $("#leftList").toggle();
        $("#leftTitle").toggleClass('active');
        $("#rightList").hide();
        $("#rightTitle").removeClass('active');
        $("#cityTitle").css("border", "1px solid RGB(169,169,169)");
        if ($("#leftTitle").prop('class').indexOf('active') !== -1) {
            $('#leftList').css('top', '0%');
            $("#provinceTitle").css("border-top", "1px solid RGB(169,169,169)");
            $("#provinceList").css("border-bottom", "1px solid RGB(169,169,169)");
            $("#provinceList").css("box-shadow", "0 -4px 4px rgba(0,0,0,0)");
            $("#provinceList").css("box-shadow", "0px 4px 4px rgba(0, 0, 0, 0.15)");
            $("#provinceTitle").css("border-bottom", "none");
            $("#provinceList").css("border-top", "none");
            $(window).scroll();
            e.stopPropagation();
        }
    });

    $("#formRight").click(function(e) {
        if ($('#leftTitle').text() !== '选择一个省市*') {
            $("#rightList").toggle();
            $("#rightTitle").toggleClass('active');
            $("#leftList").hide();
            $("#leftTitle").removeClass('active');
            $("#provinceTitle").css("border", "1px solid RGB(169,169,169)");
            if ($("#rightTitle").prop('class').indexOf('active') !== -1) {
                var divTopR = $("#cityList").offset().top;
                var viewTopR = $(window).scrollTop();
                var height2 = divTopR - viewTopR;
                if (window.innerWidth <= 767) {
                    $('#rightList').css('top', '30%');
                } else {
                    $('#rightList').css('top', '0%');
                }
                $("#cityTitle").css("border-top", "1px solid RGB(169,169,169)");
                $("#cityList").css("border-bottom", "1px solid RGB(169,169,169)");
                $("#cityList").css("box-shadow", "0 -4px 4px rgba(0,0,0,0)");
                $("#cityList").css("box-shadow", "0px 4px 4px rgba(0, 0, 0, 0.15)");
                $("#cityTitle").css("border-bottom", "none");
                $("#cityList").css("border-top", "none");
                $(window).scroll();
                e.stopPropagation();
            }
        }
    });

    $(document).click(function(e) {
        if ($(e.target).parent().prop('id') === "city") {
            var cityName = $(e.target).children().text();
            $("#rightTitle").text(cityName);
        }
        if ($(e.target).parent().prop('id') === "province") {
            var provinceIndex = $(e.target).attr('data-index');
            var provinceName = locationData[provinceIndex].provinceValue;
            var cityResult = locationData[provinceIndex].cityList;
            $("#city").html('');
            $('#rightTitle').text('选择一个地区*');
            fillSelect(cityResult, 'city');
            $("#leftTitle").text(provinceName);
        }

        $("#leftList").hide();
        $("#rightList").hide();

        $("#provinceTitle").css("border", "1px solid RGB(169,169,169)");
        $("#provinceList").css("border", "1px solid RGB(169,169,169)");

        if ($('#leftTitle').text() === '选择一个省市*') {
            $("#cityTitle").css("border", "1px solid RGBA(169,169,169,0.5)");
            $("#cityList").css("border", "1px solid RGBA(169,169,169,0.5)");
        } else {
            $("#cityTitle").css("border", "1px solid RGB(169,169,169)");
            $("#cityList").css("border", "1px solid RGB(169,169,169)");
            $('#rightTitle').css('color', '#3b3b3b');
        }

        $("#leftTitle").removeClass('active');
        $("#rightTitle").removeClass('active');
    });

    function fillSelect(data, type) {
        for (i = 0; i < data.length; i++) {
            $('#' + type).append("<li data-index='" + i + "'><span>" + data[i][type + 'Value'] + "</span></li>")
        }
    }

    $(window).scroll(function() {
        //左侧下拉框上下变化
        var divTopleft = $("#provinceList").offset().top;
        var viewTopleft = $(window).scrollTop();
        var height = divTopleft - viewTopleft;
        if (height < 0) {
            $('#leftList').css('top', '0%');
            $("#provinceTitle").css("border-bottom", "none");
            $("#provinceTitle").css("border-top", "1px solid RGB(169,169,169)");
            $("#provinceList").css("border-top", "none");
            $("#provinceList").css("border-bottom", "1px solid RGB(169,169,169)");
            $("#provinceList").css("box-shadow", "0 -4px 4px rgba(0,0,0,0)");
            $("#provinceList").css("box-shadow", "0px 4px 4px rgba(0, 0, 0, 0.15)");
        }
        if (height + $("#provinceList")[0].offsetHeight >= $(window).height()) {
            $('#leftList').css('top', '-116%');
            $("#provinceTitle").css("border-top", "none");
            $("#provinceTitle").css("border-bottom", "1px solid RGB(169,169,169)");
            $("#provinceList").css("border-top", "1px solid RGB(169,169,169)");
            $("#provinceList").css("border-bottom", "none");
            $("#provinceList").css("box-shadow", "0px 4px 4px rgba(0, 0, 0, 0)");
            $("#provinceList").css("box-shadow", "0 -4px 4px rgba(0,0,0,0.15)");
        }
        //右侧下拉框上下变化
        var divTopR = $("#cityList").offset().top;
        var viewTopR = $(window).scrollTop();
        var height2 = divTopR - viewTopR;
        if (height2 < 0) {
            if (window.innerWidth <= 767) {
                $('#rightList').css('top', '30%');
            } else {
                $('#rightList').css('top', '0%');
            }
            $("#cityTitle").css("border-bottom", "none");
            $("#cityTitle").css("border-top", "1px solid RGB(169,169,169)");
            $("#cityList").css("border-top", "none");
            $("#cityList").css("border-bottom", "1px solid RGB(169,169,169)");
            $("#cityList").css("box-shadow", "0 -4px 4px rgba(0,0,0,0)");
            $("#cityList").css("box-shadow", "0px 4px 4px rgba(0, 0, 0, 0.15)");
        }

        if (height2 + $("#cityList")[0].offsetHeight >= $(window).height()) {
            if (window.innerWidth <= 767) {
                var top = $("#cityList").height() - 17;
                $('#rightList').css("top", -top + 'px');
            } else {
                var top = $("#cityList").height() + 45;
                $('#rightList').css('top', -top + 'px');
            }
            $("#cityTitle").css("border-top", "none");
            $("#cityTitle").css("border-bottom", "1px solid RGB(169,169,169)");
            $("#cityList").css("border-top", "1px solid RGB(169,169,169)");
            $("#cityList").css("border-bottom", "none");
            $("#cityList").css("box-shadow", "0px 4px 4px rgba(0, 0, 0, 0)");
            $("#cityList").css("box-shadow", "0 -4px 4px rgba(0,0,0,0.15)");
        }
    });
})()