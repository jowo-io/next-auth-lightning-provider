import NextAuth from "next-auth";

import { lightningProvider } from "../lnauth/[...lnauth]";

export const authOptions = {
  providers: [lightningProvider],
};

export default NextAuth(authOptions);