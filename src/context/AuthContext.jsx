import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase";

const AuthContext = createContext({
  user: null,
  session: null,
});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserSession(session);
      setUser(session?.user ?? null);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUserSession(session);
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const value = {
    user,
    userSession,
  };

  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
