function Card({title = 'UNNAMED', desc = 'NODESCRIPTION', delCard}) {
  return (
    <>
      <div>
        <button onPress={() => delCard()}/>
        <p>{title}</p>
        <p>{desc}</p>
      </div>
    </>
  )
}

export default Card;