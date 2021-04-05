export default function ({ store, redirect }) {
    // Jika pengguna masih terdapat login session
    if (store.state.auth.loginForm.status === true) {
      return redirect('/user/dashboard')
    }
  }
  