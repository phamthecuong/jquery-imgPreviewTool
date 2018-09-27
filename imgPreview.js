(function ( $ ) {
    $.fn.imgPreview = function() {
    	var imgPreview = this;
    	imgPreview.preview = function(selecter) {
    		var container = $(selecter).data('imgview');
    		$(selecter).change(function() {
    			$(selecter).empty();
    			imgPreview.fileReader(container, this.files[0]);
    		});
    	}

    	imgPreview.fileReader = function(selecter, file) {
    		var reader = new FileReader();
		  	reader.onload = function(event) {
		    	imgPreview.sucessCallback(selecter, event.target.result);
		 	}
		  	reader.readAsDataURL(file);
    	}

    	imgPreview.sucessCallback = function(selecter, url) {
    		$('#'+ selecter).html('<img src="'+url+'" />');
    	}

    	$(imgPreview).each(function(index, selecter) {
    		imgPreview.preview(selecter);
    	});
    };
  

}( jQuery ));