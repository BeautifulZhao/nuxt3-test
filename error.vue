<template>
    <h1>找不到页面或者无权访问</h1>
    <h4>{{ statusCode }}</h4>
    <h4>{{ statusMessage }}</h4>
</template>

<script setup>
const error = useError()
console.log(error,'ssssss');

const statusCode = error.value.statusCode
const statusMessage = error.value.statusMessage
</script>