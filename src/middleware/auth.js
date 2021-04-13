export default function ({ app, route, redirect }) {
  if (route.path !== '/' && route.path !== '/login') {
    // we are on a protected route
    if (!app.$fire.auth.currentUser) {
      // take them to sign in page
      return redirect('/')
    }
  } else if (route.path === '/') {
    if (app.$fire.auth.currentUser) {
      // aquí debería de estar la página de inicio
      return redirect('/')
    }
  }
}