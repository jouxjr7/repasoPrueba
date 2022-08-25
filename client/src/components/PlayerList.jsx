import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Button, Container} from "reactstrap";

const PlayerList = (props) =>{
    const { players,removeFromDom } = props;
  
    
    const deletePlayer = (_id) =>{
        axios.delete('http://localhost:4000/api/player/'+_id)
        .then(res => {
            console.log(res);
            removeFromDom(_id);
        })
        .catch(err => console.log(err))
    }

   
    return (
        <div>
            <div className='general1'>
                <h1>Favorite Authors</h1>
                <Link to={'/new'} className='link'>Add an author</Link>
                <p className='h3Description'>We have quotes by:</p>
            </div>
            <Container>
            <Table className="table table-hover responsive">
                <thead>
                    <tr className="table-secondary">
                        <th style={{textAlign: "center"}}>Player</th>
                        <th style={{textAlign: "center"}}>Position</th>
                        <th scope="col" style={{textAlign: "center"}}>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    players.map((player, idx) =>{
                        return <tr key={idx}>
                            <td>{player.name}</td>
                            <td>{player.posicion}</td>
                            <td>  
                                
                                <Button color="danger" className='btnDelete' onClick={(e) => {
                                     let res=window.confirm("quieres borrar a "+player.name)
                                    if(res){
                                        deletePlayer(player._id);

                                    }
                            }}>Delete</Button>
                            </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
            </Container>
    
        </div>
    );
}
export default PlayerList;