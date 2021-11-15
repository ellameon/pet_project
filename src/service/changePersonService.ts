import {runInAction} from "mobx";
import {personStore} from "../store/PersonStore";
import {addPersonStore} from "../store/AddPersonStore";

export const changePersonService = (id: string) => {
    runInAction(() => {

        const personIndex = personStore.persons.findIndex((person) => person.id === id)

        addPersonStore.id = id
        addPersonStore.name = personStore.persons[personIndex].name
        addPersonStore.surname = personStore.persons[personIndex].surname
        addPersonStore.address = personStore.persons[personIndex].address
        addPersonStore.phone = personStore.persons[personIndex].phone
        addPersonStore.email = personStore.persons[personIndex].email ?? ""

    })
}
