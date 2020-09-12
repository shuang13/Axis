<template>
  <div class="Test">
      
    min:<input type="text" class="inputData" v-model="inputData.min">
    <br>
    max:<input type="text" class="inputData" v-model="inputData.max">
    <div class="colorvalue">{{inputData}}</div>
    <el-color-picker v-model="color1"></el-color-picker>
    <div class="colorbar"></div>

  </div>
</template>

<script>
export default {
  name: 'Test',
  
  data () {
    return {
      inputData: {
        min: 0,
        max: 0,
      },
      color1: '#409EFF',
      colorLists: ['rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)','rgb(0, 0, 255)', 'rgb(255, 0, 255)'],
    }
  },
  methods: {
    
    init() {
      var bar = document.querySelector('.colorbar');
      bar.style.backgroundImage = `linear-gradient(to top, ${this.colorLists})`
      
    },
    
  },
  mounted() {
    this.init();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Test {

}
.colorbar {
  width: 100px;
  height: 600px;
  background-image: linear-gradient(#e66465, #9198e5);
}


</style>
