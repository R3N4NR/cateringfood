import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { ReactComponent as SquarePlus } from '../../../assets/squarePlus.svg';
import { ReactComponent as SquareMinus } from '../../../assets/squareMinus.svg';
export const AccordionTab = () => {
    const initialState = {
        item1: true,
        item2: true,
        item3: true,
        item4: true,
        item5: true,
    };
    const [isOpen, setIsOpen] = useState(false);
    const [onClose, setOnClose] = useState(true);

    return (
        <Box>
            <Accordion allowMultiple>
                <AccordionItem
                    borderStyle="solid"
                    borderRadius="10px"
                    marginBottom="30px"
                    borderColor="#4F4F4F"
                >
                    <AccordionButton
                        height="120px"
                        backgroundColor="white"
                        borderBottom={isOpen ? 'hidden' : 'solid'}
                    >
                        <Box
                            as="span"
                            fontSize="30px"
                            fontWeight="semibold"
                            marginLeft="54px"
                            width="600px"
                        >
                            Fiz o pedido errado o que devo fazer ?
                        </Box>
                        <Box width="186px">
                            {!isOpen && onClose ? (
                                <SquarePlus
                                    className="accordionIcon"
                                    onClick={() => {
                                        setIsOpen(true);
                                        setOnClose(false);
                                    }}
                                />
                            ) : (
                                <SquareMinus
                                    className="accordionIcon"
                                    onClick={() => {
                                        setIsOpen(false);
                                        setOnClose(true);
                                    }}
                                />
                            )}
                        </Box>
                        {/* */}
                    </AccordionButton>

                    <AccordionPanel
                        pb={4}
                        backgroundColor="white"
                        border="hidden"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                    borderStyle="solid"
                    borderRadius="10px"
                    marginBottom="30px"
                    borderColor="#4F4F4F"
                >
                    <AccordionButton
                        height="120px"
                        backgroundColor="white"
                        borderBottom={isOpen ? 'hidden' : 'solid'}
                    >
                        <Box
                            as="span"
                            fontSize="30px"
                            fontWeight="semibold"
                            marginLeft="54px"
                            width="600px"
                        >
                            Fiz o pedido errado o que devo fazer ?
                        </Box>
                        <Box width="186px">
                            {!isOpen && onClose ? (
                                <SquarePlus
                                    className="accordionIcon"
                                    onClick={() => {
                                        setIsOpen(true);
                                        setOnClose(false);
                                    }}
                                />
                            ) : (
                                <SquareMinus
                                    className="accordionIcon"
                                    onClick={() => {
                                        setIsOpen(false);
                                        setOnClose(true);
                                    }}
                                />
                            )}
                        </Box>
                        {/* */}
                    </AccordionButton>

                    <AccordionPanel
                        pb={4}
                        backgroundColor="white"
                        border="hidden"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                    borderStyle="solid"
                    borderRadius="10px"
                    marginBottom="30px"
                    borderColor="#4F4F4F"
                >
                    <AccordionButton
                        height="120px"
                        backgroundColor="white"
                        borderBottom={isOpen ? 'hidden' : 'solid'}
                    >
                        <Box
                            as="span"
                            fontSize="30px"
                            fontWeight="semibold"
                            marginLeft="54px"
                            width="600px"
                        >
                            Fiz o pedido errado o que devo fazer ?
                        </Box>
                        <Box width="186px">
                            {!isOpen && onClose ? (
                                <SquarePlus
                                    className="accordionIcon"
                                    onClick={() => {
                                        setIsOpen(true);
                                        setOnClose(false);
                                    }}
                                />
                            ) : (
                                <SquareMinus
                                    className="accordionIcon"
                                    onClick={() => {
                                        setIsOpen(false);
                                        setOnClose(true);
                                    }}
                                />
                            )}
                        </Box>
                        {/* */}
                    </AccordionButton>

                    <AccordionPanel
                        pb={4}
                        backgroundColor="white"
                        border="hidden"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                    borderStyle="solid"
                    borderRadius="10px"
                    marginBottom="30px"
                    borderColor="#4F4F4F"
                >
                    <AccordionButton
                        height="120px"
                        backgroundColor="white"
                        borderBottom={isOpen ? 'hidden' : 'solid'}
                    >
                        <Box
                            as="span"
                            fontSize="30px"
                            fontWeight="semibold"
                            marginLeft="54px"
                            width="600px"
                        >
                            Fiz o pedido errado o que devo fazer ?
                        </Box>
                        <Box width="186px">
                            {!isOpen && onClose ? (
                                <SquarePlus
                                    className="accordionIcon"
                                    onClick={() => {
                                        setIsOpen(true);
                                        setOnClose(false);
                                    }}
                                />
                            ) : (
                                <SquareMinus
                                    className="accordionIcon"
                                    onClick={() => {
                                        setIsOpen(false);
                                        setOnClose(true);
                                    }}
                                />
                            )}
                        </Box>
                        {/* */}
                    </AccordionButton>

                    <AccordionPanel
                        pb={4}
                        backgroundColor="white"
                        border="hidden"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                    borderStyle="solid"
                    borderRadius="10px"
                    marginBottom="30px"
                    borderColor="#4F4F4F"
                >
                    <AccordionButton
                        height="120px"
                        backgroundColor="white"
                        borderBottom={isOpen ? 'hidden' : 'solid'}
                    >
                        <Box
                            as="span"
                            fontSize="30px"
                            fontWeight="semibold"
                            marginLeft="54px"
                            width="600px"
                        >
                            Fiz o pedido errado o que devo fazer ?
                        </Box>
                        <Box width="186px">
                            {!isOpen && onClose ? (
                                <SquarePlus
                                    className="accordionIcon"
                                    onClick={() => {
                                        setIsOpen(true);
                                        setOnClose(false);
                                    }}
                                />
                            ) : (
                                <SquareMinus
                                    className="accordionIcon"
                                    onClick={() => {
                                        setIsOpen(false);
                                        setOnClose(true);
                                    }}
                                />
                            )}
                        </Box>
                        {/* */}
                    </AccordionButton>

                    <AccordionPanel
                        pb={4}
                        backgroundColor="white"
                        border="hidden"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
};
