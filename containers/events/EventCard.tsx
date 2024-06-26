import Image from 'next/image';
import Link from 'next/link';
import { Card, CardFooter, CardHeader, Button } from '@nextui-org/react';
import { IconEyeOpen, IconHeart } from '@/public/svgs';
import { EventCardProps } from '@/types/event';

export default function EventCard({
  eventId,
  eventCategoryCd,
  latitude,
  longitude,
  placeName,
  streetAddress,
  placeContent,
  placeFollowerCount,
  startDate,
  endDate,
  artistId,
  agencyId,
}: EventCardProps) {
  return (
    <Link href={`events/${eventId}`}>
      <Card
        className="w-[346px] h-[400px] relative rounded-lg mb-5  hover:scale-105 transition-transform duration-300"
        isPressable
        isBlurred
      >
        <CardHeader className="absolute h-[134px] top-0 z-10 flex flex-col items-start bg-background/70 rounded-[20px]">
          <div className="flex justify-end w-full">
            <IconHeart />
          </div>
          <div className="flex flex-col justify-start">
            <p className="w-[134px text-white text-[20px] leading-[normal]">
              드리미스페이스
            </p>
            <p className=" text-highlight">
              {startDate} - {endDate}
            </p>
            <p className=" text-highlight">12:00PM ~ 18:00PM</p>
          </div>
        </CardHeader>

        <Image
          src="/mocks/event_bts.png"
          alt="굿즈 이미지"
          width={340}
          height={400}
          className="rounded-[20px] "
        />

        <CardFooter className="absolute bottom-0 z-10 flex flex-col items-end">
          <div
            className="flex flex-col items-center justify-center p-3 rounded-full bg-background/80 z-15"
            style={{ width: '84px', height: '84px' }}
          >
            <p className="text-white">서울시</p>
            <p className="text-white">동대문구</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
