import React, {useState, useEffect} from 'react';
//import Form from '../components/Form';
import PlayerList from '../components/PlayerList';
import axios from 'axios';

const Main = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/player')
        .then(res => {
            setPlayers(res.data);
        })
    }, []);

    console.log(players)

    const removeFromDom = (autorId) => {
        setPlayers(players.filter(autor => autor._id !== autorId));
    }

    return (
        <div>
            <PlayerList players ={players} removeFromDom={removeFromDom}/>
        </div>
    );
}
export default Main;