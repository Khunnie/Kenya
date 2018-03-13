//确认对话框
var mDialogCallback;
function showConfirmer(msg, callback) {
    mDialogCallback = callback;
    var _window = $('<div style="z-index:10000" class="windows-open window-black"></div>');
    var _openbox = $('<div class="open-box" id="other-open"></div>');
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