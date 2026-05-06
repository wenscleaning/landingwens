import { permanentRedirect } from "next/navigation";

export default function LocaleNotFound() {
  permanentRedirect("/");
}
