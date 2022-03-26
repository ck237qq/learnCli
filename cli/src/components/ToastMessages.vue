<template>
  <div class="toast-container position-absolute pe-3 top-0 end-0">
  <toast-view v-for="(message, key) in messages" :key="key" :msg="message"/>
  </div>
</template>

<script>
import ToastView from '../components/ToastView.vue'

export default {
  data () {
    return {
      messages: []
    }
  },
  components: {
    ToastView
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('push-message', (message) => {
      this.messages.push(message)
    })
  }
}
</script>
