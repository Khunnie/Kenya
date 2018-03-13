var TaskList = function () {

    return {

        initTaskWidget: function () {
			$('input.list-child').change(function() {
				if ($(this).is(':checked')) { 
					$(this).parents('tr').addClass("task-done"); 
				} else { 
					$(this).parents('tr').removeClass("task-done"); 
				}
			}); 
        }

    };

}();