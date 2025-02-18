class UserModel{
    userId :string
    email :string
    password :string
    role :string

    constructor(userId: string, email: string, password: string, role: string) {
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}

export default UserModel;