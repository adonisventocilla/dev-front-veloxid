<template>
  <div>
    <!-- partial:partials/_navbar.html -->
    <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div
        class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center"
      >
        <a
          class="navbar-brand brand-logo"
          href=""
          ><img src="@/purple/assets/images/logo.png" alt="logo" />
        </a>
        <a
          class="navbar-brand brand-logo-mini"
          href="@/purple/assets/images/perfil.jpg"
          ><img src="@/purple/assets/images/perfil.jpg" alt="logo"
        /></a>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-stretch">
        <button
          class="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span class="mdi mdi-menu"></span>
        </button>

        <ul class="navbar-nav navbar-nav-right">
          <li class="nav-item nav-profile dropdown">
            <a
              class="nav-link"
            >
              <div class="nav-profile-img">
                <i class="mdi mdi-account"></i>
                <span class="availability-status online"></span>
              </div>
              <div class="nav-profile-text">
                <p class="mb-1 text-black">{{ user.name }}</p>
              </div>
            </a>
          </li>

          <li class="nav-item d-none d-lg-block full-screen-link">
            <a class="nav-link">
              <i class="mdi mdi-fullscreen" id="fullscreen-button"></i>
            </a>
          </li>

          <li class="nav-item nav-logout d-none d-lg-block">
            <a class="btn nav-link" @click="logout()">
              <i class="mdi mdi-power"></i>
              <form id="logout-form" action style="display: none;"></form>
              <title>Cerrar sesión</title>
            </a>
          </li>
        </ul>
        <button
          class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span class="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import '@/purple/assets/js/off-canvas.js'
import axios from 'axios'
export default {
  name: 'HomeAdmin',
  data () {
    return {
      user: {}
    }
  },
  created () {
    axios
      .get('http://localhost/api/user', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      })
      .then(res => {
        this.user = res.data
      })
  },
  methods: {
    logout () {
      axios.post('http://localhost/api/logout', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      })
      this.$router.push('/login')
    }
  }
}
</script>
<style></style>
