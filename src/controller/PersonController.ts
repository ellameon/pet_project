import {runInAction} from "mobx";
import {addPersonStore} from "../store/AddPersonStore";
import {addPersonService} from "../service/addPersonService";


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
        })
    }



    static addPerson() {
        addPersonService()
    }
}