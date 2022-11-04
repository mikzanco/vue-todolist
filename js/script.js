const{createApp} = Vue;

createApp({
    data(){
        return{
            logoImg: 'img/logo.png',
            errorString: '',
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
        }
        
    }
}).mount('#app')