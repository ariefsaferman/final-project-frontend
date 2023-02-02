export default interface IHouses {
  id: number;
  name: string;
  user_id: number;
  price_per_night: number;
  description: string;
  city_id: number;
  max_guests: number;
  house_photo: IHousesPhoto[];
}

export interface IHousesPhoto {
  id: number;
  house_id: number;
  photo_url: string;
}
