<script setup>
import Login from '@/components/Login.vue';
import { RouterLink, RouterView } from 'vue-router';
import useForm from '@/stores/form';
const formValues = useForm();
</script>

<template>
  <main>
    <h1>Login Page</h1>
    <Login />
  </main>
  <div>
    <nav>
      <RouterLink to="/signup" @click="formValues.singOffIn"
        >Sign Up</RouterLink
      >
    </nav>
  </div>
  <RouterView />
</template>
