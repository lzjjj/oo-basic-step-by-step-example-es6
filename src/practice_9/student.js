import Person from './person'
class Student extends Person {
    constructor(id,name, age, klass) {
        super(id,name, age)
        this.klass = klass
    }
    introduce() {
        let str = ` I am at Class ${this.klass.number}.`
        if(this.klass.leader&&this.equal(this.klass.leader)){
            str = ` I am Leader of Class ${this.klass.number}.`
        }
        return super.introduce() + ` I am a Student.${str}`
    }
    equal(student){
        if(this.id ===student.id){
            return true
        }
        return false
    }
}
export default Student





