//import style from './style.css' assert { type: 'css' }
//document.adoptedStyleSheets.push(style)

import template from './template.js'
import vTableButton from '../button/index.js'
import vButton from '../../button/index.js'
import vInput from '../../input/default/index.js'
import vIconSort from '../../icons/sort/index.js'
import vContextmenu from '../../contextmenu/default/index.js'

const table = {
  name: 'Table',
  components: {
    vTableButton,
    vButton,
    vInput,
    vIconSort,
    vContextmenu
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
      },
      contextmenu: {
        isShow: false,
        x: null,
        y: null,
        row: {},
        actions: {}
      },
      pagination: {
        totalRows: null,
        currentPage: null,
        totalPages: null,
        pageLength: null
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
      $event.stopPropagation()
      if (row.child.isShow) {
        row.child.isShow = false
      } else {
        row.child.isShow = true
      }
      if (this.contextmenu.isShow) {
        this.contextmenu.isShow = false
      }
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
    },
    // Костыль для чистки инпута
    clearField(value) {
      value = ''
      Vue.set(this, 'searchField', '');
    },
    openSort(head) {
      console.log(head)
      if (head.sorts) {
        head.sorts[0].isShow = !head.sorts[0].isShow
      }
    },
    sortRow(head) {
      if (head.sorts[0].value === undefined) {
        head.sorts[0].value = 'asc'
      } else if (head.sorts[0].value === 'asc') {
        head.sorts[0].value = 'desc'
      } else if (head.sorts[0].value === 'desc') {
        head.sorts[0].value = undefined
      }
    },
    openContext($event, row) {
      if (!this.contextmenu.isShow) {
        $event.preventDefault();
      } else {
        return
      }
      const contextWidth = 200
      if (this.contextmenu.isShow) {
        setTimeout(() => {
          this.contextmenu.isShow = false
        }, 0)
      }
      console.log($event.clientX, $event.clientY)
      console.log($event, row)
      let direction = 'left'
      let clientX = $event.clientX
      if ($event.clientX + contextWidth >= window.innerWidth) {
        direction = 'right'
        clientX = window.innerWidth - $event.clientX
      }
      setTimeout(() => {
        this.contextmenu.isShow = true
        this.contextmenu.x = clientX
        this.contextmenu.y = $event.clientY
        this.contextmenu.row = row,
        this.contextmenu.direction = direction
        this.contextmenu.actions = this.headActions
      }, this.contextmenu.isShow ? 450 : 0)
    },
    getWidth(el) {
      const element = document.getElementById(el)
      console.log(element)
      setTimeout(() => {
        console.log(element.getBoundingClientRect())
      }, 0)
      return '10px'
    }
  },
  computed: {
    width() {
      return window.innerWidth
    },
    colspanLength() {
      return this.options.options.selecting ? this.options.head.filter(el => el.isShow).length + 1 : this.options.head.filter(el => el.isShow).length
    },
    headActions() {
      return this.options.head.find((cell) => cell.type === 'actions')
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
    this.pagination = {
      ...this.options.data
    }

  },
  template
}

export default table
// Vue.component('message', message)