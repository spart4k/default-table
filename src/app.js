import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.esm.browser.js'

export default {
		// el: '#chat',
		data() {
			return {
        chat: {
          dialogs: []
        },
        templateMessages: [
          "Не забудьте закрыть окно перед уходом.",
          "Сегодня очень жарко, лучше не выходить на улицу.",
          "Я слышал, что в этом районе опасно ходить вечером.",
          "Спасибо за приглашение, я обязательно приду.",
          "Завтра у нас будет важное совещание, пожалуйста, будьте вовремя.",
          "Я уже позвонила тебе два раза, что случилось?",
          "Нам нужно сегодня закончить этот проект.",
          "Как насчет встречи в кафе после работы?",
          "Этот фильм мне не очень понравился, более тупой, чем я ожидал.",
          "Я думаю, что сегодняшняя вечеринка будет веселой.",
          "Мы должны решить эту проблему как можно скорее.",
          "Я не умею готовить, но могу заказать еду на дом.",
          "Сейчас я занят, можете ли вы позвонить позже?",
          "Мои родители приезжают в гости на выходные.",
          "Если у вас есть какие-то вопросы, спросите меня.",
          "Я не могу позволить себе дорогую машину.",
          "Сегодняшний концерт был невероятным, я никогда такого не видел.",
          "Мне кажется, что лучший путь - это пешком.",
          "В моей семье всегда говорили, что здоровье - это самое главное.",
          "Какое сегодня настроение?"
        ],
        persons: [
          "Иван Ивановs",
          "Сергей Петров",
          "Надежда Ковалева",
          "Александр Смирнов",
          "Евгения Волкова",
          "Михаил Белов",
          "Людмила Шестакова",
          "Дмитрий Федоров",
          "Мария Кузнецова",
          "Андрей Гаврилов",
          "Татьяна Николаева",
          "Юрий Степанов",
          "Валентин Краснов",
          "Ольга Захарова",
          "Николай Дмитриев",
          "Галина Егорова",
          "Анна Макарова",
          "Владимир Богданов",
          "Павел Волков",
          "Александр Афанасьев"
        ]
      }
		},
		
		methods: {
			initTestData() {
				for (let i = 0; i < 20; i++) {
					this.chat.dialogs.push({
						id: i,
						group: false,
						cover: '',
						title: this.persons[i],
						open: true,
						task: false,
						active: i === 0 ? true : false,
						messages: [
							{
								text: this.templateMessages[i],
								author: {},
							}
						]
					})
				}
				
			}
		},
		computed: {
		},
		mounted() {
			this.initTestData()
		}
}
// Vue.component('button-counter', {
//   data: function () {
//     return {
//       count: 0
//     }
//   },
//   template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
// })