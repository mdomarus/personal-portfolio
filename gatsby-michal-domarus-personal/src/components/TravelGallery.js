import React from 'react';

const TravelGallery = ({ title, data }) => (
  <>
    <h1>{title}</h1>
    {
      data.allCloudinaryMedia.nodes.map((node, index) => (
        <img
          key={node.id}
          srcSet={`
            ${node.responsive.small} 600w,
            ${node.responsive.medium} 1200w,
            ${node.responsive.normal} 2400w
            `}
          src={node.responsive.small} loading={index < 5 ? 'eager' : 'lazy'} sizes={'(max-width: 799px) 100vw, 1400px'} className="image"
        />
      ))
    }
  </>
)

export default TravelGallery