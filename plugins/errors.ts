import {NuxtAppOptions} from "@nuxt/types/app";

export default function ({app}: { app: NuxtAppOptions }) {
  app.nuxt.error = () => {
  }
}
