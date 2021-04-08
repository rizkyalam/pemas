export default function ({store, redirect}) {
    const { level } = store.state.auth.loginForm.profile

    if (level === 'masyarakat') {
        redirect('/user/dashboard');
    }
}