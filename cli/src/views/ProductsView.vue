<template>
<loading-api :active="isLoading"/>
<div class="text-end">
  <button class="btn btn-primary" type="button" @click="openModel (true)">新增使用者</button>
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
      <template v-for="(UserInfoGetDto, key) in userInfoFindDto.userInfoGetDtoList" :key="key">
      <tr>
        <td>{{((this.userInfoFindDto.currentPage-1) * 10) + key + 1 }}</td>
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
            <button class="btn btn-outline-primary btn-sm" @click="openModel(false ,UserInfoGetDto)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="delUser(UserInfoGetDto.userId)">刪除</button>
          </div>
        </td>
      </tr>
      </template>
    </tbody>
  </table>
  <product-model ref="productModal" :product="tempProduct" @update-product="updateProduct"></product-model>
  <pagination :pages="userInfoFindDto" @emit-page="getProducts"/>
</template>

<script>
import Pagination from '../components/PaginationView.vue'
import productModel from '../components/ProductModal.vue'
import ModalMixin from '../mixins/ModalMixin'
export default {
  data () {
    return {
      userInfoFindDto: {},
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
      message: {}
    }
  },
  components: {
    productModel,
    Pagination
  },
  mixins: [ModalMixin],
  created () {
    const api = `${process.env.VUE_APP_API}` + '/Info/IsToken'
    this.$http.get(api, this.getHeaders()).then((ResponseDto) => {
      if (!ResponseDto.data.data) {
        this.$router.push('/login')
      }
    })
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
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}` + '/Info/GetUsers/' + page
      this.isLoading = true
      this.$http.get(api, this.getHeaders()).then((ResponseDto) => {
        this.isLoading = false
        this.userInfoFindDto = ResponseDto.data.data
      })
    },
    delUser (userId) {
      const api = `${process.env.VUE_APP_API}` + '/Info/DelUser/' + userId
      this.$http.delete(api, this.getHeaders()).then((ResponseDto) => {
        this.getProducts()
        this.getToastMsg(ResponseDto.data)
        this.emitter.emit('push-message', this.message)
      })
    },
    openModel (isNew, UserInfoGetDto) {
      this.tempProduct = {}
      if (isNew) {
        this.tempProduct = {
          groupId: '訪客',
          isEnabled: true,
          isNew: isNew
        }
      } else {
        this.tempProduct = { ...UserInfoGetDto }
        if (UserInfoGetDto.picId != null) {
          const api = `${process.env.VUE_APP_API}` + '/Info/GetPic/' + UserInfoGetDto.picId
          this.$http.get(api, this.getHeaders()).then((ResponseDto) => {
            this.tempProduct.userPic = ResponseDto.data.data.userPic
          })
        }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    updateProduct (item) {
      this.tempProduct = item
      const productComponent = this.$refs.productModal
      let httpMethod = ''
      let api = ''
      if (this.isNew) {
        api = `${process.env.VUE_APP_API}` + '/Info/AddUser'
        httpMethod = 'post'
      } else {
        api = `${process.env.VUE_APP_API}` + '/Info/EditUser'
        httpMethod = 'put'
      }
      this.$http[httpMethod](api, this.tempProduct, this.getHeaders()).then((ResponseDto) => {
        productComponent.hideModal()
        this.getProducts()
        this.getToastMsg(ResponseDto.data)
        this.emitter.emit('push-message', this.message)
      })
    }
  }
}
</script>
