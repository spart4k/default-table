const message = {
  name: 'message',
  props: {
    message: {
      type: Object,
      default: () => {}
    },
    isyourselfmessage: {
      type: Boolean,
      default: false
    },
    choosedstate: {
      type: Boolean,
      default: false
    },
    windowwidth: {
      type: Number,
      default: null
    }
  },
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    dblclick() {
      if (!this.choosedstate)  this.$emit('dblclick', this.message)

    },
    click() {
      if (this.choosedstate) this.$emit('click', this.message)
    },
    clickImage(propMessage, index) {
      console.log(propMessage, index)
      this.$emit('click-image', propMessage, index)
    },
    goToDialog(propMessage) {
      console.log(propMessage)
      this.$emit('go-to-dialog', propMessage)
    }
  },
  computed: {
    itemId() {
      return 'masId_' + this.message.id
    }
  },
  mounted() {
    function waitForvidLoad(vids, callback) {
        /* if no videos i.e. mobile mode only gifs and jpgs then call callback else masonry breaks.*/
        if(vids.length === 0){
            callback();
        }
      var vidsLoaded = 0;
      console.log(vids)
      vids.forEach(element => {
        element.addEventListener('loadeddata', function() {
          vidsLoaded++;
          if (vids.length === vidsLoaded) {
            callback();
          }
        });
      });

    }
    if (this.message.attachment.files.length) {
      const grid = document.getElementById(this.itemId);
      const videos = grid.querySelectorAll('video')
      console.log(videos)
      console.log(grid)
      console.log(this.itemId)
      let columnWidth = null
      if (this.windowwidth <= 768) {
        columnWidth = 120
      } else {
        columnWidth = 155
      }
      waitForvidLoad(videos, () => {
        console.log('video LAODED')
        const msnry = new Masonry( grid, {
          itemSelector: '.message-attachment__element',
          columnWidth
        });
      })

    }

  },
  template: `
  <div @click="click" @dblclick="dblclick">
    <div class="message-row">
      <p @click="goToDialog(message)" class="author">{{ message.author.title }}</p>
      <div v-if="message.attachment.files.length" class="message-attachment">
        <div :id='itemId' class="message-attachment-list">
          <div v-for="(attachment, index) in message.attachment.files" class="message-attachment__element">
            <img v-if="attachment.type === 'image'" @click="clickImage(message, index)" :src="attachment.src" alt="">
            <video v-if="attachment.type === 'video'" @click="clickImage(message, index)" :src="attachment.src"></video>
          </div>
          <!--<div :v-masonry="message.id" transition-duration="0.3s" item-selector=".itemAttachment">
            <div v-masonry-tile class="itemAttachment" v-for="(attachment, index) in message.attachment.files">

              <img :src="attachment.src" alt="">
            </div>
          </div>-->
        </div>
      </div>
      <div v-if="message.forwards.messages.length" class="message-forwards">
        <div class="message-forwards-list">
          <!--<div v-for="(forMessage, index) in message.forwards.messages" class="message-forwards-list__message">
            <p class="author">Переслано от <span>{{ forMessage.author.title }}</span></p>
            <p>{{ forMessage.text }}</p>
            <p class="time">{{ forMessage.time }}</p>
          </div>-->
          <message @click="click(forMessage)" @go-to-dialog="goToDialog" @click-image="clickImage" @dblclick="dblclick(forMessage)" :choosedState="choosedstate" v-for="(forMessage, forIndex) in message.forwards.messages" class="message-forwards-list__message" :message="forMessage"></message>
        </div>
      </div>
      <p>{{ message.text }} </p>
      <div class="message-panel">
        <!-- <component is="button-counter"></component> -->
        <p class="message-panel__time">{{ message.time }}</p>
        <div v-if="isyourselfmessage" :class="message.checked ? 'checked' : ''" class="message-panel__state">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
            <defs>
            </defs>
            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
              <path d="M 89.122 3.486 L 89.122 3.486 c -2.222 -3.736 -7.485 -4.118 -10.224 -0.742 L 33.202 59.083 c -1.118 1.378 -3.245 1.303 -4.262 -0.151 L 17.987 43.291 c -3.726 -5.322 -11.485 -5.665 -15.666 -0.693 l 0 0 c -2.883 3.428 -3.102 8.366 -0.533 12.036 L 24.206 86.65 c 2.729 3.897 8.503 3.89 11.222 -0.014 l 6.435 -9.239 L 88.87 10.265 C 90.28 8.251 90.378 5.598 89.122 3.486 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: currentColor; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            </g>
          </svg>
          <svg class="second" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
            <defs>
            </defs>
            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
              <path d="M 89.122 3.486 L 89.122 3.486 c -2.222 -3.736 -7.485 -4.118 -10.224 -0.742 L 33.202 59.083 c -1.118 1.378 -3.245 1.303 -4.262 -0.151 L 17.987 43.291 c -3.726 -5.322 -11.485 -5.665 -15.666 -0.693 l 0 0 c -2.883 3.428 -3.102 8.366 -0.533 12.036 L 24.206 86.65 c 2.729 3.897 8.503 3.89 11.222 -0.014 l 6.435 -9.239 L 88.87 10.265 C 90.28 8.251 90.378 5.598 89.122 3.486 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: currentColor; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>`
}
export default message
// Vue.component('message', message)