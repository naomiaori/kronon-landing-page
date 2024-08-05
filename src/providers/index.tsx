import { PropsWithChildren } from "react";

const AppProvider = ({ children }: PropsWithChildren) => (
  <>
    {children}
  </>
);

export default AppProvider;
