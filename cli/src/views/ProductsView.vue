<template>
<div class="text-end">
  <button class="btn btn-primary" type="button" @click="openModel ()">新增使用者</button>
</div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">項次</th>
        <th width="120">姓名</th>
        <th width="120">權限</th>
        <th width="300">信箱</th>
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
        <td>{{ UserInfoGetDto.loginName }}</td>
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
  <product-model ref="productModal" :product="tempProduct" @update-product="updateProduct"></product-model>
</template>

<script>
import productModel from '../components/ProductModal.vue'

export default {
  data () {
    return {
      UserInfoGetDto: {},
      tempProduct: {}
    }
  },
  components: {
    productModel
  },
  created () {
    this.getProducts()
  },
  methods: {
    getHeaders () {
      const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
      const config = {
        headers: {
          Authorization: myCookie
        }
      }
      return config
    },
    getProducts () {
      const api = `${process.env.VUE_APP_API}` + '/Info/GetUsers'
      this.$http.get(api, this.getHeaders()).then((ResponseDto) => {
        this.UserInfoGetDto = ResponseDto.data.data
      })
    },
    editUser (userId) {
      console.log(userId)
    },
    delUser (userId) {
      console.log(userId)
    },
    openModel () {
      this.tempProduct = {
        groupId: '訪客',
        isEnabled: true
      }
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    updateProduct (item) {
      this.tempProduct = item
      const api = `${process.env.VUE_APP_API}` + '/Info/AddUsers'
      const productComponent = this.$refs.productModal
      this.$http.post(api, this.tempProduct, this.getHeaders()).then((ResponseDto) => {
        console.log(ResponseDto.data)
      })
      productComponent.hideModal()
      this.getProducts()
    }
  }
}
</script>
