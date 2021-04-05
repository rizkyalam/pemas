export const state = () => ({
    base_url: 'http://127.0.0.1:8000/',
    loginForm: {
        profile: '',        
        status: false,
        token: null
    },    
});

export const mutations = {
    loginSuccess(state, data) {
        state.loginForm.profile = data.profile
        state.loginForm.token =  data.token
        state.loginForm.status = true
    },
    logout(state) {
        state.loginForm.profile = {};
        state.loginForm.token =  null
        state.loginForm.status   = false;
    },
}