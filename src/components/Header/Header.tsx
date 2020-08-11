import { Menu, Container, Icon } from "semantic-ui-react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <Menu stackable fluid id="menu" inverted>
      <Container text>
        <Link href="/">
          <Menu.Item header>React</Menu.Item>
        </Link>

        <Link href="/cart">
          <Menu.Item>
            <Icon name="cart" size="large" />
            Cart
          </Menu.Item>
        </Link>
      </Container>
    </Menu>
  );
};

export default Header;
