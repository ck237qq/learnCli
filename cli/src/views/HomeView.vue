<template>
<main>
<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="first-slide" src="../imger/computer2.jpg" alt="First slide" width="100%">

        <div class="container">
          <div class="carousel-caption text-start">
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="first-slide" src="../imger/computer3.jpg" alt="First slide" width="100%">
        <div class="container">
          <div class="carousel-caption">
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img class="first-slide" src="../imger/computer4.jpg" alt="First slide" width="100%">
        <div class="container">
          <div class="carousel-caption text-end">
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="container marketing">

    <!-- Three columns of text below the carousel -->
    <div class="row">
      <div class="col-lg-4">
        <img class="rounded-circle" src="../imger/vue.jpg" alt="Generic placeholder image" width="140" height="140">
        <h2>前端專長</h2>
        <p>Vue，框架使用cli。</p>
        <p><a class="btn btn-secondary" href="https://github.com/ck237qq/learnCli/tree/developMike">View details &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img class="rounded-circle" src="../imger/Spring.png" alt="Generic placeholder image" width="140" height="140">
        <h2>後端專長</h2>
        <p>Java，框架使用Spring boot。</p>
        <p><a class="btn btn-secondary" href="https://gitlab.com/mike539/userinfo/-/tree/develop_mike_PostgreSql">View details &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img class="rounded-circle" src="../imger/sql.jpg" alt="Generic placeholder image" width="140" height="140">
        <h2>SQL</h2>
        <p>MySQL、MSSQL、PostgresSQL。</p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
    </div><!-- /.row -->

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">陳建全 </h2>
        <h2><span class="text-muted">MikeChen</span></h2>
        <p class="lead">於陸軍航特部服役13年，退伍後因職訓接觸到程式語言，先後學習了Java的Spring Mvc、Spring boot及JSP，之後為了學習前後端分離開始學習Vue,框架使用cli，目前持續練習製作作品，目標將這個網站作成一個購物平台。</p>
      </div>
      <div class="col-md-5">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src="../imger/mike.jpg" alt="Generic placeholder image" width="500" height="500">
      </div>
    </div>

    <hr class="featurette-divider">

    <!-- /END THE FEATURETTES -->

  </div><!-- /.container -->

  <!-- FOOTER -->
  <footer class="container">
    <p class="float-end"><a href="#">Back to top</a></p>
    <p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
  </footer>
  </main>
</template>
<style>
@import "../assets/helpers/css/carousel";
</style>
