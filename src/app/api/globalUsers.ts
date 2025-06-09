type User = {
    userID: string;
    name: string; 
    email: string;
    hashedPassword: string;
}

class UserStore {
    private users: User[] = [];
    constructor([arr]) {
        this.users = [arr]
    }
    
    add(newUser: User): void {
        this.users.push(newUser);
    }
    
    find(condition: (user: User) => boolean): User | undefined {
        return this.users.find(condition); 
    }
    
    getAll(): User[] {
        return this.users;
    }
    
    findByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }
    
    getCount(): number {
        return this.users.length;
    }
    
}

const userStore = new UserStore([{"userID":"5156","name":"shashwot","email":"shas@gmail.com","password":"$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/lewdBdXzgVkzPNjSK"}]);
export default userStore;