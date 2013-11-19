$( document ).ready(function() {
  // Handler for .ready() called.

$("#elements").on("change", function(e) {
	
	//alert('it works');
    $('#formats').find('select').val($(this).val());

    // One strategy
    //$("#format1, #format2, #format3, #format4, #format5").val($(this).val());

    // Second Strategy

    //var value = $(this).val();
    //$('select[name=myddl] option[value='+value+']').attr('selected', 'selected');

});


});
