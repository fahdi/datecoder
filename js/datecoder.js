//$( document ).ready(function() {
  // Handler for .ready() called.

//$("#elements").on("change", function(e) {
	
	//alert('it works');
//	foo = $(this);
	

//	console.log(foo.text());
    //$('#formats').find('select').val($(this).val());

    // One strategy
    //$("#format1, #format2, #format3, #format4, #format5").val($(this).val());

    // Second Strategy

    //var value = $(this).val();
    //$('select[name=myddl] option[value='+value+']').attr('selected', 'selected');

//});
//});


$(document).ready(function () {
   $("#element1").on("change", function(e) {
        $('#txtID').val($(this).val());
        $('#txtOption').val($('#element1 option:selected').text());
       // $('#selItem').val($(this).val());
       // $('#txtItem').val($('#selItem option:selected').text());
    }); 
});