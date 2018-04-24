/**
 * Created by LJ on 2018/4/2.
 */

$(function () {

    //ȫ����ǩid������fullpage()����
    $('#fullpage').fullpage({
        //ÿ���ı���ɫ��һ������
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#fed",
            "#d04759", "#84d9ed", "#8ac060"],
        navigation: true,
        //�������¼� ����
        scrollingSpeed: 1500,

        //autoScrolling: true,
        //�ڶ���Ļ����afterLoad���� ����������һ��ê��һ��������
        //afterLoad:����ͣ�Ⱥ�������¼�
        // 1.�ÿյ���������ʾshow()���ƶ����м�λ��animate
        //2. ��opacity-0�����֣���ʾ��opacity=1
        //3. �յ����������أ�opaity=0,�������״̬����������ʾshow,Ȼ���ƶ������Ͻ�animate
        // 4��ɳ���б� show()animate �����ԭ���Ŀ�
        //5.�ı��Ϸ������֣���ԭ����ʾ���Ǹ�delay(1000).hide(0)
        afterLoad: function (anchorLink, index) {
            //ÿ��������Ϻ�������°�ť��ʾ���� ��һ��
            if(index ==1){
                $('.qbh-down').animate({'opacity':1}, 1000);
            }

            //�жϵ���������2ʱд����
            if (index == 2) {

                //1.�յ���������ʾ��animate�ұ��ߵ���ʾ���м�
                $('.qbh-list-initsearch').show().animate({
                    'left': 500
                }, 1000, function () {
                    //2 �����ص�������ʾ
                    $('.qbh-list-search-font').animate({
                        'opacity': 1
                    }, 1000, function () {
                        //3 ���ؿյ�������
                        $('.qbh-list-initsearch').css('opacity', 0);
                        //4 ����������������ʾ���������ƶ������Ͻ�
                        $('.qbh-list-finishsearch').show().animate({
                            'left': 710,
                            'bottom': 448,
                            'width': 150
                        }, 1000);

                        //5 ��ɳ���б���ʾ���Ŀ�ȱ��ԭ����441px
                        //��ʾ��show()������animate
                        $('.qbh-list-sofas').show().animate({
                            'width': 441
                        }, 1000);
                        // 6 ���Ϸ������ָı�һ��
                        $('.qbh-list-worda').delay(1000).hide(0);


                        //ÿ��������Ϻ�������°�ť��ʾ���� ��2��
                        $('.qbh-down').animate({'opacity':1}, 1000);

                    });
                });



            }


            //ÿ��������Ϻ�������°�ť��ʾ����
            if(index ==3){
                //ÿ��������Ϻ�������°�ť��ʾ���� ��3��
                $('.qbh-down').animate({'opacity':1}, 1000);
            }

            if(index ==4){
                //ÿ��������Ϻ�������°�ť��ʾ���� ��3��
                $('.qbh-down').animate({'opacity':1}, 1000);
            }


            //��5��
            //1 ��������+ ��껻ͼ��
            //2. ��Ļ�Ϸ�������ɳ����ʾ���䵽���п�
            //3.bill +ԭ�����������п������ɳ������
            if (index == 5) {

                $('.qbh-payment-hand img').animate({
                    top: 20,
                }, 500, function () {
                    //��껻ͼ��
                    $('.qhb-payment-mouse img:last-child').show();
                    //2. ɳ�����䵽���п�
                    $('.qhb-payment-dropsofa').show().animate({
                        top: 300,
                    }, 1000, function () {
                        //3.bill ��ʾ��   ԭ�����������п������ɳ����ʾ����
                        $('.qbh-payment-bill').animate({
                            bottom: 196,
                        }, 400);
                        $('.qbh-payment-rotate-sofa').animate({
                            bottom: -116,
                        }, 400, function () {

                            //ÿ��������Ϻ�������°�ť��ʾ����
                            $('.qbh-down').animate({'opacity':1}, 1000);
                        });
                    });

                });
            }

            if(index ==6){
                //ÿ��������Ϻ�������°�ť��ʾ���� ��6��
                $('.qbh-down').animate({'opacity':1}, 1000);
            }

            //������
            //ҳ�������Ϻ������½����ʾ��(����������Ӷ���)������ǵĺ��ӿ��0-97px overflow idden)
            //������ǰ�����Ȼָ�ԭ���Ŀ��
            if (index == 7) {
                //ҳ�������Ϻ������½����ʾ
                $('.qbh-appraise-stars').addClass('starsChange');
                //���������������ʾ��ȫ������ʾ�����ӳ���ʾ
                $('.qbh-appraise-haoping').delay(1200).show(0).animate({
                    left: 44,
                }, 1000, function () {
                    $(this).animate({width: 72}, 1000);

                    //ÿ��������Ϻ�������°�ť��ʾ����
                    $('.qbh-down').animate({'opacity':1}, 1000);
                })
            }

            //8��
            if (index == 8) {
                //��ȡ�������� = �ֵ�����
                $(document).mousemove(function (e) {
                    // x :�ֵ�����= ��������- ���Լ��Ĵ�Լһ��
                    //y:�ֵ�����= ��������  �����Ƶ�
                    var pagex = e.pageX - 140;
                    var pagey = e.pageY + 2;
                    //�������С�ڹ̶��߶�yy ����Ļ�ĸ�-�ֵĸߣ�����ֵΪyy
                    var yy = $(window).height() - 449;
                    if (pagey < yy) {
                        $('.qbh-shopping-hands').css({'left': pagex, 'top': yy});
                    } else {
                        $('.qbh-shopping-hands').css({'left': pagex, 'top': pagey});
                    }
                })

                //����һ��- ����fullpage.moveTo(index)����
                $('.qbh-shopping-again').click(function () {
                    $.fn.fullpage.moveTo(1);
                })
                // //ÿ��������Ϻ�������°�ť��ʾ���� ��8��
                // $('.qbh-down').animate({'opacity':1}, 1000);
            }
        },

        //������  ��ĻҪ�뿪ʱ���õ� onLeave����
        onLeave: function (index, nextIndex, direction) {
            //�뿪��ʱ��������°�ť��ʧopacity=0
            if(index ==1 && nextIndex ==2){
                $('.qbh-down').animate({'opacity':0}, 500);
            }

            //�ڶ���
            if (index == 2 && nextIndex == 3) {
                //�뿪��ʱ��������°�ť��ʧopacity=0
                $('.qbh-down').animate({'opacity':0}, 500);

                //�����ɳ����ʾ���ƶ�����3�����ı�bottom ����,�ص���width,left ��Сλ��
                $('.qbh-list-dropsofa').show().animate({
                    //�ڵ������ĸ߶� ��Ϊ����ĸ߶Ȳ�ͬ�����ɵײ���ȷ��  $(window).height() - �̶�ֵ
                    'bottom': -($(window).height() - 260),
                    'width': 207,
                    'left': 370,

                }, 1000, function () {
                    //δѡ���� ��Ϊ �ı�ѡ����(ѡ������ʾ����)
                    $('.qbh-buy-main-selected').delay(1000).show(0);
                });

            }

            //��4�� ��������������ɳ������
            if (index == 3 && nextIndex == 4) {
                //�뿪��ʱ��������°�ť��ʧopacity=0
                $('.qbh-down').animate({'opacity':0}, 500);

                //��������ɳ������
                //$('.qbh-list-dropsofa').hide();
                $('.qbh-list-dropsofa').css('opacity', 0);
                //����б��ɳ����ʾ�����䵽���ﳵ
                $('.qbh-buy-dropsofa').show().animate({
                    bottom: -($(window).height() - 220),
                    left: 406
                }, 1000, function () {
                    //�����ɳ�����أ�
                    $('.qbh-buy-dropsofa').css('opacity', 0);

                    //���ﳵ��ɳ����ʾ
                    $('.qbh-info-dropsofa').show();
                    //���ﳵװ��ɳ������
                    $('.qbh-info-cartbox').animate({
                        'right': -700,
                    }, 800, function () {
                        //��ʾ��ַ��Ϣ
                        $('.qbh-info-profile').animate({
                            'opacity': 1
                        }, 1000, function () {
                            //���е�������ʾ
                            $('.qbh-info-address').animate({
                                'opacity': 1
                            }, 1000);
                        });
                        //�ı���ʾ����
                        $('.qbh-info-wordb').animate({'opacity': 1}, 1000);

                    })
                })

            }


            //�뿪��ʱ��������°�ť��ʧopacity=0
            if(index ==4 && nextIndex ==5){
                $('.qbh-down').animate({'opacity':0}, 500);
            }


            //��6��
            //    1.�����ص�Сɳ��������
            //    2.���ӷ�������סСɳ��
            //3.��ס����Сɳ������
            //4. ����һ���䵽������
            //5.�ÿ�ݺ����أ� ��������(�ı�ı���ͼ��λ��)ͨ���ǿ���������ʾ���� ��
            //����ͣ���ǣ�������˧��
            //6���Ա��ʾ����������� ��ǰ�ƶ�
            //7.�Ÿı䣬ͬʱСŮ�����
            if (index == 5 && nextIndex == 6) {
                //�뿪��ʱ��������°�ť��ʧopacity=0
                $('.qbh-down').animate({'opacity':0}, 500);

                //1.�����ص�Сɳ��������
                $('.qbh-payment-smallsofa').show().animate({
                    bottom: -($(window).height() - 430),
                    width: 60,

                }, 1000);
                //2.���ӷ�������סСɳ��
                $('.qbh-delivery-box').show().animate({
                    bottom: 430,
                    left: 270
                }, 1000, function () {
                    //3.��ס����Сɳ������������show���Բ�����hide ��opacity0
                    $('.qbh-payment-smallsofa').css({opacity: 0});
                    //4. ����һ���䵽������
                    $(this).animate({
                        bottom: 34,
                        left: 450,
                        width: 40
                    }, 1000, function () {
                        //�ÿ�ݺ����أ� ��������(�ı�ı���ͼ��λ��)
                        $(this).css('opacity', 0);
                        //����������ʾ����
                        $('.qbh-delivery-truck img:last-child').show();
                        $('.qhb-delivery').animate({
                            'backgroundPositionX': '100%'
                        }, 2000, function () {
                            //�����
                            //�õ�һ���������أ� �ڶ�����ʾ
                            $('.qbh-delivery-tips img:first-child').hide();
                            $('.qbh-delivery-tips img:last-child').animate({
                                'opacity': 1
                            }, 2000, function () {
                                //6���Ա��ʾ�����������
                                $('.qbh-delivery-deliveryman').animate({
                                    width: 252,
                                    right: 690,
                                    bottom: 80
                                }, 1000, function () {
                                    //���Ա��ǰ�ƶ� ,
                                    $(this).animate({
                                        right: 420
                                    }, 1000, function () {
                                        //7.�Ÿ�ͼ
                                        $('.qbh-delivery-door').show();

                                        //8�Ÿ�ͼƬ�� С������
                                        $('.qbh-delivery-buyer').animate({
                                            'height': 294
                                        }, 1000, function () {
                                            //�ջ�
                                            $('.qbh-delivery-accept').show();
                                        })

                                    })

                                })

                            })

                        })
                    });
                })
            }

            //�뿪��ʱ��������°�ť��ʧopacity=0
            if(index ==6 && nextIndex ==7){
                $('.qbh-down').animate({'opacity':0}, 500);
            }
            //�뿪��ʱ��������°�ť��ʧopacity=0
            if(index ==7 && nextIndex ==8){
                $('.qbh-down').animate({'opacity':0}, 500);
            }

        },

//fullpage������
    })

    //�������°�ť
    //������һ��ֱ�ӵ���$.fn.fullpage.moveSectionDown();
    //ֱ�ӵ���fullpage�е�moveSectionDown()����
    //fullpage��jqueryԭ���ϵ�һ��������ÿ��jquery������ʹ���������
    $('.qbh-down').on('click', function () {

        //$.fn.fullpage.moveSectionDown();
        $('#fullpage').fullpage.moveSectionDown();
    });

    //�����onLeave��ʱ�� �ü������µİ�ť���أ�afterLoadͣ�Ⱥ���ʾ������

//jquery������
});