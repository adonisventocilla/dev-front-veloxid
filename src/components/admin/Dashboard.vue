<template>
  <div>
    <!-- partial:partials/_navbar.html -->
    <nav
      class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row"
    >
      <HomeAdmin />
    </nav>
    <div class="container-fluid page-body-wrapper">
      <!-- partial:partials/_sidebar.html -->
      <LateralMenu />
      <!-- partial -->
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="page-header">
            <h3 class="page-title">
              Dashboard
            </h3>
            <nav aria-label="breadcrumb"></nav>
          </div>
          <div class="row">
            <div class="col-md-4 stretch-card grid-margin">
              <div class="card bg-gradient-danger card-img-holder text-white">
                <div class="card-body">
                  <img
                    src="@/purple/assets/images/dashboard/circle.svg"
                    class="card-img-absolute"
                    alt="circle-image"
                  />
                  <h4 class="font-weight-normal mb-3">
                    Pedidos
                    <i class="mdi mdi-chart-line mdi-24px float-right"></i>
                  </h4>
                  <h2 class="mb-5">16</h2>
                </div>
              </div>
            </div>
            <div class="col-md-4 stretch-card grid-margin">
              <div class="card bg-gradient-info card-img-holder text-white">
                <div class="card-body">
                  <img
                    src="@/purple/assets/images/dashboard/circle.svg"
                    class="card-img-absolute"
                    alt="circle-image"
                  />
                  <h4 class="font-weight-normal mb-3">
                    Pedidos Pendientes
                    <i
                      class="mdi mdi-bookmark-outline mdi-24px float-right"
                    ></i>
                  </h4>
                  <h2 class="mb-5">10</h2>
                </div>
              </div>
            </div>
            <div class="col-md-4 stretch-card grid-margin">
              <div class="card bg-gradient-success card-img-holder text-white">
                <div class="card-body">
                  <img
                    src="@/purple/assets/images/dashboard/circle.svg"
                    class="card-img-absolute"
                    alt="circle-image"
                  />
                  <h4 class="font-weight-normal mb-3">
                    Conductores Activos
                    <i class="mdi mdi-diamond mdi-24px float-right"></i>
                  </h4>
                  <h2 class="mb-5">{{ active }}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeAdmin from '@/components/admin/HomeAdmin'
import LateralMenu from '@/components/admin/LateralMenu'
export default {
  name: 'Dashboard',
  components: { HomeAdmin, LateralMenu },
  data () {
    return {
      active: ''
    }
  },

  created () {
    this.$http
      .get('/drivers', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      })
      .then(res => {
        this.active = res.data.active
      })
  }
}
</script>
