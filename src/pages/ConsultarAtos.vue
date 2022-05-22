<template>
    <div>
    <!-- Page content holder -->
      <!-- <div class="page-content p-1" id="content">
        <b-navbar type="dark" variant="secondary">
          <button id="sidebarCollapse" type="button" style="margin-left: 10px;" class="btn btn-light bg-white rounded-pill shadow-sm px-3"><i class="fa fa-bars mr-2"></i><small class="text-uppercase font-weight-bold"></small></button>
        </b-navbar>
      </div> -->
      <Navbar />
      <div class="page-content p-1" id="content">
        <div class="container-inputs">
          <b-container class="bv-example-row inputs1">
            <b-row>
              <b-col>
                <b-form-input 
                  placeholder="N° Lei"
                  v-model="nlei"
                />
              </b-col>
              <b-col>
                <b-form-input 
                  placeholder="Ano"
                  v-model="ano"
                />
              </b-col>
              <b-col>
                <b-form-input 
                  placeholder="Tipo de Lei"
                  v-model="tipoAtoNormativo.text"
                />
              </b-col>
            </b-row>
          </b-container>
          <b-container class="bv-example-row inputs2 separacao-inputs">
            <b-row>
              <b-col>
                <b-form-datepicker
                  placeholder="Data Inicial"
                  locale="pt-BR"
                  :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                  v-model="dataInicio"
                ></b-form-datepicker>
              </b-col>
              <b-col>
                <b-form-datepicker
                  placeholder="Data Final"
                  locale="pt-BR"
                  :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                  v-model="dataFinal"
                ></b-form-datepicker>
              </b-col>
              <b-col>
                <b-form-input 
                  placeholder="Descrição"
                  v-model="descricao"
                />
              </b-col>
            </b-row>
          </b-container>
          <b-container class="bv-example-row button separacao-inputs">
            <b-row>
              <b-col>
                <b-button  @click="pegarDadosAPI" variant="outline-primary">Pesquisar</b-button>
              </b-col>
              <!-- <b-col>
                <b-button  @click="mostrar" variant="outline-primary">Mostrar campos</b-button>
              </b-col> -->
            </b-row>
          </b-container>
        </div>

        <div class="cards" 
          v-for="(items, index) in listaDadosAPI"
          :key="index"
        >
          <b-card no-body class="overflow-hidden card">
            <b-row no-gutters>
              <b-col md="1" class="image-card">
                <b-icon icon="x-circle" variant="success"></b-icon>
              </b-col>
              <b-col md="4">
                <b-card-body>
                  <b-card-text>
                    <div><b>N° Lei:</b> {{ items.numeroAnoAtoNormativo }}</div>
                    <div><b>Autoria:</b> {{ items.autoriaAtoNormativo }}</div>
                    <div><b>Ato Normativo:</b> {{ items.tipoAtoNormativo }}</div>
                    <div><b>Publicação:</b> {{ items.publicacao }}</div>
                  </b-card-text>
                </b-card-body>
              </b-col>
              <b-col md="4">
                <b-card-body title="Assunto">
                  <b-card-text>
                    <div>{{ items.descricao }}</div>
                  </b-card-text>
                </b-card-body>
              </b-col>
              <b-col md="3">
                <b-card-body title="Links">
                  <b-card-text>
                    <div><a href="">Documento Original</a></div>
                    <div><a href="">Documento Original</a></div>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>

    </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Navbar from '@/components/Navbar.vue';
  export default {
    name: "HomeView",
    components: {
      Navbar
    },
    data() {
      return {
        value: '',
        selected: '',
        nlei: "",
        nAno: "",
        dataInicial: "",
        dataFinal: "",
        descricao: "",
      }
    },
    methods: {
        ...mapActions(["atualizarLista", "atualizarShowProgressBar", "pegarDadosAPI"]),
        onContext(ctx){
          this.selected = ctx.selectedYMD
        },
    },
    computed: {
        ...mapState({
            nlei: "nlei",
            nAno: "ano",
            dataInicio: "dataInicio",
            dataFinal: "dataFinal",
            descricao: "descricao",
            lista: "lista",
            infos: "infos",
            tipoAtoNormativo: "tipoAtoNormativo",
            showProgressBar: "showProgressBar",
            listaDadosAPI: "listaDadosAPI"
        }),
    },
}
</script>

<style lang="scss">
  body {
    min-height: 100vh;
    overflow-x: hidden;
  }

  .page-content {
    // border: 1px solid red;
    // position: fixed;
    // top: 0px;
    .container-inputs{
      display: grid;
      .separacao-inputs{
        margin-top: 10px;
      }
    }

    .cards {
      margin: 20px 10px 10px 10px;

      display: flex;
      justify-content: center;
      align-content: center;

      border: 1px solid rgb(103, 102, 102);
      border-radius: 7px;

      .card {
        width: 100%;
      }

      .image-card {
        display: flex;
        justify-content: center;
        align-items: center;
      }

    }
    
  }

</style>