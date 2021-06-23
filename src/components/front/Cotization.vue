<template>
  <div>
    <Nav /><br />
    <div class="content-wrapper" style="padding-bottom: 0px;">
      <div class="row">
        <div class="col-12 grid-margin">
          <div class="card">
            <div class="card-body">
              <h3>
                <font style="vertical-align: inherit;"
                  ><font style="vertical-align: inherit;"
                    >Cotización de Pedidos</font
                  ></font
                >
              </h3>
              <p class="card-description"></p>
              <div class="row" v-if="service.products == ''">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label"
                      >Distrito Origen</label
                    >
                    <div class="col-sm-9">
                      <select
                        class="form-control"
                        v-model="distritoorigen"
                        @blur="$v.distritoorigen.$touch()"
                      >
                        <option
                          v-for="item in distritos"
                          :value="item"
                          :key="item.id"
                          >{{ item.distrito }}</option
                        >
                      </select>
                      <template v-if="$v.distritoorigen.$error">
                        <p
                          class="errorMessage error"
                          v-if="!$v.distritoorigen.required"
                        >
                          Seleccione distrito origen(*)
                        </p>
                      </template>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label"
                      >Distrito Destino</label
                    >
                    <div class="col-sm-9">
                      <select
                        class="form-control"
                        v-model="distritodestino"
                        @blur="$v.distritodestino.$touch()"
                      >
                        <option
                          v-for="item in distritos"
                          :value="item"
                          :key="item.id"
                          >{{ item.distrito }}</option
                        >
                      </select>
                      <template v-if="$v.distritodestino.$error">
                        <p
                          class="errorMessage error"
                          v-if="!$v.distritodestino.required"
                        >
                          Seleccione distrito destino(*)
                        </p>
                      </template>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row" v-if="service.products != ''">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label"
                      >Distrito Origen</label
                    >
                    <div class="col-sm-9">
                      <select
                        class="form-control"
                        v-model="distritoorigen"
                        disabled
                      >
                        <option
                          v-for="item in distritos"
                          :value="item"
                          :key="item.id"
                          >{{ item.distrito }}</option
                        >
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label"
                      >Distrito Destino</label
                    >
                    <div class="col-sm-9">
                      <select
                        class="form-control"
                        v-model="distritodestino"
                        disabled
                      >
                        <option
                          v-for="item in distritos"
                          :value="item"
                          :key="item.id"
                          >{{ item.distrito }}</option
                        >
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <h4>
                <font style="vertical-align: inherit;"
                  ><font style="vertical-align: inherit;"
                    >Registrar Productos</font
                  ></font
                >
              </h4>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Descripción</label>
                    <div class="col-sm-9">
                      <input
                        class="form-control"
                        v-model="producto.descripcion"
                        placeholder="Nombre del Producto"
                        @blur="$v.producto.descripcion.$touch()"
                      />
                      <template v-if="$v.producto.descripcion.$error">
                        <p
                          class="errorMessage error"
                          v-if="!$v.producto.descripcion.required"
                        >
                          Este campo es obligatorio(*)
                        </p>
                        <p
                          class="errorMessage error"
                          v-if="!$v.producto.descripcion.minLength"
                        >
                          Min. 4 caracteres(*)
                        </p>
                      </template>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Cantidad</label>
                    <div class="col-sm-9">
                      <input
                        type="number"
                        class="form-control"
                        v-model="producto.cantidad"
                        placeholder="Cantidad"
                        @blur="$v.producto.cantidad.$touch()"
                      />
                      <template v-if="$v.producto.cantidad.$error">
                        <p
                          class="errorMessage error"
                          v-if="!$v.producto.cantidad.required"
                        >
                          Este campo es obligatorio(*)
                        </p>
                      </template>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Categoria</label>
                    <div class="col-sm-9">
                      <select
                        class="form-control"
                        v-model="categorie"
                        @blur="$v.categorie.$touch()"
                      >
                        <option
                          v-for="(item, i) in categories"
                          :value="item"
                          :key="i"
                          >{{ item.nombre }}</option
                        >
                      </select>
                      <template v-if="$v.categorie.$error">
                        <p
                          class="errorMessage error"
                          v-if="!$v.categorie.required"
                        >
                          Seleccione categoría(*)
                        </p>
                      </template>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Subcategoría</label>
                    <div class="col-sm-9">
                      <select
                        class="form-control"
                        v-model="producto.subcategory"
                        @blur="$v.producto.subcategory.$touch()"
                      >
                        <option
                          v-for="(item, i) in categorie.subcategories"
                          :value="item"
                          :key="i"
                          >{{ item.nombre }}</option
                        >
                      </select>
                      <template v-if="$v.producto.subcategory.$error">
                        <p
                          class="errorMessage error"
                          v-if="!$v.producto.subcategory.required"
                        >
                          Seleccione subcategoría(*)
                        </p>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
              <!--
            <div class="row">
              <div class="col-md-6">
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Añadir foto</label>
                <div class="col-sm-9">
                    <input
                      type="file"
                      class="form-control file-upload-info"
                      @change="subirImagen"
                    />
                    <code style="color: #9c9fa6;">Subir fotografía del foto.</code>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Ver foto</label>
                  <div class="col-sm-9">
                    <figure>
                      <img
                        with="200"
                        height="200"
                        :src="producto.imagen"
                        alt="Foto del Producto"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
              -->
              <div class="row">
                <div class="col-md-3">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Peso</label>
                    <div class="col-sm-9">
                      <div class="input-group">
                        <input
                          type="number"
                          class="form-control"
                          v-model="producto.peso"
                          @blur="$v.producto.peso.$touch()"
                        />
                        <div class="input-group-prepend">
                          <select
                            class="form-control"
                            v-model="producto.peso_medida"
                            @blur="$v.producto.peso_medida.$touch()"
                          >
                            <option value="" selected disabled
                              >U. Medida</option
                            >
                            <option value="KG">KG</option>
                            <option value="T">T</option>
                          </select>
                        </div>
                      </div>
                      <template v-if="$v.producto.peso.$error">
                        <p
                          class="errorMessage error"
                          v-if="!$v.producto.peso.required"
                        >
                          Este campo es obligatorio(*)
                        </p>
                      </template>
                      <template v-if="$v.producto.peso_medida.$error">
                        <p
                          class="errorMessage error"
                          v-if="!$v.producto.peso_medida.required"
                        >
                          Seleccione unidad de medida(*)
                        </p>
                      </template>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Alto</label>
                    <div class="col-sm-9">
                      <div class="input-group">
                        <input
                          type="number"
                          class="form-control"
                          v-model="producto.alto"
                          @blur="$v.producto.alto.$touch()"
                        />
                        <div class="input-group-prepend">
                          <select
                            class="form-control"
                            v-model="producto.alto_medida"
                            @blur="$v.producto.alto_medida.$touch()"
                          >
                            <option value="" selected disabled
                              >U. Medida</option
                            >
                            <option value="CM">CM</option>
                            <option value="M">M</option>
                          </select>
                        </div>
                      </div>
                      <template v-if="$v.producto.alto.$error">
                        <p
                          class="errorMessage error"
                          v-if="!$v.producto.alto.required"
                        >
                          Este campo es obligatorio(*)
                        </p>
                      </template>
                      <template v-if="$v.producto.alto_medida.$error">
                        <p
                          class="errorMessage error"
                          v-if="!$v.producto.alto_medida.required"
                        >
                          Seleccione unidad de medida(*)
                        </p>
                      </template>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Ancho</label>
                    <div class="col-sm-9">
                      <div class="input-group">
                        <input
                          type="number"
                          class="form-control"
                          v-model="producto.ancho"
                          @blur="$v.producto.ancho.$touch()"
                        />
                        <div class="input-group-prepend">
                          <select
                            class="form-control"
                            v-model="producto.ancho_medida"
                            @blur="$v.producto.ancho_medida.$touch()"
                          >
                            <option value="" selected disabled
                              >U. Medida</option
                            >
                            <option value="CM">CM</option>
                            <option value="M">M</option>
                          </select>
                        </div>
                      </div>
                      <template v-if="$v.producto.ancho.$error">
                        <p
                          class="errorMessage error"
                          v-if="!$v.producto.ancho.required"
                        >
                          Este campo es obligatorio(*)
                        </p>
                      </template>
                      <template v-if="$v.producto.ancho_medida.$error">
                        <p
                          class="errorMessage error"
                          v-if="!$v.producto.ancho_medida.required"
                        >
                          Seleccione unidad de medida(*)
                        </p>
                      </template>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Largo</label>
                    <div class="col-sm-9">
                      <div class="input-group">
                        <input
                          type="number"
                          class="form-control"
                          v-model="producto.largo"
                          @blur="$v.producto.largo.$touch()"
                        />
                        <div class="input-group-prepend">
                          <select
                            class="form-control"
                            v-model="producto.largo_medida"
                            @blur="$v.producto.largo_medida.$touch()"
                          >
                            <option value="" selected disabled
                              >U. Medida</option
                            >
                            <option value="CM">CM</option>
                            <option value="M">M</option>
                          </select>
                        </div>
                      </div>
                      <template v-if="$v.producto.largo.$error">
                        <p
                          class="errorMessage error"
                          v-if="!$v.producto.largo.required"
                        >
                          Este campo es obligatorio(*)
                        </p>
                      </template>
                      <template v-if="$v.producto.largo_medida.$error">
                        <p
                          class="errorMessage error"
                          v-if="!$v.producto.largo_medida.required"
                        >
                          Seleccione unidad de medida(*)
                        </p>
                      </template>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label"
                      >Subir Fotografía</label
                    >
                    <div class="col-sm-9">
                      <div class="input-group">
                        <input
                          type="file"
                          class="form-control file-upload-info"
                          @change="subirImagen"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Fotografía</label>
                    <div class="col-sm-9">
                      <div class="input-group">
                        <figure>
                          <img
                            with="500"
                            height="500"
                            :src="img"
                            alt="Foto del Producto"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Botón que añade los datos del formulario, solo se muestra si la variable update es igual a 0-->
              <button
                v-if="update == 0"
                @click="saveProductos(producto)"
                class="btn btn-gradient-primary mr-2"
              >
                Registrar producto
              </button>
              <!-- Botón que limpia el formulario y inicializa la variable a 0, solo se muestra si la variable update es diferente a 0-->
              <button
                v-if="update != 0"
                @click="clearFields()"
                class="btn btn-danger btn-fw"
              >
                Cancelar
              </button>

              <br /><br /><br />

              <!--Tabla de Productos-->
              <div class="row">
                <div class="table-sorter-wrapper col-lg-12 table-responsive">
                  <table id="sortable-table-2" class="table table-striped">
                    <thead>
                      <tr style="background-color: #309D4F; color: #fff">
                        <th class="sortStyle ascStyle">
                          Descripción<i class="mdi mdi-chevron-down"></i>
                        </th>
                        <th class="sortStyle unsortStyle">
                          Peso<i class="mdi mdi-chevron-down"></i>
                        </th>
                        <th class="sortStyle unsortStyle">
                          Alto<i class="mdi mdi-chevron-down"></i>
                        </th>
                        <th class="sortStyle unsortStyle">
                          Ancho<i class="mdi mdi-chevron-down"></i>
                        </th>
                        <th class="sortStyle unsortStyle">
                          Largo<i class="mdi mdi-chevron-down"></i>
                        </th>
                        <th class="sortStyle unsortStyle">
                          Cantidad<i class="mdi mdi-chevron-down"></i>
                        </th>
                        <th class="sortStyle unsortStyle">
                          Precio / u<i class="mdi mdi-chevron-down"></i>
                        </th>
                        <th class="sortStyle unsortStyle">
                          Subtotal<i class="mdi mdi-chevron-down"></i>
                        </th>
                        <th class="sortStyle unsortStyle">
                          <i class="mdi mdi-chevron-down"></i>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, index) in service.products"
                        :value="item.id"
                        :key="index"
                      >
                        <td>{{ item.descripcion }}</td>
                        <td>{{ item.peso }}{{ item.peso_medida }}</td>
                        <td>{{ item.alto }}{{ item.alto_medida }}</td>
                        <td>{{ item.ancho }}{{ item.ancho_medida }}</td>
                        <td>{{ item.largo }}{{ item.largo_medida }}</td>
                        <td>{{ item.cantidad }}</td>
                        <td>{{ item.precio_unitario }}</td>
                        <td>{{ item.subtotal }}</td>
                        <td>
                          <button
                            class="btn btn-danger btn-fw"
                            @click="deleteProduct(index)"
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <br /><br /><br />
              <div class="row">
                <div class="col-md-3">
                  <div class="form-group row">
                    <label class="col-sm-4 col-form-label"
                      >Total De Cotización</label
                    >
                    <div class="col-sm-8">
                      <input
                        type="text"
                        class="form-control"
                        v-model="service.total"
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="form-group row">
                    <button
                      @click="confirmPedido()"
                      class="btn btn-gradient-primary mr-2"
                    >
                      Contratar
                    </button>
                    <!-- </form> -->
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="form-group row">
                    <button @click="cancelarPedido()" class="btn btn-secondary">
                      Cancelar
                    </button>
                  </div>
                </div>
                <div class="col-md-5" v-if="confirmacion == true">
                  <div class="form-group row">
                    <div class="alert alert-warning" role="alert">
                      Por favor completa el formulario inferior para poder
                      registrar tu solicitud!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Confirmar Cotización -->

          <!-- MODAL TÉRMINOS Y CONDICIONES-->
          <div
            class="modal fade"
            id="exampleModalScrollable"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalScrollableTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalScrollableTitle">
                    Términos y Condiciones
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
                <div class="modal-body" style="text-align: justify;">
                  <p>
                    El portal digital Veloxid es una plataforma web de traslado
                    logísticos de productos a solicitud de cliente, el cual
                    obedece a las normas inscritas en los “Términos y
                    condiciones”, así como en las leyes que se indiquen dentro
                    de la República de Perú. Estas normas aplican a todos los
                    usuarios de este portal, como visitante, proveedor o cliente
                    y así como sus efectos jurídicos estarán regidos por estas
                    reglas. El portal web www.Veloxid.com tendrá disponible sus
                    servicios solo para aquellas personas que están legalmente
                    en capacidad de usarlas. No podrán disponer de dichos
                    servicios los menores de edad o usuarios que hayan sido
                    bloqueados por la página debido al mal uso de esta. Los
                    menores de edad que se involucren en compras de nuestra
                    página será responsabilidad de los padres, tutores o
                    encargados de ellos. Como primer requisito para formar parte
                    de los clientes o proveedores de Veloxid, es indispensable
                    que previamente se hayan aceptado los términos y condiciones
                    de la página. La adquisición de servicios efectuadas por
                    este canal web está sujeta a previa confirmación de los
                    términos y condiciones, por otro lado, es posible que los
                    servicios de la página web como por ejemplo el acceso al
                    usuario, proceso de compras, carga de la página, etc. Verse
                    restringido por la realización de trabajos de mantenimiento.
                    Veloxid se compromete a mantener su funcionamiento las 24
                    horas al día y siempre tratar de asegurar la ausencia de
                    errores en cualquier punto del proceso de compra del
                    cliente. Veloxid, está en todo el derecho de modificar el
                    presente documento de términos sin previo aviso, por lo que
                    el cliente debe revisar constantemente este portal antes de
                    realizar su compra.
                  </p>
                  <p>
                    <b>Registro de cliente o usuario</b>
                  </p>
                  <p>
                    Para registrarse, tiene la obligación de dar los datos
                    solicitados en la página de inicio como forma de validación
                    de identidad del mismo, para ello se compromete a
                    proporcionar sus datos de identificación fidedignos y
                    necesarios (como nombre completo, número de documento
                    oficial de identidad, dirección domiciliaria, correo
                    electrónico y teléfonos) los cuales podrán ser validados
                    posteriormente.
                  </p>

                  <p>
                    Es importante mencionar que solo se aceptará una 1 cuenta
                    por persona, en caso se disponga de otras adicionales,
                    Veloxid se encargará de disolver dichas cuentas a 1 sola
                    bajo previa información. Si se verifica o sospecha algún uso
                    fraudulento y/o malintencionado y/o contrario a estos
                    Términos y Condiciones y/o contrarios a la buena fe, Veloxid
                    tendrá el derecho inapelable de dar por terminados los
                    beneficios, no hacer efectiva las promociones, cancelar las
                    transacciones en curso, dar de baja las cuentas y hasta de
                    perseguir judicialmente a los infractores.
                  </p>

                  <p>
                    Los usuarios que se registren por primera vez, no tendrán
                    que registrarse cada vez que efectúen una adquisición de
                    servicio adicional a futuro, para ello solo contará con un
                    email y contraseña como medio de ingreso a su cuenta dentro
                    del portal de Veloxid. El usuario se compromete a proteger
                    de manera confidencial la contraseña de su usuario, evitando
                    la difusión de esta a terceros, haciendo responsable de cual
                    cambio de información personal y de los servicios que pueda
                    tomar dentro de la página, por lo que Veloxid no se
                    responsabilizará por las actividades efectuadas de las
                    cuentas.
                  </p>

                  <p>
                    <b>Medios de Pago</b>
                  </p>
                  <p>
                    Los medios de pago que se utilizarán para comprar en esta
                    tienda virtual son: Tarjetas de Crédito, Débito por
                    MercadoPago, las cuales deben encontrarse activas. Además,
                    también podrá seleccionar transferencia bancaria, depósito y
                    pago contra entrega. El uso de las tarjetas usadas en esta
                    web, estará sujeto a lo establecido en los términos y
                    condiciones y en relación con su emisor (Contratos de
                    apertura y reglamento de uso). En caso se solicite una
                    anulación, devolución o extorno de alguna adquisición de
                    servicio, por el uso de alguna de estas tarjetas aceptadas
                    por este sitio, estarán regidas por el contrato de apertura
                    y reglamento de uso, de esta manera Veloxid no se
                    responsabilizará por cualquier uso indebido de esta, así
                    mismo, el sitio puede elegir algunas condiciones de compra
                    según el medio de pago que se utilice por el usuario. Por
                    otro lado, en caso Veloxid considere como no válida una
                    transacción por evidencie de algún tipo de fraude o error
                    sistémico que distorsione el precio de las ofertas que
                    justifique la anulación, se procederá a anular el pedido, se
                    cancelará la entrega del pedido y generará el extorno del
                    dinero al cliente, siempre que no se haya entregado el
                    producto
                  </p>
                </div>
                <div class="modal-footer">
                  <button
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
          <br /><br />
          <div v-if="confirmacion == true" class="card">
            <div class="card-body">
              <center>
                <h2 class="card-title">Confirmación de Pedido</h2>
              </center>
              <p class="card-description"></p>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label"
                      >Dirección de origen</label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        v-model="service.direccion_origen"
                        placeholder="Escribir Dirección"
                        @blur="$v.service.direccion_origen.$touch()"
                      />
                      <template v-if="$v.service.direccion_origen.$error">
                        <p
                          class="errorMessage error"
                          v-if="!$v.service.direccion_origen.required"
                        >
                          Este campo es obligatorio(*)
                        </p>
                      </template>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label"
                      >Dirección de destino</label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        v-model="service.direccion_destino"
                        class="form-control"
                        placeholder="Escribir Dirección"
                        @blur="$v.service.direccion_destino.$touch()"
                      />
                      <template v-if="$v.service.direccion_destino.$error">
                        <p
                          class="errorMessage error"
                          v-if="!$v.service.direccion_destino.required"
                        >
                          Este campo es obligatorio(*)
                        </p>
                      </template>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label"
                      >Fecha de recojo</label
                    >
                    <div class="col-sm-9">
                      <input
                        type="date"
                        class="form-control"
                        v-model="service.fecha_recojo"
                        @blur="$v.service.fecha_recojo.$touch()"
                      />
                      <template v-if="$v.service.fecha_recojo.$error">
                        <p
                          class="errorMessage error"
                          v-if="!$v.service.fecha_recojo.required"
                        >
                          Este campo es obligatorio(*)
                        </p>
                      </template>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label"
                      >Fecha de entrega</label
                    >
                    <div class="col-sm-9">
                      <input
                        type="date"
                        v-model="service.fecha_entrega"
                        class="form-control"
                        @blur="$v.service.fecha_entrega.$touch()"
                      />
                      <template v-if="$v.service.fecha_entrega.$error">
                        <p
                          class="errorMessage error"
                          v-if="!$v.service.fecha_entrega.required"
                        >
                          Este campo es obligatorio(*)
                        </p>
                      </template>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row justify-content-center text-center">
                <div class="form-group mb-0">
                  <div class="mt-0 mb-4">
                    <label class="form-check-label">
                      <input
                        style="border: solid #b66dff"
                        class="form-check-input"
                        type="checkbox"
                        v-model="terminos"
                        @blur="$v.terminos.$touch()"
                      />
                    </label>
                    Acepto los
                    <a
                      href=""
                      data-toggle="modal"
                      data-target="#exampleModalScrollable"
                    >
                      <b>Términos y Condiciones</b>
                    </a>
                    <template v-if="$v.terminos.$error">
                      <p
                        class="errorMessage error"
                        v-if="!$v.terminos.required"
                      >
                        Debe aceptar los término(*)
                      </p>
                    </template>
                  </div>
                  <div class="row">
                    <div class="form-group row">
                      <div class="col-md-6">
                        <button
                          v-if="terminos == false"
                          class="btn btn-secondary mr-2"
                          disabled
                        >
                          Pagar
                        </button>
                        <button
                          v-else
                          class="btn btn-gradient-primary mr-2"
                          @click="makeRequest()"
                        >
                          Pagar
                        </button>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group row">
                        <button
                          class="btn btn-secondary"
                          @click="cancelarPedido()"
                        >
                          Cancelar
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
</template>

<script>
import Swal from 'sweetalert2'
import Cookies from 'js-cookie'
import Nav from '@/components/front/Nav'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Cotization',
  components: { Nav },
  data () {
    return {
      update: 0,
      cotizar: true,
      distritos: [],
      categories: [],
      imagenminiatura: '',
      message: '',
      distritoorigen: '',
      distritodestino: '',
      categorie: '',
      producto: {
        descripcion: '',
        peso: 0,
        peso_medida: '',
        alto: 0,
        alto_medida: '',
        ancho: 0,
        ancho_medida: '',
        largo: 0,
        largo_medida: '',
        subcategory_id: '',
        imagen: '',
        cantidad: 1,
        subtotal: 0
      },
      service: {
        distrito_origen_id: '',
        distrito_destino_id: '',
        direccion_origen: '',
        direccion_destino: '',
        fecha_recojo: '',
        fecha_entrega: '',
        transaction_id: 0,
        total: 0,
        products: []
      },
      confirmacion: false,
      terminos: false,
      payment_id: ''
    }
  },

  created () {
    this.payment_id = this.$route.query.payment_id
    if (this.payment_id) {
      const config = {
        headers: { 'content-type': 'application/json' },
        withCredentials: 'include'
      }
      var service = JSON.parse(localStorage.getItem('service'))
      service.transaction_id = this.payment_id
      /* let formData = new FormData()
      formData.append('direccion_origen', service.direccion_origen)
      formData.append('direccion_destino', service.direccion_destino)
      formData.append('distrito_origen_id', service.distrito_origen_id)
      formData.append('distrito_destino_id', service.distrito_destino_id)
      formData.append('fecha_recojo', service.fecha_recojo)
      formData.append('fecha_entrega', service.fecha_entrega)
      formData.append('total', service.total)
      formData.append('transaction_id', service.transaction_id)
      formData.append('products[]', service.products) */
      let url = '/services'
      this.$http
        .post(
          url,
          {
            direccion_origen: service.direccion_origen,
            direccion_destino: service.direccion_destino,
            distrito_origen_id: service.distrito_origen_id,
            distrito_destino_id: service.distrito_destino_id,
            fecha_recojo: service.fecha_recojo,
            fecha_entrega: service.fecha_entrega,
            total: service.total,
            transaction_id: service.transaction_id,
            products: service.products
          },
          config
        )
        .then(res => {
          localStorage.removeItem('service')
          localStorage.removeItem('distritoorigen')
          localStorage.removeItem('distritodestino')
          Swal.fire(
            'Operación Exitosa!',
            'Tu servicio ha sido registrado correctamente!',
            'success'
          )
          this.$router.push('/tracking')
        })
        .catch(error => {
          console.log(error)
        })
    }

    this.$http.get('/distritos').then(res => {
      this.distritos = res.data
    })

    this.$http.get('/categories').then(res => {
      this.categories = res.data
    })

    this.$http.get('/prices').then(res => {
      this.prices = res.data
    })
  },
  methods: {
    saveProductos (producto) {
      if (producto.descripcion === '') {
        Swal.fire('Error!', 'No se ha registrado un producto', 'error')
      } else {
        // Obtener precio del producto

        var distritodestino = this.distritodestino
        var distritoorigen = this.distritoorigen

        var price = this.prices.find(precio => {
          return (
            precio.zona_destino_id === distritodestino.zona_id &&
            precio.zona_origen_id === distritoorigen.zona_id &&
            precio.vehicle_type_id === producto.subcategory.vehicle_type_id
          )
        })

        this.$http
          .post('/prices/cotizar', {
            distrito_origen_id: this.distritoorigen.id,
            distrito_destino_id: this.distritodestino.id,
            subcategory_id: producto.subcategory.id,
            quantity: producto.cantidad
          })
          .then(res => {
            this.producto.precio_unitario = res.data
            this.producto.subcategory_id = this.producto.subcategory.id

            // Sumar
            this.producto.subtotal = res.data
            this.service.total += this.producto.subtotal
            this.service.distrito_origen_id = this.distritoorigen.id
            this.service.distrito_destino_id = this.distritodestino.id
            delete this.producto.subcategory
            this.service.products.push(producto)

            this.clearFields()
            Swal.fire(
              'Registro Exitoso!',
              'Se registró correctamente el producto!',
              'success'
            )
          })
          .catch(error => {
            console.log(error)
            Swal.fire('Error!', 'El producto no ha encontrado precio', 'error')
          })
      }
    },

    subirImagen (e) {
      let file = e.target.files[0]
      this.producto.imagen = file
      this.imageToBase64(file)
      this.mostrarImagen(file)
    },

    imageToBase64 (file) {
      var reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.producto.imagen = reader.result
      }
      reader.onerror = function (error) {
        console.log('Error: ', error)
      }
    },

    mostrarImagen (file) {
      let reader = new FileReader()

      reader.onload = e => {
        this.imagenminiatura = e.target.result
      }
      reader.readAsDataURL(file)
      console.log()
    },

    clearFields () {
      // Limpia los campos e inicializa la variable update a 0
      this.producto = {
        imagen: '',
        cantidad: 1,
        categorie: '',
        subcategory: '',
        peso: 0,
        peso_medida: '',
        alto: 0,
        alto_medida: '',
        ancho: 0,
        ancho_medida: '',
        largo: 0,
        largo_medida: ''
      }
      this.imagenminiatura = ''
      this.$v.$reset()
    },

    deleteProduct: function (index) {
      const producto = this.service.products.splice(index, 1)
      console.log(producto)
      this.service.total = this.service.total - producto[0].subtotal
    },

    cancelarPedido () {
      localStorage.removeItem('service')
      localStorage.removeItem('distritoorigen')
      localStorage.removeItem('distritodestino')
    },

    confirmPedido () {
      const parsed = JSON.stringify(this.service)
      localStorage.setItem('service', parsed)
      const parseddo = JSON.stringify(this.distritoorigen)
      localStorage.setItem('distritoorigen', parseddo)
      const parseddd = JSON.stringify(this.distritodestino)
      localStorage.setItem('distritodestino', parseddd)
      this.message = Cookies.get('userLogged')
      if (this.service.products.length === 0) {
        Swal.fire('Error!', 'No se han cotizado productos.', 'error')
        this.confirmacion = false
      } else {
        if (this.message === undefined) {
          Swal.fire(
            'Alerta!',
            'Necesita loguarse para confirmar el servicio.',
            'warning'
          )
          this.confirmacion = false
        } else {
          this.confirmacion = true
        }
      }
    },

    makeRequest: function () {
      const parsed = JSON.stringify(this.service)
      localStorage.setItem('service', parsed)
      if (
        this.service.direccion_origen === '' ||
        this.service.direccion_destino === '' ||
        this.service.fecha_recojo === '' ||
        this.service.fecha_entrega === ''
      ) {
        Swal.fire(
          'Error!',
          'Necesita completar todos los campos para confirmar el servicio.',
          'error'
        )
      } else {
        const config = {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: 'include'
        }
        this.$http
          .post('/checkout', { price: this.service.total }, config)
          .then(res => {
            window.location.replace(res.data.init_point)
          })
          .catch(error => {
            console.log(error)
          })
      }
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

    if (localStorage.getItem('distritoorigen')) {
      try {
        this.distritoorigen = JSON.parse(localStorage.getItem('distritoorigen'))
      } catch (e) {
        localStorage.removeItem('distritoorigen')
      }
    }

    if (localStorage.getItem('distritodestino')) {
      try {
        this.distritodestino = JSON.parse(
          localStorage.getItem('distritodestino')
        )
      } catch (e) {
        localStorage.removeItem('distritodestino')
      }
    }
  },

  validations: {
    distritoorigen: {
      required
    },
    distritodestino: {
      required
    },
    producto: {
      descripcion: {
        required,
        minLength: minLength(4)
      },
      cantidad: {
        required
      },
      subcategory: {
        required
      },
      peso: {
        required
      },
      peso_medida: {
        required
      },
      alto: {
        required
      },
      alto_medida: {
        required
      },
      ancho: {
        required
      },
      ancho_medida: {
        required
      },
      largo: {
        required
      },
      largo_medida: {
        required
      },
      subir_imagen: {
        required
      }
    },
    categorie: {
      required
    },

    service: {
      direccion_origen: {
        required
      },
      direccion_destino: {
        required
      },
      fecha_recojo: {
        required
      },
      fecha_entrega: {
        required
      }
    },
    terminos: {
      required
    }
  }
}
</script>

<style scoped>
.card .card-title {
  font-size: 1.5rem;
}
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
