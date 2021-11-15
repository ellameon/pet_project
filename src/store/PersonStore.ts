import {observable} from "mobx"
import {Person} from "../model/Person"

export interface PersonStore {
    persons: Array<Person>,
    lastPersonId: string
}

const defaultPerson: Person = {
    id: "1",
    name: "Andrew",
    surname: 'Volkov',
    phone: '89765432121',
    address: 'Spb',
    email: 'example@mail.com',
    sex: 'male'
};

// const defaultPerson2: Person = {
//     id: 2,
//     name: "Andrew",
//     surname: 'Volkov',
//     phone: '89765432121',
//     address: 'Spb',
//     email: 'example@mail.com',
//     sex: 'male'
// };

export const personStore = observable<PersonStore>({
    persons: [defaultPerson ],
    lastPersonId: "1",
})

