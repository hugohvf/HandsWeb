import React, {useState} from 'react'
import players from '../resources/images/players.svg'
import age from '../resources/images/age.svg'
import time from '../resources/images/time.svg'
import difficulty from '../resources/images/difficulty.svg'

const GameCard = (props) => {

  return (
    
    <div className="Card">

      <div className="CardName">
        <p className="TitleText">{props.jogo.game}</p>
      </div>

      <div className="CardContainer">
        <div></div>
        <div className="MiddleContainer">

          <div className="TextContainer">
            <p className="TextSubdesc">{props.jogo.subdesc}</p>
          </div>
          <img className="MainImage" mode='contain' src={props.jogo.imgMain}/>

        </div>

        <div className="FooterContainer">
          <div className="DescContainer">
            <img className="FooterIcon" src={players}/>
            <p className="TextDesc">
              {props.jogo.minPlayers == props.jogo.maxPlayers ?
               props.jogo.maxPlayers : 
               props.jogo.minPlayers + ' a ' + props.jogo.maxPlayers}</p>
          </div>
          <div className="Division"></div>
          <div className="DescContainer">
            <img className="FooterIcon" src={age}/>
            <p className="TextDesc">+{props.jogo.minAge}</p>
          </div>
          <div className="Division"></div>
          <div className="DescContainer">
            <img className="FooterIcon" src={time}/>
            <p className="TextDesc">{props.jogo.minTime} - {props.jogo.maxTime} min</p>

          </div>
          <div className="Division"></div>
          <div className="DescContainer">
            <img className="FooterIcon" src={difficulty}/>
            <p className="TextDesc">{props.jogo.difficulty == 1?'Fácil':props.jogo.difficulty == 2?'Médio':props.jogo.difficulty == 3?'Difícil':""}</p>
          </div>
        </div>

      </div>

    </div>

  )
}

export default GameCard;