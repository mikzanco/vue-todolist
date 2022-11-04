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
                this.tasks.splice(index, 1);
            }else{
                console.log('error');
                this.errorString = 'Attento devi fare il task prima di eliminarlo'
            }
        },
        createTask(){
            this.errorString ='';
            if(this.newMessageString < 5){
                this.errorString = 'Attenzione la task aggiunta ha meno di 5 caratteri e non va bene';
            }else{
                const newTask ={
                    text: this.newMessageString,
                    done: false,
                }
                this.tasks.unshift(newTask);
                this.newMessageString = '';
            }
        }
        
    }
}).mount('#app')