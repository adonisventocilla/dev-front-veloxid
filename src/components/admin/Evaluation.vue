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
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <!-- Evaluacion Conductor -->
                    <div class="col-lg-6 col-md-4 border-right">
                      <div class="page-header">
                        <h4>
                          <font style="vertical-align: inherit;"
                            ><font style="vertical-align: inherit;"
                              >Evaluación de Conductor</font
                            ></font
                          >
                        </h4>
                      </div>
                      <div class="input-group chat-search-input">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Buscar Conductor"
                          @keyup="searchDriver(key_busqueda)"
                          v-model="key_busqueda"
                        />
                        <div class="input-group-append">
                          <span class="input-group-text">
                            <i class="mdi mdi-magnify"></i>
                          </span>
                        </div>
                      </div>
                      <br />
                      <select
                        class="form-control"
                        v-model="iddriver"
                        @click="getVehicles(iddriver)"
                      >
                        <option
                          v-for="item in driverlist"
                          :value="item.id"
                          :key="item.id"
                        >
                          {{ item.person.nombre }}
                          {{ item.person.apellidoPaterno }}
                          {{ item.person.apellidoMaterno }}
                        </option>
                      </select>

                      <div class="form-group" style="margin-top: 30px">
                        <label>Requerimientos:</label>
                        <div class="list-wrapper">
                          <ul
                            class="d-flex flex-column-reverse todo-list"
                            v-for="item in evaluaciondriver"
                            :key="item.id"
                          >
                            <li style="padding: 0">
                              <div class="form-check">
                                <label class="form-check-label">
                                  <input
                                    class="checkbox"
                                    type="checkbox"
                                    v-model="requerimentdriver"
                                    :value="{
                                      idRequirement: item.id,
                                      valor: 0
                                    }"/>{{ item.requerimiento }}
                                  <i class="input-helper"></i
                                ></label>
                              </div>
                              <!-- <i class="remove mdi mdi-close-circle-outline"></i> -->
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="exampleTextarea1">Observaciones:</label>
                        <textarea
                          v-model="observaciondriver"
                          class="form-control"
                          rows="4"
                        ></textarea>
                      </div>
                      <div class="float-right">
                        <button
                          type="submit"
                          class="btn btn-gradient-primary"
                          @click="saveRequerimentsDrivers()"
                        >
                          Guardar
                        </button>
                      </div>
                    </div>

                    <!-- Evaluacion Vehiculo -->
                    <div class="col-lg-6 col-md-4">
                      <div class="row">
                        <div class="col">
                          <h4>
                            <font style="vertical-align: inherit;"
                              ><font style="vertical-align: inherit;"
                                >¿Desea evaluar vehículos?</font
                              ></font
                            >
                          </h4>
                        </div>
                        <div class="col">
                          <button
                            class="btn btn-gradient-primary"
                            @click="confirmEvaluation()"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <br /><br />
                      <div v-if="evaluar === true">
                        <div class="page-header">
                          <h4>
                            <font style="vertical-align: inherit;"
                              ><font style="vertical-align: inherit;"
                                >Evaluación de Vehículo</font
                              ></font
                            >
                          </h4>
                        </div>
                        <select class="form-control" v-model="idvehicle">
                          <option
                            v-for="item in vehicles"
                            :value="item.id"
                            :key="item.id"
                          >
                            {{ item.placa }}
                          </option>
                        </select>
                        <div class="form-group" style="margin-top: 30px">
                          <label>Requerimientos:</label>
                          <div class="list-wrapper">
                            <ul
                              class="d-flex flex-column-reverse todo-list"
                              v-for="item in evaluacionvehicle"
                              :key="item.id"
                            >
                              <li style="padding: 0">
                                <div class="form-check">
                                  <label class="form-check-label">
                                    <input
                                      class="checkbox"
                                      type="checkbox"
                                      v-model="requerimentvehicle"
                                      :value="{
                                        idRequirement: item.id,
                                        valor: 0
                                      }"/>{{ item.requerimiento }}
                                    <i class="input-helper"></i
                                  ></label>
                                </div>
                                <!-- <i class="remove mdi mdi-close-circle-outline"></i> -->
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="exampleTextarea1">Observaciones:</label>
                          <textarea
                            v-model="observacionvehicle"
                            class="form-control"
                            rows="4"
                          ></textarea>
                        </div>
                        <div class="float-right">
                          <button
                            type="submit"
                            class="btn btn-gradient-primary"
                            @click="saveRequerimentsVehicles()"
                          >
                            Guardar
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
      </div>
    </div>
  </div>
</template>

<script>
import '@/purple/assets/js/off-canvas.js'
import HomeAdmin from '@/components/admin/HomeAdmin'
import LateralMenu from '@/components/admin/LateralMenu'
import Swal from 'sweetalert2'
export default {
  name: 'Evaluation',
  components: { HomeAdmin, LateralMenu },
  data () {
    return {
      drivers: [],
      driverlist: [],
      vehicles: [],
      evaluaciondriver: [],
      evaluacionvehicle: [],
      requerimentdriver: [],
      requerimentvehicle: [],
      observaciondriver: '',
      observacionvehicle: '',
      iddriver: 0,
      idvehicle: 0,
      key_busqueda: null,
      evaluar: false
    }
  },
  created () {
    this.$http
      .get('/requirements/drivers', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      })
      .then(res => {
        this.evaluaciondriver = res.data.Requirements
      })
    this.$http
      .get('/requirements/vehicles', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      })
      .then(res => {
        this.evaluacionvehicle = res.data.Requirements
      })
    this.$http
      .get('/drivers', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      })
      .then(res => {
        this.drivers = res.data.drivers.data
      })
  },
  methods: {
    saveRequerimentsDrivers () {
      let me = this
      let url = '/drivers/' + this.iddriver + '/evaluations' // Ruta que hemos creado para enviar los requerimentos y guardarlos
      this.$http
        .post(
          url,
          {
            // estas variables son las que enviaremos
            evals: this.requerimentdriver,
            observacion: this.observaciondriver
          },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: 'include'
          }
        )
        .then(function (response) {
          Swal.fire(
            'Operación Exitosa!',
            'La evaluación se ha registrado correctamente.',
            'success'
          )
          me.clearFieldsD()
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    saveRequerimentsVehicles () {
      let me = this
      let url = '/vehicles/' + this.idvehicle + '/evaluations' // Ruta que hemos creado para enviar los requerimentos y guardarlos
      this.$http
        .post(
          url,
          {
            evals: this.requerimentvehicle,
            observacion: this.observacionvehicle
          },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: 'include'
          }
        )
        .then(function (response) {
          Swal.fire(
            'Operación Exitosa!',
            'La evaluación se ha registrado correctamente.',
            'success'
          )
          me.clearFieldsV()
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    searchDriver (key_busqueda) {
      this.$http
        .get('/drivers/search?query=' + key_busqueda, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: 'include'
        })
        .then(res => {
          this.driverlist = res.data.data
        })
    },

    getVehicles (iddriver) {
      this.$http
        .get('/drivers/' + iddriver + '/vehicles', {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: 'include'
        })
        .then(res => {
          this.vehicles = res.data.vehicles.data
          console.log(this.vehicles)
        })
    },

    confirmEvaluation () {
      if (this.evaluar === false) {
        this.evaluar = true
      } else {
        this.evaluar = false
      }
    },

    clearFieldsD () {
      /* Limpia los campos */
      this.requerimentdriver = ''
    },

    clearFieldsV () {
      /* Limpia los campos */
      this.requerimentvehicle = ''
    }
  }
}
</script>
