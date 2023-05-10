Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
        }
    },
    computed: {
        box() {
            return {
                transform: `
                        perspective(${this.perspective}px)
                    rotateX(${this.rotateX}deg)
                    rotateY(${this.rotateY}deg)
                    rotateZ(${this.rotateZ}deg)
                `
            }
        },
css() {
            return `transform:${this.box.transform};`
        }
    },
    methods: {
        reset() {
            this.perspective = 100
            this.rotateX = 0
            this.rotateY = 0
            this.rotateZ = 0
        },
        async copy() {
            await navigator.clipboard.writeText(this.css)

            alert("CSS Copied to Clipboard!")
        }
        }
}).mount('#app')