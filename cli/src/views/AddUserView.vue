<template>
  <div class="container mt-5">
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">新增帳號</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">請輸入您的信箱</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
            v-model="UserInfoAddDto.loginName"
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">請輸入您要的密碼</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="UserInfoAddDto.loginPwd"
          />
        </div>
        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import navbarView from '../components/navbarView.vue'

export default {
  data () {
    return {
      UserInfoAddDto: {
        loginName: '',
        loginPwd: '',
        groupId: '訪客群組',
        data: ''
      }
    }
  },
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}`+'/login123'
      this.$http.post(api, this.UserInfoAddDto).then((responseDto) => {
        this.UserInfoAddDto.data = responseDto.data.data
        document.cookie = `token = ${'token'}`
        this.$router.push('/environment/products')
      })
    },  
    component: {
      navbarView
    }
  }
}
</script>
