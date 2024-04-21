import card from './styling/cards.module.css'
function Cards(props){
    return (
        <div className={card.card}>
            <span className={card.sidehead}> 
                {props.edu.type} 
            </span>
                <div className={card.cardinfo}>
                <h2> {props.edu.course} </h2>
                <h2>  {props.edu.institute}  </h2>
                <h2>  {props.edu.desc}  </h2>
            </div>
        </div>
    )
}
export default Cards