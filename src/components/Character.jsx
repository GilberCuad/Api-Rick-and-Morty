// import character from '../src/components/Character' // {} Alfonso

import './Character.css'

function Character({ id, name, image, status }) {

    return (
        <div className="Conten_character" key={id}>
            <div className='Content_Target'>
                <h2>{name}</h2>
                {/* <h2>{character_person.name}</h2> */}
                {/* <p style={{ color: active ? "inline" : "none" }}>{character_person.status}</p> */}
                {/* <img className='Img_Target' src={character_person.image} /> */}
                <img className={status === 'Alive' ? 'Img_Target' : 'Img_Target1'} src={image} />
            </div>
        </div>
    )
}

export default Character;