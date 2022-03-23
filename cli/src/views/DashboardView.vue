<template>
  <navbar-view/>
  <router-view/>
</template>

<script>
import navbarView from '../components/navbarView'

export default {
  components: {
    navbarView
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
        this.$router.push('login')
      }
    })
  }
}
</script>
