import { site } from "@/data/site";

export function whatsappUrl(message = "Olá! Quero conversar com a ROCTIV sobre um projeto de software sob medida.") {
  return "https://wa.me/" + site.whatsapp.number + "?text=" + encodeURIComponent(message);
}
