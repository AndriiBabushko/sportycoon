"use client";

import type { JSX } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Paragraph, Heading, Button } from "@sportycoon/ui";
import { TRANSLATES_NAMESPACES, useTranslations } from "@sportycoon/locales";
import { useColorModeValue } from "@admin/components/ui";

export default function Content(): JSX.Element {
  const translateHOME = useTranslations(TRANSLATES_NAMESPACES.HOME);
  const bg = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const featureBg = useColorModeValue("white", "gray.700");
  const aboutBg = useColorModeValue("gray.200", "gray.800");

  return (
    <Box bg={bg} color={textColor} minH="100vh" p={8} borderRadius={8}>
      <Flex
        align="center"
        className="mb-16"
        direction={{ base: "column", md: "row" }}
        gap={8}
        justify="center"
      >
        <Box flex="1" textAlign={{ base: "center", md: "left" }}>
          <Heading as="h2" className="mb-4" headingVariant="montserratBold">
            {translateHOME("HERO.TITLE")}
          </Heading>
          <Paragraph className="mb-8" paragraphVariant="montserrat">
            {translateHOME("HERO.DESCRIPTION")}
          </Paragraph>
          <Button variant="primary" size="lg">
            {translateHOME("HERO.BUTTON")}
          </Button>
        </Box>
        <Image
          alt={translateHOME("HERO.IMAGE_ALT")}
          borderRadius="md"
          className="md:mt-0"
          maxH="400px"
          objectFit="cover"
          src="/images/moodboard.png"
          width={{ base: "100%", md: "50%" }}
        />
      </Flex>

      {/* Features Section */}
      <Box bg={featureBg} borderRadius="md" className="mb-16 p-6">
        <Heading as="h2" className="mb-4" headingVariant="montserratBold">
          {translateHOME("FEATURES.TITLE")}
        </Heading>
        <Paragraph paragraphVariant="montserrat">
          {translateHOME("FEATURES.FEATURE_1")}
        </Paragraph>
        <Paragraph paragraphVariant="montserrat">
          {translateHOME("FEATURES.FEATURE_2")}
        </Paragraph>
        <Paragraph paragraphVariant="montserrat">
          {translateHOME("FEATURES.FEATURE_3")}
        </Paragraph>
        <Paragraph paragraphVariant="montserrat">
          {translateHOME("FEATURES.FEATURE_4")}
        </Paragraph>
      </Box>

      {/* About Us Section */}
      <Flex
        align="center"
        bg={aboutBg}
        borderRadius="md"
        className="mb-16"
        color={textColor}
        direction={{ base: "column", md: "row" }}
        gap={8}
        p={8}
      >
        <Box className="mb-8 md:mb-0" flex="1">
          <Heading as="h2" className="mb-4" headingVariant="montserratBold">
            {translateHOME("ABOUT.TITLE")}
          </Heading>
          <Paragraph paragraphVariant="montserrat">
            {translateHOME("ABOUT.DESCRIPTION")}
          </Paragraph>
        </Box>
        <Image
          alt={translateHOME("ABOUT.IMAGE_ALT")}
          borderRadius="md"
          objectFit="cover"
          src="/images/signboard.png"
          width={{ base: "100%", md: "50%" }}
        />
      </Flex>

      {/* Contact Section */}
      <Box textAlign="center">
        <Heading as="h2" className="mb-4" headingVariant="montserratBold">
          {translateHOME("CONTACT.TITLE")}
        </Heading>
        <Paragraph paragraphVariant="montserrat">
          {translateHOME("CONTACT.EMAIL")}
        </Paragraph>
        <Paragraph paragraphVariant="montserrat">
          {translateHOME("CONTACT.PHONE")}
        </Paragraph>
        <Paragraph paragraphVariant="montserrat">
          {translateHOME("CONTACT.ADDRESS")}
        </Paragraph>
      </Box>
    </Box>
  );
}
