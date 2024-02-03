import InfoBlock from "../../../util/InfoBlock";

const FallbackScreen = () => {
  return (
    <div>
      <InfoBlock infoType="error">
        <p>You Cable disconnecte 😩</p>
      </InfoBlock>
    </div>
  );
};

export default FallbackScreen;
