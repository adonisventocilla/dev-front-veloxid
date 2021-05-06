<template>
  <div>
    <Nav />

    <main>
      <section class="banner">
        <img src="@/template_welcome/assets/img/portada.png" />
        <!-- <div class="contenedor">
                    <h2>#######################</h2>
                    <p>¿#######################?</p>
                    <a href="#">Leer más</a>
                </div> -->
      </section>

      <section id="bienvenidos">
        <div class="contenedor">
          <h2>Reparto de Paquetes en todo Lima</h2>
          <p>
            Veloxid es una empresa que te acompaña en toda tu experiencia de
            transporte en cualquier material que necesites mover. Cuenta con un
            grupo de transportistas capaces de cuidar tus bienes desde el punto
            de recojo hasta el punto de entrega.
          </p>
          <router-link to="/cotizacion" class="boton"
            >¡Calcula tu Envío Ahora!</router-link
          >
        </div>
      </section>

      <section id="blog">
        <h2>CONOCE NUESTROS SERVICIOS</h2>
        <div class="contenedor">
          <article>
            <img src="@/template_welcome/assets/img/servicio2.jpg" />
            <h4>Delivery Express</h4>
          </article>
          <article>
            <img src="@/template_welcome/assets/img/servicio1.jpg" />
            <h4>Mensajería</h4>
          </article>
          <article>
            <img src="@/template_welcome/assets/img/servicio.png" />
            <h4>Taxi Privado</h4>
          </article>
        </div>
      </section>

      <section id="info">
        <h2>NUESTROS TRANSPORTES</h2>
        <div class="contenedor">
          <div class="info-pet">
            <img src="@/template_welcome/assets/img/bicicleta.png" alt="" />
            <!-- <h4>Foto 1</h4> -->
          </div>
          <div class="info-pet">
            <img src="@/template_welcome/assets/img/moto.png" alt="" />
            <!-- <h4>Foto 2</h4> -->
          </div>
          <div class="info-pet">
            <img src="@/template_welcome/assets/img/furgon.png" alt="" />
            <!-- <h4>Foto 3</h4> -->
          </div>
          <div class="info-pet">
            <img src="@/template_welcome/assets/img/camion.png" alt="" />
            <!-- <h4>Foto 4</h4> -->
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="contenedor">
        <p class="copy">VELOXID &copy; 2020</p>
        <div class="sociales">
          <a class="fontawesome-facebook-sign" href="#"></a>
          <a class="fontawesome-twitter" href="#"></a>
          <a class="fontawesome-camera-retro" href="#"></a>
          <!-- <a class="fontawesome-google-plus-sign" href="#"></a> -->
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Nav from '@/components/front/Nav'
export default {
  name: 'Home',
  components: { Nav }
}
</script>

<style></style>
