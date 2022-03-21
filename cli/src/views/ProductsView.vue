<template>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">項次</th>
        <th width="120">姓名</th>
        <th width="120">權限</th>
        <th>備註</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(UserInfoGetDto, key) in UserInfoGetDto" :key="key">
      <tr>
        <td>{{ UserInfoGetDto.userId }}</td>
        <td>{{ UserInfoGetDto.userName }}</td>
        <td class="text-right">{{ UserInfoGetDto.groupId }}</td>
        <td class="text-right"></td>
        <td>
          <span class="text-success" v-if="UserInfoGetDto.isEnabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="editUser(UserInfoGetDto.userId)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="delUser(UserInfoGetDto.userId)">刪除</button>
          </div>
        </td>
      </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  data () {
    return {
      UserInfoGetDto: ''
    }
  },
  created () {
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    const api = `${process.env.VUE_APP_API}` + '/Info/GetUsers'
    const config = {
      headers: {
        Authorization: myCookie
      }
    }
    this.$http.get(api, config).then((ResponseDto) => {
      this.UserInfoGetDto = ResponseDto.data.data
    })
  },
  methods: {
    editUser (userId) {
      console.log(userId)
    },
    delUser (userId) {
      console.log(userId)
    }
  }
}
</script>
