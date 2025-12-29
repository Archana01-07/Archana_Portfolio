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
      <div >
        <App />
      </div>
    </div>
  </StrictMode>, 
);


// /**
//  * @copyright 2025 Archana
//  * @license Apache-2.0
//  */

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import '@/index.css';
// import { App } from '@/App';
// import { Sidebar } from '@/components/Sidebar';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <div className="min-h-screen bg-background">
//       <Sidebar />
//       <App /> {/* No padding needed since sidebar is overlay */}
//     </div>
//   </StrictMode>, 
// );