import { Button } from "@rallly/ui/button";
import Link from "next/link";
import React from "react";

import { usePostHog } from "@/utils/posthog";

export const UpgradeButton = ({
  children,
  annual,
}: React.PropsWithChildren<{ annual?: boolean }>) => {
  const posthog = usePostHog();

  return (
    <>
      <Button
        className="w-full"
        variant="primary"
        asChild
        onClick={() => {
          posthog?.capture("click upgrade button");
        }}
      >
        <Link
          href={`/api/stripe/checkout?period=${
            annual ? "yearly" : "monthly"
          }&return_path=${encodeURIComponent(window.location.pathname)}`}
        >
          {children}
        </Link>
      </Button>
    </>
  );
};