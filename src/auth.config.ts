import bcrypt from "bcryptjs";
import NextAuth, { User, type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { prisma } from "./lib/prisma";
import { AdapterUser } from "next-auth/adapters";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",
  },

  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.data = user;
      }
      return token;
    },

    session({ session, token, user }) {
      session.user = token.data as AdapterUser & {
        id: string;
        email: string;
        name: string;
        emailVerified: boolean;
        role: string;
        image?: string;
      } & User;

      console.log({ session, token, user });
      return session;
    },
  },

  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;

        // Buscar el correo
        const user = await prisma.user.findUnique({
          where: { email: email.toLowerCase() },
        });

        if (!user) return null;

        // Comparar las contraseñas
        if (!bcrypt.compareSync(password, user.password)) return null;

        // Regresar el usuario sin el password

        const userWithoutPassword = {
          id: user.id,
          email: user.email,
          name: user.name,
          emailVerified: user.emailVerified,
          role: user.role,
          image: user.Image,
        };

        return userWithoutPassword;
      },
    }),
  ],
};

export const {
  signIn,
  signOut,
  auth: middleware,
  handlers,
} = NextAuth(authConfig);
