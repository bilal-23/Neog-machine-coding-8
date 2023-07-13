// Meetup Provider
import { Meetup } from "@/types";
import { useState, useEffect, useContext } from "react";
import { meetups as meetupsdata } from "@/data";
import { MeetupContext } from "./meetup-context";

interface Props {
  children: React.ReactNode;
}
export const MeetupContextProvider: React.FC<Props> = ({ children }) => {
  const [meetups, setMeetups] = useState<Meetup[]>([]);
  const [rsvpEvents, setRsvpEvents] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setMeetups(meetupsdata);

    if (searchTerm === "") return setMeetups(meetupsdata);
    else
      setMeetups(
        meetupsdata.filter(
          (meetup: Meetup) =>
            meetup.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            meetup.eventTags.includes(searchTerm.toLowerCase())
        )
      );
  }, [searchTerm]);

  const addRsvpEvent = (eventId: string) => {
    setRsvpEvents([...rsvpEvents, eventId]);
  };

  const value = {
    meetups,
    rsvpEvents,
    setRspvEvent: addRsvpEvent,
    setSearchTerm,
    searchTerm,
  };

  return (
    <MeetupContext.Provider value={value}>{children}</MeetupContext.Provider>
  );
};

export const useMeetupContext = () => useContext(MeetupContext);
