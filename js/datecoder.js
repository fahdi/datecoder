$(document).ready(function () {
    // Function to update format options based on the selected element
    function updateFormatOptions(elementId, formatId) {
        var selectedElement = $('#' + elementId).val();
        var formatDropdown = $('#' + formatId);

        formatDropdown.empty(); // Clear existing options

        // Define options based on the selected element
        switch (selectedElement) {
            case 'day':
                formatDropdown.append('<option value="d">01 ... 31</option>');
                formatDropdown.append('<option value="j">1 ... 31</option>');
                break;
            case 'month':
                formatDropdown.append('<option value="m">01 ... 12</option>');
                formatDropdown.append('<option value="n">1 ... 12</option>');
                formatDropdown.append('<option value="F">January ... December</option>');
                formatDropdown.append('<option value="M">Jan ... Dec</option>');
                break;
            case 'year':
                formatDropdown.append('<option value="Y">2024</option>');
                formatDropdown.append('<option value="y">24</option>');
                break;
            // Add cases for other elements
        }
    }

    // Function to construct the date format string
    function updateDateFormatString() {
        var dateFormat = '';

        for (var i = 1; i <= 3; i++) {
            var formatValue = $('#format' + i).val();
            var dividerValue = $('#divider' + i).val();

            dateFormat += formatValue || '';

            if (i < 3 && dividerValue) {
                dateFormat += dividerValue; // Add logic for actual divider strings if necessary
            }
        }

        $('.col-md-4.col-md-offset-4.text-center.padding-pre pre').text("date('" + dateFormat + "');");
    }

    // Event listeners for element changes
    $('#element1, #element2, #element3').on('change', function() {
        var elementId = $(this).attr('id');
        var formatId = 'format' + elementId[elementId.length - 1];
        updateFormatOptions(elementId, formatId);
        updateDateFormatString();
    });

    // Attach event listeners to format dropdowns directly
    $('#format1, #format2, #format3').on('change', updateDateFormatString);

    // Attach event listeners to divider dropdowns directly
    $('#divider1, #divider2').on('change', updateDateFormatString);

    // Event listeners for format and divider changes
    $('.formats, .dividers').find('select').on('change', updateDateFormatString);

    // Initialize format dropdowns and date format string on page load
    ['element1', 'element2', 'element3'].forEach(function(elementId) {
        var formatId = 'format' + elementId[elementId.length - 1];
        updateFormatOptions(elementId, formatId);
    });
    updateDateFormatString();
});
