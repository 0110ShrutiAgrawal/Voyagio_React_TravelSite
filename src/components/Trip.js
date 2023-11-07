import "./TripStyles.css";
import TripData from "./TripData";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>
        Taking trips opens the door to new experiences, broadens horizons, and
        creates lasting memories.
      </p>
      <div className="tripcard">
        <TripData
          image="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
          heading="India"
          text="
        India, a diverse nation with a rich history and stunning landscapes, offers a tapestry of cultures, languages, and traditions that captivate travelers worldwide."
        />
        <TripData
          image="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          heading="New York"
          text="New York, also known as the Big Apple, is a bustling metropolis renowned for its iconic skyline dominated by skyscrapers like the Empire State Building."
        />
        <TripData
          image="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          heading="Maldives"
          text="The Maldives, a tropical archipelago, is synonymous with pristine beaches, crystal-clear waters, and overwater bungalows that offer a dreamy escape."
        />
      </div>
    </div>
  );
}
export default Trip;
