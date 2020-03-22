import React, {Component, useState, useEffect} from 'react';
import background from './resources/images/background.svg'
import './App.css';
import Header from './Components/Header';
import 'materialize-css/dist/css/materialize.min.css'
import GameCard from './Components/GameCard'
import CircularProgress from '@material-ui/core/CircularProgress';

const ApiURL = 'https://script.googleusercontent.com/macros/echo?user_content_key=dQbNAtHh65dXG4RWls5jMvjigK3yXWZsvfAaAaIfUbw3eOdPINuMelvondOJ2_Y9_xY7WZIUwUeiq5WOPyJKEL7_kt_3hy6wm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJcoRz04cyMtW5PrmiZuv6POB6P41r7KH9Ma4MzR6dhDrQ13P_cJE0rZSuF-XaS7JBh6enHkY3T4&lib=MqBRxvNsnUJqSmQdHLFLwIkIFcHaUiIJP'

function App() {
  const [jogos, setJogos] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    var result = fetch(ApiURL)
                  .then(response => response.json())
                  .then(d => {
                        setJogos(d.filter(item => item.game.length > 0));
                        setLoading(false)
                        });

  }, [])



  return (
    <div className="Background">
      
      <Header handleSearch={setSearch.bind(this)} />
      {loading?<CircularProgress className="ActivityIndicator" style={{color:"#E9A522"}}></CircularProgress>:(  
      <div className="GamesContainer">

        {jogos.filter(item =>
                search.length > 0
                  ? item.game.toUpperCase().includes(search.toUpperCase()) ||
                    item.subdesc.toUpperCase().includes(search.toUpperCase())
                  : item,
              )
              .map(jogo => <GameCard jogo={jogo}/>)
        }

      </div>
      )}
      
    </div>
  );
}

export default App;
