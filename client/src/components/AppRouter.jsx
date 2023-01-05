import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from '../routes';

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        {publicRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)}
      </Routes>
    </Suspense>
  );
}
