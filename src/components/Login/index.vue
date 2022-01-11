<template>
  <div />
</template>

<script>
import {login} from '@/api/user'
export default {
  name: 'Login',
  props: {},
  data() {
    return {}
  },
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      login({username:'admin'}).then(response => {
        const {data} = response
        console.log(data)
      }).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>

// <style lang="scss" scoped>

// </style>
