/**
 * Store data for pagination masyarakat
 */
export const state = () => ({
    dataMasyarakat: {
        current_page: null,
        data: {},
        links: [],
        first_page_url: null,
        last_page_url: null,
        last_page: null,
        next_page: null,
        prev_page: null
    },
    profile: {
        id_masyarakat: null,
        nama: null,
        nik: null,
        telp: null,
        foto: null
    }
});

export const getters = {
    get_current_page: state => {
        return 'test';
    },
    get_profile: state => {
        return state.profile
    }
}

export const mutations = {
    first_page(state, datas) {
        state.dataMasyarakat.current_page = 1;
        state.dataMasyarakat.data = datas.data;
        state.dataMasyarakat.links = datas.links;
        state.dataMasyarakat.first_page_url = null;
        state.dataMasyarakat.last_page_url = datas.last_page_url;
        state.dataMasyarakat.last_page = datas.last_page;
        state.dataMasyarakat.next_page = datas.last_page;
        state.dataMasyarakat.prev_page = null;
    },
    inputProfile(state, data) {
        state.profile.id_masyarakat = data.id_masyarakat
        state.profile.nama = data.nama
        state.profile.nik = data.nik
        state.profile.telp = data.telp
        state.profile.foto = data.foto
    }
}

export const actions = {
    async firstPageData({commit}, base_url) {
        const data = await this.$axios.$get(`${base_url}?page=1`);
        commit('first_page', data);
    }
}