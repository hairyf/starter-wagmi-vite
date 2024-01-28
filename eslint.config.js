// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  react: true,
  vue: false,
  rules: {
    'react-refresh/only-export-components': 'off',
  },
})
