import moment, { Moment } from "moment";
import { HTMLAttributes, PropsWithChildren } from "react";

export type ShowDateProps = {
  date: Date;
  locale: "en-GB" | "es-ES";
} & HTMLAttributes<HTMLDivElement>;

const defaultProps: ShowDateProps = {
  date: new Date(),
  locale: "en-GB"
}

function ShowDate(props: PropsWithChildren<ShowDateProps>): JSX.Element {
  const { date, locale, ...divProps } = props;
  const localedDate: Moment = moment(date).locale(locale); //.format("Mo MMM YYYY");
  return (
    <div {...divProps}>
      <div className={divProps.className ? `${divProps.className}__month` : undefined}>{localedDate.format("MMMM")}</div>
      <div className={divProps.className ? `${divProps.className}__year` : undefined}>{localedDate.format("YYYY")}</div>
      <div className={divProps.className ? `${divProps.className}__day` : undefined}>{localedDate.format("Do")}</div>
    </div>
  );
}

ShowDate.defaultProps = defaultProps;

export default ShowDate;