const productList = document.getElementById('products');

async function loadProducts() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        let products = await response.json();

        products.forEach(product => {
            // Create product card container
            let productCard = document.createElement('div');
            productCard.className = 'product-card';

            // Create and append the image
            let img = document.createElement('img');
            img.src = product.image;
            img.alt = product.title;
            img.className= "image"
            productCard.appendChild(img);

            // Create and append the product title
            let title = document.createElement('h3');
            title.textContent = product.title;
            productCard.appendChild(title);

            // Create and append the product description
            let description = document.createElement('p');
            description.textContent = product.description.substring(0, 100) + '...';
            productCard.appendChild(description);

            // Create and append the price
            let price = document.createElement('div');
            price.className = 'price';
            price.textContent = `$${product.price}`;
            productCard.appendChild(price);

            // Create and append the category
            let category = document.createElement('p');
            category.className = 'category';
            category.textContent = `Category: ${product.category}`;
            productCard.appendChild(category);

            // Create and append the rating
            let rating = document.createElement('p');
            rating.className = 'rating';
            rating.textContent = `Rating: ${product.rating.rate} (${product.rating.count} reviews)`;
            productCard.appendChild(rating);

            // Create and append the "Add to Cart" button
            let button = document.createElement('button');
            button.textContent = 'Add to Cart';
            productCard.appendChild(button);

            // Append the product card to the product list
            productList.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

loadProducts();
