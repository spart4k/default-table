// import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.7.14/dist/vue.esm.browser.js'
import message from '../src/components/message/index.js'
import modal from '../src/components/modal/index.js'

new Vue({
		el: '#chat',
		components: {
			message,
			modal,
      VueSlickCarousel: window['vue-slick-carousel'],
      VueMasonryPlugin: window["vue-masonry-plugin"].VueMasonryPlugin
		},
		data: {
			chat: {
				user: {
					id: 777,
					title: 'Алексей Тихонравов',
					avatar: 'https://yt3.googleusercontent.com/oOuggkIDNLwK60lN_W-ZR5p8psudkgU3V7YmcFJj92MX77GzqvonsqwW2qvXfZaR_WlwQTup=s900-c-k-c0x00ffffff-no-rj'
				},
        selectedMessages: [],
				searchField: '',
				dialogs: [],
        answering: false,
        attachment: {
          isShow: false,
          list: [
            {
              label: 'Фотография'
            },
            {
              label: 'Документ'
            }
          ]
        }
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
			],
			emptyMessage: {
				text: ''
			},
      slickOptions: {
        "centerMode": true,
        "infinite": true,
        "focusOnSelect": true,
        "centerPadding": "20px",
        "slidesToShow": 1,
        "variableWidth": true,
        "lazyLoad": "ondemand",
      },
      galleryPopup: {
        isShow: false
      },
      galleryPopupMessage: {
        isShow: false,
        images: []
      }
		},

		methods: {
			even_or_odd(number) {
				return number % 2 === 0 ? true : false
			},
			isYourselfMessage(message) {
				return message.author.id === this.chat.user.id
			},
			initTestData() {
				for (let i = 0; i < 20; i++) {
					this.persons[i].id = i

					const dateBoxes = [
            {
							date: '18 Апреля',
						},
            {
							date: '14 Апреля',
						},
            {
							date: '12 Апреля',
						},
						{
							date: '10 Апреля',
						}
					]
					dateBoxes.forEach((box, indexBox) => {
						const messages = []
						this.templateMessages.forEach((item, index) => {
							// item.id = this.getRandomInt(10000)
							messages.push({
								id: this.getRandomInt(10000),
								text: item + i,
								author: this.even_or_odd(index) ? this.chat.user : this.persons[i],
								time: '20:13',
                choosed: false,
								checked: (indexBox === 0 || indexBox === 1 || indexBox === 2) ? false : true,
                type: 'default',
                attachment: {
                  files: []
                },
                forwards: {
                  messages: []
                }
							})
							box.messages = messages
						})
					})
					const dialog = {
						id: i,
						group: false,
						cover: '',
						// avatar: 'https://media.istockphoto.com/id/476085198/photo/businessman-silhouette-as-avatar-or-default-profile-picture.jpg?s=612x612&w=0&k=20&c=GVYAgYvyLb082gop8rg0XC_wNsu0qupfSLtO7q9wu38=',
						avatar: this.persons[i].avatar,
						title: this.persons[i].title,
						open: true,
						task: false,
						active: i === 0 ? true : false,
						messages: dateBoxes,
						allMessages: [],
						newMessage: {
							text: '',
              type: 'default',
              forwards: {
                messages: []
              },
              attachment: {
                files: []
              }
						},

					}
					const initialValue = []
					const allMessages = dialog.messages.reduce(
						(accumulator, currentValue) => {
							accumulator.push(currentValue.messages.reverse())
							return accumulator
						},
						initialValue
					);
					dialog.allMessages = allMessages.flat()
					this.chat.dialogs.push(dialog)
				}
			},
			openDialog(item) {
				this.chat.dialogs.forEach(element => {
					// ОСТАВИТЬ И ВЕРНУТЬ КОГДА БУДЕТ ПОДКЛЮЧЕН БЕК
					// if (item.id !== element.id) element.active = false
					// else {
					// 	item.active = true
					// }
					let target = document.querySelectorAll('.message')
					target.forEach(el => {
						this.checkMessageObserver.unobserve(el)
					})
					element.active = false

          setTimeout(() => {
						item.active = true
					}, 200)
					setTimeout(() => {
						this.startObservMessage('start')
					}, 500)
				});


			},
			getLastMessage(contact) {
				const lastMessage = contact.messages[0].messages.at(-1)
				return lastMessage
				// .text
			},
			clearSearch() {
				this.chat.searchField = ''
			},
			sendMessage() {
				if (!this.activeDialog.newMessage.text && !this.activeDialog.newMessage.attachment.files) return
				const lastDateBlock = this.activeDialog.messages.at()
				// Для теста
				const newId = this.getRandomInt(10000)
				lastDateBlock.messages.push({
					id: newId,
					text: this.activeDialog.newMessage.text,
          attachment: this.activeDialog.newMessage.attachment,
					// author: this.chat.user,
					author: this.even_or_odd(lastDateBlock.messages.length) ? this.chat.user : this.persons[3],
					time: '20:13',
					checked: false,
          choosed: false,
          type: 'default',
          forwards: {
            messages: this.selectedMessages
          },
				})
        console.log(this.chat.selectedMessages)
				let htmlMessageFounded = undefined
				//const htmlNewMessage = document.querySelectorAll(`[data-message]`)
				//console.log(htmlNewMessage)
				//htmlNewMessage.forEach((elements) => {
				//	console.log(elements)
				//	console.log(elements.getAttribute('message'))
				//	if (elements.getAttribute('message') == newId) [
				//		htmlMessageFounded = elements
				//	]
				//})
				//this.checkMessageObserver.observe(htmlNewMessage)
        this.rejectSelecting()
				this.activeDialog.newMessage = {
          text: '',
          type: 'default',
          attachment: {
            files: []
          }
        }
			},
			getRandomInt(max) {
				return Math.floor(Math.random() * max);
			},
			startObservMessage(mode) {
				let options = {
					root: document.querySelector('.chat-dialog-wrap'),
					rootMargin: '5px',
					threshold: 1
				}

				// функция обратного вызова
				const vm = this
				let scrolled = false
        let firstElFounded = false
        let notCheckedMessage = undefined

        const initialValue = []
        const messagesBox = [
          ...this.activeDialog.messages
        ]
        //const allMessages = messagesBox.reverse().reduce(
        //  (accumulator, currentValue) => {
        //    accumulator.push(currentValue.messages.reverse())
        //    return accumulator
        //  },
        //  initialValue
        //);
        //const dialogAllMessage = allMessages.flat()
        let dialogMessages = document.querySelectorAll('.message')
        dialogMessages = [
          ...dialogMessages
        ]
        dialogMessages.reverse().forEach((item) => {
          const instance = item.__vue__
        })
        notCheckedMessage = dialogMessages.reverse().find((el) => !el.__vue__._props.message.checked)
        if (notCheckedMessage) {
          firstElFounded = true
          if (!scrolled) {
            //setTimeout(() => {
              //notCheckedMessage.scrollIntoView()
            //}, 500)
            scrolled = true
          }
          //message.target.scrollIntoView()
          //scrolled = true
        }
				let callback = function(entries, observer){
					entries.forEach(message => {
						// el

						const id = message.target.dataset.message
						// console.log(vm.activeDialog)
						const findMessage = vm.activeDialog.allMessages.find(el => el.id === +id)
						//notCheckedMessage = vm.activeDialog.allMessages.find(el => !el.checked)

						//if (!firstElFounded) {
						//	if (!scrolled) {
						//		console.log(scrolled)
						//		message.target.scrollIntoView()
						//		scrolled = true
						//	}
						//	firstElFounded = true

						//} else {

						//}
						if (message.isIntersecting) {
							setTimeout(() => {
								if (!findMessage.checked) {
									findMessage.checked = true
								}
							}, 500)
						}

					})
				}

				// наблюдатель
				this.checkMessageObserver = new IntersectionObserver(callback, options)

				if (mode === 'start') {
					let target = document.querySelectorAll('.message')
					target.forEach(el => {
						this.checkMessageObserver.observe(el)
						setTimeout(() => {
							this.checkMessageObserver
						}, 3000)
					})
					// console.log(target)
					// observer.observe(target)
				}

			},
			chooseMessage(message) {
        //if ()
        message.choosed = true
        //this.chat.selectedMessages.push(message)
			},
      chooseMessageOther(message) {
        if (message.choosed) {
          message.choosed = false
          const foundedMessage = this.chat.selectedMessages.find(el => el.id === message.id)
          const foundedIndex = this.chat.selectedMessages.indexOf(foundedMessage)
          this.chat.selectedMessages.splice(foundedIndex, 1)
        } else {
          message.choosed = true
          this.chat.selectedMessages.push(message)
        }
      },
      removeMessage() {
        const vm = this
        vm.selectedMessages.forEach((choosedMessage) => {
          vm.activeDialog.messages.forEach((box) => {
            const findMessage = box.messages.find((el) => el.id === choosedMessage.id)
            if (findMessage) {
              const messageIndex = box.messages.indexOf(findMessage)
              box.messages.splice(messageIndex, 1)
            }
          })
        })
      },
      answerMessage() {
        this.chat.answering = true
      },
      closeAnswering() {
        this.chat.answering = false
      },
      rejectSelecting() {
        this.activeDialog.allMessages.forEach((message) => {
          message.choosed = false
        })
      },
      openAttachment() {
        //this.chat.attachment.isShow = true

        if (this.chat.attachment.isShow) this.chat.attachment.isShow = false
        else {
          this.chat.attachment.isShow = true
        }
        //if (!this.chat.attachment.isShow) this.chat.attachment.isShow = false
        //else {
        //  this.chat.attachment.isShow = true
        //}

      },
      loadAttachment(newFiles) {
        const files = newFiles.target.files
        console.log(files)
        const vm = this

        Array.from(files).forEach(file => {
          console.log(file)
          let src = ''
          let type = ''
          const reader = new FileReader();
          reader.onload = function(event) {
            let objectFile = {}
            if (vm.isFileImage(file)) {
              src = event.target.result;
              type = 'image'
            } else if (vm.isFileVideo(file)) {
              src = event.target.result;
              type = 'video'
            } else {
              src = '/src/assets/images/coverDocument.png'
              type = 'other'
            }

            console.log(src)
            //if (!vm.isFileImage(file))
            objectFile = {
              file,
              type,
              src
            }
            vm.activeDialog.newMessage.attachment.files.push(objectFile)
          };
          reader.readAsDataURL(file);


        });
      },
      closeAttachment() {
        this.activeDialog.newMessage.attachment.files = []
      },
      isFileImage(file) {
        return file && file['type'].split('/')[0] === 'image';
      },
      isFileVideo(file) {
        return file && file['type'].split('/')[0] === 'video';
      },
      //async uploadDocuments (event) {

      //  const files = event.target.files
      //  console.log(files)
      //  const filePromises = files.map((file) => {
      //    // Return a promise per file
      //    return new Promise((resolve, reject) => {
      //      const reader = new FileReader();
      //      reader.onload = async () => {
      //        try {
      //          const response = await this.submitFile(
      //            reader.result,
      //            file.name,
      //            fileType
      //          );
      //          // Resolve the promise with the response value
      //          resolve(response);
      //        } catch (err) {
      //          reject(err);
      //        }
      //      };
      //      reader.onerror = (error) => {
      //        reject(error);
      //      };
      //      reader.readAsDataURL(file);
      //    });
      //  });

      //  // Wait for all promises to be resolved
      //  const fileInfos = await Promise.all(filePromises);

      //  console.log('COMPLETED');

      //  // Profit
      //  console.log(fileInfos)
      //  return fileInfos;
      //}
      removeAttachment(file) {
        //this.activeDialog.newMessage.attachment.files
        this.activeDialog.newMessage.attachment.files.splice(file.index, 1)
      },
      openGalleryPopup() {
        this.galleryPopup.isShow = true
        setTimeout(() => {
          console.log(this.$refs.GallerySlick)
        }, 500)
      },
      hideGalleryPopup() {
        this.galleryPopup.isShow = false
      },
      loadImageMessage(message, index) {

        console.log(message, index)
        this.galleryPopupMessage.images = message.attachment.files
        this.galleryPopupMessage.isShow = true
        setTimeout(() => {
          console.log(this.$refs.messageGallerySlick)
          this.$refs.messageGallerySlick.goTo(index)
        }, 100)

      },
      hideImageGalleryMessage() {
        this.galleryPopupMessage.isShow = false
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
      selectedMessages() {
        const choosed = []
        console.log(this.activeDialog.messages)
        this.activeDialog.messages.forEach((box) => {
          box.messages.forEach((message) => {
            if (message.choosed) choosed.push(message)
          })
        })
        return choosed
      },
      transitionDialogHeader() {
        if (this.selectedMessages.length) {
          return 'chat-fade'
        } else {
          if (this.chat.answering) this.chat.answering = false
          return 'chat-fade-out'

        }
      },
      imagesInNewMessage() {
        const vm = this
        const isImages = this.activeDialog.newMessage.attachment.files.filter((el) => vm.isFileImage(el.file) || vm.isFileVideo(el.file))
        return isImages
      },
      afterChange(event) {
        console.log(event)
      }
		},
		watch: {
			'chat.searchField': function(newVal, oldVal) {
			}
		},
		async mounted() {
      const data = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('foo');
        }, 1000);
      });
			await this.initTestData()
			setTimeout(() => {
				this.startObservMessage('start')
			}, 500)
		}
})