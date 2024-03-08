import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return signUpUser(firstName, lastName)
    .then((value) => uploadPhoto(fileName))
    .then((value) => console.log(`${value.body} ${value.firstName} ${value.lastName}`))
    .catch(() => console.log('Signup system offline'));
}
