class Instructor {
    name;
    designation = 'Web Course Instructor'
    location;
    team = 'web team'

    constructor(name, location) {
        this.name = name
        this.location = location
    }
    startSupportSession(time) {
        console.log(`Start support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`create quiz for module ${module}`)
    }

}
const aamir = new Instructor('aamir', 'dhaka')
console.log(aamir)
aamir.startSupportSession('11.00');
aamir.createQuiz(30);

const solaiman = new Instructor('Solaiman Khan', 'Mumbai')
console.log(solaiman);