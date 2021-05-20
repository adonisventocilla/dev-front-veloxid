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
              <div class="page-header" style="margin-bottom: 0px;">
                <h4>Evaluación de Conductor</h4>
              </div>
  
              <div class="list d-flex align-items-center border-bottom py-3">
                <div class="wrapper w-200">
                  <p class="mb-0">
                    <b>Nombre: </b>{{ driver.nombre }} {{ driver.apellidoPaterno }} {{ driver.apellidoMaterno }}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center" style="padding-top: 8px;">
                      <i class="mdi mdi-calendar text-muted mr-100"></i>
                      <p class="mb-0">{{ date | timeformat }} </p>
                    </div>
                    <!-- <small class="text-muted ml-auto">2 hours ago</small> -->
                  </div>
                </div>
              </div>
  
              <div class="form-group" style="margin-top: 30px">
                <label>Requerimientos:</label>
                <div class="list-wrapper">
                  <ul
                    class="d-flex flex-column-reverse todo-list"
                    v-for="item in revisionsdriver" 
                    :key="item.id"
                  >
                    <li style="padding: 0">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input v-if="item.pivot.valor == 1" type="checkbox" class="form-check-input" disabled="" checked="">
                          <input v-else type="checkbox" class="form-check-input" disabled="">
                          {{ item.requerimiento }}
                          <i class="input-helper"></i>
                        </label>
                      </div>                                       

                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="form-group">
                <label for="exampleTextarea1">Observaciones:</label>
                <textarea
                  class="form-control"
                  rows="4"
                  disabled
                  v-model="observaciondriver"
                ></textarea>
              </div>                
            </div>
  
            <!-- Evaluacion Vehiculo -->
            <div class="col-lg-6 col-md-4">
              <div class="page-header">
                <h4>Evaluación de Vehículo</h4>
              </div>
                <select class="form-control" v-model="selectedvehicle">
                  <option  v-for="item in vehicle_revisions" :value="item" :key="item.id"
                  >
                   {{item.vehicle.placa}} {{ item.created_at  | timeformat }}
                  </option>
                </select>
              <div class="form-group" style="margin-top: 30px">
                <label>Requerimientos:</label>
                <div class="list-wrapper">
                  <ul v-for="item1 in selectedvehicle.requirements" :key="item1.id"
                   >
                  <li style="padding: 0">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input v-if="item1.pivot.valor == 1" type="checkbox" class="form-check-input" disabled="" checked="">
                          <input v-else type="checkbox" class="form-check-input" disabled="">
                          {{ item1.requerimiento }}
                          <i class="input-helper"></i>
                        </label>
                      </div>                                       

                    </li>
                  </ul>
                </div>
              </div>
              <div class="form-group">
                <label for="exampleTextarea1">Observaciones:</label>
                <textarea
                  class="form-control"
                  rows="4"
                  disabled
                  v-model="selectedvehicle.observacion"
                ></textarea>
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
import moment from 'moment'
import HomeAdmin from '@/components/admin/HomeAdmin'
import LateralMenu from '@/components/admin/LateralMenu'

export default {
  name: 'RevisionDetail',
  components: { HomeAdmin, LateralMenu },
    data() {
      return {
        revisionsdriver:[],
        observaciondriver:"",  
        selectedvehicle:"",
        driver:"",
        date:"",
        vehicle_revisions: [],
        revisionsvehicle: [],
        observacionvehicle:"",
        detail:this.$route.query.revision
       };
      
    },
    
    created() { 
      this.$http
      .get('/revisions/'+this.detail, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: 'include'
      })
      .then(res => {
        this.driver=res.data.driver.user.person;
          this.date=res.data.created_at;
          this.revisionsdriver=res.data.driver_revisions[0].requirements;
          this.observaciondriver = res.data.driver_revisions[0].observacion;
          this.vehicle_revisions= res.data.vehicle_revisions;
      })
    },

    methods: {
 

    },
    filters: {
      timeformat: function (arg) {
        // return moment(arg).subtract(10, 'days').calendar()
        moment.locale('es');
        return moment(arg).format('LLL')
      },
      minutosformat: function (arg) {
        // return moment(arg).subtract(10, 'days').calendar()
        moment.locale('es');
        return moment(arg).format('LT')
      }
    }    

};
</script>