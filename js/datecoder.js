$(document).ready(function(){
  console.log('DateCoder script initialized');

  const elements = ['day', 'month', 'year', 'week', 'hour', 'minute', 'second', 'meridiem'];
  const formatOptions = {
    day: [
      { value: 'd', text: '01 ... 31' },
      { value: 'j', text: '1 ... 31' }
    ],
    month: [
      { value: 'm', text: '01 ... 12' },
      { value: 'n', text: '1 ... 12' },
      { value: 'F', text: 'January ... December' },
      { value: 'M', text: 'Jan ... Dec' }
    ],
    year: [
      { value: 'Y', text: '2024' },
      { value: 'y', text: '24' }
    ],
    week: [
      { value: 'W', text: '01 ... 53' },
    ],
    hour: [
      { value: 'H', text: '00 ... 23' },
      { value: 'h', text: '01 ... 12' },
      { value: 'G', text: '0 ... 23' },
      { value: 'g', text: '1 ... 12' }
    ],
    minute: [
      { value: 'i', text: '00 ... 59' }
    ],
    second: [
      { value: 's', text: '00 ... 59' }
    ],
    meridiem: [
      { value: 'A', text: 'AM / PM' },
      { value: 'a', text: 'am / pm' }
    ]
  };

  function updateFormatOptions(elementId){
    const selectedElement = $(`#${elementId}`).val();
    const formatDropdown = $(`#format${elementId.slice(-1)}`);

    console.log(`Updating format options for ${elementId}, selected: ${selectedElement}`);

    formatDropdown.empty();

    if (formatOptions[selectedElement]) {
      formatOptions[selectedElement].forEach(option => {
        formatDropdown.append(`<option value="${option.value}">${option.text}</option>`);
      });
    }
  }

  function updateDateFormatString(){
    let dateFormat = '';

    for (let i = 1; i <= 3; i++) {
      const formatValue = $(`#format${i}`).val() || '';
      const dividerValue = i < 3 ? ($(`#divider${i}`).val() || '') : '';

      dateFormat += formatValue + dividerValue;
    }

    console.log(`Generated date format: ${dateFormat}`);
    $('#phpOutput').text(`date('${dateFormat}');`);
    console.log(`Updated #phpOutput with: date('${dateFormat}');`);
  }

  // Initialize dropdowns and event listeners
  elements.forEach((element, index) => {
    const elementId = `element${index + 1}`;
    $(`#${elementId}`).append(elements.map(e => `<option value="${e}">${e}</option>`).join(''));
    $(`#${elementId}`).on('change', function(){
      console.log(`${elementId} changed to ${$(this).val()}`);
      updateFormatOptions(elementId);
      updateDateFormatString();
    });
  });

  // Event listeners for format and divider changes
  $('#format1, #format2, #format3, #divider1, #divider2').on('change', function() {
    console.log(`${this.id} changed to ${$(this).val()}`);
    updateDateFormatString();
  });

  // Initialize format dropdowns and date format string on page load
  ['element1', 'element2', 'element3'].forEach(updateFormatOptions);
  updateDateFormatString();

  console.log('DateCoder initialization complete');
});