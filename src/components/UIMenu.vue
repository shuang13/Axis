<template>
  <div class="UIMenu">
    <ul class ="menu">
        <li v-for="item in menu_items">
          <span>{{item.value}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {

  name: 'UIMenu',
  props: ["menu_items"],
  data () {
    return {
      
    }
  },
  methods: {
    init() {
      
    },
    
  },
  mounted() {
    this.init();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.UIMenu {
  position: absolute;
  display: none;
  width: 100px;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 2px #888888;

}
.menu {
  list-style: none;
  padding-inline-start: 0px;
  margin-block-start: 0;
  margin-block-end: 0;
}

.menu li {
  float: left;
  background: #fff;
  text-align: center;
  line-height: 30px;
  width: 100px;
  height: 30px;
  list-style: none;
  font-size: 14px;
  border-bottom: 1px solid #ddd;

}
.menu li:hover {
  background: #ddd;
  cursor: pointer;
}

</style>
