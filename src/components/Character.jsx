// import character from '../src/components/Character' // {} Alfonso

import './Character.css'

function Character({ character_person }) {

    return (
        <div className="Conten_character">
            <div className='Content_Target'>
                <h2>{character_person.name}</h2>
                {/* <p>{character_person.status}</p> */}
                <img className='Img_Target' src={character_person.image} />
            </div>
        </div>
    )
}

export default Character;