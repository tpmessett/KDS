<template>
  <div class="navbar">
    <div>
      <img src="../assets/logo.png" alt="Slerp">
    </div>
    <div class="stats">
      Orders Pending: <strong>4</strong> | Orders Completed: <strong>12</strong>
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  min-height: 56px;
  background-color: #141323;
  position: fixed;
  top: 0;
  text-align: left;
}

.navbar img {
  max-height: 40px;
  max-width: 40px;
  padding: 12px 0 8px 40px;
}

.stats {
  color: white;
  font-size: 18px;
  padding: 18px 40px 16px 0;
  height: 30px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
