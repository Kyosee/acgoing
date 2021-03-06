$(function(){
    var refreshCaptcha = function(el){
        el.attr('src', el.data('url') + '?' + Math.random());
    }

    $(".captcha").click(function(){
        refreshCaptcha($(this));
    })

    /**
     * register form
     */
    var passportForm = $(".passport-form");

    if(!passportForm.length) return;

    passportForm.submit(function(){
        var _this = $(this);

        $.ajax({
            type: 'post',
            data: _this.serialize(),
            url: _this.attr('action'),
            success: function(response){
                if(response.result){
                    location.href = response.redirect_url
                }else{
                    layer.msg(response.msg);
                }
            },
            error: function(error){
                $.each(error.responseJSON, function(index, val) {
                    $("input[name="+index+"]").focus();
                    if(index == 'captcha'){
                        refreshCaptcha($(".captcha"));
                    }
                    layer.msg(val[0]);
                    return false;
                });
            }
        });

        return false;
    })

})
