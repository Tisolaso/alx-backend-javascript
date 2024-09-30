import ClassRoom from "./0-classroom.js";

function initializeRooms() {
  const classeSizes = [19, 20, 34];

  const classRooms = [];

  classeSizes.forEach((size) => {
    classRooms.push(new ClassRoom(size));
  });

  return classRooms;
}

console.log(initializeRooms());
