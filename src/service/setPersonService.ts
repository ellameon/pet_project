import {addPersonStore} from "../store/AddPersonStore";
import {Person} from "../model/Person";
import {personStore} from "../store/PersonStore";
import {runInAction} from "mobx";


export const setPersonService = () => {
    runInAction(() => {
        if (!isPersonValid()) {
            return
        }
        if (!isPhoneValid()) {
            return;
        }
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

function isPersonValid() {
    if (!addPersonStore.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        addPersonStore.isEmailValid = false
        return false
    }
    return true
}
function isPhoneValid() {
    if (!addPersonStore.phone.match(/^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/)) {
        addPersonStore.isPhoneValid = false
        return false
    }
    return true
}


