import Header from "@/components/Header";
import Section from "@/components/Section";
import { PropsWithChildren } from "react";

export default function RecruiltLayout({ children }: PropsWithChildren) {
  <div>
    <Header>회원가입</Header>
    <Section>{children} </Section>
  </div>;
}
