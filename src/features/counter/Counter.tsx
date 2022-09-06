import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    decrementByAmount,
    selectCount,
} from './counterSlice';
import styles from './Counter.module.css';
import p4logo from "../../p4logo.png"

export function Counter() {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    const [upgradeClickerValue,setUpgradeClickerValueAmount] = useState(5);
    const [incrementAmount, setIncrementAmount] = useState(1);
    const [autoClick, setAutoClick] = useState(false)
    const [upgradeAutoClickAmount, setUpgradeAutoClickAmount] = useState(50000);

    const incrementValue = Number(incrementAmount) || 0;

    const handleUpgradeClicker = () => {
        if(count >= upgradeClickerValue){
            dispatch(decrementByAmount(upgradeClickerValue))
            setUpgradeClickerValueAmount(upgradeClickerValue * 4)
            setIncrementAmount(incrementAmount+incrementAmount * 2)
        }
    }

    const handleAutoClick = () => {
        if (count >= upgradeAutoClickAmount) {
        setAutoClick(true);
        setUpgradeAutoClickAmount(upgradeAutoClickAmount*2)
        setInterval(() => {
            dispatch(incrementByAmount(incrementAmount))
        }, 2000)
    }
    }


    return (
        <div>
            <div className={'upgradeRow'}>
                <div className={'upgradeClicker'}>
                    <button onClick={handleUpgradeClicker}> Upgrade Clicker</button>
                    <label>{upgradeClickerValue}</label>
                </div>
                <div className={'autoClicker'}>
                    <button onClick={handleAutoClick}> Buy AutoClick </button>
                    <label>{upgradeAutoClickAmount}</label>
                </div>
            </div>
            <div>
                <img src={p4logo} className="App-logo" alt="logo" onClick={() => dispatch(incrementByAmount(incrementAmount))} draggable={false}/>
            </div>
            <div className={styles.row}>
                {/*<button*/}
                {/*  className={styles.button}*/}
                {/*  aria-label="Decrement value"*/}
                {/*  onClick={() => dispatch(decrement())}*/}
                {/*>*/}
                {/*  -*/}
                {/*</button>*/}
                <span className={styles.value}>{count}</span>
                {/*<button*/}
                {/*  className={styles.button}*/}
                {/*  aria-label="Increment value"*/}
                {/*  onClick={() => dispatch(increment())}*/}
                {/*>*/}
                {/*  +*/}
                {/*</button>*/}
            </div>
            {/*<div className={styles.row}>*/}
            {/*  <input*/}
            {/*    className={styles.textbox}*/}
            {/*    aria-label="Set increment amount"*/}
            {/*    value={incrementAmount}*/}
            {/*    onChange={(e) => setIncrementAmount(e.target.value)}*/}
            {/*  />*/}
            {/*  <button*/}
            {/*    className={styles.button}*/}
            {/*    onClick={() => dispatch(incrementByAmount(incrementValue))}*/}
            {/*  >*/}
            {/*    Add Amount*/}
            {/*  </button>*/}
            {/*  <button*/}
            {/*    className={styles.asyncButton}*/}
            {/*    onClick={() => dispatch(incrementAsync(incrementValue))}*/}
            {/*  >*/}
            {/*    Add Async*/}
            {/*  </button>*/}
            {/*  <button*/}
            {/*    className={styles.button}*/}
            {/*    onClick={() => dispatch(incrementIfOdd(incrementValue))}*/}
            {/*  >*/}
            {/*    Add If Odd*/}
            {/*  </button>*/}
            {/*</div>*/}
        </div>
    );
}
