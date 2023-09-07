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

// Attach click event listeners to each book
books.forEach(book => {
    book.addEventListener("click", function () {
        // Clone the clicked book square
        const clonedBook = this.cloneNode(true);

        // Remove the click event listener from the cloned book
        clonedBook.removeEventListener("click", null);

        // Set the class of the cloned book to "enlarged-book" for styling
        clonedBook.classList.add("enlarged-book");

        // Remove transition and transform properties
        clonedBook.style.transition = "none";
        clonedBook.style.transform = "none";

        // Append the cloned book to the modal content
        modalContent.innerHTML = "";
        modalContent.appendChild(clonedBook);

        // Display the modal
        modal.style.display = "block";
    });
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close the modal when the user clicks outside of it
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});


