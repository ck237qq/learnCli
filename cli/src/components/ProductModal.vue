<template>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
<div class="modal-dialog modal-xl" role="document">
  <div class="modal-content border-0">
    <div class="modal-header bg-dark text-white">
      <h5 class="modal-title" id="exampleModalLabel">
        <span v-if="this.tempProduct.isNew">新增使用者</span>
        <span v-else>編輯使用者</span>
      </h5>
      <button type="button" class="btn-close"
              data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="row">
        <div class="col-sm-4">
          <div class="mb-3">
            <label for="customFile" class="form-label">上傳照片
              <i class="fas fa-spinner fa-spin"></i>
            </label>
            <input type="file" id="customFile" class="form-control" ref="fileInput" @change.prevent="uploadFile">
          </div>
          <div class="mt-5">
            <h5 class="modal-title" id="exampleModalLabel">預覽照片</h5>
            <img class="img-fluid" src="https://i.imgur.com/86AUKFe.png" v-if="tempProduct.userPic === undefined">
            <img class="img-fluid" :src="'data:image/jpeg;base64,' + tempProduct.userPic" v-else>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="mb-3">
            <label for="title" class="form-label">姓名</label>
            <input type="text" class="form-control" id="userName" v-model="tempProduct.userName"
                    placeholder="請輸入姓名">
          </div>

          <div class="row gx-2">
            <div class="mb-3">
              <label for="category" class="form-label">權限</label>
              <div class="input-group mb-3">
                <select class="form-select" id="groupId" aria-label="Example select with button addon" v-model="tempProduct.groupId">
                  <option value="訪客">訪客</option>
                  <option value="管理員">管理員</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row gx-2">
            <div class="mb-3">
              <label for="origin_price" class="form-label">信箱</label>
              <input type="text" class="form-control" id="userName" placeholder="請輸入信箱" v-model="tempProduct.loginName">
            </div>
          </div>
          <hr>

          <div class="mb-3">
            <label for="description" class="form-label">備註</label>
            <textarea type="text" class="form-control" id="description"
                      placeholder="請輸入備註" v-model="tempProduct.remark"></textarea>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox"
                      :true-value=true
                      :false-value=false
                      id="is_enabled" v-model="tempProduct.isEnabled">
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-secondary"
              data-bs-dismiss="modal" @click="newTempProduct ()">取消
      </button>
      <button type="button" class="btn btn-primary" @click="$emit('update-product', this.tempProduct)">確認</button>
    </div>
  </div>
</div>
</div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  props: {
    product: {
      type: Object,
      default () { return {} }
    }
  },
  watch: {
    product () {
      this.tempProduct = this.product
    }
  },
  data () {
    return {
      modal: {},
      tempProduct: {},
      formData: ''
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    },
    newTempProduct () {
      this.tempProduct = {}
      this.hideModal()
    },
    uploadFile () {
      const api = `${process.env.VUE_APP_API}` + '/Info/pic'
      const uploadFile = this.$refs.fileInput.files[0]
      const formData = new FormData()
      formData.append('userPic', uploadFile)
      this.$http.put(api, formData).then((ResponseDto) => {
        this.tempProduct.userPic = ResponseDto.data.data.userPic
        this.tempProduct.picId = ResponseDto.data.data.picId
      })
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
