import { SignIn } from "@clerk/nextjs";

function Sigin() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <SignIn />;
    </div>
  );
}
export default Sigin;
