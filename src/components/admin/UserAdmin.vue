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
          <!-- MODAL REGISTRAR CONDUCTOR-->
          <div
            class="modal fade"
            id="exampleModalRegistrarConductor"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-primary" id="exampleModalLabel">
                    REGISTRAR USUARIO JEFE
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
                        <div class="col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            v-model="data.name"
                            placeholder="Nombres y Apellidos"
                            maxlength="60"
                            title="Ingresar nombres completos"
                            data-toggle="tooltip"
                            data-placement="right"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            class="form-control"
                            v-model="data.email"
                            placeholder="Email"
                            title="Ingresar correo electrónico actual."
                            data-toggle="tooltip"
                            data-placement="right"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            class="form-control"
                            v-model="data.password"
                            placeholder="Password"
                            title="Ingresar una contraseña con 8 caracteres mínimo."
                            data-toggle="tooltip"
                            data-placement="right"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal-footer">
                  <!-- Botón que añade los datos del formulario, solo se muestra si la variable update es igual a 0-->
                  <button
                    @click="saveUser()"
                    class="btn btn-gradient-primary mr-2"
                  >
                    Registrar
                  </button>
                  <!-- Botón que limpia el formulario y inicializa la variable a 0, solo se muestra si la variable update es diferente a 0-->
                  <button
                    @click="clearFields()"
                    class="btn btn-danger btn-fw"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- FIN -->
          <!-- MODAL ACTUALIZAR CONDUCTOR-->
          <div
            class="modal fade"
            id="exampleModalActualizarConductor"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-primary" id="exampleModalLabel">
                    ACTUALIZAR USUARIO JEFE
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
                        <div class="col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            v-model="data.name"
                            placeholder="Nombres y Apellidos"
                            maxlength="60"
                            title="Ingresar nombres completos"
                            data-toggle="tooltip"
                            data-placement="right"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            class="form-control"
                            v-model="data.email"
                            placeholder="Email"
                            title="Ingresar correo electrónico actual."
                            data-toggle="tooltip"
                            data-placement="right"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            class="form-control"
                            v-model="data.password"
                            placeholder="Password"
                            title="Ingresar una contraseña con 8 caracteres mínimo."
                            data-toggle="tooltip"
                            data-placement="right"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal-footer">
                  <!-- Botón que modifica al conductor que anteriormente hemos seleccionado, solo se muestra si la variable update es diferente a 0-->
                  <button
                    @click="updateUser()"
                    class="btn btn-warning btn-fw"
                    data-dismiss="modal"
                  >
                    Actualizar
                  </button>
                  <!-- Botón que limpia el formulario y inicializa la variable a 0, solo se muestra si la variable update es diferente a 0-->
                  <button
                    @click="clearFields()"
                    class="btn btn-danger btn-fw"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- FIN -->

          <div class="form-group">
            <div class="row">
              <div class="col-lg-8">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Buscar usuario"
                    @keyup="searchDriver()"
                    aria-describedby="basic-addon2"
                    v-model="key_busqueda"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-primary"
                      type="button"
                      @click="searchDriver()"
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
                  data-target="#exampleModalRegistrarConductor"
                >
                  Registrar Usuario
                </button>
              </div>
            </div>
          </div>
 <div class="container-fluid mt-2 d-flex justify-content-center w-100">             
              <div class="table-responsive w-100">
                <table class="table">
                  <thead>
                    <tr style="background-color: #309D4F; color: #fff">
                      <th>#</th>
                      <th class="text-right">Nombres y Apellidos</th>
                      <th class="text-right">Email</th>
                      <th class="text-right">Estado</th>
                      <th> Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr 
                      class="text-right"
                      v-for="item in data"
                      :key="item.id"
                    >
                      <td class="text-left">{{ item.id }}</td>
                      <td class="text-left">{{ item.name }}</td>
                      <td class="text-left">{{ item.email}}</td>
                      <td>
                        <div v-if="item.estado === 0">
                      <label class="badge badge-danger">Inactivo</label>
                      </div>
                        <div v-else>
                      <label class="badge badge-success">Activo</label>
                        </div>
                      </td>
                      <td>        
                        <div class="col-lg-3">
                    <div class="input-group">
                      <div class="input-group-append">
                        <button
                          class="btn btn-warning btn-sm"
                          data-toggle="modal"
                          data-target="#exampleModalActualizarConductor"
                          type="button"
                          @click="loadFieldsUpdate(item.id)"
                          title="Actualizar"
                        >
                          <i class="mdi mdi-lead-pencil"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                      @click="getDrivers(current_page - 1)"
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
                      > 1 </a
                    >
                  </li>
                  <li id="order-listing_next">
                    <button
                      aria-controls="order-listing"
                      data-dt-idx="2"
                      tabindex="0"
                      class="page-link"
                      @click="getDrivers(current_page + 1)"
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
import axios from 'axios'
import HomeAdmin from '@/components/admin/HomeAdmin'
import LateralMenu from '@/components/admin/LateralMenu'
export default {
  name: 'UserAdmin',
  components: {HomeAdmin, LateralMenu},
  data () {
    return {
      data: {
        name: '',
        email: '',
        password: ''
      },
      key_busqueda: null
    }
  },
  created () {},

  methods: {
    saveUser () {
      const response = axios.post('http://localhost/api/register', this.data)
      this.data = response.data
    },

    loadFieldsUpdate (id) {
      // Esta función rellena los campos y la variable update, con la tarea que queremos modificar
      let me = this
      this.update = id
      let url = 'http://localhost/api/register' + this.update
      axios
        .get(url)
        .then(function (response) {
          me.email = response.data.email
          me.name = response.data.name
          me.password = response.data.password
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },

    clearFields () {
      /* Limpia los campos e inicializa la variable update a 0 */
      this.data = ''
    }
  },

  mounted () {}
}
</script>
