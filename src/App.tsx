import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import JournalsPage from './pages/JournalsPage';
import BrowsePage from './pages/BrowsePage';
import SubmitPage from './pages/SubmitPage';
import SubscribePage from './pages/SubscribePage';
import AuthorsPage from './pages/AuthorsPage';
import ContactPage from './pages/ContactPage';
import EthicsPage from './pages/EthicsPage';
import EditorialBoardPage from './pages/EditorialBoardPage';
import ArticleDetailPage from './pages/ArticleDetailPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="journals" element={<JournalsPage />} />
          <Route path="browse" element={<BrowsePage />} />
          <Route path="submit" element={<SubmitPage />} />
          <Route path="subscribe" element={<SubscribePage />} />
          <Route path="authors" element={<AuthorsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="ethics" element={<EthicsPage />} />
          <Route path="editorial-board" element={<EditorialBoardPage />} />
          <Route path="article/:id" element={<ArticleDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
