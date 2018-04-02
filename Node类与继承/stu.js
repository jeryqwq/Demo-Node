function User(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.enter = function () {
        console.log(this.id + this.name+this.age+"½øÈëÍ¼Êé¹İ");
    }
}
module.exports = User;