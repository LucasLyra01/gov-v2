import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        dadosFormatadosAPI: [],
        nlei: '',
        ano: '',
        tipoAtoNormativo: [
            { text: "Tipo de Lei", disabled: true},
            { text: 'DECRETO-R'},
            { text: 'DECRETO-S'},
            { text: 'LEI COMPLEMENTAR'},
            { text: 'LEI DELEGADA'},
            { text: 'LEI ORDINÁRIA'},
        ],
        dataInicio: '',
        dataFinal: '',
        descricao: '',
        listaDadosAPI: '',
        showProgressBar: false,
        lista: '',
        infos: [
            {leiOrdinaria: "00001/1947", publicacao: "07/08/1947", autoria: "PODER EXECUTIVO", linkOriginal: "link1", linkAtualizado: "link2"},
            {leiOrdinaria: "00002/1947", publicacao: "07/08/1947", autoria: "PODER EXECUTIVO", linkOriginal: "link1", linkAtualizado: "link2"},
            {leiOrdinaria: "00003/1947", publicacao: "08/08/1947", autoria: "PODER EXECUTIVO", linkOriginal: "link1", linkAtualizado: "link2"},
            {leiOrdinaria: "00004/1947", publicacao: "18/10/1947", autoria: "PODER EXECUTIVO", linkOriginal: "link1", linkAtualizado: "link2"},
            {leiOrdinaria: "00005/1947", publicacao: "21/10/1947", autoria: "PODER EXECUTIVO", linkOriginal: "link1", linkAtualizado: "link2"},
            {leiOrdinaria: "00006/1947", publicacao: "13/11/1947", autoria: "PODER EXECUTIVO", linkOriginal: "link1", linkAtualizado: "link2"},
            {leiOrdinaria: "00007/1947", publicacao: "13/11/1947", autoria: "PODER EXECUTIVO", linkOriginal: "link1", linkAtualizado: "link2"},
            {leiOrdinaria: "00008/1947", publicacao: "19/11/1947", autoria: "PODER EXECUTIVO", linkOriginal: "link1", linkAtualizado: "link2"},
            {leiOrdinaria: "00009/1947", publicacao: "19/11/1947", autoria: "PODER EXECUTIVO", linkOriginal: "link1", linkAtualizado: "link2"},
            {leiOrdinaria: "00010/1947", publicacao: "28/11/1947", autoria: "PODER EXECUTIVO", linkOriginal: "link1", linkAtualizado: "link2"},
            {leiOrdinaria: "00011/1947", publicacao: "28/11/1947", autoria: "PODER EXECUTIVO", linkOriginal: "link1", linkAtualizado: "link2"},
        ],
    },
    getters: {
        listarInfos(state){
            return state.infos;
        },
        listarTipoAtoNormativo(state){
            return state.tipoAtoNormativo;
        },
        showProgressBar(state){
            return state.showProgressBar;
        }
    },
    mutations: {
        atualizarLista(state, novaLista){
            state.lista = novaLista;
        },
        atualizarShowProgressBar(state, showTrue) {
            state.showProgressBar = showTrue;
        },
        atualizarListaDadosAPI(state, novaListaDadosAPI) {
            state.listaDadosAPI = novaListaDadosAPI;
        },
        atualizaNLei(state, novoNLei){
            state.nlei = novoNLei;
        },
        atualizaNAno(state, novoNAno){
            state.ano = novoNAno;
        },
        atualizaDataInicio(state, novaDataInicio){
            state.dataInicio = novaDataInicio;
        },
        atualizaDataFinal(state, novaDataFinal){
            state.dataFinal = novaDataFinal;
        },
    },
    actions: {
        atualizarLista({ commit }) {
            commit("atualizarShowProgressBar", true)
            axios.get('buscar')
                .then((response) => {
                    console.log('Deu certo até aqui', response.data);
                    commit("atualizarLista", response.data);
                    commit("atualizarShowProgressBar", false);
                }).catch((error) => {
                    commit("atualizarLista", error);
                    commit("atualizarShowProgressBar", false);
                })
                    
                
        },
        pegarDadosAPI(context) {

            context.commit("atualizarShowProgressBar", true);

            (async () => {
                if(context.state.nlei){
                    console.log('Lei:', context.state.nlei)
                }else{
                    context.state.nlei = 0
                }
                if(context.state.ano){
                    console.log('Ano:', context.state.ano)
                }else{
                    context.state.ano = 0
                }
                if(context.state.dataInicio){
                    console.log('dataInicio:', context.state.dataInicio)
                }else{
                    context.state.dataInicio = 0
                }
                if(context.state.dataFinal){
                    console.log('dataFinal:', context.state.dataFinal)
                }else{
                    context.state.dataFinal = 0
                }
            })();    

            axios.post('buscar', {

                "numeroAtoNormativo": 0,
                "anoAtoNormativo": 0,
                "tipoAtoNormativo": 1,
                "publicacao": {
                    "dataInicioBusca": "2022-05-19T20:38:50.013Z",
                    "dataFimBusca": "2022-05-19T20:38:50.013Z"
                },
                "descricao": "10"

                }).then((response) => {

                    context.state.nlei = '';
                    context.state.ano = ''
                    context.state.dataInicio = '';
                    context.state.dataFinal = '';

                    let dados = [];

                    for (let i = 0; i < response.data.length; i++) {

                        let dataAPI = new Date(response.data[i].publicacao);

                        let dataAPIFormatada = dataAPI.toLocaleDateString({
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit"
                        })
                        
                        dados.push({
                            autoriaAtoNormativo: response.data[i].autoriaAtoNormativo,
                            descricao: response.data[i].descricao,
                            links: response.data[i].links,
                            numeroAnoAtoNormativo: response.data[i].numeroAnoAtoNormativo,
                            publicacao: dataAPIFormatada,
                            tipoAtoNormativo: response.data[i].tipoAtoNormativo,
                        })
                        
                    }
                    context.commit("atualizarShowProgressBar", false);
                    context.commit("atualizarListaDadosAPI", dados);
                })
        },


    }
});