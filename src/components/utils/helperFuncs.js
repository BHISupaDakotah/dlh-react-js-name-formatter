export default function nameFormatter(fName, lName) {
  let fullName =
    fName.at(0).toUpperCase() +
    fName.slice(1) +
    " " +
    lName.at(0).toUpperCase() +
    lName.slice(1);
  return fullName;
}
