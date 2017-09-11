(function() {

    var locationData;

    $.ajax({
        url: "data.json",
        type: "GET",
        dataType: 'json',
        async: true,
        success: function(result) {
            locationData = result;
            fillSelect(result);
        }
    });

    $("#formLeft").click(function(e) {
        $("#leftList").toggle();
        $("#rightList").css("display", "none");
        $("#leftTitle").addClass('active');
        if ($("#provinceTitle").css("border-bottom-width") === '0px') {
            $("#provinceTitle").css("border-bottom", "1px solid RGB(169,169,169)");
            $("#provinceList").css("border-top", "1px solid RGB(169,169,169)");
            $("#leftTitle").removeClass('active');
        } else {
            $("#provinceTitle").css("border-bottom", "none");
            $("#provinceList").css("border-top", "none");
            e.stopPropagation();
        }
    })

    $("#formRight").click(function(e) {
        $("#rightList").toggle();
        $("#leftList").css("display", "none");
        $("#rightTitle").addClass('active');
        if ($("#cityTitle").css("border-bottom-width") === '0px') {
            $("#cityTitle").css("border-bottom", "1px solid RGB(169,169,169)");
            $("#cityList").css("border-top", "1px solid RGB(169,169,169)");
            $("#rightTitle").removeClass('active');
        } else {
            $("#cityTitle").css("border-bottom", "none");
            $("#cityList").css("border-top", "none");
            e.stopPropagation();
        }
    })


    $(document).click(function(e) {
        if ($(e.target).parent().prop('class') === "city") {
            var cityIndex = $(e.target).attr('data-index');
            var cityName = $(e.target).children().text();
            $("#rightTitle").text(cityName);
        }
        $("#rightList").hide();
        $("#cityTitle").css("border-bottom", "1px solid RGB(169,169,169)");
        $("#cityList").css("border-top", "1px solid RGB(169,169,169)");
        $("#leftTitle").removeClass('active');
    }) /* 获取地区*/

    $(document).click(function(e) {
        if ($(e.target).parent().prop('class') === "province") {
            var provinceIndex = $(e.target).attr('data-index');
            var provinceName = locationData[provinceIndex].provinceKey;
            var cityResult = locationData[provinceIndex].cityList;
            $(".city").html('');
            $('#rightTitle').text('选择一个地区*');
            for (i = 0; i < cityResult.length; i++) {
                $(".city").append("<li data-index='" + i + "'><span>" + cityResult[i].cityKey + "</span></li>")
            }
            $("#leftTitle").text(provinceName);
        }

        $("#leftList").hide();
        $("#provinceTitle").css("border-bottom", "1px solid RGB(169,169,169)");
        $("#provinceList").css("border-top", "1px solid RGB(169,169,169)");
        $("#rightTitle").css("color", "RGB(161,161,161)")
        $("#cityTitle").css("border", "1px solid RGB(169,169,169)");
        $("#leftTitle").removeClass('active');
    })


    function fillSelect(result) {
        for (i = 0; i < result.length; i++) {
            $(".province").append("<li data-index='" + i + "'><span>" + result[i].provinceKey + "</span></li>")
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
                BottomCss();
            } else {
                $('#rightList').css('top', '0%');
                BottomCss();
            }
        }

        function BottomCss() {
            $("#cityTitle").css("border-bottom", "none");
            $("#cityTitle").css("border-top", "1px solid RGB(169,169,169)");
            $("#cityList").css("border-top", "none");
            $("#cityList").css("border-bottom", "1px solid RGB(169,169,169)");
            $("#cityList").css("box-shadow", "0 -4px 4px rgba(0,0,0,0)");
            $("#cityList").css("box-shadow", "0px 4px 4px rgba(0, 0, 0, 0.15)");
        }

        if (height2 + $("#cityList")[0].offsetHeight >= $(window).height()) {
            if (window.innerWidth <= 767) {
                $('#rightList').css("top", "-91% ");
                TopCss();
            } else {
                $('#rightList').css('top', '-116%');
                TopCss();
            }
        }

        function TopCss() {
            $("#cityTitle").css("border-top", "none");
            $("#cityTitle").css("border-bottom", "1px solid RGB(169,169,169)");
            $("#cityList").css("border-top", "1px solid RGB(169,169,169)");
            $("#cityList").css("border-bottom", "none");
            $("#cityList").css("box-shadow", "0px 4px 4px rgba(0, 0, 0, 0)");
            $("#cityList").css("box-shadow", "0 -4px 4px rgba(0,0,0,0.15)");
        }

    });


})()