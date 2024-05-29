import React, { useEffect, useState } from 'react'
import { ResourceCard } from '../Components/ResourceCard';

// Resource type definition
const tempResource = {
  topic: "Startup",
  type: "article",
  popularity: 10.0,
  by: "Mentor: Siddhant",
  title: "The perfect guide to startups"
};

export default function Resources() {

  const [resources, setResources] = useState([]);

  useEffect(()=>{
    setResources([
      {
        topic: "Startup",
        type: "article",
        popularity: 10.0,
        by: "Mentor: Siddhant",
        title: "The perfect guide to startups"
      },
      {
        topic: "Startup",
        type: "article",
        popularity: 10.0,
        by: "Mentor: Siddhant",
        title: "The perfect guide to startups"
      },
      {
        topic: "Startup",
        type: "article",
        popularity: 10.0,
        by: "Mentor: Siddhant",
        title: "The perfect guide to startups"
      }
    ]);
  },[])

  return (
    <div>
      {resources.map((val, ind)=>{
        return(<ResourceCard res={val} key={ind}/>);
      })}
    </div>
  )
}
