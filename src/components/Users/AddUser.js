import React, { useState, useRef } from "react";
import Wrapper from "../Helper/Wrapper";
import Button from "../Ui/Button";
import Card from "../Ui/Card";
import ErrorModal from "../Ui/ErrorModal";
import styles from "./AddUser.module.css"

const AddUser = props => {

    const nameInputRef = useRef()
    const ageInputRef = useRef()

    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()
        const enteredName = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value
        if (enteredName.trim().length === 0 || enteredAge.trim().lenth === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please fill all input field!'
            })
            return
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Age Number',
                message: 'Age must be above 0!'
            })
            return 
        }
        props.onAddUser( enteredName, enteredAge)
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }

    const errorHandler = () => {
        console.info("dismiss action perform")
        setError(null)
    }

    return (
        <Wrapper>
            {error && <ErrorModal onDismiss={errorHandler} title={error.title} message={error.message} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="text"
                        ref={nameInputRef} />
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age" 
                        type="number"
                        ref={ageInputRef} />
                    <Button 
                        type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
};

export default AddUser;