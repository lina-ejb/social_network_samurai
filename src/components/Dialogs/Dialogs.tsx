import React, {FC} from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemsType = {
    name: string
    id: string | number
}
type MessageType = {
    message: string
    id: string | number
}

type dialogsDataType = {
    name: string
    _id: number
}
type messagesType = {
    message: string
    _id: number
}
const DialogItems = (props: DialogItemsType) => {
    const path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessageType) => {
    return (
        <div className={s.messages}>
            {props.message}
        </div>
    )
}
const Dialogs = () => {

        const dialogsData: Array<dialogsDataType> = [
            {_id: 1, name: 'Alina'},
            {_id: 2, name: "Andrey"},
            {_id: 3, name: "Helga"},
            {_id: 4, name: "Aleksei"},
            {_id: 5, name: "Volha"}
        ]
        const messagesData: Array<messagesType> = [
            {_id: 1, message: 'Lorem ipsum dolor sit amet, consectetuer'},
            {_id: 2, message: "Aenean massa"},
            {_id: 3, message: "massa Lorem ipsum dolor"},
            {_id: 4, message: "LCum sociis natoque penatibus et magnis dis parturient montes"},
            {_id: 5, message: 'natoque penatibus et magnis'},
        ]

        const mappedDialogs = dialogsData.map((el, index) => (
            <DialogItems name={el.name} id={el._id}/>
        ))

        const mappedMessages = messagesData.map((el, index) => (
            <Message message={el.message} id={el._id}/>
        ))
        return <div className={s.chatContainer}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {mappedDialogs}

                </div>
                <div className={s.messages}>
                    {mappedMessages}
                </div>
            </div>
        </div>


    }
;

export default Dialogs