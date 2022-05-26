import { defineStore } from 'pinia';
import axios from 'axios';
const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const useForm = defineStore({
  id: 'form',
  state: () => ({
    email: '',
    password: '',
    name: '',
    passwordConfirn: '',
    singUp: false,
  }),
  actions: {
    handleSubmit() {
      const { email, password } = this;
      console.log(email);
      console.log(password);
    },
    handleSubmitSign() {
      const { email, password, name, passwordConfirn } = this;
      console.log(name);
      console.log(email);
      console.log(password);
      console.log(passwordConfirn);
    },
    singOffIn() {
      this.singUp = !this.singUp;
    },
  },
});
export default useForm;
