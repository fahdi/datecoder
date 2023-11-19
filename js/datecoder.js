$(document).ready(function () {
    // Function to map selected element and format to PHP date format symbol
    function mapFormatToPHP(element, format) {
        console.log('Mapping element: ' + element + ', Format: ' + format);

        // Example mapping logic. Adjust according to your dropdown options       
        

        return format; // Return an empty string if no match is found
    }

    // Function to update the PHP date format displayed
   // Function to update the PHP date format displayed
// Function to update the PHP date format displayed
function updateDateFormatDisplay() {
    console.log('Updating date format display');
    var dateFormat = '';

    // Loop through each element and format pair
    for (var i = 1; i <= 3; i++) {
        var element = $('#element' + i).val();
        var format = $('#format' + i).val();
        var divider = $('#divider' + i).val(); // Get selected divider

        console.log('Element ' + i + ': ' + element + ', Format: ' + format);

        // Get PHP format part
        var phpFormatPart = mapFormatToPHP(element, format);
        console.log('Mapped PHP format part for element ' + i + ': ' + phpFormatPart);

        // Add the format part to the result string
        dateFormat += phpFormatPart;

        // Add divider if not the last element
        if (i < 3) {
            if (divider === 'Space') {
                dateFormat += ' ';
            } else if (divider === 'Space2') {
                dateFormat += '  ';
            } else if (divider === '-') {
                dateFormat += '-';
            } // Add more divider options as needed
        }
    }

    console.log('Final PHP date format: ' + dateFormat);
    // Updating the <pre> content
    $('.col-md-4.col-md-offset-4.text-center.padding-pre pre').text("date('" + dateFormat + "');");
}

    // Event listeners for changes in dropdowns
    $('#elements select, #formats select, #dividers select').on('change', function () {
        console.log('Dropdown changed, updating format display');
        updateDateFormatDisplay();
    });

    // Initialize the display on page load
    console.log('Initializing date format display on page load');
    updateDateFormatDisplay();
});
