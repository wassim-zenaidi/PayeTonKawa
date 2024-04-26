<template>
 <div>
    <div v-if="isAuthenticated">
      <button @click="logout">Logout</button>
      <h2>{{ user.name }}</h2>
      <h2>{{ user.email }}</h2>
      <h2>{{ user.picture }}</h2>
    </div>
    <div v-else>
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';


  export default {
    setup() {
      const { loginWithPopup, user, isAuthenticated,logout} = useAuth0();

      return {
        login: () => {
          loginWithPopup();
        },
        logout: () =>{
          logout();
        },
        user,
        isAuthenticated
      }
    }
  };
</script>

<style scoped>

</style>
