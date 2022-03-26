<template>
  <navbar-view/>
  <router-view/>
  <toast-messages/>
</template>

<script>
import navbarView from '../components/navbarView'
import emitter from '../methods/emitter.js'
import ToastMessages from '../components/ToastMessages.vue'
export default {
  components: {
    navbarView,
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    const config = {
      headers: {
        Authorization: myCookie
      }
    }
    const api = `${process.env.VUE_APP_API}` + '/Info/IsToken'
    this.$http.get(api, config).then((ResponseDto) => {
      if (!ResponseDto.data.data) {
        this.$router.push('/')
      }
    })
  }
}
</script>
