import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from '../assets/Logo/logo.webp';

const NavBar = () => {

    return (
        <HStack justifyContent='space-between' padding='10px'>
           <Image src={logo} boxSize='60px'/> 
           <ColorModeSwitch />
           {/* TODO: add searchbar */}
        </HStack>
    );
}

export default NavBar;