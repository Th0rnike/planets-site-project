import TabContent from "./TabContent";

interface Props {
  activeTab: string;
  planetName: string;
  imageUrl: string;
  handleChange: (val: string) => void;
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
  const {
    activeTab,
    imageUrl,
    planetInfo,
    planetName,
    sourceIcon,
    handleChange,
  } = props;

  return (
    <div>
      <TabContent
        handleChange={handleChange}
        activeTab={activeTab}
        imageUrl={imageUrl}
        planetInfo={planetInfo}
        planetName={planetName}
        sourceIcon={sourceIcon}
      />
    </div>
  );
}
