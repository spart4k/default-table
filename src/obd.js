function consoleText(row) {
  console.log(row, 2)
  //return 'test'
}
function consoleButton(row) {
  console.log(row, 1)
}

const tableConfigData = {
  selector: '#mainTable',
  options: {
    selecting: true
  },
  head: [
    {
      title: 'Сотрудник',
      type: 'default',
      sorts: [
        {
          type: '',
          default: ''
        }
      ],
      isShow: true,
      width: '5%',
      value: 'employee'
    },
    {
      title: 'Отдел',
      type: 'default',
      sorts: [
        {
          type: '',
          default: ''
        }
      ],
      isShow: true,
      width: '5%',
      value: 'department'
    },
    {
      title: 'Ставка',
      type: 'default',
      sorts: [
        {
          type: '',
          default: ''
        }
      ],
      isShow: true,
      width: '5%',
      value: 'cost'
    },
    {
      title: 'Дата принятие',
      type: 'default',
      sorts: [
        {
          type: '',
          default: ''
        }
      ],
      isShow: true,
      width: '20%',
      value: 'date'
    },
    {
      title: 'Образование',
      type: 'default',
      sorts: [
        {
          type: '',
          default: ''
        }
      ],
      isShow: true,
      width: '10%',
      value: 'universe'
    },
    {
      title: 'Автомобиль',
      type: 'default',
      sorts: [
        {
          type: '',
          default: ''
        }
      ],
      isShow: true,
      width: '10%',
      value: 'car'
    },
    {
      title: 'universe1',
      type: 'default',
      sorts: [
        {
          type: '',
          default: ''
        }
      ],
      isShow: true,
      width: '10%',
      value: 'universe1'
    },
    {
      title: 'universe2',
      type: 'default',
      sorts: [
        {
          type: '',
          default: ''
        }
      ],
      isShow: true,
      width: '10%',
      value: 'universe2'
    },
    {
      title: 'universe3',
      type: 'default',
      sorts: [
        {
          type: '',
          default: ''
        }
      ],
      isShow: true,
      width: '100px',
      value: 'universe3'
    },
    {
      title: 'Действия',
      type: 'actions',
      sorts: [
        {
          type: '',
          default: ''
        }
      ],
      isShow: true,
      width: '100px',
      value: 'actions',
      actions: [
        {
          type: 'button',
          urlIcon: 'https://uxwing.com/wp-content/themes/uxwing/download/editing-user-action/modify-icon.png',
          event: consoleText,
          label: 'Test funciton'
        },
        {
          type: 'button',
          urlIcon: 'https://icons.veryicon.com/png/o/miscellaneous/operation-scenarios-menu-overview/action-delete-2.png',
          event: consoleButton,
          label: 'Test funciton'
        }
      ]
    },
  ],
  data: []
}
