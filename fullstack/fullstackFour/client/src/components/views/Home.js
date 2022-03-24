import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '../css/Home.module.css'

const Home = (props) => {
    const [bread, setBread] = useState([]);

    const [item,setItem] = useState([])

    const countUp = (i) => {
        setItem([])

        setItem({
            ...bread[i],
            amount: bread[i].amount + 1,
            price: bread[i].price / bread[i].amount + bread[i].price 
        })

        const copyingBread = bread
        copyingBread.splice(i,1,item)
        setBread(copyingBread)

        axios.patch(`http://localhost:8000/api/update/product/${bread[i]._id}`,item).then(response=>{
            console.log(response)
        }) 
    }



    const countDown = (i) => {
        setItem([])
        
        const copyBreadState = bread
        var breadPrice = 0;
        var breadAmount = 0;

        if( bread[i].price - (bread[i].price / bread[i].amount) > 0){
            breadPrice = bread[i].price - (bread[i].price / bread[i].amount)
        }else{
            breadPrice = bread[i].price
        }

        if(bread[i].amount - 1 > 0){
            breadAmount= bread[i].amount - 1 
        }else{
            breadAmount = bread[i].amount
        }

        setItem({
            ...bread[i],
            amount: breadAmount,
            price: breadPrice
        })

        copyBreadState.splice(i,1,item)
        setBread(copyBreadState)

        axios.patch(`http://localhost:8000/api/update/product/${bread[i]._id}`,item).then(response=>{
            console.log(response)
        })
        
        
    }

    const onDeleteHandler = (i) => {
        if(window.confirm("Are you sure you want to remove this job?")){ 
            axios.delete(`http://localhost:8000/api/delete/product/${bread[i]._id}`).then(response=>{
                console.log(response)
            })

            const copyBread = bread
            copyBread.splice(i,1)
            setBread(copyBread)
        }
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products').then(response=>{
            setBread(response.data.products);
        })
    }, [bread]);



    

    return(
        <>
            <div className={styled.banner}>
                <h1 className={styled.title}>Bread Bread Bread</h1>
                <p className={styled.subtitle}>From its humble begings to its delicious results. We're here the entire journey</p>
            </div>

            <div className={styled.allBreads}>
                {
                    bread.map((item,i) => {
                        return <div key={i} className={styled.breadBox}>
                            <Link className={styled.title} to={`/product/${item._id}`}>{item.title}</Link>
                            <p className={styled.price}><strong>Price:</strong> ${item.price}</p>
                            <p className={styled.description}>{item.description}</p>
                            <p className={styled.amount}><strong>Amount: </strong> {item.amount} </p>
                            <div className={styled.buttons}>
                                <div onClick={ () => {countUp(i)} }>Add</div>
                                <div onClick={() => {countDown(i)} }>Down</div>
                                <div onClick={() => {onDeleteHandler(i)} }>Delete</div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Home;