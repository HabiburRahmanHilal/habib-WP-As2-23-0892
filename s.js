document.addEventListener("DOMContentLoaded", function () {
    const categoriesList = document.getElementById("categories-list");
    const bookList = document.getElementById("book-list");
  
    
    fetch("books.json")
      .then(response => response.json())
      .then(data => {
       
        const categories = [...new Set(data.map(book => book.category))];
  
        
        categories.forEach(category => {
          const button = document.createElement("button");
          button.innerText = category;
          button.addEventListener("click", () => displayBooksByCategory(category, data));
          categoriesList.appendChild(button);
        });
  
        
        displayBooksByCategory(null, data);
      });
  
    function displayBooksByCategory(category, data) {
      
      bookList.innerHTML = "";
  
     
      const filteredBooks = category ? data.filter(book => book.category === category) : data;
  
     
      filteredBooks.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";
  
        const img = document.createElement("img");
        img.src = book.profileURL; 
        img.alt = book.title;
  
        const title = document.createElement("h3");
        title.innerText = book.title;
  
        const author = document.createElement("p");
        author.innerText = "Author: " + book.author;
  
        const price = document.createElement("p");
        price.innerText = "Price: $" + book.price.toFixed(2);
  
        const description = document.createElement("p");
        description.innerText = book.description;
  
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(price);
        card.appendChild(description);
  
        bookList.appendChild(card);
      });
    }
  });
  