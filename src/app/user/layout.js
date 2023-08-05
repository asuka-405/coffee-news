import { AuthContextProvider } from "../../context/AuthContext"

export const metadata = {
  title: "Logged In",
}

export default function RootLayout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>
}
