export default {
  inject: ['emitter'],
  methods: {
    getToastMsg (returnData) {
      if (returnData.code === '0000') {
        this.message.style = 'success'
        this.message.title = returnData.data
      } else {
        this.message.style = 'danger'
        this.message.title = returnData.msg
        this.message.content = returnData.data
      }
    }
  }
}
