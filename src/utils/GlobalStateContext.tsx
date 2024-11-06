import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AccountContextProps {
  firstName: string;
  lastName: string;
  email: string;
  plan: "Base" | "Business";
  setFirstName: (name: string) => void;
  setLastName: (name: string) => void;
  setEmail: (email: string) => void;
  setPlan: (plan: "Base" | "Business") => void;
}

const AccountContext = createContext<AccountContextProps | undefined>(
  undefined
);

export const GlobalStateContext = ({ children }: { children: ReactNode }) => {
  const storedFirstName = sessionStorage.getItem("firstName") || "";
  const storedLastName = sessionStorage.getItem("lastName") || "";
  const storedEmail = sessionStorage.getItem("email") || "";

  const [firstName, setFirstName] = useState<string>(storedFirstName);
  const [lastName, setLastName] = useState<string>(storedLastName);
  const [email, setEmail] = useState<string>(storedEmail);
  const [plan, setPlan] = useState<"Base" | "Business">("Base");

  useEffect(() => {
    if (firstName) {
      sessionStorage.setItem("firstName", firstName);
    }

    if (lastName) {
      sessionStorage.setItem("lastName", lastName);
    }

    if (email) {
      sessionStorage.setItem("email", email);
    }
  }, [firstName, lastName, email]);

  return (
    <AccountContext.Provider
      value={{
        firstName,
        lastName,
        email,
        plan,
        setFirstName,
        setLastName,
        setEmail,
        setPlan,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(AccountContext);
  if (!context)
    throw new Error("useGlobalState must be used within an GlobalStateContext");
  return context;
};
