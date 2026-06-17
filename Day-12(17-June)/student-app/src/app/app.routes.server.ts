import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Dynamic routes with params cannot be prerendered without getPrerenderParams
  {
    path: 'students/:id',
    renderMode: RenderMode.Server
  },
  // All other routes prerender normally
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
