import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '../css/HomeStyles.module.css'
import Delete from '../components/Delete';

const Home = (props) => {
    const [team, setTeam] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/teams').then(response=>{
            setTeam(response.data.teams);
        })
    }, [team]);

    
    return(
        <div>
            <nav className="navTwo">
                <Link to="/players/list">List</Link>
                <Link to="/players/addplayer">Add Player</Link>
            </nav>
            <div className="container">
                <div className={styled.titleWrp}>
                    <p className="title">Name</p>
                    <p className="position">Position</p>
                    <p className="action">Action</p>
                </div>
                <div>
                    {
                        team.map((item,i) => {
                            return <div key={i}  className={styled.subTtleWrp}><p> {item.name} </p><p> {item.position} </p> <Delete id={item._id} team={team} setTeam={setTeam} /> </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;