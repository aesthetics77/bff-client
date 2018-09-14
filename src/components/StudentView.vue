<template>
    <div class="container">
        <el-input placeholder="Please type student Id" v-model="studentId" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-card class="box-card">
            {{student.data}}
        </el-card>
    </div>
</template>

<script>
    import gql from 'graphql-tag'

    export default {
      name: "StudentView",
      methods: {
        inputId() {
          this.studentId = this.input.value
          console.log(this.studentId)
        }
      },
      apollo: {
        student: {
          query: gql`query getStudentById($id: String!) {
                    name,
                    sex,
                    age,
                    lessons {
                        name
                    }
                }`
        },
        variables: {
          id: '5b874f215d7a6d1cec348c67'
        }
      },
      data() {
        return {
          studentId: '5b874f215d7a6d1cec348c67',
          student: {},
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