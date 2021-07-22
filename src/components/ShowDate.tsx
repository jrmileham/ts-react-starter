import moment from "moment";
import { PropsWithChildren } from "react";

export type ShowDateProps = {
  date: Date;
  locale: "en-GB" | "es-ES";
}
const defaultProps: ShowDateProps = {
  date: new Date(),
  locale: "en-GB"
}

function ShowDate(props: PropsWithChildren<ShowDateProps>): JSX.Element {
  return <div>{moment(props.date).locale(props.locale).format("Mo MMM YYYY")}</div>;
}

ShowDate.defaultProps = defaultProps;

export default ShowDate;