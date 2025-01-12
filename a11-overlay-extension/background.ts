console.log('Hey from the background!')
const isFirefoxLike =
process.env.EXTENSION_PUBLIC_BROWSER === 'firefox' ||
process.env.EXTENSION_PUBLIC_BROWSER === 'gecko-based'

if (isFirefoxLike) {
  console.log(`This is a Firefox-like browser: ${process.env.EXTENSION_PUBLIC_BROWSER}`)
} else {
  console.log('This is likely a chromium-based browser')
}
