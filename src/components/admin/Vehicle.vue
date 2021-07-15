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
          <!-- MODAL REGISTRAR -->
          <div
            class="modal fade"
            id="exampleModalRegistrar"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
          <form>
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
                    @click="clearFields()"
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
                            placeholder="Ejm: A1A-123, ABC-123"
                            title="Ingresar la placa actual del vehículo."
                            @blur="$v.placa.$touch()"
                          />
                          <!-- <code style="color: #9c9fa6;"
                            >Ingresar placa actual del vehículo.</code
                          >-->
                          <template v-if="$v.placa.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.placa.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.placa.validPlaca"
                            >
                              El número de placa no es válido(*)
                            </p>
                          </template>
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
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              v-model="capacidadCarga"
                              placeholder="Capacidad de Carga"
                              @blur="$v.capacidadCarga.$touch()"
                            />
                            <div class="input-group-append">
                              <span class="input-group-text">TN.</span>
                            </div>
                            <!--<code style="color: #9c9fa6;"
                              >Ingresar la capacidad máxima del vehículo.</code
                            >-->
                          </div>
                          <template v-if="$v.capacidadCarga.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.capacidadCarga.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.capacidadCarga.validNumeric"
                            >
                              La capacidad ingresada no es válida(*)
                            </p>
                          </template>
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
                          <select
                            class="form-control"
                            v-model="idVehicleType"
                            @blur="$v.idVehicleType.$touch()"
                          >
                            <option
                              v-for="item in vehicletypes"
                              :value="item.id"
                              :key="item.id"
                            >
                              {{ item.nombre }}
                            </option>
                          </select>
                          <template v-if="$v.idVehicleType.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.idVehicleType.required"
                            >
                              Seleccione tipo de vehículo(*)
                            </p>
                          </template>
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
                            required
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
                    :disabled = "$v.$invalid"
                    @click="saveVehicles()"
                    class="btn btn-gradient-primary mr-2"
                    data-dismiss="modal"
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
            </form>
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
          <form>
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
                    @click="clearFields()"
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
                            placeholder="Ejm: A1A-123, ABC-123"
                            @blur="$v.placa.$touch()"
                          />
                          <template v-if="$v.placa.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.placa.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.placa.validPlaca"
                            >
                              El número de placa no es válido(*)
                            </p>
                          </template>
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
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              v-model="capacidadCarga"
                              placeholder="Capacidad de Carga"
                              @blur="$v.capacidadCarga.$touch()"
                            />
                            <div class="input-group-append">
                              <span class="input-group-text">TN.</span>
                            </div>
                            <!--<code style="color: #9c9fa6;"
                              >Ingresar la capacidad máxima del vehículo.</code
                            >-->
                          </div>
                          <template v-if="$v.capacidadCarga.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.capacidadCarga.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.capacidadCarga.validNumeric"
                            >
                              La capacidad ingresada no es válida(*)
                            </p>
                          </template>
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
                            required
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
                    :disabled = "$v.$invalid"
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
            </form>
          </div>
          <!-- FIN -->

          <!--DATOS DEL CONDUCTOR-->
          <div class="card">
            <div class="card-body">
              <router-link to="/conductores"
                ><i
                  class="mdi mdi-arrow-left-bold-circle"
                  style="font-size: 1.50rem;"
                ></i
              ></router-link>
              <br /><br />
              <h4>
                <font style="vertical-align: inherit;"
                  ><font style="vertical-align: inherit;"
                    >Datos del Conductor</font
                  ></font
                >
              </h4>
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
                      this.person.nombre
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
                      this.person.apellidoPaterno
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
                      this.person.apellidoMaterno
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
                      this.person.telefono
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
                      this.driver_email.email
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
                      this.person.direccion
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
                      this.document_type.tipo
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
                      this.person.numero
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
                      this.driver.licenciaConducir
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
                      this.driver.banco
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
                      this.driver.cuentaBancaria
                    }}</label>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group row">
                    <label
                      class="col-sm-4 font-weight-bold"
                      for="exampleInputName1"
                      >Constancia de Estado Salud</label
                    >
                    <div
                      class="col-sm-8"
                      v-if="this.driver.constanciaEstadoSalud === ''"
                    >
                      <label class="text-danger" for="exampleInputName1"
                        >No se ha registrado constancia</label
                      >
                    </div>
                    <a
                      v-else
                      class="col-sm-8"
                      :href="
                        'http://localhost' + this.driver.constanciaEstadoSalud
                      "
                      target="_blank"
                    >
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
                    placeholder="Buscar vehículo"
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

          <div v-if="vehicles.data === ''">
            <center><p>No existen conductores registrados.</p></center>
          </div>

          <div class="row">
            <div
              class="col-lg-4 grid-margin"
              v-for="item in vehicles.data"
              :key="item.id"
            >
              <div class="card">
                <div class="card-body">
                  <center>
                    <img
                      class="card-img-top"
                      :src="'http://localhost' + item.imagen"
                      style="width: 200px; height: 200px"
                    />
                    <br /><br />
                    <div
                      v-if="item.deleted_at === null && item.is_suitable === 1"
                      class="badge style-badge-success"
                    >
                      Apto
                    </div>
                    <div
                      v-if="item.deleted_at !== null && item.is_suitable === 0"
                      class="badge style-badge-danger"
                    >
                      No Apto
                    </div>
                  </center>
                  <br />
                  <p class="card-text crop-text-2">
                    <strong>Placa:</strong> {{ item.placa }} <br />
                    <strong>Capacidad Carga:</strong>
                    {{ item.capacidadCarga }} TN<br />
                    <strong>Tipo:</strong> {{ item.type.nombre }} <br />
                  </p>
                  <div v-if="item.deleted_at === null" class="text-success">
                    Estado: Activo
                  </div>
                  <div v-else class="text-danger">
                    Estado: Inactivo
                  </div>
                  <br />
                  <p class="card-text">
                    <small class="text-muted"
                      >Última actualización
                      {{ item.updated_at | timeformat }}</small
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
                              @click="deleteVehicles(item.id, item.deleted_at)"
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
                      @click="getVehicles(current_page - 1)"
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
                      >{{ current_page }}</a
                    >
                  </li>
                  <li id="order-listing_next">
                    <button
                      aria-controls="order-listing"
                      data-dt-idx="2"
                      tabindex="0"
                      class="page-link"
                      @click="getVehicles(current_page + 1)"
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
import moment from 'moment'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Vehicle',
  components: { HomeAdmin, LateralMenu },
  data () {
    return {
      id: this.$route.params.id,
      driver_email: {},
      driver: {},
      person: {},
      document_type: {},
      vehicles: [],
      idDriver: '',
      placa: '',
      capacidadCarga: '',
      idVehicleType: '',
      imagen: '',
      key_busqueda: '',
      vehicletypes: '',
      update: 0,
      imagenminiatura: '',
      current_page: 0
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
        this.driver_email = res.data
        this.driver = res.data.driver
        this.person = this.driver_email.person
        this.document_type = this.person.document_type
      })
    this.$http
      .get('/drivers/' + this.id + '/vehicles', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      })
      .then(res => {
        this.vehicles = res.data.vehicles
        this.current_page = this.vehicles.current_page
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
          this.current_page = this.vehicles.current_page
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
      if (this.placa === '' || this.capacidadCarga === '') {
        Swal.fire('Error!', 'Se debe completar todos los campos!', 'error')
      } else {
        const config = {
          headers: { 'content-type': 'multipart/form-data' },
          withCredentials: 'include'
        }
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
            Swal.fire(
              'Registro Exitoso!',
              'Se registró correctamente los datos del vehiculo!',
              'success'
            )
            me.getVehicles() // llamamos al metodo getVehicles(); para que refresque nuestro array y muestro los nuevos datos
            me.clearFields() // Limpiamos los campos e inicializamos la variable update a 0
          })
          .catch(function (error) {
            console.log(error)
            Swal.fire('Error!', 'Inténtelo más tarde', 'error')
          })
      }
    },

    updateVehicles () {
      const config = {
        headers: { 'content-type': 'multipart/form-data' },
        withCredentials: 'include'
      }
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
          Swal.fire(
            'Actualización Exitosa!',
            'Se actualizó correctamente los datos del vehículo!',
            'success'
          )
          me.getVehicles() // llamamos al metodo getProductos(); para que refresque nuestro array y muestro los nuevos datos
          me.clearFields() // Limpiamos los campos e inicializamos la variable update a 0
        })
        .catch(function (error) {
          console.log(error)
          Swal.fire('Error!', 'Inténtelo más tarde', 'error')
        })
    },

    deleteVehicles (id, status) {
      // Esta nos abrirá un alert de javascript y si aceptamos borrará el conductor que hemos elegido
      let me = this
      if (status === null) {
        Swal.fire({
          title: '¿Estas seguro de inhabilitar al vehiculo ' + id + '?',
          text: 'Tú inhabilitarás al vehículo!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Si',
          cancelButtonText: 'No'
        }).then(result => {
          if (result.value) {
            this.$http
              .get('/vehicles/' + id + '/deactivate', {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: 'include'
              })
              .then(function (response) {
                Swal.fire(
                  'Operación Exitosa!',
                  'El conductor ha sido inhabilitado.',
                  'success'
                )
                me.getVehicles()
              })
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelado',
              'El vehículo no ha sido inhabilitado',
              'error'
            )
          }
        })
      } else {
        Swal.fire({
          title: '¿Estas seguro de activar al vehículo ' + id + '?',
          text: 'Tú habilitarás al vehiculo!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Si',
          cancelButtonText: 'No'
        }).then(result => {
          if (result.value) {
            this.$http
              .get('/vehicles/' + id + '/activate', {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: 'include'
              })
              .then(function (response) {
                Swal.fire(
                  'Operación Exitosa!',
                  'El vehículo ha sido habilitado.',
                  'success'
                )
                me.getVehicles()
              })
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelado',
              'El vehículo no ha sido inhabilitado',
              'error'
            )
          }
        })
      }
    },

    searchVehicles () {
      let me = this
      this.$http
        .get(
          '/drivers/' + this.id + '/vehicles/search?query=' + me.key_busqueda,
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: 'include'
          }
        )
        .then(res => {
          me.vehicles = res.data.vehicles
        })
        .catch(function (error) {
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
      this.imagenminiatura = ''
      this.$v.$reset()
    }
  },

  filters: {
    timeformat: function (arg) {
      // return moment(arg).subtract(10, 'days').calendar()
      moment.locale('es')
      return moment(arg).format('LLL')
    }
  },

  computed: {
    img () {
      return this.imagenminiatura
    }
  },

  mounted () {
    this.getVehicles()
  },

  validations: {
    placa: {
      required,
      validPlaca (value) {
        var re = /^[A-Z]+[0-9A-Z]+[A-Z]+[-]+[0-9]{3}$/
        return re.test(value)
      }
    },
    capacidadCarga: {
      required,
      validNumeric (value) {
        var re = /[0-9]{1,5}/
        return re.test(value)
      }
    },
    idVehicleType: {
      required
    }
  }
}
</script>

<style scoped>
.error {
  text-align: left;
  color: #fe7c96;
  margin-top: 0%;
  margin-bottom: -1%;
  font-size: 0.75rem;
}

.style-badge-success {
  background-color: #00a518;
  border-color: #00a518;
  color: white;
  font-size: 14px;
}

.style-badge-danger {
  background-color: #fe7c96;
  border-color: #fe7c96;
  color: white;
  font-size: 14px;
}
</style>
