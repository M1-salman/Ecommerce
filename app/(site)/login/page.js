import LoginForm from "../components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { handler } from "../api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(handler);

  if (session) redirect("yourprofile");
  return <LoginForm />;
};

export default page;
