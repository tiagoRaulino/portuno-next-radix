'use client';

import { Heading, Flex, TextField, Box, Button } from '@radix-ui/themes';

function Cadastro() {
    return (
        <Flex
            direction="column"
            justify="center"
            align="center"
            className="p-2 text-white"
            style={{ minHeight: `calc(100vh - 57px)` }}
        >
            <Box className="w-full max-w-md rounded-lg  px-3 pt-20 pb-24 border border-[#3B3D41]">
                <Heading mb="5" size="7" className="text-white mb-24">
                    Faça seu Cadastro
                </Heading>
                <form>
                    <Box mb="3">
                        <TextField.Root size="3"
                            type="text"
                            placeholder="Digite sua matrícula ou Siape">
                        </TextField.Root>
                    </Box>
                    <Box mb="3">
                        <TextField.Root size="3"
                            type="text"
                            placeholder="Digite sua Senha">
                        </TextField.Root>
                    </Box>
                    <Button
                        mt="4"
                        type="submit"
                        size="4"
                        className="w-full mt-4"
                    >
                        Cadastro
                    </Button>
                </form>
            </Box>
        </Flex>
    );
}

export default Cadastro;
