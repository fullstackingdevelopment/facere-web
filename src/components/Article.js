function Article() {
  let request = new XMLHttpRequest();
  let test;
  request.open('GET', 'https://gmdevapi.com/api/Mongo')
  request.send();
  request.onload = ()=>{
    const data = JSON.parse(request.response);
    console.log(data)
  }
  return(
    <>
      <div className='Article'>
        article
      </div>
    </>
  )
}

export default Article;