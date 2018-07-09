
import Person from './person'
class Teacher extends Person {
    constructor(name, age,klass) {
        super(name, age)
        this.klass = klass
    }
    introduce() {
        return super.introduce() + ` I am a Teacher. I teach ${this.klass ? 'Class '+ this.klass :'No Class'}.`
    }
}
export default Teacher


