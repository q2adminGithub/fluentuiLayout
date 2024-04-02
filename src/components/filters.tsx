// import ui libs
import { DatePicker } from "@fluentui/react-datepicker-compat";
import { Field, makeStyles } from "@fluentui/react-components";

// define style
const useStyles = makeStyles({
  control: {
    maxWidth: "300px",
  },
});

// define props
type MyProps = {
  label: string;
  placeholder: string;
}

// define component
export const PickData = ({ label, placeholder }: MyProps) => {
  const styles = useStyles();

  return (
    <Field label={label}>
      <DatePicker
        allowTextInput
        placeholder={placeholder}
        className={styles.control}
      />
    </Field>
  );
};
