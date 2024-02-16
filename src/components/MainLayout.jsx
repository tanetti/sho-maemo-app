import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@/components';

const MainLayout = () => (
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

export default MainLayout;
