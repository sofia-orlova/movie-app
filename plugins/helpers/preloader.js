export default ({ store }, inject) => {
  const preloader = {
    startPreloader: () => store.commit('preloader/CHANGE_PRELOADER_STATUS', true),
    stopPreloader: () => store.commit('preloader/CHANGE_PRELOADER_STATUS', false)
  }
  inject('preloader', preloader)
}
