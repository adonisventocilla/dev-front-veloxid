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
                              v-model="user.name"
                              placeholder="Nombres y Apellidos"
                              maxlength="60"
                              title="Ingresar nombres completos"
                              data-toggle="tooltip"
                              data-placement="right"
                              @blur="$v.user.name.$touch()"
                              required
                            />
                            <template v-if="$v.user.name.$error">
                              <p
                                class="errorMessage error"
                                v-if="!$v.user.name.required"
                              >
                                Este campo es obligatorio(*)
                              </p>
                              <p
                                class="errorMessage error"
                                v-if="!$v.user.name.maxLength"
                              >
                                Máx. 60 caracteres(*)
                              </p>
                            </template>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group row">
                          <div class="col-sm-12">
                            <input
                              type="email"
                              class="form-control"
                              v-model="user.email"
                              placeholder="Email"
                              title="Ingresar correo electrónico actual."
                              data-toggle="tooltip"
                              data-placement="right"
                              @blur="$v.user.email.$touch()"
                              required
                            />
                            <template v-if="$v.user.email.$error">
                              <p
                                class="errorMessage error"
                                v-if="!$v.user.email.required"
                              >
                                Este campo es obligatorio(*)
                              </p>
                              <p
                                class="errorMessage error"
                                v-if="!$v.user.email.email"
                              >
                                Correo inválido(*)
                              </p>
                            </template>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group row">
                          <div class="col-sm-12">
                            <input
                              type="password"
                              class="form-control"
                              v-model="user.password"
                              placeholder="Password"
                              title="Ingresar una contraseña con 8 caracteres mínimo."
                              data-toggle="tooltip"
                              data-placement="right"
                              @blur="$v.user.password.$touch()"
                              required
                            />
                            <template v-if="$v.user.password.$error">
                              <p
                                class="errorMessage error"
                                v-if="!$v.user.password.required"
                              >
                                Este campo es obligatorio(*)
                              </p>
                              <p
                                class="errorMessage error"
                                v-if="!$v.user.password.minLength"
                              >
                                Mín. 8 caracteres(*)
                              </p>
                            </template>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

                <div class="modal-footer">
                  <!-- Botón que añade los datos del formulario, solo se muestra si la variable update es igual a 0-->
                  <button
                    :disabled = "$v.$invalid"
                    @click="saveUser()"
                    class="btn btn-gradient-primary mr-2"
                    data-dismiss="modal"
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
                            v-model="user.name"
                            placeholder="Nombres y Apellidos"
                            maxlength="60"
                            title="Ingresar nombres completos"
                            data-toggle="tooltip"
                            data-placement="right"
                            @blur="$v.user.name.$touch()"
                            required
                          />
                          <template v-if="$v.user.name.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.user.name.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.user.name.maxLength"
                            >
                              Máx. 60 caracteres(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            type="email"
                            class="form-control"
                            v-model="user.email"
                            placeholder="Email"
                            title="Ingresar correo electrónico actual."
                            data-toggle="tooltip"
                            data-placement="right"
                            @blur="$v.user.email.$touch()"
                            required
                          />
                          <template v-if="$v.user.email.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.user.email.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.user.email.email"
                            >
                              Correo inválido(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            type="password"
                            class="form-control"
                            v-model="user.password"
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
          <div class="card">
            <div class="card-body">
              <div class="card-title">Usuarios Jefe de Transporte</div>
              <br />
              <div
                class="container-fluid mt-2 d-flex justify-content-center w-100"
              >
                <div class="table-responsive w-100">
                  <table class="table">
                    <thead>
                      <tr style="background-color: #309D4F; color: #fff">
                        <th>#</th>
                        <th class="text-left">Nombres y Apellidos</th>
                        <th class="text-left">Email</th>
                        <th class="text-left">Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class="text-right"
                        v-for="item in users"
                        :key="item.id"
                      >
                        <td class="text-left">{{ item.id }}</td>
                        <td class="text-left">{{ item.name }}</td>
                        <td class="text-left">{{ item.email }}</td>
                        <td class="text-left">
                          <div v-if="item.idStatus === 2">
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
                                  title="Activar/Desactivar"
                                >
                                  <i class="mdi mdi-lead-pencil"></i>
                                </button>
                                <button
                                  class="btn btn-danger btn-sm"
                                  type="button"
                                  @click="changestatus(item.id, item.idStatus)"
                                  title="Desactivar/Activar conductor"
                                >
                                  <i class="mdi mdi-account"></i>
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
                    >
                      1
                    </a>
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
import HomeAdmin from '@/components/admin/HomeAdmin'
import LateralMenu from '@/components/admin/LateralMenu'
import Swal from 'sweetalert2'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
export default {
  name: 'UserAdmin',
  components: { HomeAdmin, LateralMenu },
  data () {
    return {
      users: {},
      user: {
        id: '',
        name: '',
        email: '',
        password: ''
      },
      key_busqueda: null
    }
  },
  created () {
    this.$http
      .get('/chiefs_drivers', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      })
      .then(res => {
        this.users = res.data
      })
  },

  methods: {
    getUsers () {
      this.$http
        .get('/chiefs_drivers', {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: 'include'
        })
        .then(res => {
          this.users = res.data
        })
    },

    saveUser () {
      let me = this
      this.$http
        .post('/chiefs_drivers', this.user, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: 'include'
        })
        .then(function (response) {
          Swal.fire(
            'Registro Exitoso!',
            'Se registró correctamente los datos del usuario!',
            'success'
          )
          me.getUsers()
          me.clearFields()
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    changestatus (id, status) {
      let me = this
      if (status === 1) {
        Swal.fire({
          title: '¿Estas seguro de inhabilitar al usuario ' + id + '?',
          text: 'Tú inhabilitarás al conductor!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Si',
          cancelButtonText: 'No'
        }).then(result => {
          if (result.value) {
            this.$http
              .delete('/users/' + id, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: 'include'
              })
              .then(function (response) {
                Swal.fire(
                  'Operación Exitosa!',
                  'El usuario ha sido inhabilitado.',
                  'success'
                )
                me.getUsers()
              })
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelado',
              'El usuario no ha sido inhabilitado',
              'error'
            )
          }
        })
      } else {
        Swal.fire({
          title: '¿Estas seguro de activar al usuario ' + id + '?',
          text: 'Tú habilitarás al usuario!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Si',
          cancelButtonText: 'No'
        }).then(result => {
          if (result.value) {
            this.$http
              .post(
                '/users/' + id,
                { _method: 'put' },
                {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: 'include'
                }
              )
              .then(function (response) {
                Swal.fire(
                  'Operación Exitosa!',
                  'El usuario ha sido habilitado.',
                  'success'
                )
                me.getUsers()
              })
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelado',
              'El usuario no ha sido inhabilitado',
              'error'
            )
          }
        })
      }
    },

    clearFields () {
      /* Limpia los campos e inicializa la variable update a 0 */
      this.user.id = ''
      this.user.name = ''
      this.user.email = ''
      this.user.password = ''
      this.$v.$reset()
    },

    loadFieldsUpdate (id) {
      // Esta función rellena los campos y la variable update, con la tarea que queremos modificar
      let me = this
      let url = '/chiefs_drivers/' + id
      this.$http
        .get(url, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: 'include'
        })
        .then(function (res) {
          me.user.id = res.data.id
          me.user.name = res.data.name
          me.user.email = res.data.email
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },

    updateUser () {
      const config = {
        headers: { 'content-type': 'multipart/form-data' },
        withCredentials: 'include'
      }
      let me = this
      let formData = new FormData()
      if (this.user.password) {
        formData.append('password', this.user.password)
        formData.append('name', this.user.name)
        formData.append('email', this.user.email)
      } else {
        formData.append('name', this.user.name)
        formData.append('email', this.user.email)
      }
      formData.append('_method', 'put')
      let url = '/chiefs_drivers/' + this.user.id
      this.$http
        .post(url, formData, config)
        .then(function (response) {
          Swal.fire(
            'Actualización Exitosa!',
            'Se actualizó correctamente los datos del usuario!',
            'success'
          )
          me.getUsers() // llamamos al metodo getPDrivers(); para que refresque nuestro array y muestro los nuevos datos
          me.clearFields() // Limpiamos los campos e inicializamos la variable update a 0
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },

  mounted () {},

  validations: {
    user: {
      name: {
        required,
        validString (value) {
          var re = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g
          return re.test(value)
        }
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      }
    }
  }
}
</script>

<style>
.error {
  text-align: left;
  color: #fe7c96;
  margin-top: 0%;
  margin-bottom: -1%;
  font-size: 0.75rem;
}
</style>
