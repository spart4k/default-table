import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.esm.browser.js'
import tabledefault from './components/table/index.js'
new Vue({
    el: '#root',
		components: {
			tabledefault,
		},
		data: {
      count: 0,
      tableConfig: {
        head: [
          {
            title: 'Сотрудник',
            sorts: [
              {
                type: '',
                default: ''
              }
            ],
            value: 'employee'
          },
          {
            title: 'Отдел',
            sorts: [
              {
                type: '',
                default: ''
              }
            ],
            value: 'department'
          },
          {
            title: 'Ставка',
            sorts: [
              {
                type: '',
                default: ''
              }
            ],
            value: 'cost'
          },
          {
            title: 'Дата принятие',
            sorts: [
              {
                type: '',
                default: ''
              }
            ],
            value: 'date'
          },
          {
            title: 'Образование',
            sorts: [
              {
                type: '',
                default: ''
              }
            ],
            value: 'universe'
          },
          {
            title: 'Автомобиль',
            sorts: [
              {
                type: '',
                default: ''
              }
            ],
            value: 'car'
          }
        ],
        data: []
      },
      employees: [
        { employee: "Иван Иванов", department: "Отдел продаж", cost: 2000, date: new Date("2021-01-15"), car: "A123BC", universe: "Высшее образование" },
        { employee: "Анна Смирнова", department: "Отдел маркетинга", cost: 2500, date: new Date("2020-12-10"), car: "A123BC", universe: "Высшее образование" },
        { employee: "Петр Петров", department: "Отдел разработки", cost: 3000, date: new Date("2021-02-28"), car: "A123BC", universe: "Высшее образование" },
        { employee: "Елена Ковалева", department: "Отдел кадров", cost: 2200, date: new Date("2021-03-05"), car: "A123BC", universe: "Высшее образование" },
        { employee: "Алексей Соколов", department: "Отдел продаж", cost: 2100, date: new Date("2020-11-20"), car: "A123BC", universe: "Высшее образование" },
        { employee: "Мария Васильева", department: "Отдел маркетинга", cost: 2400, date: new Date("2021-04-08"), car: "A123BC", universe: "Высшее образование" },
        { employee: "Сергей Игнатьев", department: "Отдел разработки", cost: 3200, date: new Date("2021-02-01"), car: "A123BC", universe: "Высшее образование" },
        { employee: "Анастасия Зайцева", department: "Отдел кадров", cost: 2300, date: new Date("2020-10-05"), car: "A123BC", universe: "Высшее образование" },
        { employee: "Дмитрий Морозов", department: "Отдел продаж", cost: 2050, date: new Date("2021-01-10"), car: "A123BC", universe: "Высшее образование" },
        { employee: "Екатерина Соловьева", department: "Отдел маркетинга", cost: 2600, date: new Date("2020-09-15"), car: "A123BC", universe: "Высшее образование" },
        { employee: "Артем Федоров", department: "Отдел разработки", cost: 2800, date: new Date("2021-03-20"), car: "A123BC", universe: "Высшее образование" },
        { employee: "Ольга Ефимова", department: "Отдел кадров", cost: 2150, date: new Date("2021-04-05"), car: "A123BC", universe: "Высшее образование" },
        { employee: "Александра Кузнецова", department: "Отдел продаж", cost: 2250, date: new Date("2020-08-01"), car: "A123BC", universe: "Высшее образование" },
        { employee: "Игорь Сорокин", department: "Отдел маркетинга", cost: 2450, date: new Date("2020-11-10"), car: "A123BC", universe: "Высшее образование" },
        { employee: "Максим Костин", department: "Отдел разработки", cost: 3300, date: new Date("2021-02-15"), car: "A123BC", universe: "Высшее образование" },
        { employee: "Дарья Яковлева", department: "Отдел кадров", cost: 2350, date: new Date("2020-12-05"), car: "A123BC", universe: "Высшее образование" },
        { employee: "Кирилл Макаров", department: "Отдел продаж", cost: 1950, date: new Date("2021-03-01"), car: "A123BC", universe: "Высшее образование" },
        { employee: "Алиса Николаева", department: "Отдел маркетинга", cost: 2700, date: new Date("2020-10-20"), car: "A123BC", universe: "Высшее образование" },
        { employee: "Роман Орлов", department: "Отдел разработки", cost: 2900, date: new Date("2021-01-05"), car: "A123BC", universe: "Высшее образование" },
        { employee: "Галина Андреева", department: "Отдел кадров", cost: 2300, date: new Date("2021-04-10"), car: "A123BC", universe: "Высшее образование" },
      ]
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
        this.tableConfig.data = this.employees
      },
      generateId() {
        return "id" + Math.random().toString(16).slice(2)
      },
		},
		computed: {

		},
		watch: {
		},
		async mounted() {
      this.initData()
		},
    beforeDestroy() {

    }
  })