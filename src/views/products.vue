<template>
    <div class="container">
        <h1>Listado Products</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">price</th>
                    <th scope="col">stock</th>
                    <th scope="col">category_id</th>
                    <th scope="col">created_at</th>
                    <th scope="col">updated_at</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(Products, index) in Productss" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <th scope="row">{{ Products.id }}</th>
                    <th scope="row">{{ Products.name }}</th>
                    <th scope="row">{{ Products.price }}</th>
                    <th scope="row">{{ Products.stock }}</th>
                    <th scope="row">{{ Products.category_id }}</th>
                    <th scope="row">{{ Products.created_at }}</th>
                    <th scope="row">{{ Products.updated_at }}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'products',
    data() {
        return {
            productss: []
        }
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/products")
            .then(response => (this.productss = response.data.productss))
    }
}
</script>