import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import prisma from "@lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      const { email, name, image } = user;

      let existingUser = await prisma.user.findUnique({
        where: { email: email! },
      });

      if (!existingUser) {
        if (!email || !name || !image) {
          throw new Error("Missing user information");
        }

        existingUser = await prisma.user.create({
          data: {
            email,
            name,
            image,
          },
        });
      }

      user.id = existingUser.id;
      return true;
    },
    jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    session({ session, token }) {
      session.user = token.user as typeof session.user;
      return session;
    },
  },
  session: { maxAge: 60 * 15 },
  pages: {
    signIn: "/auth/login",
  }
});
