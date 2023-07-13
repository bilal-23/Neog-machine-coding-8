// Meetup Context
import { Meetup } from '@/types';
import { createContext } from 'react';

interface IMeetupContext {
    meetups: Meetup[];
    rsvpEvents: string[];
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
    setRspvEvent: (meetupId: string) => void;
}

export const MeetupContext = createContext<IMeetupContext>({
    meetups: [],
    rsvpEvents: [],
    searchTerm: '',
    setSearchTerm: (searchTerm: string) => { },
    setRspvEvent: (meetupId: string) => { },
});