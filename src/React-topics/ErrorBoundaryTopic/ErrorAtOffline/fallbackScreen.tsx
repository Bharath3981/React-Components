import InfoBlock from "../../../util/InfoBlock";

const fallbackScreen = () => {
  return (
    <InfoBlock infoType="error">
      <p className="description">
        You are offline and your cable got disconnected it seems{" "}
      </p>
    </InfoBlock>
  );
};

export default fallbackScreen;
