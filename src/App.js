// src/App.js
import React, { useState } from 'react';
import { Header } from './components/header.tsx'
import { Body } from './components/body.tsx'
import { Footer } from './components/footer.tsx';

// 環境変数からAPI URLを取得
const API_URL = `${process.env.REACT_APP_API_URL}/test/`;

export const App = () => {

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
