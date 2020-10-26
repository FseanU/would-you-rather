import React from 'react';

export default function NotFound(props) {
  return (
    <div className="mt-24 not-found-container">
      <img 
        src={require(`../images/404_image.png`)} 
        alt="404 illustration"
      />
      <h2 className="mt-16">Oops! We can’t find that page...</h2>
    </div>
  )
}
