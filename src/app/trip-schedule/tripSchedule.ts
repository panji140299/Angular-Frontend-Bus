export interface TripSchedule{
    id: number;
    fare: number;
    tripDate: string;
    availableSeat: number;
    tripDetail: string;
    ticketSold: number;
    trip_id: number;
    agency_id: number;
    sourcestop: number;
    deststop: number;
}