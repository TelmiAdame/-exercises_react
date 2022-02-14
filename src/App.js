import React from 'react';
import Search from './components/search'
import UserInfo from './components/userInfo'
import Actions from './components/actions';
import Repos from './components/repos'

function App() {
  return (
    <div className="app">
      <Search/>
      <UserInfo/>
      <Actions />
      <Repos 
        className='repos' 
        tile='Repositórios:'
        repos = {[{
          name:'Nome repositório',
          link: '#'
        }]}
        />

<Repos 
        className='starred' 
        tile='Favoritos:'
        repos = {[{
          name:'Nome repositório',
          link: '#'
        }]}
        />

      
    </div>
  );
}

export default App;
