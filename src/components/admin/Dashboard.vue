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
          <div class="card">
            <div class="card-body">
              <!-- Filtros -->
              <div class="form-group row" style="margin-top: 30px">
                <div class="col-lg-3">
                  <label>Desde:</label>
                  <input type="date" class="form-control" v-model="from" />
                </div>
                <div class="col-lg-3">
                  <label>Hasta:</label>
                  <input type="date" class="form-control" v-model="to" />
                </div>
                <div class="col-lg-2">
                  <label></label>
                  <button
                    class="form-control btn btn-gradient-primary mr-2"
                    @click="filtrarPedidos()"
                  >
                    Filtrar
                  </button>
                </div>
              </div>

              <div class="page-header">
                <h3 class="page-title">
                  Dashboard
                </h3>
                <nav aria-label="breadcrumb"></nav>
              </div>
              <div class="row">
                <div class="col-md-3 stretch-card grid-margin">
                  <div
                    class="card bg-gradient-danger card-img-holder text-white"
                  >
                    <div class="card-body card-dashboard">
                      <img
                        src="@/purple/assets/images/dashboard/circle.svg"
                        class="card-img-absolute"
                        alt="circle-image"
                      />
                      <h4 class="font-weight-normal mb-3">
                        Pendientes
                      </h4>
                      <h2 class="mb-5">{{ data.Pendiente }}</h2>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 stretch-card grid-margin">
                  <div
                    class="card bg-gradient-danger card-img-holder text-white"
                  >
                    <div class="card-body card-dashboard ">
                      <img
                        src="@/purple/assets/images/dashboard/circle.svg"
                        class="card-img-absolute"
                        alt="circle-image"
                      />
                      <h4 class="font-weight-normal mb-3">
                        En Aceptación
                      </h4>
                      <h2 class="mb-5">{{data.EnAceptación}}</h2>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 stretch-card grid-margin">
                  <div
                    class="card bg-gradient-danger card-img-holder text-white"
                  >
                    <div class="card-body card-dashboard ">
                      <img
                        src="@/purple/assets/images/dashboard/circle.svg"
                        class="card-img-absolute"
                        alt="circle-image"
                      />
                      <h4 class="font-weight-normal mb-3">
                        Aceptados
                      </h4>
                      <h2 class="mb-5">{{ data.Aceptado }}</h2>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 stretch-card grid-margin">
                  <div
                    class="card bg-gradient-danger card-img-holder text-white"
                  >
                    <div class="card-body card-dashboard ">
                      <img
                        src="@/purple/assets/images/dashboard/circle.svg"
                        class="card-img-absolute"
                        alt="circle-image"
                      />
                      <h4 class="font-weight-normal mb-3">
                        Rechazados
                      </h4>
                      <h2 class="mb-5">{{ data.Rechazado }}</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-3 stretch-card grid-margin">
                  <div
                    class="card bg-gradient-danger card-img-holder text-white"
                  >
                    <div class="card-body card-dashboard ">
                      <img
                        src="@/purple/assets/images/dashboard/circle.svg"
                        class="card-img-absolute"
                        alt="circle-image"
                      />
                      <h4 class="font-weight-normal mb-3">
                        En Tránsito
                      </h4>
                      <h2 class="mb-5">{{ data.Entránsito}}</h2>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 stretch-card grid-margin">
                  <div
                    class="card bg-gradient-danger card-img-holder text-white"
                  >
                    <div class="card-body card-dashboard ">
                      <img
                        src="@/purple/assets/images/dashboard/circle.svg"
                        class="card-img-absolute"
                        alt="circle-image"
                      />
                      <h4 class="font-weight-normal mb-3">
                        Entregados
                      </h4>
                      <h2 class="mb-5">{{ data.Entregado }}</h2>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 stretch-card grid-margin">
                  <div
                    class="card bg-gradient-danger card-img-holder text-white"
                  >
                    <div class="card-body card-dashboard ">
                      <img
                        src="@/purple/assets/images/dashboard/circle.svg"
                        class="card-img-absolute"
                        alt="circle-image"
                      />
                      <h4 class="font-weight-normal mb-3">
                        Falso Flete
                      </h4>
                      <h2 class="mb-5">{{ data.Falsoflete }}</h2>
                    </div>
                  </div>
                </div>
              </div>

              <!-- MODAL PARA VER DETALLE-->
              <div class="modal fade" id="myModal">
                <div class="modal-dialog modal-xl">
                  <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                      <div class="container-fluid">
                        <h3>Detalle de Servicio</h3>
                      </div>
                      <button
                        @click="clear()"
                        type="button"
                        class="close"
                        data-dismiss="modal"
                      >
                        &times;
                      </button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                      <div
                        class="container-fluid d-flex justify-content-between"
                      >
                        <div class="col-lg-6 pl-0">
                          <p class="mb-2 mt-3"><b>Datos Generales</b></p>
                          <p>
                            Código : {{ detail.id }}<br />
                            Fecha de Recojo :
                            {{ detail.fecha_recojo | timeFormat }}
                            <br />
                            Fecha de Entrega :
                            {{ detail.fecha_entrega | timeFormat }}
                            <br />
                            Estado del Servicio :
                            <label
                              v-if="detail.service_state_id == 2"
                              class="badge badge-info"
                              >Aceptado</label
                            >
                            <label
                              v-if="detail.service_state_id == 1"
                              class="badge badge-warning"
                              >Pendiente</label
                            >
                            <label
                              v-if="detail.service_state_id == 7"
                              class="badge badge-warning"
                              >En Aceptación</label
                            >
                            <label
                              v-if="detail.service_state_id == 3"
                              class="badge badge-secondary"
                              >En Tránsito</label
                            >
                            <label
                              v-if="detail.service_state_id == 4"
                              class="badge badge-success"
                              >Entregado</label
                            >
                            <label
                              v-if="detail.service_state_id == 5"
                              class="badge badge-danger"
                              >Falso Flete</label
                            >
                            <label
                              v-if="detail.service_state_id == 6"
                              class="badge badge-danger"
                              >Rechazado</label
                            >
                          </p>
                        </div>
                      </div>

                      <div
                        class="container-fluid d-flex justify-content-between"
                      >
                        <div class="col-lg-3 pl-0">
                          <p class="mt-2 mb-2"><b>Datos para Recojo</b></p>
                          <p>
                            Distrito : {{ distRecojo }} <br />
                            Zona : {{ zonaRecojo }}<br />
                            Dirección : {{ detail.direccion_origen }}
                          </p>
                        </div>
                        <div class="col-lg-3 pr-0">
                          <p class="mt-2 mb-2"><b>Datos para Entrega</b></p>
                          <p>
                            Distrito : {{ distEntrega }} <br />
                            Zona : {{ zonaEntrega }}<br />
                            Dirección : {{ detail.direccion_destino }}
                          </p>
                        </div>
                        <div class="col-lg-3 pl-0">
                          <p class="mt-2 mb-2"><b>Conductor Asignado</b></p>
                          <p
                            v-if="
                              nombresconductor !== undefined ||
                                dni !== undefined
                            "
                          >
                            Nombres Y Apellidos : {{ nombresconductor }} <br />
                            Documento de Identidad: {{ dni }}
                          </p>
                        </div>
                        <div class="col-lg-3 pr-0">
                          <p class="mt-2 mb-2"><b>Evidencia de Entrega</b></p>
                          <div v-if="imagenevidence == ''">
                            <label class="text-danger">
                              No se han registrado evidencias.
                            </label>
                          </div>
                          <div v-else>
                            <p>
                              <img
                                :src="'http://localhost' + imagenevidence"
                                style="width: 180px; height: 170px"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="container-fluid d-flex justify-content-between"
                      >
                        <div class="col-lg-6 pl-0">
                          <p class="mb-2 mt-2"><b>Productos</b></p>
                        </div>
                      </div>
                      <div
                        class="container-fluid mt-2 d-flex justify-content-center w-100"
                      >
                        <div class="table-responsive w-100">
                          <table class="table">
                            <thead>
                              <tr
                                style="background-color: #309D4F; color: #fff"
                              >
                                <th>#</th>
                                <th>Descripción</th>
                                <th class="text-right">Peso</th>
                                <th class="text-right">Alto</th>
                                <th class="text-right">Ancho</th>
                                <th class="text-right">Largo</th>
                                <th class="text-right">Cantidad</th>
                                <th class="text-right">Precio/u</th>
                                <th class="text-right">Subtotal</th>
                                <th class="text-center">Imagen</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                class="text-right"
                                v-for="item in products"
                                :key="item.id"
                              >
                                <td class="text-left">{{ item.id }}</td>
                                <td class="text-left">
                                  {{ item.descripcion }}
                                </td>
                                <td>{{ item.peso }} {{ item.peso_medida }}</td>
                                <td>{{ item.alto }} {{ item.alto_medida }}</td>
                                <td>
                                  {{ item.ancho }} {{ item.ancho_medida }}
                                </td>
                                <td>
                                  {{ item.largo }} {{ item.largo_medida }}
                                </td>
                                <td>{{ item.cantidad }}</td>
                                <td>{{ item.precio_unitario }}</td>
                                <td>
                                  {{ item.cantidad * item.precio_unitario }}
                                </td>
                                <!-- <td>
                            <div class="file-field"><a class="btn-floating purple-gradient mt-0 float-left"><i aria-hidden="true" class="fas fa-cloud-upload-alt"></i> <input type="file" @change="subirImagen"></a></div>
                          </td> -->
                                <td class="text-center">
                                  <figure>
                                    <img
                                      with="200"
                                      height="200"
                                      :src="'http://localhost' + item.imagen"
                                      alt="Foto del Producto"
                                    />
                                  </figure>
                                </td>
                                <!-- <td>        
                            <button
                              v-if="img != '' "
                              @click="updateProduct(item.id)"
                              class="btn btn-gradient-primary mr-2"
                                >
                                Guardar
                            </button>
                          </td> -->
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="container-fluid mt-3 w-100">
                        <!-- <p class="text-right mb-2">Sub - Total amount: $12,348</p> -->
                        <!-- <p class="text-right">IGV (8%) : S/.<p> -->
                        <h4 class="text-right mb-3">
                          Total : S/{{ detail.total }}
                        </h4>
                      </div>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                      <button
                        @click="clear()"
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- FIN -->

              <h3 class="page-title">
                Listado de pedidos
              </h3>
              <br />
              <p>
                Se muestra los últimos 12 pedidos dentro del rango seleccionado.
              </p>
              <!-- Tabla -->
              <div class="row">
                <div class="table-sorter-wrapper col-lg-12 table-responsive">
                  <table id="sortable-table-2" class="table table-striped">
                    <thead>
                      <tr
                        class="m-0"
                        style="background-color: #309D4F; color: #fff"
                      >
                        <th>Código</th>
                        <th class="sortStyle ascStyle w-50">
                          Origen<i class="mdi mdi-chevron-down"></i>
                        </th>
                        <th class="sortStyle unsortStyle w-50">
                          Destino<i class="mdi mdi-chevron-down"></i>
                        </th>
                        <th class="sortStyle unsortStyle">
                          Recojo<i class="mdi mdi-chevron-down"></i>
                        </th>
                        <th class="sortStyle unsortStyle">
                          Entrega<i class="mdi mdi-chevron-down"></i>
                        </th>
                        <th class="sortStyle unsortStyle">
                          Acciones<i class="mdi mdi-chevron-down"></i>
                        </th>
                        <th class="sortStyle unsortStyle">
                          Estado<i class="mdi mdi-chevron-down"></i>
                        </th>

                        <!-- <th class="sortStyle unsortStyle">
                          Transportista<i class="mdi mdi-chevron-down"></i>
                        </th> -->
                        <!-- <th class="sortStyle unsortStyle"></th> -->
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class="m-0"
                        v-for="item in services.data"
                        :key="item.id"
                      >
                        <td>{{ item.id }}</td>
                        <td class="w-50">
                          {{ item.direccion_origen }} -
                          {{ item.distrito_origen.distrito }}
                        </td>
                        <td class="w-50">
                          {{ item.direccion_destino }} -
                          {{ item.distrito_destino.distrito }}
                        </td>
                        <td>{{ item.fecha_recojo | timeFormat }}</td>
                        <td>{{ item.fecha_entrega | timeFormat }}</td>
                        <td>
                          <button
                            @click="getDetalle(item.id)"
                            type="button"
                            class="btn btn-outline-light text-black btn-sm"
                            data-toggle="modal"
                            data-target="#myModal"
                          >
                            <i class="mdi mdi-eye"></i>
                          </button>
                        </td>
                        <td>
                          <div v-if="item.service_state_id == 1">
                            <label class="badge badge-warning">Pendiente</label>
                          </div>
                          <div v-if="item.service_state_id == 2">
                            <label class="badge badge-info">Aceptado</label>
                          </div>
                          <div v-if="item.service_state_id == 6">
                            <label class="badge badge-danger">Rechazado</label>
                          </div>
                          <div v-if="item.service_state_id == 7">
                            <label class="badge badge-warning"
                              >En Aceptación</label
                            >
                          </div>
                          <div v-if="item.service_state_id == 3">
                            <label class="badge badge-secondary"
                              >En Tránsito</label
                            >
                          </div>
                          <div v-if="item.service_state_id == 4">
                            <label class="badge badge-success">Entregado</label>
                          </div>
                          <div v-if="item.service_state_id == 5">
                            <label class="badge badge-danger"
                              >Falso Flete</label
                            >
                          </div>
                        </td>
                        <!-- <td
                          v-if="
                            item.service_state_id == 1 ||
                              item.service_state_id == 6
                          "
                        >
                          <a
                            href="#"
                            type="button"
                            data-toggle="modal"
                            data-target="#ModalAsignar"
                            @click="load(item.id)"
                            >Asignar</a
                          >
                        </td> -->
                      </tr>
                    </tbody>
                  </table>
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
import moment from 'moment'
export default {
  name: 'Dashboard',
  components: { HomeAdmin, LateralMenu },
  data () {
    return {
      active: '',
      data: '',
      state: '',
      services: [],
      service_id: '',
      detail: [],
      products: [],
      imagenminiatura: '',
      imagenevidence: '',
      distRecojo: '',
      zonaRecojo: '',
      distEntrega: '',
      zonaEntrega: '',
      nombresconductor: '',
      dni: '',
      from: '',
      to: ''
    }
  },

  created () {
    this.$http
      .get('/services/all', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      })
      .then(res => {
        this.services = res.data
      })
    this.$http
      .post(
        '/dashboard/services ',
        {},
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: 'include'
        }
      )
      .then(res => {
        this.data = res.data
      })
  },

  methods: {
    // Métodos de filtro
    filtrarPedidos () {
      this.$http
        .post(
          '/dashboard/services ',
          {
            from: this.from,
            to: this.to
          },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: 'include'
          }
        )
        .then(res => {
          this.data = res.data
        })
    },
    // Detalle de Pedido
    getDetalle (arg) {
      this.$http
        .get('/services/' + arg, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: 'include'
        })
        .then(res => {
          this.detail = res.data
          this.distRecojo = this.detail.distrito_origen.distrito
          this.zonaRecojo = this.detail.distrito_origen.zona.zona
          this.distEntrega = this.detail.distrito_destino.distrito
          this.zonaEntrega = this.detail.distrito_destino.zona.zona
          this.products = this.detail.products
          this.nombresconductor =
            this.detail.allocations[0].driver.user.person.nombre +
            ' ' +
            this.detail.allocations[0].driver.user.person.apellidoPaterno +
            ' ' +
            this.detail.allocations[0].driver.user.person.apellidoMaterno
          this.dni = this.detail.allocations[0].driver.user.person.numero
          this.imagenevidence = this.detail.galleries[0].imagen
        })
    },

    clear () {
      this.service_id = ''
      this.driver_id = ''
      this.detail = []
      this.imagenevidence = ''
      this.nombresconductor = ''
      this.dni = ''
    }
  },
  filters: {
    timeFormat: function (arg) {
      return moment(arg).format('L')
    }
  }
}
</script>

<style>
.card .card-dashboard {
  padding: 1rem 2rem !important;
  margin-bottom: -35px !important;
}
</style>
