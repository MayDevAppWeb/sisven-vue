<template>
    <div class="container">
        <h1>Listado customers</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">document_number</th>
                    <th scope="col">first_name</th>
                    <th scope="col">last_name</th>
                    <th scope="col">address</th>
                    <th scope="col">birthday</th>
                    <th scope="col">phone_number</th>
                    <th scope="col">email</th>
                    <th scope="col">created_at</th>
                    <th scope="col">updated_at</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(customer, index) in customers" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <th scope="row">{{ customer.id }}</th>
                    <th scope="row">{{ customer.document_number }}</th>
                    <th scope="row">{{ customer.first_name }}</th>
                    <th scope="row">{{ customer.last_name }}</th>
                    <th scope="row">{{ customer.address }}</th>
                    <th scope="row">{{ customer.birthday }}</th>
                    <th scope="row">{{ customer.phone_number }}</th>
                    <th scope="row">{{ customer.email }}</th>
                    <th scope="row">{{ customer.created_at }}</th>
                    <th scope="row">{{ customer.updated_at }}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'customer',
    data() {
        return {
            customers: []
        }
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/customers")
            .then(response => (this.customers = response.data.customers))
    }
}
</script>