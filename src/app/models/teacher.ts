import { Coursetcr } from "./coursetcr";

export interface Teacher{
    _id: string;
    name: string;
    age: number;
    dept: string;
    email: string;
    password: string;
    subjects:[Coursetcr];
}
