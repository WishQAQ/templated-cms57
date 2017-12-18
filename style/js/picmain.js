$(document).ready(function(){ 
  if($("#imgs").width() > 750){ 
    $("#imgs").attr("width", 750); 
  } 
  if($('.xwnymmain').find('img')){ 
    $('.xwnymmain').find('img').each(function(index, element){ 
      if($(this).width() > 750){ 
        $(this).attr("width", 750); 
      } 
    }); 
  } 

  var project_imgheigt = $('.project-item img').width()/1.5;
  $('.project-item img').css('height',project_imgheigt);

  var obj_imgheight = $('.index_obj_img img').width()/1.5;
  $('.index_obj_img img').css('height',obj_imgheight);

  var news_imgheight = $('.index_news_img img').width()/1.5;
  $('.index_news_img img').css('height',news_imgheight);

  var showpic_imgheight = $('.showpic img').width()/1.5;
  $('.showpic img').css('height',showpic_imgheight);





}); 