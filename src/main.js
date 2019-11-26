import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);
Vue.config.productionTip = false
firebase.initializeApp({
  apiKey: "AIzaSyB6w6ipePXP-CuyVv2rg6CvXKJOpP28PMU",
  authDomain: "vue-calendar-289a5.firebaseapp.com",
  databaseURL: "https://vue-calendar-289a5.firebaseio.com",
  projectId: "vue-calendar-289a5",
  storageBucket: "vue-calendar-289a5.appspot.com",
  messagingSenderId: "491775430916",
  appId: "1:491775430916:web:4abbd3b3bc0964885f4051"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')