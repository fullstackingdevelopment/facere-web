function Card({title = 'UNNAMED', desc = 'NODESCRIPTION', delCard}) {
  return (
    <>
      <div>
        <p>{title}</p>
        <p>{desc}</p>
      </div>
    </>
  )
}

export default Card;