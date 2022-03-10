export interface User {
    id: string;
    mail: string;
    firstname: string;
    lastname: string;
    password: string;
    address: string;
    rate: number;
    isBan: boolean;
}

export interface Category {
    id: number;
    name: string;
}
