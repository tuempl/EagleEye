
var PhotoView={
		load:function(){
			$('#photoview').hide();
		},
		ClickImg:function(event){
			//set PhotoView visible
	 		$('#photo_load').show();
			$('#photo img').attr("src", OC.linkTo('gallery', 'ajax/image.php')+'?file=Aaron/DSC_0010.JPG');
			$('#photo img').attr("name", event.alt);
		
			$('#photoview img').load(function(){
				$('#photoview_load').hide();
			});
			
			/**
			 * @todo hier modul js für eingehöngte js
			 */
			Module.load(event.alt);
			
			$('#photoview img').ready(function(){
				$('#photoview img').show();
			});
			$('#new_1').hide();
			$('#photoview').show();
		}
};
