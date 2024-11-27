export interface Node {
    id: string;
    secure_url: string;
    width: number;
    height: number;
    responsive: {
        normal: string;
        medium: string;
        small: string;
    }
}


export interface GalleryDataProps {
    allCloudinaryMedia: {
        nodes: Node[]
    }
}
