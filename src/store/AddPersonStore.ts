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
    isNameValid: boolean
    isSurnameValid: boolean
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
    isNameValid: true,
    isSurnameValid: true
})
