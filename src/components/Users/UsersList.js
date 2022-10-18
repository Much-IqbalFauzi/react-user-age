import React from "react";

import Card from "../Ui/Card";
import styles from './UsersList.module.css'

const UsersList = (props) => {

    const onItemClick = id => {
        props.onActionPerform(id)
    }
    
    return <Card className={styles.users}> 
        <ul>
            {props.users.map((user) => (
                <li key={user.id} onClick={() => onItemClick(user.id)}>
                    {user.name} ({user.age} years old)
                </li>
            ))}
        </ul>
    </Card>
}

export default UsersList;