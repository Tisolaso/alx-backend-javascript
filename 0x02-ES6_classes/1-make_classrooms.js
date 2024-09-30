import ClassRoom from "./0-classroom.js";

export default function initializeRooms() {
  const classeSizes = [19, 20, 34];

  const classRooms = [];

  classeSizes.forEach((size) => {
    classRooms.push(new ClassRoom(size));
  });

  return classRooms;
}
