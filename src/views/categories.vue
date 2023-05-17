<template>
    <div class="container">
        <h1>Listado categries</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">description</th>
                    <th scope="col">created_at</th>
                    <th scope="col">updated_at</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(categries, index) in categriess" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <th scope="row">{{ categries.id }}</th>
                    <th scope="row">{{ categries.name }}</th>
                    <th scope="row">{{ categries.description }}</th>
                    <th scope="row">{{ categries.created_at }}</th>
                    <th scope="row">{{ categries.updated_at }}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'categories',
    data() {
        return {
            categoriess: []
        }
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/categories")
            .then(response => (this.categriess = response.data.categriess))
    }
}
</script>