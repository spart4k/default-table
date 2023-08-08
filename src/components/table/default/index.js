//import style from './style.css' assert { type: 'css' }
//document.adoptedStyleSheets.push(style)

import template from './template.js'
import vTableButton from '../button/index.js'
import vButton from '../../button/index.js'
import vInput from '../../input/default/index.js'

const table = {
  name: 'Table',
  components: {
    vTableButton,
    vButton,
    vInput
  },
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      count: 0,
      headerOptions: [],
      tablePosition: null,
      searchField: '',
      lastSelected: {
        indexRow: null,
        row: {}
      }
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
    openChildRow($event, row) {
      console.log($event)
      $event.stopPropagation()
      if (row.child.isShow) {
        row.child.isShow = false
      } else {
        row.child.isShow = true
      }
      console.log(row.child.isShow != true)
    },
    checkboxInput(row, indexRow) {
      console.log(row, indexRow)
      console.log('checkbox')
      let delta = null
      if (indexRow > this.lastSelected.indexRow) {
        delta = indexRow - this.lastSelected.indexRow
        if (this.lastSelected.indexRow === null) this.lastSelected.indexRow = 0
        for (let i = this.lastSelected.indexRow; i < (this.lastSelected.indexRow + delta); i++) {
          console.log(i)
          console.log(this.options.data[i].row)
          if (!this.options.data[i].row.selected) {
            this.options.data[i].row.selected = true
          } else {
            //console.log(i, this.lastSelected.indexRow)
            //this.options.data[i].row.selected = false
            //if (i === this.lastSelected.indexRow) this.options.data[i].row.selected = true
          }
        }
      } else {
        console.log('down')
        delta = this.lastSelected.indexRow - indexRow
        for (let i = this.lastSelected.indexRow; i > (this.lastSelected.indexRow - delta); i--) {
          console.log(i)
          console.log(this.options.data[i].row)
          if (!this.options.data[i].row.selected) {
            this.options.data[i].row.selected = true
          } else {
            //console.log(i)

            //this.options.data[i].row.selected = false
            //if (i === this.lastSelected.indexRow) this.options.data[i].row.selected = true
          }

        }
      }
      console.log(delta)
      console.log(this.lastSelected.indexRow)

    },
    saveLastSelected(data) {
      console.log(data)
      this.lastSelected = {
        ...data
      }
    }
  },
  computed: {
    width() {
      return window.innerWidth
    },
    colspanLength() {
      return this.options.options.selecting ? this.options.head.filter(el => el.isShow).length + 1 : this.options.head.filter(el => el.isShow).length
    }
  },
  watch: {
    searchField(newVal, oldVal) {
      console.log(newVal)
      this.options.options.search.function(newVal)
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