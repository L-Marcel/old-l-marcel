import { BoxProps, Text } from "@chakra-ui/react";
import Container from "../Container";

function AboutMe({ ...rest }: BoxProps) {
  return (
    <Container withAccordion accordionTitle="Um pouco sobre mim" {...rest}>
      <Text 
        whiteSpace="pre-wrap"
        mr={4}
        fontSize={[12, 16]}
      >
      { `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis dolorum quis quo pariatur commodi alias, blanditiis quaerat ducimus at. Aliquid asperiores exercitationem rerum facilis error similique incidunt voluptate nulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nulla deserunt dolor minima pariatur similique facilis laboriosam! Voluptate repudiandae magnam similique debitis minus voluptatem ea, tempore, quod, aut distinctio at. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ab suscipit placeat est doloribus sit, consectetur expedita. Ipsam eligendi dignissimos sint perspiciatis delectus reiciendis tempora facere sit inventore, autem natus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque perferendis quaerat magnam molestias enim eaque a maxime quo. Beatae magni maiores odio fuga eaque veritatis quod cum recusandae quos accusamus?

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod similique non libero! Quos mollitia harum repudiandae. Tempora harum amet ipsum. Corporis, aperiam sint. Ratione hic minima reiciendis eum accusantium quas!` }
      </Text>
    </Container>
  );
};

export default AboutMe;