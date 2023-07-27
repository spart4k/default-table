import style from './style.css' assert { type: 'css' };
document.adoptedStyleSheets.push(style)

import template from './template.js'

const table = {
  name: 'Table',
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
  },
  computed: {
  },
  mounted() {

  },
  template
}
export default table
// Vue.component('message', message)