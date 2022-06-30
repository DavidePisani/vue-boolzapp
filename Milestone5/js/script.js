var app = new Vue({
	el: '#root',
	data: {
		currentUserActive:0,
		currentMenu: null,
		filterText: '',
		newMessage:'',
		contacts: [
			{
				name: 'Michele',
				avatar: '_1',
				visible: true,	
				messages: [
					{
						date: '10/01/2020 15:30:55',
						text: 'Hai portato a spasso il cane?',
						status: 'sent',
						menu: true,
					},
					{
						date: '10/01/2020 15:50:00',
						text: 'Ricordati di dargli da mangiare',
						status: 'sent',
						menu: true,
					},
					{
						date: '10/01/2020 16:15:22',
						text: 'Tutto fatto!',
						status: 'received',
						menu: true,
					}
				],
			},
			{
				name: 'Fabio',
				avatar: '_2',
				visible: true,
				messages: [
					{
						date: '20/03/2020 16:30:00',
						text: 'Ciao come stai?',
						status: 'sent',
						menu: true,
					},
					{
						date: '20/03/2020 16:30:55',
						text: 'Bene grazie! Stasera ci vediamo?',
						status: 'received',
						menu: true,
					},
					{
						date: '20/03/2020 16:35:00',
						text: 'Mi piacerebbe ma devo andare a fare la spesa.',
						status: 'sent',
						menu: true,
					}
				],
			},
			{
				name: 'Samuele',
				avatar: '_3',
				visible: true,
				messages: [
					{
						date: '28/03/2020 10:10:40',
						text: 'La Marianna va in campagna',
						status: 'received',
						menu: true,
					},
					{
						date: '28/03/2020 10:20:10',
						text: 'Sicuro di non aver sbagliato chat?',
						status: 'sent',
						menu: true,
					},
					{
						date: '28/03/2020 16:15:22',
						text: 'Ah scusa!',
						status: 'received',
						menu: true,
					}
				],
			},
			{
				name: 'Luisa',
				avatar: '_6',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						text: 'Lo sai che ha aperto una nuova pizzeria?',
						status: 'sent',
						menu: true,
					},
					{
						date: '10/01/2020 15:50:00',
						text: 'Si, ma preferirei andare al cinema',
						status: 'received',
						menu: true,
					}
				],
				
			},
		],
	
	},
	methods: {
		// funzione per selezionare la chat da aprire
		selectChat(index){
			this.currentUserActive = index;
			// resetto la pagina al click di ogni tente
			this.contacts[this.currentUserActive].messages.forEach((element) =>{
				this.currentMenu = element;
				this.currentMenu.menu = true;
			});
		},
		
		// funzione per mandare un messaggio nella chat 
		addMessages(){
			let currentDate = new Date().toLocaleDateString();
			let currentHours = new Date().toLocaleTimeString();
			const newMessageTrim = this.newMessage.trim()
			if(newMessageTrim.length > 0){
				this.contacts[this.currentUserActive].messages.push(
					{
						date: currentDate + ' ' + currentHours,
						text: newMessageTrim,
						status: 'sent',
						menu: true,	
					}, 
					 
				);
				this.newMessage= '';
				// funzione per ricevere il messaggio dopo 1 secondo
				setTimeout(this.reciveMessage, 1000);				
			}
			
					
		},

		// funzione per ricevere il messaggio 
		reciveMessage(){
			let currentDate = new Date().toLocaleDateString();
			let currentHours = new Date().toLocaleTimeString();
			this.contacts[this.currentUserActive].messages.push(
				{
					date: currentDate + ' ' + currentHours,
					text: 'ok',
					status: 'recived',
					menu: true,
				}, 	 
			);
		},

		// funzione per filtrare i nomi tramite input 
		filterTextElement(){
			const searchText = this.filterText.toLowerCase();

			this.contacts.forEach(contact => {

				const elementText = contact.name.toLowerCase();

					if(elementText.includes(searchText)) {
						contact.visible = true;
					} else {
						contact.visible = false;
					}
				
			});
		},
		// funzione per rimuovere i messaggi della chet 
		removeMessage(index){
			this.contacts[this.currentUserActive].messages.splice(index,1)

		},
		// funzione per visulizzare il menu in toggle
		messageMenu(message){
			if(message.menu === true){
				this.contacts[this.currentUserActive].messages.forEach((element) =>{
					this.currentMenu = element;
					this.currentMenu.menu = true;
				});
	
					message.menu = !this.currentMenu.menu;
					console.log(this.currentMenu.menu)
			}else{
				message.menu = true
			}
			
			if(this.currentUserActive != this.currentUserActive ){
				this.currentMenu.menu = true;
			}
		}

		

	
		

	}
}); 
  


			