import { clients } from "./clients";

export function getClientConfig() {
  const host = window.location.hostname.toLowerCase();

  if (host.includes("gitbranch")) return clients.imobiliariaRibeirao;
  if (host.includes("vercel.app")) return clients.shadai;

  return clients.shadai;
}
