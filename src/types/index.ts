export interface Meetup {
    id: string;
    title: string;
    eventStartTime: Date;
    eventEndTime: Date;
    location: string;
    address: string;
    eventThumbnail: string;
    eventDescription: string;
    hostedBy: string;
    eventType: string;
    isPaid: boolean;
    eventTags: string[];
    speakers: Speaker[];
    price: string;
    additionalInformation: {
        dressCode: string;
        ageRestrictions: string;
    };
}

interface Speaker {
    name: string;
    image: string;
    designation: string;
}