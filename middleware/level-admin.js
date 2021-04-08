export default function ({store, redirect}) {
    const { level } = store.state.auth.loginForm.profile

    if (level !== 'admin') {
        redirect('/user/dashboard');
    }
}