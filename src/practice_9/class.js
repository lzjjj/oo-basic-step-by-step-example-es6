class Class {
    constructor(number) {
        this.member = []
        this.number = number
    }
    getDisplayName() {
        return `Class ${this.number}`
    }
    assignLeader(student){
        if(student.klass ===this){
            this.leader = student
        } else{
            console.log('It is not one of us.')
        }
    }
    appendMember(student){
        this.member.push(student)
        student.klass = this
    }
}
export default Class


