import {runInAction} from "mobx";
import {addPersonStore} from "../store/AddPersonStore";
import {setPersonService} from "../service/setPersonService";
import {deletePersonService} from "../service/deletePersonService";
import {changePersonService} from "../service/changePersonService";


export class PersonController {

    static setName(name: string) {
        runInAction(() => {
            addPersonStore.name = name
        })
    }
    static setSurname(surname: string) {
        runInAction(() => {
            addPersonStore.surname = surname
        })
    }
    static setAddress(address: string) {
        runInAction(() => {
            addPersonStore.address = address
        })
    }
    static setPhone(phone: string) {
        runInAction(() => {
            addPersonStore.phone = phone
        })
    }
    static setEmail(email: string) {
        runInAction(() => {
            addPersonStore.email = email
            addPersonStore.isEmailValid = true
        })
    }
    static addPerson() {
        setPersonService()
    }
    static deletePerson(personId: string) {
        deletePersonService(personId)
    }
    static changePerson(personId: string) {
        changePersonService(personId)
    }
}