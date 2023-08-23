
import './carcard.css';
export default function Carcard( {car} ) {
    return(
        <>
            <div className='card'>
                <img src={car.url} alt={car.name} />
                <div className="card_desc">
                    <p>{car.name}{" ||  Price: "}{car.price}</p>
                    <br />
                    <p>{car.description}</p>
                </div>
            </div>
        </>
    );
}
