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
  //  TODO: add images + logo
  // {
  //   rel: 'icon',
  //   href: '/favicon.png',
  //   type: 'image/png',
  // },
  // {
  //   rel: 'prefetch',
  //   as: 'image',
  //   href: '/img/bunny.jpg',
  // },

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
