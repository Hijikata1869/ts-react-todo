export const ColorfulMessage: React.FC<{ color: string; children: string }> = ({
  color,
  children,
}) => {
  console.log("--ColorfulMessage--");
  const contentStyle = {
    color,
    fontSize: "18px",
  };

  return <p style={contentStyle}>{children}</p>;
};
