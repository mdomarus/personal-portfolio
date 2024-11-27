import React from 'react';
import { useSiteMetadata } from "../hooks/use-site-metadata";

const Head = ({ pageTitle = 'Personal Photography' }: { pageTitle?: string }) => {
    const { title, description } = useSiteMetadata();

    return (
        <>
            <title>{title}{pageTitle && ` - ${pageTitle}`}</title>
            <meta name="description" content={description} />
        </>
    )
}

export default Head;