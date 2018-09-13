<template>
  <div id="app">
    <cube-tab-bar
            v-model="selectedLabelSlots"
            showSlider
            inline
            @click="clickHandler">
      <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label + index">
        <i slot="icon" :class="item.icon"></i>
        <router-link :to="item.link">{{item.label}}</router-link>
      </cube-tab>
    </cube-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ApolloExample from './components/ApolloExample'

export default {
  name: 'app',
  components: {
    ApolloExample
  },
  data () {
    return {
      selectedLabelSlots: 'Like',
      tabs: [{
        label: 'Student View',
        icon: 'cubeic-edit',
        link: '/student'
      }, {
        label: 'Teacher View',
        icon: 'cubeic-person',
        link: '/teacher'
      }]
    }
  },
  methods: {
      clickHandler() {
          console.log('clickHandler')
      }
  }
}
</script>

<style>
  html {
    background: #edf0f4
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
  }
</style>
