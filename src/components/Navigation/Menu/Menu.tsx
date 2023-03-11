import React from "react";
import { StyledMenu } from "./Styled.Menu";
import Link from "next/link";

const Menu = ({ planets }: any) => {
  return (
    <>
      <StyledMenu>
        {planets.planets.map((planet: any) => (
          <Link href={planet.fields.slug} key={planet.sys.id}>
            <span>{planet.fields.name}</span>
          </Link>
        ))}
      </StyledMenu>
    </>
  );
};
export default Menu;
