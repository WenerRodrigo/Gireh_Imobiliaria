import { clients } from "./clients";

export function getClientConfig() {
  const host = window.location.hostname.toLowerCase();

  if (host.includes("shadai")) return clients.shadai;
  if (host.includes("imobiliariaRibeirao")) return clients.imobiliariaRibeirao;

  return clients.shadai;
}
