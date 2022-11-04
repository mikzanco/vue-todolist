const{createApp} = Vue;

createApp({

    data(){
        return{
            logoImg: 'img/logo.png',
            errorString: '',
            newMessageString: '',
            tasks:[
                {
                    text: 'Portare fuori la spazzatura',
                    done: false
                },
                {
                    text: 'Andare a correre',
                    done: true
                },
                {
                    text: 'Studiare Bootsrap',
                    done: false
                },
            ]
        }
    },
    methods:{
        removeTask(index){
            this.errorString= '';
            if(this.tasks[index].done){
                // se la task risulta svolta (done) va a cancellare la task
                this.tasks.splice(index, 1);
            }else{
                console.log('error');
                // se la task non è ancora stata svolta mi viene riportato un messaggio di errore
                this.errorString = 'Attento devi fare il task prima di eliminarlo'
            }
        },
        createTask(){
            this.errorString ='';
            if(this.newMessageString.length < 5){
                this.errorString = 'Attenzione la task aggiunta ha meno di 5 caratteri e non va bene';
                
                

            }else{

                const isFind = this.tasks.find(item => item.text === this.newMessageString);
                this.errorString ='';
                if (isFind) {
                    // verificare se la nuova task che si va ad inserire è gia presente nelle task e quindi da errore
                    this.errorString = 'Attenzione hai già inseirto questa task!';
                }else{
                    // se non si presentano gli errori di cui sopra va a creare una nuova task con text il nuovo messaggio e con done false
                    const newTask ={
                        text: this.newMessageString,
                        done: false,
                    }
                    // andiamo a posizionare la task nuova in cima alle altre task
                    this.tasks.unshift(newTask);
                    // ripuliamo l'input
                    this.newMessageString = '';

                    
                    
                }
            }
        }
    }
}).mount('#app')