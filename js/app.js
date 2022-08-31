
const searchBook = async () => {
    const searchFieldValue = document.getElementById('search-field').value;
    showSpinner(true);

    const res = await fetch(`http://openlibrary.org/search.json?q=${searchFieldValue}`);
    const data = await res.json();
    displayBooks(data.docs);
}

const displayBooks = books => {

    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = '';

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('col');

        bookDiv.innerHTML = `
        <div class="card">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i ? book.cover_i : 'Provide a blank Image Link'}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Book Title: ${book.title}</h5>
                <p>Author Name: ${book.author_name[0]}</p>
                <p>Publish Date: ${book.publish_date[0]}</p>
                
            </div>
        </div>
    `;
        booksContainer.appendChild(bookDiv);
        showSpinner(false);

    });
}

const showSpinner = (isLoading) => {
    const spinnerSection = document.getElementById('spinner');
    if (isLoading) {
        spinnerSection.classList.remove('d-none');
    }
    else {
        spinnerSection.classList.add('d-none');
    }
}

// searchBook('helloworld')
