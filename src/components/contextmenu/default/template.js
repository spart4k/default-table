export default `
  <transition name="context-open">
    <div :class="options.isShow ? 'v-contextmenu--show' : 'v-contextmenu--hide'" :style="{ top: options.y, left: options.x }" class="v-contextmenu">
      <div class="v-contextmenu-wrap">
        <div v-for="(item) in 10" class="v-contextmenu-item">
          <img src="https://icons.veryicon.com/png/o/miscellaneous/operation-scenarios-menu-overview/action-delete-2.png" alt="">
          <p>фвфывфвфвыasdasd</p>
        </div>
      </div>
    </div>
  </transition>
`

