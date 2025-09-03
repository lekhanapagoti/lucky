const restaurants = [
    { name: "Pizza Palace", cuisine: "Italian", img: "https://source.unsplash.com/250x150/?pizza" },
    { name: "Curry Corner", cuisine: "Indian", img: "https://source.unsplash.com/250x150/?curry" },
    { name: "Sushi Spot", cuisine: "Japanese", img: "https://source.unsplash.com/250x150/?sushi" },
    { name: "Burger Barn", cuisine: "American", img: "https://source.unsplash.com/250x150/?burger" }
];

const restaurantList = document.getElementById("restaurant-list");
const searchInput = document.getElementById("search");

// Function to display restaurants
function displayRestaurants(data) {
    restaurantList.innerHTML = "";
    data.forEach(r => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${r.img}" alt="${r.name}">
            <h3>${r.name}</h3>
            <p>${r.cuisine}</p>
        `;
        restaurantList.appendChild(card);
    });
}

// Search functionality
searchInput.addEventListener("keyup", () => {
    const keyword = searchInput.value.toLowerCase();
    const filtered = restaurants.filter(r =>
        r.name.toLowerCase().includes(keyword) || r.cuisine.toLowerCase().includes(keyword)
    );
    displayRestaurants(filtered);
});

// Initial display
displayRestaurants(restaurants);
