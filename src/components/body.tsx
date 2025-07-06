import React from 'react';
import { Profile } from './bodyComponents/profile.tsx';
import { Publications } from './bodyComponents/publication.tsx';
import { Works } from './bodyComponents/work.tsx';

export const Body = () => {
    return (
        <main className="p-4">
            <Profile />
            <Works />
            <Publications />
        </main>
    );
}