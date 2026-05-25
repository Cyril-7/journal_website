import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import JournalsPage from './pages/JournalsPage';
import BrowsePage from './pages/BrowsePage';
import AuthorsPage from './pages/AuthorsPage';
import ContactPage from './pages/ContactPage';
import EthicsPage from './pages/EthicsPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import NewsPage from './pages/NewsPage';
import EditorialBoardPage from './pages/EditorialBoardPage';
import ArchivePage from './pages/ArchivePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="journals" element={<JournalsPage />} />
          <Route path="browse" element={<BrowsePage />} />
          <Route path="authors" element={<AuthorsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="ethics" element={<EthicsPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="editorial-board" element={<EditorialBoardPage />} />
          <Route path="archive" element={<ArchivePage />} />
          <Route path="article/:id" element={<ArticleDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
