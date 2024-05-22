interface ListItem {
  id: string;
  title: string;
  img: string;
  bedroom: number;
  bathroom: number;
  price: number;
  address: string;
  latitude: number;
  longitude: number;
}

interface SinglePost {
  id: number;
  title: string;
  price: number;
  images: string[];
  bedRooms: number;
  bathroom: number;
  size: number;
  latitude: number;
  longitude: number;
  city: string;
  address: string;
  school: string;
  bus: string;
  restaurant: string;
  description: string;
}

interface UserData {
  id: number;
  name: string;
  img: string;
}

export const listData: ListItem[] = [
  {
    id: "1",
    title: "A Great Apartment Next to the Beach!",
    img: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bedroom: 2,
    bathroom: 1,
    price: 1000,
    address: "456 Park Avenue, London",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  // More list items...
];

export const singlePostData: SinglePost = {
  id: 1,
  title: "Beautiful Apartment",
  price: 1200,
  images: [
    "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // More image URLs...
  ],
  bedRooms: 2,
  bathroom: 1,
  size: 861,
  latitude: 51.5074,
  longitude: -0.1278,
  city: "London",
  address: "1234 Broadway St",
  school: "250m away",
  bus: "100m away",
  restaurant: "50m away",
  description:
    "Future alike hill pull picture swim magic chain seed engineer nest outer raise bound easy poetry gain loud weigh me recognize farmer bare danger...",
};

export const userData: UserData = {
  id: 1,
  name: "John Doe",
  img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
};
