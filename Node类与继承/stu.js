function User(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.enter = function () {
        console.log(this.id + this.name+this.age+"����ͼ���");
    }
}
module.exports = User;