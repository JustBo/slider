$(function(){
	$('.controller').click(function() {
  	var item  = $('.slider div');
  	var nmbSl = item.length;
    var i = -1;
    var curAct = 0;
    //curent active item
    $('.slider div').each(function() {
      ++i;
      if($(this).hasClass('active')){
      	  curAct = i;
				};
      });
    //next active item
    var nextAct = curAct;
    if($(this).hasClass('left')){
    	var nextAct = (curAct-1) % nmbSl;
      if(nextAct<0){
      	nextAct = nmbSl-1;
      }
    }else if ($(this).hasClass('right')){
    	var nextAct = (curAct+1) % nmbSl;
    };
    $(item[curAct]).removeClass('active');
    $(item[nextAct]).addClass('active');
  });
});