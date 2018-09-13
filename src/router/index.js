import Vue from 'vue'
import VueRouter from "vue-router"
import StudentView from '../components/StudentView'
import TeacherView from '../components/TeacherView'

Vue.use(VueRouter)
const routes = [
  {
    path: '/student',
    component: StudentView
  },
  {
    path: '/teacher',
    component: TeacherView
  }
]
export default new VueRouter({ routes })