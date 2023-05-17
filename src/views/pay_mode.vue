<template>
    <div class="container">
        <h1>Listado Pay Mode</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">observation</th>
                    <th scope="col">created_at</th>
                    <th scope="col">updated_at</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(pay_mode, index) in pay_modes" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <th scope="row">{{ pay_mode.id }}</th>
                    <th scope="row">{{ pay_mode.name }}</th>
                    <th scope="row">{{ pay_mode.observation }}</th>
                    <th scope="row">{{ pay_mode.created_at }}</th>
                    <th scope="row">{{ pay_mode.updated_at }}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'pay_mode',
    data() {
        return {
            pay_modes: []
        }
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/pay_mode")
            .then(response => (this.categriess = response.data.categriess))
    }
}
</script>