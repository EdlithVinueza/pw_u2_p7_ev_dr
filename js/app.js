const lista =[]

const app = Vue.createApp({

    methods: {
        guardar() {
            if (this.nombre && this.apellido && this.hobby && this.lugar) {
                this.lista.push({
                    nombre: this.nombre,
                    apellido: this.apellido,
                    hobby: this.hobby,
                    lugar: this.lugar
                });
                this.nombre = null;
                this.apellido = null;
                this.hobby = null;
                this.lugar = null;
            }
        }
    },
    data() {
        return {
            nombre: '',
            apellido: '',
            hobby: '',
            lugar: '',
            lista: lista 
        };
    }
}).mount('#app');