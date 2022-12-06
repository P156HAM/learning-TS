let person: string = 'Hamdi'; 
console.log('Hello ', person, ' it is a great day!');

let index: number = 2;

interface User {
    name: string;
    id: number
}

const user: User = {
    name: 'Hamdi',
    id: 2
}

console.log(user);

class userAccount {
    name: string; 
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id
    }
}

const user1: User = new userAccount('Hamdi', 2);
console.log(user1);