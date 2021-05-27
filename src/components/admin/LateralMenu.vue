<template>
        <!-- partial:partials/_sidebar.html -->
         <nav class="sidebar sidebar-offcanvas" id="sidebar">
          <ul class="nav">
            <li class="nav-item nav-profile">
              <a href="" class="nav-link">
                <div class="nav-profile-image">
                  <img src="@/purple/assets/images/perfil.jpg" alt="profile">
                  <span class="login-status online"></span>
                  <!--change to offline or busy as needed-->
                </div>
                <div class="nav-profile-text d-flex flex-column">
                  <span class="font-weight-bold mb-2 text-truncate">{{ rol }}</span>
                  <span class="text-secondary text-small"></span>
                </div>
                <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
              </a>
            </li>
               <li class="nav-item" v-for="(item, i) in menu" :key="i">
              <router-link class="nav-link" :to="item.href">
                <span class="menu-title">{{item.nombre}}</span>
                <i :class="item.icon"></i>
              </router-link>
            </li>
          </ul>
          </nav>
</template>
<script>
import '@/purple/assets/js/off-canvas.js'
export default {
  name: 'LateralMenu',
  data () {
    return {
      user: {},
      menu: {},
      rol: {}
    }
  },
  created () {
    this.$http.get('/user', {
      headers: {'Content-Type': 'application/json'},
      withCredentials: 'include'
    }).then(res => { 
      this.user = res.data 
      this.rol = this.user.role.tipo
    })
    this.$http.get('/modules', {
      headers: {'Content-Type': 'application/json'},
      withCredentials: 'include'
    }).then(res => { 
      this.menu = res.data 
    })
  }
}
</script>
<style scoped>
  .text-truncate {
    width: 80px;
    white-space: initial;
  }
</style>
