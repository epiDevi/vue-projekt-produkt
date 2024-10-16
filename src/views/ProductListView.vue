<template>
    <h2>Liste</h2>
    <div class="product-container">
        <div class="card" v-for="product in products" :key="product.id">
            <img :src="product.imageName" :alt="product.name" class="card__img">
            <div class="card__details">
                <h3 class="card__name">
                    {{ product.name }}

                </h3>
                <p class="card__price">
                    {{ product.price }}
                </p>
                <footer class="footer">
                <router-link :to="'/products/'+ product.id">Details ansehen</router-link>
            </footer>
            </div>
            

        </div>
    </div>
</template>
<script setup>
import { products } from '../data.js'
</script>
<style>
.product-container{
    display: grid;
    grid-template-columns: repeat(3,1fr ) ;
    gap: 2rem;
    justify-items: center;
}
.card__details{
    background-color: white;
    padding: 2rem;
}
.card__name, .card__price{
    margin-bottom: 1rem;
}
</style>