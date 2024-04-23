<template>
    <div class="menu">
        <div v-for="item in items" :key="item.id" class="menu-item">
            <h3>{{ item.name }}</h3>
            <p class="description">{{ item.description }}</p>
            <p class="price">Price: ${{ item.price.toFixed(2) }}</p>
            <button @click="addToCart(item)" class="btn btn-primary">Add to Cart</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    methods: {
        addToCart(item) {
            // Emit an event to notify the parent component that an item is added to the cart
            this.$emit('add-to-cart', item);
        }
    }
}
</script>

<style scoped>
.menu {
    display: flex;
    flex-wrap: wrap;
}

.menu-item {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: calc(33.33% - 20px);
    /* Adjust based on your layout */
}

.menu-item h3 {
    margin-top: 0;
}

.description {
    font-style: italic;
    margin-bottom: 5px;
}

.price {
    margin-bottom: 10px;
}

.btn {
    padding: 5px 10px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
}
</style>