import React from 'react';
import { useEffect, useState } from 'react';
import Character from '../character/Character'
import './CharacterList.css'

function NavPage({ page, setpage, search }) {
    return (
        <header id='inicio'>
            <p className='page'>PAGE: {page}</p>
            <div className='conten_boton'>

                <button className='btn_back' onClick={() => {
                    if (page > 1) {
                        setpage(page - 1);
                    }
                }}>
                    <div class="icono">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </div>
                    <span>Back</span>
                </button>

                <button className='btn_next' onClick={() => {
                    if (page < 43) {
                        setpage(page + 1)
                    } else {
                        window.location.reload();
                    }

                }}>
                    <div class="icono">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                        </svg>
                    </div>
                    <span>Next</span>
                </button>
            </div>
        </header>


    )
}

const CharacterList = () => {

    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    // guardaremos el valor de la pagina en un estado para irla cambiando con cada click del boton
    const [page, setpage] = useState(1)
    const [visible, setVisible] = useState(false);
    // con esta linear traeremos lo llamado por el usuario
    const [tableUsers, settableUsers] = useState([]);
    // En la siguiente linea, controlaremos lo escrito por el usuario
    const [search, setSearch] = useState("");
    // const [tableusers, SetTableusers] = useState([]); la usaremos para filtrar informacion en ventana modal


    // ventana modal
    // const [estadoModal1, setestadoModal1] = useState(false);

    const handleChange = e => { // capturamos lo escrito por el usuario
        setSearch(e.target.value)
        filter(e.target.value)
    }

    const filter = (termSearch) => {
        let resultSearch = tableUsers.filter((elemento) => {
            if (elemento.name.toString().toLowerCase().includes(termSearch.toLowerCase())) { // validamos los datos
                return elemento
            }
        });
        setCharacters(resultSearch);
    }

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    useEffect(() => {
        async function fetchdata() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const data = await response.json();
            setLoading(false)
            setCharacters(data.results); // para que solo me traiga results de toda la data, (GUARDAMOS EL ARREGLO EN UNA DE LAS VARIABLES QUE CONTIENE USESTATE())
            settableUsers(data.results);
        }
        fetchdata()
    }, [page]);

    window.addEventListener('scroll', toggleVisible);

    return (

        <div>

            <NavPage page={page} setpage={setpage} search={setSearch} />

            <section className='conten__input'>
                <input name='search' type="search" value={search} className='conten__input-search'
                    placeholder='Search you character'
                    id='busqueda' onChange={handleChange} />
            </section>

            <div className='Conten_princi'>
                {
                    characters.map(character => {
                        return (
                            <Character
                                id={character.id}
                                name={character.name}
                                image={character.image}
                                status={character.status}
                                species={character.species}
                                gender={character.gender}
                                location={character.location.name}
                                origin={character.origin.url} />
                            // <Character key={character.id} character_person={character} />
                        )
                    })
                };
            </div>


            <button href="#inicio" className='buttonTop' onClick={scrollToTop}

                style={{ display: visible ? "inline" : "none" }}>

                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                </svg>

            </button>
        </div>
    );
};

export default CharacterList;