import { useMeetupContext } from "@/context/meetup-provider";
import Link from "next/link";

export default function Home() {
  const { meetups } = useMeetupContext();
  return (
    <main className={`flex min-h-screen flex-col  py-24 bg-white px-10`}>
      <h1
        className="
        text-6xl font-bold text-gray-800"
      >
        Meetup Events
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-10 justify-center mt-10">
        {meetups.length === 0 && (
          <p className="text-black text-4xl">No Events</p>
        )}
        {meetups.map((meetup) => {
          return (
            <Link
              key={meetup.id}
              href={`/meetup/${meetup.id}`}
              className="flex flex-col rounded-md max-w-[20rem]"
            >
              <div className="relative  h-auto  object-cover">
                <img
                  alt={meetup.title}
                  src={meetup.eventThumbnail}
                  className="h-30 w-full  rounded-md object-cover "
                />
                <p className="absolute top-2 left-2 border text-black p-1 px-3 text-sm bg-white rounded">
                  {meetup.eventType}
                </p>
              </div>
              <p className="text-black">
                {new Date(meetup.eventStartTime).toDateString() +
                  " " +
                  new Date(meetup.eventStartTime).toLocaleTimeString()}
              </p>
              <p className="text-black text-xl font-bold">{meetup.title}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
