import React from "react";
import {Filter} from "../filter/Filter";
import {PersonCard} from "../person/PersonCard";
import {AddPerson} from "../person/AddPerson";
import {personStore} from "../../store/PersonStore";
import {observer} from "mobx-react";





export const MainScreen = observer(function () {

    const persons = personStore.persons

    return <>
        <Filter/>
        {persons.map((person, index) => (
            <PersonCard key={index}  person={person}/>
        ))}
        <AddPerson/>
    </>
})