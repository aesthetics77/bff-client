<template>
    <div class="container">
        <cube-input
                v-model="input.value"
                :placeholder="input.placeholder"
                :clearable="input.clearable"
        ></cube-input>

    </div>
</template>

<script>
    export default {
      name: "StudentView",
      data() {
        return {
          input: {
            value: '',
            placeholder: 'Please type student id',
            clearable: true
          }
        }
      }
    }
</script>

<style scoped>

</style>