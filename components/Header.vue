<template>
  <section>
    <nav class="navbar navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <router-link class="navbar-brand" to="/">Объявление.net</router-link>
        </div>
        <div>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link class="navbar-link navbar-right" to="/my">My</router-link>
            </li>
            <li>
              <router-link class="navbar-link navbar-right" to="/add">Add New</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div id="searchform">
      <div  class="container">
        <form class="form-horizontal">
          <div class="form-group">
            <div class="col-sm-10">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <div class="col-sm-2 text-right">
              <button type="submit" class="btn btn-default">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #searchform{
    background-color: #eee;
    padding: 10px 0 0 0;
  }
</style>
