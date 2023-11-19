$(document).ready(function () {
     // Function to update format options based on the selected element
     function updateFormatOptions(elementId, formatId) {
         var selectedElement = $('#' + elementId).val();
         var formatDropdown = $('#' + formatId);
 
         formatDropdown.empty(); // Clear existing options
 
         // Define options based on the selected element
         switch(selectedElement) {
             case 'day':
                 formatDropdown.append('<option value="d">Day (01-31)</option>');
                 formatDropdown.append('<option value="j">Day (1-31)</option>');
                 break;
             case 'month':
                 formatDropdown.append('<option value="m">Month (01-12)</option>');
                 formatDropdown.append('<option value="F">Month (January-December)</option>');
                 break;
             // Add cases for other elements like 'year', 'hour', etc.
         }
     }
 
     // Function to update divider options based on the selected divider
     function updateDividerOptions(dividerId, dividerOptionId) {
         var selectedDivider = $('#' + dividerId).val();
         var dividerOptionDropdown = $('#' + dividerOptionId);
 
         dividerOptionDropdown.empty(); // Clear existing options
 
         // Define options based on the selected divider
         switch(selectedDivider) {
             case 'space':
                 dividerOptionDropdown.append('<option value=" ">Single Space</option>');
                 break;
             case 'doubleSpace':
                 dividerOptionDropdown.append('<option value="  ">Double Space</option>');
                 break;
             // Add cases for other dividers like 'comma', 'dash', etc.
         }
     }
 
     // Event listeners for each dropdown in the "elements" row
     $('#element1').on('change', function() {
         updateFormatOptions('element1', 'format1');
     });
     $('#element2').on('change', function() {
         updateFormatOptions('element2', 'format2');
     });
     $('#element3').on('change', function() {
         updateFormatOptions('element3', 'format3');
     });
 
     // Event listeners for each dropdown in the "dividers" row
     $('#divider1').on('change', function() {
         updateDividerOptions('divider1', 'dividerOption1');
     });
     $('#divider2').on('change', function() {
         updateDividerOptions('divider2', 'dividerOption2');
     });
     $('#divider3').on('change', function() {
         updateDividerOptions('divider3', 'dividerOption3');
     });
 
     // Initialize the format and divider options based on the default selected elements
     updateFormatOptions('element1', 'format1');
     updateFormatOptions('element2', 'format2');
     updateFormatOptions('element3', 'format3');
     updateDividerOptions('divider1', 'dividerOption1');
     updateDividerOptions('divider2', 'dividerOption2');
     updateDividerOptions('divider3', 'dividerOption3');
 });
 