import React, {useState, useEffect} from 'react'
import { ResourceCard } from './ResourceCard';


export default function ProfileResources() {

  const [savedResources, setSavedResources] = useState([]);

  useEffect(()=>{
    setSavedResources([
      {
        topic: "Startup",
        type: "article",
        popularity: 10.0,
        by: "Mentor: Hny",
        title: "The perfect guide to startups"
      },
      {
        topic: "Startup",
        type: "article",
        popularity: 10.0,
        by: "Mentor: Hny",
        title: "The perfect guide to startups"
      },
      {
        topic: "Startup",
        type: "article",
        popularity: 10.0,
        by: "Mentor: Hny",
        title: "The perfect guide to startups"
      }
    ]);
  },[])

  return (
    <div>
      {savedResources.map((val, ind)=>{
        return(<ResourceCard res={val} key={ind}/>)
      })}
    </div>
  )
}
