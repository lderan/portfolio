<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>
 
<template>
  <div class="container mx-auto">
    <header>
      <h1>Thomas Molloy</h1>
    </header>
    <address>
      <p><a aria-label="Link to call Thomas Molloy" href="tel:"></a></p>
    </address>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-3">
      <article>
        <header>Frameworks</header>
        <ul>
          <li>CakePHP v2~4</li>
        </ul>
      </article>

      <article>
        <header>Languages used</header>
        <ul>
          <li>PHP (5~8)</li>
          <li>JS</li>
          <li>Python</li>
          <li>GDScript</li>
          <li>C++ (Unreal Engine 4.6)</li>
        </ul>
      </article>
      <article>
        <header>Work history</header>
        <ul>
          <li>The Soho Creative</li>
          <li>Jozo Creative</li>
          <li>Tamba Internet</li>
          <li>PieDog Media</li>
        </ul>
      </article>
      <article>
        <header>Education history</header>
        <ul>
          <li>BSc (Hons) Computer Science - Staffordshire Univesity</li>
          <li>BTec National Diploma for ICT Practitioners</li>
        </ul>
      </article>
      <article>
        <header>Open source projects</header>
        <ul>
          <li>LightLocker settings menu</li>
        </ul>
      </article>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
