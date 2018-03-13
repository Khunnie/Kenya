$(function(){
	var siderLi=$(".siderbar li");
	siderLi.mouseover(function () {
	$(this).addClass("on").siblings(".on").removeClass("on");
	$(this).find(".sbstyle").slideDown(200);
	})
	siderLi.mouseleave(function(){
	$(this).removeClass("on");
	$(this).find(".sbstyle").slideUp(200);
	})
	
})

function showWindow(tit,content) {
    var detailtel = $("<div class='popupWindow detailshare'/>");
    var windowContent = $("<div class='windowContent'><div class='windowTitle'><span><a href='javascript:void(0)'><img src='images/close_icon.png' alt=''></a></span>"+tit+"</div></div>");
	var li = $("<div class='txtContent'>tel:<a href='tel:"+content+"'>" + content + "</a></div>");
	
    var submit = $("<div class='submit'><input type='button' class='cancel' value='取消' style='width: 100%;'></div>");
    windowContent.append(li);
    windowContent.append(submit);
    detailtel.append(windowContent);
    $("a", windowContent.find(".windowTitle")).unbind('click').click(function () {
        detailtel.remove();
    })
    $(".cancel", submit).unbind('click').click(function () {
        detailtel.remove();
    })
    detailtel.appendTo("body");
    detailtel.show();
	var bottom = 0;
	var left = ($(window).width() - windowContent.width()) / 2;
	left = left < 0 ? 0 : left;
	windowContent.css({'bottom': bottom,'left':left});
}

function showorder(i){
    var $box = $('#orderment_box'+i);
    $('.overmask').show();
    var top = ($(window).height() - $box.outerHeight()) / 2;
    top = top < 0 ? 0 : top;
    $box.show().animate({"top":top},400);
	//document.body.style.overflow = "hidden";
	$("html,body").css({"overflow":"hidden","height":"100%"})
    $('.close_cbox,.cancel').bind('click', function () {
    $('.overmask,#orderment_box'+i).hide();
	//document.body.style.overflow = "auto";
	$("html,body").css({"overflow":"auto","height":"auto"})
	});
}

//提示信息
function ShowMsg(msg) {
    var tips = $("<div class='tips'/>");
    tips.text(msg);
    tips.show();
    setTimeout(function () {
        tips.hide();
    }, 3000);
    tips.appendTo("body");
}

//确认对话框
var mDialogCallback;
function showConfirmer(msg, callback) {
    mDialogCallback = callback;
    var _window = $('<div style="z-index:10" class="windows-open window-black"></div>');
    var _openbox = $('<div class="open-box" style="width:90%; height:auto" id="other-open"></div>');
    var _title = $('<div class="open-title"><b>提示信息</b></div>');
    var _content = $('<div class="open-content2"><ul class="otherlist"><li>' + msg + '</li></ul><div class="clearfix" style="padding-top:1rem;"><a href="javascript:void(0);" class="ok">确定</a><a href="javascript:void(0);" class="cancel">取消</a></div></div>');
    $(document.body).append($(_window).append($(_openbox).append(_title).append(_content)));
    $(_openbox).css('margin-top', $(window).height() / 2 - $(_openbox).height() / 2 - 100);
    $(_window).fadeIn("slow");
    //确定
    $(".ok", _content).click(function () {
        $(_window).fadeOut("slow");
        mDialogCallback(true);
        $(_window).remove();
    });
    //取消
    $(".cancel", _content).click(function () {
        $(_window).fadeOut("slow");
        mDialogCallback(false);
        $(_window).remove();
    });
    //取消
    $("img", _title).click(function () {
        $(_window).fadeOut("slow");
        mDialogCallback(false);
        $(_window).remove();
    });
}
