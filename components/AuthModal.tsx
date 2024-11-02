"use client";

import React, { useEffect } from "react";
import Modal from "./Modal";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const session = useSessionContext();
  const { onClose, isOpen } = useAuthModal();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <div>
      <Modal
        title="Welcome back"
        description="Login into your account "
        isOpen={isOpen}
        onChange={onChange}
      >
        <Auth
          theme="dark"
          magicLink
          providers={["github", "google"]}
          supabaseClient={supabaseClient}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#6366f1",
                  brandAccent: "#5154f1",
                  defaultButtonBorder: "#6366f1",
                },
              },
            },
          }}
        />
      </Modal>
    </div>
  );
};

export default AuthModal;
