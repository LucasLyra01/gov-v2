<template>
  <div>
    <!-- Vertical navbar -->
    <div class="vertical-nav bg-white" id="sidebar">
      <!-- <button id="sidebarCollapse" type="button" class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><i class="fa fa-bars mr-2"></i><small class="text-uppercase font-weight-bold"></small></button> -->
      <div class="py-3 px-4 mb-4 bg-light">
        <div class="media d-flex align-items-center"><img src="../assets/logoSEG.png" alt="..." width="200" class="mr-3 img-thumbnail shadow-sm">
          <div class="media-body">
            <!-- <p class="font-weight-light text-muted mb-0">Full Stack developer</p> -->
          </div>
        </div>
            <h5 class="m-3">Secretaria de Estado do Governo</h5>
      </div>
    
      <p class="text-gray font-weight-bold text-uppercase px-5 small pb-4 mb-0">Menu</p>
    
      <ul class="nav flex-column bg-white mb-0">
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic bg-light">
              <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
              Consultar Atos Legislativos
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
                  <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                  About
              </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
                    <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
                    Services
                </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
                    <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                    Gallery
                </a>
        </li>
      </ul>
    
      <p class="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Charts</p>
    
      <ul class="nav flex-column bg-white mb-0">
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
                    <i class="fa fa-area-chart mr-3 text-primary fa-fw"></i>
                    Area charts
                </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
                    <i class="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
                    Bar charts
                </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
                    <i class="fa fa-pie-chart mr-3 text-primary fa-fw"></i>
                    Pie charts
                </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
                    <i class="fa fa-line-chart mr-3 text-primary fa-fw"></i>
                    Line charts
                </a>
        </li>
      </ul>
    </div>
    <!-- End vertical navbar -->
  </div>
</template>

<script>
import $ from 'jquery'; 
export default {

  data: () => {

  },
  mounted(){
    //toggle sidebar
     $('#sidebarCollapse').on('click', function() {
      $('#sidebar, #content').toggleClass('active');
    });
  },
  
}
</script>

<style>
.fixado {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 7;
}
.vertical-nav {
  min-width: 17rem;
  width: 17rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
}
.page-content {
  width: calc(100% - 17rem);
  margin-left: 17rem;
  transition: all 0.4s;
}
/* for toggle behavior */
#sidebar.active {
  margin-left: -17rem;
}
#content.active {
  width: 100%;
  margin: 0;
}
@media (max-width: 768px) {
  #sidebar {
    margin-left: -17rem;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
    margin: 0;
  }
  #content.active {
    margin-left: 17rem;
    width: calc(100% - 17rem);
  }
}
/*
*
* ==========================================
* FOR DEMO PURPOSE
* ==========================================
*
*/

.separator {
  margin: 3rem 0;
  border-bottom: 1px dashed #fff;
}
.text-uppercase {
  letter-spacing: 0.1em;
}
.text-gray {
  color: #aaa;
}
</style>