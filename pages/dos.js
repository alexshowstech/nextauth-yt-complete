import { getSession } from "next-auth/react";

const Principal = () => {
  return (
    <>
      <div className="container text-center">
        <h3>Pagina de objetivo!</h3>
        <small>Pagina #2</small>
      </div>
    </>
  );
};

export default Principal;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
