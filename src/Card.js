function Card(props){
    const card = props.obj
    if(card.title.length > 30){
      card.title = card.title.substring(0,30) + "..."
    }
    return(
         <div className ="card">
    <div className ="channel-details">
      <img src={card.channelLogoUrl} className ="logo"></img>
      <p>{card.channelName}</p>
    </div>
   <div className ="tumbnail">
    <img src={card.thumbnailUrl} className="thumbnail-img"></img>
   </div>
   <div className ="video-details">
    <h3 className="video-title">{card.title}</h3>
    <p>Likes: {card.likes/1000}k</p>
    <p>Views: {card.views/1000}k</p>
   </div>
  </div>
    )
}
export default Card;