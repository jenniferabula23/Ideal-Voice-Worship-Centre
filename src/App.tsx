import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';

const HomePage = lazy(() =>
  import('@/pages/HomePage').then((m) => ({ default: m.HomePage }))
);
const AboutPage = lazy(() =>
  import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const LeadershipPage = lazy(() =>
  import('@/pages/LeadershipPage').then((m) => ({ default: m.LeadershipPage }))
);
const MinistriesPage = lazy(() =>
  import('@/pages/MinistriesPage').then((m) => ({ default: m.MinistriesPage }))
);
const SermonsPage = lazy(() =>
  import('@/pages/SermonsPage').then((m) => ({ default: m.SermonsPage }))
);
const EventsPage = lazy(() =>
  import('@/pages/EventsPage').then((m) => ({ default: m.EventsPage }))
);
const VisitPage = lazy(() =>
  import('@/pages/VisitPage').then((m) => ({ default: m.VisitPage }))
);
const GivingPage = lazy(() =>
  import('@/pages/GivingPage').then((m) => ({ default: m.GivingPage }))
);
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-2 border-crimson-800 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-warm-500 tracking-wide">Loading…</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/ministries" element={<MinistriesPage />} />
            <Route path="/sermons" element={<SermonsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/visit" element={<VisitPage />} />
            <Route path="/giving" element={<GivingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
