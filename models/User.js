const db = new Map();

class User {
    constructor({firstName, lastName, email, password, isSubscribed}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.isSubscribed = isSubscribed;
        this.createdAt = new Date();
        this.userId = db.size + 1
    }

    addUser() {
        db.set(this.userId, this);
    }

    updateUser(newData) {
        db.set(this.userId, {...this, ...newData})
    }

    static findUser(userId) {
        return db.get(userId);
    }

    static findAll() {
        return [...db.values()];
    }

    deleteUser() {
        return db.delete(this.userId);
    }
}

module.exports = User;