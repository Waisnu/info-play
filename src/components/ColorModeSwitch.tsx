import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode()
return (
    <HStack>
        <Switch
            _hover={{ transform: 'scale(1.2)' }}
            isChecked={colorMode === 'dark'}
            onChange={toggleColorMode}
        />
        <Text whiteSpace='nowrap'> {colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'} </Text>
    </HStack>
);
};

export default ColorModeSwitch;
