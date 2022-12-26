$('.details').hide();
function toggleFunction(headlines,information){
    $(headlines).click(function(){
        $(information).slideToggle(800); 
    });   
}
function barfillerFun(bar){
    $(document).ready(function(){
        $(bar).barfiller();
    });
}
toggleFunction('.oneHeadline','.oneDetails')
toggleFunction('.twoHeadline','.twoDetails')
toggleFunction('.threeHeadline','.threeDetails')
toggleFunction('.fourHeadline','.fourDetails')
toggleFunction('.fiveHeadline','.fiveDetails')
toggleFunction('.sixHeadline','.sixDetails')
toggleFunction('.sevenHeadline','.sevenDetails')
barfillerFun('#bar1')
barfillerFun('#bar2')
barfillerFun('#bar3')
barfillerFun('#bar4')
$('.my_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    autoplay : 50,
    arrows : false,
    focusOnSelect: true
  });
$('.all').click(function(){
    newFun($('.all'),$('.p_detail'),$('.youtube'),$('.soundcloud'),$('.vimeo'))
    $('.p_imgone').show(1000)
    $('.p_imgtwo').show(1000)
    $('.p_imgthree').show(1000)
    $('.p_imgfour').show(1000)
    $('.p_imgfive').show(1000)
    $('.p_imgsix').show(1000)
})
$('.vimeo').click(function(){
    newFun($('.vimeo'),$('.p_detail'),$('.youtube'),$('.all'),$('.soundcloud'))

    $('.p_imgone').show(1000)
    $('.p_imgtwo').hide(1000)
    $('.p_imgthree').hide(1000)
    $('.p_imgfour').hide(1000)
    $('.p_imgfive').hide(1000)
    $('.p_imgsix').hide(1000)
})
$('.youtube').click(function(){
    newFun($('.youtube'),$('.p_detail'),$('.soundcloud'),$('.all'),$('.vimeo'))
    $('.p_imgone').hide(1000)
    $('.p_imgtwo').show(1000)
    $('.p_imgthree').hide(1000)
    $('.p_imgfour').hide(1000)
    $('.p_imgsix').hide(1000)
    $('.p_imgfive').show(1000)
})
$('.soundcloud').click(function(){
    newFun($('.soundcloud'),$('.p_detail'),$('.youtube'),$('.all'),$('.vimeo'))
    $('.p_imgone').hide(1000)
    $('.p_imgtwo').hide(1000)
    $('.p_imgthree').show(1000)
    $('.p_imgfour').hide(1000)
    $('.p_imgfive').hide(1000)
    $('.p_imgsix').hide(1000)
})
$('.p_detail').click(function(){
    newFun($('.p_detail'),$('.soundcloud'),$('.youtube'),$('.all'),$('.vimeo'))
    $('.p_imgone').hide(1000)
    $('.p_imgtwo').hide(1000)
    $('.p_imgthree').hide(1000)
    $('.p_imgfour').show(1000)
    $('.p_imgfive').hide(1000)
    $('.p_imgsix').show(1000)
})
function newFun(one,two,three,four,five){
    one.css('color','#ff451b')
    two.css('color','#fff')
    three.css('color','#fff')
    four.css('color','#fff')
    five.css('color','#fff')
}