import axios from 'axios';
import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { API_URL } from '@/constants';
import { Header, Footer } from '@/components';

const MainLayout = () => {
  useEffect(() => {
    axios.post(`${API_URL}/wakeup`);
  }, []);

  return (
    <>
      <Header />

      <main style={{ display: 'flex', flexDirection: 'column' }}>
        <Suspense
          fallback={
            <div style={{ padding: 80, textAlign: 'center' }}>
              Завантаження...
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
