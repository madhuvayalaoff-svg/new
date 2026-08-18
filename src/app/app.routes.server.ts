import { RenderMode, ServerRoute } from '@angular/ssr';
import { Basics } from './basics/basics';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
