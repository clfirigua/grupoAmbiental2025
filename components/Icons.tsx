import type { ReactElement } from "react";

export type IconName =
  | "leaf"
  | "drop"
  | "bolt"
  | "cloud"
  | "users"
  | "recycle"
  | "truck"
  | "sort"
  | "cart"
  | "briefcase"
  | "graduation"
  | "paw"
  | "mappin"
  | "target"
  | "eye"
  | "phone"
  | "whatsapp"
  | "mail"
  | "clock"
  | "headset"
  | "send"
  | "map"
  | "check"
  | "arrowRight"
  | "menu"
  | "close"
  | "facebook"
  | "instagram"
  | "youtube"
  | "chevronDown"
  | "shield";

const paths: Record<IconName, ReactElement> = {
  leaf: (
    <path d="M5 21c8 0 13-5 14-14 0 0-11-2-16 5-3 4-2 7 2 9Z M5 21c2-6 6-10 12-12" />
  ),
  drop: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />,
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  cloud: (
    <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17.2 8.06 4.5 4.5 0 0 1 17 18H7Z M9.5 21.5A3.5 3.5 0 0 1 6 18 M12 21.5A3.5 3.5 0 0 1 8.5 18" />
  ),
  users: (
    <path d="M17 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1 M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M21 20v-1a4 4 0 0 0-3-3.87 M16 4.13a4 4 0 0 1 0 7.75" />
  ),
  recycle: (
    <path d="m7 19-3-3 3-3 M4 16h10a3 3 0 0 0 3-3v-1 M17 5l3 3-3 3 M20 8H10a3 3 0 0 0-3 3v1 M9.5 14.5 7 19h5 M14.5 9.5 17 5h-5" />
  ),
  truck: (
    <path d="M3 7h11v10H3z M14 11h4l3 3v3h-7z M6.5 20.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z M17.5 20.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
  ),
  sort: (
    <path d="M4 6h16 M4 12h10 M4 18h6 M17 15v6 M14 18l3 3 3-3" />
  ),
  cart: (
    <path d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 8H6 M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z M18 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  ),
  briefcase: (
    <path d="M4 8h16v11H4z M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2 M4 13h16" />
  ),
  graduation: (
    <path d="m2 9 10-5 10 5-10 5-10-5Z M6 11.5V17c0 1.1 2.7 3 6 3s6-1.9 6-3v-5.5 M22 9v6" />
  ),
  paw: (
    <path d="M12 15c-3 0-6 2-6 4.5S8 22 12 22s6-.5 6-2.5-3-4.5-6-4.5Z M6.5 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z M11 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z M17.5 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z M13 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  ),
  mappin: (
    <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  ),
  target: <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M12 12h.01" />,
  eye: (
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  ),
  phone: (
    <path d="M5 4h4l1.5 4.5L8 10a12 12 0 0 0 6 6l1.5-2.5L20 15v4a1 1 0 0 1-1 1c-9 0-16-7-16-16a1 1 0 0 1 1-1Z" />
  ),
  whatsapp: (
    <path d="M20 12a8 8 0 1 1-14.9-4L4 21l5.2-1a8 8 0 0 1 10.8-8Z M8.5 9.5c0 3.5 3 6.5 6.5 6.5.5-1 .3-1.7-.2-2l-1.5-.8-1 1a4.5 4.5 0 0 1-2.5-2.5l1-1-.8-1.5c-.3-.5-1-.7-2-.2Z" />
  ),
  mail: <path d="M4 5h16v14H4z M4 6l8 7 8-7" />,
  clock: <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z M12 7v5l4 2" />,
  headset: (
    <path d="M4 13v-1a8 8 0 0 1 16 0v1 M4 13a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2Z M20 13a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2Z M9 17.5v.5a3 3 0 0 0 3 3" />
  ),
  send: <path d="M22 2 11 13 M22 2 15 22l-4-9-9-4 20-7Z" />,
  map: <path d="M9 20 3 17V5l6 3 6-3 6 3v12l-6-3-6 3Z M9 5v15 M15 8v15" />,
  check: <path d="M20 6 9 17l-5-5" />,
  arrowRight: <path d="M5 12h14 M13 6l6 6-6 6" />,
  menu: <path d="M4 6h16 M4 12h16 M4 18h16" />,
  close: <path d="M6 6l12 12 M18 6 6 18" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  shield: <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z M9 12l2 2 4-4" />,
  facebook: <path d="M14 9h3V6h-3a3 3 0 0 0-3 3v2H8v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z" />,
  instagram: (
    <path d="M4 4h16v16H4z M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z M16.7 7.3h.01" />
  ),
  youtube: (
    <path d="M22 12s0-3.5-.4-5A2.5 2.5 0 0 0 20 5.4C18.2 5 12 5 12 5s-6.2 0-8 .4A2.5 2.5 0 0 0 2.4 7C2 8.5 2 12 2 12s0 3.5.4 5A2.5 2.5 0 0 0 4 18.6c1.8.4 8 .4 8 .4s6.2 0 8-.4A2.5 2.5 0 0 0 21.6 17c.4-1.5.4-5 .4-5Z M10 9.5v5l4.5-2.5Z" />
  ),
};

export function Icon({
  name,
  className = "h-6 w-6",
  strokeWidth = 1.8,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
