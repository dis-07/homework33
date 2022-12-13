type TitleProps = {
  children: string;
  type: string;
};

const Title = ({ children, type }: TitleProps) => {
  return <p style={{ fontWeight: type }}>{children}</p>;
};

export default Title;
