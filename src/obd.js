function consoleText(row) {
  console.log(row, 2)
  //return 'test'
}
function consoleButton(row) {
  console.log(row, 1)
}

function consolePanel() {
  console.log('panel,button')
}

function searchInputing(field) {
  console.log(field)
}

const tableConfigData = {
  selector: '#mainTable',
  options: {
    selecting: true,
    search: {
      function: searchInputing
    },
    headerFixed: true
  },
  panel: {
    buttons: [
      {
        label: 'Обновить',
        class: ['v-table-button--custom'],
        urlIcon: 'https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/modify-icon.png',
        function: consolePanel,
        backgroundColor: '#ffffff'
      },
      {
        label: 'Добавить',
        class: ['v-table-button--custom'],
        urlIcon: 'https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/modify-icon.png',
        function: consolePanel,
        backgroundColor: '#fff'
      },
      {
        label: 'Скачать',
        class: ['v-table-button--custom'],
        function: consolePanel,
        backgroundColor: '#fff'
      }
    ]
  },
  head: [
    {
      title: 'Сотрудник',
      type: 'default',
      align: 'center',
      fixed: true,
      sorts: [
        {
          type: 'string',
          default: 'asc',
          value: undefined,
          isShow: false,
        }
      ],
      isShow: true,
      width: '5%',
      value: 'employee',
      search: {
        field: ''
      }
    },
    {
      title: 'Отдел',
      type: 'default',
      align: 'center',
      fixed: true,
      sorts: [
        {
          type: 'string',
          default: 'asc',
          value: undefined,
          isShow: false,
        }
      ],
      isShow: true,
      width: '5%',
      value: 'department',
      search: {
        field: ''
      }
    },
    {
      title: 'Ставка',
      type: 'default',
      align: 'left',
      fixed: false,
      sorts: [
        {
          type: 'number',
          default: 'asc',
          value: undefined,
          isShow: false,
        }
      ],
      isShow: true,
      width: '5%',
      value: 'cost',
      search: {
        field: ''
      }
    },
    {
      title: 'Дата принятие',
      type: 'default',
      align: 'center',
      fixed: false,
      sorts: [
        {
          type: 'date',
          default: 'asc',
          value: undefined,
          isShow: false,
        }
      ],
      isShow: true,
      width: '20%',
      value: 'date',
      search: {
        field: ''
      }
    },
    {
      title: 'Образование',
      type: 'default',
      align: 'center',
      fixed: false,
      sorts: [
        {
          type: 'string',
          default: 'asc',
          value: undefined,
          isShow: false,
        }
      ],
      isShow: true,
      width: '10%',
      value: 'universe',
      search: {
        field: ''
      }
    },
    {
      title: 'Автомобиль',
      type: 'default',
      align: 'center',
      fixed: false,
      sorts: [
        {
          type: 'string',
          default: 'asc',
          value: undefined,
          isShow: false,
        }
      ],
      isShow: true,
      width: '10%',
      value: 'car',
      search: {
        field: ''
      }
    },
    {
      title: 'universe1',
      type: 'default',
      align: 'center',
      fixed: false,
      sorts: [
        {
          type: 'string',
          default: 'asc',
          value: undefined,
          isShow: false,
        }
      ],
      isShow: true,
      width: '10%',
      value: 'universe1',
      search: {
        field: ''
      }
    },
    {
      title: 'universe2',
      type: 'default',
      align: 'center',
      fixed: false,
      sorts: [
        {
          type: 'string',
          default: 'asc',
          value: undefined,
          isShow: false,
        }
      ],
      isShow: true,
      width: '10%',
      value: 'universe2',
      search: {
        field: ''
      }
    },
    {
      title: 'universe3',
      type: 'default',
      align: 'center',
      fixed: false,
      sorts: [
        {
          type: 'string',
          default: 'asc',
          value: undefined,
          isShow: false,
        }
      ],
      isShow: true,
      width: '100px',
      value: 'universe3',
      search: {
        field: ''
      }
    },
    {
      title: 'Действия',
      type: 'actions',
      align: 'center',
      fixed: false,
      isShow: true,
      width: '100px',
      value: 'actions',
      actions: [
        {
          type: 'button',
          urlIcon: 'https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/modify-icon.png',
          function: consoleText,
          label: 'Редактировать'
        },
        {
          type: 'button',
          urlIcon: 'https://icons.veryicon.com/png/o/miscellaneous/operation-scenarios-menu-overview/action-delete-2.png',
          function: consoleButton,
          label: 'Удалить'
        }
      ]
    },
  ],
  data: {
    rows: [],
    totalRows: null,
    pageLength: null,
    currentPage: null,
    totalPages: null
  }
}
