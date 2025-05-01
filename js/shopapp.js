document.addEventListener('DOMContentLoaded', function() {
    const filterToggle = document.getElementById('filterToggle');
    const filterSection = document.getElementById('filterSection');

    if (filterToggle && filterSection) {
        filterToggle.addEventListener('click', function() {
            filterSection.classList.toggle('active');
        });
    }

    // Price range functionality
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', function() {
            // You would update the displayed price range here
            // and filter products accordingly
        });
    }

    // Filter functionality would go here
    // You would add event listeners to all filter checkboxes
    // and implement the filtering logic
});

document.addEventListener('DOMContentLoaded', function() {
    const sliderMin = document.getElementById("slider-min");
    const sliderMax = document.getElementById("slider-max");
    const sliderRange = document.querySelector(".slider-range");
    const priceMinDisplay = document.getElementById("price-min");
    const priceMaxDisplay = document.getElementById("price-max");
    const toggleArrow = document.querySelector(".toggle-arrow");
    const priceHeader = document.querySelector(".price-header");

    function updateSlider() {
        const minValue = parseInt(sliderMin.value);
        const maxValue = parseInt(sliderMax.value);
        
        // Update the displayed range
        const minPercent = (minValue / 15000) * 100;
        const maxPercent = (maxValue / 15000) * 100;
        sliderRange.style.left = minPercent + "%";
        sliderRange.style.width = (maxPercent - minPercent) + "%";
        
        // Update the displayed prices
        priceMinDisplay.textContent = minValue.toLocaleString();
        priceMaxDisplay.textContent = maxValue.toLocaleString();
    }

    // Prevent min slider from going above max
    sliderMin.addEventListener("input", function() {
        if (parseInt(this.value) > parseInt(sliderMax.value)) {
            this.value = sliderMax.value;
        }
        updateSlider();
    });

    // Prevent max slider from going below min
    sliderMax.addEventListener("input", function() {
        if (parseInt(this.value) < parseInt(sliderMin.value)) {
            this.value = sliderMin.value;
        }
        updateSlider();
    });

    // Toggle arrow animation
    ;

    // Initialize the slider
    updateSlider();
});



document.getElementById('filterBtn').addEventListener('click', function() {
    const dropdown = document.getElementById('filterDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
  
  document.getElementById('applyFilter').addEventListener('click', function() {
    const selected = [];
    document.querySelectorAll('input[name="filter"]:checked').forEach(checkbox => {
      selected.push(checkbox.value);
    });
    alert('Selected filters: ' + selected.join(', '));
    document.getElementById('filterDropdown').style.display = 'none';
  });




  document.addEventListener('DOMContentLoaded', function() {
    const tags = [
        "Healthy", "Low fat", "Vegetarian",
        "Kid foods", "Vitamins", "Bread",
        "Meat", "Snacks", "Tiffin",
        "Lunch", "Dinner", "Breakfast",
        "Fruit"
    ];
    
    const tagsGrid = document.getElementById('tagsGrid');
    
    // Create tag elements
    tags.forEach(tag => {
        const tagElement = document.createElement('div');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        
        // Add click event to toggle selection
        tagElement.addEventListener('click', function() {
            this.classList.toggle('selected');
        });
        
        tagsGrid.appendChild(tagElement);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const totalPages = 21;
    let currentPage = 5; // Change this to test different pages
    
    function updatePagination() {
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';
        
        // Previous button
        const prevLink = document.createElement('a');
        prevLink.href = '#';
        prevLink.innerHTML = '&laquo;';
        if (currentPage === 1) prevLink.classList.add('disabled');
        prevLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                updatePagination();
            }
        });
        pagination.appendChild(prevLink);
        
        // First page
        if (currentPage > 3) {
            const firstPage = document.createElement('a');
            firstPage.href = '#';
            firstPage.textContent = '1';
            firstPage.addEventListener('click', function(e) {
                e.preventDefault();
                currentPage = 1;
                updatePagination();
            });
            pagination.appendChild(firstPage);
            
            if (currentPage > 4) {
                const dots = document.createElement('span');
                dots.className = 'dots';
                dots.textContent = '...';
                pagination.appendChild(dots);
            }
        }
        
        // Middle pages
        const start = Math.max(1, currentPage - 2);
        const end = Math.min(totalPages, currentPage + 2);
        
        for (let i = start; i <= end; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.textContent = i;
            if (i === currentPage) pageLink.classList.add('active');
            pageLink.addEventListener('click', function(e) {
                e.preventDefault();
                currentPage = i;
                updatePagination();
            });
            pagination.appendChild(pageLink);
        }
        
        // Last page
        if (currentPage < totalPages - 2) {
            if (currentPage < totalPages - 3) {
                const dots = document.createElement('span');
                dots.className = 'dots';
                dots.textContent = '...';
                pagination.appendChild(dots);
            }
            
            const lastPage = document.createElement('a');
            lastPage.href = '#';
            lastPage.textContent = totalPages;
            lastPage.addEventListener('click', function(e) {
                e.preventDefault();
                currentPage = totalPages;
                updatePagination();
            });
            pagination.appendChild(lastPage);
        }
        
        // Next button
        const nextLink = document.createElement('a');
        nextLink.href = '#';
        nextLink.innerHTML = '&raquo;';
        if (currentPage === totalPages) nextLink.classList.add('disabled');
        nextLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage < totalPages) {
                currentPage++;
                updatePagination();
            }
        });
        pagination.appendChild(nextLink);
        
        console.log('Current page:', currentPage); // For debugging
    }
    
    // Initialize
    updatePagination();
});









