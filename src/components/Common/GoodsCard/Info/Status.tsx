import Status from "@/models/Status";
import { FunctionComponent, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  statuses: Status[];
}

const Statuses: FunctionComponent<Props> = function Statuses({ statuses }) {
  return <div></div>;
};

export default Statuses;
