export default function ({ $axios }) {
  $axios.interceptors.request.use((config) => {
    config.params = config.params || {}
    config.params.language = 'ru'
    return config
  })
}
