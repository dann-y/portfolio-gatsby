import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description, image } = headData;

  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'danny chu'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'danny chu software developer'} />
        <meta name="image" content={image} />
        {title && <meta property="og:title" content={title} />}
        {description && <meta property="og:description" content={description} />}
        {image && <meta property="og:image" content={image} />}
      </Helmet>
      <App />
    </>
  );
};
