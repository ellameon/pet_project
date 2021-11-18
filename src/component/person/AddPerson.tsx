import React, {ChangeEvent, useCallback} from "react";
import {addPersonStore} from "../../store/AddPersonStore";
import {PersonController} from "../../controller/PersonController";
import {observer} from "mobx-react";


export const AddPerson = observer(function AddPerson() {
    const {
        name,
        surname,
        address,
        email,
        phone,
        isEmailValid,
        isPhoneValid,
        isSurnameValid,
        isNameValid
    } = addPersonStore
    const phoneClasses = "form-control" + (isPhoneValid ? "" : " is-invalid")
    const emailClasses = "form-control" + (isEmailValid ? "" : " is-invalid")
    const nameClasses = "form-control" + (isNameValid ? "" : " is-invalid")
    const surnameClasses = "form-control" + (isSurnameValid ? "" : " is-invalid")

    const isNameEmpty: boolean = addPersonStore.name.length === 0
    const isSurnameEmpty = addPersonStore.surname.length === 0
    const isEmailEmpty = addPersonStore.email.length === 0
    const isPhoneEmpty = addPersonStore.phone.length === 0

    const isDisabled = !isPhoneValid
        || !isEmailValid
        || !isNameValid
        || !isSurnameValid
        || isNameEmpty
        || isSurnameEmpty
        || isEmailEmpty
        || isPhoneEmpty

    const addPerson = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        PersonController.addPerson()
    }, [])
    const onChangeName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value
        PersonController.setName(name)
    }, [])
    const onChangeSurname = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const surname = event.target.value
        PersonController.setSurname(surname)
    }, [])
    const onChangeAddress = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const address = event.target.value
        PersonController.setAddress(address)
    }, [])
    const onChangePhone = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const phone = event.target.value
        PersonController.setPhone(phone)
    }, [])
    const onChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value
        PersonController.setEmail(email)
    }, [])

    return <>
        <div className="card">
            <div className="card-header">Добавление новой записи</div>
            <div className="card-body row">
                <div className="col-3">
                    <div className="input-group mb-3">
                        <input type="file" className="form-control"/>
                    </div>
                </div>
                <div className="col">
                    <div className="">
                        <span>Введите имя</span>
                        <span className="required">*</span>
                    </div>
                    <input onChange={onChangeName} value={name}
                           type="text" className={nameClasses} aria-label="Имя пользователя"
                           aria-describedby="addon-wrapping" required={true}/>
                    <div className="">
                        <span>Введите фамилию</span>
                        <span className="required">*</span>
                    </div>
                    <input onChange={onChangeSurname} value={surname}
                           type="text" className={surnameClasses} aria-label="Имя пользователя"
                           aria-describedby="addon-wrapping" required={true}/>
                    <div className="">
                        <span>Введите адрес</span>
                    </div>
                    <input onChange={onChangeAddress} value={address}
                           type="text" className="form-control" aria-label="Имя пользователя"
                           aria-describedby="addon-wrapping"/>
                    <div className="">
                        <span>Введите телефон</span>
                        <span className="required">*</span>
                    </div>
                    <input onChange={onChangePhone} value={phone}
                           type="text" className={phoneClasses} aria-label="Имя пользователя"
                           aria-describedby="addon-wrapping"/>
                    <div className="">
                        <span>Введите e-mail</span>
                        <span className="required">*</span>
                    </div>
                    <input onChange={onChangeEmail} value={email}
                           type="text" className={emailClasses} aria-label="Имя пользователя"
                           aria-describedby="addon-wrapping"/>
                </div>
            </div>
        </div>
        <div className="row  justify-content-center">
            <div className="col-2">
                <button onClick={addPerson} type="submit"
                        disabled={isDisabled}
                        className="btn btn-outline-secondary ">Сохранить
                </button>
            </div>
        </div>
    </>
})