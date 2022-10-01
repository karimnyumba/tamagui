module.exports = worm(true)

function worm(root = false) {
  const obj = root
    ? {
        get default() {
          return worm()
        },
      }
    : function () {
        //  dev warning in debug mode
        if (process.env.NODE_ENV === 'development' && process.env.DEBUG?.startsWith('tamagui')) {
          // eslint-disable-next-line no-console
          console.warn(`

This has been excluded via Tamagui!
Check "excludeReactNativeWebExports" setting and include it to fix.

${new Error().stack}

`)
        }

        return worm()
      }

  obj.displayName = `ProxyWorm - Check excludeReactNativeWebExports`
  obj._isProxyWorm = true

  return new Proxy(obj, {
    get(_, key) {
      if (Reflect.has(obj, key)) return Reflect.get(obj, key)
      return worm()
    },
    apply() {
      return worm()
    },
  })
}
