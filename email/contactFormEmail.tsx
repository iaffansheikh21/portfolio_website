import { contactFormEmailProps } from '@/app/commonTypes'
import React from 'react';
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
import { Tailwind } from '@react-email/components';
export default function ContactFormEmail({message , senderEmail} : contactFormEmailProps) {
  return (
    <Html>
    <Head />
    <Preview>New message from your portfolio site</Preview>
    <Tailwind>
      <Body className="bg-gray-100 text-black">
        <Container>
          <Section className="bg-white border border-gray-300 shadow-lg my-10 p-8 rounded-md">
            <Heading className="text-2xl font-semibold mb-4">
              You received the following message from the contact Form
            </Heading>
            <Text className="text-lg mb-4">{message}</Text>
            <Hr className="border-t border-gray-400 my-6" />
            <Text className="text-gray-600">The sender's email is: {senderEmail}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
  

  )
}
