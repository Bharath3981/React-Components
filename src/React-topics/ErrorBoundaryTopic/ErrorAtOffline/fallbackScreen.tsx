import InfoBlock from "../../../util/InfoBlock";

const FallBackScreen = () => {
  return (
    <div>
      <InfoBlock infoType="error">
        <p>Your Cable disconnecte 😩</p>
      </InfoBlock>
    </div>
  );
};

export default FallBackScreen;
