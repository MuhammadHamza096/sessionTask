
function User(props){
  const  {name,description,interestedField}=props
 
    return(
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            {interestedField.map((element)=>{
              return ( <li>{element}</li>)
            })}
        </div>
    )
}
export default User