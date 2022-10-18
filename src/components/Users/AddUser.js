import React, { useState } from "react";
import Button from "../Ui/Button";
import Card from "../Ui/Card";
import ErrorModal from "../Ui/ErrorModal";
import styles from "./AddUser.module.css"

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().lenth === 0) {
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
        setEnteredAge('')
        setEnteredUsername('')
        props.onAddUser( enteredUsername, enteredAge)
        console.log(enteredUsername, enteredAge)
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        console.info("dismiss action perform")
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModal onDismiss={errorHandler} title={error.title} message={error.message} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="text"
                        value={enteredUsername}
                        onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age" 
                        type="number"
                        value={enteredAge}
                        onChange={ageChangeHandler} />
                    <Button 
                        type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
};

export default AddUser;