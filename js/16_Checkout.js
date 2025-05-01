document.addEventListener('DOMContentLoaded', function() {
    const selectCurrent = document.querySelector('.select-box__current');
    const selectList = document.querySelector('.select-box__list');
    const selectOptions = document.querySelectorAll('.select-box__option');
    const selectInputs = document.querySelectorAll('.select-box__input');
    const selectInputText = document.querySelector('.select-box__input-text');
    
    // Toggle dropdown
    selectCurrent.addEventListener('click', function() {
        selectCurrent.classList.toggle('active');
        selectList.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!selectCurrent.contains(e.target)) {
            selectCurrent.classList.remove('active');
            selectList.classList.remove('active');
        }
    });
    
    // Handle option selection
    selectOptions.forEach(option => {
        option.addEventListener('click', function() {
            const inputId = this.getAttribute('for');
            if (inputId === '0') return;
            
            const selectedInput = document.getElementById(inputId);
            const selectedText = this.textContent;
            
            // Update displayed text
            selectInputText.textContent = selectedText;
            
            // Check the corresponding radio input
            selectedInput.checked = true;
            
            // Close dropdown
            selectCurrent.classList.remove('active');
            selectList.classList.remove('active');
        });
    });
});