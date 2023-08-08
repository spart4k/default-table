//import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.esm.browser.js'
import tabledefault from './components/table/default/index.js'
new Vue({
  el: '#root',
  components: {
    tabledefault,
  },
  data: {
    count: 0,
    tableConfig: tableConfigData,
    employees: [
      { employee: "Иван Иванов", department: "Отдел продаж", cost: 2000, date: new Date("2021-01-15"), car: "A123BC", universe: "Высшее образование", universe1: "Высшее образование", universe2: 'universe1123132', universe3: 'universe451' },
      { employee: "Анна Смирнова", department: "Отдел маркетинга", cost: 2500, date: new Date("2020-12-10"), car: "A123BC", universe: "Высшее образование", universe1: "Высшее образование", universe2: 'universe1123132', universe3: 'universe451' },
      { employee: "Петр Петров", department: "Отдел разработки", cost: 3000, date: new Date("2021-02-28"), car: "A123BC", universe: "Высшее образование", universe1: "Высшее образование", universe2: 'universe1123132', universe3: 'universe451' },
      { employee: "Елена Ковалева", department: "Отдел кадров", cost: 2200, date: new Date("2021-03-05"), car: "A123BC", universe: "Высшее образование", universe1: "Высшее образование", universe2: 'universe1123132', universe3: 'universe451' },
      { employee: "Алексей Соколов", department: "Отдел продаж", cost: 2100, date: new Date("2020-11-20"), car: "A123BC", universe: "Высшее образование", universe1: "Высшее образование", universe2: 'universe1123132', universe3: 'universe451' },
      { employee: "Мария Васильева", department: "Отдел маркетинга", cost: 2400, date: new Date("2021-04-08"), car: "A123BC", universe: "Высшее образование", universe1: "Высшее образование", universe2: 'universe1123132', universe3: 'universe451' },
      { employee: "Сергей Игнатьев", department: "Отдел разработки", cost: 3200, date: new Date("2021-02-01"), car: "A123BC", universe: "Высшее образование", universe1: "Высшее образование", universe2: 'universe1123132', universe3: 'universe451' },
      { employee: "Анастасия Зайцева", department: "Отдел кадров", cost: 2300, date: new Date("2020-10-05"), car: "A123BC", universe: "Высшее образование", univers1: "Высшее образование", univers2: 'univers1123132', univers3: 'univers451' },
      { employee: "Дмитрий Морозов", department: "Отдел продаж", cost: 2050, date: new Date("2021-01-10"), car: "A123BC", universe: "Высшее образование", universe1: "Высшее образование", universe2: 'universe1123132', universe3: 'universe451' },
      { employee: "Екатерина Соловьева", department: "Отдел маркетинга", cost: 2600, date: new Date("2020-09-15"), car: "A123BC", universe: "Высшее образование", universe1: "Высшее образование", universe2: 'universe1123132', universe3: 'universe451' },
      { employee: "Артем Федоров", department: "Отдел разработки", cost: 2800, date: new Date("2021-03-20"), car: "A123BC", universe: "Высшее образование", universe1: "Высшее образование", universe2: 'universe1123132', universe3: 'universe451' },
      { employee: "Ольга Ефимова", department: "Отдел кадров", cost: 2150, date: new Date("2021-04-05"), car: "A123BC", universe: "Высшее образование", universe1: "Высшее образование", universe2: 'universe1123132', universe3: 'universe451' },
      { employee: "Александра Кузнецова", department: "Отдел продаж", cost: 2250, date: new Date("2020-08-01"), car: "A123BC", universe: "Высшее образование", universe1: "Высшее образование", universe2: 'universe1123132', universe3: 'universe451' },
      { employee: "Игорь Сорокин", department: "Отдел маркетинга", cost: 2450, date: new Date("2020-11-10"), car: "A123BC", universe: "Высшее образование", universe1: "Высшее образование", universe2: 'universe1123132', universe3: 'universe451' },
      { employee: "Максим Костин", department: "Отдел разработки", cost: 3300, date: new Date("2021-02-15"), car: "A123BC", universe: "Высшее образование", universe1: "Высшее образование", universe2: 'universe1123132', universe3: 'universe451' },
      { employee: "Дарья Яковлева", department: "Отдел кадров", cost: 2350, date: new Date("2020-12-05"), car: "A123BC", universe: "Высшее образование", universe1: "Высшее образование", universe2: 'universe1123132', universe3: 'universe451' },
      { employee: "Кирилл Макаров", department: "Отдел продаж", cost: 1950, date: new Date("2021-03-01"), car: "A123BC", universe: "Высшее образование", universe1: "Высшее образование", universe2: 'universe1123132', universe3: 'universe451' },
      { employee: "Алиса Николаева", department: "Отдел маркетинга", cost: 2700, date: new Date("2020-10-20"), car: "A123BC", universe: "Высшее образование" , universe1: "Высшее образование", universe2: 'universe1123132', universe3: 'universe451'},
      { employee: "Роман Орлов", department: "Отдел разработки", cost: 2900, date: new Date("2021-01-05"), car: "A123BC", universe: "Высшее образование", universe1: "Высшее образование", universe2: 'universe1123132', universe3: 'universe451' },
      { employee: "Галина Андреева", department: "Отдел кадров", cost: 2300, date: new Date("2021-04-10"), car: "A123BC", universe: "Высшее образование", universe1: "Высшее образование", universe2: 'universe1123132', universe3: 'universe451' },
    ],
    output: []
  },

  methods: {
    initData() {
      const template = {
        id: null,
        employee: ''
      }
      //for (let i = 0; i < 20; i++) {

      //}
      this.employees.map((el) => el.id = this.generateId())
      //this.tableConfig.data = this.employees
      this.tableConfig.data = this.employees
      console.log(this.window)
      //this.tableConfig.data.map((el) => )
      const structuredArray = []
      this.tableConfig.data.forEach((row) => {
        // if (this.tableConfig.options.selecting) row.selected = false
        structuredArray.push({
          row,
          child: {
            isShow: false,
            data: row
          }
        })
      })
      this.tableConfig.data = structuredArray
      //this.employees.forEach((row, rowIndex) => {
      //  output.push([])
      //  for(let i = 0; i < chunkSize; i++) {
      //    //output[i] = this.employees.slice(i*chunkSize, i*chunkSize+chunkSize);
      //    output[rowIndex].push([])
      //    if (i === 0) {
      //      output[rowIndex][0] = row
      //    }
      //    // Добавляем новое значение в исх.массив, которое равно - часть массива из входящего массива от i*size (текущая) позиции до текущая + size, это будет массив.
      //  }
      //  this.tableConfig.data = output
      //})
      //for(let i = 0; i < chunkSize; i++) {
      //  //output[i] = this.employees.slice(i*chunkSize, i*chunkSize+chunkSize);
      //  output.push([])
      //  // Добавляем новое значение в исх.массив, которое равно - часть массива из входящего массива от i*size (текущая) позиции до текущая + size, это будет массив.
      //}
    },
    generateId() {
      return "id" + Math.random().toString(16).slice(2)
    },
    changeheadershow(options) {
      const { headerEl, value } = options

      headerEl.isShow = value
    },
    addChecboxData() {
      
    }
  },
  computed: {
    window() {
      return window.screen.width
    }
  },
  watch: {
  },
  mounted() {
    this.initData()
  },
  beforeDestroy() {

  }
})
console.log(consoleText)
