"use client";
import { SafeUser } from "@/app/types";
import Heading from "../Heading";
import useCountries from "@/app/hooks/useCountries";
import Image from "next/image";
import HeartButton from "@/app/components/HeartButton";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imgSrc: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHead = ({
  title,
  locationValue,
  imgSrc,
  id,
  currentUser,
}: ListingHeadProps) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);
  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <Image alt="Image" src={imgSrc} fill className="object-cover w-full" />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
