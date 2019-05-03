import React from "react";

function ResultList(props) {
  
    const searchData = props.freeLancerSeed.filter(freelancer => freelancer.position //??????)
  
    return (
    <ul className="list-group">
      {searchData.map(freelancer => (
        <li className="list-group-item" key={result.id}>
          <img alt={freelancer.title} className="img-fluid" src={freelancer.images.original.url} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;