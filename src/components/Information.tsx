import TabContent from "./TabContent";

interface Props {
  activeTab: string;
  planetName: string;
  imageUrl: string;
  planetInfo: {
    name: string;
    overview: {
      content: string;
      source: string;
    };
    structure: {
      content: string;
      source: string;
    };
    geology: {
      content: string;
      source: string;
    };
  };
  sourceIcon: string;
}

export default function Information(props: Props) {
  const { activeTab, imageUrl, planetInfo, planetName, sourceIcon } = props;

  return (
    <div>
      <TabContent
        activeTab={activeTab}
        imageUrl={imageUrl}
        planetInfo={planetInfo}
        planetName={planetName}
        sourceIcon={sourceIcon}
      />
    </div>
  );
}
