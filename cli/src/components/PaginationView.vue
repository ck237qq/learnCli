<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
    <template v-if="pages.currentPage > 1">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="updatePage(pages.currentPage - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
    </template>
    <template v-else>
      <li class="page-item disabled" >
        <span class="page-link">&laquo;</span>
      </li>
    </template>
      <li class="page-item" v-for="page in pages.totalPage" :key="page" :class="{'active': page === pages.currentPage}">
        <a class="page-link" href="#" @click.prevent="updatePage(page)">
          {{ page }}
        </a>
      </li>
    <template v-if="pages.currentPage < pages.totalPage">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="updatePage(pages.currentPage + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </template>
    <template v-else>
      <li class="page-item disabled" >
        <span class="page-link">&raquo;</span>
      </li>
    </template>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  props: ['pages'],
  methods: {
    updatePage (page) {
      this.$emit('emit-page', page)
    }
  }
}
</script>
