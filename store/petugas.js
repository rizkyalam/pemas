export const state = () => ({
    profile: {
        id_petugas: null,
        nama_petugas: null,
        telp: null,
        level: null,
    }
})

export const getters = {
    get_profile: state => {
        return state.profile
    }
}

export const mutations = {
    inputProfile(state, data) {
        state.profile.id_petugas = data.id_petugas
        state.profile.nama_petugas = data.nama_petugas
        state.profile.telp = data.telp
        state.profile.level = data.level
    }
}