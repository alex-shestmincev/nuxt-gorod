<template>
  <section>
    <nav class="navbar navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">Объявление.net</a>
        </div>
        <div>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="/my" class="navbar-link navbar-right">My</a></li>
            <li><a href="/add" class="navbar-link navbar-right">Add New</a></li>
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
