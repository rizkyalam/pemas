export default function ({ store, redirect }) {
    // Jika pengguna terdapat auth session
    if (store.state.auth.loginForm.status === false) {
      return redirect('/')
    }    
  }
  