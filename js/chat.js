//import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.esm.browser.js'
import tabledefault from '../src/components/table/index.js'

new Vue({
    el: '#root',
		components: {
			tabledefault,
		},
		data: {
      count: 0
    },
		methods: {

		},
		computed: {

		},
		watch: {
			'chat.searchField': function(newVal, oldVal) {
			}
		},
		mounted() {
      console.log(this)
		},
    beforeDestroy() {

    }
  })