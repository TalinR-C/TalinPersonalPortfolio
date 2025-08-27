import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/home';
import ProjectDetails from './pages/projectdetails';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Layout>
  );
}