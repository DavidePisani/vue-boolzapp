var app = new Vue({
	el: '#root',
	data: {
		currentUserActive:0,
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
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						text: 'Ricordati di dargli da mangiare',
						status: 'sent'
					},
					{
						date: '10/01/2020 16:15:22',
						text: 'Tutto fatto!',
						status: 'received'
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
						status: 'sent'
					},
					{
						date: '20/03/2020 16:30:55',
						text: 'Bene grazie! Stasera ci vediamo?',
						status: 'received'
					},
					{
						date: '20/03/2020 16:35:00',
						text: 'Mi piacerebbe ma devo andare a fare la spesa.',
						status: 'sent'
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
						status: 'received'
					},
					{
						date: '28/03/2020 10:20:10',
						text: 'Sicuro di non aver sbagliato chat?',
						status: 'sent'
					},
					{
						date: '28/03/2020 16:15:22',
						text: 'Ah scusa!',
						status: 'received'
					}
				],
			},
			{
				name: 'Luisa',
				avatar: '_4',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						text: 'Lo sai che ha aperto una nuova pizzeria?',
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						text: 'Si, ma preferirei andare al cinema',
						status: 'received'
					}
				],
				
			},
		],
	
	},
	methods: {
		// funzione per selezionare la chat da aprire
		selectChat(index){
			this.currentUserActive = index;
		},
		
		// funzione per mandare un messaggio nella chat 
		addMessages(){
			let currentDate = new Date().toLocaleDateString();
			let currentHours = new Date().toLocaleTimeString();
			if(this.newMessage.length > 0){
				this.contacts[this.currentUserActive].messages.push(
					{
						date: currentDate + ' ' + currentHours,
						text: this.newMessage,
						status: 'sent'	
					}, 
					 
				),
				this.newMessage= '';				
			}
			// funzione per ricevere il messaggio dopo 1 secondo
			setTimeout(this.reciveMessage, 1000)			
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
				}, 	 
			);
		},
	}
});
  



