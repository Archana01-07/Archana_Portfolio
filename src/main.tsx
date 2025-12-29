/**
 *  @copyright 2025 Archana
 *  @license Apache-2.0
 */

/**
 * Node modules
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/** 
 * Styles
 */
import '@/index.css';

/**
 * Components
 */
import { App } from '@/App';
import { Sidebar } from '@/components/Sidebar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen bg-background">
      <Sidebar />
      {/* Add padding left for desktop sidebar */}
      <div className="lg:pl-64">
        <App />
      </div>
    </div>
  </StrictMode>, 
);