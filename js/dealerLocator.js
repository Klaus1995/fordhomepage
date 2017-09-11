(function() {

    $.ajax({
        url: "data.json",
        type: "GET",
        dataType: 'json',
        async: true,
        success: function(result) {
            fillSelect(result);
        }
    });

    $("#form-left").click(function(e) {
        $("#left-list").toggle();
        $("#right-list").css("display", "none");
        $("#left-title").addClass('active');
        if ($("#list1").css("border-bottom-width") === '0px') {
            $("#list1").css("border-bottom", "1px solid RGB(169,169,169)");
            $("#list3").css("border-top", "1px solid RGB(169,169,169)");
        } else {
            $("#list1").css("border-bottom", "none");
            $("#list3").css("border-top", "none");
        }
        e.stopPropagation();
    })



    $("#form-right").click(function(e) {
        $("#right-list").toggle();
        $("#left-list").css("display", "none");
        $("#right-title").addClass('active');
        if ($("#list2").css("border-bottom-width") === '0px') {
            $("#list2").css("border-bottom", "1px solid RGB(169,169,169)");
            $("#list4").css("border-top", "1px solid RGB(169,169,169)");
        } else {
            $("#list2").css("border-bottom", "none");
            $("#list4").css("border-top", "none");
        }
        e.stopPropagation();
    })


    $(document).click(function(e) {

        if ($(e.target).parent().prop('class') === "city") {
            var cityName = $(e.target).children().text();
            $("#right-title").text(cityName);
        }
        $("#right-list").hide();
        $("#list2").css("border-bottom", "1px solid RGB(169,169,169)");
        $("#list4").css("border-top", "1px solid RGB(169,169,169)");
        $("#list2").css("border", "1px solid #2d96cd");
    }) /* 获取地区*/


    function fillSelect(result) {
        for (i = 0; i < result.length; i++) {
            $(".province").append("<li data-index='" + i + "'><span>" + result[i].provinceKey + "</span></li>")
        }
        $(document).click(function(e) {
            if ($(e.target).parent().prop('class') === "province") {
                var provinceIndex = $(e.target).attr('data-index');
                var provinceName = result[provinceIndex].provinceKey;
                var cityResult = result[provinceIndex].cityList;
                $(".city").html('');
                $('#right-title').text('选择一个地区*');
                for (i = 0; i < cityResult.length; i++) {
                    $(".city").append("<li data-index='" + i + "'><span>" + cityResult[i].cityKey + "</span></li>")
                }
                $("#left-title").text(provinceName);
            }

            $("#left-list").hide();
            $("#list1").css("border-bottom", "1px solid RGB(169,169,169)");
            $("#list3").css("border-top", "1px solid RGB(169,169,169)");
            $("#list1").css("border", "1px solid #2d96cd");
            $("#right-title").css("color", "RGB(161,161,161)")
            $("#list2").css("border", "1px solid RGB(169,169,169)");

        })

    }


    $(window).scroll(function() {
        //左侧下拉框上下变化
        var divTopleft = $("#list3").offset().top;
        var viewTopleft = $(window).scrollTop();
        var height = divTopleft - viewTopleft;
        if (height < 0) {
            $('#left-list').css('top', '0%');
            $("#list1").css("border-bottom", "none");
            $("#list1").css("border-top", "1px solid RGB(169,169,169)");
            $("#list3").css("border-top", "none");
            $("#list3").css("border-bottom", "1px solid RGB(169,169,169)");
            $("#list3").css("box-shadow", "0 -4px 4px rgba(0,0,0,0)");
            $("#list3").css("box-shadow", "0px 4px 4px rgba(0, 0, 0, 0.15)");
        }
        if (height + $("#list3")[0].offsetHeight >= $(window).height()) {
            $('#left-list').css('top', '-116%');
            $("#list1").css("border-top", "none");
            $("#list1").css("border-bottom", "1px solid RGB(169,169,169)");
            $("#list3").css("border-top", "1px solid RGB(169,169,169)");
            $("#list3").css("border-bottom", "none");
            $("#list3").css("box-shadow", "0px 4px 4px rgba(0, 0, 0, 0)");
            $("#list3").css("box-shadow", "0 -4px 4px rgba(0,0,0,0.15)");
        }
        //右侧下拉框上下变化
        var divTopR = $("#list4").offset().top;
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
            $("#list2").css("border-bottom", "none");
            $("#list2").css("border-top", "1px solid RGB(169,169,169)");
            $("#list4").css("border-top", "none");
            $("#list4").css("border-bottom", "1px solid RGB(169,169,169)");
            $("#list4").css("box-shadow", "0 -4px 4px rgba(0,0,0,0)");
            $("#list4").css("box-shadow", "0px 4px 4px rgba(0, 0, 0, 0.15)");
        }

        if (height2 + $("#list4")[0].offsetHeight >= $(window).height()) {
            if (window.innerWidth <= 767) {
                $('#right-list').css("top", "-91% ");
                TopCss();
            } else {
                $('#right-list').css('top', '-116%');
                TopCss();
            }
        }

        function TopCss() {
            $("#list2").css("border-top", "none");
            $("#list2").css("border-bottom", "1px solid RGB(169,169,169)");
            $("#list4").css("border-top", "1px solid RGB(169,169,169)");
            $("#list4").css("border-bottom", "none");
            $("#list4").css("box-shadow", "0px 4px 4px rgba(0, 0, 0, 0)");
            $("#list4").css("box-shadow", "0 -4px 4px rgba(0,0,0,0.15)");
        }

    });


})()