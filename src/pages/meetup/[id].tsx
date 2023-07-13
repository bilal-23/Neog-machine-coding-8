import Form from "@/components/form";
import { useMeetupContext } from "@/context/meetup-provider";
import { Meetup } from "@/types";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Meetup: NextPage = () => {
  const { meetups, rsvpEvents, setRspvEvent } = useMeetupContext();
  const [meetup, setMeetup] = useState<Meetup | null>(null);
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  const isMeetupStarted = new Date(meetup?.eventStartTime || "") < new Date();

  useEffect(() => {
    const { id } = router.query;
    if (id && meetups) {
      const meetup = meetups.find((meetup) => meetup.id === id);
      if (meetup) {
        setMeetup(meetup);
      }
    }
  }, [meetup, router.query]);

  const handleRsvp = (name: string, email: string) => {
    if (!meetup) return;
    setRspvEvent(meetup.id);
    setShowForm(false);
  };

  return (
    <div className="bg-slate-100 h-full  flex-col md:flex-row flex justify-between">
      {showForm && (
        <Form onSubmit={handleRsvp} closeForm={() => setShowForm(false)} />
      )}
      {meetup && (
        <div className="w-full md:w-[70%] border flex flex-col items-start text-black p-12">
          <h1 className="text-3xl font-bold">{meetup.title}</h1>
          <p className="flex flex-col mt-4">
            <span className="text-gray-400">Hosted by</span>
            <span className="text-black font-semibold">{meetup.hostedBy}</span>
          </p>
          <img
            src={meetup.eventThumbnail}
            className="h-30 w-full max-w-[30rem]   rounded-md object-cover mt-4"
          />
          <div className={`mt-4 flex flex-col`}>
            <p className="text-black font-bold text-xl">Details</p>
            <p className="text-sm mt-4 max-w-[50rem]">
              {meetup.eventDescription}
            </p>
          </div>
          <p className="text-black font-bold text-xl mt-4">
            Additional Information
          </p>
          <p className="flex gap-4 mt-2">
            <span className="font-semibold">Dress Code:</span>
            <span className="">{meetup.additionalInformation.dressCode}</span>
          </p>
          <p className="flex gap-4 mt-2">
            <span className="font-semibold">Age Restrictions:</span>
            <span className="">
              {meetup.additionalInformation.ageRestrictions}
            </span>
          </p>
          <div className="flex flex-row gap-4 mt-4">
            {meetup.eventTags.map((tag) => {
              return (
                <p className="flex gap-4 mt-2 capitalize border px-5 py-2 rounded-xl bg-red-500 text-white">
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
      )}
      {meetup && (
        <div className="border-red border w-full md:w-[30%] p-10 flex flex-col">
          <div className="flex flex-col gap-5 border px-5 py-5 rounded-md bg-white">
            <div className="flex flex-row items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] h-auto"
                viewBox="0 0 50 50"
              >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z" />
              </svg>
              <div>
                <p className="text-black">
                  {new Date(meetup.eventStartTime).toDateString() +
                    " " +
                    new Date(meetup.eventStartTime).toLocaleTimeString()}{" "}
                  to
                </p>
                <p className="text-black">
                  {new Date(meetup.eventEndTime).toDateString() +
                    " " +
                    new Date(meetup.eventEndTime).toLocaleTimeString()}{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="w-[20px] h-auto"
              >
                <path d="M 25 1 C 16.160156 1 9 8.160156 9 17 C 9 24.308594 12.859375 32.164063 16.65625 38.25 C 20.453125 44.335938 24.25 48.65625 24.25 48.65625 C 24.441406 48.871094 24.714844 48.996094 25 48.996094 C 25.285156 48.996094 25.558594 48.871094 25.75 48.65625 C 25.75 48.65625 29.550781 44.246094 33.34375 38.125 C 37.136719 32.003906 41 24.167969 41 17 C 41 8.160156 33.839844 1 25 1 Z M 25 3 C 32.761719 3 39 9.238281 39 17 C 39 23.433594 35.363281 31.082031 31.65625 37.0625 C 28.550781 42.074219 25.921875 45.300781 25 46.40625 C 24.070313 45.308594 21.441406 42.152344 18.34375 37.1875 C 14.640625 31.25 11 23.589844 11 17 C 11 9.238281 17.238281 3 25 3 Z M 25 11 C 21.144531 11 18 14.144531 18 18 C 18 21.855469 21.144531 25 25 25 C 28.855469 25 32 21.855469 32 18 C 32 14.144531 28.855469 11 25 11 Z M 25 13 C 27.773438 13 30 15.226563 30 18 C 30 20.773438 27.773438 23 25 23 C 22.226563 23 20 20.773438 20 18 C 20 15.226563 22.226563 13 25 13 Z" />
              </svg>
              <div>
                <address className="text-black font-normal">
                  {meetup.location} <br />
                  {meetup.address}
                </address>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="w-[20px] h-auto"
              >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 17 14 L 17 16 L 24 16 C 26.983865 16 29.436203 18.155356 29.910156 21 L 17 21 L 17 23 L 29.910156 23 C 29.436203 25.844644 26.983865 28 24 28 L 17 28 L 17 30.474609 L 28.367188 39.773438 L 29.632812 38.226562 L 19.580078 30 L 24 30 C 28.052135 30 31.281986 26.915394 31.796875 23 L 32 23 L 35 23 L 35 21 L 31.931641 21 C 31.68211 19.016999 30.702761 17.259475 29.271484 16 L 35 16 L 35 14 L 24 14 L 17 14 z" />
              </svg>
              <div>
                <p className="text-black font-normal">{meetup.price}</p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-black">
            <p className="text-2xl font-semibold">
              Speakers: ({meetup.speakers.length})
            </p>
            <div className="flex flex-row flex-wrap justify-start gap-5 mt-4">
              {meetup.speakers.map((speaker, index) => {
                return (
                  <div
                    key={speaker.name}
                    className="bg-white px-5 py-5 rounded w-[10rem]"
                  >
                    <div className=" flex justify-center">
                      <img
                        src={speaker.image}
                        className="w-[80px] h-[80px] object-cover rounded-full"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="font-bold text-center">{speaker.name}</p>
                      <p className="text-center">{speaker.designation}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {!isMeetupStarted && !rsvpEvents.includes(meetup.id) && (
            <button
              className=" capitalize border px-5 py-2 rounded-xl bg-red-500 text-white justify-center mt-10 inline-block"
              onClick={() => setShowForm(true)}
            >
              RSVP
            </button>
          )}
          {!isMeetupStarted && rsvpEvents.includes(meetup.id) && (
            <button className=" capitalize border px-5 py-2 rounded-xl bg-red-500 text-white justify-center mt-10 inline-block">
              Already RSVPed
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Meetup;
