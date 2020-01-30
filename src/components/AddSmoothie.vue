<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text">Add New Smothie Recipe</h2>
    <form>
      <div class="field title">
      <label for="title">Smoothie Title:</label>
      <input type="text" name="title" v-model="title">

    </div>
      <div class="field add-ingredient">
        <label for="add-ingredient"> Ad an igredient:</label>
        <input type="text" name="add-ingredient">

      </div>
      

    </form>

  </div>


</template>

<script>
    export default {
        name: "AddSmoothie",
      data(){
          return{
            title: null

          }
      }
    }
</script>

<style scoped>

</style>
