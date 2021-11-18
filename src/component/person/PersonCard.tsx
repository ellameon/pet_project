import React, {useCallback} from "react";
import {Person} from "../../model/Person";
import {observer} from "mobx-react";
import {PersonController} from "../../controller/PersonController";


type Props = {
    person: Person
}

export const PersonCard = observer(function PersonCard(props: Props) {

    const deletePerson = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        PersonController.deletePerson(person.id)
    }, [])
    const changePerson = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        PersonController.changePerson(person.id)
    }, [])

    const person = props.person

    return <>
        <div className="card">
            <div className="card-header">Человек</div>
            <div className="card-body row">
                <div className="col-3">
                    <img className="img-fluid"
                         src="https://www.meme-arsenal.com/memes/6d0fce2ab076987859e93863e01d75f9.jpg" alt={''}/>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <output className="form-control border-0"><h1>{person.name}</h1></output>
                        </div>
                        <div className="col">
                            <output className="form-control border-0"><h1>{person.surname}</h1></output>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <output className="form-control border-0"><h2>{person.phone}</h2></output>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <output className="form-control border-0">{person.address}</output>
                        </div>
                        <div className="col">
                            <output className="form-control border-0">{person.email}</output>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-1">
                        < button onClick={changePerson} className="btn btn-outline-secondary">Изменить</button>
                    </div>
                    <div className="col-1">
                        < button onClick={deletePerson} className="btn btn-outline-secondary">Удалить</button>
                    </div>
                </div>
            </div>

        </div>
    </>
})