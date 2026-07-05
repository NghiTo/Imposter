import { useEffect, useState } from 'react';
import {
  OpenDrawerButton,
  ImposterTag,
  ImposterTags,
  StyledImposterCard,
} from './ImposterCard.style';
import ImposterEditDrawer, {
  getMaxImposterCount,
} from '../ImposterEditDrawer/ImposterEditDrawer';

type ImposterCardProps = {
  playerCount: number;
};

function ImposterCard({ playerCount }: ImposterCardProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [imposterCount, setImposterCount] = useState(1);

  const imposterLabel = imposterCount > 1 ? 'imposters' : 'imposter';

  useEffect(() => {
    const maxImposterCount = getMaxImposterCount(playerCount);
    setImposterCount((prevCount) => Math.min(prevCount, maxImposterCount));
  }, [playerCount]);

  return (
    <>
      <StyledImposterCard
        title="imposter"
        extra={
          <OpenDrawerButton type="text" onClick={() => setIsDrawerOpen(true)}>
            Mở
          </OpenDrawerButton>
        }
      >
        <ImposterTags>
          <ImposterTag>{`${imposterCount} ${imposterLabel}`}</ImposterTag>
        </ImposterTags>
      </StyledImposterCard>

      <ImposterEditDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        playerCount={playerCount}
        selectedCount={imposterCount}
        onSelectCount={setImposterCount}
      />
    </>
  );
}

export default ImposterCard;
