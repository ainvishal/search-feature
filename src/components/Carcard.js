import cars from './car.js';
import './carcard.css';
export default function Carcard() {
    return(
        <>
            <div className='card'>
                <img src={cars[0].url} alt={cars[0].name} />
                <div className="card_desc">
                    <p>{cars[0].name}{" ||  Price: "}{cars[0].price}</p>
                    <br />
                    <p>{cars[0].description}</p>
                </div>
            </div>
        </>
    );
}
