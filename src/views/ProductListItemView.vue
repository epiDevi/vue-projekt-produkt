<template>
    <div v-if="product">
        <div class="card">
            <img :src="product.imageName" :alt="product.name" class="card__img">
            <div class="card__details">
                <h1>{{ product.name }}</h1>
                <h3 class="card__price">{{ product.price }}</h3>
                <p>{{ product.details }}</p>
            </div>
        </div>
    </div>
    <div v-else>
        <NotFoundView />
    </div>

</template>
<script setup>
import { products } from '../data.js'
import { useRoute } from 'vue-router'
import NotFoundView from '../views/NotFoundView.vue'


const route = useRoute()

const product = products.find(product => product.id === route.params.productId);



</script>
<style scoped>
.card{
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    width: 70%;
    margin: 0 auto;
    padding: 2rem;
    gap: 1rem;
}
.card h1{
    margin-bottom: 1rem;
}

</style>