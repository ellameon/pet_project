import {addPersonStore} from "../store/AddPersonStore";
import {Person} from "../model/Person";
import {personStore} from "../store/PersonStore";
import {runInAction} from "mobx";


export const addPersonService = () => {
    runInAction(() => {

        const newPerson: Person = {
            id:3,
            name: addPersonStore.name,
            surname: addPersonStore.surname,
            address: addPersonStore.address,
            phone: addPersonStore.phone,
            email: addPersonStore.email ?? ""
        }


        const newPersonArray = personStore.persons
        newPersonArray.push(newPerson)
        personStore.persons = newPersonArray


        addPersonStore.name = ''
        addPersonStore.surname = ''
        addPersonStore.address = ''
        addPersonStore.phone = ''
        addPersonStore.email = ''
})

}


