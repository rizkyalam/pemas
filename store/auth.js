export const state = () => ({
    loginForm: {
        username: '',        
        status: false,
        token: null
    },    
    registerForm: {
        nama: '',
        nik: 0,
        telp: 0,
        username: '',
        password: '',
        confirmPassword: '',
        fotoKTP: null
    }
});

export const mutations = {
    loginSuccess(state, data) {
        state.loginForm.username = data.username
        state.loginForm.login    = true
    },
    loginFail(state, data) {
        state.loginForm.username = '';
        state.loginForm.password = '';
        state.loginForm.status   = false;
    },
    addRegisterData(state, data) {
               
    }
}