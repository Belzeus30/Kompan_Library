//filter dropdown
function toggleFilters() {
    const popup = document.getElementById("Filters");
    popup.classList.toggle("show");
}

function handleFilterClick(category) {
    // Remove the 'active' class from all filter buttons
    const filterButtons = document.querySelectorAll('.filterbtn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Add 'active' class to the clicked filter button
    const clickedButton = document.querySelector(`[data-category="${category}"]`);
    clickedButton.classList.add('active');

    // Show/hide books based on the selected category
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
        const bookCategory = book.getAttribute('data-category');
        if (bookCategory === category || category === 'all') {
            book.style.display = 'flex'; // Show books of the selected category or all books if 'all' is selected
        } else {
            book.style.display = 'none'; // Hide other books
        }
    });
}
function filterFunction() {
    // Get the search input value
    var input = document.querySelector('.search');
    var filter = input.value.toUpperCase();

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
// Prevent the form from submitting and reloading the page
document.getElementById("filterForm").addEventListener("submit", function (event) {
    event.preventDefault();
});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const dateInput = document.getElementById("date");

// Get today's date in the format YYYY-MM-DD
const today = new Date().toISOString().split("T")[0];

// Set the minimum date attribute to today
dateInput.setAttribute("min", today);

// Add an event listener to the date input to prevent selecting past dates
dateInput.addEventListener("input", function () {
    const selectedDate = dateInput.value;
    if (selectedDate < today) {
        dateInput.setCustomValidity("Please select a date from today or in the future.");
    } else {
        dateInput.setCustomValidity("");
    }
});

function changeCSS() {
    const linkElement = document.getElementById('css-link');
    const currentHref = linkElement.getAttribute('href'); // Get the current href

    // Toggle between 'style.css' and 'styles.css'
    const newHref = (currentHref === 'styles.css') ? 'style.css' : 'styles.css';

    linkElement.setAttribute('href', newHref); // Set the new href
}

let isStyle1 = true;

function setCSSForPhone() {
    const linkElement = document.getElementById('css-link');
    const currentHref = linkElement.getAttribute('href'); // Get the current href
    const screenWidth = window.innerWidth;

    // Determine whether to use 'style.css' or 'styles.css' based on screen width
    const newHref = (screenWidth <= 425) ? 'styles.css' : 'style.css';

    linkElement.setAttribute('href', newHref); // Set the new href
}

function changeCSS() {
    const linkElement = document.getElementById('css-link');
    const currentHref = linkElement.getAttribute('href'); // Get the current href

    // Toggle between 'style.css' and 'styles.css'
    const newHref = (isStyle1) ? 'styles.css' : 'style.css';

    linkElement.setAttribute('href', newHref); // Set the new href

    isStyle1 = !isStyle1;
}

const button = document.getElementById('change-css-button');
button.addEventListener('click', changeCSS);

// Set the initial CSS based on screen width
setCSSForPhone();

// Listen for window resize events to adjust CSS when the screen width changes
window.addEventListener('resize', setCSSForPhone);

let isImage1 = true;

function imgToggle() {
    const image = document.getElementById("css-image");
    if (isImage1) {
        image.src = "column.png";
        image.alt = "row.png";
    } else {
        image.src = "row.png";
        image.alt = "column.png";
    }
    isImage1 = !isImage1;
}

document.getElementById("change-css-button").addEventListener("click", imgToggle);

// Function to open the popup
function openPopup() {
    const popup = document.getElementById("isbn-popup");
    popup.style.display = "block";
}

// Function to close the popup
function closeIsbnPopup() {
    const popup = document.getElementById("isbn-popup");
    popup.style.display = "none";
}

// Function to add a book by ISBN

// Function to create a new book element and add it to the container
function addBook(title, author, state, description) {
    // Create a new book element
    const bookElement = document.createElement("div");
    bookElement.className = "book";

    // Create the book info section
    const bookInfo = document.createElement("div");
    bookInfo.className = "book-info";

    const bookImage = document.createElement("img");
    bookImage.alt = "Book Cover Image";

    // Check if there is an image available, and if not, set a default image source
    if (bookImage.imageLinks && bookImage.imageLinks.thumbnail) {
        bookImage.src = bookImage.imageLinks.thumbnail;
    } else {
        bookImage.src = "cover.jpg"; // Use a default image source (cover.jpg)
    }

    // Create the book details section
    const bookDetails = document.createElement("div");
    bookDetails.className = "book-details";
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = title;
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `Author: ${author}`;
    const bookState = document.createElement("p");
    bookState.textContent = `State: ${state}`;

    // Create the rating section (You can add a star rating here)
    const rating = document.createElement("div");
    rating.className = "rating";
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement("span");
        star.className = "star";
        star.dataset.rating = i;
        star.textContent = "☆";
        rating.appendChild(star);
    }

    // Append elements to the book details section
    bookDetails.appendChild(bookTitle);
    bookDetails.appendChild(bookAuthor);
    bookDetails.appendChild(bookState);
    bookDetails.appendChild(rating);

    // Create the book description section
    const bookDescription = document.createElement("div");
    bookDescription.className = "book-description";
    const bookDescriptionP1 = document.createElement("p");
    const maxCharacters = 350; // Change this value to your desired character limit
    const descriptionText = description || "No description available";
    bookDescriptionP1.textContent = descriptionText.length > maxCharacters
        ? descriptionText.slice(0, maxCharacters) + "..."
        : descriptionText;
    const bookDescriptionP2 = document.createElement("p");


    // Append description paragraphs to the book description section
    bookDescription.appendChild(bookDescriptionP1);
    bookDescription.appendChild(bookDescriptionP2);

    // Create the book footer section
    const bookFooter = document.createElement("p");
    bookFooter.innerHTML = `<p  class="book-footer">More info about the book</p>`;

    // Append book image, details, description, and footer to the book info section
    bookInfo.appendChild(bookImage);
    bookInfo.appendChild(bookDetails);

    // Append book info, description, and footer to the book element
    bookElement.appendChild(bookInfo);
    bookElement.appendChild(bookDescription);
    bookElement.appendChild(bookFooter);

    // Append the new book element to the container
    const bookContainer = document.querySelector(".bookgrid");
    bookContainer.appendChild(bookElement);
}

// Function to fetch book data from Google Books API based on ISBN
function fetchBookInfo(isbn) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
        .then(response => response.json())
        .then(data => {
            // Check if any book data was found
            if (data.totalItems > 0) {
                const book = data.items[0].volumeInfo; // Get the first book in the response

                // Call the addBook function with book details
                addBook(
                    book.title || "Title not available",
                    (book.authors && book.authors.join(", ")) || "Author not available",
                    "State: Unknown",
                    book.description || "No description available"
                );
            } else {
                // Handle the case where no book data was found for the given ISBN
                alert("No book data found for the provided ISBN.");
            }
        })
        .catch(error => {
            console.error("Error fetching book data:", error);
            alert("An error occurred while fetching book data. Please try again.");
        });
}

// Event listener for the "Add Book" button
document.getElementById("open-popup-button").addEventListener("click", openPopup);
document.getElementById("popup-close").addEventListener("click", closeIsbnPopup);
document.getElementById("add-book-button").addEventListener("click", function () {
    const isbnInput = document.getElementById("isbn-input");
    const isbn = isbnInput.value;

    if (isbn.trim() !== "") {
        // Fetch book data based on ISBN
        fetchBookInfo(isbn);
    } else {
        alert("Please enter a valid ISBN.");
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function to open the modal for a book
function openModalForBook(book) {
    const modalContent = document.getElementById("modalContent");

    // Clone the clicked book square
    const clonedBook = book.cloneNode(true);

    // Remove the "More info" paragraph from the cloned book
    const moreInfo = clonedBook.querySelector(".book-footer");
    if (moreInfo) {
        moreInfo.remove();
    }

    // Add a "Read More" button to the cloned book
    const reservationButton = document.createElement("button");
    reservationButton.textContent = "Reservation";
    reservationButton.classList.add("reservation-button");
    reservationButton.addEventListener("click", function () {
        // Open the reservation popup when the "Reservation" button is clicked
        openReservationPopup();
    });
    clonedBook.appendChild(reservationButton);

    // Remove transition and transform properties
    clonedBook.style.transition = "none";
    clonedBook.style.transform = "none";

    // Clear the modal content
    modalContent.innerHTML = "";

    // Append the cloned book to the modal content
    modalContent.appendChild(clonedBook);

    // Open the modal
    openModal();
}

// Attach click event listeners to each book
const books = document.querySelectorAll(".book");
books.forEach((bookElement) => {
    bookElement.addEventListener("click", function () {
        // Open the modal for the clicked book
        openModalForBook(bookElement);
    });
});

// Function to close the modal for an enlarged book
function closeModalForBook() {
    const modal = document.getElementById("bookModal");
    modal.style.display = "none";
}

// Function to open the modal
function openModal() {
    const modal = document.getElementById("bookModal");
    modal.style.display = "block";
}

// Function to open the reservation popup
function openReservationPopup() {
    // Implement your reservation popup logic here
}

// Close the modal when the close button is clicked
const closeModal = document.querySelector(".close");
closeModal.addEventListener("click", closeModalForBook);