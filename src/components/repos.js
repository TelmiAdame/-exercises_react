import React from "react";

export default function Repos( {className, title, repos, index}) {
  return (
    <>
      <div className={className}>
        <h2>{title}</h2>
        <ul>
            {repos.map((repo) => 
            <li key={index}><a hrf={repo.link}>{repo.name}</a></li>
            
            )}
        </ul>
      </div>
    
    </>
  );
  
}

//Repos.defaultProps
//Repos.propTypes