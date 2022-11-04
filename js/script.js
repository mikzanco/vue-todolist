const{createApp} = Vue;

createApp({
    data(){
        return{
            logoImg: 'img/logo.png',
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
        
    }
}).mount('#app')