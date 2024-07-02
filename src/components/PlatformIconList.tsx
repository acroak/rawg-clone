import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from 'react-icons';

interface Props {

    platforms: Platform[];
}

const PlatfromIconList = ({ platforms }: Props) => {
    // index signature: ([key:string]) represents a key or property in this object. Each of these varied string keys is mapped to an icontype (defined in the react icons library).
    const iconMap: { [key: string] : IconType } = {
        // we will be mapping the slug of a platfrom to an icon rather than to the name
        //name: PlayStation
        //slug: playstation
        //a slug is a textural id, its better to rely on the slug since it won't change capitatlization as it is always lowercase.

        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid,
    }

    return (
        <HStack marginY={'10px'}>
            {platforms.map( (platform) => (
                <Icon as={iconMap[platform.slug]}  color='gray.500' />
            ))}
        </HStack>
    )
}

export default PlatfromIconList;