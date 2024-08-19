import React from "react";
import { routes, RouteKey } from "../Constants";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { NormalLi } from "@/components/common";
import { ColorfulButton } from "@/components/common";
type NavbarProps = {
  style?: React.CSSProperties;
};

const Navbar: React.FC<NavbarProps> = ({ style }) => {
  const locale = useLocale();
  const t = useTranslations("common");
  return (
    <nav
      style={{
        ...style,
        display: "flex",
        justifyContent: "space-between",
        padding: "0 5em",
      }}
    >
      1
      <ul
        style={{
          display: "flex",
          justifyContent: "flex-end",
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
    </nav>
  );
};

export default Navbar;
