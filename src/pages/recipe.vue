<template>
<div>
  <Navbar />
  <div class="contenedor">
    <div>
        <img src="/images/pancakes.png">
    </div>
    <div class="title">
        <h1>Pancakes<h1>
    </div>
    <div>
        <span>Nivel: Medio</span> 
        <span>Personas: 3 </span>                  
    </div>
    <div>
        <h3>Descripción: </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ante luctus, nec platea nisi aptent tempor maecenas lectus est, potenti himenaeos augue ac fringilla nascetur urna cursus. </p>
        <h3>Ingredientes:  </h3>
        <ul> 
          <li>Argentina</li> 
          <li>Perú</li> 
          <li>Chile</li> 
        </ul>
      <h3>Preparación: </h3>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ante luctus, nec platea nisi aptent tempor maecenas lectus est, potenti himenaeos augue ac fringilla nascetur urna cursus. Facilisis montes ut tempor venenatis euismod netus integer, Lorem ipsum dolor sit amet consectetur adipiscing elit ante luctus, nec platea nisi aptent tempor maecenas lectus est, potenti himenaeos augue ac fringilla nascetur urna cursus. Facilisis montes ut tempor venenatis euismod netus integer.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ante luctus, nec platea nisi aptent tempor maecenas lectus est, potenti himenaeos augue ac fringilla nascetur urna cursus. Facilisis montes ut tempor venenatis euismod netus integer, Lorem ipsum dolor sit amet consectetur adipiscing elit ante luctus, nec platea nisi aptent tempor maecenas lectus est, potenti himenaeos augue ac fringilla nascetur urna cursus. Facilisis montes ut tempor venenatis euismod netus integer.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ante luctus, nec platea nisi aptent tempor maecenas lectus est, potenti himenaeos augue ac fringilla nascetur urna cursus. Facilisis montes ut tempor venenatis euismod netus integer, Lorem ipsum dolor sit amet consectetur adipiscing elit ante luctus, nec platea nisi aptent tempor maecenas lectus est, potenti himenaeos augue ac fringilla nascetur urna cursus. Facilisis montes ut tempor venenatis euismod netus integer.</p>
    </div>
  </div>
  <Footer />
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: { Navbar, Footer }
}
</script>
