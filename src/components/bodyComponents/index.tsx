import React from 'react';

type Props = {
    name: string,
    css?: string
}

export const Index = ({ name,  css="text-2xl font-semibold mb-4 inline-block border-b-4 border-blue-300 rounded-sm pb-1" }: Props) => {
    return (
        <>
            <h2 className={css}>{name}</h2>
        </>
    )
}