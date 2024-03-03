import { Chip } from '@nextui-org/react';

interface RankItemProps {
  rank: number;
  artist: string;
  change: string | number;
}

export default function RankItem({ rank, artist, change }: RankItemProps) {
  return (
    <div className="w-[330px] flex justify-between items-center">
      <div className="flex gap-5 items-center truncate">
        <Chip
          variant="bordered"
          size="lg"
          className="text-white border-highlight bg-component"
        >
          &ensp;{rank}&ensp;
        </Chip>
        <p className="truncate">{artist}</p>
      </div>
      {change === 'new' ? (
        <p className="text-center w-11 ">NEW</p>
      ) : (
        <p className="text-highlight w-11 text-center">&#9650; {change}</p>
      )}
    </div>
  );
}