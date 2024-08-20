import React from "react";
import { routes, RouteKey } from "../Constants";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { NormalLi, ColorfulButton } from "@/components/common";
import NavbarClient from "@/components/NavbarClient";

type NavbarProps = {
  style?: React.CSSProperties;
};

const Navbar: React.FC<NavbarProps> = ({ style }) => {
  const locale = useLocale();
  const t = useTranslations("common");

  return (
    <NavbarClient topText={t("top")}>
      <ul
        style={{
          display: "flex",
          gap: "5em",
          padding: 0,
          margin: 0,
          listStyleType: "none",
        }}
      >
        {Object.keys(routes).map((routeKey) => {
          const key = routeKey as RouteKey;
          const href = `/${locale}${routes[key]}`;
          return (
            <NormalLi key={routeKey}>
              <Link href={href}>
                <ColorfulButton>{t(routeKey)}</ColorfulButton>
              </Link>
            </NormalLi>
          );
        })}
      </ul>
    </NavbarClient>
  );
};

export default Navbar;