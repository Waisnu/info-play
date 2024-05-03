import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
   return (
       <Menu>
           <MenuButton as={Button} rightIcon={<BsChevronDown />} ml={10}>
               Orde by: relevance
           </MenuButton>
           <MenuList>
               <MenuItem></MenuItem>
               <MenuItem></MenuItem>
               <MenuItem></MenuItem>
               <MenuItem></MenuItem>
           </MenuList>
       </Menu>
   );
};

export default SortSelector;
