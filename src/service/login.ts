import { useMutation, useQuery, useQueryClient } from "react-query";
import { signIn } from "next-auth/react";

interface Credential {
  email: string;
  password: string;
}

export const useLogin = () => {
  const queryClient = useQueryClient();
  const loginMutation = useMutation(
    async (credentials: Credential) => {
      const response = await signIn("credentials", {
        redirect: false,
        email: credentials.email,
        password: credentials.password,
      });
      return response;
    },
  );
  return loginMutation;
};
