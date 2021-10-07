const style = {
  width: "100%",
  height: "200p",
  backgroundColor: "khaki"
};

export const ChildArea = (props) => {
  const { open } = props;
  return (
    <>
      {open ? (
        <div style={style}>
          <p>コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};
