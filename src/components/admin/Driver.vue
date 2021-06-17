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
                    REGISTRAR CONDUCTOR
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
                            v-model="nombre"
                            placeholder="Nombres"
                            maxlength="60"
                            title="Ingresar nombres completos del conductor."
                            data-toggle="tooltip"
                            data-placement="right"
                            @blur="$v.nombre.$touch()"
                          />
                          <template v-if="$v.nombre.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.nombre.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.nombre.minLength"
                            >
                              Min. 3 caracteres(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.nombre.validString"
                            >
                              Solo letras(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            v-model="apellidoPaterno"
                            placeholder="Apellido Paterno"
                            maxlength="50"
                            title="Ingresar solo apellido paterno del conductor."
                            data-toggle="tooltip"
                            data-placement="right"
                            @blur="$v.apellidoPaterno.$touch()"
                          />
                          <template v-if="$v.apellidoPaterno.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.apellidoPaterno.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.apellidoPaterno.minLength"
                            >
                              Min. 3 caracteres(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.apellidoPaterno.validString"
                            >
                              Solo letras(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            v-model="apellidoMaterno"
                            placeholder="Apellido Materno"
                            maxlength="50"
                            title="Ingresar solo apellido materno del conductor."
                            data-toggle="tooltip"
                            data-placement="right"
                            @blur="$v.apellidoMaterno.$touch()"
                          />
                          <template v-if="$v.apellidoMaterno.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.apellidoMaterno.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.apellidoMaterno.minLength"
                            >
                              Min. 3 caracteres(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.apellidoMaterno.validString"
                            >
                              Solo letras(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            v-model="telefono"
                            maxlength="9"
                            placeholder="Celular"
                            title="Ingresar número de celular del conductor."
                            data-toggle="tooltip"
                            data-placement="right"
                            @blur="$v.telefono.$touch()"
                          />
                          <template v-if="$v.telefono.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.telefono.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.telefono.minLength"
                            >
                              Min. 9 caracteres(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            type="email"
                            class="form-control"
                            v-model="email"
                            placeholder="Email"
                            title="Ingresar correo personal del conductor."
                            data-toggle="tooltip"
                            data-placement="right"
                            @blur="$v.email.$touch()"
                          />
                          <template v-if="$v.email.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.email.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.email.email"
                            >
                              Correo no válido(*)
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
                          <textarea
                            class="form-control"
                            v-model="direccion"
                            placeholder="Dirección"
                            row="2"
                            title="Ingresar dirección del conductor."
                            data-toggle="tooltip"
                            data-placement="right"
                            @blur="$v.direccion.$touch()"
                          ></textarea>
                          <template v-if="$v.direccion.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.direccion.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <select
                            class="form-control"
                            v-model="idDocumentType"
                            @blur="$v.idDocumentType.$touch()"
                          >
                            <option value="" selected disabled>
                              Tipo de Documento
                            </option>
                            <option
                              v-for="item in documenttypes"
                              :value="item.id"
                              :key="item.id"
                            >
                              {{ item.tipo }}
                            </option>
                          </select>
                          <template v-if="$v.idDocumentType.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.idDocumentType.required"
                            >
                              Seleccione tipo de documento(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            v-model="numero"
                            placeholder="N° Documento"
                            title="Ingresar número de identidad del conductor."
                            data-toggle="tooltip"
                            data-placement="right"
                            @blur="$v.numero.$touch()"
                          />
                          <template v-if="$v.numero.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.numero.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.numero.minLength"
                            >
                              Min. 8 caracteres(*)
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
                            type="text"
                            class="form-control"
                            v-model="licenciaConducir"
                            placeholder="Licencia de Conducir"
                            title="Ingresar licencia de conducir actual del conductor."
                            data-toggle="tooltip"
                            data-placement="right"
                            @blur="$v.licenciaConducir.$touch()"
                          />
                          <template v-if="$v.licenciaConducir.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.licenciaConducir.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.licenciaConducir.minLength"
                            >
                              Min. 9 caracteres(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <select
                            class="form-control"
                            v-model="banco"
                            @blur="$v.banco.$touch()"
                          >
                            <option value="" selected disabled>
                              Entidad Bancaria
                            </option>
                            <option value="BCP">BCP</option>
                            <option value="BBVA">BBVA</option>
                            <option value="Interbank">Interbank</option>
                            <option value="Scotiabank">Scotiabank</option>
                          </select>
                          <template v-if="$v.banco.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.banco.required"
                            >
                              Seleccione entidad bancaria(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            v-model="cuentaBancaria"
                            placeholder="Cuenta Bancaria"
                            maxlength="50"
                            title="Ingresar número de cuenta o CCI del conductor."
                            data-toggle="tooltip"
                            data-placement="right"
                            @blur="$v.cuentaBancaria.$touch()"
                          />
                          <template v-if="$v.cuentaBancaria.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.cuentaBancaria.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            v-model="name"
                            placeholder="Usuario"
                            title="Ingresar el nombre de usuario del conductor."
                            data-toggle="tooltip"
                            data-placement="right"
                            @blur="$v.name.$touch()"
                          />
                          <template v-if="$v.name.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.name.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.name.validString"
                            >
                              Solo letras(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            type="password"
                            class="form-control"
                            v-model="password"
                            placeholder="Contraseña"
                            title="Ingresar la contraseña del conductor."
                            data-toggle="tooltip"
                            data-placement="right"
                            @blur="$v.password.$touch()"
                          />
                          <template v-if="$v.password.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.password.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.password.minLength"
                            >
                              Min. 6 caracteres(*)
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
                          >Constancia de Salud</label
                        >
                        <div class="col-sm-9">
                          <input
                            type="file"
                            class="form-control file-upload-info"
                            @change="subirArchivo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label"
                          >Subir Fotografía</label
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
                        <label class="col-sm-3 col-form-label"
                          >Fotografía</label
                        >
                        <div class="col-sm-9">
                          <figure>
                            <img
                              with="200"
                              height="200"
                              :src="img"
                              alt="Foto del Conductor"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal-footer">
                  <!-- Botón que añade los datos del formulario, solo se muestra si la variable update es igual a 0-->
                  <!-- <button 
                          @click="saveDrivers()" 
                          class="btn btn-gradient-primary mr-2" 
                          :disabled="$v.$invalid"}
                        >-->
                  <button
                    @click="saveDrivers()"
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
                    ACTUALIZAR CONDUCTOR
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
                            v-model="nombre"
                            placeholder="Nombres"
                            @blur="$v.nombre.$touch()"
                          />
                          <template v-if="$v.nombre.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.nombre.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.nombre.minLength"
                            >
                              Min. 3 caracteres(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.nombre.validString"
                            >
                              Solo letras(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            v-model="apellidoPaterno"
                            placeholder="Apellido Paterno"
                            @blur="$v.apellidoPaterno.$touch()"
                          />
                          <template v-if="$v.apellidoPaterno.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.apellidoPaterno.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.apellidoPaterno.minLength"
                            >
                              Min. 3 caracteres(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.apellidoPaterno.validString"
                            >
                              Solo letras(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            v-model="apellidoMaterno"
                            placeholder="Apellido Materno"
                            @blur="$v.apellidoMaterno.$touch()"
                          />
                          <template v-if="$v.apellidoMaterno.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.apellidoMaterno.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.apellidoMaterno.minLength"
                            >
                              Min. 3 caracteres(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.apellidoMaterno.validString"
                            >
                              Solo letras(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            v-model="telefono"
                            placeholder="Teléfono"
                            @blur="$v.telefono.$touch()"
                          />
                          <template v-if="$v.telefono.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.telefono.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.telefono.minLength"
                            >
                              Min. 9 caracteres(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            type="email"
                            class="form-control"
                            v-model="email"
                            placeholder="Email"
                            @blur="$v.email.$touch()"
                          />
                          <template v-if="$v.email.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.email.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.email.email"
                            >
                              Correo no válido(*)
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
                          <textarea
                            class="form-control"
                            v-model="direccion"
                            placeholder="Dirección"
                            row="2"
                            @blur="$v.direccion.$touch()"
                          ></textarea>
                          <template v-if="$v.direccion.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.direccion.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <select class="form-control" v-model="idDocumentType">
                            <option value="" selected disabled>
                              Tipo de Documento
                            </option>
                            <option
                              v-for="item in documenttypes"
                              :value="item.id"
                              :key="item.id"
                            >
                              {{ item.tipo }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            v-model="numero"
                            placeholder="N° Documento"
                            @blur="$v.numero.$touch()"
                          />
                          <template v-if="$v.numero.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.numero.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.numero.minLength"
                            >
                              Min. 8 caracteres(*)
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
                            type="text"
                            class="form-control"
                            v-model="licenciaConducir"
                            placeholder="Licencia de Conducir"
                            @blur="$v.licenciaConducir.$touch()"
                          />
                          <template v-if="$v.licenciaConducir.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.licenciaConducir.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.licenciaConducir.minLength"
                            >
                              Min. 9 caracteres(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <select
                            class="form-control"
                            v-model="banco"
                            @blur="$v.banco.$touch()"
                          >
                            <option value="" selected disabled>
                              Entidad Bancaria
                            </option>
                            <option value="BCP">BCP</option>
                            <option value="BBVA">BBVA</option>
                            <option value="Interbank">Interbank</option>
                            <option value="Scotiabank">Scotiabank</option>
                          </select>
                          <template v-if="$v.banco.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.banco.required"
                            >
                              Seleccione entidad bancaria(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            type="number"
                            class="form-control"
                            v-model="cuentaBancaria"
                            placeholder="Cuenta Bancaria"
                            @blur="$v.cuentaBancaria.$touch()"
                          />
                          <template v-if="$v.cuentaBancaria.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.cuentaBancaria.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            type="text"
                            class="form-control"
                            v-model="name"
                            placeholder="Usuario"
                            @blur="$v.name.$touch()"
                          />
                          <template v-if="$v.name.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.name.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.name.validString"
                            >
                              Solo letras(*)
                            </p>
                          </template>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group row">
                        <div class="col-sm-12">
                          <input
                            type="password"
                            class="form-control"
                            v-model="password"
                            placeholder="Contraseña"
                            @blur="$v.password.$touch()"
                          />
                          <template v-if="$v.password.$error">
                            <p
                              class="errorMessage error"
                              v-if="!$v.password.required"
                            >
                              Este campo es obligatorio(*)
                            </p>
                            <p
                              class="errorMessage error"
                              v-if="!$v.password.minLength"
                            >
                              Min. 6 caracteres(*)
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
                          >Constancia de Salud</label
                        >
                        <div class="col-sm-9">
                          <input
                            type="file"
                            class="form-control file-upload-info"
                            @change="subirArchivo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label"
                          >Subir Fotografía</label
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
                        <label class="col-sm-3 col-form-label"
                          >Fotografía</label
                        >
                        <div class="col-sm-9">
                          <figure>
                            <img
                              with="200"
                              height="200"
                              :src="img"
                              alt="Foto del Conductor"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal-footer">
                  <!-- Botón que modifica al conductor que anteriormente hemos seleccionado, solo se muestra si la variable update es diferente a 0-->
                  <button
                    @click="updateDrivers()"
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

          <!-- MODAL REGISTRAR VEHÍCULO -->
          <div
            class="modal fade"
            id="exampleModalRegistrarVehiculo"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-primary" id="exampleModalLabel">
                    REGISTRAR VEHÍCULO
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
                          <!-- <template v-if="$v.placa.$error">
                            <p class="errorMessage error" v-if="!$v.placa.required">Este campo es obligatorio(*)</p>
                          </template>                               -->
                          <!-- <code style="color: #9c9fa6;"
                            >Ingresar placa actual del vehículo.</code
                          > -->
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
                          <select class="form-control" v-model="idVehicleType" @blur="$v.idVehicleType.$touch()">
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
                    @click="clearFieldsV()"
                    class="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="row">
              <div class="col-lg-8">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    @keyup="searchDriver()"
                    placeholder="Buscar conductor"
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
                  Registrar Conductor
                </button>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-row align-items-top">
                    <i class="mdi mdi-account-check text-success icon-md"></i>
                    <div class="ml-3">
                      <h6 class="text-success">Conductores Activos</h6>
                      <h3 class="mt-2 text-muted card-text">{{ active }}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-row align-items-top">
                    <i class="mdi mdi-account-off text-danger icon-md"></i>
                    <div class="ml-3">
                      <h6 class="text-danger">Conductores Inactivos</h6>
                      <h3 class="mt-2 text-muted card-text">{{ inactive }}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="drivers === ''">
            <center><p>No existen conductores registrados.</p></center>
          </div>

          <div class="row">
            <div
              class="col-lg-4 grid-margin"
              v-for="item in drivers"
              :key="item.id"
            >
              <div class="card">
                <div class="card-body">
                  <center>
                    <img
                      class="card-img-top"
                      :src="'http://localhost' + item.person.imagen"
                      style="width: 200px; height: 220px"
                    />

                    <br /><br />
                    <div
                      v-if="
                        item.status.nombre === 'activo' &&
                          item.driver.is_suitable === 1
                      "
                      class="badge style-badge-success"
                    >
                      Apto
                    </div>
                    <div
                      v-if="
                        item.status.nombre === 'activo' &&
                          item.driver.is_suitable === 2
                      "
                      class="badge style-badge-danger"
                    >
                      No Apto
                    </div>
                  </center>
                  <br />
                  <p class="card-text crop-text-2">
                    <strong>Nombres: </strong>{{ item.person.nombre }}
                    {{ item.person.apellidoPaterno }}<br />
                    <strong>Número de Identidad:</strong
                    >{{ item.person.numero }} <br />
                    <strong>Licencia de Conducir:</strong>
                    {{ item.driver.licenciaConducir }}
                    <br />
                    <strong>Usuario:</strong> {{ item.email }}<br />
                  </p>
                  <div
                    v-if="item.status.nombre === 'activo'"
                    class="text-success"
                  >
                    Estado: {{ item.status.nombre }}
                  </div>
                  <div v-else class="text-danger">
                    Estado: {{ item.status.nombre }}
                  </div>
                  <br />
                  <p class="card-text">
                    <small class="text-muted"
                      >Última actualización
                      {{ item.updated_at | timeformat }}</small
                    >
                  </p>

                  <div>
                    <div class="form-group">
                      <div class="row">
                        <div class="col-lg-3">
                          <div class="input-group">
                            <button
                              class="btn btn-info btn-sm"
                              type="button"
                              title="Ver detalle"
                              @click="viewdetalle(item.id)"
                            >
                              <i class="mdi mdi-eye"></i>
                            </button>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <div class="input-group">
                            <button
                              class="btn btn-primary btn-sm"
                              type="button"
                              data-toggle="modal"
                              data-target="#exampleModalRegistrarVehiculo"
                              @click="addVehicles(item.id)"
                              title="Agregar vehículo"
                            >
                              <i class="mdi mdi-truck-delivery"></i>
                            </button>
                          </div>
                        </div>
                        <div class="col-lg-3">
                          <div class="input-group">
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
                        <div class="col-lg-3">
                          <div class="input-group">
                            <button
                              class="btn btn-danger btn-sm"
                              type="button"
                              @click="deleteDrivers(item.id, item.idStatus)"
                              title="Desactivar/Activar conductor"
                            >
                              <i class="mdi mdi-account"></i>
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
                      >{{ current_page }}</a
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
import '@/purple/assets/js/off-canvas.js'
import HomeAdmin from '@/components/admin/HomeAdmin'
import LateralMenu from '@/components/admin/LateralMenu'
import Swal from 'sweetalert2'
import moment from 'moment'
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Driver',
  components: { HomeAdmin, LateralMenu },
  data () {
    return {
      drivers: [],
      current_page: 0,
      id: '',
      name: '',
      password: '',
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      direccion: '',
      telefono: '',
      email: '',
      placa: '',
      capacidadCarga: '',
      idVehicleType: '',
      idDriver: '',
      numero: '',
      imagen: '',
      cuentaBancaria: '',
      banco: '',
      idDocumentType: '',
      licenciaConducir: '',
      constanciaEstadoSalud: '',
      key_busqueda: '',
      vehicletypes: '',
      documenttypes: '',
      update: 0,
      imagenminiatura: '',
      active: '',
      inactive: ''
    }
  },
  created () {
    this.$http
      .get('/drivers', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      })
      .then(res => {
        this.drivers = res.data.drivers.data
        this.active = res.data.active
        this.inactive = res.data.inactive
        this.current_page = res.data.drivers.current_page
      })

    this.$http
      .get('/vehicletypes', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      })
      .then(res => {
        this.vehicletypes = res.data.VehicleTypes
      })

    this.$http
      .get('/documenttypes', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      })
      .then(res => {
        this.documenttypes = res.data.DocumentTypes
      })
  },

  methods: {
    getDrivers (num_page) {
      this.$http
        .get('/drivers', {
          params: {
            page: num_page
          },
          headers: { 'Content-Type': 'application/json' },
          withCredentials: 'include'
        })
        .then(res => {
          this.drivers = res.data.drivers.data
          this.active = res.data.active
          this.inactive = res.data.inactive
          this.current_page = res.data.drivers.current_page
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },

    saveDrivers () {
      console.log(this.nombre)
      const config = {
        headers: { 'content-type': 'multipart/form-data' },
        withCredentials: 'include'
      }
      let me = this
      let formData = new FormData()
      formData.append('nombre', this.nombre)
      formData.append('apellidoPaterno', this.apellidoPaterno)
      formData.append('apellidoMaterno', this.apellidoMaterno)
      formData.append('telefono', this.telefono)
      formData.append('email', this.email)
      formData.append('direccion', this.direccion)
      formData.append('idDocumentType', this.idDocumentType)
      formData.append('licenciaConducir', this.licenciaConducir)
      formData.append('numero', this.numero)
      formData.append('banco', this.banco)
      formData.append('cuentaBancaria', this.cuentaBancaria)
      formData.append('constanciaEstadoSalud', this.constanciaEstadoSalud)
      formData.append('name', this.name)
      formData.append('password', this.password)
      formData.append('imagen', this.imagen)
      let url = '/drivers' // Ruta que hemos creado para enviar un vehiculo y guardarlo
      this.$http
        .post(url, formData, config)
        .then(function (response) {
          Swal.fire(
            'Registro Exitoso!',
            'Se registró correctamente los datos del conductor!',
            'success'
          )
          me.getDrivers() // llamamos al metodo getVehicles(); para que refresque nuestro array y muestro los nuevos datos
          me.clearFields() // Limpiamos los campos e inicializamos la variable update a 0
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    addVehicles (id) {
      this.idDriver = id
      console.log(this.idDriver)
    },

    viewdetalle (item) {
      this.$router.push({
        name: 'Vehicle',
        params: {
          id: item
        }
      })
    },

    saveVehicles () {
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
      let url = '/drivers/' + this.idDriver + '/vehicles' // Ruta que hemos creado para enviar un vehiculo y guardarlo
      this.$http
        .post(url, formData, config)
        .then(function (response) {
          Swal.fire(
            'Registro Exitoso!',
            'Se registró correctamente los datos del vehículo!',
            'success'
          )
          me.getDrivers() // llamamos al metodo getVehicles(); para que refresque nuestro array y muestro los nuevos datos
          me.clearFieldsV() // Limpiamos los campos e inicializamos la variable update a 0
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    subirArchivo (e) {
      let file = e.target.files[0]
      this.constanciaEstadoSalud = file
      console.log(this.constanciaEstadoSalud)
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

    loadFieldsUpdate (id) {
      // Esta función rellena los campos y la variable update, con la tarea que queremos modificar
      let me = this
      this.update = id
      let url = '/drivers/' + this.update
      this.$http
        .get(url, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: 'include'
        })
        .then(function (response) {
          me.nombre = response.data.person.nombre
          me.apellidoPaterno = response.data.person.apellidoPaterno
          me.apellidoMaterno = response.data.person.apellidoMaterno
          me.telefono = response.data.person.telefono
          me.direccion = response.data.person.direccion
          me.idDocumentType = response.data.person.idDocumentType
          me.numero = response.data.person.numero
          me.banco = response.data.driver.banco
          me.cuentaBancaria = response.data.driver.cuentaBancaria
          me.licenciaConducir = response.data.driver.licenciaConducir
          me.email = response.data.email
          me.name = response.data.name
          me.password = response.data.password
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },

    updateDrivers () {
      const config = {
        headers: { 'content-type': 'multipart/form-data' },
        withCredentials: 'include'
      }
      let me = this
      let formData = new FormData()
      formData.append('id', this.update)
      formData.append('nombre', this.nombre)
      formData.append('apellidoPaterno', this.apellidoPaterno)
      formData.append('apellidoMaterno', this.apellidoMaterno)
      formData.append('telefono', this.telefono)
      formData.append('email', this.email)
      formData.append('direccion', this.direccion)
      formData.append('idDocumentType', this.idDocumentType)
      formData.append('licenciaConducir', this.licenciaConducir)
      formData.append('numero', this.numero)
      formData.append('banco', this.banco)
      formData.append('cuentaBancaria', this.cuentaBancaria)
      formData.append('constanciaEstadoSalud', this.constanciaEstadoSalud)
      formData.append('name', this.name)
      formData.append('password', this.password)
      formData.append('imagen', this.imagen)
      formData.append('_method', 'put')
      let url = '/drivers/' + this.update // Ruta que hemos creado para enviar una tarea y guardarla
      this.$http
        .post(url, formData, config)
        .then(function (response) {
          Swal.fire(
            'Actualización Exitosa!',
            'Se actualizó correctamente los datos del conductor!',
            'success'
          )
          me.getDrivers() // llamamos al metodo getPDrivers(); para que refresque nuestro array y muestro los nuevos datos
          me.clearFields() // Limpiamos los campos e inicializamos la variable update a 0
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    deleteDrivers (id, status) {
      // Esta nos abrirá un alert de javascript y si aceptamos borrará el conductor que hemos elegido
      let me = this
      if (status === 1) {
        Swal.fire({
          title: '¿Estas seguro de inhabilitar al conductor ' + id + '?',
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
                  'El conductor ha sido inhabilitado.',
                  'success'
                )
                me.getDrivers()
              })
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelado',
              'El conductor no ha sido inhabilitado',
              'error'
            )
          }
        })
      } else {
        Swal.fire({
          title: '¿Estas seguro de activar al conductor ' + id + '?',
          text: 'Tú habilitarás al conductor!',
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
                  'El conductor ha sido habilitado.',
                  'success'
                )
                me.getDrivers()
              })
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelado',
              'El conductor no ha sido inhabilitado',
              'error'
            )
          }
        })
      }
    },

    searchDriver () {
      let me = this
      this.$http
        .get('/drivers/search?query=' + me.key_busqueda, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: 'include'
        })
        .then(res => {
          me.drivers = res.data.data
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
    },

    clearFields () {
      /* Limpia los campos e inicializa la variable update a 0 */
      this.nombre = ''
      this.apellidoPaterno = ''
      this.apellidoMaterno = ''
      this.telefono = ''
      this.email = ''
      this.direccion = ''
      this.idDocumentType = ''
      this.licenciaConducir = ''
      this.numero = ''
      this.banco = ''
      this.cuentaBancaria = ''
      this.constanciaEstadoSalud = ''
      this.name = ''
      this.password = ''
      this.imagen = ''
      this.imagenminiatura = ''
      this.update = 0
      this.$v.$reset()
    },

    clearFieldsV () {
      /* Limpia los campos e inicializa la variable update a 0 */
      this.placa = ''
      this.capacidadCarga = ''
      this.idDriver = ''
      this.idVehicleType = ''
      this.update = 0
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
    this.getDrivers()
  },

  validations: {
    nombre: {
      required,
      minLength: minLength(3),
      validString (value) {
        var re = /^[A-Za-z ]+$/
        return re.test(value)
      }
    },
    apellidoPaterno: {
      required,
      minLength: minLength(3),
      validString (value) {
        var re = /^[A-Za-z ]+$/
        return re.test(value)
      }
    },
    apellidoMaterno: {
      required,
      minLength: minLength(3),
      validString (value) {
        var re = /^[A-Za-z ]+$/
        return re.test(value)
      }
    },
    telefono: {
      required,
      minLength: minLength(9)
    },
    email: {
      required,
      email
    },
    direccion: {
      required
    },
    idDocumentType: {
      required
    },
    numero: {
      required,
      minLength: minLength(8)
    },
    licenciaConducir: {
      required,
      minLength: minLength(9)
    },
    banco: {
      required
    },
    cuentaBancaria: {
      required
    },
    name: {
      required,
      validString (value) {
        var re = /^[A-Za-z ]+$/
        return re.test(value)
      }
    },
    password: {
      required,
      minLength: minLength(6)
    },
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
