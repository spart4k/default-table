import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.esm.browser.js'

new Vue({
		el: '#chat',
		data: {
			chat: {
				user: {
					id: 777,
					title: 'Алексей Тихонравов'
				},
				searchField: '',
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
				{
					id: null,
					title: "Иван Ивановs",
					avatar: 'https://yt3.googleusercontent.com/oOuggkIDNLwK60lN_W-ZR5p8psudkgU3V7YmcFJj92MX77GzqvonsqwW2qvXfZaR_WlwQTup=s900-c-k-c0x00ffffff-no-rj'
				},
				{
					id: null,
					title: "Сергей Петров",
					avatar: 'https://www.purina.ru/sites/default/files/2021-11/shutterstock_1559569190_mobile-min.jpg',
				},
				{
					id: null,
					title: "Надежда Ковалева",
					avatar: 'https://storage-api.petstory.ru/resize/1000x1000x80/85/02/cb/8502cbe6b2b94487b27a344f891adf7d.jpeg',
				},
				{
					id: null,
					title: "Александр Смирнов",
					avatar: 'https://avatars.dzeninfra.ru/get-zen_doc/9648650/pub_6421a79260618029c079083c_6421a7ba6d76ae1a93656eec/scale_1200',
				},
				{
					id: null,
					title: "Евгения Волкова",
					avatar: 'https://s0.rbk.ru/v6_top_pics/media/img/7/19/756752350085197.webp',
				},
				{
					id: null,
					title: "Михаил Белов",
					avatar: 'https://cdn1.ozonusercontent.com/s3/club-storage/images/article_image_752x940/697/c500/e5d7e52e-ab4d-4d1b-80fe-15e99ffbf6b6.jpeg',
				},
				{
					id: null,
					title: "Людмила Шестакова",
					avatar: 'https://rg.ru/uploads/images/214/34/08/photorep_imageid_538385_8085b70e8b6927e1575618884.jpg',
				},
				{
					id: null,
					title: "Дмитрий Федоров",
					avatar: 'https://4lapy.ru/resize/800x390/upload/medialibrary/57f/57f6b5f1098026c9bd9eb47ecb87541b.jpg',
				},
				{
					id: null,
					title: "Мария Кузнецова",
					avatar: 'https://img.gazeta.ru/files3/469/14382469/maxresdefault-pic_32ratio_900x600-900x600-81192.jpg',
				},
				{
					id: null,
					title: "Андрей Гаврилов",
					avatar: 'https://avatars.dzeninfra.ru/get-zen_doc/1877575/pub_5e53d038c0bcaa46a9e77d7d_5e53ea2b11638a2a18c16450/scale_1200',
				},
				{
					id: null,
					title: "Татьяна Николаева",
					avatar: 'https://cdn.iz.ru/sites/default/files/article-2022-05/20210127_gaf_uw8_246.jpg'
				},
				{
					id: null,
					title: "Юрий Степанов",
					avatar: 'https://api.360tv.ru/get_resized/YVy8EPdIOQBRe6258pp1cqiSFSjaXm69urdkyJKaIHE/rs:fill-down:1920:1080/g:fp:0.5:0.5/aHR0cHM6Ly8yNTc4MjQuc2VsY2RuLnJ1L2JhYnlsb24tbWVkaWEvYXJ0aWNsZXMvaW1hZ2UvMjAyMy80L2FuaW1hbC1kcnktd2lsZGxpZmUtZ2lmdC1tYWNyby1yZXB0aWxlLTc1MzAwNi1weGhlcmVjb20uanBn.webp',
				},
				{
					id: null,
					title: "Валентин Краснов",
					avatar: 'https://ethnomir.ru/upload/medialibrary/739/snake.jpg'
				},
				{
					id: null,
					title: "Ольга Захарова",
					avatar: 'https://cdn.iz.ru/sites/default/files/styles/1920x1080/public/article-2020-07/RIAN_2838220.HR_.ru%20%281%29.jpg?itok=6TFv6hlQ'
				},
				{
					id: null,
					title: "Николай Дмитриев",
					avatar: 'https://img.gazeta.ru/files3/226/12880226/Depositphotos_12693208_l-2015-pic905-895x505-10696.jpg'
				},
				{
					id: null,
					title: "Галина Егорова",
					avatar: 'https://www.film.ru/sites/default/files/filefield_paths/lyle1.jpg',
				},
				{
					id: null,
					title: "Анна Макарова",
					avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAFMdxsb4frQKIkXlzkPLCeuuKcit-yI5KQ&usqp=CAU',
				},
				{
					id: null,
					title: "Владимир Богданов",
					avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Oryctolagus_cuniculus_Tasmania_2.jpg/800px-Oryctolagus_cuniculus_Tasmania_2.jpg',
				},
				{
					id: null,
					title: "Павел Волков",
					avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Oryctolagus_cuniculus_Tasmania_2.jpg/800px-Oryctolagus_cuniculus_Tasmania_2.jpg'
				},
				{
					id: null,
					title: "Александр Афанасьев",
					avatar: 'https://tvkrasnodar.ru/upload/resize_cache/webp/iblock/a07/9ibsobyk4gqfdmvffzkzg6lnnrx93m9f.webp',
				}
			]
		},
		
		methods: {
			initTestData() {
				function even_or_odd(number) {
					return number % 2 === 0 ? true : false
				}
				for (let i = 0; i < 20; i++) {
					this.persons[i].id = i
					const messages = []
					this.templateMessages.forEach((item, index) => {
						messages.push({
							text: item + i,
							author: even_or_odd(index) ? this.chat.user : this.persons[i]
						})
					})
					const data = [
						{
							date: '10 Апреля',
							messages
						},
						{
							date: '10 Апреля',
							messages
						},
						{
							date: '10 Апреля',
							messages
						},
						{
							date: '10 Апреля',
							messages
						}
					]
					this.chat.dialogs.push({
						id: i,
						group: false,
						cover: '',
						// avatar: 'https://media.istockphoto.com/id/476085198/photo/businessman-silhouette-as-avatar-or-default-profile-picture.jpg?s=612x612&w=0&k=20&c=GVYAgYvyLb082gop8rg0XC_wNsu0qupfSLtO7q9wu38=',
						avatar: this.persons[i].avatar,
						title: this.persons[i].title,
						open: true,
						task: false,
						active: i === 0 ? true : false,
						messages: data
						// messages: [
						// 	{
						// 		text: this.templateMessages[i],
						// 		author: {
						// 			title: ''
						// 		},
						// 	},
						// 	{
						// 		text: this.templateMessages[i],
						// 		author: {
						// 			title: ''
						// 		},
						// 	},
						// 	{
						// 		text: this.templateMessages[i],
						// 		author: {
						// 			title: ''
						// 		},
						// 	},
						// 	{
						// 		text: this.templateMessages[i],
						// 		author: {
						// 			title: ''
						// 		},
						// 	}
						// ]
					})
				}
				
			},
			openDialog(item) {
				this.chat.dialogs.forEach(element => {
					if (item.id !== element.id) element.active = false
					else {
						item.active = true
					}
				});

			},
			getLastMessage(contact) {
				console.log()
				const lastMessage = contact.messages[contact.messages.length - 1].messages.at(-1)
				return lastMessage.text
				// .text
			}
		},
		computed: {
			activeDialog() {
				return this.chat.dialogs.find(el => el.active)
			},
			searchedContacts() {
				const result =  this.chat.dialogs.filter(el => el.title.includes(this.chat.searchField))
				return result
				
			},
		},
		watch: {
			'chat.searchField': function(newVal, oldVal) {
			}
		},
		mounted() {
			this.initTestData()
		}
})