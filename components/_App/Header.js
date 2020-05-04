import { Menu, Container, Image, Icon } from "semantic-ui-react"; //import components 
import Link from "next/link";
import Router, {useRouter} from "next/router";
import NProgress from "nprogress";

//Cheking router lifecycle, how it change from route to another in order to create a progress bar
Router.OnRouteChangeStart = () => NProgress.start(); {/* Going to start progress bar and begin to change to a new route.*/}
Router.OnRouteChangeComplete = () => NProgress.done(); {/*Finish loading the progress bar*/}
Router.onRouteChanegError = () => NProgress.done();


function Header() {
    const router = useRouter();
    const user = true; {/* variable to use on user authentication*/}

    //Function to provide the route to a given link
    function isActive(route)
    {
        return route === router.pathname;
    }
  //List of menu itens, using Linked component to be able to navigate to differents routes
  return (
    <Menu fluid id="menu" inverted> {/* A menu element using fluid/inverte props and set an ID to it */}
      <Container text> {/* Container element using text prop */}
      {/* Link to the home page */}
        <Link href="/"> 
          <Menu.Item header active = {isActive('/')}>
            <Image
              size="mini"
              src="/static/logo.svg" //Site logo image 
              style={{ marginRight: "1em" }}
            />
           Attraktiva {/* Site Name */}
          </Menu.Item>
        </Link>

        {/* Link to the cart page */}
        <Link href="/cart"> 
          <Menu.Item header active = {isActive('/cart')}>
            <Icon name="cart" size="large" />
            Cart
          </Menu.Item>
        </Link>

        {/* Only if user is true return create page link */}
        {user && (
          <Link href="/create">
            <Menu.Item header active = {isActive('/create')}>
              <Icon name="add square" size="large" />
              Create
            </Menu.Item>
          </Link>
        )}

        {/* Condition to check users, if it is true display account + logout links, otherwise display login and signup links */}
        {user ? (<>
          {/* Link to the account page */}
            <Link href="/account">
              <Menu.Item header active = {isActive('/account')}>
                <Icon name="user" size="large" />
                Account
              </Menu.Item>
            </Link>
            
            {/* Gonna make it a button */}
            <Menu.Item header>
              <Icon name="sign out" size="large" />
              Logout
            </Menu.Item>
          </>
        ) : ( <>
          {/* Link to the login page */}
            <Link href="/login">
              <Menu.Item header active = {isActive('/login')}>
                <Icon name="sign in" size="large" />
                Login
              </Menu.Item>
            </Link>

            {/* Link to the signup page */}
            <Link href="/signup">
              <Menu.Item header active = {isActive('/signup')}>
                <Icon name="signup" size="large" />
                Signup
              </Menu.Item>
            </Link>
          </>
        )}
      </Container>
    </Menu>
  );
}

export default Header;
