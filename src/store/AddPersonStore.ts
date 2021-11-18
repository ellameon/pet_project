import {observable} from "mobx";

export interface AddPersonStore {
    id: string
    name: string
    surname: string
    address: string
    phone: string
    email: string
    isEmailValid: boolean
    isPhoneValid: boolean
    isValid: boolean
}

export  const addPersonStore = observable<AddPersonStore> ({
    id: "0",
    name: '',
    surname: '',
    address: '',
    phone: '',
    email: '',
    isEmailValid: true,
    isPhoneValid: true,
    isValid: true
})
