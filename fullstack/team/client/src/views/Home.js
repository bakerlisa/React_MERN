import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '../css/HomeStyles.module.css'
import Delete from '../components/Delete';
import NavThree from '../components/NavThree';

const Home = (props) => {
    const [team, setTeam] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/teams').then(response=>{
            setTeam(response.data.teams);
        })
    }, [team]);

    
    return(
        <div>
            <NavThree />
            <div className="container">
                {
                    team.length ? <><div className={styled.titleWrp}>
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
                </div></>
                    : <><h3>No players have been added</h3> <Link to="/players/addplayer" className="button-lg">Add Team Member</Link></>
                }
                    
                    
            </div>
        </div>
    )
}

export default Home;