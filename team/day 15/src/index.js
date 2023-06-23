import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './실습1/App';
import Second from './실습2/Second';
import Random from './실습3/Random';
import ImageSlider from './실습4/ImageSlider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App />
        <Second />
        <Random />
        <ImageSlider />
    </>
);

