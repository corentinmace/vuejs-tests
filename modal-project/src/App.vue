<template>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="dark" @close="toggleModal">
      <template v-slot:links>
      <a href="https://corentinmace.fr">That's a site</a>
      </template>
      <h1>Test Modal slot</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
    </Modal>
  </teleport>

    <teleport to=".modals" v-if="showModalTwo">
    <Modal  @close="toggleModalTwo">
      <template v-slot:links>
      <a href="https://corentinmace.fr">That's a site</a>
      </template>
      <h1>La seconde modal</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
    </Modal>
  </teleport>
  <button @click="toggleModal" >Open Modal</button>
  <button @click="toggleModalTwo" >Open Modal 2</button>

</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
