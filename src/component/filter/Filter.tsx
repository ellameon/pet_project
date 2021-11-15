import React from "react";


export const Filter = () => {
    return <>
        <div className="container row justify-content-around align-content-md-around">
            <div className="col">
                <div className="dropdown">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        Сортировка
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">По имени</a></li>
                        <li><a className="dropdown-item" href="#">По фамилии</a></li>
                        <li><a className="dropdown-item" href="#">По адресу</a></li>
                        <li><a className="dropdown-item" href="#">По телефону</a></li>
                        <li><a className="dropdown-item" href="#">По e-mail</a></li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <div className="input-group flex-nowrap">
                    <span className="input-group-text">Поиск</span>
                    <input className="form-control" type="text" placeholder="Что ищем?"/>
                </div>
            </div>
        </div>
    </>
}