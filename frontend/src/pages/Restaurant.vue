<template>
    <div class="restaurant-page">
        <div class="restaurant-info">
            <h1>{{ restaurant.name }}</h1>
            <p>Cuisine: {{ restaurant.cuisine }}</p>
            <p>Location: {{ restaurant.location }}</p>
            <!-- Add more restaurant details as needed -->
        </div>
        <div class="menu">
            <h2>Menu</h2>
            <Menu :items="menuItems" @add-to-cart="addToCart" />
        </div>
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue'; // Assuming your Menu component path

export default {
    name: 'RestaurantPage',
    components: {
        Menu
    },
    data() {
        return {
            restaurant: {
                id: 1,
                name: 'Pizza Palace',
                cuisine: 'Italian',
                location: '123 Main St'
                // Add more restaurant details as needed
            },
            menuItems: [
                { id: 1, name: 'Margherita Pizza', price: 9.99, description: 'Fresh mozzarella, tomatoes, basil' },
                { id: 2, name: 'Pepperoni Pizza', price: 10.99, description: 'Classic pepperoni, mozzarella, tomato sauce' },
                { id: 3, name: 'Spaghetti Carbonara', price: 12.99, description: 'Pasta with bacon, eggs, cheese, and black pepper' },
                // Add more menu items as needed
            ]
        };
    },
    methods: {
        addToCart(item) {
            // Emit event to parent component (or handle directly)
            this.$emit('add-to-cart', item);
        }
    }
}
</script>

<style scoped>
.restaurant-page {
    padding: 20px;
}

.restaurant-info {
    margin-bottom: 20px;
}

.restaurant-info h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

.menu {
    margin-top: 20px;
}
</style>