import React from 'react';
import Card from './Card'

// my job is to show cards. I don't care about state
function PokerHand(props){
    // a pokerHand is made up off.. CARDS
    let hand = props.cards.map((card, i)=>{
        return <Card key={i} card={card}/>
    })
    console.log(hand)
    return (
        <div className="col-sm-12">
            {hand}
        </div>
    )
}

export default PokerHand