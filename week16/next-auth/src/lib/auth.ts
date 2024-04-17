import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Email", type: "email", placeholder: "Your email..." },
        password: { label: "Password", type: "password", placeholder: "Your password..." },
      },
      async authorize(credentials) {
        const user = {
          id: '1',
          email: credentials?.username,
          name: credentials?.password,
        }
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: ({ user, token }: any) => {
      token.userId = token.sub
      return token;
    },
    session: ({ session, user, token }: any) => {
      if(session && session.user) {
        session.user.id = token.sub
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin"
  }
}
