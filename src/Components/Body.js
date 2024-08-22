import React from 'react';

function Body() {
  const tiles = [
    { title: 'Lorem Ipsum', imageUrl: 'https://via.placeholder.com/300' },
    { title: 'Lorem Ipsum', imageUrl: 'https://via.placeholder.com/300' },
    { title: 'Lorem Ipsum', imageUrl: 'https://via.placeholder.com/300' },
    { title: 'Lorem Ipsum', imageUrl: 'https://via.placeholder.com/300' },
    { title: 'Lorem Ipsum', imageUrl: 'https://via.placeholder.com/300' },
    { title: 'Lorem Ipsum', imageUrl: 'https://via.placeholder.com/300' },
    { title: 'Lorem Ipsum', imageUrl: 'https://via.placeholder.com/300' },
    { title: 'Lorem Ipsum', imageUrl: 'https://via.placeholder.com/300' },
  ];

  return (
    <div className="container">
      <div className="columns is-multiline">
        {tiles.map((tile, index) => (
          <div key={index} className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={tile.imageUrl} alt={tile.title} />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-5">{tile.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
