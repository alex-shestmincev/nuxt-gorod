<template>
  <div id="homeCat">

    <h2 align="text-center">Категории объявлений</h2>

    <div class="row" v-for="row in rows">
      <div class="col-md-4 col-sm-4 parentItem" v-for="(parent,index) in row" :key="parent.id">
        <a>{{parent.title}}</a>
        <ul>
          <li v-for="child in parent.childs" :key="child.id"><a>{{child.title}}</a></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['categories'],
  data() {
    return {
        rowsCount: 3
    }
  },
  computed: {
    rows() {
        let rows = [];
        let i = 0;
        rows[i] = [];
        this.parentCategories.forEach((parent) => {
          if (rows[i] && rows[i].length >= this.rowsCount) {
            i++;
            rows[i] = []
          }

          rows[i].push(parent);
        })
      return rows
    },
    parentCategories() {
      let parents = this.categories
        .filter(cat => cat.parent_id === 0)
      parents = parents.map(parent => {
        parent.childs = this.categories
          .filter(cat => cat.parent_id === parent.id);
        return parent;
      })

      return parents;
    },

  },
}
</script>

<style scoped>
.parentItem{
  padding-bottom: 10px;
}
</style>
