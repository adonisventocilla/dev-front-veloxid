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
                  <div class="container-fluid d-flex justify-content-between">
                    <div class="col-lg-6 pl-0">
                      <p class="mb-2 mt-3"><b>Datos Generales</b></p>
                      <p>
                        Código : {{ detail.id }}<br />
                        Fecha de Recojo : {{ detail.fecha_recojo | timeFormat }}
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

                  <div class="container-fluid d-flex justify-content-between">
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
                      <p>
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
                  <div class="container-fluid d-flex justify-content-between">
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
                          <tr style="background-color: #309D4F; color: #fff">
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
                            <td class="text-left">{{ item.descripcion }}</td>
                            <td>{{ item.peso }} {{ item.peso_medida }}</td>
                            <td>{{ item.alto }} {{ item.alto_medida }}</td>
                            <td>{{ item.ancho }} {{ item.ancho_medida }}</td>
                            <td>{{ item.largo }} {{ item.largo_medida }}</td>
                            <td>{{ item.cantidad }}</td>
                            <td>{{ item.precio_unitario }}</td>
                            <td>{{ item.cantidad * item.precio_unitario }}</td>
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

          <!-- MODAL ASIGNACIÓN -->
          <div
            class="modal fade"
            id="ModalAsignar"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalScrollableTitle"
            aria-hidden="true"
            style=" posicion:fixed;top: 30%;"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                  <div class="container-fluid">
                    <h3>Asignar Pedido</h3>
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
                <div class="modal-body">
                  <div class="form-group row">
                    <div class="col-lg-12">
                      <select
                        v-model="driver_id"
                        ref="driver"
                        class="form-control form-control-sm"
                        aria-label="Default select example"
                      >
                        <option>Seleccione a un Conductor</option>
                        <option
                          v-for="item in drivers"
                          :value="item.id"
                          :key="item.id"
                          >{{ item.email }}</option
                        >
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-lg-6">
                      <button
                        class="form-control btn btn-gradient-primary mr-2"
                        @click="asignar()"
                        data-dismiss="modal"
                      >
                        Asignar
                      </button>
                    </div>
                    <div class="col-lg-6">
                      <button
                        @click="clear()"
                        class="form-control btn-danger mr-2"
                        data-dismiss="modal"
                      >
                        Cancelar
                      </button>
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
                  ><font style="vertical-align: inherit;">Pedidos</font></font
                >
              </h4>
              <div class="form-group row" style="margin-top: 30px">
                <div class="col-lg-4">
                  <label>Filtrar por Estado:</label>
                  <select class="form-control" v-model="state">
                    <option value="">Todos</option>
                    <option
                      v-for="item in states"
                      :value="item.id"
                      :key="item.id"
                    >
                      {{ item.estado }}
                    </option>
                  </select>
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

              <div class="row">
                <div class="table-sorter-wrapper col-lg-12 table-responsive">
                  <table id="sortable-table-2" class="table table-striped">
                    <thead>
                      <tr style="background-color: #309D4F; color: #fff">
                        <th>Código</th>
                        <th class="sortStyle ascStyle">
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
                          Acciones<i class="mdi mdi-chevron-down"></i>
                        </th>
                        <th class="sortStyle unsortStyle">
                          Estado<i class="mdi mdi-chevron-down"></i>
                        </th>

                        <th class="sortStyle unsortStyle">
                          Transportista<i class="mdi mdi-chevron-down"></i>
                        </th>
                        <th class="sortStyle unsortStyle"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in services.data" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>
                          {{ item.direccion_origen }} -
                          {{ item.distrito_origen.distrito }}
                        </td>
                        <td>
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
                        <td
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
                        </td>
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
</template>
<script>
import HomeAdmin from '@/components/admin/HomeAdmin'
import LateralMenu from '@/components/admin/LateralMenu'
import moment from 'moment'
import Swal from 'sweetalert2'
export default {
  name: 'Order',
  components: { HomeAdmin, LateralMenu },
  data () {
    return {
      state: '',
      states: '',
      services: [],
      drivers: [],
      service_id: '',
      driver_id: '',
      detail: [],
      products: [],
      imagenminiatura: '',
      imagenevidence: '',
      distRecojo: '',
      zonaRecojo: '',
      distEntrega: '',
      zonaEntrega: '',
      current_page: 0
    }
  },
  created () {
    this.$http
      .get('/services/states', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      })
      .then(res => {
        this.states = res.data
      })
    this.$http
      .get('/services/all', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      })
      .then(res => {
        this.services = res.data
        this.current_page = res.data.current_page
      })
    this.$http
      .get('/drivers/evaluated', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      })
      .then(res => {
        this.drivers = res.data.suitable
      })
  },
  methods: {
    getPedidos (num_page) {
      this.$http
        .get('/services/all', {
          params: {
            page: num_page
          },
          headers: { 'Content-Type': 'application/json' },
          withCredentials: 'include'
        })
        .then(res => {
          this.services = res.data
          this.current_page = res.data.current_page
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },

    filtrarPedidos () {
      if (this.state === '') {
        this.$http
          .get('/services/all', {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: 'include'
          })
          .then(res => {
            this.services = res.data
            this.current_page = res.data.current_page
          })
      } else {
        this.$http
          .get('/services/states/' + this.state, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: 'include'
          })
          .then(res => {
            this.services = res.data
            this.current_page = res.data.current_page
          })
      }
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
    },

    load (id) {
      this.service_id = id
    },

    asignar () {
      if (this.driver_id === '') {
        this.$fire({
          title: 'Error',
          text: 'Seleccione a un Conductor',
          type: 'error',
          showConfirmButton: false,
          timer: 3000
        })
      }
      this.$http
        .post(
          '/allocations',
          {
            service_id: this.service_id,
            driver_id: this.driver_id
          },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: 'include'
          }
        )
        .then(res => {
          Swal.fire(
            'Operación Exitosa!',
            'Se asignó el pedido correctamente!',
            'success'
          )
          this.getPedidos()
        })
    }
  },
  filters: {
    timeFormat: function (arg) {
      return moment(arg).format('L')
    }
  },
  mounted () {
    this.getPedidos()
  }
}
</script>
