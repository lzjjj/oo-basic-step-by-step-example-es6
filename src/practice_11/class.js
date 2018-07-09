class Class {
    constructor(number) {
        this.member = []
        this.number = number
        this.handlers = []
    }
    on(eventType,cb) {
        let self = this;
        if(!(eventType in self.handlers)){
            self.handlers[eventType] = [];
        }
        self.handlers[eventType].push(cb);
        return self;
    }
    emit(eventType) {
        let self = this;
        let argsArr = Array.prototype.slice.call(arguments,1);
        for(let i = 0;i<self.handlers[eventType].length;i++){
            self.handlers[eventType][i].apply(self,argsArr);
        }
        return self;
    }
    getDisplayName() {
        return `Class ${this.number}`
    }
    assignLeader(student) {
        if (student.klass === this) {
            this.leader = student
            if('assignLeaderListener' in this.handlers){
                this.emit('assignLeaderListener',student)
            }
        } else {
            console.log('It is not one of us.')
        }
    }
    appendMember(student) {
        this.member.push(student)
        if('assignJoinListener' in this.handlers){
            this.emit('assignJoinListener',student)
        }
        
        student.klass = this
        
    }
    registerAssignLeaderListener(teacher) {
        this.on('assignLeaderListener',(student)=>{
            console.log(`I am ${teacher.name}. I know ${student.name} become Leader of Class ${student.klass.number}.`)
        })
    }
    registerJoinListener(teacher){
        this.on('assignJoinListener',(student)=>{
            console.log(`I am ${teacher.name}. I know ${student.name} has joined Class ${this.number}.`)
        })
    }
}
export default Class




