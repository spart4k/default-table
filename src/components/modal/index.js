const modal = {
  props: {
    message: {
      type: Object,
      default: () => {}
    }
  },
  data: function () {
    return {
      count: 0
    }
  },
  template: `
    <div class="popup modal">
      <div class="popup-wrap popup-wrap--modal">
        <div class="popup-body popup-body--modal">
          <slot/>
        </div>
      </div>
    </div>
  `
}
export default modal