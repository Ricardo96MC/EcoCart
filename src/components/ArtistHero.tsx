import { useEffect, useState } from "react";
import { ArtistSearchResult } from "../interfaces/ArtistSearchResult"

export function ArtistHero(props: any){
  const data = props.artistSearchResult
  const followerCount = data.tracker_count as number;
  const upcomingEvents = data.upcoming_event_count;
  const [isF, setF] = useState(false);

  useEffect(() => {
      setF(false);
  }, [data])
  
  
    return <div className="HeroBg">
      <div className="HeroBody" style={{backgroundImage:`url(${data.image_url})`}}></div>
      <div className="tmp">
      <div className="Avatar ">
          <img className="AvatarThumb"src={data.thumb_url}></img>
          <div className="ArtistNameAndFollowers">
          <h1 className="ArtistName">{data.name}</h1>
          <div className="ArtistFollowers">{followerCount.toLocaleString()} Followers {upcomingEvents > 0 ?'  • ' + upcomingEvents +' Upcoming Shows' : ''}</div>
        </div>

      </div>
      <button onClick={(e) =>{ setF(!isF)}} > 
      {!isF ? 'Follow' : 'Unfollow'} 
      </button>

      </div>
      </div>
  }
  