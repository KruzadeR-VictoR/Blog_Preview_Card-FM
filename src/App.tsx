import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import articeImg from "../src/assets/illustration-article.svg";
import avatarImg from "../src/assets/image-avatar.webp";

function App() {
  return (
    <>
      <Flex
        as="main"
        w={"full"}
        minH={"100vh"}
        justify={"center"}
        align={"center"}
        bg={"Yellow"}
      >
        <Flex
          direction={"column"}
          gap={2}
          border={"1px solid black"}
          p={"1.5rem"}
          bg={"White"}
          maxW={"30rem"}
          rounded={"1.5rem"}
          shadow={"7px 7px hsl(0, 0%, 7%)"}
          transition={"all .3s ease"}
          _hover={{
            boxShadow: "10px 10px hsl(0, 0%, 7%)",
          }}
        >
          {/* card image  */}
          <Image src={articeImg} alt="article img" rounded={"1rem"} />
          {/* caption  */}
          <Text
            textAlign={"center"}
            fontSize={"1rem"}
            fontWeight={800}
            bg={"Yellow"}
            maxW={"6rem"}
            rounded={5}
            p={".2rem"}
            mt={4}
          >
            Learning
          </Text>
          <Text fontWeight={"600"} color={"Black"} mt={1}>
            Published 21 Dec 2023
          </Text>
          <Heading
            fontSize={"1.4rem"}
            fontWeight={800}
            color={"Black"}
            my={2}
            cursor={"pointer"}
            transition={"all .3s ease"}
            _hover={{ color: "Yellow" }}
          >
            HTML & CSS foundations
          </Heading>
          <Text color={"Grey"} maxW={"20rem"}>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </Text>
          {/* User  */}
          <Flex align={"center"} gap={3} mt={2}>
            <Image src={avatarImg} alt="Greg Cooper" width={"2.5rem"} />
            <Heading fontSize={"1rem"}>Greg Hooper</Heading>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
