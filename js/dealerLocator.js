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

    $("#form-left").click(function(e) {
        $("#left-list").toggle();
        $("#right-list").css("display", "none");
        $("#left-title").addClass('active');
        if ($("#provinceTitle").css("border-bottom-width") === '0px') {
            $("#provinceTitle").css("border-bottom", "1px solid RGB(169,169,169)");
            $("#provinceList").css("border-top", "1px solid RGB(169,169,169)");
            $("#left-title").removeClass('active');
        } else {
            $("#provinceTitle").css("border-bottom", "none");
            $("#provinceList").css("border-top", "none");
            e.stopPropagation();
        }
    })

    $("#form-right").click(function(e) {
        $("#right-list").toggle();
        $("#left-list").css("display", "none");
        $("#right-title").addClass('active');
        if ($("#cityTitle").css("border-bottom-width") === '0px') {
            $("#cityTitle").css("border-bottom", "1px solid RGB(169,169,169)");
            $("#cityList").css("border-top", "1px solid RGB(169,169,169)");
            $("#right-title").removeClass('active');
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
            $("#right-title").text(cityName);
        }
        $("#right-list").hide();
        $("#cityTitle").css("border-bottom", "1px solid RGB(169,169,169)");
        $("#cityList").css("border-top", "1px solid RGB(169,169,169)");
        console.log(1)
    }) /* 获取地区*/

    $(document).click(function(e) {
        if ($(e.target).parent().prop('class') === "province") {
            var provinceIndex = $(e.target).attr('data-index');
            var provinceName = locationData[provinceIndex].provinceKey;
            var cityResult = locationData[provinceIndex].cityList;
            $(".city").html('');
            $('#right-title').text('选择一个地区*');
            for (i = 0; i < cityResult.length; i++) {
                $(".city").append("<li data-index='" + i + "'><span>" + cityResult[i].cityKey + "</span></li>")
            }
            $("#left-title").text(provinceName);
        }

        $("#left-list").hide();
        $("#provinceTitle").css("border-bottom", "1px solid RGB(169,169,169)");
        $("#provinceList").css("border-top", "1px solid RGB(169,169,169)");
        $("#right-title").css("color", "RGB(161,161,161)")
        $("#cityTitle").css("border", "1px solid RGB(169,169,169)");
        console.log(2)
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
            $('#left-list').css('top', '0%');
            $("#provinceTitle").css("border-bottom", "none");
            $("#provinceTitle").css("border-top", "1px solid RGB(169,169,169)");
            $("#provinceList").css("border-top", "none");
            $("#provinceList").css("border-bottom", "1px solid RGB(169,169,169)");
            $("#provinceList").css("box-shadow", "0 -4px 4px rgba(0,0,0,0)");
            $("#provinceList").css("box-shadow", "0px 4px 4px rgba(0, 0, 0, 0.15)");
        }
        if (height + $("#provinceList")[0].offsetHeight >= $(window).height()) {
            $('#left-list').css('top', '-116%');
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
                $('#right-list').css('top', '30%');
                BottomCss();
            } else {
                $('#right-list').css('top', '0%');
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
                $('#right-list').css("top", "-91% ");
                TopCss();
            } else {
                $('#right-list').css('top', '-116%');
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