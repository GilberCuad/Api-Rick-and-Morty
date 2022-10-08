// import character from '../src/components/Character' // {} Alfonso
import Windowmodal from './windowModal';
import styled from 'styled-components'
import { useState } from 'react';
import './Character.css'

function Character({ id, name, image, status, species, gender, location, origin }) {

    const [estadoModal1, setestadoModal1] = useState(false);

    return (
        <div className="Conten_character" key={id}>

            <Windowmodal
                estado={estadoModal1}
                cambiarEsrado={setestadoModal1}>
                <Contenido>
                    <div>
                        <img src={image}></img>
                    </div>
                    <div>
                        <p>Name: {name}</p>
                        <p>Status: {status}</p>
                        <p>Specie: {species}</p>
                        <p>Gender: {gender}</p>
                        <p>Location: {location}</p>
                        <p>Origin: {origin.type}</p>
                    </div>
                </Contenido>
            </Windowmodal>

            <div className='Content_Target' onClick={() => setestadoModal1(!estadoModal1)} >
                <h2>{name}</h2>
                <img className={status === 'Alive' ? 'Img_Target' : 'Img_Target1'} src={image} />


                {/* <h2>{character_person.name}</h2> */}
                {/* <p style={{ color: active ? "inline" : "none" }}>{character_person.status}</p> */}
                {/* <img className='Img_Target' src={character_person.image} /> */}
            </div>



        </div>
    )
}

export default Character;

const Contenido = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 3fr);
  color: #FFFFFF;
  gap: 30px;


  img {
    border-radius: 8px;
  }
`