<script setup lang="ts">
import {
  CAccordion,
  CAccordionItem,
  CAccordionButton,
  CAccordionPanel,
  CAccordionIcon,
  CBox,
} from "@chakra-ui/vue-next";
</script>

<template>
  <div>
    <CAccordion allowMultiple>
      <CAccordionItem>
        <h2>
          <CAccordionButton>
            <CBox as="span" flex="1" textAlign="left"> Section 1a title </CBox>
            <CAccordionIcon />
          </CAccordionButton>
        </h2>
        <CAccordionPanel pb="{4}">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </CAccordionPanel>
      </CAccordionItem>

      <CAccordionItem>
        <h2>
          <CAccordionButton>
            <CBox as="span" flex="1" textAlign="left"> Section 2 title </CBox>
            <CAccordionIcon />
          </CAccordionButton>
        </h2>
        <CAccordionPanel pb="{4}">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </CAccordionPanel>
      </CAccordionItem>
    </CAccordion>
  </div>
</template>

<style scoped></style>
