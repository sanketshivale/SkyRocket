import { useQuery } from "@apollo/client";
import { GET_USER } from "./graphql/query/getQuery";


function App() {
  const { loading, error, data } = useQuery( GET_USER );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  console.log(data)

  return (
    <>
      <div className='text-center'>
        <h1 className='text-2xl text-green-500 font-bold'>{data.company.ceo}</h1>
        <h1 className='text-2xl text-green-500 font-bold'>{data.roadster.apoapsis_au}</h1>
        
      </div>
       
    </>
  )
}

export default App
