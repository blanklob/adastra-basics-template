// If you are not using Github codespaces replace this config
// with a more simpler one here https://github.com/blanklob/adastra

import adastra from 'adastra-plugin'

const {
  CODESPACE_NAME,
  GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN
} = process.env


let origin, host, port = 5173
if (CODESPACE_NAME && GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN) {
  origin = `https://${CODESPACE_NAME}-${port}.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}`
  host = '0.0.0.0'
}

export default {
  plugins: [adastra()],
  server: {
    port,
    origin,
    host
  }
}
