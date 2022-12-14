import { CardGrid } from '@vkontakte/vkui'
import React, { FC } from 'react'
import { LotCard } from '../../components/LotCard/LotCard';
import { Lot } from '../../features/lot';
import { RootStore } from '../../stores/rootStore';

type Props = {
    lotsList: Lot[];
    rootStore: RootStore;
    size: 's' | 'm';
}

export const LotsList: FC<Props> = ({ lotsList, rootStore, size = 's' }) => {
  return (
    <CardGrid size={size}>
        {lotsList.map((lot) => {
            return (<LotCard rootStore={rootStore} key={lot.id} lot={lot} />)
        })}
    </CardGrid>
  )
}
