import StarRating from "../components/StarRating";

export default function StarRatingPage() {
  return (
    <div>
      <StarRating
        maxRating={5}
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        size={40}
        onSetRating={(rating) => console.log(rating)}
      />
      <StarRating size={24} color="red" className="test" defaultRating={2} />
    </div>
  );
}
