import { Coursestud } from "./coursestud";

export interface Student{
    name: string;
    age: number;
    batch: string;
    dept: string;
    regn: string;
    roll: string;
    email: string;
    subjects: [Coursestud]
}
