import React from 'react'
import { useDispatch } from 'react-redux'
import {creators} from '../state/index'
import { bindActionCreators } from 'redux'

const Home = () => {

const dispatch = useDispatch()
const {withdrawMoney , depositMoney} = bindActionCreators(creators, dispatch);

  return (
    <div>
    <div className='h3'><h3>Deposit / Withdraw Money </h3> </div> 
    <div className='depo'>
      <button className='btn1'onClick={()=>{withdrawMoney(100)}}>-</button>
      <h4>Update</h4>
      <button className='btn2'onClick={()=>{depositMoney(100)}}>+</button>
    </div>
    </div>
  )
}

export default Home
