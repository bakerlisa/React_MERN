import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CountDown from '../components/CountDown';
import CountUp from '../components/CountUp';
import Delete from '../components/Delete';
import styled from '../css/Home.module.css'

const Home = (props) => {
    const [bread, setBread] = useState([]);

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
                                <CountUp indx={i} bread={bread} setBread={setBread}/>
                                <CountDown indx={i} bread={bread} setBread={setBread} />
                                <Delete indx={i} bread={bread} />
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Home;