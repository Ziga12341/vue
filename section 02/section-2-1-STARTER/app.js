const vm = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            vueLink: 'https://vuejs.org/'
        }
    }, methods: {
        outputGoal() {
            return `${this.courseGoalA} and ${this.courseGoalB.toUpperCase()}`
        }
    }
}).mount('#app')

//
// setTimeout(function() {
//     vm.courseGoalA = 'Learn Vue!';
// }, 2000);

// Vue.createApp({
//     data() {
//         return {
//             courseGoalA: 'Become no. one programmer',
//             courseGoalB: 'Master beeing a happy person and build amazing apps!',
//         }
//     }
// }).mount('#app2')