<script setup>
import useForm from '@/stores/form';
const formValues = useForm();
</script>
<template>
  <div class="image">
    <img src="@/assets/logo.svg" alt="logo" class="logo" />
  </div>
  <form
    class="login"
    @submit.prevent="formValues.handleSubmit"
    v-if="!formValues.singUp"
  >
    <input type="email" v-model="formValues.email" placeholder="Email Here" />
    <input
      type="password"
      v-model="formValues.password"
      placeholder="Password Here"
    />
    <button type="submit" class="btn">Login</button>
  </form>
  <form
    class="login"
    @submit.prevent="formValues.handleSubmitSign"
    v-if="formValues.singUp"
  >
    <input
      type="name"
      v-model="formValues.name"
      placeholder="Name Here"
      v-if="formValues.singUp"
    />
    <input type="email" v-model="formValues.email" placeholder="Email Here" />
    <input
      type="password"
      v-model="formValues.password"
      placeholder="Password Here"
    />
    <input
      type="password"
      v-model="formValues.passwordConfirn"
      placeholder="Password Confirmation Here"
    />
    <button type="submit" class="btn">Sign Up</button>
  </form>
</template>
<style lang="scss">
@import '@/assets/variables.scss';
@import '@/assets/login.scss';
</style>
