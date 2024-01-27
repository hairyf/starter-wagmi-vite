// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  typescript: true,
  rules: {
    'react-refresh/only-export-components': 'off',
  },
})
