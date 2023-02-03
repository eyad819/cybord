import './GaimingLibrary.css';
import { GamingLibraryCard, SectionHeader, SectionWrapper } from "../../comp/index";
import GamingLibraryData from "../../Data/GamingLibraryData";

const GaimingLibrary = () => {
  const cards = GamingLibraryData.map((card) => {
    return (
      <GamingLibraryCard
        
        img={card.img}
        title={card.title}
        category={card.category}
        date_added={card.date_added}
        hours_played={card.hours_played}
        download={card.download}
      />
    );
  });

  return (
    <>
      <SectionWrapper>
        <SectionHeader>Gaming Library</SectionHeader>
        <div className="gaming-library-cards">
          {cards}
          </div>
      </SectionWrapper>
    </>
  );
}

export default GaimingLibrary;
