<template>
  <div>
    <!-- partial:partials/_navbar.html -->
    <nav
      class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row"
    >
      <HomeAdmin/>
    </nav>
    <div class="container-fluid page-body-wrapper">
      <!-- partial:partials/_sidebar.html -->
      <LateralMenu/>
      <!-- partial -->
      <div class="main-panel">
        <div class="content-wrapper">
          <!-- MODAL REGISTRAR -->
          <div
            class="modal fade"
            id="exampleModalRegistrar"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-primary" id="exampleModalLabel">
                    REGISTRAR VEHICULO
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Placa</label>
                        <div class="col-sm-9">
                          <input
                            type="text"
                            class="form-control"
                            v-model="placa"
                            placeholder="Placa"
                            title="Ingresar la placa actual del vehículo."
                          />
                          <code style="color: #9c9fa6;"
                            >Ingresar placa actual del vehículo.</code
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label"
                          >Capacidad de Carga</label
                        >
                        <div class="col-sm-9">
                          <input
                            type="text"
                            class="form-control"
                            v-model="capacidadCarga"
                            placeholder="Capacidad de Carga"
                          />
                          <code style="color: #9c9fa6;"
                            >Ingresar la capacidad máxima del vehículo.</code
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group row">
                        <label
                          class="col-sm-3 col-form-label"
                          for="exampleInputName1"
                          >Tipo de Vehículo</label
                        >
                        <div class="col-sm-9">
                          <select class="form-control" v-model="idVehicleType">
                            <option
                              v-for="item in vehicletypes"
                              :value="item.id"
                              :key="item.id"
                            >
                              {{ item.nombre }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label"
                          >Subir Imagen</label
                        >
                        <div class="col-sm-9">
                          <input
                            type="file"
                            class="form-control file-upload-info"
                            @change="subirImagen"
                          />
                          <code style="color: #9c9fa6;"
                            >Subir fotografía del vehículo.</code
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Imagen</label>
                        <div class="col-sm-9">
                          <figure>
                            <img
                              with="200"
                              height="200"
                              :src="img"
                              alt="Foto del Vehículo"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <!-- Botón que añade los datos del formulario, solo se muestra si la variable update es igual a 0-->
                  <button
                    @click="saveVehicles()"
                    class="btn btn-gradient-primary mr-2"
                  >
                    Registrar
                  </button>
                  <!-- Botón que cierra el modal-->
                  <button
                    @click="clearFields()"
                    class="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- FIN -->

          <!-- MODAL ACTUALIZAR -->
          <div
            class="modal fade"
            id="exampleModalActualizar"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-primary" id="exampleModalLabel">
                    ACTUALIZAR VEHICULO
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Placa</label>
                        <div class="col-sm-9">
                          <input
                            type="text"
                            class="form-control"
                            v-model="placa"
                            id="exampleTextarea1"
                            placeholder="Placa"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label"
                          >Capacidad de Carga</label
                        >
                        <div class="col-sm-9">
                          <input
                            type="text"
                            class="form-control"
                            v-model="capacidadCarga"
                            placeholder="Capacidad de Carga"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group row">
                        <label
                          class="col-sm-3 col-form-label"
                          for="exampleInputName1"
                          >Tipo de Vehículo</label
                        >
                        <div class="col-sm-9">
                          <select class="form-control" v-model="idVehicleType">
                            <option
                              v-for="item in vehicletypes"
                              :value="item.id"
                              :key="item.id"
                            >
                              {{ item.nombre }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label"
                          >Subir Imagen</label
                        >
                        <div class="col-sm-9">
                          <input
                            type="file"
                            class="form-control file-upload-info"
                            @change="subirImagen"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Imagen</label>
                        <div class="col-sm-9">
                          <figure>
                            <img
                              with="200"
                              height="200"
                              :src="img"
                              alt="Foto del Vehículo"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <!-- Botón que modifica la tarea que anteriormente hemos seleccionado, solo se muestra si la variable update es diferente a 0-->
                  <button
                    @click="updateVehicles()"
                    class="btn btn-warning btn-fw"
                    data-dismiss="modal"
                  >
                    Actualizar
                  </button>
                  <!-- Botón que cierra el modal-->
                  <button
                    @click="clearFields()"
                    class="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- FIN -->

          <!--DATOS DEL CONDUCTOR-->
          <div class="card">
            <div class="card-body">
              <router-link to="/conductores"><i class="mdi mdi-arrow-left-bold-circle" style="font-size: 1.50rem;"></i></router-link>
              <br /><br />
              <h3 class="card-title">Datos del Conductor</h3>
              <br />
              <div class="row">
                <div class="col-lg-4">
                  <div class="form-group row">
                    <label
                      class="col-sm-4 font-weight-bold"
                      for="exampleInputName1"
                      >Nombres</label
                    >
                    <label class="col-sm-8" for="exampleInputName1">{{
                      this.driver.person.nombre
                    }}</label>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group row">
                    <label
                      class="col-sm-4 font-weight-bold"
                      for="exampleInputEmail3"
                      >Apellido Paterno</label
                    >
                    <label class="col-sm-8" for="exampleInputName1">{{
                      this.driver.person.apellidoPaterno
                    }}</label>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group row">
                    <label
                      class="col-sm-4 font-weight-bold"
                      for="exampleInputPassword4"
                      >Apellido Materno</label
                    >
                    <label class="col-sm-8" for="exampleInputName1">{{
                      this.driver.person.apellidoMaterno
                    }}</label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4">
                  <div class="form-group row">
                    <label
                      class="col-sm-4 font-weight-bold"
                      for="exampleSelectGender"
                      >Teléfono</label
                    >
                    <label class="col-sm-8" for="exampleInputName1">{{
                      this.driver.person.telefono
                    }}</label>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group row">
                    <label
                      class="col-sm-4 font-weight-bold"
                      for="exampleSelectGender"
                      >Email</label
                    >
                    <label class="col-sm-8" for="exampleInputName1">{{
                      this.driver.email
                    }}</label>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group row">
                    <label
                      class="col-sm-4 font-weight-bold"
                      for="exampleInputCity1"
                      >Dirección</label
                    >
                    <label class="col-sm-8" for="exampleInputName1">{{
                      this.driver.person.direccion
                    }}</label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4">
                  <div class="form-group row">
                    <label
                      class="col-sm-4 font-weight-bold"
                      for="exampleInputName1"
                      >Tipo de Documento</label
                    >
                    <label class="col-sm-8" for="exampleInputName1">{{
                      this.driver.person.document_type.tipo
                    }}</label>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group row">
                    <label
                      class="col-sm-4 font-weight-bold"
                      for="exampleInputName1"
                      >Número de Documento</label
                    >
                    <label class="col-sm-8" for="exampleInputName1">{{
                      this.driver.person.numero
                    }}</label>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group row">
                    <label
                      class="col-sm-4 font-weight-bold"
                      for="exampleInputName1"
                      >Licencia de Conducir</label
                    >
                    <label class="col-sm-8" for="exampleInputName1">{{
                      this.driver.driver.licenciaConducir
                    }}</label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4">
                  <div class="form-group row">
                    <label
                      class="col-sm-4 font-weight-bold"
                      for="exampleInputName1"
                      >Banco</label
                    >
                    <label class="col-sm-8" for="exampleInputName1">{{
                      this.driver.driver.banco
                    }}</label>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group row">
                    <label
                      class="col-sm-4 font-weight-bold"
                      for="exampleInputName1"
                      >Número de Cuenta Bancaria</label
                    >
                    <label class="col-sm-8" for="exampleInputName1">{{
                      this.driver.driver.cuentaBancaria
                    }}</label>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group row">
                    <label
                      class="col-sm-4 font-weight-bold"
                      for="exampleInputName1"
                      >Usuario</label
                    >
                    <label class="col-sm-8" for="exampleInputName1">{{
                      this.driver.name
                    }}</label>
                  </div>
                </div>
                </div> 
                 <div class="row">
                    <div class="col-lg-4">
                  <div class="form-group row">
                    <label
                      class="col-sm-4 font-weight-bold"
                      for="exampleInputName1"
                      >Constancia de Estado Salud</label
                    >
                    <div class="col-sm-8" v-if="this.driver.driver.constanciaEstadoSalud === ''">
                      <label class="text-danger" for="exampleInputName1">No se ha registrado constancia</label>
                    </div>
                    <a v-else class="col-sm-8" :href="'http://localhost' + this.driver.driver.constanciaEstadoSalud" target="_blank">    
                   <i class="mdi mdi-file-pdf" style="font-size: 2rem;"></i>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--FIN DATOS DEL CONDUCTOR-->

          <div class="form-group" style="padding-top: 24px;">
            <div class="row">
              <div class="col-lg-8">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Buscar vehiculo"
                    @keyup="searchVehicles()"
                    aria-describedby="basic-addon2"
                    v-model="key_busqueda"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-primary"
                      type="button"
                      @click="searchVehicles()"
                    >
                      Buscar
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalRegistrar"
                >
                  Registrar Vehículo
                </button>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 grid-margin" v-for="item in vehicles.data" :key="item.id">
              <div class="card">
                <div class="card-body">
                  <img
                    class="card-img-top"
                    :src="'http://localhost' + item.imagen"
                    style="width: 250px; height: 200px"
                  />
                  <div class="card-title text-truncate">
                    {{ item.descripcion }}
                  </div>

                  <p class="card-text crop-text-2">
                    Placa: {{ item.placa }} <br />
                    Capacidad_Carga: {{ item.capacidadCarga }} <br />
                    Tipo: {{ item.type.nombre }} <br />
                  </p>
                  <p class="card-text">
                    <small class="text-muted"
                      >Última actualización {{ item.updated_at }}</small
                    >
                  </p>

                  <div class="form-group">
                    <div class="row">
                      <div class="col-lg-5">
                        <div class="input-group">
                          <div class="input-group-append">
                            <button
                              class="btn btn-primary"
                              data-toggle="modal"
                              data-target="#exampleModalActualizar"
                              type="button"
                              @click="
                                loadFieldsUpdate(
                                  item.id,
                                  item.placa,
                                  item.capacidadCarga,
                                  item.idVehicleType
                                )
                              "
                              title="Actualizar"
                            >
                              <i class="mdi mdi-lead-pencil"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-5">
                        <div class="input-group">
                          <div class="input-group-append">
                            <button
                              class="btn btn-danger"
                              type="button"
                              @click="deleteVehicles(item.id, item.placa)"
                              title="Eliminar"
                            >
                              <i class="mdi mdi-delete"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
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
                      @click="getVehicles(vehicles.current_page - 1)"
                    >
                      Anterior
                    </button>
                  </li>
                  <li class="paginate_button page-item active">
                    <a
                      aria-controls="order-listing"
                      data-dt-idx="1"
                      tabindex="0"
                      class="page-link"
                      >{{ vehicles.current_page }}</a
                    >
                  </li>
                  <li id="order-listing_next">
                    <button
                      aria-controls="order-listing"
                      data-dt-idx="2"
                      tabindex="0"
                      class="page-link"
                      @click="getVehicles(vehicles.current_page + 1)"
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
</template>

<script>
import HomeAdmin from '@/components/admin/HomeAdmin'
import LateralMenu from '@/components/admin/LateralMenu'
import Swal from 'sweetalert2'
export default {
  name: 'Vehicle',
  components: {HomeAdmin, LateralMenu},
  data () {
    return {
      id: this.$route.params.id,
      driver: [],
      vehicles: [],
      idDriver: '',
      placa: '',
      capacidadCarga: '',
      idVehicleType: '',
      imagen: '',
      key_busqueda: '',
      vehicletypes: '',
      update: 0,
      imagenminiatura: ''
    }
  },
  created () {
    this.$http
      .get('/vehicletypes', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      })
      .then(res => {
        this.vehicletypes = res.data.VehicleTypes
      })
    this.$http
      .get('/drivers/' + this.id, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      })
      .then(res => {
        this.driver = res.data
      })
  },

  methods: {
    getVehicles (num_page) {
      this.$http
        .get('/drivers/' + this.id + '/vehicles', {
          params: {
            page: num_page
          },
          headers: { 'Content-Type': 'application/json' },
          withCredentials: 'include'
        })
        .then(res => {
          this.vehicles = res.data.vehicles

        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },

    subirImagen (e) {
      let file = e.target.files[0]
      this.imagen = file
      this.mostrarImagen(file)
      console.log(this.imagen)
    },

    mostrarImagen (file) {
      let reader = new FileReader()

      reader.onload = e => {
        this.imagenminiatura = e.target.result
      }
      reader.readAsDataURL(file)
    },

    loadFieldsUpdate (id, placa, capacidadCarga, idVehicleType) {
      // Esta función rellena los campos y la variable update, con la tarea que queremos modificar
      let me = this
      me.update = id
      me.placa = placa
      me.capacidadCarga = capacidadCarga
      me.idVehicleType = idVehicleType
    },

    saveVehicles () {
      const config = { 
        headers: { 'content-type': 'multipart/form-data' },
        withCredentials: 'include' }
      let me = this
      let formData = new FormData()
      formData.append('placa', this.placa)
      formData.append('capacidadCarga', this.capacidadCarga)
      formData.append('idVehicleType', this.idVehicleType)
      formData.append('imagen', this.imagen)
      let url = '/drivers/' + this.id + '/vehicles' // Ruta que hemos creado para enviar un vehiculo y guardarlo
      this.$http
        .post(url, formData, config)
        .then(function (response) {
          Swal.fire('Registro Exitoso!', 'Se registró correctamente los datos del vehiculo!', 'success')
          me.getVehicles() // llamamos al metodo getVehicles(); para que refresque nuestro array y muestro los nuevos datos
          me.clearFields() // Limpiamos los campos e inicializamos la variable update a 0
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    updateVehicles () {
      const config = { 
        headers: { 'content-type': 'multipart/form-data' },
        withCredentials: 'include' }
      let me = this
      let formData = new FormData()
      formData.append('id', this.update)
      formData.append('placa', this.placa)
      formData.append('capacidadCarga', this.capacidadCarga)
      formData.append('idVehicleType', this.idVehicleType)
      formData.append('idDriver', this.idDriver)
      formData.append('imagen', this.imagen)
      formData.append('_method', 'put')
      let url = '/vehicles/' + this.update // Ruta que hemos creado para enviar una tarea y guardarla
      this.$http
        .post(url, formData, config)
        .then(function (response) {
          Swal.fire('Actualización Exitosa!', 'Se actualizó correctamente los datos del vehiculo!', 'success')
          me.getVehicles() // llamamos al metodo getProductos(); para que refresque nuestro array y muestro los nuevos datos
          me.clearFields() // Limpiamos los campos e inicializamos la variable update a 0
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    deleteVehicles (id) {
      // Esta nos abrirá un alert de javascript y si aceptamos borrará el vehículo que hemos elegido
      let me = this
      Swal.fire({
        title: '¿Estas seguro de eliminar al vehiculo ' + id + '?',
        text: 'Tú inhabilitarás el vehiculo!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminalo!',
        cancelButtonText: 'No, conservalo'
      }).then(result => {
        if (result.value) {
          this.$http
            .delete('/vehicles/' + id, {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: 'include'
            })
            .then(function (response) {
              Swal.fire(
                'Eliminación Exitosa!',
                'El vehiculo ha sido inhabilitado.',
                'success'
              )
              me.getDrivers()
            })
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Cancelado', 'El vehiculo no ha sido inhabilitado', 'error')
        }
      })
    },

    searchVehicles () {
      let me = this
      this.$http
        .get('/drivers/' + this.id + '/vehicles/search?query=' + me.key_busqueda, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: 'include'
        })
        .then(res => {
          me.vehicles = res.data.vehicles
        }).catch(function (error) {
          // handle error
          console.log(error)
        })
    },

    clearFields () {
      /* Limpia los campos e inicializa la variable update a 0 */
      this.placa = ''
      this.capacidadCarga = ''
      this.idVehicleType = ''
      this.idDriver = ''
      this.update = 0
    }
  },

  computed: {
    img () {
      return this.imagenminiatura
    }
  },

  mounted () {
    this.getVehicles()
  }

}
</script>
