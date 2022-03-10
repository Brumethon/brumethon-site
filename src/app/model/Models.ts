export interface User {
    mail: string;
    username: string;
    password: string;
    address: string;
}

export interface Category {
    name: string;
}

export interface Referent {
    userId: string;
    categories: Array<Category>;
}

export interface ReferentRequest {
    user: User;
    status: string;
    date: Date;
}