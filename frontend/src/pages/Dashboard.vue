<template>
    <div class="home">
        <div class="banner">
            <h1>Welcome to Foodie App</h1>
            <p>Order delicious food from your favorite restaurants.</p>
            <router-link to="/restaurants" class="btn btn-primary">Browse Restaurants</router-link>
        </div>
        <div class="featured-restaurants">
            <h2>Featured Restaurants</h2>
            <div class="restaurant-card" v-for="restaurant in featuredRestaurants" :key="restaurant.id">
                <img :src="restaurant.image" alt="Restaurant Image">
                <h3>{{ restaurant.name }}</h3>
                <p>{{ restaurant.cuisine }}</p>
                <router-link :to="{ name: 'restaurant', params: { id: restaurant.id } }" class="btn btn-secondary">View
                    Menu</router-link>
                <router-link to="/restaurant"></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            featuredRestaurants: [
                { id: 1, name: 'Pizza Palace', cuisine: 'Italian', image: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Burger Joint', cuisine: 'American', image: 'https://via.placeholder.com/150' },
                { id: 3, name: 'Sushi Bar', cuisine: 'Japanese', image: 'https://via.placeholder.com/150' }
                // Add more featured restaurants as needed
            ]
        };
    }
}
</script>

<style scoped>
.home {
    text-align: center;
    padding: 20px;
}

.banner {
    margin-bottom: 40px;
}

.banner h1 {
    font-size: 36px;
    margin-bottom: 10px;
}

.banner p {
    font-size: 18px;
    margin-bottom: 20px;
}

.featured-restaurants {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.restaurant-card {
    width: 250px;
    margin: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.restaurant-card img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
}

.restaurant-card h3 {
    font-size: 20px;
    margin-bottom: 5px;
}

.restaurant-card p {
    font-size: 16px;
    margin-bottom: 10px;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn-primary {
    background-color: #007bff;
    color: #fff;
}

.btn-secondary {
    background-color: #6c757d;
    color: #fff;
}
</style>