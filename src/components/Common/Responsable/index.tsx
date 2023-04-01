"use client";
import { media } from "@/styles/screenSizes";

interface Props extends React.PropsWithChildren {
  pc: React.ReactNode;
  tablet: React.ReactNode;
  mobile: React.ReactNode;
}
export default function Responsable({ pc, tablet, mobile }: Props) {
  return (
    <div>
      <div className="pc">{pc}</div>
      <div className="tablet">{tablet}</div>
      <div className="mobile">{mobile}</div>
    </div>
  );
}
