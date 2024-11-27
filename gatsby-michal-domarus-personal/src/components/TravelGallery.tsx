import React from 'react';
import { GalleryDataProps, Node } from '../../types';

const TravelGallery = ({ data }: { data: GalleryDataProps }) => data.allCloudinaryMedia.nodes.map((node: Node, index: number) => (
  <img
    key={node.id}
    srcSet={`
            ${node.responsive.small} 600w,
            ${node.responsive.medium} 1200w,
            ${node.responsive.normal} 2400w
            `}
    src={node.responsive.small} loading={index < 5 ? 'eager' : 'lazy'} sizes={'(max-width: 799px) 100vw, 1400px'}
    className="image"
    width={node.width}
    height={node.height}
    alt=""
  />
));


export default TravelGallery