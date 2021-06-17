export default function () {
  const { nuxt, options } = this

  options.router.middleware.push(({ route, redirect }) => {
    const path = route.hash.replace('#', '')
    redirect(path)
  })

  nuxt.hook('generate:distCopied', function (generator) {
    console.log(generator.distPath)
    console.log(generator.nuxt.options.app.basePath)
  })
}