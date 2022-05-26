<script setup>
import useForm from '@/stores/form';
import { RouterLink, RouterView } from 'vue-router';
import Login from '@/components/Login.vue';
const formValues = useForm();
</script>
<template>
  <h1>Sign Up Page</h1>
  <Login />
  <div>
    <nav>
      <RouterLink to="/" @click="formValues.singOffIn">Login</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>
<style lang="scss">
@import '@/assets/variables.scss';
@import '@/assets/login.scss';
</style>
