import { useState, useEffect } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';

function App() {
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  useEffect(() => {
      const robRequest = new Request('https://jsonplaceholder.typicode.com/users')
      fetch(robRequest).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      }).then(users => setRobots(users))
      }
  )


  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })
  return(
    <div className='text-center justify-center bg-gradient-to-r from-blue to-gray'>
      <h1 className='font-poetsen text-6xl '>Catfriends</h1>
      <hr className='w-60 h-1 mx-auto my-2 border-8 rounded-xl border-orange'></hr>
        <SearchBox searchChange={onSearchChange}/>
      <div className='flex flex-wrap justify-center'>
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
    </div>
  )
}

export default App;
