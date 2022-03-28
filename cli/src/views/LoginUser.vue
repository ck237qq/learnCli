<template>
  <div class="container mt-5">
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">帳號管理後台</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">請輸入您的信箱</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
            v-model="LogInUserDto.loginName"
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">請輸入您的密碼</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="LogInUserDto.loginPwd"
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
export default {
  data () {
    return {
      LogInUserDto: {
        loginName: '',
        loginPwd: '',
        isLoading: false
      }
    }
  },
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}` + '/LogInUser'
      this.$http.post(api, this.LogInUserDto).then((ResponseDto) => {
        document.cookie = `token=${ResponseDto.data.data}`
        this.$router.push('products')
      })
    }
  }
}
</script>
