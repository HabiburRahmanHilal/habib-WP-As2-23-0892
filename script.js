fetch('books.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return response.json();
  })
  .then(books => {
    let html = '';
    books.forEach(book => {
      let htmlSegment = `<div class="book">
                            <img src="${book.profileURL}" >
                            <h2>${book.title}</h2>
                            <h2>${book.author}</h2>
                            <h2>${book.category}</h2>
                            
                        </div>`;

      html += htmlSegment;
    });

    let container1 = document.querySelector('.container1');
    container1.innerHTML = html;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });




  



