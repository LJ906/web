/**
 * Created by LJ on 2018/4/2.
 */

$(function () {

    //全屏标签id，调用fullpage()方法
    $('#fullpage').fullpage({
        //每屏的背景色是一个数组
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#fed",
            "#d04759", "#84d9ed", "#8ac060"],
        navigation: true,
        //滚动的事件 毫秒
        scrollingSpeed: 1500,

        //autoScrolling: true,
        //第二屏幕调用afterLoad方法 两个参数，一个锚点一个索引，
        //afterLoad:当屏停稳后出发的事件
        // 1.让空的搜索框显示show()并移动到中间位置animate
        //2. 让opacity-0的文字，显示：opacity=1
        //3. 空的搜索框隐藏，opaity=0,并让完成状态的搜索框显示show,然后移动到右上角animate
        // 4，沙发列表 show()animate 宽到变成原来的宽，
        //5.改变上方的文字，让原来显示的那个delay(1000).hide(0)
        afterLoad: function (anchorLink, index) {
            //每屏加载完毕后继续向下按钮显示出来 第一屏
            if(index ==1){
                $('.qbh-down').animate({'opacity':1}, 1000);
            }

            //判断当索引等于2时写代码
            if (index == 2) {

                //1.空的搜索框显示并animate右边走到显示器中间
                $('.qbh-list-initsearch').show().animate({
                    'left': 500
                }, 1000, function () {
                    //2 让隐藏的文字显示
                    $('.qbh-list-search-font').animate({
                        'opacity': 1
                    }, 1000, function () {
                        //3 隐藏空的搜索框，
                        $('.qbh-list-initsearch').css('opacity', 0);
                        //4 让完整的搜索框显示出来，并移动到右上角
                        $('.qbh-list-finishsearch').show().animate({
                            'left': 710,
                            'bottom': 448,
                            'width': 150
                        }, 1000);

                        //5 让沙发列表显示，的宽度变成原来的441px
                        //显示用show()不能用animate
                        $('.qbh-list-sofas').show().animate({
                            'width': 441
                        }, 1000);
                        // 6 让上方的文字改变一下
                        $('.qbh-list-worda').delay(1000).hide(0);


                        //每屏加载完毕后继续向下按钮显示出来 第2屏
                        $('.qbh-down').animate({'opacity':1}, 1000);

                    });
                });



            }


            //每屏加载完毕后继续向下按钮显示出来
            if(index ==3){
                //每屏加载完毕后继续向下按钮显示出来 第3屏
                $('.qbh-down').animate({'opacity':1}, 1000);
            }

            if(index ==4){
                //每屏加载完毕后继续向下按钮显示出来 第3屏
                $('.qbh-down').animate({'opacity':1}, 1000);
            }


            //第5屏
            //1 手向上走+ 鼠标换图，
            //2. 屏幕上方的隐藏沙发显示掉落到银行卡
            //3.bill +原来隐藏在银行卡后面的沙发弹出
            if (index == 5) {

                $('.qbh-payment-hand img').animate({
                    top: 20,
                }, 500, function () {
                    //鼠标换图：
                    $('.qhb-payment-mouse img:last-child').show();
                    //2. 沙发掉落到银行卡
                    $('.qhb-payment-dropsofa').show().animate({
                        top: 300,
                    }, 1000, function () {
                        //3.bill 显示并   原来隐藏在银行卡后面的沙发显示出来
                        $('.qbh-payment-bill').animate({
                            bottom: 196,
                        }, 400);
                        $('.qbh-payment-rotate-sofa').animate({
                            bottom: -116,
                        }, 400, function () {

                            //每屏加载完毕后继续向下按钮显示出来
                            $('.qbh-down').animate({'opacity':1}, 1000);
                        });
                    });

                });
            }

            if(index ==6){
                //每屏加载完毕后继续向下按钮显示出来 第6屏
                $('.qbh-down').animate({'opacity':1}, 1000);
            }

            //第七屏
            //页面加载完毕后五角星陆续显示，(调用类名添加动画)让五角星的盒子宽度0-97px overflow idden)
            //好评向前动后宽度恢复原来的宽度
            if (index == 7) {
                //页面加载完毕后五角星陆续显示
                $('.qbh-appraise-stars').addClass('starsChange');
                //好评，等五角星显示完全后在显示，需延迟显示
                $('.qbh-appraise-haoping').delay(1200).show(0).animate({
                    left: 44,
                }, 1000, function () {
                    $(this).animate({width: 72}, 1000);

                    //每屏加载完毕后继续向下按钮显示出来
                    $('.qbh-down').animate({'opacity':1}, 1000);
                })
            }

            //8屏
            if (index == 8) {
                //获取鼠标的坐标 = 手的坐标
                $(document).mousemove(function (e) {
                    // x :手的坐标= 鼠标的坐标- 手自己的大约一半
                    //y:手的坐标= 鼠标的坐标  向下移点
                    var pagex = e.pageX - 140;
                    var pagey = e.pageY + 2;
                    //如果坐标小于固定高度yy （屏幕的高-手的高），则赋值为yy
                    var yy = $(window).height() - 449;
                    if (pagey < yy) {
                        $('.qbh-shopping-hands').css({'left': pagex, 'top': yy});
                    } else {
                        $('.qbh-shopping-hands').css({'left': pagex, 'top': pagey});
                    }
                })

                //再来一次- 调用fullpage.moveTo(index)方法
                $('.qbh-shopping-again').click(function () {
                    $.fn.fullpage.moveTo(1);
                })
                // //每屏加载完毕后继续向下按钮显示出来 第8屏
                // $('.qbh-down').animate({'opacity':1}, 1000);
            }
        },

        //第三屏  屏幕要离开时候用的 onLeave方法
        onLeave: function (index, nextIndex, direction) {
            //离开的时候继续向下按钮消失opacity=0
            if(index ==1 && nextIndex ==2){
                $('.qbh-down').animate({'opacity':0}, 500);
            }

            //第二屏
            if (index == 2 && nextIndex == 3) {
                //离开的时候继续向下按钮消失opacity=0
                $('.qbh-down').animate({'opacity':0}, 500);

                //掉落的沙发显示并移动到第3屏，改变bottom 负的,载调整width,left 大小位置
                $('.qbh-list-dropsofa').show().animate({
                    //在第三屏的高度 因为浏览的高度不同所以由底部的确定  $(window).height() - 固定值
                    'bottom': -($(window).height() - 260),
                    'width': 207,
                    'left': 370,

                }, 1000, function () {
                    //未选中区 变为 改变选中区(选中区显示出来)
                    $('.qbh-buy-main-selected').delay(1000).show(0);
                });

            }

            //第4屏 第三屏到第四屏沙发掉落
            if (index == 3 && nextIndex == 4) {
                //离开的时候继续向下按钮消失opacity=0
                $('.qbh-down').animate({'opacity':0}, 500);

                //第三屏的沙发隐藏
                //$('.qbh-list-dropsofa').hide();
                $('.qbh-list-dropsofa').css('opacity', 0);
                //让倾斜的沙发显示并掉落到购物车
                $('.qbh-buy-dropsofa').show().animate({
                    bottom: -($(window).height() - 220),
                    left: 406
                }, 1000, function () {
                    //掉落的沙发隐藏，
                    $('.qbh-buy-dropsofa').css('opacity', 0);

                    //购物车的沙发显示
                    $('.qbh-info-dropsofa').show();
                    //购物车装着沙发移走
                    $('.qbh-info-cartbox').animate({
                        'right': -700,
                    }, 800, function () {
                        //显示地址信息
                        $('.qbh-info-profile').animate({
                            'opacity': 1
                        }, 1000, function () {
                            //其中的文字显示
                            $('.qbh-info-address').animate({
                                'opacity': 1
                            }, 1000);
                        });
                        //改变提示文字
                        $('.qbh-info-wordb').animate({'opacity': 1}, 1000);

                    })
                })

            }


            //离开的时候继续向下按钮消失opacity=0
            if(index ==4 && nextIndex ==5){
                $('.qbh-down').animate({'opacity':0}, 500);
            }


            //第6屏
            //    1.让隐藏的小沙发掉下来
            //    2.盒子飞起来接住小沙发
            //3.接住后让小沙发隐藏
            //4. 盒子一起落到卡车上
            //5.让快递盒隐藏， 卡车开走(改变的背景图的位置)通过是开车标语显示出来 ，
            //卡车停下是，变标语成帅气
            //6快递员显示出来，并变大， 向前移动
            //7.门改变，同时小女孩变大
            if (index == 5 && nextIndex == 6) {
                //离开的时候继续向下按钮消失opacity=0
                $('.qbh-down').animate({'opacity':0}, 500);

                //1.让隐藏的小沙发掉下来
                $('.qbh-payment-smallsofa').show().animate({
                    bottom: -($(window).height() - 430),
                    width: 60,

                }, 1000);
                //2.盒子飞起来接住小沙发
                $('.qbh-delivery-box').show().animate({
                    bottom: 430,
                    left: 270
                }, 1000, function () {
                    //3.接住后让小沙发隐藏上面有show所以不能用hide 用opacity0
                    $('.qbh-payment-smallsofa').css({opacity: 0});
                    //4. 盒子一起落到卡车上
                    $(this).animate({
                        bottom: 34,
                        left: 450,
                        width: 40
                    }, 1000, function () {
                        //让快递盒隐藏， 卡车开走(改变的背景图的位置)
                        $(this).css('opacity', 0);
                        //卡车标语显示出来
                        $('.qbh-delivery-truck img:last-child').show();
                        $('.qhb-delivery').animate({
                            'backgroundPositionX': '100%'
                        }, 2000, function () {
                            //变标语
                            //让第一个标语隐藏， 第二个显示
                            $('.qbh-delivery-tips img:first-child').hide();
                            $('.qbh-delivery-tips img:last-child').animate({
                                'opacity': 1
                            }, 2000, function () {
                                //6快递员显示出来，并变大，
                                $('.qbh-delivery-deliveryman').animate({
                                    width: 252,
                                    right: 690,
                                    bottom: 80
                                }, 1000, function () {
                                    //快递员向前移动 ,
                                    $(this).animate({
                                        right: 420
                                    }, 1000, function () {
                                        //7.门改图
                                        $('.qbh-delivery-door').show();

                                        //8门改图片， 小姑娘变大
                                        $('.qbh-delivery-buyer').animate({
                                            'height': 294
                                        }, 1000, function () {
                                            //收货
                                            $('.qbh-delivery-accept').show();
                                        })

                                    })

                                })

                            })

                        })
                    });
                })
            }

            //离开的时候继续向下按钮消失opacity=0
            if(index ==6 && nextIndex ==7){
                $('.qbh-down').animate({'opacity':0}, 500);
            }
            //离开的时候继续向下按钮消失opacity=0
            if(index ==7 && nextIndex ==8){
                $('.qbh-down').animate({'opacity':0}, 500);
            }

        },

//fullpage的括号
    })

    //继续向下按钮
    //向下走一屏直接调用$.fn.fullpage.moveSectionDown();
    //直接调用fullpage中的moveSectionDown()方法
    //fullpage是jquery原型上的一个方法，每个jquery对象都能使用这个方法
    $('.qbh-down').on('click', function () {

        //$.fn.fullpage.moveSectionDown();
        $('#fullpage').fullpage.moveSectionDown();
    });

    //（最后onLeave的时候 让继续向下的按钮隐藏，afterLoad停稳后显示出来）

//jquery的括号
});