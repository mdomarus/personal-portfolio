import React from 'react';

const TravelGallery = ({ title, data }) => (
    <>
        <h1>{title}</h1>
        {
            data.allCloudinaryMedia.nodes.map((node, index) => (
                <picture key={node.id}>
                    <source srcSet={`${node.responsive.webp.normal}`} type="image/webp" />
                    <source srcSet={node.responsive.jpg.normal} media="(min-width: 1200px)" />
                    <source srcSet={`${node.responsive.jpg.medium} 1x, ${node.responsive.jpg.normal} 2x`} media="(min-width: 600px)" />
                    <img src={node.responsive.jpg.small} loading={index < 5 ? 'eager' : 'lazy'} />
                </picture>
            ))
        }
    </>
)

export default TravelGallery