//filter dropdown
//
function myFunction() {
    document.getElementById("Filters").classList.toggle("show");
}
//filter clicking
//
function showCategory(category) {
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
        const bookCategory = book.getAttribute('data-category');
        if (bookCategory === category || category === 'all') {
            book.style.display = 'block'; // Show books of the selected category or all books if 'all' is selected
        } else {
            book.style.display = 'none'; // Hide other books
        }
    });
}

// Event listener for filter buttons
const filterButtons = document.querySelectorAll('.filterbtn');
filterButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        // Remove the 'active' class from all filter buttons
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        const category = e.target.dataset.category; // Get the category from data-category attribute
        e.target.classList.add('active'); // Add 'active' class to the clicked filter button
        showCategory(category);
    });
});
//Modal enlarged book
//
// Get references to the modal and close button
const modal = document.getElementById("bookModal");
const closeModal = document.querySelector(".close"); // Changed the selector to match the close button

// Get references to the books
const books = document.querySelectorAll(".book");

// Get a reference to the modal content
const modalContent = document.getElementById("modalContent");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModalFunction() {
    modal.style.display = "none";
    // Clear the cloned book content
    modalContent.innerHTML = "";
}

// Function to close the cloned book within the modal
function closeClonedBook() {
    closeModalFunction();
}

// Attach click event listeners to each book
books.forEach((book) => {
    book.addEventListener("click", function () {
        // Clone the clicked book square
        const clonedBook = this.cloneNode(true);

        // Remove the click event listener from the cloned book
        clonedBook.removeEventListener("click", null);

        // Set the class of the cloned book to "enlarged-book" for styling
        clonedBook.classList.add("enlarged-book");

        // Remove the "More info" paragraph from the cloned book
        const moreInfo = clonedBook.querySelector(".book-footer");
        if (moreInfo) {
            moreInfo.remove();
        }

        // Remove transition and transform properties
        clonedBook.style.transition = "none";
        clonedBook.style.transform = "none";

        // Append the cloned book to the modal content
        modalContent.innerHTML = "";
        modalContent.appendChild(clonedBook);



        // Open the modal
        openModal();
    });
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", closeModalFunction);

// Close the cloned book within the modal when the user clicks outside of it
window.addEventListener("click", function (event) {
    if (event.target === modalContent) {
        closeModalFunction();
    }
});


// Get all the star elements
///////
var stars = document.querySelectorAll('.star');

// Add a click event listener to each star
stars.forEach(function(star) {
    star.addEventListener('click', function() {
        var rating = this.getAttribute('data-rating'); // Get the rating value

        // Set the rating for this book
        var bookDetails = this.closest('.book').querySelector('.book-details');
        bookDetails.querySelector('p:nth-child(4)').textContent = 'Rating: ' + '★'.repeat(rating) + '☆'.repeat(5 - rating);

        // Set the rating value as a data attribute for the book
        bookDetails.querySelector('.rating').setAttribute('data-rating', rating);

        // Update the rating for the other stars
        stars.forEach(function(s) {
            var sRating = s.getAttribute('data-rating');
            s.textContent = sRating <= rating ? '★' : '☆';
        });
    });
});
function filterFunction() {
    // Get the search input value
    var input = document.querySelector('.search');


    // Get all the book elements within the bookgrid
    var books = document.querySelectorAll('.bookgrid .book');

    // Loop through all the book elements and hide/show them based on the search input
    for (var i = 0; i < books.length; i++) {
        var book = books[i];
        var title = book.querySelector('h3');
        var author = book.querySelector('p:nth-child(2)'); // Assuming author is the second <p> element
        var titleText = title.textContent || title.innerText;
        var authorText = author.textContent || author.innerText;

        // If the book title or author name contains the search text, display the book; otherwise, hide it
        if (titleText.toUpperCase().indexOf(filter) > -1 || authorText.toUpperCase().indexOf(filter) > -1) {
            book.style.display = '';
        } else {
            book.style.display = 'none';
        }
    }
}
