// bootstrap-tab-keys
(function($) {

  $.fn.extend({
    tabKeys: function() {

      var $nav = this;
      var $lis = $nav.find('li');
      
      var leftKey = function() {
        $nav.find('li.active').prev('li').find('a').click();
      }
      
      var rightKey = function() {
        $nav.find('li.active').next('li').find('a').click();
      }

      var numberKey = function(event) {
        var index = event.which - 49;
        if (index === -1) { index = 9 }; // normalize for 0 key
        $($lis[index]).find('a').click();
      }
      
      $(document).bind('keydown', 'ctrl+shift+left', leftKey);
      $(':input').bind('keydown', 'ctrl+shift+left', leftKey);
      $(document).bind('keydown', 'ctrl+shift+right', rightKey);
      $(':input').bind('keydown', 'ctrl+shift+right', rightKey);
      
      for(var i=0; i <= $lis.length; i++) {
        $(document).bind('keydown', 'ctrl+shift+' + i, numberKey);
        $(':input').bind('keydown', 'ctrl+shift+' + i, numberKey);
      }
      
      var blurNext = function(event) {
        console.log('blur');
        rightKey();
        $('.tab-pane.active :input:first').focus();
      }
      
      $('.tab-pane').each(function(i, element) {
        $(element).find(':input:not(button):last').on('blur', blurNext);
      });
    }
  });


})(jQuery);

