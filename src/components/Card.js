import './styling/Card.css';

function Card({listId='NOID', id='NOID', title = 'UNNAMED', desc = 'NODESCRIPTION', delTask}) {
  return (
    <>
      <div className='Card'>
        <p>{title}</p>
        <div className='Card-body'>
          <p>{desc}</p>
          <button onClick={() => delTask(listId, id)}>delete</button>
        </div>
      </div>
    </>
  )
}

export default Card;