import React from 'react';
import styles from "./Redux.module.css";
import {useDispatch, useSelector} from "react-redux";
import MyButton from "../UI/button/MyButton";
import {Actions} from "../store/actions/Actions";

const Redux = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash) // Берём переменную из нашего редьюсера
    const customers = useSelector(state => state.customers.customers)

    const addCash = (cash) => {
        dispatch({type: 'ADD_CASH', payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: 'GET_CASH', payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(Actions.addCustomer(customer))
    }

    const removeCustomer = () => {
        const deleteCustomer = customers.filter(customer => customer.id !== customer.id)
        dispatch(Actions.removeCustomerAction(deleteCustomer))
    }

    return (
        <div>
            <div className={styles.counter}>{cash}</div>
            <div className={styles.buttons}>
                <MyButton onClick={() => addCash(Number(prompt()))}>Пополнить счёт</MyButton>
                <MyButton onClick={() => getCash(Number(prompt()))}>Снять со счёта</MyButton>
                <MyButton onClick={() => addCustomer(prompt())}>Добавить клиента</MyButton>
                <MyButton onClick={() => dispatch(Actions.fetchCustomer())}>Добавить клиентов из Api</MyButton>
            </div>
            {customers.length > 0 ?
            <div className={styles.customers}>
                {customers.map(customer =>
                        <div className={styles.customer} key={customers.id}>
                            {customer.name}
                            <MyButton onClick={() => removeCustomer(customer)}>Удалить</MyButton>
                        </div>
                    )}
            </div>
                :
                <div style={{fontSize: '2rem', marginTop:20, textAlign: 'center'}}>
                    Клиенты отсутствуют!
                </div>
            }
        </div>
    );
};

export default Redux;