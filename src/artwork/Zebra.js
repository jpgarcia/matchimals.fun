import React from 'react';

const Zebra = props => (
  <svg viewBox="0 0 64 64" {...props}>
    <path
      fill="#99A8AE"
      d="M32.059 16.768S31.479 10.997 37.754 2c0 0 6.402 6.283 7.01 18.258l-12.705-3.49z"
    />
    <path
      fill="#BEC3CF"
      d="M29.369 7.252C41.028 2.778 53.529 8.063 62 20.283v9.197S28.982 16.795 29.369 7.252z"
    />
    <path
      fill="#1A1626"
      d="M53.771 11.5c.033 2.676-.679 8.895-.679 8.895l7.49 6.946A252.47 252.47 0 0 0 62 24.39v-4.671c-1.982-3.502-6.654-7.156-8.229-8.219zm-12.169 2.426s-1.319-5.764-2.295-8.248c0 0 5.219.283 9.365 2.634 0 0 .68 6.441.299 9.276l-7.369-3.662z"
    />
    <path
      fill="#302C3B"
      d="M25.607 25.66s18.512-30.021-5.903-12.823c3.772 6.178 5.903 12.823 5.903 12.823z"
    />
    <path
      fill="#CFD8DD"
      d="M40.244 13.421C36.904 6.666 29.633 2 29.633 2c-2.305 5.828-1.25 16.177-1.25 16.177-3.871 7.109-23.149 26.287-25.435 29.177-2.294 2.891 15.862 10.379 20.831 9.408 18.692-3.665 15.235-11.139 15.235-11.139 5.066 6.689 6.59 16.363 6.59 16.363H62V29.002c-7.602-9.275-16.154-13.604-21.756-15.581z"
    />
    <path
      fill="#302C3B"
      d="M14.286 35.188C7.57 42.313.704 47.521 2.209 50.041c2.143 3.59.539 5.846 5.471 8.756 1.644 2.52 2.548.004 4.878 2.823 1.037 1.257 3.941-1.436 7.157-3.241 1.278-.719 2.651-1.343 4.066-1.62 2.42-13.587-14.783-3.981-9.495-21.571z"
    />
    <path
      fill="#302C3B"
      d="M18.435 59.139c.999-.805 3.378-2.301 6.995-3.166 2.439-.58 4.861-1.282 7.087-2.34 2.215-1.047 4.291-2.506 5.449-4.62 1.152-2.101 1.168-4.799.225-7.179 1.391 2.138 1.836 5.105.676 7.628-1.137 2.536-3.457 4.222-5.793 5.35-2.379 1.13-4.902 1.786-7.443 2.207-3.084.513-6.036 1.581-7.196 2.12z"
    />
    <path
      fill="#1A1626"
      d="M7.831 51.714c-.761.564-2.618.985-3.185.225-.563-.762.388-2.424 1.147-2.984a1.713 1.713 0 0 1 2.393.366 1.71 1.71 0 0 1-.355 2.393z"
    />
    <path
      fill="#99A8AE"
      d="M30.533 7.663c-.313 1.142-1.963 9.234.6 12.06 1.73 1.91 1.908 1.595 1.672.482-.236-1.122.746-3.195.666-2.16-.078 1.038.229 1.817.619.827.385-.975 1.451-2.358 1.006-.939-.451 1.412-.441 3.596.465 3.617.895.012 1.34-.723 1.547-1.511 2.351-8.7-6.208-13.707-6.575-12.376z"
    />
    <path
      fill="#1A1626"
      d="M5.677 47.821c-.654.418-.535.676.035.453.576-.223 3.385-.967 3.621 2.13 0 0 .155 1.387.512.011.353-1.385-.486-4.95-4.168-2.594z"
    />
    <path
      fill="#302C3B"
      d="M31.108 33.468c0 4.666-6 4.666-6 0 0-4.668 6-4.668 6 0z"
    />
    <path
      fill="#FFF"
      d="M27.309 32.085c0 .998-1.5.998-1.5 0 0-1.002 1.5-1.002 1.5 0z"
    />
    <path
      fill="#1A1626"
      d="M19.704 51.023c-.3 6.156-6.348 7.859-12.023 7.773 5.687-1.795 10.504-3.776 12.023-7.773z"
    />
    <path
      fill="#302C3B"
      d="M62 29.002C58.695 47.623 57.611 54.762 52.404 62l5.961-.013c.664-4.601 2.789-4.097 3.635-11.425v-21.56zm-8.908-8.607c-5.199 23.228-1.387 21.439-7.488 41.593l3.613.012c.662-4.601 10.518-27.331 11.365-34.659 0 0-2.971-3.732-7.49-6.946zm-11.49-6.469c3.104 8.645-1.072 17.406-2.52 31.881 0 0 1.424 1.575 2.854 4.68 1.193-11.039 8.469-24.238 7.035-32.898 0-.001-2.897-2.189-7.369-3.663zm-7.426 10.07c3.375 11.683-4.584 15.421.557 29.738 0 0 2.234-2.126 3.068-3.764-3.25-5.471 2.082-16.534-3.625-25.974zm-1.227 30.017c-4.901-11.826-12.526-12.554-18.901-10.401 7.46.504 11.612 3.057 13.552 12.664 0-.001 5.207-1.172 5.349-2.263zm-8.087-31.689c3.455 1.014 2.525 6.18 8.087 8.511-3.844-4.189-.574-8.884-5.477-12.026-1.318 1.441-2.61 3.515-2.61 3.515zM12.534 43.355c1.611-5.301 16.054-5.072 10.987-18.533 0 0-2.512 2.956-3.379 3.93-.585 5.341-4.278 6.731-7.135 10.749-.502.706-.473 3.854-.473 3.854z"
    />
  </svg>
);

export default Zebra;
