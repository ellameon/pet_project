import {addPersonStore} from "../store/AddPersonStore";
import {Person} from "../model/Person";
import {personStore} from "../store/PersonStore";
import {runInAction} from "mobx";


export const setPersonService = () => {
    runInAction(() => {



        if (addPersonStore.id === "0") {
            addPerson()
            clearAddPersonStore()
        } else {
            updatePerson()
            clearAddPersonStore()
        }
    })
}

function addPerson() {
    const newPerson: Person = {
        id: (parseInt(personStore.lastPersonId) + 1).toString(),
        name: addPersonStore.name,
        surname: addPersonStore.surname,
        address: addPersonStore.address,
        phone: addPersonStore.phone,
        email: addPersonStore.email ?? ""
    }
    const newPersonArray = personStore.persons
    newPersonArray.push(newPerson)
    personStore.persons = newPersonArray
    personStore.lastPersonId = newPerson.id
}

function updatePerson() {
    const person = personStore.persons.find((person) => person.id === addPersonStore.id)
    const personIndex = personStore.persons.findIndex((person) => person.id === addPersonStore.id)
    const changedPerson: Person = {
        id: addPersonStore.id,
        name: addPersonStore.name,
        surname: addPersonStore.surname,
        address: addPersonStore.address,
        phone: addPersonStore.phone,
        email: addPersonStore.email ?? ""
    }
    if (person === undefined) {
        console.log('error')
    } else {
        const changePersonArray = personStore.persons
        changePersonArray.splice(personIndex, 1, changedPerson)
        personStore.persons = changePersonArray
    }
}

function clearAddPersonStore() {
    addPersonStore.id = "0"
    addPersonStore.name = ''
    addPersonStore.surname = ''
    addPersonStore.address = ''
    addPersonStore.phone = ''
    addPersonStore.email = ''
}
