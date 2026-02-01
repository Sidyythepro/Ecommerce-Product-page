// Product Data (20+ products, 4 categories)
const products = [
  { name: "Smartphone X1", price: 15999, rating: 4.5, category: "Electronics" },
  { name: "Wireless Earbuds", price: 2499, rating: 4.2, category: "Electronics" },
  { name: "Laptop Pro 14", price: 65999, rating: 4.8, category: "Electronics" },
  { name: "Smart Watch Z", price: 3999, rating: 4.0, category: "Electronics" },
  { name: "Bluetooth Speaker", price: 1999, rating: 4.1, category: "Electronics" },

  { name: "Men's Casual Shirt", price: 899, rating: 4.3, category: "Fashion" },
  { name: "Women's Handbag", price: 1299, rating: 4.6, category: "Fashion" },
  { name: "Running Shoes", price: 2499, rating: 4.4, category: "Fashion" },
  { name: "Denim Jeans", price: 1499, rating: 4.2, category: "Fashion" },
  { name: "Winter Jacket", price: 2999, rating: 4.7, category: "Fashion" },

  { name: "Atomic Habits", price: 499, rating: 4.9, category: "Books" },
  { name: "Rich Dad Poor Dad", price: 399, rating: 4.6, category: "Books" },
  { name: "The Alchemist", price: 299, rating: 4.5, category: "Books" },
  { name: "Deep Work", price: 450, rating: 4.7, category: "Books" },
  { name: "Ikigai", price: 350, rating: 4.4, category: "Books" },

  { name: "LED Table Lamp", price: 799, rating: 4.3, category: "Home" },
  { name: "Wall Clock", price: 599, rating: 4.1, category: "Home" },
  { name: "Non-Stick Pan", price: 999, rating: 4.5, category: "Home" },
  { name: "Bedsheet Set", price: 1199, rating: 4.2, category: "Home" },
  { name: "Vacuum Cleaner", price: 5499, rating: 4.6, category: "Home" },

  // Extra products
  { name: "Gaming Mouse", price: 1299, rating: 4.4, category: "Electronics" },
  { name: "Sunglasses", price: 699, rating: 4.0, category: "Fashion" },
  { name: "Cookbook Recipes", price: 299, rating: 4.1, category: "Books" },
  { name: "Air Freshener", price: 199, rating: 3.9, category: "Home" }
];

const productContainer = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

// Display Products
function displayProducts(productList) {
  productContainer.innerHTML = "";

  if (productList.length === 0) {
    productContainer.innerHTML = `<h2 style="text-align:center;width:100%;color:#555;">No products found!</h2>`;
    return;
  }

  productList.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p><b>Price:</b> ₹${product.price}</p>
      <p><b>Rating:</b> <span class="rating">${product.rating} ⭐</span></p>
      <p><b>Category:</b> ${product.category}</p>
      <span class="badge">${product.category}</span>
    `;

    productContainer.appendChild(card);
  });
}

// Filter + Sort Function
function applyFilterSort() {
  const selectedCategory = categoryFilter.value;
  const selectedSort = sortOption.value;

  // Filter
  let filteredProducts = products.filter(product => {
    return selectedCategory === "All" || product.category === selectedCategory;
  });

  // Sort
  if (selectedSort === "priceAsc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "priceDesc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "nameAsc") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedSort === "nameDesc") {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  } else if (selectedSort === "ratingAsc") {
    filteredProducts.sort((a, b) => a.rating - b.rating);
  } else if (selectedSort === "ratingDesc") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filteredProducts);
}

// Events
categoryFilter.addEventListener("change", applyFilterSort);
sortOption.addEventListener("change", applyFilterSort);

// Load Default
displayProducts(products);
