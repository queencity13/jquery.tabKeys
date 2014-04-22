// bootstrap-tab-keys
(function($) {

  $.fn.extend({
    tabKeys: function() {

      var $nav = this;
      var $lis = $nav.find('li');
      
      $(document).bind('keydown', 'ctrl+shift+left', function() {
        $nav.find('li.active').prev('li').find('a').click();
      });

      $(document).bind('keydown', 'ctrl+shift+right', function() {
        $nav.find('li.active').next('li').find('a').click();
      });

      var numberKey = function(event) {
        var index = event.which - 49;
        if (index === -1) { index = 9 }; // normalize for 0 key
        $($lis[index]).find('a').click();
      }

      for(var i=0; i <= $lis.length; i++) {
        $(document).bind('keydown', 'ctrl+shift+' + i, numberKey);
      }

      // TODO: go to first field on next tab if tabbing from last field

    }
  });


})(jQuery);

