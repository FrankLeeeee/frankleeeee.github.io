import contacts from "../../data/contacts";
import Contact from "../Contact";
const Profile = () => {
  return (
    <div className="px-12 flex flex-col items-center justify-center">
      <img
        src="/assets/personal.jpg"
        alt="about"
        className="rounded-lg my-8 md:mt-0 object-scale-down max-h-48 md:max-h-64 lg:max-h-64"
      />
      <div>
        <Contact data={contacts} />
      </div>
    </div>
  );
};

export default Profile;
