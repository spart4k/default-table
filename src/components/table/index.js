//import style from './style.css' assert { type: 'css' }
//document.adoptedStyleSheets.push(style)

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
      count: 0,
      headerOptions: [],
      tablePosition: null
    }
  },
  methods: {
    wrapingRow() {
      const table = document.querySelector(this.options.selector)
      this.tablePosition = table.getBoundingClientRect().x
      this.options.head.forEach((headerEl) => {
        const headId = headerEl.value
        const { width, x } = this.headerOptions.find((el) => el.id === headId)
        if ( (x + width + this.tablePosition) >= window.innerWidth && headerEl.isShow) {
          console.log( width, x, window.innerWidth )
          this.$emit('changeheadershow', { headerEl, value: false })
        } else if ((x + width + this.tablePosition) <= window.innerWidth && !headerEl.isShow){
          this.$emit('changeheadershow', { headerEl, value: true })
        }
      })
    },
    openChildRow(row) {
      if (row.child.isShow) {
        row.child.isShow = false
      } else {
        row.child.isShow = true
      }
      console.log(row.child.isShow != true)
    }
  },
  computed: {
    width() {
      return window.innerWidth
    }
  },
  mounted() {
    const table = document.querySelector(this.options.selector)
    const headerCells = table.querySelectorAll('.v-table-header-row-cell')
    headerCells.forEach((headerEl) => {
      const id = headerEl.id.split('-table-header')[0]
      const headCell = this.options.head.find((head) => head.value === id)
      console.log(headCell)
      const { width, x } = headerEl.getBoundingClientRect()
      this.headerOptions.push({
        id,
        headCell,
        width,
        x
      })
    })
    this.wrapingRow()
    window.addEventListener('resize', () => this.wrapingRow())
  },
  template
}
export default table
// Vue.component('message', message)