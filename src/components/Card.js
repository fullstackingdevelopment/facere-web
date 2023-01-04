import './styling/Card.css';

function Card({title = 'UNNAMED', desc = 'NODESCRIPTION', delCard}) {
  return (
    <>
      <div className='Card'>
        <p>{title}</p>
        <p>{desc}</p>
      </div>
    </>
  )
}

export default Card;