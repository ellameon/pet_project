import {runInAction} from "mobx";
import {personStore} from "../store/PersonStore";


export const deletePersonService = (id: string) => {
    runInAction(() => {

        const personIndex = personStore.persons.findIndex((person) => person.id === id)

        const deletePersonArray = personStore.persons
        deletePersonArray.splice(personIndex, 1)
        personStore.persons = deletePersonArray
    })
}