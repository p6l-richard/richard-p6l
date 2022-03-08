import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';
import tailwind from './tailwind.css';

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    href: '/favicon.png',
    type: 'image/png',
  },
  // prefetch an image into the browser cache that the user is likely to see
  // as they interact with this page, perhaps they click a button to reveal in
  // a summary/details element
  {
    rel: 'prefetch',
    as: 'image',
    href: '/img/bunny.jpg',
  },

  { rel: 'stylesheet', href: tailwind },
];

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
