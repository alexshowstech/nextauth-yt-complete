import Head from "next/head";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Auth Ejemplo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="text-center">
          <h3>Pagina de Entrada!</h3>
          <small>{session ? 'Session iniciada con Google': 'Session cerrada'}</small>
        </div>
        <button className="btn btn-primary" onClick={()=>signIn('google')}>Iniciar Session</button>
        <hr />
        <button className="btn btn-danger" onClick={signOut}>Salir de la Session</button>
        <hr />
        <Link href="/dos">Pagina2</Link>
      </div>
    </>
  );
}
