import { SignUp } from "@clerk/nextjs";

function Signup() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <SignUp />;
    </div>
  );
}
export default Signup;
