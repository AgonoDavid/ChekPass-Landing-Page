export type ButtonProps = {
  label?: string;
  to?: string;
  Click?: (() => void) | string;
  variant?: string;
  icon?: string;
  direction?: string;
};
