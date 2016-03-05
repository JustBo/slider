 var item  = $('.slider .item');
  var nmbSl = item.length;
  var curAct = curPosition();
  var circle = $('.contr-circle li');
  var nextAct = curAct+1;
  setInterval(function(){
    curAct  = curPosition();
    nextAct = (curAct+1) % nmbSl;
    change();
  },4000);
  $('.contr-circle li').click(function() {
    curAct  = curPosition();
    nextAct = $(this).data('slide');
    change();
  });
  $('.controller').click(function() {
    curAct = curPosition();
    if($(this).hasClass('left')){
    	nextAct = (curAct-1) % nmbSl;
      if(nextAct<0){
      	nextAct = nmbSl-1;
      }
    }else if ($(this).hasClass('right')){
    	nextAct = (curAct+1) % nmbSl;
    };
    change();
  });
  function curPosition() {
    var res;
    var i = -1;
    $('.slider .item').each(function() {
       ++i;
       if($(this).hasClass('active')){
        	  return res = i;
  				}
        });
    return res;   
  };
  function change() {
    $(item[curAct]).removeClass('active').animate({opacity:0});
    $(item[nextAct]).animate({opacity:1},1000).addClass('active');
    $(circle[curAct]).removeClass('circ-act');
    $(circle[nextAct]).addClass('circ-act');
  };