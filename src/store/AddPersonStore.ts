
import {observable} from "mobx";

export interface AddPersonStore {
    name: string
    surname: string
    address: string
    phone: string
    email: string
    // photo: string
}

export  const addPersonStore = observable<AddPersonStore> ({
    name: '',
    surname: '',
    address: '',
    phone: '',
    email: ''
})
