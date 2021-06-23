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
          <div>
            <!-- MODAL PARA VER DETALLE-->
            <div
              class="modal fade bd-example-modal-md"
              id="exampleModalTrackingDetalle"
              tabindex="-1"
              role="dialog"
              aria-labelledby="mySmallModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="card px-2">
                    <div class="card-body">
                      <div class="container-fluid">
                        <h3 class="text-left my-1">Detalle de Servicio</h3>
                        <hr />
                      </div>

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
                            {{ detail.fecha_entrega | timeFormat }} <br />
                            Estado del Servicio :
                            <label
                              v-if="detail.service_state_id == 1 || detail.service_state_id == 6 || detail.service_state_id == 7"
                              class="badge badge-warning"
                              >Pendiente</label
                            >
                            <label
                              v-if="detail.service_state_id == 2"
                              class="badge badge-warning"
                              >Pedido Asignado</label
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
                              >En Espera</label
                            >
                          </p>
                        </div>
                      </div>

                      <div
                        class="container-fluid d-flex justify-content-between"
                      >
                        <div class="col-lg-4 pl-0">
                          <p class="mt-2 mb-2"><b>Datos para Recojo</b></p>
                          <p>
                            Distrito : {{ distRecojo }} <br />
                            Zona : {{ zonaRecojo }}<br />
                            Dirección : {{ detail.direccion_origen }}
                          </p>
                        </div>
                        <div class="col-lg-4 pr-0">
                          <p class="mt-2 mb-2"><b>Datos para Entrega</b></p>
                          <p>
                            Distrito : {{ distEntrega }} <br />
                            Zona : {{ zonaEntrega }}<br />
                            Dirección : {{ detail.direccion_destino }}
                          </p>
                        </div>
                        <div class="col-lg-4 pr-0">
                          <p class="mt-2 mb-2"><b>Datos de Conductor Asignado</b></p>
                          <p>
                            Nombres Y Apellidos : {{ nombresconductor }} <br />
                            Documento de Identidad: {{ dni }}
                          </p>
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
                                <th colspan="2" class="text-center">Imagen</th>
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
                                <td>{{ item.peso }} {{item.peso_medida}}</td>
                                <td>{{ item.alto }} {{item.alto_medida}}</td>
                                <td>{{ item.ancho }} {{item.ancho_medida}}</td>
                                <td>{{ item.largo }} {{item.largo_medida}}</td>
                                <td>{{ item.cantidad }}</td>
                                <td>S/. {{ item.precio_unitario }}</td>
                                <td>S/.
                                  {{ item.cantidad * item.precio_unitario }}
                                </td>
                                <td>
                                    <img
                                      style="width: 200px; height: 220px"
                                      :src="'http://localhost' + item.imagen"
                                      alt="Foto del Producto"
                                    />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="container-fluid mt-3 w-100">
                        <!-- <p class="text-right mb-2">Sub - Total amount: $12,348</p> -->
                        <!-- <p class="text-right">IGV (8%) : S/.<p> -->
                        <h4 class="text-right mb-3">
                          Total : S/. {{ detail.total }}
                        </h4>
                        <hr />
                      </div>
                      <div class="container-fluid w-100">
                        <!-- <a href="#" class="btn btn-primary float-right mt-2 ml-2"><i class="mdi mdi-printer mr-1"></i>Print</a> -->
                        <a
                          href="#"
                          @click="clear()"
                          class="btn btn-secondary float-right mt-2"
                          data-dismiss="modal"
                        >
                          <!-- <i class="mdi mdi-telegram mr-1"></i> -->
                          Cerrar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- FIN -->

            <div class="card">
              <div class="card-body">
                <h4>
                <font style="vertical-align: inherit;"
                  ><font style="vertical-align: inherit;"
                    >Mis Pedidos</font
                  ></font
                >
              </h4>
                <div class="row mt-4">
                  <div class="table-sorter-wrapper col-lg-12 table-responsive">
                    <table id="sortable-table-2" class="table table-striped">
                      <thead>
                        <tr style="background-color: #309D4F; color: #fff">
                          <th class="sortStyle ascStyle">
                            Código<i class="mdi mdi-chevron-down"></i>
                          </th>
                          <th class="sortStyle unsortStyle">
                            Origen<i class="mdi mdi-chevron-down"></i>
                          </th>
                          <th class="sortStyle unsortStyle">
                            Destino<i class="mdi mdi-chevron-down"></i>
                          </th>
                          <th class="sortStyle unsortStyle">
                            Recojo<i class="mdi mdi-chevron-down"></i>
                          </th>
                          <th class="sortStyle unsortStyle">
                            Entrega<i class="mdi mdi-chevron-down"></i>
                          </th>
                          <th class="sortStyle unsortStyle">
                            Estado<i class="mdi mdi-chevron-down"></i>
                          </th>
                          <th class="sortStyle unsortStyle">
                            Acciones<i class="mdi mdi-chevron-down"></i>
                          </th>
                          <!-- <th></th> -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in services" :key="item.id">
                          <td>{{ item.id }}</td>
                          <td>{{ item.distrito_origen.distrito }}</td>
                          <td>{{ item.distrito_destino.distrito }}</td>
                          <td>{{ item.fecha_recojo | timeFormat }}</td>
                          <td>{{ item.fecha_entrega | timeFormat }}</td>
                          <td>
                            <div v-if="item.service_state_id == 1 || item.service_state_id == 6 || item.service_state_id == 7">
                              <label class="badge badge-warning"
                                >Pendiente</label
                              >
                            </div>
                            <div v-if="item.service_state_id == 2">
                              <label class="badge badge-info">Pedido Asignado</label>
                            </div>
                            <div v-if="item.service_state_id == 3">
                              <label class="badge badge-secondary"
                                >En Tránsito</label
                              >
                            </div>
                            <div v-if="item.service_state_id == 4">
                              <label class="badge badge-success"
                                >Entregado</label
                              >
                            </div>
                            <div v-if="item.service_state_id == 5">
                              <label class="badge badge-danger"
                                >En Espera</label
                              >
                            </div>
                          </td>
                          <td>
                            <button
                              class="btn btn-outline-light text-black btn-sm"
                              type="button"
                              @click="getDetalle(item.id)"
                              title="Ver detalle"
                              data-toggle="modal"
                              data-target="#exampleModalTrackingDetalle"
                            >
                              <i class="mdi mdi-eye"></i>
                            </button>
                          </td>
                          <!-- <td> 
                 <div v-for ="item1 in item.products" >
                  <div v-if="item1.imagen==null"></div>
                 </div>
                 <div v-if="alert=='true'">
                   <i  
                      class="mdi mdi-alert-circle"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Es necesario que registre fotos referenciales del producto."
                    >
                    </i>
                 </div>
                </td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-12 col-md-5"></div>
                  <div class="col-sm-12 col-md-7">
                    <div
                      class="dataTables_paginate paging_simple_numbers"
                      id="order-listing_paginate"
                    >
                      <ul class="pagination">
                        <li id="order-listing_previous">
                          <button
                            aria-controls="order-listing"
                            data-dt-idx="0"
                            tabindex="0"
                            class="page-link"
                            @click="getPedidos(current_page - 1)"
                          >
                            Anterior
                          </button>
                        </li>
                        <li class="paginate_button page-item active">
                          <a
                            aria-controls="order-listing"
                            data-dt-idx="0"
                            tabindex="0"
                            class="page-link"
                            >{{ current_page }}</a
                          >
                        </li>
                        <li id="order-listing_next">
                          <button
                            aria-controls="order-listing"
                            data-dt-idx="0"
                            tabindex="0"
                            class="page-link"
                            @click="getPedidos(current_page + 1)"
                          >
                            Siguiente
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
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
import moment from 'moment'
import HomeAdmin from '@/components/admin/HomeAdmin'
import LateralMenu from '@/components/admin/LateralMenu'
import Swal from 'sweetalert2'

export default {
  name: 'Tracking',
  components: { HomeAdmin, LateralMenu },
  data () {
    return {
      services: [],
      service: [],
      detail: [],
      products: [],
      imagenminiatura: '',
      imagen: '',
      distRecojo: '',
      zonaRecojo: '',
      distEntrega: '',
      zonaEntrega: '',
      alert: 'true',
      current_page: 0
    }
  },
  created () {
    // Alerta de Servicio Pendiente
    if (localStorage.getItem('service')) {
      Swal.fire(
        'Alerta!',
        'Tienes una solicitud de servicio pendiente.',
        'warning'
      )
    }

    // Listado de Pedidos
    this.$http
      .get('services', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      })
      .then(res => {
        this.services = res.data.data
        this.current_page = res.data.current_page
      })
  },

  methods: {
    // Paginación
    getPedidos (num_page) {
      this.$http
        .get('/services/', {
          params: {
            page: num_page
          },
          headers: { 'Content-Type': 'application/json' },
          withCredentials: 'include'
        })
        .then(res => {
          this.services = res.data.data
          this.current_page = res.data.current_page
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },

    // Detalle de Pedido
    getDetalle (arg) {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      }

      this.$http.get('/services/' + arg, config).then(res => {
        this.detail = res.data
        this.distRecojo = this.detail.distrito_origen.distrito
        this.zonaRecojo = this.detail.distrito_origen.zona.zona
        this.distEntrega = this.detail.distrito_destino.distrito
        this.zonaEntrega = this.detail.distrito_destino.zona.zona
        this.nombresconductor =
            this.detail.allocations[0].driver.user.person.nombre +
            ' ' +
            this.detail.allocations[0].driver.user.person.apellidoPaterno +
            ' ' +
            this.detail.allocations[0].driver.user.person.apellidoMaterno
        this.dni = this.detail.allocations[0].driver.user.person.numero
        this.products = this.detail.products
      })
    },

    clear () {
      this.detail = ''
      this.distRecojo = ''
      this.zonaRecojo = ''
      this.distEntrega = ''
      this.zonaEntrega = ''
      this.products = ''
      this.imagenminiatura = ''
      this.imagen = ''
    }
  },

  computed: {
    img () {
      return this.imagenminiatura
    }
  },

  mounted () {
    if (localStorage.getItem('service')) {
      try {
        this.service = JSON.parse(localStorage.getItem('service'))
      } catch (e) {
        localStorage.removeItem('service')
      }
    }
  },

  filters: {
    timeFormat: function (arg) {
      return moment(arg).format('L')
    }
  }
}
</script>
