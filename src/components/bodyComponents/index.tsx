import React from 'react';

export const Index = ({ name,  css="text-2xl font-semibold mb-4 inline-block border-b-4 border-blue-300 rounded-sm pb-1" }) => {
    return (
        <>
            <h2 className={css}>{name}</h2>
        </>
    )
}