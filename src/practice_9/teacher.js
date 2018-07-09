
import Person from './person'
class Teacher extends Person {
    constructor(id,name, age,klass) {
        super(id,name, age)
        this.klass = klass
    }
    introduce() {
        return super.introduce() + ` I am a Teacher. I teach ${this.klass && this.klass.number ? 'Class '+ this.klass.number :'No Class'}.`
    }
    introduceWith(studentJerry) {
        let teachPosition = ''
        if(studentJerry&&studentJerry.klass&&studentJerry.klass.number === this.klass.number){
            teachPosition =  ` I teach ${studentJerry.name}.`
        } else {
            teachPosition =  ` I don't teach ${studentJerry.name}.`
        }
        return super.introduce() + ` I am a Teacher.${teachPosition}`
    }
}
export default Teacher





