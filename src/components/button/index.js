const button = {
  render: function (createElement) {
    return createElement(
      'button', // имя тега
      {
        attrs: {
        },
        class: {
          'v-button': true
        },
        style: {
          //backgroundImage: this.option.urlIcon ? this.backgroundImage : '',
          color: ''
        },
        domProps: {
          innerHTML: this.backgroundImage ?
          `
            <img src="${this.backgroundImage}"></img>
            <p>test</p>
          ` : '<p>test</p>'
        },
        on: {
          click: this.buttonClick
        },

      },
    )
  },
  props: {
    option: {
      type: Object,
      default: () => {}
    },
    row: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    backgroundImage() {
      if (this.option.urlIcon) {
        return this.option.urlIcon
      }

    }
  },
  methods: {
    buttonClick($event) {
      event.stopPropagation()
      this.option.event(this.row)
    }
  },
  mounted() {

  }
}
export default button