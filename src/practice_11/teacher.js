
import Person from './person'
class Teacher extends Person {
    constructor(id,name, age,klasses) {
        super(id,name, age)
        this.klasses = klasses
    }
    introduce() {
        return super.introduce() + ` I am a Teacher. I teach ${this.klasses&&this.klasses.length>0 ? 'Class '+ this.klasses.map(item=>item.number).join(", ") :'No Class'}.`
    }
    
}
export default Teacher







