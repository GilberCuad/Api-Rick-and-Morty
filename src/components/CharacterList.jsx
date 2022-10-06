import React from 'react';
import { useEffect, useState } from 'react';
import Character from './Character'
import './CharacterList.css'

function NavPage() {
    return (
        <div className='conten_boton'>
            <button className='btn_next'>Next
                <div class="icono">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </div>
            </button>

            {/* <div className='conten_input'>
                <input className='input' type='text'></input>
            </div> */}
        </div>


    )
}

const CharacterList = () => {

    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchdata() {
            const response = await fetch('https://rickandmortyapi.com/api/character?page=1');
            const data = await response.json();
            setLoading(false)
            setCharacters(data.results); // para que solo me traiga results de toda la data, (GUARDAMOS EL ARREGLO EN UNA DE LAS VARIABLES QUE CONTIENE USESTATE())
        }
        fetchdata()
    }, []);

    return (
        <div>
            <NavPage />

            <div className='Conten_princi'>
                {
                    characters.map(character => {
                        return (
                            // <Character id={character.id} name={character.name} image={character.image} />
                            <Character key={character.id} character_person={character} />
                        )
                    })
                }

            </div>
        </div>
    );
};

export default CharacterList;

//rsc